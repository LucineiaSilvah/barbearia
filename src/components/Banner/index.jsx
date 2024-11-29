import style from './Banner.module.css'
import { Fade } from 'react-reveal/Fade';
const Banner = () => {
  return (
    
    <div className={style.Banner}>
    <div className={style.Texts}>
      <Fade left>
     <p><span>Transforme Seu</span> Estilo</p>
      </Fade>
      <Fade right>

     <p><span>Eleve Sua</span> Confiança!</p>
      </Fade>
     <div className={style.Texts}>


      <button type="button">
        <a href="https://api.whatsapp.com/send?phone=5541984536057&text=Ol%C3%A1%20gostaria%20de%20marcar%20um%20hor%C3%A1rio!" target="_blank" rel="noopener noreferrer"> Agendar Agora!</a>
       </button>
     
     </div>
    </div>
    <div className={style.Image}>
    <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

    </div>
    </div>
  );
};
export default Banner;
