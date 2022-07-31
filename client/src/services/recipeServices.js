
const baseUrl = 'http://localhost:3008/api/recipes';

export const getAll = async () => {

    const response = await fetch(baseUrl);
    const result = await response.json();

    return result;
}

export const getOne = async (recipeId) => {

    const response = await fetch(`${baseUrl}/${recipeId}`);
    const result = await response.json();

    return result;
}

export const create = async (recipeData) => {

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(recipeData)
    })

    if(response.ok){

        const result = await response.json();
        console.log('Recipe added!')
        return result.recipe;

    }else {

         console.error( 'Unable to create recipe');
    }
}
