import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from "../../data/navbar-links"
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {

  const location = useLocation();

  // matchPath is a function in react-router-dom. 
  // soo we are displaying the routes according to in which route we are there soo we need to match the path and our name in the ui.
  const matchRoute = (route) => {
    return matchPath({path : route}, location.pathname)
  }

  //     initialStateName                   Name of Slice
  //       || initial                           ||
  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);
  const {totalItems} = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);

  const getAllCategories = async () => {
    try { 
      const result =await apiConnector('GET',categories.CATEGORIES_API)
      console.log("Categories result",result);
      console.log("Prining sublinks",result.data.allCategories)
      setSubLinks(result.data.allCategories);
    } catch (error) {
      toast.error("Couldnt fetch the category list")
      console.log("Couldnt fetch the category list")
    }
  }

  useEffect(() => {
    getAllCategories();
  },[])

  return (
    <div className="flex h-14 items-center border-b-[1px] border-b-richblack-700 justify-center">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Image */} 
        <Link to={"/"}>
          <img src={logo} alt="" width={160} height={42} loading="lazy"/>
        </Link>
        {/* Navlinks */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {
              NavbarLinks.map((link,index) => (
                <li key={index}>
                  {
                    link.title === "Catalog" 
                    ? (
                      <div className="flex relative items-center gap-1 group">
                        <p>{link?.title}</p>
                        <FaAngleDown />

                        <div className="
                          translate-x-[-50%]
                          translate-y-[50%]
                          invisible absolute left-[50%] top-[20%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblue-900 opacity-0 transition-all group-hover:visible z-40
                          group-hover:opacity-100 w-[300px]
                        ">
                        <div className="absolute left-[50%] top-0 h-6 w-6 rotate-45 rounded translate-y-[-20%] translate-x-[20px] bg-richblack-5"></div>    
                        {
                            subLinks.length ? (
                              subLinks.map((sublink,index) => (
                                <Link key={index} to={`${sublink.name}`}>
                                  <p>{sublink.name}</p>
                                </Link>
                              ))
                            ) : (
                              <div>
                                No Catalogs Found
                              </div>
                            )
                        }                      
                        </div>
                        
                      </div>
                    )
                    : (
                      <Link to={link?.path}>
                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>{link.title}</p>
                      </Link>
                    )
                  }
                </li>
              ))
            }
          </ul>
        </nav>

        
        {/* Login Signup Dashboard */}
        <div className="flex gap-x-4 items-center">
            {
              user && user.accountType !== "Instructor" && (
                <Link to={"/dashboard/cart"} className="relative">
                  <AiOutlineShoppingCart />
                  {
                    totalItems > 0 && (
                      <span className="absolute">
                        {totalItems}
                      </span>
                    )
                  }
                </Link>
              )
            }

            {
              token === null && (
                <Link to={"/login"}>
                  <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                    Login
                  </button>
                </Link>
              )
            }

            {
              token === null && (
                <Link to={"/signup"}>
                  <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md"> 
                    Signup
                  </button>
                </Link>
              )
            }

            {
              token !== null && <ProfileDropdown />
            }
        </div>
      </div>
    </div>
  )
}
export default Navbar