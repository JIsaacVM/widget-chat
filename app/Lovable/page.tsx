import Modulox from "./Modules/Modulox.jsx";
import Marco from "./Modules/Marco.jsx";
import Condusef from "./Modules/Condusef.jsx";
import Testimonios from "./Modules/Testimonios.jsx";
import Intro from "./Modules/Intro.jsx";

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
