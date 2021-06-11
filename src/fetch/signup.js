export const signupReq = (username, email, password, password2) => {
    const url = "http://localhost:5000/signup";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({
            username: username,
            email: email,
            password: password,
            secondAttemptPassword: password2
        })
    }
    fetch(url, options)
    .then(res => res.json())
    .then(data => { return data });
}