import Solutions from "./Modules/Solutions";
import Service from "./Modules/Service";
import BenefitsSection from "./Modules/BenefitsSection";
import ComplianceAndCreditSection from "./Modules/ComplianceAndCreditSection";
import MissionVisionCard from "./Modules/MissionVisionCard";
import TestimonialCard from "./Modules/TestimonialCard";
import ContactSection from "./Modules/ContactSection";


export default function Home() {
    return (
        <div>
            <Solutions />
            <Service />
            <BenefitsSection />
            <ComplianceAndCreditSection />
            <MissionVisionCard />
            <TestimonialCard />
            <ContactSection />


        </div>
    );

}
