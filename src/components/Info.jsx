import { useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';


import Home from './Home'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Formacao from './Formacao'
import Contato from './Contato'

const Info = () => {
    
    const {
        goHome,
        goSobre,
        goProjetos,
        goFormacao,
        goContato
    } = useContext(HeaderContext);

    return(
        <>
            {goHome && <Home/>}
            {goSobre && <Sobre/>}
            {goProjetos && <Projetos/>}
            {goFormacao && <Formacao/>}
            {goContato && <Contato/>}
        </>
    );
}

export default Info;