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
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>All Students</h1>
      <div>
        {students?.length > 0 ? (
          students.map((student) => (
            <AdminStudents key={student._id} props={student} />
          ))
        ) : (
          <h2 className="text-center">No Students Available</h2>
        )}
      </div>
    </>
  );
}

export default AllStudent;
