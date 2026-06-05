import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Telsa Media",
    position: "Web Designer",
    duration: "May 2024 - Dec 2025",
    description: "As a Frontend Developer at Telsa Media, I develop responsive and interactive web applications using React.js, JavaScript, HTML, and CSS. I focus on creating scalable, high-performance user interfaces and ensuring a seamless user experience across desktop and mobile platforms. Front-End Development – Developing interactive and reusable UI components using React.js, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS to create high-performance web applications. Responsive Web Design – Building mobile-first, fully responsive applications that adapt seamlessly to various screens and devices. Component-Based Architecture - Creating maintainable and scalable React components to improve code reusability and application efficiency. ",
  },
  {
    id: 2,
    title: "Tenacious Techies",
    position: "Web Designer",
    duration: "Jan 2023 - Apr 2024",
    description: "I worked as a Web Designer, where I was responsible for creating responsive and user-friendly website designs. I specialized in using HTML, CSS, Bootstrap, and WordPress to develop modern and visually appealing web layouts that adapt to different screen sizes. My role involved ensuring seamless design consistency, optimizing website performance, and enhancing user experience through clean and efficient coding.", 
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content px-2 py-5 md:py-10 lg:py-25"
      id="work-process"
    >
      <div className="sm:w-1/2 mb-[50px]">
        <p className="section-title max-xl:text-center">Work Experience</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Passionate and results-driven Frontend Developer with 3 years of experience in designing, developing, and maintaining responsive websites and web applications.  
        </p>
      </div>

      <div className="grid justify-end gap-[50px] w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
