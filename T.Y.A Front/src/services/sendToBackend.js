import axios from 'axios';

export const sendToBackend = async (pdf,data) => {
    if (!(pdf instanceof Blob)) {
        console.error('El archivo PDF no es un Blob válido');
        return;
      }
    const formDataTosend = new FormData();
    formDataTosend.append('file', pdf, 'contract.pdf');
    formDataTosend.append('data',JSON.stringify(data))

    const response = await axios.post('http://localhost:1234/control-files/upload',formDataTosend)
    console.log('esto responde',response)
};