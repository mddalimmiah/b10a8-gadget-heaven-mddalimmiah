import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {

    const links =
        <>
            <li><NavLink  className={({ isActive }) =>
          isActive ? "text-yellow-600 font-bold underline" : "text-white"
        }  to={'/'}>Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
          isActive ? "text-yellow-600 font-bold underline" : "text-white"
        } to={'/statistics'}>Statistics</NavLink></li>
            <li><NavLink className={({ isActive }) =>
          isActive ? "text-yellow-600 font-bold underline" : "text-white"
        } to={'/dashboard'}>Dashboard</NavLink></li>
            <li><NavLink className={({ isActive }) =>
          isActive ? "text-yellow-600 font-bold underline" : "text-white"
        } to={'/others'}>others</NavLink></li>

        </>
    return (

        <div className="navbar bg-[#9538E2]">
            <div className="navbar-start max-w-6xl mx-auto">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 font-medium rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <a className="btn btn-ghost text-white text-xl font-bold"><Link to={'/home'}>Gadget Heaven</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-white">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center object-cover'>
                    <Link ><AiOutlineShoppingCart /></Link>
                </div>

                <div className='bg-white rounded-full flex justify-center items-center w-10 h-10'>
                    <Link className=''><FaRegHeart /></Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;