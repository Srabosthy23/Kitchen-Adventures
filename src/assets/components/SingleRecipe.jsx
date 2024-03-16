import { CiClock1 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';

const SingleRecipe = ({ recipe, handleCook }) => {
  // console.log(recipe)
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure><img className="h-[300px] w-full p-5" src={recipe.image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.name}</h2>
          <p>{recipe.description}</p>

          <hr />

          <p className="font-bold">Ingredients: 6</p>
          <ul className="list-disc list-inside pl-5">
            <li>{recipe.ingredients[0]}</li>
            <li>{recipe.ingredients[1]}</li>
            <li>{recipe.ingredients[2]}</li>
            <li>{recipe.ingredients[3]}</li>
            <li>{recipe.ingredients[4]}</li>
            <li>{recipe.ingredients[5]}</li>
          </ul>

          <hr />

          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-2">
              <CiClock1 />
              <p><span>{recipe.time}</span> minutes</p>
            </div>

            <div className="flex justify-center items-center gap-2">
              <AiOutlineFire />
              <p><span>{recipe.calories}</span> calories</p>
            </div>
          </div>

          <button onClick={() => handleCook(recipe)} className="btn btn-accent rounded-full w-2/3 mx-auto font-bold">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

SingleRecipe.propTypes = {

  recipe: PropTypes.object,
  handleCook: PropTypes.func
}

export default SingleRecipe;