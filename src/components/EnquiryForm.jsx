import { useState } from "react";

const ENQUIRY_EMAIL = "info@meqmp.com";

// Field types: "text" | "email" | "tel" | "textarea" | "select"
export const DEFAULT_FIELDS = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "phone", label: "Phone Number", type: "tel", required: true, autoComplete: "tel" },
  { name: "email", label: "Email Address", type: "email", required: true, autoComplete: "email" },
  { name: "subject", label: "Subject" },
  { name: "message", label: "Your Message", type: "textarea", required: true, full: true },
];

// A validated enquiry form. Submitting opens the visitor's email app with the
// enquiry addressed to Meridian (the site has no server-side form handler).
export default function EnquiryForm({
  fields = DEFAULT_FIELDS,
  submitLabel = "Send Enquiry",
  subjectPrefix = "Website enquiry",
  title,
  className = "",
}) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(
      fields.map((field) => [field.name, field.type === "select" ? field.options[0] : ""]),
    ),
  );
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });

  const update = (name) => (event) => setValues({ ...values, [name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (trap) {
      return; // filled-in hidden field: most likely an automated submission
    }
    const missing = fields.find((field) => field.required && !String(values[field.name]).trim());
    if (missing) {
      setStatus({ type: "error", text: `Please complete the "${missing.label}" field.` });
      return;
    }
    const emailField = fields.find((field) => field.type === "email");
    if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values[emailField.name].trim())) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    const subjectValue = values.subject?.trim();
    const subject = subjectValue ? `${subjectPrefix}: ${subjectValue}` : subjectPrefix;
    const body = fields
      .filter((field) => field.name !== "message")
      .map((field) => `${field.label}: ${String(values[field.name]).trim() || "Not provided"}`)
      .concat(["", String(values.message || "").trim()])
      .join("\n");
    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus({
      type: "success",
      text: `Thank you. Your email app should now open with this enquiry addressed to ${ENQUIRY_EMAIL}. Press send to deliver it.`,
    });
  };

  return (
    <form className={`enq-form ${className}`} onSubmit={handleSubmit} noValidate>
      {title && <div className="enq-form-title">{title}</div>}
      <div className="enq-grid">
        {fields.map((field) => {
          const id = `enq-${field.name}`;
          const label = (
            <label htmlFor={id}>
              {field.label}
              {field.required && " *"}
            </label>
          );
          let control;
          if (field.type === "textarea") {
            control = (
              <textarea
                id={id}
                rows={4}
                value={values[field.name]}
                onChange={update(field.name)}
                required={field.required}
                placeholder={field.placeholder}
              />
            );
          } else if (field.type === "select") {
            control = (
              <select id={id} value={values[field.name]} onChange={update(field.name)}>
                {field.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            );
          } else {
            control = (
              <input
                id={id}
                type={field.type || "text"}
                value={values[field.name]}
                onChange={update(field.name)}
                required={field.required}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
              />
            );
          }
          return (
            <div key={field.name} className={`enq-field${field.full ? " enq-full" : ""}`}>
              {label}
              {control}
            </div>
          );
        })}
        <div className="enq-trap" aria-hidden="true">
          <label htmlFor="enq-website">Website</label>
          <input
            id="enq-website"
            tabIndex={-1}
            autoComplete="off"
            value={trap}
            onChange={(event) => setTrap(event.target.value)}
          />
        </div>
      </div>
      <button className="enq-submit" type="submit">
        {submitLabel} <span aria-hidden="true">↗</span>
      </button>
      <p className="enq-privacy">
        Your details are used only to respond to this enquiry.
      </p>
      {status.text && (
        <p className={`enq-status enq-${status.type}`} role="status" aria-live="polite">
          {status.text}
        </p>
      )}
    </form>
  );
}
