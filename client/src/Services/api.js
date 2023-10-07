import { commonrequest } from "./apiCalls";
import { backend_url } from "./helper";

export const registerfunction = async(name, phone, email, birth, gender,role) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/register`, {name: name, phone:phone, email: email, birth: birth, gender:gender, role:role});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}


export const loginfunction = async(phone) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/login`, {phone: phone});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}