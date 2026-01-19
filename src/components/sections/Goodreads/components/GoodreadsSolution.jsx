import lightbulb from "../../../../assets/img/goodreads/lightbulb.png";
import tabs from "../../../../assets/img/goodreads/tabs.png";
import obScreens from "../../../../assets/img/goodreads/obScreens.png";
import noteScreens from "../../../../assets/img/goodreads/noteScreens.png";
import exploreScreens from "../../../../assets/img/goodreads/exploreScreens.png";
import socialScreens from "../../../../assets/img/goodreads/socialScreens.png";


export const GoodreadsSolution = () => {
  return (
    <div>
      <div className="flex gap-8 mt-48">
        <img src={lightbulb} alt="Lightbulb" className="w-32 h-32 z-10" />
        <div className="flex flex-col gap-8 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Solution</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          Redefining the reader’s journey.
          </h1>
          <p className="gr-font-body">Using the insights gathered from the user personas and user journey maps, I began to reorganize the entire layout of the app, since many pain points lie in poor navigation and confusing user flow. I separated the core app features into 5 distinct tabs - Explore, Library, Stats, Socials, and Profile.</p>
          <img src={tabs} alt="Tabs" className="w-250" /> 
          <p className="gr-font-body text-center">Below, I have highlighted the key features that are vital to the redesign.</p>
          
          <div className="flex flex-col gap-4 mt-16">
            <h1 className="relative w-fit gr-font-subheading uppercase font-bold text-xl px-1 py-0.5">Onboarding<span className="absolute left-0 bottom-1 w-full h-2 bg-[#FFD592] -z-10"></span></h1>
            <p className="gr-font-body">I have implemented an onboarding process in which users are asked a series of questions that would set up a smooth app experience. The user can select their favourite books and authors, which is then used to generate relevant, personalized book recommendations once they land in the app. Additionally, the user is given the option to log the book they are currently reading so that it can be tracked in the app.</p>
            <img src={obScreens} alt="Onboarding Screens" />
          </div>

          <div className="flex flex-col gap-4 mt-16">
            <h1 className="relative w-fit gr-font-subheading uppercase font-bold text-xl px-1 py-0.5">Notes<span className="absolute left-0 bottom-1 w-full h-2 bg-[#FFD592] -z-10"></span></h1>
            <p className="gr-font-body">Users can now easily access their notes in the “Notes” subsection within the Library tab. This dedicated page allows users to preview, edit, delete, and favourite their notes with ease. To support efficient organization and retrieval, notes can be filtered by book, date written, or specific keywords. At the end of each writing session, users are presented with writing insights, such as word count and time spent, to help them reflect on and track their progress.</p>
            <img src={noteScreens} alt="Note Screens" />
          </div>

          <div className="flex flex-col gap-4 mt-16">
            <h1 className="relative w-fit gr-font-subheading uppercase font-bold text-xl px-1 py-0.5">Personalized Recommendations<span className="absolute left-0 bottom-1 w-full h-2 bg-[#FFD592] -z-10"></span></h1>
            <p className="gr-font-body">The recommendation algorithm takes in account the user’s onboarding answers, reading history, and in-app activity to deliver personalized book recommendations. At the top of the the Explore Tab, a personalized banner highlights themed collections curated specifically for each user. In this page, users also receive recommendations based on past reads, books that they rated highly, and works by authors that they enjoy. This ensures a continuously relevant and engaging discovery experience.</p>
            <img src={exploreScreens} alt="Explore Screens" />
          </div>

          <div className="flex flex-col gap-4 mt-16">
            <h1 className="relative w-fit gr-font-subheading uppercase font-bold text-xl px-1 py-0.5">Socials Tab<span className="absolute left-0 bottom-1 w-full h-2 bg-[#FFD592] -z-10"></span></h1>
            <p className="gr-font-body">Social features such as book clubs, group reading challenges, and giveaways now exist within the new Socials Tab. Beyond these core features, the new Feed subsection within the Socials Tab enables users to browse posts from other fellow readers, encouraging social engagement and book discovery. User can easily browse reading clubs by filtering by tags that appeal to them, like “cozy” and “mystery”. Furthermore, the reading challenge feature now allow users to create their own challenges, with prompts displayed to provide clarity.</p>
            <img src={socialScreens} alt="Social Screens" />
          </div>

            <h1 className="relative w-fit gr-font-subheading uppercase font-bold text-xl px-1 py-0.5 hover:bg-[#FFD592]"><a href="https://www.figma.com/design/kxC2QoNiHRp61gt69j2fHj/Goodreads-Redesign?node-id=0-1">View the full prototype here</a></h1>
            

        </div>
      </div>
    </div>
  );
};