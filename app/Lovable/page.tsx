import Modulox from "./Modules/Modulox";
import Marco from "./Modules/Marco";
import Condusef from "./Modules/Condusef";
import Testimonios from "./Modules/Testimonios";
import Intro from "./Modules/Intro";

export default function Home() {
    return (
        <div>

            <Intro />
            <Modulox />
            <Marco />
            <Condusef />
            <Testimonios />

        </div>
    );

}
