import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
   
    <a className="btn btn-ghost normal-case text-xl">Movie World</a>
  </div>
  <div className="form-control">
      <input type="text" placeholder="Search favourite movie" className="input input-bordered" />
    </div>
</div>
  )
}

export default Navbar