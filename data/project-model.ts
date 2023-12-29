import { DocumentData, WithFieldValue } from "firebase/firestore";
import { getImageUrl } from "../api/api";
import { ProjectInterface } from "../api/interfaces";
import { PageModel } from "./page-model";
import { ProjectImageModel } from "./project-image-model";
import { getFileNameFromLocation } from "./get-location-name";

export class ProjectModel {
  id: string;
  name: string;
  client: string;
  description: string;
  services: string;
  image?: ProjectImageModel;
  backgroundColor?: string;
  pages: PageModel[];

  constructor(
    id: string,
    name: string,
    client: string,
    description: string,
    services: string,
    pages: PageModel[],
    image?: ProjectImageModel,
    backgroundColor?: string
  ) {
    this.id = id;
    this.name = name;
    this.client = client;
    this.description = description;
    this.services = services;
    this.pages = pages;
    this.image = image;
    this.backgroundColor = backgroundColor;
  }

  static fromId(id: string): ProjectModel {
    let name: string = id.replaceAll("-", " ");
    name = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");

    return new ProjectModel(id, name, "", "", "", [new PageModel(`${id}:0`)]);
  }

  static async fromInterface(
    id: string,
    projectInterface: ProjectInterface
  ): Promise<ProjectModel> {
    const imageName = getFileNameFromLocation(projectInterface.image);
    const imageUrl = await getImageUrl(projectInterface.image);

    const pageModels = await Promise.all(
      projectInterface.pages.map((page) => PageModel.fromInterface(page))
    );

    return new ProjectModel(
      id,
      projectInterface.name,
      projectInterface.client,
      projectInterface.description,
      projectInterface.services,
      pageModels,
      new ProjectImageModel(imageName, projectInterface.image, imageUrl),
      projectInterface.backgroundColor
    );
  }
}
