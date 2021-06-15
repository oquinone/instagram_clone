export const uploadNewImage = async (id, image) => {
    const url = `http://localhost:5000/profile/${id}`;
    const options = { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            photo: image
        }) 
    };
    await fetch(url, options)
    return;
}