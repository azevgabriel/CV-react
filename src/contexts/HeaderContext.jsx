import { createContext, useState } from "react";

export const HeaderContext = createContext({});

export function HeaderProvider({children}) {
    
    const [goHome,setGoHome] = useState(true);
    const [goSobre,setGoSobre] = useState(false);
    const [goProjetos,setGoProjetos] = useState(false);
    const [goFormacao,setGoFormacao] = useState(false);
    const [goContato,setGoContato] = useState(false);

    function swapHome(){
        if(goSobre == true){
            setGoSobre(false); 
        }else if(goProjetos == true){
            setGoProjetos(false); 
        }else if(goFormacao == true){
            setGoFormacao(false); 
        }else if(goContato == true){
            setGoContato(false); 
        }
        if(goHome == false){
            setGoHome(true);
        } 
    }

    function swapSobre(){
        if(goHome == true){
            setGoHome(false); 
        }else if(goProjetos == true){
            setGoProjetos(false); 
        }else if(goFormacao == true){
            setGoFormacao(false); 
        }else if(goContato == true){
            setGoContato(false); 
        }
        if(goSobre == false){
            setGoSobre(true);
        } 
    }

    function swapProjetos(){
        if(goHome == true){
            setGoHome(false); 
        }else if(goSobre == true){
            setGoSobre(false); 
        }else if(goFormacao == true){
            setGoFormacao(false); 
        }else if(goContato == true){
            setGoContato(false); 
        }
        if(goProjetos == false){
            setGoProjetos(true);
        } 
    }

    function swapContato(){
        if(goHome == true){
            setGoHome(false); 
        }else if(goSobre == true){
            setGoSobre(false); 
        }else if(goFormacao == true){
            setGoFormacao(false); 
        }else if(goProjetos == true){
            setGoProjetos(false); 
        }
        if(goContato == false){
            setGoContato(true);
        } 
    }

    function swapFormacao(){
        if(goHome == true){
            setGoHome(false); 
        }else if(goSobre == true){
            setGoSobre(false); 
        }else if(goContato == true){
            setGoContato(false); 
        }else if(goProjetos == true){
            setGoProjetos(false); 
        }
        if(goFormacao == false){
            setGoFormacao(true);
        } 
    }
   
    return(
        <HeaderContext.Provider value={{
            swapHome,
            swapSobre,
            swapProjetos,
            swapFormacao,
            swapContato,
            goHome,
            goSobre,
            goProjetos,
            goFormacao,
            goContato
        }}>
            {children}
        </HeaderContext.Provider>
    );
}