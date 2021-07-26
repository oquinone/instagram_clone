export const signupReq = async (username, email, password, password2) => {
    const url = "https://invulnerable-moliere-82505.herokuapp.com/signup";
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
    const data = await fetch(url, options)
    const dataJSON = await data.json();
    return dataJSON;
}