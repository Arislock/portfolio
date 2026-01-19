import { GoodreadsHeader } from "./components/GoodreadsHeader";
import { GoodreadsProblem } from "./components/GoodreadsProblem";
import { GoodreadsGoal } from "./components/GoodreadsGoal";
import { GoodreadsUserResearch } from "./components/GoodreadsUserResearch";
import { GoodreadsPersonas } from "./components/GoodreadsPersonas";
import { GoodreadsMap } from "./components/GoodreadsMap";
import { GoodreadsSolution } from "./components/GoodreadsSolution";
import { GoodreadsBranding } from "./components/GoodreadsBranding";
import { GoodreadsConclusion } from "./components/GoodreadsConclusion";

export const Goodreads = () => {
  return (
    <>
      <div>
        <GoodreadsHeader/>
        <GoodreadsProblem/>
        <GoodreadsGoal/>
        <GoodreadsUserResearch/>
        <GoodreadsPersonas/>
        <GoodreadsMap/>
        <GoodreadsSolution/>
        <GoodreadsBranding/>
        <GoodreadsConclusion/>

        
      </div>
    </>
  );
};