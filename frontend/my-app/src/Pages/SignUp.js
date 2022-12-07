import React from 'react'

function SignUp() {
  return (
    <div className='container my-5 py-5 align-items-center' style={{ height:"50vh", width:"450px", borderRadius:"20px"}}>
      <form className='px-5'>
        <h3 className='text-center'>Sign Up</h3>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          {/* email input */}
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          {/* password input */}
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <button type="submit" class="container btn btn-primary my-3 px-5">Submit</button>
      </form>
    </div>
  )
}

export default SignUp