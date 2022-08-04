
const baseUrl = 'http://localhost:3008/api/users';

export const register = async (userData) =>{
    const response = await fetch(baseUrl,{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userData)
    })

    if(response.ok){

        const result = await response.json();
        console.log('Succesfuly registered!')
        return result.user;

    }else {

         console.error( 'Unable to register user');
    }
}