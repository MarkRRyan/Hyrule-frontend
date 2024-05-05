import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from "react-router-dom"

const Nav = () => {
    useEffect(() => {
        M.AutoInit();
      }, []);

  return (
<div>
        <nav>
            <div className="nav-wrapper green darken-3">
            {/* <a href="" className="brand-logo">Hyrule Compendium</a> */}
            <Link to='/' className="brand-logo">Hyrule Compendium</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/monsters'>Monsters</Link></li>
                <li><Link to='/weapons'>Weapons</Link></li>
                <li><Link to='/'>About</Link></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav

// import { Link } from "react-router-dom"

// const Nav = () => {

//   return (
//     <div>
//         <nav>
//             <div className="nav-wrapper green darken-3">
//             {/* <a href="" className="brand-logo">Hyrule Compendium</a> */}
//             <Link to='/' className="brand-logo">Hyrule Compendium</Link>
//             <ul id="nav-mobile" className="right hide-on-med-and-down">
//                 <li><Link to='/monsters'>Monsters</Link></li>
//                 <li><Link to='/weapons'>Weapons</Link></li>
//                 <li><Link to='/'>About</Link></li>
//             </ul>
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Nav