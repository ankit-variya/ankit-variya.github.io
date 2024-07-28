import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Tilt } from "react-tilt";
import { contact } from "../constants";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, name }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className='w-full grey-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-6 min-h-[100px] flex justify-evenly items-center flex-col'
      >
        {/* <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        /> */}

        <h3 className='green-text-gradient text-[20px] font-bold text-center'>
          {title}
        </h3>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>
      <EarthCanvas />
      <div className='mt-20 flex flex-wrap gap-10'>
        {contact.map((con, index) => (
          <ServiceCard key={con.title} index={index} {...con} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
