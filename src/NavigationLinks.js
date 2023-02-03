import { Outlet, Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/">Student</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavigationLinks;
