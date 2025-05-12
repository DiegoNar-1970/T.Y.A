  import { useFieldArray, useForm } from 'react-hook-form';
import { useSectionContractStore } from '../../store/contratState.js';
import { constTypeContract } from './const/constTypeContract.js';
import ActionButtons from './fields/ActionButtons.jsx';
import ContactSection from './fields/ContactSection';
import ContractInfoSection from './fields/ContractInfoSection';
import ContractPreview from './fields/ContractPreview.jsx';
import FormHeader from './fields/FormHeader';
import GenericsInput from './fields/GenericsInput.jsx';
import InputArea from './fields/InputArea.jsx';
import PartiesSection from './fields/PartiesSection';
import PaymentSection from './fields/PaymentSection';

export const FormContract = () => {
  
    const {
      showContractPreview,
      setShowContractPreview,
      typeContract,
      setShowModal,
      setDataFormContract,
      // dataFormContract
    } = useSectionContractStore();
    

    const handleModalOpen = async ()=> {
      //valida los campos del formulario 
      const isValid = await trigger(); 
      if (!isValid) {
        alert("Por favor complete todos los campos requeridos");
        return;
      }
      const formData = getValues();
      const fileName=`${formData?.client_name || 'cliente'}_${formData?.num_radicado || ''}.pdf`
      const newFormData={
        ...formData,
        fileName:fileName
      }
      setDataFormContract(newFormData)
      setShowModal();
    }

    const {
      register,
      control,
      formState: { errors },
      getValues,
      trigger
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
        contract_type: typeContract,
        email: '',
        client_doc:'',
        client_name:'',
        num_radicado:'',
        service:'',
        alcance:'',
        responsability:'',
        fileName:''
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


    const handleVistaPrevia = async () => {
      const isValid = await trigger(); 
    
      if (!isValid) {
        alert("Por favor complete todos los campos requeridos");
        return;
      }

      const formData = getValues();
      const fileName=`${formData?.client_name || 'cliente'}_${formData?.num_radicado || ''}.pdf`
      const newFormData={
        ...formData,
        fileName:fileName
      }
      setDataFormContract(newFormData)
      setShowContractPreview();
      };  

    return (
      <div className="flex flex-col items-center justify-center gap-1">
        <FormHeader />
        
        <form 
          onSubmit={(e) => e.preventDefault()}
          className='fondo-blanco mt-5 rounded-[20px] p-3 flex flex-col gap-5 w-[400px]sm:min-w-[400px] md:min-w-[500px] md:max-w-[600px] md:w-full'  
          
        >
          {typeContract === constTypeContract.LEGAL_SERVICES || typeContract === constTypeContract.CIVIL ? (
            <>
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
            </>
          ) : ''}
          
          {typeContract === constTypeContract.SUBSANACION && (
            <>
            <GenericsInput
              label1="Radicado"
              type1="text"
              value1="num_radicado"
              placeholder1="Ingrese el número de radicado"
              label2="Servicio"
              type2="text"
              value2="service"
              placeholder2="Ingrese el tipo de servicio "
              register={register}
              errors={errors}
              />
              <GenericsInput
                label1="Nombre del cliente"
                type1="text"
                value1="client_name"
                placeholder1="Ingrese el nombre del cliente"
                label2="Documento de identidad"
                type2="text"
                value2="client_doc"
                placeholder2="Ingrese documento "
                register={register}
                errors={errors}
                />
              <InputArea
                  label="Ingrese el Alcance del servicio"
                  value="alcance"
                  placeholder={`1.1: Ejemplo de alcance`}
                  label2="Responsabilidad"
                  type2="text"
                  value2="responsability"
                  placeholder2="Ingrese la responsabilidad   "
                  register={register}
                  errors={errors}
                />
            </>
            
            
          )}

          
          <PaymentSection 
            register={register} 
            errors={errors} />
          <ContactSection 
            register={register} 
            errors={errors} />
          
          <ActionButtons
            onPreview={handleVistaPrevia} 
            handleModalOpen={ handleModalOpen}
          />
        </form>


        {showContractPreview === true ? (
          <ContractPreview />
          ):''}
        
      </div>
    );
  };
