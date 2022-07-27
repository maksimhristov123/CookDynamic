import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



export const RecipeItem = (props) => {
    return (
        <div className={props.category.join(' ')}>
            <a href="/" className="card">
                <div className="card_img_container">
                    <div className="recipe_time">
                        <img src="./uploads/pan.png" alt="" />
                        <p className="time"><span>{props.cookTime}</span> mins</p>
                    </div>

                    <div className="recipe_category">
                        <p className="category">{props.category[0]}</p>
                    </div>

                    <img src={props.recipeImage} alt="" />
                </div>
                <div className="card_content_container">
                    <h3 className="card_title">{props.recipeTitle}</h3>
                    <p>{props.resipeDescription}</p>

                    <div className='btn_container'>

                        <a href='/' className="add_to_card text_blue">
                            <FontAwesomeIcon icon={faPlus} />
                            Details
                        </a>

                        <a href='/' className="add_to_card text_blue">
                            <FontAwesomeIcon icon={faPlus} />
                            Add Recipe
                        </a>
                    </div>
                </div>
            </a>
        </div>
    )
}