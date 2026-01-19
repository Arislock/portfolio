import persona from "../../../../assets/img/goodreads/persona.png";
import Oliver from "../../../../assets/img/goodreads/personaOliver.png";
import Lena from "../../../../assets/img/goodreads/personaLena.png";
import notebook from "../../../../assets/img/goodreads/notebook.png";
import gender from "../../../../assets/img/goodreads/gender.png";
import age from "../../../../assets/img/goodreads/age.png";
import suitcase from "../../../../assets/img/goodreads/suitcase.png";
import line from "../../../../assets/img/goodreads/line.png";
import slider from "../../../../assets/img/goodreads/slider.png";

export const GoodreadsPersonas = () => {
  const heading = "w-fit gr-font-heading uppercase font-bold text-lg bg-[#FFD592] px-1 py-0.5 mb-2";
  // "gr-font-heading font-bold uppercase text-lg "
  
  return (
    <div>
      <div className="flex gap-8 mt-48">
        <img src={persona} alt="Personas" className="w-32 h-32 z-10" />
        <div className="flex flex-col gap-8 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Persona</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
          Representing target users and examining their objectives.
          </h1>
          <p className="gr-font-body">Meet Oliver and Lena, personas that represent the vast majority of users on the Goodreads platform.</p>
          
          {/* Oliver */}
          <div className="flex w-max gap-8 mt-4">
            <div className="relative w-max">
              <img
                src={Oliver}
                alt="Oliver"
                className="h-100 w-auto block"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-end pl-3 pb-36 z-10">
                <h2 className="gr-font-subheading font-bold">
                  Oliver Crest
                </h2>

                <div className="flex flex-col gap-1 mt-2">
                  <div className="flex gap-1 items-center">
                    <img src={gender} alt="Gender" className="w-6 h-auto" />
                    <p className="uppercase gr-font-body font-bold text-sm">Gender:</p>
                    <p className="gr-font-body text-sm">Male</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={age} alt="Age" className="w-6 h-auto" />
                    <p className="uppercase gr-font-body font-bold text-sm">Age:</p>
                    <p className="gr-font-body text-sm">20</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={suitcase} alt="Occupation" className="w-6 h-auto" />
                    <p className="uppercase gr-font-body font-bold text-sm">Occupation:</p>
                    <p className="gr-font-body text-sm">Student</p>
                  </div>

                </div>
              </div>
            </div>
            <div className="relative w-max">
              <img
                src={notebook}
                alt="Notebook"
                className="h-130 w-auto block"
              />

              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-8 p-12 w-185 z-10">
                <div>
                  <h1 className={heading}>Description</h1>
                  <p className="gr-font-body text-sm">
                    A computer science major who wants to get into the habit of reading. He has always loved to read but now struggles to make time for it as a busy college student. He wants to build a consistent reading habit and keep track of all the books he has read throughout the year.
                  </p>
                </div>

                <div>
                  <h1 className={heading}>Goals</h1>
                  <div className="gr-font-body gap-8 text-sm">
                    <ul>
                      <li>• build a consistent daily reading routine to unwind from studying everyday</li>
                      <br />
                      <li>• wants to explore books beyond his usual preferences</li>
                      <br />
                      <li>• keep track of books read</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h1 className={heading}>Personality</h1>
                  <div className="gr-font-body text-sm">
                    <p>Openness</p>
                    <div className="relative w-fit mt-1.5 mb-1.5">
                      <img src={line} alt="Line" className="block" />
                      <img
                        src={slider}
                        alt="Slider"
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 w-1.5 z-10"
                      />
                    </div>
                    <p>Conscientiousness</p>
                    <div className="relative w-fit mt-1.5 mb-1.5">
                      <img src={line} alt="Line" className="block" />
                      <img
                        src={slider}
                        alt="Slider"
                        className="absolute top-1/2 left-3/4 -translate-y-1/2 w-1.5 z-10"
                      />
                    </div>
                    <p>Extraversion</p>
                    <div className="relative w-fit mt-1.5 mb-1.5">
                      <img src={line} alt="Line" className="block" />
                      <img
                        src={slider}
                        alt="Slider"
                        className="absolute top-1/2 left-1/6 -translate-y-1/2 w-1.5 z-10"
                      />
                    </div>
                    <p>Agreeableness</p>
                    <div className="relative w-fit mt-1.5 mb-1.5">
                      <img src={line} alt="Line" className="block" />
                      <img
                        src={slider}
                        alt="Slider"
                        className="absolute top-1/2 left-3/4 -translate-y-1/2 w-1.5 z-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className={heading}>Frustrations</h1>
                  <div className="gr-font-body gap-8 text-sm">
                    <ul>
                      <li>• the app keeps recommending books that do not appeal to him</li>
                      <br />
                      <li>• too many steps are required to create and view notes</li>
                      <br />
                      <li>• finds the app layout to be confusing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lena */}
          <div className="flex w-max gap-8 mt-16">
            <div className="relative w-max">
              <img
                src={Lena}
                alt="Oliver"
                className="h-100 w-auto block"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-end pl-3 pb-36 z-10">
                <h2 className="gr-font-subheading font-bold">
                  Lena Monroe
                </h2>

                <div className="flex flex-col gap-1 mt-2">
                  <div className="flex gap-1 items-center">
                    <img src={gender} alt="Gender" className="w-6 h-auto" />
                    <p className="uppercase gr-font-body font-bold text-sm">Gender:</p>
                    <p className="gr-font-body text-sm">Female</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={age} alt="Age" className="w-6 h-auto" />
                    <p className="uppercase gr-font-body font-bold text-sm">Age:</p>
                    <p className="gr-font-body text-sm">34</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={suitcase} alt="Occupation" className="w-6 h-auto" />
                    <p className="uppercase gr-font-body font-bold text-sm">Occupation:</p>
                    <p className="gr-font-body text-sm">Journalist</p>
                  </div>

                </div>
              </div>
            </div>
            <div className="relative w-max">
              <img
                src={notebook}
                alt="Notebook"
                className="h-130 w-auto block"
              />

              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-8 p-12 w-185 z-10">
                <div>
                  <h1 className={heading}>Description</h1>
                  <p className="gr-font-body text-sm">
                    A mom and freelance journalist who spends most of her time at home. Since she does not have the time to go to in-person book clubs, she wants to meet new people and share her love for books through joining online book clubs. 
                  </p>
                </div>

                <div>
                  <h1 className={heading}>Goals</h1>
                  <div className="gr-font-body gap-8 text-sm">
                    <ul>
                      <li>• make friends through joining online reading communities</li>
                      <br />
                      <li>• participate in book discussions and share her reading lists publicly</li>
                      <br />
                      <li>• interact with authors on the platform</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h1 className={heading}>Personality</h1>
                  <div className="gr-font-body text-sm">
                    <p>Openness</p>
                    <div className="relative w-fit mt-1.5 mb-1.5">
                      <img src={line} alt="Line" className="block" />
                      <img
                        src={slider}
                        alt="Slider"
                        className="absolute top-1/2 left-3/4 -translate-y-1/2 w-1.5 z-10"
                      />
                    </div>
                    <p>Conscientiousness</p>
                    <div className="relative w-fit mt-1.5 mb-1.5">
                      <img src={line} alt="Line" className="block" />
                      <img
                        src={slider}
                        alt="Slider"
                        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-1.5 z-10"
                      />
                    </div>
                    <p>Extraversion</p>
                    <div className="relative w-fit mt-1.5 mb-1.5">
                      <img src={line} alt="Line" className="block" />
                      <img
                        src={slider}
                        alt="Slider"
                        className="absolute top-1/2 left-5/6 -translate-y-1/2 w-1.5 z-10"
                      />
                    </div>
                    <p>Agreeableness</p>
                    <div className="relative w-fit mt-1.5 mb-1.5">
                      <img src={line} alt="Line" className="block" />
                      <img
                        src={slider}
                        alt="Slider"
                        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-1.5 z-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className={heading}>Frustrations</h1>
                  <div className="gr-font-body gap-8 text-sm">
                    <ul>
                      <li>• finds it difficult to search up and join book clubs on the app</li>
                      <br />
                      <li>• the app feels old and unappealing to use</li>
                      <br />
                      <li>• having to scroll all the way down to add a new comment to discussion boards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

