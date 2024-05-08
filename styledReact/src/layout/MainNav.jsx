import { NavLink } from "react-router-dom";


/*CSS HERINDE*/

export const MainNav = () => {
    return(
      <>
        <nav>
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink> 
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="posts">Posts</NavLink>
          </li>    
        </nav>
      </>
    );
  }