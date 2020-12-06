
function SendMessage(){
    const Nexmo = require('nexmo');

    const nexmo = new Nexmo({
    apiKey: 'de907463',
    apiSecret: 'ilP4hJFIXlI3Rs8k',
    });

    const from = '13369685960';
    const to = '14107776246';
    const text = 'Hello from Vonage SMS API';

    nexmo.message.sendSms(from, to, text);

}