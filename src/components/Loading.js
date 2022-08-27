import FadeLoader from "react-spinners/FadeLoader";

export default function Loading() {
  return (
    <div className="BarLoader flex h-screen items-center">
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
  );
}
