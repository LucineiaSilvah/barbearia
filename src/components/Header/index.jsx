import style from './Header.module.css'
import logo from '../../assets/van.png'
 import { useState } from 'react';
const Header = () => {
 
   const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen);


  }

  return (
    <header className={style.Header} >
       <div>
         <h1 className={style.Logo}>
  <img src={logo}  alt="" />

         </h1>
       </div>
       <nav className={style.Menu} >
     
       <button type='button' onClick={toggleMenu}>
        {menuOpen ? 'X':  '☰'}
       </button>

        <ul className={  menuOpen ? `${style.Lista.Open}`:`${style.Lista}`}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#loja">Serviços</a>
          </li>
          <li>
            <a href="#loja">Loja</a>
          </li>
          <li>
            <a href="#blog">blog</a>
          </li>
          <li>
            <a href="#contato">contato</a>
          </li>
        </ul>
       </nav>
    </header>
  );
}

export default Header;
