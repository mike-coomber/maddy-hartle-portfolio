"use client";

import { ProjectInterface } from "@/api/interfaces";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function Pagination({ project }: { project: ProjectInterface }) {
  const searchParams = useSearchParams();
  const currentPageNumber = parseInt(searchParams.get("page") ?? "1");

  return project.pages.map((_, i) => {
    const pageNumber = i + 1;

    return (
      <Link
        key={i}
        href={`${project.id}?page=${pageNumber}`}
        className={clsx(`flex text-4xl hover:underline`, {
          underline: pageNumber == currentPageNumber,
        })}
      >
        {pageNumber}
      </Link>
    );
  });
}
