import future from "../../../../assets/img/goodreads/future.png";

export const GoodreadsConclusion = () => {
  return (
    <div>
      <div className="flex gap-8 mt-48">
        <img src={future} alt="Crystal Ball" className="w-32 h-32 z-10" />
        <div className="flex flex-col gap-8 text-left z-10 w-225">
          <h2 className="gr-font-subheading uppercase text-gray-400 font-semibold">Conclusion</h2>
          <h1 className="gr-font-heading text-4xl font-bold">
            Key takeaways and future plans
        </h1>
          <p className="gr-font-body">
            As my first UX case study, the Goodreads redesign has challenge me to define the scope of a design project and expand my design thinking to address the needs and expectations of users. I thoroughly enjoyed the discovery phase of the redesign where I crafted personas to walk through the app and uncover hidden design flaws, which gave me crucial insights into my design process. I also enjoyed translating my ideas into mockups and high-fidelity wireframes to experiment with different design directions, and later tinkering with Figma prototyping tools to bring these designs to life. All in all, this is a project that I want to revisit in the future as I believe certain discoveries could be explored in-depth and various design decisions could be expanded on. <br /> For future projects, I want to expand on the user research phase and by conducting user interviews with Goodreads users to dive deeper into their experiences using the app. Additionally, I want to conduct usability testing and receive user and designers feedback for my redesigns. This would allow me to recognize my blindspots and revisit my design decisions to thoroughly address and expand on user needs.
          </p>
        </div>
      </div>
    </div>
  );
};