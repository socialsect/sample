import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <div className="disclaimer-app">
      <Helmet>
        <title>Legal Disclaimer | FERZ</title>
        <meta name="description" content="Comprehensive liability limitations and service scope definitions for FERZ deterministic AI governance solutions." />
        <link rel="canonical" href="https://ferzconsulting.com/disclaimer" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="disclaimer-hero" aria-label="Disclaimer hero">
          <div className="disclaimer-hero-inner">
            <h1 className="disclaimer-hero-title">Legal Disclaimer</h1>
            <p className="disclaimer-hero-sub">Comprehensive liability limitations and service scope definitions for FERZ deterministic AI governance solutions</p>
            <p className="disclaimer-updated">Last Updated: September 1, 2025</p>
          </div>
        </section>

        <div className="disclaimer-container">
          <header className="disclaimer-header">
            <h2>Overview</h2>
          </header>

        <section className="disclaimer-section">
          <p className="disclaimer-important">
            IMPORTANT NOTICE: FERZ LLC provides strategic advisory, technical consulting, and AI governance guidance to support enterprise transformation. FERZ does not provide legal advice, medical advice, financial advice, or other licensed professional services. This disclaimer establishes comprehensive limitations of liability and service scope definitions. By accessing FERZ services, methodologies, or intellectual property, you acknowledge and agree to these terms in their entirety.
          </p>

          <h2>Executive Summary - Key Limitations</h2>
          <p>
            In Plain Language: FERZ provides strategic and technical advisory services for enterprise clients only—not legal, medical, financial, or investment advice. We offer no guarantees of outcomes, regulatory approvals, or competitive advantages. Our methodologies are experimental technology requiring professional oversight. We have no government endorsement. Individual consumers should not rely on our materials. All performance claims are illustrative examples only.
          </p>

          <h2>No Professional Relationship Created</h2>
          <p>
            FERZ services are intended to supplement, not replace, the advice of licensed professionals. FERZ services do not create an attorney-client relationship, doctor-patient relationship, or fiduciary relationship of any kind. Clients must seek appropriate licensed professional counsel for legal, medical, financial, or regulatory compliance matters.
          </p>

          <h2>Client Sophistication and Service Scope</h2>
          <h3>Enterprise Client Requirement</h3>
          <p>
            FERZ services are designed exclusively for sophisticated enterprise clients with internal technical expertise, dedicated legal counsel, and substantial organizational resources. Services are not intended for individual consumers, small businesses without legal representation, or organizations lacking technical implementation capabilities.
          </p>
          <h3>Client Sophistication Requirements</h3>
          <ul>
            <li>Possess adequate technical expertise to evaluate AI governance methodologies</li>
            <li>Have access to qualified legal counsel for regulatory compliance matters</li>
            <li>Maintain internal resources for proper methodology implementation</li>
            <li>Understand the experimental nature of deterministic AI governance technologies</li>
            <li>Have authority to make substantial technology implementation decisions</li>
          </ul>
          <h3>Audience and Access Restrictions</h3>
          <p>
            FERZ does not target or provide services to individual consumers or the general public, including for personal use. Services are designed exclusively for sophisticated enterprise clients, government agencies, and institutional partners with demonstrated technical expertise and legal representation.
          </p>
          <p>
            Access to certain FERZ materials may be restricted in jurisdictions with heightened consumer protection requirements. FERZ reserves the right to verify client sophistication and restrict access where adequate professional representation cannot be confirmed.
          </p>

          <h2>Consumer Protection Rights Preservation</h2>
          <p>
            Nothing in this disclaimer is intended to limit or waive any rights or protections that may be available to individual consumers under applicable law. If you are an individual consumer accessing FERZ materials, you should not rely on FERZ's materials or services for personal decisions, and any consumer protection rights you may have under applicable law remain unaffected by these disclaimers. Consumer protection laws may override certain provisions of this disclaimer when applied to individual consumer relationships.
          </p>
          <p>
            Client Authority Representation: By accessing FERZ services, clients represent they have organizational authority to evaluate and implement enterprise AI governance solutions and are not acting in an individual consumer capacity. Clients accessing FERZ materials in a consumer capacity do so at their own risk and must seek independent professional guidance.
          </p>

          <h2>No Legal, Medical, or Financial Advice</h2>
          <h3>Explicit Professional Services Disclaimer</h3>
          <p>
            FERZ LLC's services, content, methodologies, and materials are provided for informational and strategic purposes only and are not intended to constitute, and do not constitute, legal, medical, financial, investment, tax, accounting, or other professional advice. Clients and partners must obtain their own independent professional advice before making decisions based on FERZ materials or recommendations.
          </p>
          <h3>Professional Service Boundaries</h3>
          <ul>
            <li>Provide legal opinions or regulatory compliance certifications</li>
            <li>Offer medical diagnoses or healthcare guidance</li>
            <li>Give financial, investment, or tax advice</li>
            <li>Create attorney-client, doctor-patient, or fiduciary relationships</li>
            <li>Act as registered investment advisor or securities dealer</li>
            <li>Provide audit, accounting, or financial reporting services</li>
          </ul>

          <h2>Regulatory and Government Use Limitations</h2>
          <p>
            FERZ's services are not intended to replace, modify, or serve as a substitute for compliance with mandatory government regulations, nor do they constitute official government policy or endorsement. FERZ's methodologies are tools to assist in compliance planning but do not ensure, and are not a substitute for, formal determinations by regulators or courts. Clients remain solely responsible for engaging with relevant agencies and ensuring that their systems obtain any required approvals, certifications, or authorizations. Federal experience provides perspective and insight only, not official government validation or regulatory approval.
          </p>
          <p>
            Clients must obtain independent regulatory guidance and cannot rely on FERZ interpretations as definitive compliance determinations. Regulatory enforcement approaches vary by agency, jurisdiction, and individual case circumstances. FERZ methodologies provide frameworks for governance consideration but do not guarantee regulatory acceptance, enforcement immunity, or approval outcomes.
          </p>

          <h2>Government Contracting and Procurement Integrity</h2>
          <p>
            All engagements with government agencies, contractors, or subcontractors are subject to Organizational Conflict of Interest (OCI) and procurement integrity reviews. FERZ conducts internal conflict assessments and may decline or discontinue engagements to ensure compliance with federal acquisition regulations and ethics requirements.
          </p>
          <p>
            Government clients acknowledge that FERZ may have relationships with other government agencies, private sector clients, or competitors that could create actual or perceived conflicts of interest. FERZ will disclose known conflicts and implement mitigation measures as required by applicable procurement regulations, but cannot guarantee conflict-free relationships across all potential government engagements.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Unless otherwise stated, all Content, including design, architecture, trademarks, technical descriptions, proprietary algorithms, and methodologies associated with LASO(f), DELIA, Constitutional Blockchain Architecture, FERZ Behavioral Engine™, CausaCore, BiasGuard, STRATA-G, VECTARA(f), Semantic Condensation Methodology, AI Capsule™, Meta-Recursive Cognitive Framework, and Formula of Fate frameworks, is the intellectual property of FERZ LLC or its licensors.
          </p>
          <h3>Comprehensive IP Protection</h3>
          <p>
            No license is granted, whether explicitly or implicitly, to copy, reproduce, modify, distribute, reverse engineer, or exploit any part of the Content without FERZ's prior written consent. Patent applications are pending on core methodologies.
          </p>
          <h3>Client IP Risk Allocation</h3>
          <p>
            Clients assume responsibility for patent clearance and IP compliance within their jurisdiction. FERZ is not liable for client infringement of third-party intellectual property rights. Licensing terms and availability may change based on patent prosecution outcomes and competitive landscape developments.
          </p>

          <h2>Experimental Technology and Performance Limitations</h2>
          <h3>Emerging Technology Risks</h3>
          <p>
            FERZ methodologies represent emerging technology in deterministic AI governance. Performance may vary significantly across implementations, organizational contexts, and deployment environments. Some frameworks may be in beta or developmental phases with inherent risks associated with early adoption.
          </p>
          <h3>Mathematical Model Limitations</h3>
          <p>
            Mathematical models and formal verification frameworks are simplifications of complex enterprise systems. Real-world variables, organizational dynamics, and implementation factors may affect mathematical predictions and deterministic outcomes. Formal verification has scope limitations and depends on proper implementation and maintenance.
          </p>
          <h3>Integration and Compatibility</h3>
          <p>
            FERZ provides no guarantee of compatibility with existing client systems, infrastructure, or third-party technologies. Integration risks are beyond FERZ control and remain client responsibility. Performance depends significantly on client infrastructure, data quality, organizational readiness, and technical implementation capabilities.
          </p>
          <h3>Implementation Success Dependency</h3>
          <p>
            Results depend heavily on organizational readiness, change management capabilities, stakeholder acceptance, and cultural fit. FERZ cannot guarantee adoption success, user acceptance, or organizational transformation outcomes.
          </p>

          <h2>No Warranties</h2>
          <p>
            The Content and all FERZ services are provided "as is" and "as available" without warranties of any kind, either express or implied. FERZ makes no representations or guarantees regarding the accuracy, reliability, completeness, timeliness, or suitability of the Content for any particular purpose, use case, or environment.
          </p>

          <h3>Performance Disclaimers</h3>
          <p>
            Benchmark figures, performance targets, compliance rates, and competitive advantage claims described are theoretical, estimated, or based on limited testing unless otherwise stated. Actual performance may vary significantly based on implementation context, organizational factors, and market dynamics.
          </p>
          <h3>Competitive Advantage Limitations</h3>
          <p>
            Market dynamics, regulatory changes, competitive responses, and technology evolution may affect competitive positioning over time. ROI projections and competitive advantage claims are theoretical estimates that may not materialize in client-specific contexts.
          </p>

          <h2>Comprehensive Limitation of Liability</h2>
          <h3>Maximum Liability Protection</h3>
          <p>
            Except for claims arising from FERZ's gross negligence, willful misconduct, or violations of applicable law, FERZ's total liability for any claims arising from or related to services, methodologies, or intellectual property shall not exceed the total amount paid by client to FERZ in the twelve (12) months preceding the claim. This limitation applies regardless of the number of claims, the theory of liability, or whether the claims are brought in contract, tort, statute, or otherwise.
          </p>
          <h3>Excluded Damages</h3>
          <p>
            To the maximum extent permitted by applicable law, and except where prohibited by law or in cases of gross negligence, willful misconduct, or breach of express warranties by FERZ, FERZ shall not be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages arising from or in connection with:
          </p>
          <ul>
            <li>Use of FERZ website, Content, services, or methodologies</li>
            <li>Reliance on performance projections, compliance statements, or competitive advantage claims</li>
            <li>Implementation failures, integration problems, or system incompatibilities</li>
            <li>Loss of profits, business interruption, loss of data, or reputational harm</li>
            <li>Regulatory enforcement actions or compliance failures</li>
            <li>Patent infringement claims or IP litigation</li>
            <li>Third-party system failures or security breaches</li>
            <li>Technology obsolescence or competitive disadvantage</li>
            <li>Organizational change management failures or stakeholder rejection</li>
          </ul>
          <h3>Direct Damages and Public Policy Considerations</h3>
          <p>
            Where exclusion of direct damages would violate public policy or be deemed unconscionable, FERZ's liability for direct damages shall be limited to the lesser of: (a) actual direct damages proximately caused by FERZ's breach of express obligations, or (b) the monetary limitation specified above. This graduated approach ensures enforceability while providing maximum available protection.
          </p>
          <h3>Limitation Survivability</h3>
          <p>
            These liability limitations reflect the experimental nature of deterministic AI governance technology, the sophisticated commercial relationship between parties, and the need for innovation in emerging technology sectors. Limitations are reasonable considering: (1) the advisory nature of services, (2) client's sophisticated enterprise status, (3) availability of client legal counsel, and (4) the cutting-edge technology risks inherent in AI governance innovation.
          </p>

          <h2>Data Security and Processing</h2>
          <p>
            Clients retain full responsibility for data governance, privacy compliance, and security implementation. FERZ is not liable for client data handling practices, cross-border data transfer compliance, or security breaches in client systems. Clients must independently ensure data processing compliance with applicable privacy regulations.
          </p>

          <h2>Third-Party References and Dependencies</h2>
          <h3>External Standard Limitations</h3>
          <p>
            FERZ makes no claims about the official status, currency, or authoritative interpretation of external standards. FERZ is not responsible for changes to referenced standards, regulatory interpretation evolution, or enforcement approach modifications by regulatory bodies.
          </p>
          <h3>Third-Party Technology Risks</h3>
          <p>
            FERZ is not responsible for the functionality, security, availability, or legal compliance of any third-party systems, APIs, or technologies referenced in our methodologies. Clients assume full responsibility for third-party technology assessment and compliance.
          </p>

          <h2>Future Statements and Forward-Looking Disclaimers</h2>
          <h3>Safe Harbor for Forward-Looking Statements</h3>
          <p>
            This disclaimer contains forward-looking statements within the meaning of applicable securities laws. These statements are based on current expectations and assumptions and are subject to significant risks and uncertainties. Actual results may differ materially from those expressed or implied in forward-looking statements.
          </p>
          <h3>No Offer of Securities</h3>
          <p>
            This website and related materials do not constitute an offer to sell, or a solicitation of an offer to buy, any securities. Any potential investment in FERZ LLC will be made only pursuant to definitive offering documents, and nothing herein should be relied upon in making an investment decision. Performance projections, competitive advantage claims, and market opportunity analyses are for informational purposes only and do not constitute investment advice or recommendations.
          </p>
          <h3>Accredited Investor Limitation</h3>
          <p>
            Any references to investment opportunities are directed solely to accredited investors and qualified institutional buyers, as defined under applicable securities laws. Investment discussions, if any, are not public solicitations and are available only to qualified parties through private placement procedures in compliance with securities regulations.
          </p>
          <h3>No Obligation to Update Forward-Looking Statements</h3>
          <p>
            FERZ undertakes no obligation to update any forward-looking statements, projections, performance metrics, or competitive advantage claims, except as required by law. Information presented reflects conditions and expectations as of the publication date and may become outdated due to market changes, technological developments, or regulatory evolution.
          </p>
          <h3>Investment-Related Disclaimers</h3>
          <p>
            Any investment-related statements, market valuations, revenue projections, or competitive positioning analyses are for informational purposes only. Any discussions of fundraising, valuations, potential acquisitions, or investment opportunities are illustrative, non-binding, and subject to change without notice. Actual investment terms, if any, will be governed solely by formal offering documents prepared in compliance with applicable securities laws. Prospective investors must conduct their own due diligence and consult qualified investment professionals.
          </p>
          <p>
            Any statements describing anticipated system capabilities, compliance targets, technical specifications, patent outcomes, competitive advantages, or market positioning (e.g., 98% accuracy, 200ms processing time, patent protection through 2045) are provided as illustrative examples only, not promises or guarantees. These forward-looking theoretical benchmarks or strategic projections are provided for informational purposes only.
          </p>

          <h2>Performance Projections Are Illustrative Only</h2>
          <p>
            All performance metrics, compliance rates, competitive advantages, and business outcomes described in FERZ materials are illustrative examples based on theoretical modeling, limited testing, or optimal deployment scenarios. These examples do not constitute promises, warranties, or guarantees of actual performance in client environments.
          </p>
          <h3>Forward-Looking Statement Risk Factors</h3>
          <p>
            Forward-looking projections may be affected by numerous factors including but not limited to: deployment configuration variations, client context differences, ongoing development requirements, patent prosecution outcomes, regulatory changes, market evolution, competitive responses, technology paradigm shifts, and implementation quality variations.
          </p>
          <h3>Patent and IP Outcome Limitations</h3>
          <p>
            References to patent-pending status do not guarantee that any patent will issue, or that any issued patents will be found valid or enforceable. Patent protection timelines, approval outcomes, and competitive advantage duration depend on USPTO examination, international filing success, competitor patent strategies, and potential legal challenges. FERZ reserves all rights not expressly granted and does not waive any intellectual property rights through these disclaimers.
          </p>
          <p>
            Patent Prosecution Uncertainty: Patent applications are subject to examination processes that may result in claim modifications, rejections, or abandonment. Competitive positioning based on patent protection may change based on prosecution outcomes, competitor patents, or legal challenges to patent validity or enforceability.
          </p>

          <h2>Technology Evolution Risks</h2>
          <p>
            AI technology landscape evolves rapidly with potential for unforeseen technical limitations, breakthrough competitor innovations, or paradigm shifts that could affect FERZ methodology effectiveness or market positioning.
          </p>

          <h2>Federal Experience and Authority Limitations</h2>
          <p>
            FERZ principals possess extensive federal IT transformation experience and policy advisory background. However, this experience provides insight and perspective rather than guaranteed outcomes or official government endorsement.
          </p>
          <h3>Experience Application Limitations</h3>
          <ul>
            <li>Past federal experience does not guarantee future compliance outcomes</li>
            <li>Regulatory environments differ significantly across agencies and jurisdictions</li>
            <li>Federal experience provides advisory insight, not compliance guarantees</li>
            <li>Each implementation context presents unique challenges and requirements</li>
            <li>Government experience does not constitute official endorsement of FERZ methodologies</li>
          </ul>

          <h2>Implementation and Organizational Readiness</h2>
          <h3>Client Responsibility for Success</h3>
          <p>
            Successful implementation of FERZ methodologies depends critically on organizational readiness factors beyond FERZ control, including but not limited to:
          </p>
          <ul>
            <li>Executive leadership commitment and resource allocation</li>
            <li>Technical infrastructure adequacy and security protocols</li>
            <li>Change management capabilities and stakeholder alignment</li>
            <li>Cultural compatibility with deterministic governance principles</li>
            <li>Sustained implementation effort and methodology adherence</li>
          </ul>
          <h3>Training and Competency Requirements</h3>
          <p>
            FERZ methodologies require specific technical competencies and training for effective implementation. Clients are responsible for ensuring adequate staff training, competency validation, and ongoing methodology compliance. FERZ is not liable for implementation failures resulting from inadequate training or competency gaps.
          </p>

          <h2>Competitive and Market Disclaimers</h2>
          <h3>Market Positioning Risks</h3>
          <p>
            Claims regarding competitive advantages, market positioning, or RFP success rates are based on current market analysis and theoretical frameworks. Market dynamics, competitor responses, regulatory changes, and technology evolution may affect competitive positioning over time.
          </p>
          <h3>ROI and Business Outcome Limitations</h3>
          <p>
            Return on investment projections, cost savings estimates, and business transformation outcomes are theoretical calculations based on limited data sets. Actual financial outcomes depend on numerous organizational and market factors beyond FERZ control.
          </p>
          <p>
            References to potential competitive advantages are intended to describe the strategic opportunities that may be achievable when FERZ methodologies are effectively implemented by qualified enterprises. These opportunities are contingent on numerous external factors and therefore cannot be guaranteed.
          </p>
          <h3>No Guarantee of Competitive Advantage</h3>
          <p>
            While FERZ methodologies are patent-protected, market success depends on implementation quality, organizational execution, competitive responses, and market acceptance factors that FERZ cannot control or guarantee.
          </p>

          <h2>International Use and Regulatory Compliance</h2>
          <p>
            FERZ products and services may be accessed from jurisdictions worldwide. FERZ does not represent that its products, methodologies, or advisory services are appropriate, legally available, or compliant in any particular country or regulatory regime.
          </p>
          <h3>International Enforcement Limitations</h3>
          <p>
            While this disclaimer specifies Virginia law and U.S. arbitration, FERZ acknowledges that enforcement may vary significantly across international jurisdictions. In countries where Virginia arbitration clauses are not recognized, disputes shall be governed by local commercial dispute resolution procedures, but substantive liability limitations shall apply to the maximum extent permitted by local law.
          </p>
          <h3>Client Compliance Obligations</h3>
          <ul>
            <li>Clients are solely responsible for ensuring compliance with local laws and regulations</li>
            <li>Export control and technology transfer restrictions may apply</li>
            <li>Data sovereignty and cross-border transfer requirements are client responsibility</li>
            <li>Professional licensing requirements vary by jurisdiction</li>
            <li>Local consumer protection laws may override certain provisions</li>
          </ul>
          <h3>Jurisdictional Adaptation</h3>
          <p>
            Where local law requires specific disclaimers, warranties, or liability allocations that conflict with this disclaimer, such local requirements shall apply to the minimum extent necessary for legal compliance, while all other provisions remain in full force. FERZ retains the right to modify service offerings or restrict access in jurisdictions where comprehensive liability protection cannot be achieved.
          </p>
          <h3>Cross-Border Enforcement Strategy</h3>
          <p>
            For international clients, FERZ reserves the right to require additional contractual protections, local counsel review, or jurisdiction-specific terms that provide equivalent protection to these disclaimer provisions. Service availability may be restricted in jurisdictions where adequate liability protection cannot be established.
          </p>

          <h2>Force Majeure and External Factors</h2>
          <p>
            FERZ is not liable for delays, failures, or performance issues resulting from circumstances beyond reasonable control, including but not limited to:
          </p>
          <ul>
            <li>Regulatory framework changes or new enforcement interpretations</li>
            <li>Technology infrastructure failures or cybersecurity incidents</li>
            <li>Third-party service disruptions or API changes</li>
            <li>Economic disruption affecting client operations or market conditions</li>
            <li>Competitive technology breakthroughs or paradigm shifts</li>
            <li>Patent litigation or IP enforcement actions by third parties</li>
          </ul>

          <h2>Modifications, Updates, and Termination</h2>
          <p>
            FERZ reserves the right to modify or update this disclaimer, service terms, methodology specifications, and related policies at any time without prior notice. Updates will be posted on this site with a revised "Last Updated" date. Continued use of FERZ services constitutes acceptance of updated terms.
          </p>
          <h3>Service Termination and Access Control</h3>
          <p>
            FERZ may suspend or terminate access to services, methodologies, or materials at its sole discretion, including for misuse, noncompliance with these terms, unauthorized disclosure of proprietary information, breach of client sophistication requirements, or violation of intellectual property rights. Termination may occur immediately without notice where intellectual property violations, security breaches, or procurement integrity concerns are suspected.
          </p>
          <p>
            Termination Effects: Upon termination, all rights to access FERZ materials immediately cease, and clients must discontinue use of proprietary methodologies unless separately licensed. Clients must return or destroy confidential materials and certify compliance with termination requirements. Survival provisions for intellectual property protection, liability limitations, confidentiality obligations, and indemnification requirements remain in effect following termination.
          </p>
          <p>
            Government Engagement Termination: For government clients, FERZ reserves the right to terminate engagements immediately upon identification of organizational conflicts of interest, procurement integrity concerns, or changes in security clearance requirements that affect service delivery.
          </p>

          <h2>Methodology Evolution</h2>
          <p>
            FERZ methodologies undergo continuous refinement based on research developments, implementation feedback, and regulatory evolution. Clients acknowledge that methodology specifications may change, and past performance does not guarantee future results. Access to updated methodologies may require additional licensing or contractual modifications.
          </p>

          <h2>Covered Domains and Jurisdictional Scope</h2>
          <p>
            This Legal Disclaimer applies comprehensively to all FERZ-operated websites, domains, subdomains, and digital properties, including but not limited to:
          </p>
          <ul>
            <li>ferzconsulting.com</li>
            <li>ferzllc.com</li>
            <li>ferz.ai</li>
            <li>All subdomains and related digital properties</li>
            <li>Social media profiles and content distribution channels</li>
            <li>Partnership websites and co-branded digital presence</li>
          </ul>
          <p>
            Any references to "this site," "our website," "FERZ digital properties," or similar language within FERZ documentation refer collectively to these FERZ-managed properties and associated content distribution channels.
          </p>

          <h2>Client Indemnification</h2>
          <p>
            Clients agree to indemnify, defend, and hold harmless FERZ LLC, its principals, employees, and affiliates from and against any claims, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from or related to:
          </p>
          <ul>
            <li>Client's use or misuse of FERZ methodologies, services, or intellectual property</li>
            <li>Client's failure to comply with applicable laws, regulations, or professional standards</li>
            <li>Client's implementation of FERZ recommendations without appropriate professional oversight</li>
            <li>Claims that client's use of FERZ methodologies infringes third-party rights</li>
            <li>Client's misrepresentation of FERZ services, capabilities, or endorsements</li>
          </ul>

          <h2>Governing Law and Dispute Resolution</h2>
          <p>
            This disclaimer and all related FERZ service agreements are governed by the laws of the Commonwealth of Virginia, United States, without regard to conflict of law principles. Any disputes arising from or related to FERZ services shall be resolved through binding arbitration in Fairfax County, Virginia, under the Commercial Arbitration Rules of the American Arbitration Association.
          </p>

          <h3>Class Action and Collective Action Waiver</h3>
          <p>
            BY AGREEING TO THESE TERMS, CLIENT EXPRESSLY WAIVES ANY RIGHT TO PARTICIPATE IN CLASS ACTION LAWSUITS, CLASS-WIDE ARBITRATION, COLLECTIVE ACTIONS, OR REPRESENTATIVE PROCEEDINGS AGAINST FERZ. All disputes must be resolved on an individual basis. This waiver applies to the maximum extent permitted by applicable law in business-to-business commercial relationships.
          </p>

          <h3>Arbitration Procedures and Limitations</h3>
          <p>
            If any portion of this arbitration provision is deemed unenforceable, the remainder shall remain in full force and effect. In jurisdictions where class action waivers are not enforceable, this agreement shall be interpreted to provide the maximum protection available under applicable law. Arbitration proceedings shall be confidential and may not be consolidated with other proceedings without FERZ's express written consent.
          </p>
          <p>
            Exceptions to Arbitration: FERZ retains the right to seek injunctive relief for intellectual property violations, confidentiality breaches, or unauthorized use of proprietary methodologies in courts of competent jurisdiction.
          </p>

          <h2>Commercial Relationship Context</h2>
          <p>
            This disclaimer governs business-to-business commercial relationships between sophisticated parties. FERZ services are designed for enterprise clients with technical expertise and internal legal counsel. These limitations are reasonable and necessary given the experimental nature of deterministic AI governance technologies.
          </p>

          <h2>Severability and Enforceability</h2>
          <p>
            If any provision of this disclaimer is held invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, severed from this disclaimer. The remainder of this disclaimer shall remain in full force and effect.
          </p>

          <h2>Judicial Modification</h2>
          <p>
            In the event any limitation of liability or warranty disclaimer is deemed excessive by a court, such limitation shall be enforced to the maximum extent permitted by applicable law. FERZ intends these limitations to be enforced to the fullest extent possible while remaining within legal bounds.
          </p>

          <h2>Graduated Liability Structure</h2>
          <p>
            Where absolute liability exclusions are not enforceable, liability shall be limited to the greater of: (a) actual damages directly caused by FERZ's breach of express obligations, or (b) the liability cap specified in this disclaimer, whichever provides greater protection to FERZ while remaining legally enforceable.
          </p>

          <h2>Contact Information</h2>
          <address>
            FERZ LLC<br />
            McLean, Virginia, USA<br />
            Email: contact@ferzconsulting.com<br />
            Phone: +1 212 380 6044
          </address>
          <p>
            For legal inquiries or dispute resolution matters, contact FERZ legal counsel through the above email with "LEGAL MATTER" in the subject line.
          </p>

          <hr className="disclaimer-divider" />
          <p className="disclaimer-footer-note">Home About Products Services Methodologies Privacy Policy AI Integrity Statement</p>
          <p className="disclaimer-footer-note">© 2025 FERZ LLC. All rights reserved. Patent-protected deterministic AI governance frameworks.</p>
        </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;


