import { ProjectInterface } from "@/api/interfaces";
import Link from "next/link";

export function ProjectHeader({ project }: { project: ProjectInterface }) {
  return (
    <div className="flex z-10 pt-4 px-4 sm:px-8 justify-between gap-4">
      <div className="flex sm:hidden">
        <Link href="/" className="text-2xl font-bold">
          {"<"}
        </Link>
      </div>
      <div className="flex flex-1 flex-col sm:flex-row justify-center sm:justify-between gap-2 sm:gap-8">
        <div className="flex">
          <Link href="/">maddy hartle</Link>
        </div>
        {project.client && (
          <div className="flex flex-row gap-1 sm:flex-col">
            <div>client:</div>
            {project.client}
          </div>
        )}
        {project.services && (
          <div className="flex flex-row gap-1 sm:flex-col">
            <div>services:</div>
            {project.services}
          </div>
        )}
      </div>
      <div className="hidden sm:flex justify-end text-right h-min flex-1">
        maddy.hartle@gmail.com
        <br />
        +44 7428173081
      </div>
    </div>
  );
}
