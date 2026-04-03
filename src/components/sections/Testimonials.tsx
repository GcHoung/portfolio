import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";

interface Testimonial {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    name: "张伟",
    position: "产品负责人 @ 智行科技",
    text: "与该团队的合作非常愉快。他们不仅在技术实现上追求极致，更能从产品逻辑的角度给出专业建议，帮我们规避了多个潜在的业务风险。",
    avatar: memojiAvatar1,
  },
  {
    name: "李静",
    position: "市场总监 @ 悦享生活",
    text: "他们的执行力令人印象深刻！在短短两周内就完成了品牌视觉的全面升级，上线后的用户反馈非常好，转化率提升了约 15%。",
    avatar: memojiAvatar2,
  },
  {
    name: "王博文",
    position: "创始人 @ 极客创意工作室",
    text: "难得遇到沟通成本这么低的合作伙伴。代码质量极高，交付文档也非常详尽，完全超出了我们的预期，强烈推荐给追求品质的团队。",
    avatar: memojiAvatar3,
  },
  {
    name: "陈明",
    position: "运营主管 @ 优选电商",
    text: "系统上线后的稳定性非常棒。即便是在双十一流量高峰期，后台运行依然丝滑顺畅，这正是我们目前最需要的技术支撑。",
    avatar: memojiAvatar4,
  },
  {
    name: "刘芳",
    position: "设计导师 @ 艺术学院",
    text: "从审美到用户交互体验，每一个细节都处理得恰到好处。他们真正理解了‘以用户为中心’的设计理念，赋予了产品灵魂。",
    avatar: memojiAvatar5,
  },
];

export default function Testimonials() {
  return (
    <div>
      <div>
        <p className="text-4xl font-bold text-center mb-8 dark:text-white text-primary">
          用户评价
        </p>
      </div>
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-8 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[
            ...new Array(2).fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="bg-primary/80 dark:bg-dark-primary/10 border border-background-blur dark:border-primary/40 max-w-xs md:p-6 p-4 md:max-w-md hover:-rotate-3 transition duration-300 rounded-2xl dark:hover:bg-primary/20 hover:bg-primary hover:scale-105 hover:border-none"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 dark:bg-gray-700 bg-white inline-flex items-center justify-center rounded-full shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-white dark:text-primary">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs md:text-sm md:mt-4 text-light-primary dark:text-gray-300">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold dark:text-primary text-light-primary">
                        {'"'}
                      </div>
                      {testimonial.text}
                    </div>
                  </div>
                ))}
              </Fragment>
            )),
          ]}
        </div>
      </div>
    </div>
  );
}
