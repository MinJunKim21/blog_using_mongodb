import Post from './Posts';
import Sidebar from './Sidebar';

function Main() {
  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="basis-3/4 flex flex-wrap">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="basis-1/4">
        <Sidebar />
      </div>
    </div>
  );
}

export default Main;
