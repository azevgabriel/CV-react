import styles from '../../styles/components/Bar/HomeBar.module.css'

export const HomeBar = () => {
    return(
        <div className={styles.container}>
            <img className={styles.rotate} src="svg/react.svg"/>
        </div>  
    );
}

export default HomeBar;