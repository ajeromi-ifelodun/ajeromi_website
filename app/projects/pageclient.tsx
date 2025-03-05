"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { chunkArray } from "../../helpers/helper";
import education from "../../public/static/image/projectsimg/Education.png";
import health from "../../public/static/image/projectsimg/Health.png";
import infrastructure from "../../public/static/image/projectsimg/Infrastructure.png";
import welfare from "../../public/static/image/projectsimg/Welfare.png";
import sport from "../../public/static/image/projectsimg/sports.png";
import security from "../../public/static/image/projectsimg/security.png";
import youth from "../../public/static/image/projectsimg/youthdev.png";
import { StaticImageData } from "next/image";
interface Project {
  id: number;
  title: string;
  image: string | StaticImageData;
  description: string;
}
const projects = [
  {
    id: 1,
    title: "EDUCATION",
    image: education,
    description:
      "The administration of Ayoola Fatai Adekunle has successfully transformed public Pry schools in Ajegunle with state of the art facilities. The expansive classrooms are furnished and equipped with furnitures which are ideal for learning comfort. The public Pry schools are also equipped with libraries that are functional with Internet services.click the link below for videos on education programs and projects of the Ayoola's administration https://www.facebook.com?projects/education",
  },
  {
    id: 2,
    title: "HEALTH",
    image: health,
    description:
      "Hon. Fatai Adekunle Ayoola as part of his administration's vision and mission for quality health service delivery in the local government has equipped Pry Health Centres with State of the art facilities. The PHC runs 24 hours service delivery. And the Ayoola's administration as part of his administration's promise is determined to construct PHC across the 9 wards in the local government",
  },
  {
    id: 3,
    title: "INFRASTRUCTURE",
    image: infrastructure,
    description:
      "The administration of Hon. Fatai Adekunle Ayoola has constructed over 50 inner roads in Ajeromi-Ifelodun local government.  His administration is hoping to do more with construction of public facilities such as markets at Awodi-Ora and Achakpo, sporting facilities and reconstruction of Boundary Motor Park among others.",
  },
  {
    id: 4,
    title: "WELFARE",
    image: welfare,
    description:
      "The monthly stipend presented to the elderly residents in Ajeromi-Ifelodun local government is part of the social welfare package by the Ayoola's administration.  His government aside this has also set up emergency fund that are used to cater for medical bills of residents who underwent surgical operations among many other social interventions.",
  },
  {
    id: 5,
    title: "SPORT",
    image: sport,
    description:
      "The evolution of sports in Ajeromi-Ifelodun local government under the administration of Hon. Fatai Adekunle Ayoola cannot be over-emphasized. His administration has ensured that public Pry schools in the local government are equipped with sporting facilities such as the Five-A-Side astro turf football pitch, basketball court, table tennis and recently boxing ring. These are part of his administration's commitment towards the discovery and nurturing of sporting talents beyond the confines of Ajegunle.",
  },
  {
    id: 6,
    title: "SECURITY",
    image: security,
    description:
      "The Hon. Fatai Adekunle Ayoola's administration has enhanced the effectiveness of security agencies I'm Ajeromi-Ifelodun local government with annual presentation of security patrol vehicles for safety of residents in the local government.  The Security Trust Funds that was inaugurated recently is part of his administration's legacy towards enhancing the structure and effectiveness of security agencies operating for the peaceful co-existence among residents of Ajeromi-Ifelodun Local Government.",
  },
  {
    id: 7,
    title: "YOUTH DEVELOPMENT AND WOMEN EMPOWERMENT",
    image: youth,
    description:
      "Over 5000 youths and women have been empowered over the last 7 years of the Ayoola's administration. The recent youth empowerment that witnessed over 3000 youths recieved N50,000 each highlighted part of the Ayoola's administration  commitment towards making youth and women productive in Ajegunle.",
  },
];

const PageClient = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const chunkedProjects = chunkArray(projects, 3);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <div className="w-full parent-wrap mt-28">
      <div>
        <h3 className="sectionheader text-pjgreen">Projects</h3>
        <p className="text-greytext">Our Projects</p>
      </div>
      <div className="grid grid-cols-1 md:hidden gap-7">
        {projects.map((project) => (
          <div key={project.id}>
            <motion.div
              key={project.id}
              layout
              className="cursor-pointer overflow-hidden rounded-t-lg  col-span-1 relative"
              onClick={() =>
                setSelectedId(selectedId === project.id ? null : project.id)
              }
            >
              <div className="inset-0 bg-gradient-to-b from-transparent to bg-black/40 absolute" />
              <img
                src={project.image.src}
                alt={project.title}
                className="w-full  object-cover"
              />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold text-lg">
                {project.title}
              </p>
            </motion.div>
            <motion.div>
              {selectedProject &&
                selectedId !== null &&
                project.id === selectedId && (
                  <motion.div
                    className="bg-gray-100 shadow-lg rounded-b-lg px-2 py-5 "
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{selectedProject.description}</p>
                  </motion.div>
                )}
            </motion.div>
            {/* Expanded Details (Placed Right Below the Selected Project) */}
            {/* <AnimatePresence>
              {selectedId === project.id && (
                <motion.div
                  layout
                  className="w-full bg-gray-100 p-6 shadow-lg rounded-lg"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-green-600">
                    {project.title}
                  </h2>
                  <img
                    src={project.image.src}
                    alt="Project"
                    className="w-full h-64 object-cover my-4 rounded-lg"
                  />
                  <p>{project.description}</p>
                  <a
                    href="https://www.facebook.com/projects/education"
                    className="text-blue-500 underline"
                  >
                    More details
                  </a>
                </motion.div>
              )}
            </AnimatePresence> */}
          </div>
        ))}
      </div>
      <div className=" hidden md:block">
        {chunkedProjects.map((chunk, chunkIndex) => (
          <div key={chunkIndex}>
            <div className="grid grid-cols-3 gap-4 mb-8 mt-5">
              {chunk.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  className="cursor-pointer overflow-hidden rounded-lg shadow-lg col-span-1 relative"
                  onClick={() =>
                    setSelectedId(selectedId === project.id ? null : project.id)
                  }
                >
                  <div className="inset-0 bg-gradient-to-b from-transparent to bg-black/40 absolute" />
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full  object-cover"
                  />
                  <p className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold text-lg">
                    {project.title}
                  </p>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selectedProject &&
                selectedId !== null &&
                chunk.some((p) => p.id === selectedId) && (
                  <motion.div
                    className="bg-gray-100 p-6 shadow-lg rounded-lg mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-green-600">
                      {selectedProject.title}
                    </h2>
                    <div className="flex justify-center gap-14 items-center">
                      
                      <img
                        src={
                          typeof selectedProject.image === "string"
                            ? selectedProject.image
                            : selectedProject.image.src
                        }
                        alt="Project"
                        className="w-full h-[25rem] object-cover my-4 rounded-lg"
                      />
                      <p className="ml-12">{selectedProject.description}</p>
                    </div>
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageClient;
