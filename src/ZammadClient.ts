class ZammadClient {
    constructor(baseUrl: string, auth: string) {
        this.__baseUrl = baseUrl;
        this.__auth = auth;
    }

    private __baseUrl: string;
    private __auth: string;

    public getTickets(conditions: Zammad.IConditions) {
        console.log('Send request to url: ' + this.__baseUrl + 'tickets' + ' | Transmitted conditions ', conditions);
        return new Promise<Zammad.ITicket[]>((resolve, reject) => {
            $.ajax(this.__baseUrl + 'tickets', {
                type: "POST",
                data: JSON.stringify(conditions),
                headers: {
                    'Authorization': this.__auth,
                    'Content-Type': "application/json"
                },
                success: function (res: Zammad.ITicket[]) { console.log('Result\n', res); }
            });
        });
    }
}