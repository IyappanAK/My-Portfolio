import { FC } from "react";
import { useAppSelector } from "../redux/reduxHooks";

import { FaNodeJs, FaReact } from "react-icons/fa";

const Tools: FC = () => {
  const navHeight = useAppSelector((store) => store.navHeight);

  return (
    <section
      id="tools"
      className="space-y-14 px-10 md:px-24 mt-16"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-poppins text-center text-4xl font-bold mt-8 leading-tight tracking-tighter hover:text-sky-400">
        Tools I Use
      </h1>
      <div className="text-white grid md:grid-cols-2 lg:grid-cols-2 gap-10 py-10">
        <div className="bg-bg-surface bg-gradient-to-b from-violet-500 to-fuchsia-500 outline outline-0 outline-fuchsia-500 rounded-lg py-8 px-16 flex flex-col flex-auto h-85 space-y-6 items-start transition-all hover:outline-4">
          <FaReact color="#FFFFFF" size={100} className="self-center" />
          <h1 className="font-poppins font-bold text-3xl self-center">
            Frontend Development
          </h1>
          <h2 className="font-poppins text-1xl self-center">
            I have used or am currently using the following for frontend web
            Development:
          </h2>
          <ul className="list-disc text-white-300 font-poppins text-1xl self-center">
            <li>&emsp;HTML, CSS, JavaScript </li>
            <li>&emsp;Tailwind CSS</li>
            <li>&emsp;React Js, Next Js</li>
            <li>&emsp;React Query, Axios</li>
            <li>&emsp;Ant Design- UI Framework</li>
          </ul>
        </div>
        <div className="bg-bg-surface bg-gradient-to-r from-cyan-500 to-blue-500 outline outline-0 outline-blue-500 rounded-lg py-8 px-16 flex flex-col h-85 space-y-6 items-start md:col-span-2 lg:col-span-1 transition-all hover:outline-4">
          <FaNodeJs color="#FFFFFF" size={100} className="self-center" />
          <h1 className="font-poppins font-bold text-3xl self-center">
            Backend Development
          </h1>
          <h2 className="font-poppins text-1xl ">
            {" "}
            I have used or am currently using the following for Backend
            Development:
          </h2>
          <ul className="list-disc text-white-300 font-poppins text-1xl self-center">
            <li>&emsp;Node Js</li>
            <li>&emsp;Express Js</li>
            <li>&emsp;Prisma ORM</li>
            <li>&emsp;Postgresql Database</li>
            <li>&emsp;MongoDB Database</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;
