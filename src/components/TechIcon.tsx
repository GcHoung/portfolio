import { twMerge } from "tailwind-merge";

export default function TechIcon({
  children,
  extClass,
}: {
  children: React.ReactNode;
  extClass?: string;
}) {
  return (
    <div
      className={twMerge(
        extClass,
        "text-4xl absolute transform -translate-y-1/2 rounded-full dark:bg-dark-background/70 bg-background-blur/70 backdrop-blur-lg p-2",
      )}
    >
      {children}
    </div>
  );
}
