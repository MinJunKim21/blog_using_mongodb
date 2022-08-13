import Post from './Post';
import Sidebar from './Sidebar';

function Main({ posts }) {
  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="basis-3/4 flex flex-wrap">
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
      <div className="basis-1/4">
        <Sidebar />
      </div>
    </div>
  );
}

export default Main;
