export default function Post({ postInfo }) {
  return (
    <div className=" xs:object-contain md:w-[22rem] lg:w-[28rem] xl:w-[26rem] bg-white">
      <img
        className="cursor-pointer md:h-[500px] md:object-cover w-full"
        src={postInfo.urls.regular}
        alt="something"
      />
    </div>
  );
}
