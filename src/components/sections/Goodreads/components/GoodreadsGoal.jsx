
import goal from "../../../../assets/img/goodreads/goal.png";
import screen from "../../../../assets/img/goodreads/screen.png";

export const GoodreadsGoal = () => {
  return (
    <div>
      <div className="flex gap-8 mt-48">
        <img src={goal} alt="Goal" className="w-32 h-32 z-10" />
        <div className="flex flex-col gap-8 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Goal</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          Create an intuitive and enjoyable experience for users to compliment their reading activities.
          </h1>
          <div className="flex gap-16">
            <p className="gr-font-body">This case study aims to enhance the user interface and resolve critical user pain points, ultimately transforming the app into an intuitive and enjoyable experience. Through conducting user research, revamping the user interface of the app, and incorporating features requested by users, the goal is to modernize the app into one that is user-friendly and satisfying to navigate.</p>
            <img src={screen} alt="Screen" className="w-70" /> 
          </div>
        </div>
      </div>
    </div>
  );
};