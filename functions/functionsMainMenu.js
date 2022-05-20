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
    console.log(`${ctx.from.username} Show post with sites`)
    await ctx.replyWithHTML(sitesPost.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        ...Markup.inlineKeyboard(constans.MENU_BUTTONS_SITES)
    });
}

//show info about med insurance
async function infoAboutMedicineFunc(ctx) {
    await ctx.replyWithHTML(medInfo.aboutMedicine, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_HEALTH).oneTime(true)
    });
}

async function writeToOwnerOfTelegram(ctx) {
    await ctx.replyWithSticker('CAACAgIAAxkBAAIH2mKHkobggkZ52R3V5MqPuA87854qAAJvAAPb234AAZlbUKh7k4B0JAQ');
    await ctx.replyWithHTML("Якщо у вас виникла проблема з використанням бота/є ідея щодо покращення бота/додати інформацію до бота, напишіть ➡️ <a href='https://t.me/IndependentRiver'>моя сторінка</a>", {
        parse_mode: "HTML", 
        disable_web_page_preview: true
    });
}

//show info about humanitarianAid
async function humanitarianAidFunc(ctx) {
    await ctx.replyWithHTML(humanInfo.humanAid, Markup.inlineKeyboard(constans.MENU_WITH_CITIES_OF_HUMAN_AID));
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
async function lookforanApartment(ctx) {
    await ctx.replyWithHTML(apartmentsinfo.sites); 
}

//FAQ
async function questionOften(ctx) {
    await ctx.replyWithHTML(questionInfo.qAndA)
}

module.exports.usefulContacts = usefulContacts;
module.exports.infoAboutMedicineFunc = infoAboutMedicineFunc;
module.exports.humanitarianAidFunc = humanitarianAidFunc;
module.exports.lookforanApartment = lookforanApartment;
module.exports.language = language;
module.exports.writeToOwnerOfTelegram = writeToOwnerOfTelegram;
module.exports.showPostWithSites = showPostWithSites;
module.exports.questionOften = questionOften;