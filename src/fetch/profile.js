export const getProfileData = async () => {
    const url = `http://localhost:5000/profile`;
    const options = { 
        method: 'GET',
        credentials: 'include',
    }
    
    const data = await fetch(url, options);
    if(!data.ok) {return "Not Auth";}
    const dataJSON = await data.json();
    return dataJSON;
}