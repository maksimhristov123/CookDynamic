import { useEffect } from "react";
import { useNavigate , useParams  } from "react-router-dom";

import * as recipeServices from '../../services/recipeServices';

export const RecipeDelete = () => {

    const { recipeId } = useParams();
    const navigateTo = useNavigate();


    useEffect(() => {
        recipeServices.deleteOne(recipeId)
            .then( 
                navigateTo('/')
            );
    }, [recipeId])

    return null;
}