  import { useFieldArray, useForm } from 'react-hook-form';
import { useSectionContractStore } from '../../store/contratState.js';
import { constTypeContract } from './const/constTypeContract.js';
import ActionButtons from './fields/ActionButtons.jsx';
import ContactSection from './fields/ContactSection';
import ContractInfoSection from './fields/ContractInfoSection';
import ContractPreview from './fields/ContractPreview.jsx';
import FormHeader from './fields/FormHeader';
import { GenericInput } from './fields/GenericInput.jsx';
import { GenericOption } from './fields/GenericOption.jsx';
import InputArea from './fields/InputArea.jsx';
import PartiesSection from './fields/PartiesSection';

const FormContract = () => {

  const clientTypes = [
    { value: 'cedula', label: 'Cédula' },
    { value: 'pasaporte', label: 'Pasaporte' },
    { value: 'extranjera', label: 'CC Extranjera' },
    { value: 'nit', label: 'Nit' }
  ];

    const {
      showContractPreview,
      setShowContractPreview,
      typeContract,
      setShowModal,
      setDataFormContract,
      // dataFormContract
    } = useSectionContractStore();


    const handleResetForm = () => {
      reset(); 
    };

    const handleModalOpen = async ()=> {
      //valida los campos del formulario 
      const isValid = await trigger(); 
      if (!isValid) {
        alert("Por favor complete todos los campos requeridos");
        return;
      }
      const formData = getValues();
      const name = formData?.client_name? formData.client_name : formData?.demandantes[0].name
      const idContract = formData?.num_radicado ? formData.num_radicado : formData.num_contract
      const fileName=`${name}_${idContract}.pdf`
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
      trigger,
      reset,
      watch
    } = useForm({
      defaultValues: {
        num_contract: null,
        demandados: [{ name: null, type_of_doc: null, document: null }],
        demandantes: [{ name: null, type_of_doc: null, document: null }],
        executive: null,
        montoLetras: null,
        paiment: null,
        porcentage_honorario: 0,
        observation: null,
        type_of_pai: null,
        contract_type: typeContract,
        email: null,
        client_doc:null,
        client_name:null,
        client_type_cc:null,
        there_is_honorarios: false,
        num_radicado:null,
        service:null,
        alcance:null,
        responsability:null,
        fileName:null
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

    const agregarDemandante = () => appendDemandante({ name: null, type_of_doc: null, document: null });
    const agregarDemandado = () => appendDemandado({ name: null, type_of_doc: null, document: null });
    

    const handleVistaPrevia = async () => {
      const isValid = await trigger(); 
    
      if (!isValid) {
        alert("Por favor complete todos los campos requeridos");
        return;
      }

      const formData = getValues();
      const name = formData?.client_name? formData.client_name : formData?.demandantes[0].name
      const idContract = formData?.num_radicado ? formData.num_radicado : formData.num_contract
      const fileName=`${name}_${idContract}.pdf`

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
            <div className='flex w-full gap-6 mb-[10px]'>
                <GenericInput
                  label="Radicado"
                  type="text"
                  value="num_radicado"
                  placeholder="Ingrese el número de radicado"
                  register={register}
                  errors={errors}
                  />
                <GenericInput
                  label="Servicio"
                  type="text"
                  value="service"
                  placeholder="Ingrese el tipo de servicio "
                  errors={errors}
                  register={register}
                  />
            </div>
            <div className='flex w-full gap-6 mb-[10px]'>
              <GenericInput
                  label="Nombre del cliente"
                  type="text"
                  value="client_name"
                  placeholder="Ingrese el nombre del cliente"
                  register={register}
                  errors={errors}
                  />
                  <GenericOption
                    label="Tipo de documento"
                    name="client_type_cc"
                    options={clientTypes}
                    register={register}
                    errors={errors}
                    />
                  <GenericInput
                  label="Documento de identidad"
                  type="number"
                  asNumeric={true}
                  value="client_doc"
                  placeholder="Ingrese documento "
                  register={register}
                  errors={errors}
                  />
            </div>

             
                
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
          
          <div className='flex w-full gap-6 mb-[10px]'>
              <GenericInput 
                  label="Monto Total"
                  type="number"
                  asNumeric={true}
                  value="paiment"
                  placeholder="Ingrese el total a cobrar "
                  register={register}
                  errors={errors}
              />
              {watch('there_is_honorarios')
              ?
                <GenericInput 
                  label="Porcentaje de honorarios"
                  type="number"
                  asNumeric={true}
                  value="porcentage_honorario"
                  placeholder="0 "
                  register={register}
                  errors={errors}
                />
              :
                ''}
              
          </div>
          
          <ContactSection 
            register={register} 
            errors={errors} />

          {typeContract != constTypeContract.SUBSANACION ? 
          
          <div className='flex gap-2 items-center'>
            <span>Marca solo si el contrato lleva Honorarios</span>
            <input type="checkbox" 
            {...register("there_is_honorarios")}/>           
          </div>
          :''}

          
              
          <ActionButtons
            onPreview={handleVistaPrevia} 
            handleModalOpen={ handleModalOpen}
            handleResetForm={handleResetForm}
          />
        </form>


        {showContractPreview === true ? (
          <ContractPreview />
        ):''}
        
      </div>
    );
  };
export default FormContract;
        