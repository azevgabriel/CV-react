import styles from '../styles/components/Profile.module.css';

const Profile = () => {
    
    
    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <div className={styles.containerProfile}>
                    <img src="img/foto.jpg" />
                </div>
                <div className={styles.containerSkills}>                    
                        <div>
                            <img src="svg/html.svg" />
                        </div>
                        <div>
                            <img src="svg/css.svg" />
                        </div>
                        <div>
                            <img src="svg/javascript.svg" />
                        </div>
                </div>
            </div>
            <div className={styles.containerRight}>
                <a href="https://github.com/azevgabriel">
                    <img src="svg/github.svg" />
                </a>
                <a href="https://www.linkedin.com/in/azevgabriel/">
                    <img src="svg/linkedin-logo.svg" />
                </a>
                <a href="#">
                    <img src="svg/gmail.svg" />
                </a>
            </div>  
            
        </div>
    );
}

export default Profile;



