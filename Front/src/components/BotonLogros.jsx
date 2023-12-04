import styles from "../style"
import fs from 'fs/promises';

const BotonLogros = () => {

    return (
        <div className="justify-center flex">
            <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-6 px-8 rounded-full mt-10 align-center" onClick={()=>document.getElementById('my_modal_1').showModal()}>Añadir Logro</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box m-10">
                <h3 className="font-bold text-lg">Título:</h3>
                <input id="titulo" placeholder="Titulo Logro" name="titulo" type="text"  required class="my-4 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
                <h3 className="font-bold text-lg">Descripción:</h3>
                <input id="Descripcion" placeholder="Ingrese Descripción" name="Descripcion" type="text"  required class="my-4 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
                <div className="mb-3">
                <h3 className="font-bold text-lg">Foto:</h3>
                <input accept="image/png, image/jpeg, image/gif" type="file"/>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="bg-red-500 mr-10 hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full align-center">Cancelar</button>
                    <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded-full  align-center">Confirmar</button>
                  </form>
                </div>
              </div>
            </dialog>
        </div>
        
    )
}

export default BotonLogros