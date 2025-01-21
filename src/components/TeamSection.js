import React from "react";
import { motion } from "framer-motion";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2-1.png";
import team3 from "../assets/team3.png";

const teamMembers = [
  {
    name: "Hamza Sadaqat",
    role: "ACCA Affiliate",
    image: team1,
  },
  {
    name: "Shayan Ahmed Shujaat",
    role: "ACCA Affiliate",
    image: team2,
  },
  {
    name: "Amaz Liaqat Mughal",
    role: "Legal Advisor LLB UOL",
    image: team3,
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg text-orange-500">Meet Our Team Member</h2>
        <h3 className="text-3xl font-bold text-gray-800 mt-2">
          Meet Our Team of Professional team behind the success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-4 md:px-32 mt-14">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="w-64 h-80 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${member.image})`,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              ></motion.div>
              <motion.h4
                className="text-xl font-semibold text-gray-800 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {member.name}
              </motion.h4>
              <motion.h5
                className="text-md font-semibold text-gray-800 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {member.role}
              </motion.h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
