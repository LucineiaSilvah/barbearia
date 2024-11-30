import style from './Space.module.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Space = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', });
  }, []);
  return (
    
    <div className={style.Space} id='loja'>
   

    
     <div>
      <div className={style}> 
      <h2 data-aos="fade-up">Conheça Nosso Espaço</h2>
     
      <div className={style.Texts} data-aos="fade-up">
      <p>Um espaço inspirado na força e na tradição dos <span>vikings</span>, onde estilo e atitude se encontram. Com um ambiente rústico e acolhedor, a <span> Vanhalla</span> oferece <span>cortes precisos</span>, cuidados com a barba e uma <span>experiência única</span> para quem busca transformar o visual com <span>personalidade</span>. Seja bem-vindo ao seu verdadeiro salão de batalhas estéticas!</p>
     </div>
  
      </div>
    </div>




    
     <section className={style.Galery}>
    

      <img data-aos='zoom-in' data-aos-delay="500" src="https://images.unsplash.com/photo-1672642150048-fbfa1634804f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="1" />
    
        
      <img data-aos='zoom-in' data-aos-delay="800" src="https://images.unsplash.com/photo-1675599193990-33d71150902b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2" />
     
        
      <img data-aos='zoom-in' data-aos-delay="1000" src="https://images.unsplash.com/photo-1672257493461-704902362c1d?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="3" />
    
     </section>
     <section>
    
      <h2 data-aos="fade-up">Localizaçao</h2>

    

      <div className={style.Mapa}>
     

        <div data-aos="fade-up">
         <andess >
         <p>
         Rodovia dos Imigrantes, 1,5 km -
        
         </p>
         <p> Vila Água Funda, São Paulo - SP, 04329-900</p>
         </andess>
        </div>
      

      <iframe data-aos='zoom-in-up' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4346.350185166018!2d-46.632547999785515!3d-23.646248034140665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5adda4c3cb95%3A0x31916ce58f719167!2sS%C3%A3o%20Paulo%20Expo!5e0!3m2!1spt-BR!2sbr!4v1732656456444!5m2!1spt-BR!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" ></iframe>
    
      </div>
     </section>

    </div>
  );
};
export default Space;
