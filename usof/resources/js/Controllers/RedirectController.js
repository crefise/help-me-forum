export default class RedirectController {
    constructor() {}



    static redirectTo(name = "/") {
        location.href = name;
    }
    static reload() {
        location.href = location.href;
    }
}