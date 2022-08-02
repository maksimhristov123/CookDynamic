import { useEffect } from "react";

import * as recipeServices from '../../services/recipeServices';
import { useParams } from "react-router-dom";

export const RecipeDelete = () => {

    const { recipeId } = useParams();

    useEffect(() => {
        recipeServices.deleteOne(recipeId)
            .then( recipe => {
               console.log(recipe + 'hi');
            });
    }, [recipeId])

    return null;
}