import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lock } from 'lucide-react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';
import './IPPortfolio.css';

const IPPortfolio = () => {
  const [activeSection, setActiveSection] = useState('coverage');

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const sectionIds = ['coverage', 'families', 'assets', 'reg', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  // Structured Data for IP Portfolio
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ferzconsulting.com/ip-portfolio#page",
    "name": "FERZ IP Portfolio - Patent-Protected AI Innovation",
    "description": "Comprehensive intellectual property portfolio controlling every legitimate pathway to deterministic AI governance. Patent-protected frameworks with mathematical validation.",
    "url": "https://ferzconsulting.com/ip-portfolio",
    "publisher": {"@id": "https://ferzconsulting.com/#org"},
    "about": [
      {
        "@type": "Thing",
        "name": "Deterministic AI Patents",
        "description": "Patent portfolio covering mathematical pathways to deterministic AI governance"
      },
      {
        "@type": "Thing",
        "name": "Defensive Publications",
        "description": "Strategic IP protection preventing competitor patent claims"
      },
      {
        "@type": "Thing",
        "name": "Research Publications",
        "description": "Academic papers establishing research authority in deterministic AI"
      }
    ]
  };

  return (
    <>
      <Navbar />
      <Helmet>
        <title>FERZ IP Portfolio: Patent-Protected AI Innovation | FERZ</title>
        <meta name="description" content="Comprehensive IP portfolio controlling every pathway to deterministic AI governance. 5 patents filed, 4 defensive publications, 10+ SSRN papers. Patent runway to 2045." />
        <meta name="keywords" content="FERZ IP portfolio, patent-protected AI, deterministic AI patents, defensive publications, AI research authority, intellectual property" />
        <link rel="canonical" href="https://ferzconsulting.com/ip-portfolio" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="ip-portfolio">

      <header className="hero">
        <div className="wrap">
          <span className="kicker">Deterministic AI Infrastructure</span>
          <h1>Explore FERZ IP <span>The mathematical foundation of compliant AI</span></h1>
          <p className="lead">
            FERZ controls every recognized pathway to <strong>deterministic AI</strong>—logic, graphs, entropy governance,
            cryptographic anchoring & replay, vector semantics, and ensemble convergence—through a layered portfolio of patents and defensive publications.
          </p>
          <div className="badges">
            <span className="ip-badge"><span className="b"></span> 5 Patents filed</span>
            <span className="ip-badge"><span className="b"></span> 4 Defensive publications</span>
            <span className="ip-badge"><span className="b"></span> 10+ SSRN papers</span>
            <span className="ip-badge"><span className="b"></span> Patent runway → 2045</span>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section id="coverage" className="section">
          <div className="panel">
            <h2>No Gaps: FERZ Controls the Determinism Map</h2>
            <p className="muted">Every legitimate mathematical pathway to deterministic AI is secured under FERZ's portfolio—either as a patent or a defensive publication.
            <strong>There are no free gaps.</strong></p>
          </div>
        </section>

        <section id="families" className="section">
          <h3>Determinism Families Covered</h3>
          <div className="grid sm-2 lg-3" style={{marginTop: '14px'}}>
            <div className="card">
              <div className="row"><h4>Graph Methods / DAG Execution</h4><span className="chip">Patent</span></div>
              <p className="muted">Deterministic linguistic & action governance via DAG traversal and symbolic audit trails.</p>
              <div className="row" style={{marginTop: '8px'}}><span className="artifact">LASO(f)</span><span className="lock"><Lock size={16} /></span></div>
            </div>
            <div className="card">
              <div className="row"><h4>Formal Logic & Constraint Solvers</h4><span className="chip">Patent</span></div>
              <p className="muted">Flat-constraint governance and verifiable execution to block non-compliant outputs.</p>
              <div className="row" style={{marginTop: '8px'}}><span className="artifact">DELIA</span><span className="lock"><Lock size={16} /></span></div>
            </div>
            <div className="card">
              <div className="row"><h4>Entropy Governance / Stochastic Control</h4><span className="chip">Patent</span></div>
              <p className="muted">FoF-based control of generative behavior and bias using effort/constraint/support vectors.</p>
              <div className="row" style={{marginTop: '8px'}}><span className="artifact">FERZ Behavioral Engine™</span><span className="lock"><Lock size={16} /></span></div>
              <p className="small" style={{marginTop: '8px'}}>BiasGuard™ — Objectivity Index & gating <em>(Defensive Pub)</em></p>
            </div>
            <div className="card">
              <div className="row"><h4>Cryptographic Anchoring & Replay</h4><span className="chip">Provisional Patent</span></div>
              <p className="muted">Immutable proofs, replay, and tamper-evident governance for audits across regulated systems.</p>
              <div className="row" style={{marginTop: '8px'}}><span className="artifact">Constitutional Blockchain</span><span className="lock"><Lock size={16} /></span></div>
              <p className="small" style={{marginTop: '8px'}}>US Provisional <strong>63/844,826</strong> · Filed <strong>Jul 16, 2025</strong></p>
            </div>
            <div className="card">
              <div className="row"><h4>Vector & Structured Representations</h4><span className="chip">Defensive Publications</span></div>
              <p className="muted">Stable semantic states and structured transformations to prevent drift.</p>
              <div className="row" style={{marginTop: '8px'}}><span className="artifact">VECTARA(f) + STRATA-G</span><span className="lock"><Lock size={16} /></span></div>
            </div>
            <div className="card">
              <div className="row"><h4>Ensemble Convergence / Orchestration</h4><span className="chip">Patent</span></div>
              <p className="muted">Deterministic orchestration across symbolic, probabilistic, neural, and agentic engines.</p>
              <div className="row" style={{marginTop: '8px'}}><span className="artifact">CausaCore™</span><span className="lock"><Lock size={16} /></span></div>
            </div>
          </div>
        </section>

        <section id="timeline" className="section">
          <div className="row" style={{alignItems: 'baseline'}}>
            <h3>2025 Portfolio Timeline</h3>
            <span className="small">Foundation → Extension → Globalization → Orchestration → Lockouts</span>
          </div>
          <div className="panel timeline" style={{marginTop: '12px'}}>
            <div className="item">
              <div className="small">May 12</div>
              <div><div className="row"><span className="tone foundation"></span><strong>LASO(f) Provisional</strong></div><div className="small muted">Linguistic governance foundation</div><div className="divider"></div></div>
            </div>
            <div className="item">
              <div className="small">Jul 16</div>
              <div><div className="row"><span className="tone extension"></span><strong>Constitutional Blockchain Provisional — 63/844,826</strong></div><div className="small muted">Cryptographic anchoring & replay</div><div className="divider"></div></div>
            </div>
            <div className="item">
              <div className="small">Jul 22</div>
              <div><div className="row"><span className="tone extension"></span><strong>Behavioral Adaptive AI (Parent) — 19/276,683</strong></div><div className="small muted">FoF: Behavioral vector modeling</div><div className="divider"></div></div>
            </div>
            <div className="item">
              <div className="small">Aug 13</div>
              <div><div className="row"><span className="tone global"></span><strong>LASO(f) PCT/US25/41809</strong></div><div className="small muted">Global filing to extend coverage</div><div className="divider"></div></div>
            </div>
            <div className="item">
              <div className="small">Aug 14</div>
              <div><div className="row"><span className="tone orch"></span><strong>CausaCore Utility — 19/300,050</strong></div><div className="small muted">Deterministic orchestration layer</div><div className="divider"></div></div>
            </div>
            <div className="item">
              <div className="small">Jul–Aug</div>
              <div><div className="row"><span className="tone lockout"></span><strong>IP.com & SSRN Publications</strong></div><div className="small muted">STRATA-G, BiasGuard (Objectivity Index & gating), Recursive Cognition, more</div></div>
            </div>
          </div>
        </section>

        <section id="assets" className="section">
          <div className="panel">
            <h3>Key Assets</h3>
            <div className="grid sm-2 lg-3" style={{marginTop: '12px'}}>
              <div className="card">
                <div className="row"><strong>Behavioral Adaptive AI (Parent)</strong><span className="chip">Patent</span></div>
                <div className="small muted">US 19/276,683 · Filed Jul 22, 2025</div>
                <ul className="small">
                  <li>FoF: Effort / Constraint / Support vectors</li>
                  <li>Modifier library; intensity & stacking</li>
                  <li>Immutable audit & explainability</li>
                </ul>
              </div>
              <div className="card">
                <div className="row"><strong>CausaCore (CIP)</strong><span className="chip">Patent</span></div>
                <div className="small muted">US 19/300,050 · Filed Aug 14, 2025</div>
                <ul className="small">
                  <li>Deterministic multi-engine orchestration</li>
                  <li>Ensemble convergence & validation</li>
                  <li>Governance integration</li>
                </ul>
              </div>
              <div className="card">
                <div className="row"><strong>LASO(f) — Linguistic Governance</strong><span className="chip">PCT</span></div>
                <div className="small muted">PCT/US25/41809 · Filed Aug 13, 2025</div>
                <ul className="small">
                  <li>DAG traversal of linguistic/action plans</li>
                  <li>Symbolic audit trails</li>
                  <li>International coverage anchor</li>
                </ul>
              </div>
              <div className="card">
                <div className="row"><strong>Constitutional Blockchain Architecture</strong><span className="chip">Provisional Patent</span></div>
                <div className="small muted">US Provisional 63/844,826 · Filed Jul 16, 2025</div>
                <ul className="small">
                  <li>Cryptographic anchoring & replay</li>
                  <li>Tamper-evident governance for audits</li>
                  <li>Bridges linguistic/action layers to system-level compliance</li>
                </ul>
              </div>
              <div className="card">
                <div className="row"><strong>BiasGuard — Objectivity Index & Gating</strong><span className="chip">Defensive Pub</span></div>
                <div className="small muted">IPCOM000276648D · Published Aug 2025</div>
                <ul className="small">
                  <li>Composite score: provenance + alignment</li>
                  <li>Channel enforcement (block/annotate/prompt)</li>
                  <li>Explainability integration</li>
                </ul>
              </div>
              <div className="card">
                <div className="row"><strong>STRATA-G — Structured Representations</strong><span className="chip">Defensive Pub</span></div>
                <div className="small muted">IPCOM000276432D · Published Jul 2025</div>
                <ul className="small">
                  <li>Stable vector states; transformation governance</li>
                  <li>Prevents drift; semantic lock-in</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="panel">
            <h3>Exclusivity Runway</h3>
            <p className="muted">Core utility filings in 2025 provide patent protection through <strong>2045</strong>. Defensive publications provide <strong>permanent</strong> prior-art coverage.</p>
            <div className="bar" title="2025 → 2045"><div className="fill"></div></div>
            <div className="small" style={{display:'flex',justifyContent:'space-between',marginTop:'6px'}}><span>2025</span><span>2035</span><span>2045</span></div>
            <div className="panel" style={{marginTop:'12px', background:'rgba(26,26,26,0.8)', borderStyle:'dashed', border:'1px dashed #333'}}>
              <strong>Why License FERZ</strong>
              <ul className="small">
                <li>Immediate path to compliance in regulated markets</li>
                <li>Avoid multi-year reinvention & patent risk</li>
                <li>Interoperable across your existing AI stack</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="reg" className="section">
          <h3>Regulatory Fit & Priority Use-Cases</h3>
          <div className="grid sm-2 lg-3" style={{marginTop:'12px'}}>
            <div className="use">
              <h4>FDA (Healthcare)</h4>
              <p className="small muted">Needs: validation, risk controls, reproducibility</p>
              <p className="small">Fit: <strong>DELIA</strong> (action governance), <strong>FoF</strong> (behavioral control), <strong>Blockchain</strong> (audit/replay)</p>
            </div>
            <div className="use">
              <h4>SEC / FINRA (Finance)</h4>
              <p className="small muted">Needs: audit trails, explainability, model risk</p>
              <p className="small">Fit: <strong>CausaCore</strong> (deterministic orchestration), <strong>LASO(f)</strong> (linguistic governance), <strong>Blockchain</strong> (immutability)</p>
            </div>
            <div className="use">
              <h4>EU AI Act (Enterprise)</h4>
              <p className="small muted">Needs: transparency, governance, data provenance</p>
              <p className="small">Fit: <strong>LASO(f)</strong> (tiered control), <strong>STRATA-G</strong> (structured states), <strong>BiasGuard</strong> (objectivity & gating)</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="panel" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px', flexWrap:'wrap'}}>
            <div>
              <h3>Ready to license the infrastructure of compliant AI?</h3>
              <p className="muted">Portfolio licensing • Field-of-use exclusives • OEM embedding</p>
            </div>
            <a className="btn request-briefing" href="mailto:inquiries@ferz.ai?subject=FERZ%20IP%20Briefing%20Request">Request a briefing</a>
          </div>
        </section>

        <section className="section">
          <h3>FAQ</h3>
          <details>
            <summary>Does FERZ replace our existing AI stack?</summary>
            <p className="muted">No. FERZ operates as infrastructure—governance, orchestration, and audit layers that sit alongside your models, agents, and data systems.</p>
          </details>
          <details>
            <summary>What if we try to "design around" these patents?</summary>
            <p className="muted">FERZ filings cover every legitimate deterministic pathway (logic, graphs, entropy control, crypto replay, vectors, ensembles). Design-arounds tend to revert to probabilistic safety tricks—insufficient for regulators.</p>
          </details>
          <details>
            <summary>How long is the runway?</summary>
            <p className="muted">Core utility filings from 2025 provide protection through 2045. Defensive publications create permanent prior-art coverage.</p>
          </details>
        </section>
      </main>


      <Footer />
      </div>
    </>
  );
};

export default IPPortfolio;