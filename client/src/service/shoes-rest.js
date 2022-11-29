baseUrl = 'http://localhost:4000/users'

export const getAllShoes = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAShoeById = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAShoeByParam = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const addAShoe = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const updateAShoe = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const deleteAShoe = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};