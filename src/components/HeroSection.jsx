import { motion } from "framer-motion";
import React, { useEffect } from "react";

function HeroSection () {
  const [mounted, setMounted] = React.useState(false);
  useEffect(()=> {
    setMounted(true);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-red-50 via via-blue-200 to to-purple-300 min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          {/*Fade and slide animation */}
          <motion.h1
            initial={{opacity: 0, y: -100,}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="text-4xl md:text-6xl font-bold text-blue-950 mb-6"
          >
            Discover, Connect <br />
            <span className="text-blue-600">Get Work Done</span>
          </motion.h1>

          <motion.p
            initial={{opacity: 0, x: -200}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.5, duration: 1}}
            className="text-lg md:text-xl text-blue-950 mb-8 mt-10"
          >
            Wurk helps you hire top professionals for every skill you need.
          </motion.p>

          {/*CTA Buttons with Animation */}
          <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 1, duration: 0.5}}
          className="flex justify-center space-x-4"
          >
            <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition">Browse Skills!</button>
            <button className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-semibold transition">Post a Job!</button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
export default HeroSection;