
const baseUrl = 'http://localhost:3008/api/recipes';


// Get all recipes (Catalog)
export const getAll = async () => {

    const response = await fetch(baseUrl);
    const result = await response.json();

    return result;
}

// Get one recipe (Details)
export const getOne = async (recipeId) => {

    const response = await fetch(`${baseUrl}/${recipeId}`);
    const result = await response.json();

    return result;
}

// Create
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

// Delete
export const deleteOne = async (recipeId) => {
    await fetch(`${baseUrl}/${recipeId}/delete`);
    return null;
}

export const edit = async (recipeId, data) => {
    const response = await fetch(`${baseUrl}/${recipeId}/edit`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })

    if(response.ok){

        const result = await response.json();
        return result.recipe;

    }else {

         console.error( 'Unable to edit recipe');
    }
}


