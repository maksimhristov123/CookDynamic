
const baseUrl = 'http://localhost:3008/api/users';

export const register = async (userData) =>{
    const response = await fetch(`${baseUrl}/register`,{
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

export const login = async(email, password) => {
    const response = await fetch(`${baseUrl}/login`,{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    if(response.ok){

        const result = await response.json();
        console.log(result)
        return result;

    }else {

         console.error( 'Unable to login user');
    }
}