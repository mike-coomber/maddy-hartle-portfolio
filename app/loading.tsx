import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-full absolute justify-center items-center flex flex-col">
      <Image
        src={"/assets/loading-animation.gif"}
        alt="loading animation"
        width={400}
        height={400}
      />
    </div>
  );
}
