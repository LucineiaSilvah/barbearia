import style from './Space.module.css'

const Space = () => {
  return (
    
    <div className={style.Space}>

     <h2>Conheça Nosso Espaço</h2>
     <div className={style.Texts}>
      <p>Um espaço inspirado na força e na tradição dos <span>vikings</span>, onde estilo e atitude se encontram. Com um ambiente rústico e acolhedor, a <span> Vanhalla</span> oferece <span>cortes precisos</span>, cuidados com a barba e uma <span>experiência única</span> para quem busca transformar o visual com <span>personalidade</span>. Seja bem-vindo ao seu verdadeiro salão de batalhas estéticas!</p>
     </div>

     <div className={style.Galery}>
      <img src="https://images.unsplash.com/photo-1672642150048-fbfa1634804f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="1" />
      <img src="https://images.unsplash.com/photo-1675599193990-33d71150902b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2" />
      <img src="https://images.unsplash.com/photo-1672257493461-704902362c1d?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="3" />
     </div>
    </div>
  );
};
export default Space;
