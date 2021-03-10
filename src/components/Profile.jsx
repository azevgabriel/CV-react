import { useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';
import styles from '../styles/components/Profile.module.css';
import ContatoBar from './Bar/ContatoBar';
import FormacaoBar from './Bar/FormacaoBar';
import { HomeBar } from './Bar/HomeBar';
import ProjetosBar from './Bar/ProjetosBar';
import SobreBar from './Bar/SobreBar';

const Profile = () => {
    
    const {
        goHome,
        goSobre,
        goProjetos,
        goFormacao,
        goContato
    } = useContext(HeaderContext);
    
    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <div className={styles.containerProfile}>
                    <img src="img/foto.jpg" />
                </div>
            </div>
            <div className={styles.containerRight}>
                {goHome && <HomeBar/>}
                {goSobre && <SobreBar/>}
                {goProjetos && <ProjetosBar/>}
                {goFormacao && <FormacaoBar/>}
                {goContato && <ContatoBar/>}
            </div>  
            
        </div>
    );
}

export default Profile;



