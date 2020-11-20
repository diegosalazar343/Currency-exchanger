export default class CurrencyService {

  static currencyExchanger() {
    return new Promise(function(resolve,reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/b839521eac186acf71f8e111/latest/USD?format=json&digits=3`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
