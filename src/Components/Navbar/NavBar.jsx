"use client";
import { Tooltip } from "keep-react";
("use client");
import { Button, Navbar } from "keep-react";
import Logo from "../../Images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const navStart = (
    <>
      {user ? (
        <>
          <NavLink
            className=" py-[0.2em] px-[0.7em] lg:rounded-full rounded-sm"
            to="/"
          >
            home
          </NavLink>
          <NavLink
            className=" py-[0.2em] px-[0.7em] lg:rounded-full rounded-sm"
            to="/addfood"
          >
            Add Food
          </NavLink>
          <NavLink
            className=" py-[0.2em] px-[0.7em] lg:rounded-full rounded-sm"
            to="/managemyfood"
          >
            Manage My Foods
          </NavLink>
        </>
      ) : (
        <NavLink
          className=" py-[0.2em] px-[0.7em] lg:rounded-full rounded-sm"
          to="/"
        >
          Home
        </NavLink>
      )}
    </>
  );
  const navEnd = (
    <>
      {user ? (
        <>
          <NavLink
            className=" py-[0.2em] px-[0.7em] lg:rounded-full rounded-sm"
            to="/myfoodrequest"
          >
            My Food Request
          </NavLink>
          <NavLink
            className=" py-[0.2em] px-[0.7em] lg:rounded-full rounded-sm"
            to="/availablefoods"
          >
            Available Foods
          </NavLink>
        </>
      ) : (
        <NavLink
          className=" py-[0.2em] px-[0.7em] lg:rounded-full rounded-sm"
          to="/availablefoods"
        >
          Available Foods
        </NavLink>
      )}
    </>
  );
  return (
    <Navbar fluid={true} className="p-0 bg-transparent ">
      <Navbar.Container className="flex  min-h-20    nav  bg-transparent items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          {navStart}
        </Navbar.Container>
        <Navbar.Brand className="lg:absolute lg:flex lg:w-28  lg:justify-center lg:right-0 lg:left-0 lg:mx-auto">
          <Link to="/">
            <img src={Logo} alt="Logo" className="md:max-w-24 max-w-20" />
          </Link>
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            {navStart}
            {navEnd}
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            {navEnd}
          </Navbar.Container>

          {user ? (
            <Tooltip className=" z-50" trigger="click" placement="bottom-start">
              <Tooltip.Action className=" z-50 bg-transparent text-slate-200">
                <img
                  className="w-10 h-10  object-cover rounded-full"
                  src={user.photoURL}
                  alt=""
                />{" "}
              </Tooltip.Action>
              <Tooltip.Content className="z-50">
                <p className="text-slate-200  z-50 text-xs py-3">
                  {user.displayName}
                </p>

                <Button
                  onClick={logOut}
                  className="text-xs max-h-9  bg-green-700 rounded-full"
                >
                  <span className="    text-slate-100 ">LogOut</span>
                </Button>
              </Tooltip.Content>
            </Tooltip>
          ) : (
            <Link to="/login">
              {" "}
              <Button className="text-xs max-h-9  bg-green-700 rounded-full">
                <span className="    text-slate-100 ">Login</span>
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavBar;
