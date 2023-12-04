import styles from "../style"

const CategoriasConvenios = ({ selectedCategory, onSelectCategory }) => {
  const handleCategoryClick = (category) => {
    if (selectedCategory===category){
      onSelectCategory("default");
      return

    } 


    onSelectCategory(category);
  };

  
    return (
    <div>
        <div className={`${styles.flexCenter} space-x-[60px] `}>
          <button className={`${
            selectedCategory === 'Salud' ? 'bg-green-700' : 'bg-green-600'
          } hover:bg-green-700 text-black text-[20px] font-bold py-6 px-10 rounded border-4 border-black`}
          onClick={() => handleCategoryClick('Salud')}
        >
            Salud
          </button>
          <button className={`${
            selectedCategory === 'Alimentos' ? 'bg-gray-300' : 'bg-gray-200'
          } hover:bg-gray-300 text-black text-[20px] font-bold py-6 px-10 rounded border-4 border-black`}
          onClick={() => handleCategoryClick('Alimentos')}
        >
            Alimentos
          </button>
          <button className={`${
            selectedCategory === 'Entretenimiento' ? 'bg-yellow-500' : 'bg-yellow-400'
          } hover:bg-yellow-500 text-black text-[20px] font-bold py-6 px-10 rounded border-4 border-black`}
          onClick={() => handleCategoryClick('Entretenimiento')}
        >
            Entrenimiento
          </button>
          <button className={`${
            selectedCategory === 'Otros' ? 'bg-red-700' : 'bg-red-600'
          } hover:bg-red-700 text-black text-[20px] font-bold py-6 px-10 rounded border-4 border-black`}
          onClick={() => handleCategoryClick('Otros')}
        >
            Otros
          </button>
        </div>
    </div>
    )
}

export default CategoriasConvenios