import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      {/* <div className="nav">
        <NavLink to="/">
          <h4>HOME</h4>
        <NavLink>
        <NavLink to="/about">
          <h4>ABOUT</h4>
        <<NavLink>
        <NavLink to="/Item">
          <h4>ITEMS</h4>
        <<NavLink>
      </div> */}
      <div className="nav">
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "white" }
              : { backgroundColor: "lightblue" }
          }
          to="/"
        >
          <h4>HOME</h4>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "white" }
              : { backgroundColor: "lightblue" }
          }
          to="about"
        >
          <h4>ABOUT</h4>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "white" }
              : { backgroundColor: "lightblue" }
          }
          to="item"
        >
          <h4>ITEMS</h4>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
