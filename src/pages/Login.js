import { AiOutlineCamera } from "react-icons/ai";
export default function Login() {
  return (
    <div className="md:w-6/12 h-screen w-full mx-auto ">
      <div className="text-black  p-1 flex flex-col items-center">
        <AiOutlineCamera className="text-black text-8xl " />
        <h1 className="text-5xl mt-2 font-extrabold">Login</h1>
        <h3 className="mt-6  text-l">Welcome Back.</h3>
      </div>
      <form className="p-2 mt-7 w-full flex flex-col " autoComplete="off">
        <label className="text-xl" htmlFor="email">
          Email
        </label>
        <input
          required
          className="h-11 p-2 mt-1 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-black"
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
        />
        <div className="flex justify-between mt-6">
          <label className="text-xl" htmlFor="password">
            Password
          </label>
          <span className="text-gray-600 cursor-pointer hover:text-black mr-1 ">
            Forgot your password?{" "}
          </span>
        </div>
        <input
          required
          className="h-11 border border-gray-600 p-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-black"
          type="password"
          name="pass"
          id="pass"
          placeholder="password"
        />
        <input
          type="submit"
          value="Login"
          className="mt-6 bg-black text-white rounded h-12 text-xl cursor-pointer active:bg-gray-900  "
        />
      </form>
      <div className="border border-gray-500 mx-2 py-5 text-center mt-6 rounded-sm text-l">
        <p>
          Don’t have an account?{" "}
          <a className="underline  text-gray-600 hover:text-black" href="">
            Join KrPics
          </a>
        </p>
      </div>
    </div>
  );
}
