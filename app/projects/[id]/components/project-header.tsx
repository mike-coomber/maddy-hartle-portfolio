import { ProjectInterface } from "@/api/interfaces";
import Link from "next/link";

export function ProjectHeader({ project }: { project: ProjectInterface }) {
  return (
    <div className="flex z-10 pt-4 px-8 justify-between">
      <div className="flex flex-1 justify-between gap-8">
        <div className="flex">
          <Link href="/">maddy hartle</Link>
        </div>
        <div className="flex ">
          client: <br />
          {project.client}
        </div>
        <div className="flex ">
          services: <br />
          {project.services}
        </div>
      </div>
      <div className="flex justify-end text-right h-min flex-1">
        maddy.hartle@gmail.com
        <br />
        +44 7428173081
      </div>
    </div>
  );
}
