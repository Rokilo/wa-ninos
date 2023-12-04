import React, { useState } from 'react';
import { calendario, farmacia, personas } from "../assets"
import styles from "../style"

function Modal({ isOpen, closeModal, data }) {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content">
              <div className="flex justify-between border-b border-gray-300 p-4">
                <h1 className="text-2xl font-semibold">{data.titulo}</h1>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
        
                <div className="flex justify-center items-center p-5">
                    <img src={farmacia}/>
                </div>
                <hr className="border-black"></hr>
                
               
                
                <div className="flex items-center p-5">
                    <p>Cantidad de descuento: </p>
                    <p className='ml-2 font-bold'>{data.descuento}</p>
                    
                </div>
                <div className="flex px-5 pb-8 pt-5">
                    <p>Descripción:</p>
                <p className='ml-2 font-bold'>{data.descripcion}</p>
                    
                </div>  <div className="flex px-5 py-2">
                <p>Desde: </p>
                <p className='ml-2 font-bold'>{data.fecha_i}</p>
                    
                </div>  <div className="flex px-5 py-2">
                <p>Hasta: </p>
                <p className='ml-2 font-bold'>{data.fecha_f}</p>
                    
                </div>
          
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
