"use client";
import { ProjectInterface } from "@/api/interfaces";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useState } from "react";

export function HomeView({ projects }: { projects: ProjectInterface[] }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>();

  const imgElements: ReactElement[] = [];
  const linkElements: ReactElement[] = [];

  projects.forEach((project, i) => {
    console.log(i, currentPictureIndex);
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
        onMouseEnter={() => {
          setCurrentPictureIndex(i);
          console.log("hover");
        }}
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
