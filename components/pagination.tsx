"use client";

import { ProjectInterface } from "@/api/interfaces";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Pagination({ project }: { project: ProjectInterface }) {
  const url = usePathname();
  const currentPageNumber = parseInt(url.split("/").pop() ?? "1");

  return project.pages.map((_, i) => {
    const pageNumber = i + 1;

    return (
      <Link
        key={i}
        href={`${pageNumber}`}
        className={clsx(`flex text-4xl hover:underline`, {
          underline: pageNumber == currentPageNumber,
        })}
      >
        {pageNumber}
      </Link>
    );
  });
}
