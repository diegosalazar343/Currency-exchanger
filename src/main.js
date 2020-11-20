import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-exchanger-servivce.js';

$(document).ready(function () {
  $("#TODO").submit(function(event) {
    event.preventDefualt();
    let promise = CurrencyService.currencyExchanger();
    promise.then(function(response) {
      const body = JSON.parse(response);
    });
  })
});
