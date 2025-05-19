import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorAlertGeneric } from '../../components/alerts/ErrorAlertGeneric';
import Success from '../../components/alerts/Success';
import { sendSiged } from '../../services/sendSigned';
import { SignatureCanvas } from './SignatureCanvas';

const SignaturePage = () => {
  const [firmated, setFirmated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { id } = useParams();

  const handleFirma = async (firmaBase64) => {
    try {
      const result = await sendSiged(firmaBase64, id);
  
      if (result.status === 200) {
        setFirmated(true);
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.log(error)
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg('Ha ocurrido un error inesperado al intentar firmar.');
      }
  
      setFirmated(true); 
    }
  };
    
  return (
    <div>
      {firmated ? (
        <>
          {errorMsg ? (
            <ErrorAlertGeneric
              title="No se puede firmar"
              errors={errorMsg}
            />
          ) : (
            <Success
              title="Firma realizada"
              message="Cierra esta ventana"
              genericFunction={() => window.close()}
            />
          )}
        </>
      ) : (
        <SignatureCanvas onDone={handleFirma} />
      )}
    </div>
  );
};

export default SignaturePage;
