import FadeLoader from "react-spinners/FadeLoader";

export default function Loading() {
  return (
    <>
      {/* Loader for light mode */}
      <div className="BarLoader dark:hidden flex h-screen items-center">
        <FadeLoader
          color={"#000"}
          loading={true}
          height={20}
          width={7}
          cssOverride={{
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Loader for dark mode */}
      <div className="BarLoader dark:flex hidden h-screen items-center">
        <FadeLoader
          color={"#fff"}
          loading={true}
          height={20}
          width={7}
          cssOverride={{
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
    </>
  );
}
