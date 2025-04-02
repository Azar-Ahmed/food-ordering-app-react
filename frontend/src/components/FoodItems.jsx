import React from 'react'
import FoodCart from './FoodCart'
import foodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItems = () => {
  const category = useSelector((state) => state.category.category)
  const search = useSelector((state) => state.search.search)


  const handleToast = (name) => toast.success(`Added ${name} `);
  return (
    <>
     <Toaster position="top-center" reverseOrder={false} />
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {foodData.filter((food)=>{
        if(category === 'All'){
          return food.name.toLowerCase().includes(search.toLowerCase().trim())
        }else{
          return category === food.category && food.name.toLowerCase().includes(search.toLowerCase().trim())

        }
      }).map((food) => (<FoodCart
        key={food.id}
        id={food.id}
        name={food.name}
        img={food.img}
        desc={food.desc}
        price={food.price}
        rating={food.rating}
        handleToast={handleToast}
      />))
      }
    </div>
    </>
  )
}

export default FoodItems
