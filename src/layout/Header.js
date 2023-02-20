import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import "./headers.css";
import SidebarCart from "./../components/cart/SildebarCart";
import { useSelector } from "react-redux";
import { getQuantity } from "./../redux/selector";
import DehazeIcon from "@mui/icons-material/Dehaze";

function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const showMenu = useRef();
  const UlRef = useRef(null);
  const DehazeIconRef = useRef(null);
  const quantity = useSelector(getQuantity);
  const docWidth = document.documentElement.clientWidth;
  useEffect(() => {
    // if(docWidth > 6)
    const handleClickOutSide = (e) => {
      if (DehazeIconRef.current.contains(e.target)) {
        setDropdown(!dropdown);
      } else if (UlRef.current && !UlRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [UlRef, dropdown, docWidth]);

  useEffect(() => {
    function handleResize() {
      const newWidth = document.documentElement.clientWidth;
      if (dropdown && newWidth > 600) {
        setDropdown(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dropdown]);

  window.onscroll = () => {
    window.scrollY > 50
      ? showMenu?.current.classList.add("showMenu")
      : showMenu?.current.classList.remove("showMenu");
    return () => window.screenY(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <header ref={showMenu}>
      <div className='header'>
        <div className='header-firt'>
          <div className='hotline'>
            Gọi ngay :
            <b>
              &nbsp;
              <a href="tel:0933862589" class="">0834765056</a>
              &nbsp;
              &nbsp;
              <a href="tel:0933862589" class="">0827231697</a>
            </b>
          </div>
        </div>

        <div className='header-second'>
          <div>
            <i class="fa-solid fa-user"></i>
            &nbsp;
            <a href="https://" class="">
              Trà đặc sản
            </a>
          </div>
          &nbsp;
          l
          &nbsp;
          <div>
            <i class="fa-solid fa-pencil"></i>
            &nbsp;
            <a href="https://" class="">
              Thủy Anh
            </a>
          </div>
        </div>
      </div>
      <div className="laptop:max-w-[1170px] flex justify-between items-center m-auto tablet:px-5 mobie:px-8 mobie:py-2">
        <img
          className="image w-[50px] h-[50px]"
          src={require("../asset/image/thuyanh-logo.jpg")}
          alt="#error_picture"
        />
        <div className="relative flex w-[60%] tablet:justify-between items-center mobie:justify-end">
          <ul className="tablet:flex tablet:gap-3 mobie:hidden">
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/cart"
            >
              Cart
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>

          {dropdown && (
            <ul
              ref={UlRef}
              className="animate-dropDown mobie:flex-col mobie:absolute mobie:top-[100%] mobie:flex mobie:bg-white mobie:w-[180px] mobie:gap-2 mobie:py-3 z-10"
            >
              <NavLink
                onClick={() => setDropdown(false)}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                onClick={() => setDropdown(false)}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/cart"
              >
                Cart
              </NavLink>

              <NavLink
                onClick={() => setDropdown(false)}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </ul>
          )}

          <div className="tablet:hidden mr-5 cursor-pointer hover:opacity-70">
            <DehazeIcon
              ref={DehazeIconRef}
            // onClick={() => setDropdown(!dropdown)}
            />
          </div>

          <div className="relative">
            {quantity > 0 ? (
              <span className="text-white bg-primary rounded-[50%] inline-block text-center w-6 h-6 absolute top-[-8px] right-[-20px]">
                {quantity}
              </span>
            ) : null}
            <ShoppingCartIcon
              onClick={handleOpen}
              className="cursor-pointer hover:text-price ease-linear duration-300 mr-1"
            />
          </div>
        </div>
      </div>
      <SidebarCart open={open} handleClose={handleClose} />
    </header>
  );
}

export default Header;
