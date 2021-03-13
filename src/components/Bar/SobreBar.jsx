import styles from '../../styles/components/Bar/SobreBar.module.css'

export const SobreBar = () => {
    return(
        <div className={styles.container}>
            <img src="svg/html.svg"/>
            <img src="svg/css.svg"/>
            <img src="svg/javascript.svg"/>
        </div>  
    );
}

export default SobreBar;