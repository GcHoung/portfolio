import ReactIcon from "@/assets/tech/react.svg";
import LaravelIcon from "@/assets/tech/laravel.svg";
import NextJSIcon from "@/assets/tech/nextjs.svg";
import PhpIcon from "@/assets/tech/php.svg";
import GitIcon from "@/assets/tech/git.svg";
import JavascriptIcon from "@/assets/tech/Javascript.svg";
import MysqlIcon from "@/assets/tech/mysql.svg";
import TypeScriptIcon from "@/assets/tech/typescript.svg";

import { ElementType } from "react";

interface Skill {
  name: string;
  icon: ElementType;
}

const skills: Skill[] = [
  {
    name: "PHP",
    icon: PhpIcon,
  },
  {
    name: "Laravel",
    icon: LaravelIcon,
  },
  {
    name: "Nextjs",
    icon: NextJSIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    name: "Mysql",
    icon: MysqlIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
];

export default function Skills() {
  return (
    <div className="min-h-80 flex items-center justify-center flex-col">
      <div>
        <p className="text-4xl font-bold text-center mb-8 dark:text-white text-primary">
          技术栈
        </p>
      </div>
      <div className="max-w-4xl">
        <div className="mt-16 flex flex-wrap justify-center gap-2 rounded-2xl px-4 md:mt-16 md:gap-4">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="h-14 w-44 min-w-38 flex items-center justify-center rounded-full dark:bg-dark-primary/38 bg-background-blur/38 hover:bg-background-blur/68 dark:hover:bg-dark-primary/68 transition-all duration-700 backdrop-blur-xl gap-2"
            >
              <skill.icon className="w-8 h-8" />
              <span className="dark:text-white text-primary font-semibold text-sm sm:text-base md:text-md lg:text-lg">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
