import  { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

let searchRef=useRef();

  const [search,  setsearch]=useState("pizza")
  console.log(search);
  

    const [arr,setarr]=useState([]);
    console.log(arr);
    

    const fetchData =async()=>{
        let res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=0760938c&app_key=5878dc78280d795ef8960ef4a5c29710`);
        

        let data=await res.json();
        // console.log(data.products);
       
        
        console.log(data.hits);
        setarr(data.hits)
        // return data.hits;
        
    }
    useEffect(()=>{
        fetchData()
    },[search]);
   


  const handleClick=(ans)=>{
      console.log(ans.recipe);
      
    }
// fetchData();

// const handleChange=(e)=>{
//   // console.log(e.target);
//   let value=e.target.value; 
//   setsearch(value)
  
// }

const handleSearch=( )=>{
  console.log("running");
  let value=searchRef.current.value
  setsearch(value)
  // console.log(search);
  
  

}
  return (
   
   

     <div>
      <div className='w-max m-auto mt-28 mb-6 flex gap-3'>
        <input ref={searchRef} type="text" name="" id="" placeholder='search'  className='py-2 rounded-md bg-yellow-300'/>
        <button onClick={handleSearch} className='bg-red-300 py-2 x-6 rounded-md'>search</button>

      </div>
      
      <div className='grid grid-cols-12 p-4 gap-5'>
        {
          arr.map((ele, i) => {
            return <div key={i} className="mx-auto lg:col-span-3 md:col-soan-4 sm:col-span-6 col-span-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="p-8 h-[250px  ] rounded-t-lg" src={ele.recipe.image} alt="product image" />
              </a>
              <div className="px-5pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{ele.recipe.label}</h5>
                </a>



                <div className="flex items-center justify-between mt-2">

                  <Link to="/single" state={ele.recipe}  onClick={()=>handleClick(ele)}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Recipe</Link>
                  {/* <button onClick={()=>handleClick(ele)} className='bg-green-300 p-2'>Click me</button> */}
                </div>
              </div>
            </div>


          })
        }
      </div>
     </div>
  
  );
}

export default Home;
