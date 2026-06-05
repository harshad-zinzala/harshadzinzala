import Roles from "./Roles";
import figma from "../../assets/icons/figma.png";
import bootstrap from "../../assets/icons/bootstrap.png";
import tailwind from "../../assets/icons/tailwindcss.png";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/JS.png";
import react from "../../assets/icons/react.png";
import wordpress from "../../assets/icons/wordpress.png";
import photoshop from "../../assets/icons/photoshop.png";
import illustrator from "../../assets/icons/illustrator.png";
import xd from "../../assets/icons/xd.png";

const rolesData = [
  {
    id: 1,
    title: "Web Development (JavaScript & React.js)",
    description:
      "Sharpener.tech - Feb 2026 | Completed the AI Vibes coding course in Frontend tech—a must-have for work faster and smarter. ",
  },
  {
    id: 2,
    title: "Diploma in Web Design",
    description:
      "Creative Design & Multimedia Institute - 2022",
  },
  {
    id: 3,
    title: "Diploma in Mechanical Engineering",
    description:
      "Sir BPTI Bhavanagar - 2015",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 "
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center">
        <p className="section-title max-md:text-center">Skills & Education</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-5 ">
          <div className="border border-gray-400 rounded-[10px] flex items-center justify-center p-4">
            <img className="w-12"
              src={react} alt="Figma Icon"
            />
          </div>
          <div className="border border-gray-400 rounded-[10px] flex items-center justify-center p-4">
            <img className="w-12"
              src={js} alt="js Icon"
            />
          </div>
          <div className="border border-gray-400 rounded-[10px] flex items-center justify-center p-4">
            <img className="w-12"
              src={html} alt="html Icon"
            />
          </div>
          <div className="border border-gray-400 rounded-[10px] flex items-center justify-center p-4">
            <img className="w-12"
              src={css} alt="css Icon"
            />
          </div>
          <div className="border border-gray-400 rounded-[10px] flex items-center justify-center p-4">
            <img className="w-12"
              src={wordpress} alt="wordpress Icon"
            />
          </div>
          <div className="border border-gray-400 rounded-[10px] flex items-center justify-center p-4">
            <img className="w-12"
              src={bootstrap} alt="bootstrap Icon"
            />
          </div>
          <div className="border border-gray-400 rounded-[10px] flex items-center justify-center p-4">
            <img className="w-12"
              src={tailwind} alt="tailwind Icon"
            />
          </div>
          <div className="border border-gray-400 rounded-[10px] flex items-center justify-center p-4">
            <img className="w-12"
              src={figma} alt="Figma Icon"
            />
          </div>
          <div className="border border-gray-400 rounded-[10px] flex items-center justify-center p-4">
            <img className="w-12"
              src={xd} alt="XD Icon"
            />
          </div>
        </div>
        
      </div>
      <div className="grid gap-6 mb-12 sm:mb-25">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
