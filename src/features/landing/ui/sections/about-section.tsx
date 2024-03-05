import { Button } from "@/shared/ui";
import { IconsBlock } from "../icons-block";
import clsx from "clsx";

const SKILLS = [
  [
    { skill: "Python (★★★★☆)", color: "bg-yellow-400", popup: "" },
    { skill: "JavaScript (★★★☆☆)", color: "bg-yellow-600", popup: "" },
    { skill: "TypeScript (★★☆☆☆)", color: "bg-blue-500", popup: "" },
  ],
  [
    { skill: "SQL (★★★☆☆)", color: "bg-gray-500", popup: "" },
    { skill: "PosgreSQL (★★★☆☆)", color: "bg-gray-500", popup: "" },
  ],
  [{ skill: "Docker (★★★☆☆)", color: "bg-blue-500", popup: "" }],
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white flex flex-row justify-around h-[60vh] mt-[20vh]"
    >
      <div className="mt-[15vh] max-w-md">
        <p className="text-blue-500 text-2xl">
          <b>ABOUT ME </b>
        </p>
        <p className="text-5xl">
          <b>Backend / Frontend </b>
        </p>
        <p className="text-gray-500 mt-5">
          Creating full-stack applications for web browsers, servers, desktop
          applications, and any other.
        </p>
      </div>
      <div className="mt-[15vh] max-w-sm">
        <p>
          <b className="text-3xl">My social accounts</b>
        </p>
        <p className="text-gray-500 mt-5">
          Connect with my at my social networks or simply contact me within
          messengers / mail at any time.
        </p>
        <IconsBlock />
        <p className="mt-[5vh] mb-5">
          <b className="text-3xl">My skills</b>
        </p>

        {SKILLS.map((skillRow, index) => {
          return (
            <div className="flex mt-1" key={index}>
              {skillRow.map((skill, index) => {
                return (
                  <>
                    <Button
                      variant="none"
                      size="sm"
                      key={index}
                      className={clsx(
                        "text-white rounded-3xl cursor-pointer",
                        skill.color,
                      )}
                    >
                      {skill.skill}
                    </Button>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
