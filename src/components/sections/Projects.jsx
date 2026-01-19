
import { useNavigate } from "react-router-dom"
import caseStudyFile from "../../assets/img/caseStudyFile.png";
import archFile from "../../assets/img/archFile.png";
import miscFile from "../../assets/img/miscFile.png";


export const Projects = () => {
    const navigate = useNavigate();

    const file = "flex w-80 transition-transform duration-200 ease-out hover:scale-105";
    const tag = "bg-[#B3B6FF] py-1.5 px-2";
    
    return (
        <section
            id="projects"
            className="min-h-[calc(100vh-2rem)] flex items-center justify-center relative"
            >
            <div className="flex justify-between gap-16">
                <div className="flex flex-col items-start gap-5 w-80">
                    <img src={caseStudyFile} className={file} onClick={() => navigate("/case-study")}/>
                    <h1 className="font-semibold text-xl inline-block bg-[#E7FF92] px-2 py-1.5">Goodreads Case Study</h1>
                    <div className="flex gap-8">
                        <p>Personal Project</p>
                        <p>2025 (Sep-Dec)</p>
                    </div>
                    <p className="text-start">Redesigning the Goodreads app, the world’s largest online reading platform. </p>
                    <div className="flex gap-4">
                        <p className={tag}>UI/UX</p>
                        <p className={tag}>Case Study</p>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-5 w-80">
                    <a href={`${import.meta.env.BASE_URL}Architecture Portfolio.pdf`} target="_blank"><img src={archFile} className={file}/></a>
                    <h1 className="font-semibold text-xl inline-block bg-[#E7FF92] px-2 py-1.5">Architecture Portfolio</h1>
                    <div className="flex gap-32">
                        <p>Classworks</p>
                        <p>2022-2023</p>
                    </div>
                    <p className="text-start">First year architectural design projects showcasing concept diagrams, floor plans, and detailed architectural renders. </p>
                    <div className="flex gap-4">
                        <p className={tag}>Architecture</p>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-5 w-80">
                    <img src={miscFile} className={file} onClick={() => navigate("/misc")}/>
                    <h1 className="font-semibold text-xl inline-block bg-[#E7FF92] px-2 py-1.5">Miscellaneous Works</h1>
                    <div className="flex gap-32">
                        <p>Classworks</p>
                        <p>2023-2025</p>
                    </div>
                    <p className="text-start">A collection of explorations in user experience and visual storytelling.</p>
                    <div className="flex gap-4">
                        <p className={tag}>User Research</p>
                        <p className={tag}>Infographics</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
};