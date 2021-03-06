import styles from '../styles/components/Sobre.module.css'

const Sobre = () => {
    
    return(
        <div className={styles.container}>
            <div className={styles.containerGoals}>
                <h3>✔ Objetivo ✔</h3>
                <div><input type="checkbox" checked/><label>Primeira aplicação própria;</label></div> 
                <div><input type="checkbox" disabled/><label>Inglês Intermediário;</label></div> 
                <div><input type="checkbox" disabled/><label>Estágio em desenvolvimento;</label></div> 
                <div><input type="checkbox" disabled/><label>Reconhecimento na minha área;</label></div> 
            </div>
            <div className={styles.containerLanguages}>
                <h3>✔ Linguagens de Programação ✔</h3>
                <div>
                    <label>HTML</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" disabled/><label>Desejável</label></div> 
                    <div><input type="checkbox" disabled/><label>Noob</label></div> 
                    <div><input type="checkbox" checked/><label>Intermediário ++</label></div> 
                    </div> 
                </div>
                <div>
                    <label>CSS</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" disabled/><label>Desejável</label></div> 
                    <div><input type="checkbox" disabled/><label>Noob</label></div> 
                    <div><input type="checkbox" checked/><label>Intermediário ++</label></div> 
                    </div> 
                </div>
                <div>
                    <label>JS</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" disabled/><label>Desejável</label></div> 
                    <div><input type="checkbox" disabled/><label>Noob</label></div> 
                    <div><input type="checkbox" checked/><label>Intermediário ++</label></div> 
                    </div> 
                </div>
                <div>
                    <label>C</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" disabled/><label>Desejável</label></div> 
                    <div><input type="checkbox" checked/><label>Noob</label></div> 
                    <div><input type="checkbox" disabled/><label>Intermediário ++</label></div> 
                    </div> 
                </div>
                <div>
                    <label>Assembly</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" disabled/><label>Desejável</label></div> 
                    <div><input type="checkbox" disabled/><label>Noob</label></div> 
                    <div><input type="checkbox" checked/><label>Intermediário ++</label></div> 
                    </div> 
                </div>
                <div>
                    <label>PHP</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" disabled/><label>Desejável</label></div> 
                    <div><input type="checkbox" checked/><label>Noob</label></div> 
                    <div><input type="checkbox" disabled/><label>Intermediário ++</label></div> 
                    </div> 
                </div>
                <div>
                    <label>Java</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" checked/><label>Desejável</label></div> 
                    <div><input type="checkbox" disabled/><label>Noob</label></div> 
                    <div><input type="checkbox" disabled/><label>Intermediário ++</label></div> 
                    </div> 
                </div>
                <h3>✔ Bibliotecas ✔</h3>
                <div>
                    <label>ReactJS</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" disabled/><label>Desejável</label></div> 
                    <div><input type="checkbox" disabled/><label>Noob</label></div> 
                    <div><input type="checkbox" checked/><label>Intermediário ++</label></div> 
                    </div> 
                </div>
                <div>
                    <label>Node.JS</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" disabled/><label>Desejável</label></div> 
                    <div><input type="checkbox" checked/><label>Noob</label></div> 
                    <div><input type="checkbox" disabled/><label>Intermediário ++</label></div> 
                    </div> 
                </div>
                <div>
                    <label>Laravel</label>
                    <div className={styles.containerLanguagesLevels}>
                    <div><input type="checkbox" checked/><label>Desejável</label></div> 
                    <div><input type="checkbox" disabled/><label>Noob</label></div> 
                    <div><input type="checkbox" disabled/><label>Intermediário ++</label></div> 
                    </div> 
                </div> 
            </div>
        </div>
    );
}

export default Sobre;