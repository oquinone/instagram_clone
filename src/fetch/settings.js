export const updateUserInfo = async (username, bio, profilePic) => {
    const url = "https://invulnerable-moliere-82505.herokuapp.com/edit";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'appliation.josn'
          },
        body:JSON.stringify({
            username: username,
            bio: bio,
            image: profilePic
        }),
        credentials: 'include'
    }
    await fetch(url, options);
    // const dataJSON = await data.json();
    return;
}