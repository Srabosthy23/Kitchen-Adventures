import { useEffect } from "react"
import Banner from "./assets/components/Banner"
import Navbar from "./assets/components/Navbar"
import { useState } from "react"
import SingleRecipe from "./assets/components/SingleRecipe"


function App() {

  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("../public/fakeData.json")
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  
  const handleCook = (rcp) => {
    const isExist = cart.find(rcp2 => rcp2.id === rcp.id);

    if (!isExist) {
      setCart([...cart, rcp])
      setCount(count+1)
    }
    else{
      alert("toast korte hobe")
    }

  }


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="mt-10 container mx-auto mb-20">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Our Recipes</h2>
          <p className="w-[800px] mx-auto">Embarking on kitchen adventures with our recipes is like setting sail on a culinary voyage, exploring flavors and techniques that tantalize the taste buds and ignite the imagination. Each recipe is a treasure map, guiding us through the labyrinth of ingredients and instructions to discover hidden culinary gems.</p>
        </div>
        {/* cards and table */}
        <div className="mt-10 lg:flex justify-between">
          {/* left */}
          <div className="w-2/3 lg:grid grid-cols-2 gap-4">
            {
              recipes.map(recipe => <SingleRecipe
                recipe={recipe}
                key={recipe.id}
                handleCook={handleCook}
              ></SingleRecipe>)
            }
          </div>
          <div className="w-1/3">
            <div className="ml-4 lg:border p-3 rounded-2xl">
              <h2 className="text-center font-bold text-xl mb-3">Want to Cook: <span>{count}</span></h2>
              <table className="table">
                <thead>
                  <tr className="bg-base-200">
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((item, i) => (
                      <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td>{item.calories}</td>
                        <th><button className="btn btn-accent rounded-full">Preparing</button></th>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
