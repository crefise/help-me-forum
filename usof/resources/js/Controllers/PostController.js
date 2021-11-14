import RequestController from "./RequestController";

export default class PostController {
    static async createNewPost (requestData) {
        let result = await RequestController.requestPOST(`http://127.0.0.1:8000/api/posts`, JSON.stringify(requestData), RequestController.defaultAuthJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
    static async showAllPosts () {
        let result = await RequestController.requestGET(`http://127.0.0.1:8000/api/posts`, RequestController.defaultJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
    static async showCurrentPost (requestData) {
        let result = await RequestController.requestGET(`http://127.0.0.1:8000/api/posts/${requestData.id}`, RequestController.defaultJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
    
}
