"use strict";
/// <reference path="../node_modules/@types/jquery/misc.d.ts" />
var baseUrl = "http://213.171.210.172:5000/";
//let baseUrl = "http://127.0.0.1:5008/";
var auth = 'Bearer GDt-7nr9qJQAclcg3KAfkJ4HMFl202KwDNysBMhsGEhOUCu6VBIpdNdCMixg4l71';
var zammadClient = new ZammadClient(baseUrl, auth);
function getTicket() {
    var conditions = {};
    var object = $('#object-input').val().toString();
    var operator = $('#operator-input').val().toString();
    var value = $('#value-input').val().toString();
    conditions[object] = {
        operator: operator,
        value: value
    };
    zammadClient.getTickets(conditions).then(function (tickets) {
        console.log(tickets);
    });
}
function sendRequest() {
    var urlExt = $('#url-input').val().toString();
    var method = $('#method-select').val().toString();
    console.log('Send request to url: ' + baseUrl + urlExt);
    $.ajax(baseUrl + urlExt, {
        type: method,
        headers: {
            'Authorization': auth
        },
        success: function (res) { console.log('Result\n', res); }
    });
}
//# sourceMappingURL=main.js.map