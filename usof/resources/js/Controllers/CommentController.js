import RequestController from "./RequestController";
export default class CommentController {
    static async createNewComment(requestData) {
        let result = await RequestController.requestPOST('http://127.0.0.1:8000/api/comments/', JSON.stringify(requestData), RequestController.defaultAuthJsonHeader).then(data => {
            return data;
        })
        return await result;
    }

    static async loadCurrentPostComments(requestData) {
        let result = await RequestController.requestGET(`http://127.0.0.1:8000/api/comments?post_id=${requestData.post_id}`, RequestController.defaultJsonHeader).then(data => {
            return data;
        })
        return await result;
    }
}