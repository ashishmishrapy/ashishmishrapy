import React, { useState } from "react";

const About = () => {
  const [activeSection, setActiveSection] = useState("summary");

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  return (
    <div className="min-h-screen pt-[75px] p-1 md:px-5">
      <section id="about" className="mb-5">
        <nav className="flex flex-col gap-2 md:justify-evenly">
          <button
            onClick={() => toggleSection("summary")}
            className="shadow cursor-pointer hover:text-gray-400 rounded-2xl px-3 py-1 shadow-black text-(--grey)"
          >
            Summary
          </button>
          <button
            onClick={() => toggleSection("experience")}
            className="shadow cursor-pointer hover:text-gray-400 rounded-2xl px-3 py-1 shadow-black text-(--grey)"
          >
            Experience
          </button>
          <button
            onClick={() => toggleSection("skills")}
            className="shadow cursor-pointer hover:text-gray-400 rounded-2xl px-3 py-1 shadow-black text-(--grey)"
          >
            Skills
          </button>
          <button
            onClick={() => toggleSection("education")}
            className="shadow cursor-pointer hover:text-gray-400 rounded-2xl px-3 py-1 shadow-black text-(--grey)"
          >
            Education
          </button>
        </nav>
      </section>

      {/* Summary Section */}
      {activeSection === "summary" && (
        <section id="summary" className="p-2">
          <h2 className="text-white font-bold text-2xl mb-2">
            Profile Summary
          </h2>
          <p className="text-(--grey)">
            I’m <span className="text-[#FE9A00]"> Ashish Mishra</span>, a passionate and dedicated MCA student
            specializing in Full Stack Development, with a strong focus on the
            MERN stack (MongoDB, Express.js, React.js, and Node.js). I thrive on
            transforming ideas into interactive, scalable, and high-performance
            web applications that create meaningful digital experiences.
            <br />
            <br />
            During my academic journey, I have built a solid foundation in web
            technologies, front-end frameworks, and server-side development. My
            hands-on approach to learning has helped me develop real-world
            solutions and understand the end-to-end process of software creation
            — from user interface design to database management.
            <br />
            <br />
            Beyond web development, I am also deeply interested in mobile app
            development, continuously exploring cross-platform frameworks and
            mobile-first design principles. I enjoy staying up to date with
            emerging technologies, coding best practices, and the latest trends
            in full-stack development.
            <br />
            <br />
            I’m now looking to contribute my skills to impactful projects,
            collaborate with creative teams, and continue growing as a versatile
            developer capable of building efficient, user-friendly digital
            solutions.
          </p>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === "experience" && (
        <section id="experience" className="p-2">
          <h2 className="text-white font-bold text-2xl mb-2">
            Experience
          </h2>
          <p className="text-(--grey)">
            <strong>Shopify Web Developer Intern</strong> — 2-month internship
            <br />
            <br />
            • Customized and optimized Shopify themes for better user
            experience. <br />• Integrated third-party apps and plugins to
            improve functionality. <br />
            • Collaborated with the team to enhance e-commerce site performance
            and SEO. <br />• Gained hands-on experience in client-based project
            delivery.
          </p>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === "skills" && (
        <section id="skills" className="p-2">
          <h2 className="text-white font-bold text-2xl mb-2">
            Skills
          </h2>
          <ul className="list-disc list-inside text-(--grey)">
            <li><b>Programming Languages: </b> JavaScript ( Advance ), Python ( Intermediate ), Java ( Intermediate ), C ( Intermediate )</li>
            <li> <b>Frontend: </b> HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap</li>
            <li><b>Backend: </b> Node.js, Express.js, MongoDB, SQL, REST APIs, WebSocket</li>
            <li><b>Tools & Platform: </b> Postman, Git, GitHub</li>
            <li><b>Interest: </b> Flutter/Native Android (App Development)</li>
          </ul>
        </section>
      )}

      {/* Education Section */}
      {activeSection === "education" && (
        <section id="education" className="p-2">
          <h2 className="text-white font-bold text-2xl mb-2">
            Education
          </h2>
          <div className="text-(--grey) space-y-4">
            <p>
              <strong>Master of Computer Applications (MCA)</strong>
              <br />
              <span>Dev Bhoomi Uttarakhand University</span>
              <br />
              <span>2024 – Expected 2026</span>
            </p>

            <p>
              <strong>
                Bachelor of Science in Information Technology (BSc IT)
              </strong>
              <br />
              <span>University of Mumbai</span>
              <br />
              <span>2021 – 2024</span>
            </p>

            <p>
              <strong>Higher Secondary (12th)</strong>
              <br />
              <span>
                Government Higher Secondary School, Silvassa — Tokarkhada
              </span>
              <br />
              <span>2021</span>
            </p>

            <p>
              <strong>Secondary School (10th)</strong>
              <br />
              <span>
                Government Higher Secondary School, Silvassa — Tokarkhada
              </span>
              <br />
              <span>2019</span>
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
