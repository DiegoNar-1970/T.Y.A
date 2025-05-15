import writtenNumber from "written-number";

export const dataServiceContract = (data)=>{
    //aqui usamos la libreria writen 
    //para poder convertir letras en numeros
    const numero = parseInt(data.paiment)

    writtenNumber.defaults.lang = 'es'

    const letras = writtenNumber(numero);

    const newFormData={
        ...data,
        montoLetras: letras,
    }

    return newFormData;
} 

