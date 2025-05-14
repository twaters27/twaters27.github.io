import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
    "JavaScript",
  ];

  const backendSkills = ["Node.js", "Express", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent text-center">
            {" "}
            About
          </h2>

          <div className="rounded-xl p-8 border-purple/10 border hover:-translate-y-1 transition-all">
            <p className="text-purple-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-purple/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-purple-300 space-y-2">
                <li>
                  <strong>900 Hour Coding Program</strong> - West-MEC Central
                </li>
                <p>
                  Earned my ITS certification in JavaScript and HTML5
                  (Certiport)
                </p>
                <li>
                  <strong>Estrella Mountain Community College</strong> - Dual
                  Enrollment (West-MEC)
                </li>
                <p>
                  Relavant Coursework: Computer Information Systems,
                  Internet/Web Dev, Introduction to Javascript, Web Scripting
                  with PHP, and Object-Oriented Programming
                </p>

                <li>
                  <strong>High School Diploma</strong> - Canyon View High School
                </li>
                <p>
                  Relavant Coursework: Coding 1-2, Coding Honors 3-4, AP Comp
                  Sci Principals (3)
                </p>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-purple/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-purple-300">
                <div>
                  <h4 className="font-semibold">Server and Busser - </h4>
                  <p>
                    Worked over the summer as a server/busser at a diner.
                    Learned Teamwork, coordiation, stress management, and
                    problem solving. (2023)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold"> </h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
