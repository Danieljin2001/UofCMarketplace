import { useEffect, useState } from "react";
import { getAllAdminStudents, getBannedUsers } from "../api";
import AdminStudents from "../components/AdminStudents";
import NavBar from "../components/NavBar";
import Header from "../components/AllStudentHeader";
import AdminBannedStudents from "../components/AdminBannedStudents";

function BlacklistedStudents() {
  const [students, setStudents] = useState(null);
  async function getData() {
    const result = await getBannedUsers();
    console.log("result== ", result);
    setStudents(result);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
        All Banned Students
      </h1>
      <div>
        {students?.length > 0 ? (
          students.map((student) => (
            <AdminBannedStudents key={student._id} props={student} />
          ))
        ) : (
          <h2 className="text-center">No Students Available</h2>
        )}
      </div>
    </>
  );
}

export default BlacklistedStudents;
