// SignatureCanvas.js
import React, { useRef } from "react";
import { MdSaveAlt } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import SignaturePad from "react-signature-canvas";
import { Warning } from "../../components/alerts/Warning";

export const SignatureCanvas = ({ onDone }) => {
  const sigPad = useRef(null);

  const handleSave =async () => {

    if (sigPad.current) {

      const dataURL = sigPad.current.toDataURL("image/png");

      onDone(dataURL);
    }
  };

  const clear = () => sigPad.current.clear(); 

  return (
    <div className=" flex flex-col gap-4 justify-center items-center mt-[50px]"> 
        <h1 className="text-[32px] ">Firma digital</h1>
        <p className="font-normal text-[13px] text-[#86868b] mb-[20px]">Dibuja tu firma en el area de abajo</p>
      <Warning parrafo={'Asegurate de haber hecho bien la firma ya que solo tienes un intento'} />
      <div className="p-[4px] outline-[1px] rounded-[20px] outline-gray-500"> 
        <SignaturePad 
          ref={sigPad}
          canvasProps={{ 
            width: 500, height: 200, className: "sigCanvas bg-gray-100 rounded-[20px]" ,
            style: { backgroundColor: "#f0f0f0" } 
          }}
        />
      </div>
      <div className="flex gap-5 ">
        <div onClick={clear}
        className="flex gap-3 outline-[1px] outline-gray-500 rounded-[20px] p-2 items-center cursor-pointer hover:bg-[#f0f0f0] hover:scale-105 transition-all
        duration-300 ease-in-out w-[140px] justify-center ">
          <TfiReload className="text-[20px]" />
          <button className="cursor-pointer text-[14px]">Borrar</button>  

        </div >
        <div className="flex gap-3 outline-[1px] outline-gray-500 rounded-[20px] p-2 items-center cursor-pointer hover:scale-105 transition-all
        duration-300 ease-in-out w-[150px] bg-apple text-white hover:bg-[#0071e3bb]" >
          <MdSaveAlt className="text-[22px]" />
          <button 
          className="cursor-pointer text-[14px]"
          onClick={handleSave}>Enviar Firma</button>

        </div>
      </div>
    </div>
  );
};


