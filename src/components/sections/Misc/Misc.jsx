import vending from "../../../assets/img/misc/vending.png";
import nicole from "../../../assets/img/misc/nicole.png";
import quoramap from "../../../assets/img/misc/quoramap.png"; 
import wireframe from "../../../assets/img/misc/quora.png"; 
import sancarlo  from "../../../assets/img/misc/sancarlo.png"; 
import strad from "../../../assets/img/misc/strad.png"; 

export const Misc = () => {
  
    return (
      <div className="flex flex-col gap-16 items-center mt-24">
        <div className="flex flex-col gap-4 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Course: BET350 Customer Experience Design</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          Reimagined Vending Machine
          </h1>
          <p className="gr-font-body">Design of a space-efficient, wall-mounted vending machine with a large interactive touchscreen for intuitive product browsing and selection.</p>
          <img src={vending} alt="Vending Machine Redesign" className="w-225" /> 
          <p className="gr-font-body text-left text-sm">Reimagined Vending Machine Sketch</p>
          <img src={nicole} alt="Nicole Profile" className="w-225" /> 
          <p className="gr-font-body text-left text-sm">Customer Profile</p>
        </div>

        <div className="flex flex-col gap-4 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Course: SYDE 162 Human Factors in Design</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          Redesigning Quora
          </h1>
          <p className="gr-font-body">Redesigned the Quora site layout to enhance navigability and reduce cognitive load when browsing a singular thread.</p>
          <img src={quoramap} alt="Quora User Journey Map" className="w-225" /> 
          <p className="gr-font-body text-left text-sm">User Journey Map</p>
          <img src={wireframe} alt="Quora User Journey Map" className="w-225" /> 
          <p className="gr-font-body text-left text-sm">Wireframe</p>
        </div>

        <div className="flex flex-col gap-4 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Course: ARCH 246 Cultural Encounters 600-1600</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          Exploring the San Carlo alle Quattro Fontane
          </h1>
          <p className="gr-font-body">Weaving architecture with storytelling.</p>
          <img src={sancarlo} alt="San Carlo alle Quattro Fontane" className="w-225" /> 
          <p className="gr-font-body text-left text-sm">San Carlo alle Quattro Fontane Walkthrough</p>
        </div>

        <div className="flex flex-col gap-4 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Course: ARCH 292 Design Studio</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          The Stradivarius
          </h1>
          <p className="gr-font-body">Outling the history of the Stradivarius violin and the tradition of violin-making.</p>
          <img src={strad} alt="The Stradivarius" className="w-225" />
          <p className="gr-font-body text-left text-sm">Stradivarius: The Art of Violin-Making Infographic</p>
          </div>
      </div>
  );
};