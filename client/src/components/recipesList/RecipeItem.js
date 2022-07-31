import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const RecipeItem = (reciper) => {

    let recipeDescriptionSlized = reciper.resipeDescription.slice(0, 100);

    return (
        <div className="item best_seller">
            <div className="card">
                <div className="card_img_container">
                    <div className="recipe_time">
                        <img src="./uploads/pan.png" alt="" />
                        <p className="time"><span>{reciper.cookTime}</span> mins</p>
                    </div>

                    <div className="recipe_category">
                        <p className="category">{reciper.category}</p>
                    </div>

                    <img src={reciper.recipeImage} alt="" />
                </div>
                <div className="card_content_container">
                    <h3 className="card_title">{reciper.recipeTitle}</h3>

                    <p>
                        {recipeDescriptionSlized}
                    </p>

                    <div className='btn_container'>

                        <Link to={`/recipes/${reciper.recipeId}`} className="add_to_card text_blue">
                            <FontAwesomeIcon icon={faPlus} />
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}