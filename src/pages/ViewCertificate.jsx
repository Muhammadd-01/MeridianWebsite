import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
const certificates = {
  "MQ-2026-0001": {
    number: "MQ-2026-0001",
    name: "Tariq Al-Mansoor",
    programme: "ISO 9001:2015 Lead Auditor",
    issued: "2026-03-14",
    expires: "2029-03-14",
    revoked: false,
    issuedBy: "Meridian Quality Management Professionals",
    grade: "Passed with Distinction",
    accreditation: "TVTC & IRCA Recognized",
  },
  "MQ-2024-0420": {
    number: "MQ-2024-0420",
    name: "Sultan Bin Rashid",
    programme: "ISO 45001:2018 Internal Auditor",
    issued: "2024-05-01",
    expires: "2025-05-01",
    revoked: false,
    issuedBy: "Meridian Quality Management Professionals",
    grade: "Successfully Completed",
    accreditation: "Highfield Approved Scope",
  },
  "MQ-2025-0099": {
    number: "MQ-2025-0099",
    name: "Khaled Al-Ghamdi",
    programme: "ISO 14001:2015 Awareness",
    issued: "2025-02-10",
    expires: "",
    revoked: true,
    issuedBy: "Meridian Quality Management Professionals",
    grade: "Revoked by Issuing Authority",
    accreditation: "Cancelled",
  },
};
export default function ViewCertificate() {
  const [searchParams] = useSearchParams();
  const [certNumber, setCertNumber] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");
  const [certificate, setCertificate] = useState(null);
  const resultRef = useRef(null);
  const formatDate = (dateString) => {
    if (!dateString) {
      return "—";
    }
    const date = new Date(dateString + "T00:00:00");
    return isNaN(date.getTime())
      ? dateString
      : date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
  };
  const getStatus = (cert) =>
    cert.revoked
      ? {
          key: "revoked",
          text: "Revoked",
        }
      : cert.expires && new Date(cert.expires + "T23:59:59") < new Date()
        ? {
            key: "expired",
            text: "Expired",
          }
        : {
            key: "valid",
            text: "Valid & Verified",
          };
  const verifyCertificate = async (input) => {
    const normalized = input.trim().toUpperCase().replace(/\s+/g, "");
    setError("");
    setCertificate(null);
    if (!normalized) {
      setError("Please enter your certificate number.");
      return;
    }
    if (!/^[A-Z0-9][A-Z0-9\-\/_.]{3,39}$/.test(normalized)) {
      setError("That doesn’t look like a valid certificate number. Please check it and try again.");
      return;
    }
    setIsVerifying(true);
    setTimeout(() => {
      const match = certificates[normalized];
      setIsVerifying(false);
      if (match) {
        setCertificate(match);
        setTimeout(() => {
          if (resultRef.current) {
            resultRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      } else {
        setError(
          `No certificate was found for “${normalized}”. Please verify the number from your document or contact support.`,
        );
      }
    }, 550);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    verifyCertificate(certNumber);
  };
  const tryExample = (sample) => {
    setCertNumber(sample);
    verifyCertificate(sample);
  };
  useEffect(() => {
    const certParam = searchParams.get("cert");
    if (certParam) {
      setCertNumber(certParam);
      verifyCertificate(certParam);
    }
  }, [searchParams]);
  const status = certificate ? getStatus(certificate) : null;
  return (
    <div className="cert-page">
      <section className="cert-hero">
        <div className="wrap">
          <span className="eyebrow">Certificate Verification</span>
          <h1>
            {"View your "}
            <em>certificate.</em>
          </h1>
          <p className="lead">
            Enter your certificate number to check its status, see the certificate details and view
            or download the verification record.
          </p>
          <div className="lookup">
            <form onSubmit={handleSubmit} noValidate>
              <div className="lookup-box">
                <input
                  id="certInput"
                  name="certInput"
                  type="text"
                  value={certNumber}
                  onChange={(event) => setCertNumber(event.target.value)}
                  placeholder="ENTER YOUR CERTIFICATE NUMBER (E.G. MQ-2026-0001)"
                  autoComplete="off"
                  spellCheck="false"
                  required
                />
                <button className="cert-btn" type="submit" disabled={isVerifying}>
                  {isVerifying ? "Verifying…" : "View Certificate"} <i>↗</i>
                </button>
              </div>
            </form>
            <p className="hint">
              Demo sample numbers:{" "}
              <code onClick={() => tryExample("MQ-2026-0001")}>MQ-2026-0001</code>
              <code onClick={() => tryExample("MQ-2024-0420")}>MQ-2024-0420</code>
              <code onClick={() => tryExample("MQ-2025-0099")}>MQ-2025-0099</code>
            </p>
            {isVerifying && (
              <div className="msg info">
                <span className="spin" />
                <span>Checking records against Meridian official registry…</span>
              </div>
            )}
            {error && (
              <div className="msg err">
                <span>✕</span>
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>
      </section>
      {certificate && status && (
        <div className="wrap result-wrap" ref={resultRef}>
          <div className="result">
            <article className="dark-card">
              <span className={`badge ${status.key}`}>{status.text}</span>
              <h2>{certificate.name}</h2>
              <p className="sub">{certificate.programme}</p>
              <dl>
                <div>
                  <dt>Certificate Number</dt>
                  <dd>{certificate.number}</dd>
                </div>
                <div>
                  <dt>Programme</dt>
                  <dd>{certificate.programme}</dd>
                </div>
                <div>
                  <dt>Assessment Grade</dt>
                  <dd>{certificate.grade}</dd>
                </div>
                <div>
                  <dt>Accreditation</dt>
                  <dd>{certificate.accreditation}</dd>
                </div>
                <div>
                  <dt>Issue Date</dt>
                  <dd>{formatDate(certificate.issued)}</dd>
                </div>
                <div>
                  <dt>Valid Until</dt>
                  <dd>
                    {certificate.expires
                      ? formatDate(certificate.expires)
                      : certificate.revoked
                        ? "Revoked"
                        : "Lifetime Validity"}
                  </dd>
                </div>
                <div>
                  <dt>Issued By</dt>
                  <dd>{certificate.issuedBy}</dd>
                </div>
              </dl>
              <div className="actions">
                {certificate.revoked ? (
                  <p
                    style={{
                      color: "#FBE1DF",
                      fontSize: "13px",
                      margin: 0,
                      fontWeight: 700,
                    }}
                  >
                    Notice: This certificate has been revoked and is no longer valid for official
                    submissions.
                  </p>
                ) : (
                  <>
                    <button
                      className="cert-btn light"
                      onClick={() =>
                        alert(
                          `Certificate ${certificate.number} official PDF verification document generated.`,
                        )
                      }
                    >
                      {"Download Record "}
                      <i>↓</i>
                    </button>
                    <button className="cert-btn ghost-d" onClick={() => window.print()}>
                      {"Print Document "}
                      <i>↗</i>
                    </button>
                  </>
                )}
              </div>
            </article>
            <section className="pdf-card" aria-label="Certificate Preview">
              <div className="pdf-bar">
                <strong>Certificate Verification Document</strong>
                <button type="button" onClick={() => window.print()}>
                  Print Full Size
                </button>
              </div>
              <div className="simulated-cert">
                <div className="simulated-cert-watermark">M</div>
                <div className="cert-header-sim">
                  <h4>MERIDIAN QUALITY MANAGEMENT PROFESSIONALS</h4>
                  <p>{"Certificate of Training & Competence"}</p>
                </div>
                <div className="cert-body-sim">
                  <div className="lead-to">This certifies that</div>
                  <div className="cert-recipient">{certificate.name}</div>
                  <div className="cert-for">
                    has successfully satisfied all training, practical assessment and examination
                    requirements for
                  </div>
                  <div className="cert-prog">{certificate.programme}</div>
                </div>
                <div className="cert-foot-sim">
                  <div>
                    <div>
                      <strong>Certificate ID:</strong> {certificate.number}
                    </div>
                    <div>
                      <strong>Date of Issue:</strong> {formatDate(certificate.issued)}
                    </div>
                    <div>
                      <strong>Registry Scope:</strong>
                      {" TVTC Foreign Registered Centre"}
                    </div>
                  </div>
                  <div className="cert-seal">
                    Official
                    <br />
                    Seal
                  </div>
                </div>
              </div>
              <p className="pdf-note">
                Official encrypted digital verification ID issued by Meridian Quality Management
                Professionals.
              </p>
            </section>
          </div>
          <p className="verify-note">
            Information shown is read directly from Meridian's certificate records. For any
            discrepancy, please <Link to="/contact-us">contact our assurance office</Link>.
          </p>
        </div>
      )}
      <section className="rec">
        <div className="wrap">
          <div className="rec-head">
            <div>
              <span className="eyebrow">Recommended for you</span>
              <h2>
                {"Recommended "}
                <em>certificates.</em>
              </h2>
            </div>
            <p className="lead">
              Build on your achievement with certificate programmes that strengthen your skills and
              support your organization's management systems.
            </p>
          </div>
          <div className="rec-grid">
            <article className="rec-card dark">
              <div className="rec-top">
                <span className="rec-no">01</span>
                <span className="rec-tag">ISO 9001</span>
              </div>
              <h3>ISO 9001:2015 Lead Auditor</h3>
              <p>
                Develop the knowledge and skills to plan, conduct and report on quality management
                system audits.
              </p>
              <Link className="rec-link" to="/services#training">
                Explore programme
              </Link>
            </article>
            <article className="rec-card">
              <div className="rec-top">
                <span className="rec-no">02</span>
                <span className="rec-tag">ISO 45001</span>
              </div>
              <h3>ISO 45001:2018 Internal Auditor</h3>
              <p>
                Learn how to audit occupational health and safety management systems against the
                standard's requirements.
              </p>
              <Link className="rec-link" to="/services#training">
                Explore programme
              </Link>
            </article>
            <article className="rec-card prim">
              <div className="rec-top">
                <span className="rec-no">03</span>
                <span className="rec-tag">ISO 14001</span>
              </div>
              <h3>ISO 14001:2015 Environmental Management</h3>
              <p>
                Understand how to manage environmental responsibilities and integrate them into
                everyday operations.
              </p>
              <Link className="rec-link" to="/services#training">
                Explore programme
              </Link>
            </article>
            <article className="rec-card">
              <div className="rec-top">
                <span className="rec-no">04</span>
                <span className="rec-tag">Awareness</span>
              </div>
              <h3>Management Systems Awareness</h3>
              <p>
                A practical introduction to management system standards for teams who need to
                understand the fundamentals.
              </p>
              <Link className="rec-link" to="/services#training">
                Explore programme
              </Link>
            </article>
          </div>
          <div
            style={{
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            <Link className="cert-btn" to="/services#training">
              {"View All Training "}
              <i>↗</i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
