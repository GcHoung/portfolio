import GithubIcon from "@/assets/github-white.svg";
import FacebookIcon from "@/assets/facebook.svg";
import XIcon from "@/assets/x.svg";

export default function Footer() {
  return (
    <footer className="w-full h-16 dark:bg-primary/30 bg-primary text-light-primary dark:text-white flex justify-center items-center gap-6">
      <p className="text-white">Copyright © portfolio · 2026</p>
      <div className="flex gap-3 text-xl">
        <button className="hover:-mt-2 cursor-pointer transition-all duration-300">
          <GithubIcon />
        </button>
        <button className="hover:-mt-2 cursor-pointer transition-all duration-300">
          <FacebookIcon />
        </button>
        <button className="hover:-mt-2 cursor-pointer transition-all duration-300">
          <XIcon />
        </button>
      </div>
    </footer>
  );
}
