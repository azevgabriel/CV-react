import styles from '../../styles/components/LongBar/ProjetosLongBar.module.css'

export const ProjetosLongBar = () => {
    return(
        <div className={styles.container}>
            <p>Uma guia apenas de projetos autorias. Há mais projetos no meu GitHub, 
            porém foram de bootcamps, cursos ou semanas de coding.</p>
        </div>  
    );
}

export default ProjetosLongBar;