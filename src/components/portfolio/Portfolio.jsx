import Projects from "./Projects";
import momos from "../../assets/images/portfolio-images/8848Momos.png";
import fc from "../../assets/images/portfolio-images/foodchow.png";
import tt from "../../assets/images/portfolio-images/tt.png";
import fcAdmin from "../../assets/images/portfolio-images/fc-login.jpg";
import telagusAdmin from "../../assets/images/portfolio-images/telagus-admin.jpg";
import impact from "../../assets/images/portfolio-images/impact.png";
import switchbait from "../../assets/images/portfolio-images/switchbait.png";
import skipit from "../../assets/images/portfolio-images/skip-it.png";
import modern from "../../assets/images/portfolio-images/modern.jpg";

const projectData = [
  {
    id: 1,
    image: momos,
    category: "WP E-COMMERCE WEBSITE",
    title: "Restaurant E-commerce Website",
    description:
      "Develop a fully responsive and visually appealing restaurant e-commerce website using WordPress & Elementor, enhancing the design with custom sections, animations, and CSS styling to match the restaurant’s theme.",
    link: "https://www.8848momos.com.au/",
  },
  {
    id: 2,
    image: fc,
    category: "WEB DESIGN",
    title: "HTML, CSS, Bootstrap",
    description:
      "The HTML, CSS, Bootstrap project focused on creating responsive and user-friendly web layouts using HTML/CSS and Bootstrap. It involved building clean designs, ensuring cross-device compatibility, and maintaining consistent styling to deliver a smooth and engaging user experience.",
    link: "https://www.foodchow.com/",
  },
  {
    id: 3,
    image: tt,
    category: "WORDPRESS DESIGN",
    title: "Tenacious Techies",
    description:
      "Develop a fully responsive and visually appealing website using WordPress & Elementor, enhancing the design with custom sections, animations, and CSS styling.",
    link: "https://www.tenacioustechies.com/",
  },
  {
    id: 4,
    image: fcAdmin,
    category: "WEB DEVELOPMENT",
    title: "HTML, CSS, Bootstrap, .NET",
    description:
      "The HTML, CSS, Bootstrap project focused on creating responsive and user-friendly web layouts using HTML/CSS and Bootstrap. It involved building clean designs, ensuring cross-device compatibility, and maintaining consistent styling to deliver a smooth and engaging user experience.",
    link: "https://admin.foodchow.com/",
  },
  {
    id: 5,
    image: telagusAdmin,
    category: "WEB DEVELOPMENT", 
    title: "HTML, CSS, Bootstrap",
    description:
      "The Admin Panel Design project focused on creating a clean and responsive dashboard for easy data management. Using HTML/CSS, Bootstrap, and AngularJS, it included intuitive navigation, interactive components, and consistent UI design to ensure a smooth and efficient user experience across devices.",
    link: "https://telagus.com/",
  },
  {
    id: 6,
    image: impact,
    category: "WEB DESIGN",
    title: "HTML, CSS",
    description:
      "The HTML, CSS, Bootstrap project focused on creating responsive and user-friendly web layouts using HTML/CSS. It involved building clean designs, ensuring cross-device compatibility, and maintaining consistent styling to deliver a smooth and engaging user experience.",
    link: "https://impactmodels.co.uk/",
  },
  {
    id: 7,
    image: switchbait,
    category: "WORDPRESS DESIGN",
    title: "WordPress, Elementor, WooCommerce",
    description:
      "Develop a fully responsive and visually appealing e-commerce website using WordPress, Elementor, WooCommerce, enhancing the design with custom sections, animations, and CSS styling to match the theme.",
    link: "https://www.switchbait.com.au/",
  },
  {
    id: 8,
    image: skipit,
    category: "WORDPRESS DESIGN",
    title: "WordPress, Avada Theme",
    description:
      "Develop a fully responsive and visually appealing website using WordPress & Avada Theme, enhancing the design with custom sections, animations, and CSS styling.",
    link: "https://skipit.london/",
  },
  {
    id: 9,
    image: modern,
    category: "Figma Design",
    title: "Figma, Adobe Photoshop",
    description:
      "The UI/UX Figma Design project focused on creating a clean, user-friendly interface using Figma and Adobe Photoshop. It emphasized consistent visual design, delivering an engaging and seamless user experience.",
    link: "#!",
  }
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
