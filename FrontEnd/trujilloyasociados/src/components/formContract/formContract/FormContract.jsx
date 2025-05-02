import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import writtenNumber from 'written-number';
import ActionButtons from './fields/ActionButtons';
import ContactSection from './fields/ContactSection';
import ContractInfoSection from './fields/ContractInfoSection';
import ContractPDF from './fields/ContractPDF.jsx';
import FormHeader from './fields/FormHeader';
import PartiesSection from './fields/PartiesSection';
import PaymentSection from './fields/PaymentSection';

export const FormContract = () => {
  const { contrato } = useParams();
  const [contract,setContract]= useState(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      num_contract: '',
      demandados: [{ name: '', typeDoc: '', doc: '' }],
      demandantes: [{ name: '', typeDoc: '', doc: '' }],
      executive: '',
      montoLetras: '',
      paiment: '',
      porcentage_honorario: 0,
      observation: '',
      type_of_pai: '',
      contract_type: contrato ? contrato : '',
      email: '',
    }
  });

  const {
    fields: demandantesField,
    append: appendDemandante,
    remove: removeDemandante
  } = useFieldArray({
    control,
    name: 'demandantes'
  });

  const {
    fields: demandadoField,
    append: appendDemandado,
    remove: removeDemandado
  } = useFieldArray({
    control,
    name: 'demandados'
  });

  const agregarDemandante = () => appendDemandante({ name: '', typeDoc: '', Doc: '' });
  const agregarDemandado = () => appendDemandado({ name: '', typeDoc: '', Doc: '' });

  const onSubmit = (data) => {
    console.log("Datos del formulario enviados:", data);
    alert('Formulario enviado! Revisa la consola para ver los datos.');
  };

  const handleVistaPrevia = async () => {
    const formData = watch();
    const numero = parseInt(formData.paiment)
    writtenNumber.defaults.lang = 'es'
    const letras = writtenNumber(numero);
    console.log("Datos del formulario:", letras.toUpperCase());
    console.log("Datos del formulario:", formData);
    setContract(formData);
    };  

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <FormHeader />
      
      <form 
        className='fondo-blanco mt-5 rounded-[20px] p-3 flex flex-col gap-5 w-[400px]sm:min-w-[400px] md:min-w-[500px] md:max-w-[600px] md:w-full'  
        onSubmit={handleSubmit(onSubmit)}
      >
        <ContractInfoSection register={register} errors={errors} />
        
        <PartiesSection 
          type="demandantes"
          fields={demandantesField}
          register={register}
          errors={errors}
          remove={removeDemandante}
          agregar={agregarDemandante}
        />
        
        <PartiesSection 
          type="demandados"
          fields={demandadoField}
          register={register}
          errors={errors}
          remove={removeDemandado}
          agregar={agregarDemandado}
        />
        
        <PaymentSection register={register} errors={errors} />
        <ContactSection register={register} errors={errors} />
        
        <ActionButtons 
          onPreview={handleVistaPrevia} 
          onSubmit={handleSubmit(onSubmit)} 
        />
      </form>


      {contract!=null ? 
      (
      <PDFViewer width="100%" height="800px">
        <ContractPDF data={contract} />
      </PDFViewer>
      )
      :''
      }
      
    </div>
  );
};