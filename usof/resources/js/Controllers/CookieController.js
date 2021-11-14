export default class CookieController {
    constructor() { }
  
    static deleteCookie(name) {
      var domain = location.hostname,
        path = '/'; // root path
  
      document.cookie = [
        name, '=',
        '; expires=' + new Date(0).toUTCString(),
        '; path=' + path,
        '; domain=' + domain
      ].join('');
    }
  
  
    static getCookie(name) {
      let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  
    static setCookie(name, value, path) {
      document.cookie = name + "=" + value + ";path=" + path + ";";
    }
  
  }