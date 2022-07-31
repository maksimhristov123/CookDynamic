import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



export const RecipeItem = (recipe) => {
    return (
        <div className={recipe.category}>
            <div href="/" className="card">
                <div className="card_img_container">
                    <div className="recipe_time">
                        <img src="./uploads/pan.png" alt="" />
                        <p className="time"><span>{recipe.cookTime}</span> mins</p>
                    </div>

                    <div className="recipe_category">
                        <p className="category">{recipe.category}</p>
                    </div>

                    <img src={recipe.recipeImage} alt="" />
                </div>
                <div className="card_content_container">
                    <h3 className="card_title">{recipe.recipeTitle}</h3>
                    <p>{recipe.resipeDescription}</p>

                    <div className='btn_container'>

                        <a href='/' className="add_to_card text_blue">
                            <FontAwesomeIcon icon={faPlus} />
                            Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}