
import Intro from "./Modules/Intro";
import Banks from "./Modules/Banks";
import Caracteristicas from "./Modules/Caracteristicas";
import FAQs from "./Modules/FAQs";
import Legal from "./Modules/Legal";
import Pricing from "./Modules/Pricing";
import TrustAndStats from "./Modules/TrustAndStats";
import Testimonials from "./Modules/Testimonials";

export default function Home() {

    return (
        <div>
            <Intro />
            <Banks />
            <Caracteristicas />
            <FAQs />
            <Pricing />
            <Testimonials />
            <TrustAndStats />
            <Legal />

        </div>
    );

}
