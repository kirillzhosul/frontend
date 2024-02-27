import { Bubble } from "./bubble";
import { IconsBlock } from "./icons-block";

export function HomeSection() {
  return (
    <section className="flex flex-col mx-[20vw] gap-1 mt-[20vh]" id="home">
      <div className="text-blue-600">Hey There 👋 I am</div>
      <div className="text-4xl">
        <b>Kirill Zhosul</b>
      </div>
      <div>
        <span className="text-gray-500">Professional</span>{" "}
        <b>Backend Developer </b>
      </div>
      <div className="text-gray-500 max-w-[25%] mt-[1vh]">
        This is my personal portfolio / projects page, currently in development
        so there is lack of features
      </div>
      <IconsBlock />
      <Bubble size={700} className="top-[0px] right-[500px] bg-blue-50" />
      <Bubble size={700} className="top-[300px] right-[1200px] bg-green-50" />
      <Bubble size={500} className="top-[400px] right-[100px] bg-red-50" />
    </section>
  );
}
