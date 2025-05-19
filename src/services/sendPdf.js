import axios from "axios";

export const sendToBackend = async (pdf,data,method) => {
  try{
    if (!(pdf instanceof Blob)) {
      return;
    }

  const formDataTosend = new FormData();
  const clean = (value) => 
    typeof value === 'string' ? value.trim().toLowerCase() : value;
  
  let typedoc=clean(data.demandantes[0].type_of_doc ? data.demandantes[0].type_of_doc : data.client_type_cc || null)
  let num_radicado=clean(data.num_radicado ? data.num_radicado : null)
  let name=clean(data.demandantes[0].name === null ?data.client_name : data.demandantes[0].name)
  let document=clean(data.demandantes[0].document ? data.demandantes[0].document : data.client_doc)



  const customer={
    name:name,
    type_of_doc:typedoc,
    document:document,
    email:clean(data.email)
  }
  const accused={
    name:clean(data.demandados[0].name),
    type_of_doc:clean(data.demandados[0].type_of_doc),
    document:clean(data.demandados[0].document),
    email:clean(data.demandados[0].email)
  }

  const info_contract = {
    id_type_pay: clean(data.type_of_pai),
    id_type_contract: clean(data.contract_type),
    num_radicado: num_radicado,
    total_payment: clean(data.paiment), // probablemente número, no tocar
    porcentage_honorario: clean(data.porcentage_honorario) // número también
  };
  
  const contract = {
    num_contract: clean(data.num_contract),
    observation: clean(data.observation),
    asigned: false,
  };

  formDataTosend.append('customer', JSON.stringify(customer));
  formDataTosend.append('accused', JSON.stringify(accused));    
  formDataTosend.append('contract', JSON.stringify(contract));
  formDataTosend.append('info_contract', JSON.stringify(info_contract));
  formDataTosend.append('file', pdf, 'contract.pdf');
  formDataTosend.append('data',JSON.stringify(data))
  formDataTosend.append('folderSave',JSON.stringify('pdfs'))

  const response = await axios.post(`http://localhost:1234/control-files/${method}`,formDataTosend)
  
  return response;

  }catch(err){
    console.error(err)
    return{

        statusCode:err.response?.data?.error.statusCode || 500,
        message:err.response?.data?.error.message || 'Error Volver a intentar, Si sigue sucediendo llamar a Diego ',
        code:err.response?.data?.error.code
     }
  }
   
};