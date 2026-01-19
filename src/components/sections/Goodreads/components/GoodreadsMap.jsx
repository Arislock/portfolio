import map from "../../../../assets/img/goodreads/map.png"; 
import OliverMap from "../../../../assets/img/goodreads/OliverMap.png";
import LenaMap from "../../../../assets/img/goodreads/LenaMap.png";

export const GoodreadsMap = () => {
  return (
    <div>
      <div className="flex gap-8 mt-48">
        <img src={map} alt="Map" className="w-32 h-32 z-10" />
        <div className="flex flex-col gap-8 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">User Journey Map</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          Examining the full user experience and ideating effective solutions.
          </h1>
          <p className="gr-font-body">Detailing the thoughts, actions, and feelings of users interacting with the Goodreads app.</p>
          <img src={OliverMap} alt="Oliver Journey Map" className="w-250" /> 
          <img src={LenaMap} alt="Lena Journey Map" className="w-250 mt-12" /> 
        </div>
      </div>
    </div>
  );
};