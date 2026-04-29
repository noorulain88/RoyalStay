import Link from "next/link";

export default function AboutDashboard() {
  return (
    <div className="flex justify-center gap-8 bg-black text-white  hover:shadow-lg hover:shadow-gray-400  w-200 m-auto  py-4 mt-4 rounded-full shadow-md hover:scale-110">
      
      <Link href="/" className="hover:text-gray-300">
        Home
      </Link>

      <Link href="/#services" className="hover:text-gray-300">
        Services
      </Link>

      <Link href="/#rooms" className="hover:text-gray-300">
        Rooms
      </Link>

    </div>
  );
}