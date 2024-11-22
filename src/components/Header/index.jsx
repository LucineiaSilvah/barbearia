import style from './Header.module.css'
import logo from '../../assets/van.png'
const Header = () => {
  return (
    <header className={style.Header}>
       <div>
         <h1 className={style.Logo}>
  <img src={logo}  alt="" />

         </h1>
       </div>
       <nav>
        <div className={style.Menu}>menu</div>
        <ul className="">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Loja</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contato</a>
          </li>
        </ul>
       </nav>
    </header>
  );
}

export default Header;
