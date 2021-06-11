export const updateUserInfo = async (id, username, bio, profilePic) => {
    const url = "http://localhost:5000/edit";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'appliation.josn'
          },
        body:JSON.stringify({
            id: id,
            username: username,
            bio: bio,
            image: profilePic
        })
    }
    await fetch(url, options);
    // const dataJSON = await data.json();
    return;
}