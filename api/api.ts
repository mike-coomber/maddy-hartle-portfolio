import { ProjectInterface } from "./interfaces";
import {
  Unsubscribe,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "@/firebase";

const email = "maddy.hartle@gmail.com";
const allProjectsPath = `${email}/projects/all-projects`;

export async function getAllProjects(): Promise<ProjectInterface[]> {
  const workCollection = collection(db, allProjectsPath);
  const docSnapshot = await getDocs(workCollection);
  const docs = docSnapshot.docs;

  return docs.map((doc) => {
    return doc.data() as ProjectInterface;
  });
}

export function getProjectsSnapshot(
  onDataFetched: (data: ProjectInterface[]) => void
): Unsubscribe {
  const q = query(collection(db, allProjectsPath));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const results = querySnapshot.docs.map(
      (doc) => doc.data() as ProjectInterface
    );
    onDataFetched(results);
  });

  return unsubscribe;
}

export async function getProjectById(id: string): Promise<ProjectInterface> {
  const docRef = doc(db, allProjectsPath, id);

  const result = await getDoc(docRef);
  return result.data() as ProjectInterface;
}
