function parseCounterText(text) {
  if (!text) {
    return null;
  }
  const trimmed = text.trim();
  const pattern = /^([^\d]*?)(\d[\d,]*(?:\.\d+)?)([^\d]*)$/;
  const match = trimmed.match(pattern);
  if (!match) {
    return null;
  }
  const prefix = match[1] || "";
  const numberPart = match[2];
  const suffix = match[3] || "";
  const hasComma = numberPart.includes(",");
  const decimals = numberPart.includes(".") ? numberPart.split(".")[1].length : 0;
  const target = parseFloat(numberPart.replace(/,/g, ""));
  return isNaN(target)
    ? null
    : {
        prefix,
        target,
        suffix,
        hasComma,
        decimals,
        original: trimmed,
      };
}
function getCounterConfig(element) {
  if (element.hasAttribute("data-counter")) {
    const counterValue = element.getAttribute("data-counter");
    const target = parseFloat(counterValue.replace(/,/g, ""));
    if (!isNaN(target)) {
      const prefix = element.getAttribute("data-prefix") || "";
      const suffix = element.getAttribute("data-suffix") || "";
      const hasComma =
        element.getAttribute("data-comma") === "true" ||
        counterValue.includes(",") ||
        target >= 1e3;
      const original = element.getAttribute("data-original-text") || element.textContent.trim();
      return {
        prefix,
        target,
        suffix,
        hasComma,
        decimals: 0,
        original,
      };
    }
  }
  const originalText = element.getAttribute("data-original-text") || element.textContent.trim();
  return parseCounterText(originalText);
}
function animateCounter(element, config, duration = 2600) {
  if (!element || !config || element.dataset.animating === "true") {
    return;
  }
  element.dataset.animating = "true";
  element.dataset.counterAnimated = "true";
  const { prefix, target, suffix, hasComma, decimals, original } = config;
  const rect = element.getBoundingClientRect();
  if (rect.width > 0 && !element.style.minWidth) {
    element.style.minWidth = `${Math.ceil(rect.width)}px`;
    element.style.display = "inline-block";
  }
  const startValue = 0;
  let startTime = null;
  let frameId;
  function step(now) {
    if (!startTime) {
      startTime = now;
    }
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = startValue + (target - startValue) * eased;
    let display;
    if (decimals > 0) {
      display = current.toFixed(decimals);
    } else {
      const rounded = Math.round(current);
      display = hasComma ? rounded.toLocaleString("en-US") : rounded.toString();
    }
    element.textContent = `${prefix}${display}${suffix}`;
    if (progress < 1) {
      frameId = requestAnimationFrame(step);
      element._counterAnimId = frameId;
    } else {
      element.textContent = original;
      element.dataset.animating = "false";
      element._counterAnimId = null;
    }
  }
  frameId = requestAnimationFrame(step);
  element._counterAnimId = frameId;
}
function resetCounter(element, config) {
  if (element._counterAnimId) {
    cancelAnimationFrame(element._counterAnimId);
    element._counterAnimId = null;
  }
  element.dataset.animating = "false";
  element.dataset.counterAnimated = "false";
  const { prefix, suffix, decimals } = config;
  const zero = decimals > 0 ? (0).toFixed(decimals) : "0";
  element.textContent = `${prefix}${zero}${suffix}`;
}
export function initCounterAnimations() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }
  const selector = [
    "[data-counter]",
    ".stat-counter",
    ".markers strong",
    ".story-metric strong",
    ".about-metric strong",
    ".numbers-wall strong",
    ".sustain-nums strong",
    ".training-stat strong",
    ".training-stat b",
    ".nums strong",
    ".nums .num strong",
    '[class*="-nums"] b',
    '[class*="-nums"] strong',
    '[class*="-nums"] span.num',
    '[class*="-stat"] b',
    '[class*="-stat"] strong',
    '[class*="-metrics"] strong',
    '[class*="-metric"] strong',
    '[class*="-metric"] b',
    ".proof-metric strong",
    ".cwb-stat b",
    ".rec-kpi b",
    ".rec-kpis b",
    ".perf-metric strong",
    ".sc-vb b",
    ".bpr-vb b",
    ".pm-cr i",
    ".pm-ev .pm-n",
    ".stat strong",
    ".stat b",
    ".stat-val",
    ".metric-val",
    ".kpi-val",
  ].join(", ");
  const elements = Array.from(document.querySelectorAll(selector));
  const counters = [];
  elements.forEach((element) => {
    if (!element.getAttribute("data-original-text")) {
      const text = element.textContent.trim();
      if (element.hasAttribute("data-counter") || /\d/.test(text)) {
        element.setAttribute("data-original-text", text);
      }
    }
    const config = getCounterConfig(element);
    if (config && config.target > 0) {
      counters.push({
        el: element,
        config,
      });
      const rect = element.getBoundingClientRect();
      if (rect.width > 0 && !element.style.minWidth) {
        element.style.minWidth = `${Math.ceil(rect.width)}px`;
        element.style.display = "inline-block";
      }
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (!(rect.top < viewportHeight * 0.9 && rect.bottom > 30)) {
        const { prefix, suffix, decimals } = config;
        const zero = decimals > 0 ? (0).toFixed(decimals) : "0";
        element.textContent = `${prefix}${zero}${suffix}`;
        element.dataset.counterAnimated = "false";
      }
    }
  });
  if (!counters.length) {
    return () => {};
  }
  const checkCounters = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    counters.forEach(({ el, config }) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.92 && rect.bottom > 20) {
        if (el.dataset.animating !== "true" && el.dataset.counterAnimated !== "true") {
          animateCounter(el, config, 2600);
        }
      } else {
        if (
          (rect.top > viewportHeight || rect.bottom < -60) &&
          el.dataset.counterAnimated === "true" &&
          el.dataset.animating !== "true"
        ) {
          resetCounter(el, config);
        }
      }
    });
  };
  window.addEventListener("scroll", checkCounters, {
    passive: true,
  });
  window.addEventListener("resize", checkCounters, {
    passive: true,
  });
  const initialTimer = setTimeout(checkCounters, 100);
  return () => {
    window.removeEventListener("scroll", checkCounters);
    window.removeEventListener("resize", checkCounters);
    clearTimeout(initialTimer);
  };
}
