import style from './Contact.module.css'

const Contact = () => {
  return (
    <>
    
    <div className={style.Contact} id='contato'>
      <h2>Contato</h2>
      <form action="" >
        <p>Agende seu horario atravez de nosso formulario!</p>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" id="" placeholder='digite seu nome'/>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="" placeholder='seuemail@gmail.com'/>
        <label htmlFor="msg">mensagem</label>
        <textarea name="msg" id=""cols={'30'}></textarea>
        <button>Enviar</button>
      </form>
    </div>
    
    </>
  );
};
export default Contact;
