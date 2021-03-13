import { useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';
import styles from '../styles/components/Profile.module.css';

import ContatoBar from './Bar/ContatoBar';
import FormacaoBar from './Bar/FormacaoBar';
import HomeBar  from './Bar/HomeBar';
import ProjetosBar from './Bar/ProjetosBar';
import SobreBar from './Bar/SobreBar';

import ContatoLongBar from './LongBar/ContatoLongBar';
import FormacaoLongBar from './LongBar/FormacaoLongBar';
import HomeLongBar  from './LongBar/HomeLongBar';
import ProjetosLongBar from './LongBar/ProjetosLongBar';
import SobreLongBar from './LongBar/SobreLongBar';

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
            <div className={styles.containerRowOne}>
                
                {(goHome || goProjetos || goContato) &&(<>
                    <div className={styles.containerLeft}>
                        <img src="img/foto.jpg"/> 
                    </div>
                    <div className={styles.containerRight}>
                        {goHome && <HomeBar/>}                    
                        {goProjetos && <ProjetosBar/>}
                        {goContato && <ContatoBar/>}
                    </div>
                </>)}

                {(goSobre || goFormacao) &&(<>
                    <div className={styles.containerRight}>
                        {goSobre && <SobreBar/>}
                        {goFormacao && <FormacaoBar/>}
                    </div>
                    <div className={styles.containerLeft}>
                        <img src="img/foto.jpg"/> 
                    </div>
                </>)}
                
            </div>
            <div className={styles.containerBottom}>
                {goHome && <HomeLongBar/>}
                {goSobre && <SobreLongBar/>}
                {goProjetos && <ProjetosLongBar/>}
                {goFormacao && <FormacaoLongBar/>}
                {goContato && <ContatoLongBar/>}
            </div>
        </div>
    );
}

export default Profile;



