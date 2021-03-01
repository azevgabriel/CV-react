import styles from '../styles/components/Header.module.css'

const Header = () => {
    return(
        <div className={styles.containerNav}>
            <nav>
                <p>Gabriel Azevedo</p>
                <ul>
                    <button>Home</button>
                    <button>Sobre</button>
                    <button>Projetos</button>
                    <button>Formação</button>
                    <button>Contato</button>
                </ul>
            </nav>
        </div>
    );
}

export default Header;