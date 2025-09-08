
import Intro from "./Modules/Intro.jsx";
import Banks from "./Modules/Banks.jsx";
import Caracteristicas from "./Modules/Caracteristicas.jsx";
import FAQs from "./Modules/FAQs.jsx";
import Legal from "./Modules/Legal.jsx";
import Pricing from "./Modules/Pricing.jsx";
import TrustAndStats from "./Modules/TrustAndStats.jsx";
import Testimonials from "./Modules/Testimonials.jsx";

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
