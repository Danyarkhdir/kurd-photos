import Loading from "./Loading";
import Post from "./Post";
export default function Posts({ posts }) {
  return (
    <div className=" md:mt-32 flex flex-wrap gap-5 justify-center object-cover">
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
