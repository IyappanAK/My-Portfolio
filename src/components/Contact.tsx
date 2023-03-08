import { FC } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { footerLinks } from "../workData";

const Contact: FC = () => {
  const navHeight = useAppSelector(
    (store: { navHeight: any }) => store.navHeight
  );

  return (
    <section
      id="contact"
      className="space-y-12 px-8 md:px-24 md:mt-12 mb-6"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter hover:text-sky-400">
        Contact me
      </h1>
      <div className="flex text-white  items-center flex-col md:flex-row ">
        <div
          className="flex flex-col items-center"
          style={{ flexBasis: "50%" }}
        >
          <ul className="list-none mt-4">
            {footerLinks.map((link, index) => (
              <li
                key={link.name}
                className={`font-poppins font-normal text-[20px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                  index !== footerLinks.length - 1 ? "mb-4" : "mb-0"
                }`}
              >
                {
                  <div className="flex justify-between text-left">
                    <h3 className="md-mr-[20vh] mr-[10vh]">{link.name}</h3>
                    <span>
                      <p className="text-gray-400">{link.ans}</p>
                    </span>
                  </div>
                }
              </li>
            ))}
          </ul>
        </div>
        {/* <hr className="block md:hidden border-b border-white my-8 mx-4" /> */}
        <div
          className="flex flex-col items-center md:items-start mt-8  md:mt-0 border-t border-gray-500 my-8 mx-4 md:border-0"
          style={{ flexBasis: "50%" }}
        >
          {" "}
          <p className="text-slate-50 text-xl md:text-2xl md:w-2/3 my-8  hover:text-sky-400 ">
            You can find me on these platforms:
          </p>
          <ul className="text-white-secondary font-openSans font-bold space-y-5 md:text-xl text-lg flex-row items-center justify-center">
          <li>
    <a
      href="https://www.linkedin.com/in/iyappan-kandasamy-984b5b1b8"
      className="flex space-x-5 items-center  hover:text-sky-400 text-gray-400"
    >
      <FaLinkedin size={30} color="#3b82f6" />
      <p className="text-gray-400 font-poppins  hover:text-sky-400">LinkedIn</p>
    </a>
  </li>
            <li>
              <a
                href="https://github.com/IyappanAK"
                className="flex space-x-5 items-center text-gray-400  hover:text-sky-400"
              >
                <FaGithub size={30} color="#3b82f6" />
                <p className="text-gray-400 font-poppins  hover:text-sky-400">Github</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:iyappankandasamy3@gmail.com"
                className="flex space-x-5 items-center  hover:text-sky-400 text-gray-400"
              >
                <HiMail size={30} color="#3b82E1" />
                <p className="text-gray-400 font-poppins  hover:text-sky-400">
                 Gmail
                </p>
              </a>
            </li>
     
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
