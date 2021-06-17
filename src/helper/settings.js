export const change = async (file) => {
    return (await convertBase64(file));
}

//Creates DOMString for image
// Image is stored in the browers
export const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    })
}