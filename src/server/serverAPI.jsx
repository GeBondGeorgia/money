

const serverAPI = async (formData = "", subdirectory = "", method = "GET", parseJson = true) => {
    const __url =  "http://localhost:8000/" + subdirectory;
    const requestOptions = {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: formData ? JSON.stringify(formData) : "", 
    }

    return await fetch(__url, requestOptions)
            .then(response => {
                if (!response.ok) {           
                    throw new Error(["FetchErr", "Failed to fetch data from the server."]);
                }
                return parseJson ? response.json() : response;
            })
            .catch(error => {
                throw new Error(["FetchErr", error]);
            });
    }




export default serverAPI;