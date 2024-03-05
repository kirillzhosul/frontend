import { IconsBlock } from "../icons-block";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white flex flex-col items-center text-center h-[35vh]"
    >
      <p className="text-blue-500 text-2xl mt-[10vh]">Contact With Me</p>
      <p className="text-5xl">
        <b>Have anything to say?</b>
      </p>
      <p className="text-gray-400 text-md max-w-[20%] mt-5">
        Feel free to reach and contact me
      </p>
      <IconsBlock />
    </section>
  );
}
