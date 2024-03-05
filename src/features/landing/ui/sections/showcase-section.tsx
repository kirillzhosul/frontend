import Image from "next/image";

import { PROJECTS, Project } from "../../constants";
import { useEffect, useState } from "react";
import { ShowcaseCategoryBadge, ShowcaseHeader } from "@/features/showcase/ui";

const DEFAULT_CATEGORY = "All";
const PROMOTION_PROJECT: Project = {
  url: "/#contact",
  title: "Place For Your Project!",
  description:
    "Reach me out and contact about developing project that suits your requirements!",
  categories: [],
};

function ShowcaseProject({
  project,
  onSelectCategory,
  selectedCategory,
}: {
  project: Project;
  onSelectCategory: (category: string) => any;
  selectedCategory: string;
}) {
  return (
    <div className="max-w-md w-[50%] border rounded-xl border-gray-200 p-10 shadow-xl shadow-gray-300 hover:scale-110 transition-all cursor-pointer hover:shadow-blue-200 hover:p-8 hover:ring ring-blue-100 text-left">
      {project.banner && (
        <Image
          className="rounded-xl"
          src={project.banner.url}
          alt={project.title}
          width={project.banner.width}
          height={project.banner.height}
          loading="lazy"
        />
      )}

      <p className="text-2xl mt-5">
        <b>{project.title}</b>
      </p>

      <div>
        <p className="text-gray-400 mt-3 max-w-[20vw]">{project.description}</p>

        <div className="mt-10 flex flex-wrap gap-y-2">
          {project.categories.map((category, index) => {
            return (
              <ShowcaseCategoryBadge
                text={category}
                selected={category === selectedCategory}
                onSelect={onSelectCategory}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ShowcaseCategories({
  projects,
  selectedCategory,
  onSelectCategory,
}: {
  projects: Project[];
  selectedCategory?: string;
  onSelectCategory: (category: string) => any;
}) {
  let categories: string[] = [];
  projects.forEach((project) => {
    project.categories.forEach((category) => {
      if (categories.includes(category)) {
        return;
      }
      categories.push(category);
    });
  });

  if (selectedCategory === undefined) {
    onSelectCategory(DEFAULT_CATEGORY);
    selectedCategory = DEFAULT_CATEGORY;
  }

  return (
    <div className="text-center mt-10">
      {[DEFAULT_CATEGORY, ...categories].map((category, index) => {
        return (
          <ShowcaseCategoryBadge
            text={category}
            key={index}
            onSelect={onSelectCategory}
            selected={category === selectedCategory}
          />
        );
      })}
    </div>
  );
}

function ShowcaseProjectsGrid({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: string;
  onSelectCategory: (category: string) => any;
}) {
  return (
    <div className="flex flex-row justify-around h-[55vh] mt-[5vh]">
      {[...PROJECTS].map((project, index) => {
        if (
          selectedCategory !== DEFAULT_CATEGORY &&
          !project.categories.includes(selectedCategory)
        ) {
          return <></>;
        }
        return (
          <ShowcaseProject
            project={project}
            key={index}
            onSelectCategory={onSelectCategory}
            selectedCategory={selectedCategory}
          />
        );
      })}
      <ShowcaseProject
        project={PROMOTION_PROJECT}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
    </div>
  );
}

export function ShowcaseSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(DEFAULT_CATEGORY);

  return (
    <section id="showcase" className="bg-gray-50 h-[110vh] mt-[5vh]">
      <ShowcaseHeader />
      <ShowcaseCategories
        projects={PROJECTS}
        selectedCategory={selectedCategory}
        onSelectCategory={(category: string) => setSelectedCategory(category)}
      />
      <ShowcaseProjectsGrid
        selectedCategory={selectedCategory}
        onSelectCategory={(category: string) => setSelectedCategory(category)}
      />
    </section>
  );
}
