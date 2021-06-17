export const change = async (profilePic, file) => {
    if(profilePic !== undefined){
        return (await convertBase64(file));
    }
    return null;
}

const convertBase64 = (file) => {
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