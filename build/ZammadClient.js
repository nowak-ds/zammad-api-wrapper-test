"use strict";
var ZammadClient = /** @class */ (function () {
    function ZammadClient(baseUrl, auth) {
        this.__baseUrl = baseUrl;
        this.__auth = auth;
    }
    ZammadClient.prototype.getTickets = function (conditions) {
        var _this = this;
        console.log('Send request to url: ' + this.__baseUrl + 'tickets' + ' | Transmitted conditions ', conditions);
        return new Promise(function (resolve, reject) {
            $.ajax(_this.__baseUrl + 'tickets', {
                type: "POST",
                data: JSON.stringify(conditions),
                headers: {
                    'Authorization': _this.__auth,
                    'Content-Type': "application/json"
                },
                success: function (res) { console.log('Result\n', res); }
            });
        });
    };
    return ZammadClient;
}());
//# sourceMappingURL=ZammadClient.js.map