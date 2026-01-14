import { GoodreadsHeader } from "./components/GoodreadsHeader";
import { GoodreadsProblem } from "./components/GoodreadsProblem";
import { GoodreadsGoal } from "./components/GoodreadsGoal";
import { GoodreadsUserResearch } from "./components/GoodreadsUserResearch";
import { GoodreadsPersonas } from "./components/GoodreadsPersonas";

export const Goodreads = () => {
  return (
    <>
      <div>
        <GoodreadsHeader/>
        <GoodreadsProblem/>
        <GoodreadsGoal/>
        <GoodreadsUserResearch/>
        <GoodreadsPersonas/>

        
      </div>
    </>
  );
};