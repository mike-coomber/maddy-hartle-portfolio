import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <PulseLoader size={20} />
    </div>
  );
}
