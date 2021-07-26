export const uploadNewImage = async (image) => {
    const url = `https://invulnerable-moliere-82505.herokuapp.com/profile`;
    const options = { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            photo: image
        }), 
        credentials: 'include'
    };
    await fetch(url, options)
    return;
}