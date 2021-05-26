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
                success: function (res: Zammad.ITicket[]) { 
                    console.log('Result\n', res); 
                    resolve(res);
                }
            });
        });
    }

    public getCategories(localeId: number) {
        let url = this.__baseUrl + 'categories?hierarchical=true&kbId=1'
        if (localeId)
            url += '&localeId=' + localeId;
        console.log('Send request to url: ' + url);
        return new Promise<Zammad.ICategoryHierarchy[]>((resolve, reject) => {
            $.ajax(url, {
                type: "GET",
                headers: {
                    'Authorization': this.__auth
                },
                success: function (res: Zammad.ICategoryHierarchy[]) { 
                    console.log('Result\n', res); 
                    resolve(res);
                }
            });
        });
    }
}