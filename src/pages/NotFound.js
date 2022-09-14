import { Link } from "react-router-dom";
export default function NotFound({ text }) {
  return (
    // 404 page
    <main className="h-screen w-full flex flex-col justify-center items-center dark:bg-black bg-white ">
      <h1 className="xs:text-5xl md:text-7xl font-extrabold text-black dark:text-white tracking-widest">
        {text} Not Found
      </h1>
      <button className="mt-5 ">
        <Link
          to="/"
          className="relative inline-block text-base text-gray-400 dark:hover:text-black hover:text-white font-bold group  active:outline-none focus:outline-none "
        >
          <span className="absolute inset-0 "></span>

          <span className="relative block px-8 py-3 bg-black rounded-md dark:bg-white border border-current">
            <router-link to="/">Go Home</router-link>
          </span>
        </Link>
      </button>
    </main>
  );
}
