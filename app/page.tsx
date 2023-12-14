import Card from "@/components/home/card";
import { Github } from "@/components/shared/icons";
import ComponentGrid from "@/components/home/component-grid";
import LinkedIn from "@/components/shared/icons/linkedin";
import NextJS from "@/components/shared/icons/nextjs";
import ReactJS from "@/components/shared/icons/react";
import Angular from "@/components/shared/icons/angular";
import TypeScript from "@/components/shared/icons/typescript";
import Java from "@/components/shared/icons/java";
import SpringBoot from "@/components/shared/icons/springboot";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://www.linkedin.com/in/arielpirangy/"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <LinkedIn className="h-8 w-8 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Add me on LinkedIn
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Ari Soares 
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          DesignOps | UI Engineer
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="https://vercel.com/templates/next.js/precedent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Get this Vercel Template</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/pirangy/precedent-arisoares"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              Check out my GitHub
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-1 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Full-Stack All The Way!",
    description:
      "Solid Experience with State of the Art Dev Tools",
    large: false,
    demo: (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 ">
        <NextJS></NextJS>
        <Angular></Angular>
        <TypeScript></TypeScript>
        <ReactJS></ReactJS>
        <Java></Java>
        <SpringBoot></SpringBoot>
      </div>
    ),
  }
];
