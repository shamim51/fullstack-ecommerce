import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Spinner />
    </div>
  );
}