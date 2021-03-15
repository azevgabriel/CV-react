import styles from '../../styles/components/Bar/ContatoBar.module.css'

export const ContatoBar = () => {
    return(
        <div className={styles.container}>
            <div>
                <a href="https://www.linkedin.com/in/azevgabriel/"><img src="svg/linkedin-logo.svg"/></a>
                <a href="https://github.com/azevgabriel"><img src="svg/github.svg"/></a>
            </div>
        </div>  
    );
}

export default ContatoBar;