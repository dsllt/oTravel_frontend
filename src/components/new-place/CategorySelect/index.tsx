import { Categories, NewPlaceSchema } from '@app/new-place/page';
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';


type Props = {
  availableCategories: Categories;
  selectedCategories: Categories;
  initialCategories: Categories;
  setSelectedCategories: React.Dispatch<React.SetStateAction<Categories>>;
  setAvailableCategories: React.Dispatch<React.SetStateAction<Categories>>;
  register: UseFormRegister<NewPlaceSchema>;
  errors: any;
  setValue: UseFormSetValue<NewPlaceSchema>;
}

function CategorySelect({ availableCategories, selectedCategories, initialCategories, setSelectedCategories, setAvailableCategories, register, errors, setValue }: Props) {
  function handleSelectCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedCategory = event.target.value as keyof Categories;

    setSelectedCategories(prevSelectedCategories => ({
      ...prevSelectedCategories,
      [selectedCategory]: initialCategories[selectedCategory]
    }));

    setAvailableCategories(prevAvailableCategories => {
      const newAvailableCategories = { ...prevAvailableCategories };
      delete newAvailableCategories[selectedCategory];
      return newAvailableCategories;
    });
  };

  function handleRemoveCategory(category: string) {
    setAvailableCategories(prevAvailableCategories => ({
      ...prevAvailableCategories,
      [category]: initialCategories[category]
    }));

    setSelectedCategories(prevSelectedCategories => {
      const newAvailableCategories = { ...prevSelectedCategories };
      delete newAvailableCategories[category];
      return newAvailableCategories;
    });
  }
  useEffect(() => {
    setValue('placeCategory', selectedCategories);
  }, [selectedCategories, setValue]);

  return (
    <label htmlFor="placeCategory" className="text-sm mb-4 flex flex-col w-full">
      Categoria
      <div className="flex items-center justify-between gap-2 h-12 p-4 mt-2 rounded-lg border-2 border-[#b2ccd633] bg-[#2a303c]">
        <select
          id="placeCategory"
          className="bg-transparent pr-5 focus:outline-none"
          onChange={handleSelectCategory}
        >
          <option selected>Selecione a categoria</option>
          {Object.keys(availableCategories).map((category) => <option key={category} value={category}>{availableCategories[category]}</option>)}
        </select>
        <div className="flex gap-2">
          {Object.keys(selectedCategories).map((category) => (
            <div key={category} className="bg-[#20252e] rounded-lg p-2 flex items-center gap-1">
              <span>
                {selectedCategories[category]}
              </span>
              <XMarkIcon className="w-6 h-6 text-red-300 cursor-pointer hover:bg-slate-700 rounded-lg p-1" onClick={() => handleRemoveCategory(category)} />
            </div>
          ))}
        </div>
      </div>
    </label>

  )
}

export default CategorySelect