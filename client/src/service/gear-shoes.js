baseUrl = 'http://localhost:4000/users'

export const getAllGears = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAGearById = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAGearByParam = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const addAGear = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const updateAGear = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const deleteAGear = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};