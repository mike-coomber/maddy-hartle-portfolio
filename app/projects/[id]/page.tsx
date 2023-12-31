import { getProjectById } from "@/api/api";
import Image from "next/image";
import { VideoPlayer } from "./components/video-player";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { page: number };
}) {
  const project = await getProjectById(params.id);
  const pageNumber = searchParams?.page ?? 1;

  const currentPage = project.pages[pageNumber - 1];
  const hasImages = currentPage.images !== undefined;

  return (
    <>
      <div
        className="absolute top-0 bottom-0 left-0 right-0 -z-10"
        style={{ backgroundColor: currentPage.backgroundColor }}
      />
      <div className="flex flex-1 items-center justify-center">
        {hasImages && (
          <div className="flex gap-2 justify-center p-4 absolute left-0 right-0">
            {currentPage.images?.map((image) => (
              <Image
                key={image.name}
                alt={image.name}
                src={image.url}
                height={400}
                width={400}
                className="flex flex-1"
                style={{
                  height: "100vh",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
        )}
        {currentPage.videoUrl && <VideoPlayer url={currentPage.videoUrl} />}
      </div>
    </>
  );
}
