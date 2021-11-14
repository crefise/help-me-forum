import RequestController from "./RequestController";
export default class RatingController {
    static async updateRating (requestData) {
        let result = await RequestController.requestPOST(`http://127.0.0.1:8000/api/posts/${requestData.post_id}/rating`,JSON.stringify(requestData), RequestController.defaultAuthJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
    static async getCalculatedRating (requestData) {
        let result = await RequestController.requestGET(`http://127.0.0.1:8000/api/posts/${requestData.post_id}/rating`, RequestController.defaultAuthJsonHeader).then( data => {
            return data;
        })
        return await result;
    }
    
}