"use client";
import { getAllProjects } from "@/api/api";
import { ProjectModel } from "@/data/project-model";
import { useState, useEffect, ReactNode, createContext } from "react";
import LoadingScreen from "./loading-screen";

export const ProjectsContext = createContext<ProjectModel[]>([]);

export function Loader({ children }: { children: ReactNode }) {
  const [loading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectModel[]>();

  useEffect(() => {
    getAllProjects().then((projects) => {
      setProjects(projects);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ProjectsContext.Provider value={projects!}>
          {children}
        </ProjectsContext.Provider>
      )}
    </>
  );
}
