const baseUrl = 'http://localhost:5050/api/users'

export const getAllUsers = async() => {
    try{
        return await fetch(`${baseUrl}`)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAUserById = async(id) => {
    try{
        return await fetch(`${baseUrl}/${id}`)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAUserByParam = async(param) => {
    try{
        return await fetch(`${baseUrl}/${param}`)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const addAUser = async(newUser) => {
    const Options = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    }
    try{
        return await fetch(baseUrl, Options)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const updateAUser = async(userNewInfo) => {
    const Options = {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userNewInfo)
    }
    try{
        return await fetch(baseUrl, Options)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const deleteAUser = async(userToDelete) => {
    const Options = {
        method:'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userToDelete)
    }
    try{
        return await fetch(baseUrl, Options)
        .then(res => res)
    }catch(e){console.log(e)}
};