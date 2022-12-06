import React from 'react'

function Login() {
  return (
    <div className='container my-5 py-5 align-items-center' style={{ height:"50vh", width:"30vw", borderRadius:"20px"}}>
      <form className='container px-5'>
        <h3 className='text-center'>Login</h3>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          <div className="mt-2">
            No account? <a href="/signup" style={{fontSize:"15px"}}>Sign Up!</a>
          </div>
        </div>
        <button type="submit" class="container btn btn-primary my-3 px-5">Submit</button>
      </form>
    </div>
  )
}

export default Login