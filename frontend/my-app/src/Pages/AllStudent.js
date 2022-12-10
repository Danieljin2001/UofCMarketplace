import AdminStudents from "../components/AdminStudents";
import NavBar from "../components/NavBar";

function AllStudent() {
    return(
        <>
        <NavBar />
        <div style={{textAlign: 'center'}}>All Users</div>
        <div style={{marginTop: '5%'}}>
            <AdminStudents></AdminStudents>
        </div>
        </>
    );
}

export default AllStudent