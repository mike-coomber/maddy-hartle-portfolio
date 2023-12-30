import { getProjectById } from "@/api/api";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { ReactNode } from "react";
import { ProjectHeader } from "./components/project-header";
import { Pagination } from "./components/pagination";

export default async function Layout({
  children,
  params,
  searchParams,
}: {
  children: ReactNode;
  params: { id: string };
  searchParams: { page: string };
}) {
  const project = await getProjectById(params.id);

  return (
    <>
      <div className="flex flex-col min-h-screen border-l-8 border-solid border-black z-0">
        <ProjectHeader project={project} />
        {children}
        <div className="flex relative z-10 border-t border-solid border-black justify-center items-center p-4">
          <div className="flex gap-1 mr-20">
            <Pagination project={project} />
          </div>
          <div className="flex flex-1 justify-end">{project.description}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
