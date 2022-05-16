const contacts = require('../text/contacts')
const apartmentsinfo = require('../text/apartmentsinfo')
const languageInfo = require('../text/languageLitovskiy')
const questionInfo = require('../text/oftenAks')

//useful contacts 
function usefulContacts(ctx) {
    ctx.replyWithHTML(contacts.address);
    ctx.replyWithHTML(contacts.usefulContacts);
    ctx.replyWithHTML(contacts.medContacts);
}

//about language, free lessons

function language(ctx) {
    ctx.replyWithHTML(languageInfo.sites)
}

//info how look for apartments
function lookforanApartment(ctx) {
    ctx.replyWithHTML(apartmentsinfo.sites); 
}

//FAQ
function questionOften(ctx) {
    ctx.replyWithHTML(questionInfo.qAndA)
}

module.exports.usefulContacts = usefulContacts;
module.exports.lookforanApartment = lookforanApartment;
module.exports.language = language;
module.exports.questionOften = questionOften;