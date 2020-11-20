import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-exchanger-servivce.js';

$(document).ready(function () {
  $("#submit").submit(function(event) {
    event.preventDefualt();
    let exchange;
    const worldCurrency = $("#world-currency").val();
    const inputAmount = $("#input-amount").val();
    $("#").html("");
    $("#").val("");
    CurrencyService.getService()
    .then(function(rateService) {
      exchange = new CurrencyService(worldCurrency, inputAmount, rateService);
      $("#results").append(`${exchange.results(worldCurrency, inputAmount)} ${worldCurrency}`);
    });
  })
});
