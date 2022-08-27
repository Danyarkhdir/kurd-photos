import Image from "./Image";
export default function Images({ images }) {
  return (
    <div className=" divide-y sm:grid xs:flex xs:flex-wrap  sm:grid-cols-2  lg:grid-cols-3   gap-x-5 gap-y-1 justify-center">
      {images.map((postInfo) => {
        return <Image key={postInfo.id} postInfo={postInfo} />;
      })}
    </div>
  );
}
