import React from "react";
import { SkillCard } from "./SkillCard";
import skillsData from "../data/skills.json";

export default function Skills() {
  return (
    <section className="mt-8">
      <h1 className="font-secondary font-bold text-2xl capitalize text-blue-500">
        How I can Help You
      </h1>
      <h1 className="mt-2 font-primary font-black text-5xl capitalize text-gray-300">
        Skills
      </h1>
      <div className="mt-8 py-4 px-4 bg-gray-800 items-center justify-center rounded-md">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {skillsData.map((skill) => {
            return <SkillCard details={skill} />;
          })}
        </div>
      </div>
    </section>
  );
}
