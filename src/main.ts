/// <reference path="../node_modules/@types/jquery/index.d.ts" />
//let baseUrl = "http://213.171.210.172:5000/";
let baseUrl = "http://127.0.0.1:5008/";
let auth = 'Bearer gcUYgXsmjXzUci5USmKpVHlNkVs_IO-T18ikJ_C0yR40Bo7zGR4EXwqMtQaTsfp7';

let zammadClient = new ZammadClient(baseUrl, auth);

let urlInputLabel = $('#url-input-label');
urlInputLabel.text(baseUrl);

function getTicket() {
	let conditions: Zammad.IConditions = {};

	let object = $('#object-input').val()?.toString();
	let operator = $('#operator-input').val()?.toString();
	let value = $('#value-input').val()?.toString()

	if (object == null || operator == null || value == null)
		return;

	conditions[object] = {
		operator: operator as Zammad.ConditionOperator,
		value: value
	}
	
	zammadClient.getTickets(conditions).then((tickets) => {
		console.log(tickets);
	});
}

function getLocaleId() {
	return Number($('#locale-id-input').val());
}

function getKbId() {
	return Number($('#kb-id-input').val());
}

function getAnswerId() {
	return Number($('#answer-id-input').val());
}

function getCategories() {
	zammadClient.getCategories(getLocaleId());
}

function getTicketDetails() {
	let knowledgeBaseId = getKbId();
	let answerId = getAnswerId();
	let urlExt = `answers/${answerId}/details?kbId=${knowledgeBaseId}`;
	console.log('Send request to url: ' + baseUrl + urlExt)
	$.ajax(baseUrl + urlExt, {
		type: 'GET',
		headers: {
			'Authorization': auth
		},
		success: function (res: Zammad.ITicket[]) { console.log('Result\n', res); }
	});
}

function sendRequest() {
	let urlExt = $('#url-input').val()?.toString();
	let method = $('#method-select').val()?.toString();
	console.log('Send request to url: ' + baseUrl + urlExt);
	$.ajax(baseUrl + urlExt, {
		type: method,
		headers: {
			'Authorization': auth
		},
		success: function (res: Zammad.ITicket[]) { console.log('Result\n', res); }
	});
}