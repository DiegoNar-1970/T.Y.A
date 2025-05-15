import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Success from '../../components/alerts/Success';
import { sendSiged } from '../../services/sendSigned';
import { SignatureCanvas } from './SignatureCanvas';

const SignaturePage = () => {
    // const [viewModal,setViewModal]=useState(false);
    const [firmated,setFirmated]=useState(false);
    const {id} = useParams();
    

  const handleFirma = async (firmaBase64) => {
    const result = await sendSiged(firmaBase64,id) 
    console.log(result)
    if(result.status===200){
      setFirmated(true)
    }
  };

  return (
    <div>
      {firmated === true 
      ? 
      <>
        <Success 
          title={'Firma realizada'} 
          message={'Cierra esta ventana'}
          genericFunction={()=>window.close()}
          />
          
      </>
        :<SignatureCanvas onDone={handleFirma} />
      } 
    </div>
  )
}
export default SignaturePage;