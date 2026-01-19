import paintbrush from "../../../../assets/img/goodreads/paintbrush.png";
import typoColor from "../../../../assets/img/goodreads/typoColor.png"; 
import vectorIcons from "../../../../assets/img/goodreads/vectorIcons.png"; 
import annotations from "../../../../assets/img/goodreads/annotations.png"; 

export const GoodreadsBranding = () => {
  return (
    <div>
      <div className="flex gap-8 mt-48">
        <img src={paintbrush} alt="Paintbrush" className="w-32 h-32 z-10" />
        <div className="flex flex-col gap-8 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Branding</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          A playful approach to reading.
          </h1>
          <p className="gr-font-body">Modernizing the app experience by reshaping Goodread’s visual language with a vibrant, playful color palette.</p>
        
        <div className="flex flex-col gap-16">
            <img src={typoColor} alt="Typography and Colors" className="w-150 mx-auto"/>
            <p className="gr-font-body">To reinforce the playful nature of the visual design, key headings and important texts are highlighted or underlined for emphasis, which was inspired by traditional book annotation.</p>
            <img src={annotations} alt="Annotations" className="w-150 mx-auto"/>
            <p className="gr-font-body">Rounded, bubbly icons and graphics play into the app’s whimsical visual identity.</p>
            <img src={vectorIcons} alt="Vector Icons" />
        </div>
        </div>
      </div>
    </div>
  );
};