import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import pImg1 from "@/assets/images/p1.jpg";
import pImg2 from "@/assets/images/p2.jpg";
import pImg3 from "@/assets/images/p3.jpg";

interface Project {
  title: string;
  desc: string;
  image: StaticImageData;
  tags: string[];
  url: string;
}

const projects: Project[] = [
  {
    title: "GopherCache",
    desc: "基于 Go 语言实现的分布式缓存系统，支持 LRU 淘汰策略、HTTP 轮询交互以及防止缓存击穿的 SingleFlight 机制。",
    image: pImg1,
    tags: ["Go", "Distributed System", "Backend"],
    url: "https://github.com/username/gophercache",
  },
  {
    title: "VisionUI-Kit",
    desc: "一套轻量级的 React 组件库，专注于数据可视化仪表盘的快速构建，内置了 20+ 种高可定制化的 Chart 基础组件。",
    image: pImg2,
    tags: ["TypeScript", "React", "Data Viz"],
    url: "https://github.com/username/vision-ui-kit",
  },
  {
    title: "LocalMind-LLM",
    desc: "一个桌面端 AI 助手应用，允许用户在本地通过 Ollama 运行各种开源大模型，并支持 PDF 文档的 RAG 本地知识库问答。",
    image: pImg3,
    tags: ["Python", "LLM", "Electron"],
    url: "https://github.com/username/localmind-llm",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-18 text-primary dark:text-white">
        项目
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-10">
        {projects.map((project, key) => (
          <div key={key} className="relative group mx-12 md:mx-4 lg:mx-2">
            <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-primary/48 rounded-xl sm:rounded-2xl transition-all duration-500" />
            <div className="relative flex flex-col items-center justify-center border p-3 sm:p-4 border-background-blur dark:border-primary/40 sm:rounded-2xl rounded-xl animate-in duration-300 transition-colors group-hover:border-primary/40 dark:group-hover:border-white/20 ">
              <div className="overflow-hidden aspect-video h-full w-full sm:rounded-t-2xl rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={600}
                  className="h-full w-full object-cover rounded-t-2xl group-hover:scale-108 duration-700 transition-transform"
                />
              </div>
              <div className="bg-background-blur dark:bg-gray-950 p-3 sm:p-4 flex flex-col justify-start gap-2 space-y-2 h-58 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h3 className="bg-linear-to-r dark:from-white from-primary to-primary bg-clip-text text-transparent text-lg py-2 font-semibold">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a href={project.url}>
                      <ArrowUpRight className="text-white hover:text-primary duration-300" />
                    </a>
                  </div>
                </div>
                <p className="dark:text-gray-400 text-primary/80 text-sm font-bold">
                  {project.desc}
                </p>
                <div>
                  {project.tags.map((tag, key) => (
                    <div
                      key={key}
                      className="inline-block border hover:border-primary duration-300 rounded-full transition-border border-primary/80 dark:border-primary/40 m-1"
                    >
                      <button className="rounded-full text-sm px-2 m-1 hover:bg-primary hover:text-white animate-in duration-300 transition-colors dark:bg-primary/50 bg-primary/80 dark:text-gray-300 text-white">
                        {tag}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center h-60 w-full">
        <div className="inline-block border hover:border-primary duration-300 rounded-full transition-border border-primary/80 dark:border-primary/40 m-2">
          <button className="group rounded-full text-md px-4 py-2 m-2 hover:bg-primary hover:text-white animate-in duration-300 transition-colors bg-primary/80 dark:bg-primary/50 dark:text-gray-300 text-white cursor-pointer font-semibold flex items-center justify-center gap-2">
            <span>Check My Github</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
