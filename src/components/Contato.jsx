import { useState } from 'react';
import styles from '../styles/components/Contato.module.css'

const Contato = () => {
        
    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        mensagem: '',
        anexo: ''
    });

    function handleInputChange(event){
        if(event.target.name === "anexo")
        campos[event.target.name] = event.target.files[0];
        else
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
    }

    return(
        <div className={styles.container}>
            <form className={styles.forms}>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" id="email" name="email" value="azevgabriel@gmail.com" onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome da pessoa..." onChange={handleInputChange} />
                </div>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea id="mensagem" value="Estou trabalhando no Back end, essa parte é mera ilustrativa. Por enquanto me contate via redes ou e-mail." name="mensagem" placeholder="Escreva algo..." className="textArea" onChange={handleInputChange}></textarea>
                <div>
                    <label htmlFor="anexo">Anexo:</label>
                    <input type="file" disabled id="anexo" name="anexo" />
                </div>
                <input type="submit" disabled value="Enviar" onSubmit={handleFormSubmit}/>     
             </form>
        </div>
    );
}

export default Contato;