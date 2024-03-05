import { Button } from "@ui";

/**
 * Heading title of the showcase section
 */
export function ShowcaseHeader() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-blue-500 text-2xl mt-[10vh]">Showcase Portfolio</p>
      <p className="text-5xl font-bold mb-5">Recent Works</p>
      <p className="text-gray-400 max-w-[20%]">
        Showcase of some amount of projects for you to see what I already done
        and finished
      </p>
    </div>
  );
}

/**
 * Category badge with select feature
 */
export function ShowcaseCategoryBadge({
  text,
  selected,
  onSelect,
}: {
  text: string;
  selected: boolean;
  onSelect: (category: string) => any;
}) {
  return (
    <Button
      size="sm"
      variant={selected ? "primary" : "outlineSecondary"}
      disabled={selected}
      onClick={() => onSelect(text)}
    >
      {text}
    </Button>
  );
}
