export const loginReq = async (email, password) => {
    const url = "http://localhost:5000/login";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({
            email: email,
            password: password
        }),
        credentials: 'include'
    }
    const data = await fetch(url, options);
    const dataJSON = await data.json();
    console.log(dataJSON);
    return dataJSON;
}