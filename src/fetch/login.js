export const loginReq = async (email, password) => {
    const url = "https://invulnerable-moliere-82505.herokuapp.com/login";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({
            email: email,
            password: password
        }),
        credentials: 'include'
    }
    const data = await fetch(url, options);
    const dataJSON = await data.json();
    return dataJSON;
}