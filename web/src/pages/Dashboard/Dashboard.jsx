import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import DashPageList from "../../components/DashPageList/DashPageList";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <section className='dashHead'>
        <h1>Dashboard</h1>
        <button className='createBtn' onClick={() => navigate("create")}>
          Create Post
        </button>
      </section>
      <DashPageList />
    </>
  );
}
