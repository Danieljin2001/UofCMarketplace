import AdminPosts from "../components/AdminPosts";
import NavBar from "../components/NavBar";

function AllPost() {
    return(
        <>
        <NavBar />
        <div style={{textAlign: 'center'}}>All Posts</div>
        <div style={{marginTop: '5%'}}>
            <AdminPosts></AdminPosts>
        </div>
        </>
    );
}

export default AllPost