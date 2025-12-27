/** @format */
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const AboutImage = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className='w-[600px] h-[600px] rounded-xl shadow-lg overflow-hidden perspective-1000 relative'
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}>
      <motion.div
        className='w-full h-full relative'
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}>
        <motion.img
          src='/images/paras-self.jpg'
          alt='about'
          width={600}
          height={600}
          className='rounded-xl shadow-lg object-cover w-full h-full'
          style={{ backfaceVisibility: "hidden" }}
        />

        <motion.div
          className='absolute inset-0 flex flex-col items-center justify-center bg-white text-black text-xl font-semibold rounded-xl'
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}>
          <p className='mb-2'>This is my photo</p>
          <p className='mb-2'>I am a poetic coder</p>
          <p>Here to help 🚀</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
