import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Nav = () => {
    useEffect(() => {
        M.AutoInit();
      }, []);

  return (
    <div>
        <nav>
            <div className="nav-wrapper green darken-3">
            <a href="" className="brand-logo">Hyrule Compendium</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="monsters">Monsters</a></li>
                <li><a href="weapons">Weapons</a></li>
                <li><a href="about">About</a></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav