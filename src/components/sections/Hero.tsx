"use client";

import { HeroOrbit } from "../HeroOrbit";
import Sparkle from "@/assets/sparkle.svg";
import Star from "@/assets/star.svg";
import Link from "next/link";
import { Rocket } from "lucide-react";
import ReactIcon from "@/assets/tech/react.svg";
import LaravelIcon from "@/assets/tech/laravel.svg";
import NextJSIcon from "@/assets/tech/nextjs.svg";
import PhpIcon from "@/assets/tech/php.svg";
import Avatar from "@/assets/images/avatar.jpg";
import Image, { StaticImageData } from "next/image";
import TechIcon from "../TechIcon";
import GithubIcon from "@/assets/github-white.svg";
import FacebookIcon from "@/assets/facebook.svg";
import XIcon from "@/assets/x.svg";
import { ElementType } from "react";

interface SocialIcon {
  name: string;
  icon: ElementType;
  url: string;
}

interface TecIcon {
  name: string;
  icon: ElementType;
  position: string;
}

interface UserInfo {
  name: string;
  title: string;
  avatar: StaticImageData;
  socialIcons: SocialIcon[];
  techIcons: TecIcon[];
}

const userInfo: UserInfo = {
  name: "马化疼",
  title: "全栈工程师 · 自由职业者",
  avatar: Avatar,
  socialIcons: [
    {
      name: "github",
      icon: GithubIcon,
      url: "https://github.com",
    },
    {
      name: "facebook",
      icon: FacebookIcon,
      url: "https://facebook.com",
    },
    {
      name: "x",
      icon: XIcon,
      url: "https://x.com",
    },
  ],
  techIcons: [
    {
      name: "React",
      icon: ReactIcon,
      position: "top-1/2 -left-4",
    },
    {
      name: "Nextjs",
      icon: NextJSIcon,
      position: "bottom-1/6 -right-4",
    },
    {
      name: "Laravel",
      icon: LaravelIcon,
      position: "top-1/5 right-3",
    },
    {
      name: "PHP",
      icon: PhpIcon,
      position: "-bottom-10 left-1/3",
    },
  ],
};

export default function Hero() {
  return (
    <div className="py-38 md:py-48 lg:py-68 relative z-0 overflow-x-clip">
      {/* background */}
      <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div className="size-85 border border-background-blur/20 dark:border-primary/45 shadow-[0_0_40px_#e3e4fb] dark:shadow-[0_0_40px_#7B4AE2] bg-background-blur/20 dark:bg-primary/20 hero-ring relative">
          <div className="absolute dark:bg-primary/10 bg-background-blur/38 inset-0 rounded-full animate-ping-large"></div>
          <div className="blur-2xl md:blur-none absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full">
            <Image
              src={userInfo.avatar}
              alt="Avatar"
              className="rounded-full"
            />
          </div>
          {userInfo.techIcons.map((tecIcon, key) => (
            <TechIcon
              key={key}
              extClass={`hidden md:block ${tecIcon.position}`}
            >
              <tecIcon.icon />
            </TechIcon>
          ))}
        </div>
        <div className="size-135 hero-ring border-background-blur/5 dark:border-dark-primary/5 shadow-background-blur/38 shadow-[0_0_80px_inset] dark:shadow-dark-primary/10"></div>
        <div className="size-195 hero-ring border-background-blur/5 dark:border-dark-primary/5 shadow-background-blur/38 shadow-[0_0_80px_inset] dark:shadow-dark-primary/10"></div>
        <HeroOrbit
          size={420}
          rotation={-44}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="30s"
        >
          <Star className="size-6 dark:text-dark-primary text-light-primary" />
        </HeroOrbit>
        <HeroOrbit
          size={400}
          rotation={79}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 dark:bg-dark-primary rounded-full bg-background-blur"></div>
        </HeroOrbit>
        <HeroOrbit size={480} rotation={-41} shouldOrbit orbitDuration="34s">
          <Sparkle className="size-8 dark:text-dark-primary text-light-primary" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="6s"
        >
          <Sparkle className="size-10 dark:text-dark-primary/40 text-light-primary" />
        </HeroOrbit>
        <HeroOrbit
          size={460}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <Star className="size-12 dark:text-dark-primary text-light-primary" />
        </HeroOrbit>
        <HeroOrbit
          size={540}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <Star className="size-8 dark:text-dark-primary text-light-primary" />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={-5} shouldOrbit orbitDuration="42s">
          <Star className="size-10 dark:text-dark-primary text-light-primary" />
        </HeroOrbit>
        <HeroOrbit
          size={620}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <Sparkle className="size-14 dark:text-primary/20 text-light-primary" />
        </HeroOrbit>
        <HeroOrbit size={640} rotation={85} shouldOrbit orbitDuration="46s">
          <Star className="size-4 dark:text-dark-primary text-light-primary" />
        </HeroOrbit>
        <HeroOrbit
          size={660}
          rotation={108}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <Star className="size-18 dark:text-dark-primary text-light-primary" />
        </HeroOrbit>
      </div>
      {/* content */}
      <div className="flex flex-col w-full gap-18 md:flex-row justify-between items-center relative z-20 duration-700">
        <div className="px-4 flex flex-col justify-center md:items-start items-center gap-4 max-w-100">
          <p className="dark:bg-primary/20 bg-background-blur w-fit text-primary p-1 px-2 rounded-md font-semibold text-lg animate-in slide-in-from-bottom duration-700 leading-tight">
            <span>👋</span> 你好!
          </p>
          <h1 className=" text-white font-extrabold sm:text-2xl lg:text-3xl text-xl animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
            <span className="text-primary">我是</span>
            <span className="text-primary/68 dark:text-white">
              {" "}
              {userInfo.name}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-white dark:text-white/48 md:text-gray-500 animate-in slide-in-from-bottom duration-700 delay-200 leading-tight font-bold">
            {userInfo.title}
          </p>
          <div className="flex gap-2 text-xl animate-in slide-in-from-bottom duration-700 delay-300 leading-tight">
            {userInfo.socialIcons.map((social, key) => (
              <a
                key={key}
                target="_blank"
                href={social.url}
                className="hover:-mt-2 cursor-pointer transition-all duration-300"
              >
                <social.icon className="rounded-full m-1 bg-primary/68 border border-primary/18 dark:bg-transparent dark:border-none" />
              </a>
            ))}
          </div>
        </div>
        <div className="border border-primary/40 rounded-full animate-in slide-in-from-bottom duration-700 delay-400 leading-tight">
          <Link
            className="group flex gap-1 justify-center items-center rounded-full text-sm px-4 py-1 m-1 text-primary bg-primary/10 hover:bg-primary hover:text-white dark:hover:bg-dark-primary/40 transition-colors"
            href="#experience"
          >
            <span>了解更多</span>
            <Rocket
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
