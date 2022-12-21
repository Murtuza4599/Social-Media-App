import "./home.css"
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed/>
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
