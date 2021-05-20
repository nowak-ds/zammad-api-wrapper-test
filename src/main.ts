/// <reference path="../node_modules/@types/jquery/misc.d.ts" />
let baseUrl = "http://213.171.210.172:5000/";
//let baseUrl = "http://127.0.0.1:5008/";
let auth = 'Bearer GDt-7nr9qJQAclcg3KAfkJ4HMFl202KwDNysBMhsGEhOUCu6VBIpdNdCMixg4l71';

let zammadClient = new ZammadClient(baseUrl, auth);

function getTicket() {
	let conditions: Zammad.IConditions = {};

	let object = $('#object-input').val().toString();
	let operator = $('#operator-input').val().toString();
	let value = $('#value-input').val().toString()

	conditions[object] = {
		operator: operator,
		value: value
	}
	
	zammadClient.getTickets(conditions).then((tickets) => {
		console.log(tickets);
	});
}

function sendRequest() {
	let urlExt = $('#url-input').val().toString();
	let method = $('#method-select').val().toString();
	console.log('Send request to url: ' + baseUrl + urlExt);
	$.ajax(baseUrl + urlExt, {
		type: method,
		headers: {
			'Authorization': auth
		},
		success: function (res: Zammad.ITicket[]) { console.log('Result\n', res); }
	});
}