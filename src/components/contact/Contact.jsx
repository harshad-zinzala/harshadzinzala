import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faEnvelope,
    title: "My Email",
    description: "zinzalaharshad101@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "8264618342",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex lg:gap-5 xl:gap-15 justify-between">
          
            <div className="sm:w-1/2">
              <p className="text-[35px] font-semibold text-nowrap text-[#132238]">
                Get in Touch
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                Feel free to reach out for collaborations, design inquiries, or any questions. Let’s connect and create something meaningful together. Your ideas matter, and I’m here to help bring them to life.
              </p>
            </div>
            <div className=" sm:w-1/2 my-8.75 lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
