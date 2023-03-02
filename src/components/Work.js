import React from "react";
// motion
import { motion } from "framer-motion";
// vzariant
import { fadeIn } from "../variants";
// image
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section " id="work">
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 "
          >
            {/* Text */}
            <div>
              <h2 className="h2 leading-light text-accent">
                My Latest <br />
                work.
              </h2>
              <p className="max-w-sm mb-16">
                Patratis principis quisquam principis proscripti paene absolutum
                facile et is actique actique sunt cruore catenis parabat adventu
                
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* Image1 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Img */}
              <img
                className=" group-hover:scale-125 transition-all duration-500 "
                src={Img1}
                alt=""
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text 3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* Image2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Img */}
              <img
                className=" group-hover:scale-125 transition-all duration-500 "
                src={Img2}
                alt=""
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text 3xl text-white">Project Title</span>
              </div>
            </div>
            {/* Image3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* Img */}
              <img
                className=" group-hover:scale-125 transition-all duration-500 "
                src={Img3}
                alt=""
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text 3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
