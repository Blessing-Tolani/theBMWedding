import Link from "next/link";

export default function photos() {
  return (
    <div className="h-screen bg-darkBrown text-primary flex flex-col justify-center items-center">
      <p className="font-signika text-3xl sm:text-4xl md:text-5xl pb-10">
        Coming Soon!!!
      </p>
      <Link href="/">
        <button className="w-60 bg-primary text-darkBrown text-center font-medium font-signika px-6 py-4 rounded-md hover:bg-[#b88553]">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}
