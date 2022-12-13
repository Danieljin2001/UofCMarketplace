import { useEffect, useState } from "react";
import { getAllAdminStudents } from "../api";
import AdminStudents from "../components/AdminStudents";
import NavBar from "../components/NavBar";
import Header from "../components/AllStudentHeader";
import AllStudentHeader from "../components/AllStudentHeader";

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
      <h1 style={{ textAlign: "center", fontSize:"3rem" }}>All Students</h1>
      <div>
        {students?.map((student) => (
          <AdminStudents key={student._id} props={student} />
        ))}
      </div>
    </>
  );
}

export default AllStudent;
