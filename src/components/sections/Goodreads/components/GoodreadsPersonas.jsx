import persona from "../../../../assets/img/goodreads/persona.png";

export const GoodreadsPersonas = () => {
  return (
    <div>
      <div className="flex gap-8 mt-48">
        <img src={persona} alt="Warning" className="w-32 h-32 z-10" />
        <div className="flex flex-col gap-8 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Persona</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          Representing target users and examining their objectives.
          </h1>
          <p className="gr-font-body">Meet Oliver and Lena, personas that represent the vast majority of users on the Goodreads platform. </p>
        </div>
      </div>
    </div>
  );
};