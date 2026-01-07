import designIcon from "../../assets/icon/brush.png";
import devIcon from "../../assets/icon/computer.png";
import engIcon from "../../assets/icon/ruler.png";
import profile from "../../assets/img/profile.png";
import music from "../../assets/img/music.png";


import { Typewriter } from "react-simple-typewriter"

export const Home = () => {
    return (
    <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
        >
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl text-black font-medium">
                <Typewriter
                    words={["Hello there, I’m Melody!"]}
                    loop={1}         
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                </h1>
            <div className="flex gap-4 items-center justify-center">
                <p className="flex items-center gap-2 px-3 py-1.5"><img src={designIcon} className="w-8 h-8" />
                    designer</p>
                    <p>•</p>
                <p className="flex items-center gap-2 px-3 py-1.5"><img src={devIcon} className="w-8 h-8" />
                    developer</p>
                    <p>•</p>
                <p className="flex items-center gap-2 px-3 py-1.5"><img src={engIcon} className="w-8 h-8" />
                    engineer</p>
            </div>
            
            <div className="flex justify-center items-end">
                <div className="flex justify-content items-center gap-4">
                    <img src={profile} className="w-72"/>
                    <div className="flex flex-col gap-8">
                        <p className="text-left text-lg">
                            Im am a ⚙️ Systems Design Engineering student at the University of Waterloo with a unique background in 🏠 Architecture.</p>
                        <p className="text-left text-lg">
                            As an inquisitve learner, I enjoy tackling projects that exercise my creativity and problem-solving abilities. I strive to apply my innovative mindset and thoughtful approach to design purposeful user experiences. </p>
                        <p className="text-left text-lg">
                            You’ll often find me sketching slices of urban life on a park bench, playing around with melodies (haha) at the piano, or getting lost in a cozy book.</p>
                        <p className="text-left text-lg">
                            Check out my projects <a href="#projects">here!</a></p>
                    </div>
                </div>
                <img src={music} className="w-32"/>
            </div>
            
        </div>
    </section>)
};