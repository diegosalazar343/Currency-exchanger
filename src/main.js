import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {CurrencyObject} from './currency-exchanger.js';
import CurrencyService from './currency-exchanger-service.js';

$(document).ready(function () {
  $("#submit").submit(function(event) {
    event.preventDefault();
    let exchange;
    const worldCurrency = $("#world-currency").val();
    const inputAmount = $("#input-amount").val();
    $("#results").html("Amount:");
    $("#input-amount").val("");
    CurrencyService.getService()
      .then(function(rateService) {
        exchange = new CurrencyObject(worldCurrency, inputAmount, rateService);
        $("#results").append(`${exchange.results(worldCurrency, inputAmount)}`);
      });
  });
});
