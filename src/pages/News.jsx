import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
const categories = [
  "All",
  "Quality Management",
  "ISO Standards",
  "Compliance",
  "Sustainability",
  "Training",
  "Wellbeing",
  "Company News",
];
const featuredArticle = {
  tag: "Featured · Quality Management",
  date: "15 Oct 2026",
  dateTime: "2026-10-15",
  title: "Sample: Turning management system requirements into everyday practice",
  excerpt:
    "Learn how leading organizations move beyond compliance checklists to embed international standards directly into daily operational workflows, enhancing consistency and driving measurable business performance.",
  image:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80",
  link: "/contact-us",
};
const articles = [
  {
    id: "art-1",
    category: "ISO Standards",
    date: "2 Oct 2026",
    dateTime: "2026-10-02",
    title: "Sample: What to expect from an internal audit",
    excerpt:
      "Key stages and essential documentation required when conducting structured quality and safety management audits.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80",
    link: "/services#compliance",
  },
  {
    id: "art-2",
    category: "Compliance",
    date: "24 Sep 2026",
    dateTime: "2026-10-24",
    title: "Sample: How to approach a compliance gap assessment",
    excerpt:
      "A practical roadmap for evaluating your operational readiness against changing regulatory and statutory requirements.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    link: "/services#compliance",
  },
  {
    id: "art-3",
    category: "Sustainability",
    date: "18 Sep 2026",
    dateTime: "2026-09-18",
    title: "Sample: Where to start with environmental priorities",
    excerpt:
      "Identifying material carbon emission sources and integrating ISO 14001 principles into company objectives.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    link: "/services#sustainability",
  },
  {
    id: "art-4",
    category: "Training",
    date: "8 Sep 2026",
    dateTime: "2026-09-08",
    title: "Sample: Choosing the right training for your role",
    excerpt:
      "An overview of Lead Auditor, Internal Auditor, and workforce competence programmes tailored for career progression.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    link: "/services#training",
  },
  {
    id: "art-5",
    category: "Wellbeing",
    date: "28 Aug 2026",
    dateTime: "2026-08-28",
    title: "Sample: Building a more supportive workplace",
    excerpt:
      "Practical strategies for reducing stress, improving work-life balance, and fostering organizational resilience.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    link: "/services#wellbeing",
  },
  {
    id: "art-6",
    category: "Company News",
    date: "12 Aug 2026",
    dateTime: "2026-08-12",
    title: "Sample: Company announcement headline",
    excerpt:
      "Meridian expands certified delivery programmes across the Middle East with new accredited qualification cohorts.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    link: "/about-us",
  },
  {
    id: "art-7",
    category: "Quality Management",
    date: "30 Jul 2026",
    dateTime: "2026-07-30",
    title: "Sample: Practical ways to improve process consistency",
    excerpt:
      "How standardized operating procedures and continuous improvement tools reduce rework and customer complaints.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
    link: "/services#advisory",
  },
  {
    id: "art-8",
    category: "ISO Standards",
    date: "14 Jul 2026",
    dateTime: "2026-07-14",
    title: "Sample: Getting ready for certification",
    excerpt:
      "Step-by-step guidance on closing corrective actions, conducting management reviews, and facing registrar stage 2 audits.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80",
    link: "/services#compliance",
  },
  {
    id: "art-9",
    category: "Compliance",
    date: "30 Jun 2026",
    dateTime: "2026-06-30",
    title: "Sample: Strengthening risk controls",
    excerpt:
      "Methods to align operational safety hazards with ISO 45001 and API Q1/Q2 risk-based management matrices.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    link: "/services#compliance",
  },
];
export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const filteredArticles = useMemo(
    () =>
      articles.filter((article) => {
        const matchesCategory = activeCategory === "All" || article.category === activeCategory;
        const matchesSearch = `${article.title} ${article.category} ${article.excerpt}`
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [activeCategory, searchQuery],
  );
  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;
  const selectCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setVisibleCount(6);
  };
  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  const showFeatured =
    (activeCategory === "All" || activeCategory === "Quality Management") &&
    (searchQuery.trim() === "" ||
      `${featuredArticle.title} ${featuredArticle.excerpt}`
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase()));
  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="wrap">
          <span className="eyebrow">{"News & Articles"}</span>
          <h1>
            {"Insights for "}
            <em>stronger systems.</em>
          </h1>
          <p className="lead">
            Updates, practical guidance and perspectives on quality management, standards,
            compliance, sustainability, training and workplace wellbeing.
          </p>
        </div>
      </section>
      <div className="wrap news-content-area">
        <div className="news-tools" role="group" aria-label="Categories and search">
          <div className="news-filters" role="group" aria-label="Categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="news-search">
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={"Search articles & topics…"}
              aria-label="Search articles"
            />
          </div>
        </div>
        {showFeatured && (
          <article className="news-feature">
            <div className="p-img">
              <img src={featuredArticle.image} alt={featuredArticle.title} />
            </div>
            <div className="p-body">
              <div className="meta">
                <span className="tag">{featuredArticle.tag}</span>
                <time dateTime={featuredArticle.dateTime}>{featuredArticle.date}</time>
              </div>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <Link className="more" to={featuredArticle.link}>
                Read the article
              </Link>
            </div>
          </article>
        )}
        <p className="news-count" aria-live="polite">
          {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "article found" : "articles found"}
        </p>
        {filteredArticles.length > 0 ? (
          <div className="news-grid-layout">
            {visibleArticles.map((visibleArticle) => (
              <article key={visibleArticle.id} className="article-post">
                <div className="p-img">
                  <img src={visibleArticle.image} alt={visibleArticle.title} loading="lazy" />
                </div>
                <div className="p-body">
                  <div className="meta">
                    <span className="tag">{visibleArticle.category}</span>
                    <time dateTime={visibleArticle.dateTime}>{visibleArticle.date}</time>
                  </div>
                  <h3>{visibleArticle.title}</h3>
                  <p>{visibleArticle.excerpt}</p>
                  <Link className="more" to={visibleArticle.link}>
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="news-empty">
            No articles match your search. Try a different keyword or category.
          </p>
        )}
        {hasMore && (
          <div className="news-loadmore">
            <button className="btn" type="button" onClick={loadMore}>
              {"Load more articles "}
              <i>↓</i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
