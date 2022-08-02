import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as recipeServices from '../../services/recipeServices';
import { useParams } from "react-router-dom";

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