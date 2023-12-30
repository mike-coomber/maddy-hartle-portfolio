import { ProjectInterface } from "./interfaces";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export async function getAllProjects(): Promise<ProjectInterface[]> {
  const workCollection = collection(db, "work");
  const docSnapshot = await getDocs(workCollection);
  const docs = docSnapshot.docs;

  return docs.map((doc) => {
    return doc.data() as ProjectInterface;
  });
}

export async function getProjectById(id: string): Promise<ProjectInterface> {
  const docRef = doc(db, "work", id);

  const result = await getDoc(docRef);
  return result.data() as ProjectInterface;
}
