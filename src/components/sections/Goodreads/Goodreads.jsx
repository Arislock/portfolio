import { GoodreadsHeader } from "./components/GoodreadsHeader";
import { GoodreadsProblem } from "./components/GoodreadsProblem";

export const Goodreads = () => {
  return (
    <>
      <div className="flex items-center justify-center relative">
        <GoodreadsHeader/>
        <GoodreadsProblem/>
      </div>
    </>
  );
};