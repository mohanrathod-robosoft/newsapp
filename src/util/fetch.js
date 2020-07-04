
export const Fetch = async (url) => {
    try{
        let response =  await fetch(url);
        let result = await response.json();
        return result;
    }
    catch(err) {
        throw err;
    }
    
}