export const logout = async () => {
    const url = `http://localhost:5000/logout`;
    const options = {
         method: 'GET',
         credentials: 'include'
        }
    await fetch(url, options);
    return; 
}