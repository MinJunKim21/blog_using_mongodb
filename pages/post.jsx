import Sidebar from '../components/Sidebar';
import SinglePost from '../components/SinglePost';

function post() {
  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="flex">
        <div className="w-3/4">
          <SinglePost />
        </div>
        <div className="w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default post;
