import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Compliance from "./pages/Compliance";
import ContactUs from "./pages/ContactUs";
import CorporateWellbeing from "./pages/CorporateWellbeing";
import Home from "./pages/Home";
import News from "./pages/News";
import ProjectsEvents from "./pages/ProjectsEvents";
import Services from "./pages/Services";
import Training from "./pages/Training";
import ViewCertificate from "./pages/ViewCertificate";
import Advisory from "./pages/advisory/Advisory";
import AiGovernance from "./pages/advisory/AiGovernance";
import ApiQ1Q2 from "./pages/advisory/ApiQ1Q2";
import ChangeManagement from "./pages/advisory/ChangeManagement";
import FacilitiesManagement from "./pages/advisory/FacilitiesManagement";
import FacilityManagementServices from "./pages/advisory/FacilityManagementServices";
import FireSafety from "./pages/advisory/FireSafety";
import FoodSafety from "./pages/advisory/FoodSafety";
import HealthSafety from "./pages/advisory/HealthSafety";
import IndustrialOptimization from "./pages/advisory/IndustrialOptimization";
import InformationSecurity from "./pages/advisory/InformationSecurity";
import Iso14001 from "./pages/advisory/Iso14001";
import Iso14001LeadAuditor from "./pages/advisory/Iso14001LeadAuditor";
import Iso17020 from "./pages/advisory/Iso17020";
import Iso20121 from "./pages/advisory/Iso20121";
import Iso22000 from "./pages/advisory/Iso22000";
import Iso27001 from "./pages/advisory/Iso27001";
import Iso31000 from "./pages/advisory/Iso31000";
import Iso41001 from "./pages/advisory/Iso41001";
import Iso45001 from "./pages/advisory/Iso45001";
import Iso50001 from "./pages/advisory/Iso50001";
import Iso9001 from "./pages/advisory/Iso9001";
import LeanSixSigma from "./pages/advisory/LeanSixSigma";
import OilAndGas from "./pages/advisory/OilAndGas";
import ProcessReengineering from "./pages/advisory/ProcessReengineering";
import ProjectManagement from "./pages/advisory/ProjectManagement";
import RiskAssessments from "./pages/advisory/RiskAssessments";
import SupplyChain from "./pages/advisory/SupplyChain";
import SustainabilityEsgIntegration from "./pages/advisory/SustainabilityEsgIntegration";
import VendorInspections from "./pages/advisory/VendorInspections";
import CarbonFootprint from "./pages/sustainability/CarbonFootprint";
import EcoVadis from "./pages/sustainability/EcoVadis";
import EnergyAudits from "./pages/sustainability/EnergyAudits";
import EnergyManagement from "./pages/sustainability/EnergyManagement";
import GreenBuildingAdvisory from "./pages/sustainability/GreenBuildingAdvisory";
import Lca from "./pages/sustainability/Lca";
import Leed from "./pages/sustainability/Leed";
import Mostadam from "./pages/sustainability/Mostadam";
import Sustainability from "./pages/sustainability/Sustainability";
import SustainabilityReporting from "./pages/sustainability/SustainabilityReporting";
import SustainabilityTraining from "./pages/sustainability/SustainabilityTraining";
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/advisory" element={<Advisory />} />
        <Route
          path="/services/advisory-services"
          element={<Navigate to="/services/advisory" replace />}
        />
        <Route path="/advisory" element={<Navigate to="/services/advisory" replace />} />
        <Route path="/services/advisory/iso-14001" element={<Iso14001LeadAuditor />} />
        <Route
          path="/services/advisory/iso-14001-lead-auditor"
          element={<Navigate to="/services/advisory/iso-14001" replace />}
        />
        <Route
          path="/services/iso-14001"
          element={<Navigate to="/services/advisory/iso-14001" replace />}
        />
        <Route path="/iso-14001" element={<Navigate to="/services/advisory/iso-14001" replace />} />
        <Route path="/services/advisory/lean-six-sigma" element={<LeanSixSigma />} />
        <Route
          path="/services/advisory/lean-six-sigma-consulting"
          element={<Navigate to="/services/advisory/lean-six-sigma" replace />}
        />
        <Route
          path="/services/lean-six-sigma"
          element={<Navigate to="/services/advisory/lean-six-sigma" replace />}
        />
        <Route
          path="/lean-six-sigma"
          element={<Navigate to="/services/advisory/lean-six-sigma" replace />}
        />
        <Route
          path="/services/advisory/sustainability-esg-integration"
          element={<SustainabilityEsgIntegration />}
        />
        <Route
          path="/services/advisory/sustainability-esg"
          element={<Navigate to="/services/advisory/sustainability-esg-integration" replace />}
        />
        <Route
          path="/services/sustainability-esg-integration"
          element={<Navigate to="/services/advisory/sustainability-esg-integration" replace />}
        />
        <Route
          path="/sustainability-esg-integration"
          element={<Navigate to="/services/advisory/sustainability-esg-integration" replace />}
        />
        <Route path="/services/advisory/process-reengineering" element={<ProcessReengineering />} />
        <Route
          path="/services/advisory/process-reengineering-consulting"
          element={<Navigate to="/services/advisory/process-reengineering" replace />}
        />
        <Route
          path="/services/process-reengineering"
          element={<Navigate to="/services/advisory/process-reengineering" replace />}
        />
        <Route
          path="/process-reengineering"
          element={<Navigate to="/services/advisory/process-reengineering" replace />}
        />
        <Route
          path="/process-reengineering-consulting"
          element={<Navigate to="/services/advisory/process-reengineering" replace />}
        />
        <Route path="/services/advisory/supply-chain" element={<SupplyChain />} />
        <Route
          path="/services/advisory/supply-chain-consulting-optimization"
          element={<Navigate to="/services/advisory/supply-chain" replace />}
        />
        <Route
          path="/services/advisory/supply-chain-optimization"
          element={<Navigate to="/services/advisory/supply-chain" replace />}
        />
        <Route
          path="/services/supply-chain"
          element={<Navigate to="/services/advisory/supply-chain" replace />}
        />
        <Route
          path="/supply-chain"
          element={<Navigate to="/services/advisory/supply-chain" replace />}
        />
        <Route path="/services/advisory/project-management" element={<ProjectManagement />} />
        <Route
          path="/services/advisory/project-management-excellence"
          element={<Navigate to="/services/advisory/project-management" replace />}
        />
        <Route
          path="/services/project-management"
          element={<Navigate to="/services/advisory/project-management" replace />}
        />
        <Route
          path="/project-management"
          element={<Navigate to="/services/advisory/project-management" replace />}
        />
        <Route
          path="/project-management-excellence"
          element={<Navigate to="/services/advisory/project-management" replace />}
        />
        <Route path="/services/advisory/ai-governance" element={<AiGovernance />} />
        <Route
          path="/services/advisory/ai-governance-iso-42001"
          element={<Navigate to="/services/advisory/ai-governance" replace />}
        />
        <Route
          path="/services/advisory/iso-42001"
          element={<Navigate to="/services/advisory/ai-governance" replace />}
        />
        <Route
          path="/services/ai-governance"
          element={<Navigate to="/services/advisory/ai-governance" replace />}
        />
        <Route
          path="/ai-governance"
          element={<Navigate to="/services/advisory/ai-governance" replace />}
        />
        <Route
          path="/iso-42001"
          element={<Navigate to="/services/advisory/ai-governance" replace />}
        />
        <Route path="/services/advisory/api-q1-q2" element={<ApiQ1Q2 />} />
        <Route
          path="/services/advisory/api-q1-api-q2-oil-gas-quality-standards"
          element={<Navigate to="/services/advisory/api-q1-q2" replace />}
        />
        <Route
          path="/services/advisory/api-standards"
          element={<Navigate to="/services/advisory/api-q1-q2" replace />}
        />
        <Route
          path="/services/api-q1-q2"
          element={<Navigate to="/services/advisory/api-q1-q2" replace />}
        />
        <Route path="/api-q1-q2" element={<Navigate to="/services/advisory/api-q1-q2" replace />} />
        <Route
          path="/api-standards"
          element={<Navigate to="/services/advisory/api-q1-q2" replace />}
        />
        <Route path="/services/advisory/facilities-management" element={<FacilitiesManagement />} />
        <Route
          path="/services/advisory/business-facilities-management"
          element={<Navigate to="/services/advisory/facilities-management" replace />}
        />
        <Route
          path="/services/facilities-management"
          element={<Navigate to="/services/advisory/facilities-management" replace />}
        />
        <Route
          path="/facilities-management"
          element={<Navigate to="/services/advisory/facilities-management" replace />}
        />
        <Route
          path="/business-facilities-management"
          element={<Navigate to="/services/advisory/facilities-management" replace />}
        />
        <Route path="/services/advisory/iso-41001" element={<Iso41001 />} />
        <Route
          path="/services/advisory/iso-41001-facility-management"
          element={<Navigate to="/services/advisory/iso-41001" replace />}
        />
        <Route
          path="/services/advisory/iso-41001-facility-management-systems"
          element={<Navigate to="/services/advisory/iso-41001" replace />}
        />
        <Route
          path="/services/advisory/iso-41001-fms"
          element={<Navigate to="/services/advisory/iso-41001" replace />}
        />
        <Route
          path="/services/iso-41001"
          element={<Navigate to="/services/advisory/iso-41001" replace />}
        />
        <Route path="/iso-41001" element={<Navigate to="/services/advisory/iso-41001" replace />} />
        <Route path="/services/advisory/change-management" element={<ChangeManagement />} />
        <Route
          path="/services/advisory/change-management-consulting"
          element={<Navigate to="/services/advisory/change-management" replace />}
        />
        <Route
          path="/services/change-management"
          element={<Navigate to="/services/advisory/change-management" replace />}
        />
        <Route
          path="/change-management"
          element={<Navigate to="/services/advisory/change-management" replace />}
        />
        <Route
          path="/services/advisory/facility-management-services"
          element={<FacilityManagementServices />}
        />
        <Route
          path="/services/facility-management-services"
          element={<Navigate to="/services/advisory/facility-management-services" replace />}
        />
        <Route
          path="/facility-management-services"
          element={<Navigate to="/services/advisory/facility-management-services" replace />}
        />
        <Route path="/services/advisory/fire-safety" element={<FireSafety />} />
        <Route
          path="/services/advisory/fire-safety-systems"
          element={<Navigate to="/services/advisory/fire-safety" replace />}
        />
        <Route
          path="/services/fire-safety"
          element={<Navigate to="/services/advisory/fire-safety" replace />}
        />
        <Route
          path="/fire-safety"
          element={<Navigate to="/services/advisory/fire-safety" replace />}
        />
        <Route
          path="/fire-safety-systems"
          element={<Navigate to="/services/advisory/fire-safety" replace />}
        />
        <Route path="/services/advisory/food-safety" element={<FoodSafety />} />
        <Route
          path="/services/advisory/food-safety-hygiene-audits"
          element={<Navigate to="/services/advisory/food-safety" replace />}
        />
        <Route
          path="/services/food-safety"
          element={<Navigate to="/services/advisory/food-safety" replace />}
        />
        <Route
          path="/food-safety"
          element={<Navigate to="/services/advisory/food-safety" replace />}
        />
        <Route
          path="/food-safety-audits"
          element={<Navigate to="/services/advisory/food-safety" replace />}
        />
        <Route path="/services/advisory/iso-22000" element={<Iso22000 />} />
        <Route
          path="/services/advisory/iso-22000-food-safety"
          element={<Navigate to="/services/advisory/iso-22000" replace />}
        />
        <Route
          path="/services/advisory/iso-22000-food-safety-management-systems"
          element={<Navigate to="/services/advisory/iso-22000" replace />}
        />
        <Route
          path="/services/advisory/iso-22000-fsms"
          element={<Navigate to="/services/advisory/iso-22000" replace />}
        />
        <Route
          path="/services/iso-22000"
          element={<Navigate to="/services/advisory/iso-22000" replace />}
        />
        <Route path="/iso-22000" element={<Navigate to="/services/advisory/iso-22000" replace />} />
        <Route path="/services/advisory/health-safety" element={<HealthSafety />} />
        <Route
          path="/services/advisory/health-and-safety"
          element={<Navigate to="/services/advisory/health-safety" replace />}
        />
        <Route
          path="/services/health-safety"
          element={<Navigate to="/services/advisory/health-safety" replace />}
        />
        <Route
          path="/health-safety"
          element={<Navigate to="/services/advisory/health-safety" replace />}
        />
        <Route path="/services/advisory/iso-45001" element={<Iso45001 />} />
        <Route
          path="/services/advisory/iso-45001-occupational-health-safety"
          element={<Navigate to="/services/advisory/iso-45001" replace />}
        />
        <Route
          path="/services/advisory/iso-45001-ohsms"
          element={<Navigate to="/services/advisory/iso-45001" replace />}
        />
        <Route
          path="/services/iso-45001"
          element={<Navigate to="/services/advisory/iso-45001" replace />}
        />
        <Route path="/iso-45001" element={<Navigate to="/services/advisory/iso-45001" replace />} />
        <Route
          path="/occupational-health-safety"
          element={<Navigate to="/services/advisory/iso-45001" replace />}
        />
        <Route
          path="/services/advisory/industrial-optimization"
          element={<IndustrialOptimization />}
        />
        <Route
          path="/services/advisory/industrial-optimization-compliance"
          element={<Navigate to="/services/advisory/industrial-optimization" replace />}
        />
        <Route
          path="/services/industrial-optimization"
          element={<Navigate to="/services/advisory/industrial-optimization" replace />}
        />
        <Route
          path="/industrial-optimization"
          element={<Navigate to="/services/advisory/industrial-optimization" replace />}
        />
        <Route
          path="/industrial-optimization-compliance"
          element={<Navigate to="/services/advisory/industrial-optimization" replace />}
        />
        <Route path="/services/advisory/vendor-inspections" element={<VendorInspections />} />
        <Route
          path="/services/advisory/vendor-inspections-quality-audits"
          element={<Navigate to="/services/advisory/vendor-inspections" replace />}
        />
        <Route
          path="/services/vendor-inspections"
          element={<Navigate to="/services/advisory/vendor-inspections" replace />}
        />
        <Route
          path="/vendor-inspections"
          element={<Navigate to="/services/advisory/vendor-inspections" replace />}
        />
        <Route
          path="/vendor-inspections-quality-audits"
          element={<Navigate to="/services/advisory/vendor-inspections" replace />}
        />
        <Route
          path="/quality-audits"
          element={<Navigate to="/services/advisory/vendor-inspections" replace />}
        />
        <Route path="/services/advisory/iso-17020" element={<Iso17020 />} />
        <Route
          path="/services/advisory/iso-17020-inspection-body"
          element={<Navigate to="/services/advisory/iso-17020" replace />}
        />
        <Route
          path="/services/advisory/iso-17020-inspection-body-requirements"
          element={<Navigate to="/services/advisory/iso-17020" replace />}
        />
        <Route
          path="/services/iso-17020"
          element={<Navigate to="/services/advisory/iso-17020" replace />}
        />
        <Route path="/iso-17020" element={<Navigate to="/services/advisory/iso-17020" replace />} />
        <Route path="/services/advisory/risk-assessments" element={<RiskAssessments />} />
        <Route
          path="/services/advisory/risk-assessment"
          element={<Navigate to="/services/advisory/risk-assessments" replace />}
        />
        <Route
          path="/services/risk-assessments"
          element={<Navigate to="/services/advisory/risk-assessments" replace />}
        />
        <Route
          path="/risk-assessments"
          element={<Navigate to="/services/advisory/risk-assessments" replace />}
        />
        <Route
          path="/risk-assessment"
          element={<Navigate to="/services/advisory/risk-assessments" replace />}
        />
        <Route path="/services/advisory/iso-31000" element={<Iso31000 />} />
        <Route
          path="/services/advisory/iso-31000-risk-management"
          element={<Navigate to="/services/advisory/iso-31000" replace />}
        />
        <Route
          path="/services/iso-31000"
          element={<Navigate to="/services/advisory/iso-31000" replace />}
        />
        <Route path="/iso-31000" element={<Navigate to="/services/advisory/iso-31000" replace />} />
        <Route path="/services/advisory/iso-9001" element={<Iso9001 />} />
        <Route
          path="/services/advisory/iso-9001-quality-management-systems"
          element={<Navigate to="/services/advisory/iso-9001" replace />}
        />
        <Route
          path="/services/advisory/iso-9001-qms"
          element={<Navigate to="/services/advisory/iso-9001" replace />}
        />
        <Route
          path="/services/iso-9001"
          element={<Navigate to="/services/advisory/iso-9001" replace />}
        />
        <Route path="/iso-9001" element={<Navigate to="/services/advisory/iso-9001" replace />} />
        <Route
          path="/quality-management-systems"
          element={<Navigate to="/services/advisory/iso-9001" replace />}
        />
        <Route
          path="/services/advisory/iso-14001-environmental-management"
          element={<Iso14001 />}
        />
        <Route
          path="/services/advisory/iso-14001-ems"
          element={<Navigate to="/services/advisory/iso-14001-environmental-management" replace />}
        />
        <Route
          path="/services/advisory/environmental-management"
          element={<Navigate to="/services/advisory/iso-14001-environmental-management" replace />}
        />
        <Route
          path="/services/environmental-management"
          element={<Navigate to="/services/advisory/iso-14001-environmental-management" replace />}
        />
        <Route
          path="/environmental-management"
          element={<Navigate to="/services/advisory/iso-14001-environmental-management" replace />}
        />
        <Route path="/services/advisory/iso-20121" element={<Iso20121 />} />
        <Route
          path="/services/advisory/iso-20121-sustainable-event-management"
          element={<Navigate to="/services/advisory/iso-20121" replace />}
        />
        <Route
          path="/services/advisory/sustainable-event-management"
          element={<Navigate to="/services/advisory/iso-20121" replace />}
        />
        <Route
          path="/services/iso-20121"
          element={<Navigate to="/services/advisory/iso-20121" replace />}
        />
        <Route path="/iso-20121" element={<Navigate to="/services/advisory/iso-20121" replace />} />
        <Route
          path="/sustainable-event-management"
          element={<Navigate to="/services/advisory/iso-20121" replace />}
        />
        <Route path="/services/advisory/information-security" element={<InformationSecurity />} />
        <Route
          path="/services/advisory/it-information-security"
          element={<Navigate to="/services/advisory/information-security" replace />}
        />
        <Route
          path="/services/information-security"
          element={<Navigate to="/services/advisory/information-security" replace />}
        />
        <Route
          path="/information-security"
          element={<Navigate to="/services/advisory/information-security" replace />}
        />
        <Route path="/services/advisory/iso-27001" element={<Iso27001 />} />
        <Route
          path="/services/advisory/iso-27001-information-security-management"
          element={<Navigate to="/services/advisory/iso-27001" replace />}
        />
        <Route
          path="/services/advisory/iso-27001-isms"
          element={<Navigate to="/services/advisory/iso-27001" replace />}
        />
        <Route
          path="/services/iso-27001"
          element={<Navigate to="/services/advisory/iso-27001" replace />}
        />
        <Route path="/iso-27001" element={<Navigate to="/services/advisory/iso-27001" replace />} />
        <Route path="/services/advisory/oil-and-gas" element={<OilAndGas />} />
        <Route
          path="/services/advisory/oil-gas"
          element={<Navigate to="/services/advisory/oil-and-gas" replace />}
        />
        <Route
          path="/services/oil-and-gas"
          element={<Navigate to="/services/advisory/oil-and-gas" replace />}
        />
        <Route
          path="/oil-and-gas"
          element={<Navigate to="/services/advisory/oil-and-gas" replace />}
        />
        <Route path="/oil-gas" element={<Navigate to="/services/advisory/oil-and-gas" replace />} />
        <Route path="/services/training" element={<Training />} />
        <Route path="/services/trainings" element={<Navigate to="/services/training" replace />} />
        <Route path="/training" element={<Navigate to="/services/training" replace />} />
        <Route path="/trainings" element={<Navigate to="/services/training" replace />} />
        <Route path="/services/compliance" element={<Compliance />} />
        <Route path="/compliance" element={<Navigate to="/services/compliance" replace />} />
        <Route path="/services/sustainability" element={<Sustainability />} />
        <Route
          path="/sustainability"
          element={<Navigate to="/services/sustainability" replace />}
        />
        <Route path="/services/sustainability/reporting" element={<SustainabilityReporting />} />
        <Route
          path="/services/sustainability-reporting"
          element={<Navigate to="/services/sustainability/reporting" replace />}
        />
        <Route
          path="/sustainability-reporting"
          element={<Navigate to="/services/sustainability/reporting" replace />}
        />
        <Route
          path="/sustainability/reporting"
          element={<Navigate to="/services/sustainability/reporting" replace />}
        />
        <Route path="/services/sustainability/leed" element={<Leed />} />
        <Route
          path="/services/sustainability/leed-certification"
          element={<Navigate to="/services/sustainability/leed" replace />}
        />
        <Route
          path="/services/leed-certification"
          element={<Navigate to="/services/sustainability/leed" replace />}
        />
        <Route
          path="/leed-certification"
          element={<Navigate to="/services/sustainability/leed" replace />}
        />
        <Route path="/leed" element={<Navigate to="/services/sustainability/leed" replace />} />
        <Route path="/services/sustainability/ecovadis" element={<EcoVadis />} />
        <Route
          path="/services/sustainability/ecovadis-certification"
          element={<Navigate to="/services/sustainability/ecovadis" replace />}
        />
        <Route
          path="/services/ecovadis"
          element={<Navigate to="/services/sustainability/ecovadis" replace />}
        />
        <Route
          path="/ecovadis"
          element={<Navigate to="/services/sustainability/ecovadis" replace />}
        />
        <Route path="/services/sustainability/mostadam" element={<Mostadam />} />
        <Route
          path="/services/sustainability/mostadam-certification"
          element={<Navigate to="/services/sustainability/mostadam" replace />}
        />
        <Route
          path="/services/mostadam"
          element={<Navigate to="/services/sustainability/mostadam" replace />}
        />
        <Route
          path="/mostadam"
          element={<Navigate to="/services/sustainability/mostadam" replace />}
        />
        <Route path="/services/sustainability/lca" element={<Lca />} />
        <Route
          path="/services/sustainability/product-lca"
          element={<Navigate to="/services/sustainability/lca" replace />}
        />
        <Route
          path="/services/sustainability/life-cycle-analysis"
          element={<Navigate to="/services/sustainability/lca" replace />}
        />
        <Route
          path="/services/lca"
          element={<Navigate to="/services/sustainability/lca" replace />}
        />
        <Route path="/lca" element={<Navigate to="/services/sustainability/lca" replace />} />
        <Route
          path="/services/sustainability/green-building-advisory"
          element={<GreenBuildingAdvisory />}
        />
        <Route
          path="/services/sustainability/green-building"
          element={<Navigate to="/services/sustainability/green-building-advisory" replace />}
        />
        <Route
          path="/services/green-building-advisory"
          element={<Navigate to="/services/sustainability/green-building-advisory" replace />}
        />
        <Route
          path="/green-building-advisory"
          element={<Navigate to="/services/sustainability/green-building-advisory" replace />}
        />
        <Route path="/services/sustainability/carbon-footprint" element={<CarbonFootprint />} />
        <Route
          path="/services/sustainability/carbon-footprint-assessment"
          element={<Navigate to="/services/sustainability/carbon-footprint" replace />}
        />
        <Route
          path="/services/carbon-footprint"
          element={<Navigate to="/services/sustainability/carbon-footprint" replace />}
        />
        <Route
          path="/carbon-footprint"
          element={<Navigate to="/services/sustainability/carbon-footprint" replace />}
        />
        <Route path="/services/advisory/iso-50001" element={<Iso50001 />} />
        <Route
          path="/services/advisory/iso-50001-energy-management"
          element={<Navigate to="/services/advisory/iso-50001" replace />}
        />
        <Route
          path="/services/advisory/iso-50001-energy-management-systems"
          element={<Navigate to="/services/advisory/iso-50001" replace />}
        />
        <Route
          path="/services/advisory/iso-50001-enms"
          element={<Navigate to="/services/advisory/iso-50001" replace />}
        />
        <Route path="/services/sustainability/iso-50001" element={<EnergyManagement />} />
        <Route
          path="/services/sustainability/iso-50001-energy-management"
          element={<Navigate to="/services/advisory/iso-50001" replace />}
        />
        <Route
          path="/services/iso-50001"
          element={<Navigate to="/services/advisory/iso-50001" replace />}
        />
        <Route path="/iso-50001" element={<Navigate to="/services/advisory/iso-50001" replace />} />
        <Route path="/services/sustainability/energy-audits" element={<EnergyAudits />} />
        <Route
          path="/services/energy-audits"
          element={<Navigate to="/services/sustainability/energy-audits" replace />}
        />
        <Route
          path="/energy-audits"
          element={<Navigate to="/services/sustainability/energy-audits" replace />}
        />
        <Route path="/services/sustainability/training" element={<SustainabilityTraining />} />
        <Route
          path="/services/sustainability/sustainability-training"
          element={<Navigate to="/services/sustainability/training" replace />}
        />
        <Route
          path="/services/sustainability-training"
          element={<Navigate to="/services/sustainability/training" replace />}
        />
        <Route
          path="/sustainability-training"
          element={<Navigate to="/services/sustainability/training" replace />}
        />
        <Route path="/services/corporate-wellbeing" element={<CorporateWellbeing />} />
        <Route
          path="/services/advisory/corporate-wellbeing"
          element={<Navigate to="/services/corporate-wellbeing" replace />}
        />
        <Route
          path="/services/wellbeing"
          element={<Navigate to="/services/corporate-wellbeing" replace />}
        />
        <Route
          path="/corporate-wellbeing"
          element={<Navigate to="/services/corporate-wellbeing" replace />}
        />
        <Route
          path="/wellbeing"
          element={<Navigate to="/services/corporate-wellbeing" replace />}
        />
        <Route path="/projects-events" element={<ProjectsEvents />} />
        <Route path="/projects" element={<Navigate to="/projects-events#projects" replace />} />
        <Route path="/events" element={<Navigate to="/projects-events#events" replace />} />
        <Route path="/view-certificate" element={<ViewCertificate />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-and-articles" element={<Navigate to="/news" replace />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
