baseUrl = 'http://localhost:4080/clothes'

export const getAllClothes = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAClothingById = async(id) => {
    try{
        return await fetch(`${baseUrl}/${id}`)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAClothingByParam = async(param) => {
    try{
        return await fetch(`${baseUrl}/${param}`)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const addAClothing = async(clothingItem) => {
    const Options = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(clothingItem)
    }
    try{
        return await fetch(baseUrl, Options)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const updateAClothing = async(clothingItem) => {
    const Options = {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(clothingItem)
    }
    try{
        return await fetch(baseUrl, Options)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const deleteAClothing = async(clothingItem) => {
    const Options = {
        method:'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(clothingItem)
    }
    try{
        return await fetch(baseUrl, Options)
        .then(res => res)
    }catch(e){console.log(e)}
};