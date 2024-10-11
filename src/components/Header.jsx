// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <Link to="/">
//         <h1 className="header-title">DOCTOR&apos;S APP</h1>
//       </Link>
//       <nav className="header-nav">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/add-doctor">Add doctor</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import "./Header.css";

const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/add-doctor", label: "Add Doctor" },
];

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-title">
        <h1>DOCTOR&apos;S APP</h1>
      </Link>
      <nav aria-label="Main Navigation" className="header-nav">
        <ul>
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} aria-label={item.label}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
