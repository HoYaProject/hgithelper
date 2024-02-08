import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="w-screen flex justify-center items-center">
      <h1>404 Not Found</h1>
    </div>
  );
}
