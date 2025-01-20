import React from "react";
import { motion } from "framer-motion";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
const teamMembers = [
  {
    name: "Team Member 1",
    role: "Role 1",
    image: team1,
  },
  {
    name: "Team Member 2",
    role: "Role 2",
    image: team2,
  },
  {
    name: "Team Member 3",
    role: "Role 3",
    image: team3,
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg text-orange-500">Meet Our Team Member</h2>
        <h3 className="text-3xl font-bold text-gray-800 mt-2 ">
          Meet Our Team of Professional team behind the success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-32 mt-14">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-64 h-80 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${member.image})`,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              ></div>
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                {member.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
