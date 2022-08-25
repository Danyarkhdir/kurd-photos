import Loading from "./Loading";
import Post from "./Post";
export default function Posts({ posts }) {
  return (
    <div className=" md:mt-32 grid xs:flex xs:flex-wrap  sm:grid-cols-2  md:grid-cols-3  gap-5 justify-center">
      {!posts ? (
        <Loading />
      ) : (
        posts.map((postInfo) => {
          return <Post key={postInfo.id} postInfo={postInfo} />;
        })
      )}
    </div>
  );
}
