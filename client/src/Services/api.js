import { commonrequest } from "./apiCalls";
import { backend_url } from "./helper";

export const registerfunction = async(name, health, phone, birth, gender, mrn) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/register`, {name: name, phone:phone, health: health, birth: birth, gender: gender, mrn: mrn});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}


export const loginfunction = async(phone) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/admin/login`, {phone: phone});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}