import styles from '../styles/components/Home.module.css'

const Home = () => {
    
    return(
        <div className={styles.container}>
            <h1>Bem vindo,</h1>
            <p>esse é meu currículo virtual, aqui você encontrará várias informações sobre o meu perfil.</p>
            <br/>
            <p>Sumário para barra de navegação:</p>
            <br/>
            <p><strong>- Sobre:</strong> Objetivos, habilidade em linguagens e bibliotecas.</p>
            <p><strong>- Projetos:</strong> Projetos, descrição sobre eles e linguagens utilizadas.</p>
            <p><strong>- Formação:</strong>: Formação acadêmica, cursos e afins.</p>
            <p><strong>- Contato:</strong> Para enviar uma mensagem direta para meu e-mail.</p>
            <br/>
            <p>Além da barra de navegação, os dois ícones de redes sociais são botões para redirecionamento  direto para as respectivas redess.</p>
        </div>
    );
}

export default Home;