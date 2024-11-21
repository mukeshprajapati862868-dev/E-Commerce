import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SingleRecipe = () => {
    let location = useLocation();
    console.log(location.state);
    let recipe = location.state
  return (
    <div>
      {/* <h1>This is single page</h1> */}
      <div className='main flex md:flex-row flex-col gap-5 bg-gray-400 w-max mx-auto p-2 rounded-md'>
        <div className='left'>
          <img src={recipe.image} alt="" />
        </div>
        <div className='right'>
          <h3 className='lg:text-3xl md:text-2xl mb-2'><span>Title:</span>{recipe.label}</h3>
          <h3 className='mb-2'>DishType:{recipe.dishType}</h3>
          <h3 className='mb-2'>MealType:{recipe.mealType}</h3>
          <h3 className='mb-2'>CuisineType:{recipe.cuisineType}</h3>

          <Link to={recipe.url} className='bg-green-700 p-2 w-max rounded-md'>Recipe Method</Link>
        </div>
      </div>

       
<div className='w-[80%] mx-auto my-4 bg-slate-800'>
  <ul>
    <b className='text-xl'>Ingredients</b>
          {recipe.ingredientLines.map((ele)=>{
            return <li>{ele}</li>
          })}
  </ul>
</div>





      <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Products
        </th>
              <th scope="col" className="px-6 py-3">
                Label
              </th>
        <th scope="col" className="px-6 py-3">
          Quantity
        </th>
      
        <th scope="col" className="px-6 py-3">
          Unit
        </th>
      </tr>
    </thead>
    <tbody>
      {
              Object.entries(recipe.totalNutrients).map(([key,value],i)=>{
          return <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {key}
            </th>
            
            <td className="px-6 py-4">
              {value.label}
            </td>
            <td className="px-6 py-4">
              {value.quantity}
            </td>
            <td className="px-6 py-4">
              {value.unit}
            </td>
          </tr>


        })
      }
     
    </tbody>
  </table>


  {/* <ul>
          {
            Object.entries(recipe.totalNutrients).map(([key, value], i) => {
              return <li key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <span scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {key}
                </span>

                <span className="px-6 py-4">
                  {value.label}
                </span>
                <span className="px-6 py-4">
                  {value.quantity}
                </span>
                <span className="px-6 py-4">
                  {value.unit}
                </span>
              </li>


            })
          }
  </ul> */}
</div>



      </div>
  );
}

export default SingleRecipe;

// import React from 'react';

// const SingleRecipe = () => {
//   let location = useState();
//   console.log(location);
//   let recipe = location.state

//   return (
//     <div className='pd-36'>

//       <div className=" flex gap-5 md:flex-row flex-col bg-slate-500 w-max m-auto p-3 rounded-m mt-25">
//         <div className="left">
//           <img src={ } alt="" />
//         </div>
//         <div className="right">
//           <h1 className="">{recipe.label}</h1>
//           <h3 className='md-2'>{recipe.dishType}</h3>
//           <h3 className='md-2'>{recipe.mealType}</h3>
//           <h3 className='md-2'>{recipe.cuisine}</h3>
//           <buttton className="">Recipe</buttton>

//         </div>
//       </div>

//       {
//         Object.entries(recipe.totalNutrients).map(([key, value], i) => {
//           return

//         })
//       }
//     </div>
//   );
// }

// export default SingleRecipe;
