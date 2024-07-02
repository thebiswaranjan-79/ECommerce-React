import React, { useEffect } from 'react'
import './Home.css';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { getAllCategories } from '../../apis/fakeStoreProdApis';


function Home() {
  
  const[categories, setCategories] = useEffect(null);

  async function downloadCategories(){
      const response = await axios.get(getAllCategories());
      setCategories(response.data);
  }

  useEffect(() => {
    downloadCategories();
  }, [])

  return (
    <div className="container welcome-wrapper">
            <div className="row">
                <h2 className="home-title text-center">Welcome to Shop Cart</h2>
                <div className="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList">  
                   <CategoryItem itemName= 'All Products' />

                   {categories && categories.map(category => <CategoryItem itemName={category} key={category} ></CategoryItem>) }

                </div>
                <div className="category-title text-center">
                    Select a category to start Shopping on  My Ecommerce App
                </div>
            </div>
        </div>
  )
}

export default Home
