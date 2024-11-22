import style from './Banner.module.css'
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// const SlideImages = [
//   {
//     url: "https://images.unsplash.com/photo-1596513058031-bc51c5cbe091?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     caption: "Comida Solidaria",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     caption: "Basar Social",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1497218770144-3fea6dbc33fe?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     caption: "Artesanato",
//   },
// ];
// const divStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "100vh",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
// };
// // const spanStyle = {
// //   fontSize: "16px",
// //   background: "#ccc",
// //   color: "black",
 
// // };
const Banner = () => {
  return (
    
    <div className={style.Banner}>
    <div className={style.Texts}>
     <p><span>Transforme Seu</span> Estilo</p>
     <p><span>Eleve Sua</span> Confiança!</p>
     <div className={style.Texts}>
      <button type="button">Agendar Agora!</button>
     </div>
    </div>
    <div className={style.Image}>
    <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

    </div>
    </div>
  );
};
export default Banner;
