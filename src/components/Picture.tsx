import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DownloadButton from "./Download";

const Picture: FC = () => {
  return (
    <motion.div
      className="py-12 px-8 md:px-24 flex flex-col items-center"
      layout
    >
      <motion.div
        className="rounded-full overflow-hidden border-2 border-indigo-500 drop-shadow-lg brightness-110 aspect-square"
        animate={{
          y: 10,
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        initial={{ y: -10 }}
      >
        <Image
          src="/crop.png"
          alt="Profile"
          width={120}
          height={110}
          priority
        />
      </motion.div>
      <motion.h1
        className="font-openSans text-center text-3xl md:text-6xl font-bold mt-6 leading-loose tracking-tighter gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        Hello, I&apos;m Iyappan K
      </motion.h1>
      <motion.p
        className="md:w-1/2 mx-auto text-center mt-6 text-sky-100 mb-4"
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.1 },
        }}
        initial={{ opacity: 0, y: -30 }}
      >
        Welcome to my portfolio.
        <br />
        Want to learn more about me? Check out my GitHub.
      </motion.p>
      <DownloadButton />
    </motion.div>
  );
};

export default Picture;