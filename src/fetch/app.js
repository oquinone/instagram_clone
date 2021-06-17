export const uploadNewImage = async (image) => {
    const url = `http://localhost:5000/profile`;
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