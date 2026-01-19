import pigeon from "../../../../assets/img/goodreads/pigeon.png";
import warning from "../../../../assets/img/goodreads/warning.png";

export const GoodreadsProblem = () => {
  return (
    <div>
      <div className="flex gap-8 mt-48">
        <img src={warning} alt="Warning" className="w-32 h-32 z-10" />
        <div className="flex flex-col gap-8 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Goal</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          The outdated user experience has driven users to seek alternative apps for their reading activities.
          </h1>
          <p className="gr-font-body">At the core, Goodreads’ purpose is to help readers discover and connect with books they love through book recommendations, reviews, and community engagement. However, with its outdated user interface and disintegrated information architecture, users are frustrated by the app’s poor user experience. Neglecting its user experience places Goodreads at risk of losing users to competitors that have prioritized intuitive and user-friendly design.</p>
          <img src={pigeon} alt="Pigeon" className="w-200" /> 
        </div>
      </div>
    </div>
  );
};