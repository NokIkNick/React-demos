const APIURL = "https://tripapi.cphbusinessapps.dk/api/trips"

export const fetchApi = async () => {
    const response = await fetch(APIURL, {
        method:"GET",
        headers: {
            "Content-Type":"application/json"
        }
    });

    if(!response.ok){
        throw new Error("No network connection");
    }
    const data = await response.json();
    return data;
}

