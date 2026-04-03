"use client";

import { useState } from "react";

interface Exp {
  data: number;
  symbol: string;
  title: string;
  description: string;
}

const exps: Exp[] = [
  {
    data: 10,
    symbol: "+",
    title: "Web 开发工作经验",
    description: "拥有丰富的开发经验，曾就职于多家互联网公司，负责核心开发任务",
  },
  {
    data: 20,
    symbol: "+",
    title: "实际项目",
    description: "交付多个高效、可扩展且具有视觉吸引力的 Web 应用程序",
  },
  {
    data: 95,
    symbol: "%",
    title: "客户满意度",
    description: "获得客户的一致认可",
  },
];

export default function Experience() {
  const [curExp, setCurExp] = useState<number>(1);

  return (
    <div className="flex flex-col gap-8 text-white mx-auto px-10 justify-center items-center">
      <div className="max-w-3xl flex flex-col items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-18 justify-center items-center">
          {exps.map((exp, key) => (
            <div
              onMouseEnter={() => setCurExp(key)}
              key={key}
              className={`rounded-xl sm:w-38 md:w-42 border lg:w-48 w-68 h-38 flex flex-col justify-center items-center transition-all duration-300 ${curExp === key ? "dark:bg-primary/10 bg-background-blur border-primary/10" : "dark:bg-dark-background/48 bg-background border-primary/40"}`}
            >
              <div className="text-4xl font-semibold pb-6">
                <span className="dark:text-white text-gray-600">
                  {exp.data}
                </span>
                <span className="text-primary ml-2">{exp.symbol}</span>
              </div>
              <p className="text-gray-400 text-sm font-bold">{exp.title}</p>
            </div>
          ))}
        </div>
        <div className="w-full h-18">
          <div
            key={exps[curExp].description}
            className="hidden sm:flex w-full h-18 bg-background-blur items-center justify-center font-bold text-primary mt-6 rounded-2xl dark:bg-dark-primary/10 transition-all duration-700 animate-text"
          >
            {exps[curExp].description}
          </div>
        </div>
      </div>
    </div>
  );
}
