import CookieController from "./CookieController";

export default class RequestController {

  static defaultJsonHeader = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  static defaultAuthJsonHeader = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': "Bearer " + CookieController.getCookie("jwt-token"),
  };

  static defaultHeader = {
    'Accept': 'application/json'
  };

  static defaultAuthHeader = {
    'Accept': 'application/json',
    'Authorization': "Bearer " + CookieController.getCookie("jwt-token")
  };




  static async requestPOST(url = '', data = {}, header = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: header,
      body: data
    });
    return await response.json();
  }
  static async requestPUT(url = '', data = {}, header = {}) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: header,
      body: data
    });
    return await response.json();
  }

  static async requestGET(url = '', header = {}) {
    const response = await fetch(url, { headers: header });
    return await response.json();
  }

  static async requestDELETE(url = '', header = {}) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: header

      });
    return await response.json();
  }


  static findGetParameter(parameterName) {
    var result = null,
      tmp = [];
    location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
    return result;
  }
}