import styles from '../styles/components/Profile.module.css';

const Profile = () => {
    
    
    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <div className={styles.containerProfile}>
                    <img src="img/foto.jpg" />
                </div>
                <div className={styles.containerSkills}>                    
                        <div className={styles.containerSkillsImg}>
                            <img src="svg/html.svg" />
                            <img src="svg/css.svg" />
                            <img src="svg/javascript.svg" />
                        </div>
                        <p>Skills</p>
                </div>
                
            </div>
            <div className={styles.containerRight}>
                <div className={styles.detalhe}>
                <a href="https://github.com/azevgabriel">
                    <img src="svg/github.svg" />
                </a>
                <a href="https://www.linkedin.com/in/azevgabriel/">
                    <img src="svg/linkedin-logo.svg" />
                </a>
                </div>
            </div>  
            
        </div>
    );
}

export default Profile;



