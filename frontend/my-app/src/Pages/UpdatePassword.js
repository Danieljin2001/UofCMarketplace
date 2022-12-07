import React from 'react'

const UpdatePassword = () => {
  return (
    <div className='container my-5 py-5 align-items-center' style={{ height:"50vh", width:"30vw", borderRadius:"20px"}}>
    <form className='container px-5'>
      <h3 className='text-center'>Update Information</h3>
      <div class="form-group">
        <small class="form-text text-muted text-center">Sometimes it happens.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        {/* password input */}
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
      </div>
      <button type="submit" class="container btn btn-primary my-3 px-5">Change</button>
    </form>
  </div>
  )
}

export default UpdatePassword