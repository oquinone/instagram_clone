export const getProfileData = async (uid) => {
    const url = `http://localhost:5000/profile/${uid}`;
    const options = { method: 'GET' }
    const data = await fetch(url, options);
    const dataJSON = await data.json();
    return dataJSON;
}