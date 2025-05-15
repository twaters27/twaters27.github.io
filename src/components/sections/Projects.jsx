import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-purple/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Laravel Task App</h3>
              <p className="text-purple-400 mb-4">
                A task management application built with the Laravel framework
                and MySQL featuring real-time updates and user authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MySQL", "Git", "Tailwind", "PHP", "HTML", "CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/twaters27/laravel-task-app-home"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-purple/10
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">MECAZON</h3>
              <p className="text-purple-400 mb-4">
                A full-stack e-commerce platform with a modern UI, and
                customizable product inventory. Based on Amazon.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "ExpressJS", "React", "JavaScript"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-purple-500/10 text-purple-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/orgs/WestMecCoding/teams/12pm-teamc-client-dev-mecazon"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-purple/10
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Chess Game (Javascript)
              </h3>
              <p className="text-purple-400 mb-4">
                Web Based chess game built with HTML, CSS, and Javascript.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "HTML", "CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-purple-500/10 text-purple-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/twaters27/ChessGameJS"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-purple/10
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Chess Game (Python)</h3>
              <p className="text-purple-400 mb-4">
                Fully implemented chess game made in Python and Pygame.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "PyGame"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/twaters27/ChessGame"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
