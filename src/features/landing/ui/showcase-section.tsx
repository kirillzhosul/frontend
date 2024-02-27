import { IconsBlock } from "./icons-block";

export function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="bg-gray-50 flex flex-col items-center  text-center h-[80vh] mt-[5vh]"
    >
      <p className="text-blue-500 text-2xl mt-[10vh]">Showcase Portfolio</p>
      <p className="text-5xl">
        <b>Recent Works</b>
      </p>
      <p className="text-gray-400 text-md max-w-[20%] mt-5">
        Showcase of some amount of projects to you to see what i`ve already done
      </p>
      <p className="mt-[10%] text-3xl">
        <b>
          Sorry, there is currently no works due to website is currently in
          development!
        </b>
      </p>
    </section>
  );
}
