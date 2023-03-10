/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const services = [
  {
    name: "Web Development",
    description:
      "Donec rutrum congue leo eget malesuada. nibh. lolflrb hehehe hejhekekee ehehe Le coq chante le jour apparait, tous d'éveille dans le village ",
    link: "Learn more",
  },
  {
    name: "Web Development",
    description:
      "Donec rutrum congue leo eget malesuada. nibh. lolflrb hehehe hejhekekee ehehe  Le coq chante le jour apparait, tous d'éveille dans le village",
    link: "Learn more",
  },
  {
    name: "Web Development",
    description:
      "Donec rutrum congue leo eget malesuada. nibh. lolflrb hehehe hejhekekee ehehe  Le coq chante le jour apparait, tous d'éveille dans le village",
    link: "Learn more",
  },
  {
    name: "Web Development",
    description:
      "Donec rutrum congue leo eget malesuada. nibh. lolflrb hehehe hejhekekee ehehe  Le coq chante le jour apparait, tous d'éveille dans le village",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section " id="services">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* Text & Image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6"> What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Developer with over 1 year of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Services lists */}
            <div>
              {services.map((service, index) => {
                return (
                  <div
                    className=" border-b border-white/80 h-[146] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[470px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {service.name}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {service.description}
                      </p>
                    </div>
                    <div className=" flex flex-1 flex-col items-end">
                      <a
                        href="#"
                        className=" flex btn w-9 h-9 mb-[42px] justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm ">
                        {service.link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
