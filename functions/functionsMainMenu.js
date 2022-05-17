const contacts = require('../text/contacts')
const apartmentsinfo = require('../text/apartmentsinfo')
const languageInfo = require('../text/languageLitovskiy')
const questionInfo = require('../text/oftenAks')

//useful contacts 
async function usefulContacts(ctx) {
    let string = contacts.address + contacts.usefulContacts + contacts.medContacts;
    return ctx.replyWithHTML(string);
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