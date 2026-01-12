
import pigeon from "../../../../assets/img/goodreads/pigeon.png";

export const GoodreadsProblem = () => {
    
  return (
    <div className="flex items-center mt-64">
      <div className="flex flex-col relative gap-4 text-left">
        <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Goal</h2>
        <h1 className="gr-font-heading text-4xl font-bold">
          Create an intuitive and enjoyable experience for users to compliment their reading activities.
        </h1>
        <p className="gr-font-body">At the core, Goodreads’ purpose is to help readers discover and connect with books they love through book recommendations, reviews, and community engagement. However, with its outdated user interface and disintegrated information architecture, users are frustrated by the app’s poor user experience. Neglecting its user experience places Goodreads at risk of losing users to competitors that have prioritized intuitive and user-friendly design.</p>
      </div>
      <img src={pigeon} alt="Pigeon" className="w-200" />
      </div>
  );
};