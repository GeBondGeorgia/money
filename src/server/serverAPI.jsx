const serverAPI = async (subdirectory = "", formData = "", method = "GET") => {
	const __url = "http://localhost:8000/" + subdirectory;
	const requestOptions = {
		method,
		headers: {
			"Content-Type": "application/json",
		},
	};
	if (method !== "GET" && method !== "HEAD") {
		requestOptions.body = formData ? JSON.stringify(formData) : "";
	}

	return await fetch(__url, requestOptions)
		.then((response) => {
			if (!response.ok) {
				throw new Error(["FetchErr", "Failed to fetch data from the server."]);
			}
			return response.json();
		})
		.catch((error) => {
			throw new Error(["FetchErr", error.message]); 
		});
};

export default serverAPI;
