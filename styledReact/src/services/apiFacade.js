import {BASE_URL} from "../utils/globalVariables.js"


const login = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}


const register = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        console.log(data);
    }catch (error){
        console.log(error);
    }

}

login("test", "test1234");