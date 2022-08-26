import Loading from "./Loading";
import Post from "./Post";
export default function Posts({ posts }) {
  const newPageLoad = false;
  return (
    <div className=" divide-y sm:grid xs:flex xs:flex-wrap  sm:grid-cols-2  lg:grid-cols-3   gap-x-5 gap-y-1 justify-center">
      {!posts ? (
        <Loading />
      ) : (
        posts.map((postInfo) => {
          return (
            <Post
              key={postInfo.id}
              postInfo={postInfo}
              nextPage={newPageLoad}
            />
          );
        })
      )}
    </div>
  );
}
