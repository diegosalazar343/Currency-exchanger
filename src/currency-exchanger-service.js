export default class CurrencyService {

  static currencyExchanger() {
    return fetch(`https://v6.exchangerate-api.com/v6/b839521eac186acf71f8e111/latest/USD`)
      .then(function(rateService) {
        if(!rateService.ok) {
          throw Error(rateService.statusText);
        }
        return rateService.json();
      })
      .catch(function(error){
        return error;
      });
  }
}
