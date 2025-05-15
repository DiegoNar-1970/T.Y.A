    import writtenNumber from "written-number";
import { create } from 'zustand';


    export const useSectionContractStore = create((set,get)=>{
        return{
            //global states
            pdf:null,
            dataFormContract:{},
            typeContract:'subsanacion',
            showContractPreview: false,
            showModal:false,

            //Setters
            setPdf:(state)=>set({pdf:state}),
            setTypeContract:(state)=>set({typeContract:state}),
            setShowContractPreview:()=>set({showContractPreview:!get().showContractPreview}),
            setShowModal:()=>set({showModal:!get().showModal}),
            
            setDataFormContract:(data)=>{
                const numero = parseInt(data.paiment)

                writtenNumber.defaults.lang = 'es'

                const letras = writtenNumber(numero);

                const newFormData={
                    ...data,
                    montoLetras: letras,
                }
                set({dataFormContract:newFormData})
            }
        }
    })