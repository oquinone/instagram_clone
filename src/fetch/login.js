export const loginReq = (email, password) => {
    const url = "http://localhost:5000/login";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({
            email: email,
            password: password
        })
    }
    fetch(url, options)
    .then(res => res.json())
    .then(data => {return data;});
}