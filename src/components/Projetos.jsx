import styles from '../styles/components/Projetos.module.css'

const Projetos = () => {

    return(
        <div className={styles.container}>
            <div className={styles.projectItem}>
                <h3>Curriculum Example</h3>
                <h4>ReactJS, JS, CSS</h4>
                <p>O objetivo do site é demonstrar o conhecimento nas áreas citadas aos visitantes desta página. Além de possuir informações sobre minha carreira.</p>
                <p>Link para repositório: <a href="https://github.com/azevgabriel/CV-react">CV-react</a></p>
            </div>
        </div>
    );
}

export default Projetos;