import { motion } from "framer-motion";
import { ReactTyped } from 'react-typed';
import { styles } from "../styles.js";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#915EFF]">Ankit Variya</span>
          </h1>
          <h1 className={`${styles.heroSubText} mt-1 text-white`}>
            I'm {" "} <span className="text-[#915EFF]">
            <ReactTyped
              strings={["#Developer", "#Programmer","#System Designer", "#Team Leader"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            </span>
          </h1>
          <h1 className={`${styles.heroSubText} mt-1 text-white`}>
          Open For {" "} <span className="text-[#915EFF]">
            <ReactTyped
              strings={["Client", "Organization"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            🚀 Node.js Developer | AWS Cloud Practitioner <br /> Frontend(React.js)
            Enthusiast <br/> Cracking Code Conundrums
          </p>
          
        </div>
      </div>

      {/* <ComputersCanvas />  <br className='sm:block hidden' /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
