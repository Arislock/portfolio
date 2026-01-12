import coverPage from "../../../../assets/img/goodreads/coverPage.png";
import downArrow from "../../../../assets/img/goodreads/arrowDown.png";

export const GoodreadsHeader = () => {
    const tag = "bg-[#B3B6FF] py-1.5 px-2";
    const subheading = "gr-font-subheading uppercase text-gray-400 font-semibold";

  return (
      <div className="flex w-full items-center relative gap-20 mt-8">
        <div className="max-w-130 text-left space-y-6">
        <div className="flex gap-4">
            <p className={tag}>UI/UX</p>
            <p className={tag}>Case Study</p>
        </div>
          <h1 className="gr-font-heading text-4xl font-bold">
            Redefining the Reading Experience for the Digital Age
          </h1>

          <p className="gr-font-body">
            Reimagining the Goodreads app, the world’s largest online reading platform.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-96">
            <div>
              <p className={subheading}>Role</p>
              <p className="gr-font-body">Full-Stack Designer</p>
            </div>
            <div>
              <p className={subheading}>Timeline</p>
              <p className="gr-font-body">2025 (Sep-Dec)</p>
            </div>
            <div>
              <p className={subheading}>Skills</p>
              <p className="gr-font-body">Product Design</p>
              <p className="gr-font-body">User Research</p>
              <p className="gr-font-body">Prototyping</p>
            </div>
            <div>
              <p className={subheading}>Tools</p>
              <p className="gr-font-body">Figma</p>
              <p className="gr-font-body">Adobe Photoshop</p>
              <p className="gr-font-body">Adobe Illustrator</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img
            src={downArrow}
            alt="arrow"
            className="w-8 h-8"
            />
            <p className="gr-font-body font-medium">Jump to Final Design + Prototype</p>
          </div>
        </div>
        <img
            src={coverPage}
            alt="Goodreads Case Study"
            className="w-225"
            />
      </div>
  );
};