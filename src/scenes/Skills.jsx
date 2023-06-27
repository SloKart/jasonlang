import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills= () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">Skills</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            If it makes the internet cooler, then I want to learn how to do it. Here are some things I have under my belt. 
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="Skills"
                className="z-10 max-h-96"
                src="assets/80sSun.png"
              />
            </div>
          ) : (
            <img alt="Skills" className="z-10 max-h-96" src="assets/80sSun.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Beginning */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">Fundamentals</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                HTML, CSS, Javascript
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue brightness-50 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Easy to learn, Impossible to master. Well maybe it's possible. I hope not thought, this stuff is pretty fun. 
          </p>
        </motion.div>

        {/* Currently */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">Utilitarian</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                React, Jest, Tailwind
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red brightness-50 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            The foundation of the funhouse. My knowledge of Redux, Toolkit, Router, Tailwind, Jest and the like enable me to make the user experience we all expect and enjoy. 
          </p>
        </motion.div>
        {/* Collaborate */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">Engaging</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Libraries, Figma, and my creativity
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow brightness-50 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
           The parts that it all worth it. The ability to use animations and reactive design principals to bring ideas to life has always been my motivation to continued success.  
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
