import RequestController from "./RequestController";

export default class UserController {
    static async registerNewUser(requestData) {
        let result = await RequestController.requestPOST('http://127.0.0.1:8000/api/registration', JSON.stringify(requestData), RequestController.defaultJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
    static async loginUser(requestData) {
        let result = await RequestController.requestPOST('http://127.0.0.1:8000/api/login', JSON.stringify(requestData), RequestController.defaultJsonHeader).then( data => {
            return data;
        })
        return await result;
    }

    static async showCurrentUser() {
        let result = await RequestController.requestGET('http://127.0.0.1:8000/api/profile', RequestController.defaultAuthJsonHeader).then( data => {
            return data;
        })
        return await result;
    }

    static async loadAllUsers () {
        let result = await RequestController.requestGET('http://127.0.0.1:8000/api/users', RequestController.defaultAuthJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
    static async createNewAdmin (requestData) {
        let result = await RequestController.requestPOST('http://127.0.0.1:8000/api/users', JSON.stringify(requestData), RequestController.defaultAuthJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
    static async deleteUser (requestData) {
        let result = await RequestController.requestDELETE(`http://127.0.0.1:8000/api/users?id=${requestData.id}`, RequestController.defaultAuthJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
    static async showUserProfile (requestData) {
        let result = await RequestController.requestGET(`http://127.0.0.1:8000/api/users/${requestData.id}`, RequestController.defaultJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
}