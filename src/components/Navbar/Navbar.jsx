import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
    <li className="px-1"><NavLink to="/">Home</NavLink></li>
    <li className="px-1"><NavLink to="/lists">Listed Books</NavLink></li>
    <li className="px-1"><NavLink to="/pages">Pages to Read</NavLink></li>
    <li className="px-1"><NavLink to="/review">Review</NavLink></li>
    <li className="px-1"><NavLink to="/blog">Blog</NavLink></li>       
    </>

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Books Hub</a>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <a className="btn bg-[#23BE0A]">Sign In</a>
    <a className="btn bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
  );
};

export default Navbar;