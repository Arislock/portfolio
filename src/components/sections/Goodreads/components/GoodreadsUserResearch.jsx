import problem from "../../../../assets/img/goodreads/problem.png";
import stickyNote from "../../../../assets/img/goodreads/stickyNote.png";
import stars from "../../../../assets/img/goodreads/stars.png"; 
import megaphone from "../../../../assets/img/goodreads/megaphone.png"; 
import book from "../../../../assets/img/goodreads/book.png"; 
import paperplane from "../../../../assets/img/goodreads/paperplane.png"; 


export const GoodreadsUserResearch = () => {
    const stickyNoteContainer = "absolute top-10 left-8 right-8 flex flex-col gap-2 mt-8";
    const heading = "w-fit gr-font-subheading uppercase font-bold text-xl bg-[#FFD592] px-2 py-1";
    const body = "gr-font-body w-80";
    const icon = "absolute -bottom-16 right-16 w-18";
    
    return (
    <div>
      <div className="flex gap-8 mt-48">
        <img src={problem} alt="Problem" className="w-32 h-32 z-10" />
        <div className="flex flex-col gap-8 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">User Research</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
            Uncovering user’s needs and motivations           
            </h1>
          <p className="gr-font-body">For this case study, I have analyzed countless journal articles, app reviews, and blogs to gather user research. In addition to pinpointing any unmet needs, I also noted down what users enjoy about the app so I could get a better idea of how to enhance current app features. Gathering user insights will build the foundation for the app redesign to improve its usability, satisfaction, and engagement.
            I will be exploring the four core components of the app: </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-8">
                <div className="relative">
                    <img src={stickyNote} alt="Sticky Note" className="w-96"/>
                    <div className={stickyNoteContainer}>
                        <span className={heading}>Ratings + Reviews</span>
                        <p className={body}>Users feel that book ratings on Goodreads do not reflect the actual quality of the books due to unreliable ratings and reviews.</p>
                        <div className="">
                            <img src={stars} alt="Stars"  className={icon}/>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={stickyNote} alt="Sticky Note" className="w-96"/>
                    <div className={stickyNoteContainer}>
                        <span className={heading}>Recommendations</span>
                        <p className={body}>The recommendation system of Goodreads is quite basic in the sense that it pushes popular books with no regard for the user’s personal taste.</p>
                        <div className="">
                            <img src={megaphone} alt="Megaphone"  className={icon}/>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={stickyNote} alt="Sticky Note" className="w-96"/>
                    <div className={stickyNoteContainer}>
                        <span className={heading}>Tracking Activity</span>
                        <p className={body}>Users find it difficult to track down their reading activity because the user interface makes it difficult to navigate the app even for simple tasks. </p>
                        <div className="">
                            <img src={book} alt="Book"  className={icon}/>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={stickyNote} alt="Sticky Note" className="w-96"/>
                    <div className={stickyNoteContainer}>
                        <span className={heading}>Community</span>
                        <p className={body}>Users find it difficult to track down their reading activity because the user interface makes it difficult to navigate the app even for simple tasks.</p>
                        <div className="">
                            <img src={paperplane} alt="Paper Plane"  className={icon}/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
    </div> 
  );
};