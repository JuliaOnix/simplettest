const { Telegraf, Markup } = require("telegraf");
const contacts = require('../text/contacts')
const apartmentsinfo = require('../text/apartmentsinfo')
const languageInfo = require('../text/languageLitovskiy')
const questionInfo = require('../text/oftenAks')
const constans = require('../functions/fileCostants')
const medInfo = require('../text/medicineInfo')
const humanInfo = require('../text/humanitarianAidText')
const sitesPost = require('../text/sitesWithServices')

async function showPostWithSites(ctx) {
    await ctx.replyWithHTML(sitesPost.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true
    });
}


//show info about med insurance
async function infoAboutMedicineFunc(ctx) {
    await ctx.replyWithHTML(medInfo.aboutMedicine, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_HEALTH)
    });
}

//show info about humanitarianAid
async function humanitarianAidFunc(ctx) {
    await ctx.replyWithHTML(humanInfo.humanAid, Markup.inlineKeyboard([
        Markup.button.callback("Інші міста", 'btn_anotherCities')
    ]));
}

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
module.exports.infoAboutMedicineFunc = infoAboutMedicineFunc;
module.exports.humanitarianAidFunc = humanitarianAidFunc;
module.exports.lookforanApartment = lookforanApartment;
module.exports.language = language;
module.exports.showPostWithSites = showPostWithSites;
module.exports.questionOften = questionOften;