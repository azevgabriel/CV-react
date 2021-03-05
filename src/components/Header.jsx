import { useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';
import styles from '../styles/components/Header.module.css'

export function Header() {

    const {
        swapHome,
        swapContato,
        swapFormacao,
        swapProjetos,
        swapSobre
    } = useContext(HeaderContext);    

    return(
        <div className={styles.containerHeader}>
            <p>Gabriel Azevedo</p>
            <nav>
                <ul>
                    <button onClick={swapHome}>Home</button>
                    <button onClick={swapSobre}>Sobre</button>
                    <button onClick={swapProjetos}>Projetos</button>
                    <button onClick={swapFormacao}>Formação</button>
                    <button onClick={swapContato}>Contato</button>
                </ul>
            </nav>
        </div>
    );
}