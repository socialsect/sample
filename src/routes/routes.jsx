import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ============================================================================
// CORE PAGES
// ============================================================================
import HomePage from '../pages/HomePage/HomePage';
import FerzAbout from '../pages/AboutUs/AboutUs';
import ContactUs from '../pages/ContactUs/ContactUs';
import NotFound from '../pages/NotFound/NotFound';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import WorkWithFerz from '../pages/WorkWithFerz/WorkWithFerz';
import LicensingPartnerships from '../pages/LicensingPartnerships/LicensingPartnerships';

// ============================================================================
// PRODUCT PAGES
// ============================================================================
import Products from '../pages/products/products';
import Disclaimer from '../pages/Disclaimer/Disclaimer';
import FERZBehavioralEngine from '../pages/products/ferz-behavioral-engine/FERZBehavioralEngine';
import ConstitutionalBlockchainArchitecture from '../pages/products/constitutional-blockchain-architecture/ConstitutionalBlockchainArchitecture';
import STRATAG from '../pages/products/strata-g/STRATAG';
import DELIA from '../pages/products/delia/DELIA';
import LASOF from '../pages/products/lasof/LASOF';
import LASOFAG from '../pages/products/lasof/lasof-ag/LASOFAG';
import CausaCore from '../pages/products/causacore/CausaCore';

// ============================================================================
// SERVICE PAGES
// ============================================================================
import ServicesOverview from '../pages/services/ServicesOverview';
import AIConsulting from '../pages/services-overview/ai-consulting/AIConsulting';
import ITInnovationModernization from '../pages/services-overview/it-innovation-modernization/ITInnovationModernization';
import StrategicAdvisoryServices from '../pages/services-overview/strategic-advisory-services/StrategicAdvisoryServices';
import AIEnablementStrategy from '../pages/services-overview/ai-enablement-strategy/AIEnablementStrategy';
import WithinParadigmImprovements from '../pages/services-overview/within-paradigm-improvements/WithinParadigmImprovements';
import ConstitutionalAIGovernance from '../pages/services-overview/design-of-ai-governance-models/ConstitutionalAIGovernance';

// ============================================================================
// METHODOLOGY PAGES
// ============================================================================
import Methodologies from '../pages/methodologies/methodologies';
import AICapsule from '../pages/methodologies/ai-capsule/AICapsule';
import MRCF from '../pages/methodologies/mrcf/MRCF';
import SCM from '../pages/methodologies/scm/SCM';

// ============================================================================
// COMPONENT PAGES
// ============================================================================
import IPPortfolio from '../components/IPPortfolio/IPPortfolio';
import AIIntegrity from '../pages/AIIntegrity/AIIntegrity';

// ============================================================================
// ARTICLE PAGES
// ============================================================================
import Articles from '../pages/Articles/Articles';
import ArticleDetail from '../pages/ArticleDetail/ArticleDetail';

const AppRoutes = () => {
  return (
    <Routes>
      {/* =================================================================
       * CORE PAGES
       * ================================================================ */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<FerzAbout />} />
      <Route path="/contact-us" element={<ContactUs />} />
 <Route path="/products/delia" element={<DELIA />} />
      {/* =================================================================
       * PRODUCT PAGES
       * ================================================================ */}
      <Route path="/products" element={<Products />} />
      <Route path="/products/ferz-behavioral-engine" element={<FERZBehavioralEngine />} />
      <Route path="/products/constitutional-blockchain-architecture" element={<ConstitutionalBlockchainArchitecture />} />
      <Route path="/products/strata-g" element={<STRATAG />} />
     
      <Route path="/products/lasof" element={<LASOF />} />
      <Route path="/products/lasof/lasof-ag" element={<LASOFAG />} />
      <Route path="/products/causacore" element={<CausaCore />} />

      {/* =================================================================
       * SERVICE PAGES
       * ================================================================ */}
      <Route path="/services-overview" element={<ServicesOverview />} />
      <Route path="/services-overview/ai-consulting" element={<AIConsulting />} />
      <Route path="/services-overview/it-innovation-modernization" element={<ITInnovationModernization />} />
      <Route path="/services-overview/strategic-advisory-services" element={<StrategicAdvisoryServices />} />
      <Route path="/services-overview/ai-enablement-strategy" element={<AIEnablementStrategy />} />
      <Route path="/services-overview/within-paradigm-improvements" element={<WithinParadigmImprovements />} /> 
      <Route path="/services-overview/design-of-ai-governance-models" element={<ConstitutionalAIGovernance />} />

      {/* =================================================================
       * METHODOLOGY PAGES
       * ================================================================ */}
      <Route path="/methodologies" element={<Methodologies />} />
      <Route path="/methodologies/ai-capsule" element={<AICapsule />} />
      <Route path="/methodologies/mrcf" element={<MRCF />} />
      <Route path="/methodologies/scm" element={<SCM />} />

      {/* =================================================================
       * COMPONENT PAGES
       * ================================================================ */}
      <Route path="/ip-portfolio" element={<IPPortfolio />} />
      <Route path="/ai-integrity-statement" element={<AIIntegrity />} />

      {/* =================================================================
       * ARTICLE PAGES
       * ================================================================ */}
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<ArticleDetail />} />

      {/* =================================================================
       * LEGAL
       * ================================================================ */}
      <Route path="/disclaimer" element={<Disclaimer />} />

      {/* =================================================================
       * 404 ROUTE - MUST BE LAST
       * ================================================================ */}
      <Route path="*" element={<NotFound />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/work-with-ferz" element={<WorkWithFerz />} />
      <Route path="/licensing-and-partnerships" element={<LicensingPartnerships />} />
    </Routes>
  );
};

export default AppRoutes;

