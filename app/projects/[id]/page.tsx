import { getProjectById } from "@/api/api";
import Image from "next/image";
import { VideoPlayer } from "./components/video-player";
import clsx from "clsx";

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
      <div
        className={clsx("flex flex-1 items-center justify-center", {
          relative: (currentPage.images?.length ?? 0) > 1,
        })}
      >
        {hasImages && (
          <div className="flex flex-1 bottom-0 top-0 gap-2 justify-center absolute p-4 sm:p-16">
            {currentPage.images?.map((image) => {
              const multipleImages = currentPage.images!.length > 0;
              return (
                <Image
                  key={image.name}
                  alt={image.name}
                  src={image.url}
                  loading="eager"
                  height={multipleImages ? 920 : undefined}
                  width={multipleImages ? 1080 : undefined}
                  fill={multipleImages ? undefined : true}
                  className="flex flex-1 object-contain"
                />
              );
            })}
          </div>
        )}
        {currentPage.videoUrl && <VideoPlayer url={currentPage.videoUrl} />}
      </div>
    </>
  );
}
