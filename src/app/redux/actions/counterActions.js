
//Constantes
export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';

//Creadores de Acciones
export const increment=()=>{
    return({
        type:INCREMENT
    })
}

export const decrement=()=>{
    return({
        type:DECREMENT
    })
}



