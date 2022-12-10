import { useEffect, useState } from "react";
import { getAllAdminStudents } from "../api";
import AdminStudents from "../components/AdminStudents";
import NavBar from "../components/NavBar";

function AllStudent() {
  const [students, setStudents] = useState(null);
  async function getData() {
    const result = await getAllAdminStudents();
    console.log("result== ", result);
    setStudents(result);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <div style={{ textAlign: "center" }}>All Students</div>
      <div style={{ marginTop: "5%" }}>
        {students?.map((student) => (
          <AdminStudents key={student._id} props={student} />
        ))}
      </div>
    </>
  );
}

export default AllStudent;
