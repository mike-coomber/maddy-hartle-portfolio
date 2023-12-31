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
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>();

  useEffect(() => {
    const unsubscribe = getProjectsSnapshot((data) => setProjects(data));
    return () => {
      unsubscribe();
    };
  }, []);

  const imgElements: ReactElement[] = [];
  const linkElements: ReactElement[] = [];

  projects.forEach((project, i) => {
    imgElements.push(
      <div
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
          objectFit="contain"
          objectPosition="center"
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
    <div style={{ paddingRight: 20, paddingLeft: 20 }}>
      <div className="relative h-screen">
        {imgElements}
        <div className="flex bottom-10 w-full absolute flex-wrap justify-start items-center">
          {linkElements}
        </div>
      </div>
    </div>
  );
}
