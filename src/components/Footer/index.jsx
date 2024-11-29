import style from './Footer.module.css'
import logo from '../../assets/van.png'
const Footer = () => {
  return (
    
    <div className={style.Footer}>
      <div className={style.Logo}>
        <img src={logo} alt="" />
      </div>
      <div>
        &copy;Vanhalla Barbearia - Todos os direitos reservados - 2020
      </div>
    </div>
  );
};
export default Footer;
