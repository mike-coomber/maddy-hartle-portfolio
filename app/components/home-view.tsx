"use client";
import { getProjectsSnapshot } from "@/api/api";
import { ProjectInterface } from "@/api/interfaces";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";

export function HomeView({
  initialProjects,
}: {
  initialProjects: ProjectInterface[];
}) {
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    const unsubscribe = getProjectsSnapshot((data) => setProjects(data));
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <HomeViewLarge projects={projects} />
      </div>
      <div className="block md:hidden">
        <HomeViewSmall projects={projects} />
      </div>
    </>
  );
}

function HomeViewLarge({ projects }: { projects: ProjectInterface[] }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>();

  const imgElements: ReactElement[] = [];
  const linkElements: ReactElement[] = [];

  projects.forEach((project, i) => {
    imgElements.push(
      <div
        key={i}
        className={clsx(
          `absolute top-0 bottom-0 left-0 right-0 -z-10 transition-opacity `,
          {
            "opacity-100": i == currentPictureIndex,
            "opacity-0": i != currentPictureIndex,
          }
        )}
      >
        <Image
          src={project.image!.url!}
          alt={project.name}
          fill={true}
          loading="eager"
          className="object-contain object-center"
        />
      </div>
    );
    linkElements.push(
      <Link
        key={project.id}
        href={`projects/${project.id}`}
        className="cursor-pointer text-black italic text-5xl hover:underline"
        onMouseEnter={() => setCurrentPictureIndex(i)}
        onMouseLeave={() => setCurrentPictureIndex(undefined)}
      >
        {project.name}
      </Link>
    );
    if (i < projects.length - 1) {
      linkElements.push(
        <div
          className="ml-4 font-thin text-6xl"
          key={"divider-" + project.name}
        >
          /
        </div>
      );
    }
  });

  return (
    <div className="relative h-screen px-5">
      {imgElements}
      <div className="flex bottom-10 w-full absolute flex-wrap justify-start items-center">
        {linkElements}
      </div>
    </div>
  );
}

function HomeViewSmall({ projects }: { projects: ProjectInterface[] }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const project = projects[currentProjectIndex];

  function nextProject() {
    const index = currentProjectIndex + 1;
    if (index > projects.length - 1) {
      setCurrentProjectIndex(0);
    } else {
      setCurrentProjectIndex(index);
    }
  }

  function previousProject() {
    const index = currentProjectIndex - 1;
    if (index < 0) {
      setCurrentProjectIndex(projects.length - 1);
    } else {
      setCurrentProjectIndex(index);
    }
  }

  return (
    <Link href={`projects/${project.id}`}>
      <div className="relative h-screen">
        <Image
          src={project.image!.url!}
          alt={project.name}
          fill={true}
          loading="eager"
          className="object-contain object-center"
        />
        <div className="bottom-0 absolute left-0 right-0 flex justify-between px-2 pb-2 items-center">
          <div
            className="font-bold text-2xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              previousProject();
            }}
          >
            {"<"}
          </div>
          <div
            key={project.id}
            className="cursor-pointer text-black text-center italic text-2xl hover:underline "
          >
            {project.name}
          </div>
          <div
            className="font-bold text-2xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              nextProject();
            }}
          >
            {">"}
          </div>
        </div>
      </div>
    </Link>
  );
}
