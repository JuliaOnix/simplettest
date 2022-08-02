const { Telegraf, Markup } = require("telegraf");
const contacts = require('../text/contacts')
const constans = require('../functions/fileCostants')
const medInfo = require('../text/medicineInfo')
const humanInfo = require('../text/humanitarianAidText')
const sitesPost = require('../text/sitesWithServices')
const aboutLithuania = require('../text/aboutLithuania')
const aboutDocuments = require('../text/newText/mainPage')
const aboutApartments = require('../text/newText/whereLive')
const educationShcools = require('../text/educationAndSportInfo')
const allowanceFinanceVar = require('../text/allowanceFinanceFile')
const workInfo = require('../text/workInfoFile')

//menu with free thing/stuff/services
const FREESTUFFMENU = 
[
    allowanceFinanceVar.freeTransport, allowanceFinanceVar.freeWorkConsultation, allowanceFinanceVar.freeTranslator,
    allowanceFinanceVar.freePrintout, allowanceFinanceVar.freeСommunication, allowanceFinanceVar.freeLegalAid, allowanceFinanceVar.freePatsStuff, 
    allowanceFinanceVar.freeBeautyStauff, allowanceFinanceVar.freeMedOptica, allowanceFinanceVar.freeLessonsAndCourses, allowanceFinanceVar.freeForChildrenAndMothers,
    allowanceFinanceVar.freeKonsulska, allowanceFinanceVar.freeArtEvents, allowanceFinanceVar.freeSport
];


const messageFromDeveloper = ` 
Дякуємо за участь у проєкті: <b>Наталії Ткач</b>, <b>Юлії Аннусько</b>, <b>Юлії Ро</b> за збір інформації, редагування та форматування контенту.

<b>Зв'язок з розробниками</b> - @ua_lt_inbox_bot
`

const SOURSES = `
<b>Рекомендація</b>: Частіше перезапускайте бота за допомогою /start для оновлення контенту ☺️

<b>Джерела інформації:</b>
<a href="https://akrolesta.art/ua/spravochnik.html">https://akrolesta.art/ua</a>
https://ukraina.vilnius.lt
https://helpua.lt/
https://www.renkuosilietuva.lt/ru/informacia-dla-grazdan-ukrainy/
`

const ourTelegram = `
<b>Тут про зміни, мітинги, заходи та інші новини</b>
https://t.me/+uA00yl9KweQ1MTQy

<b>Будемо раді Вас бачити і у ньому також! :)</b>
`
// ANCHOR First button
async function mainInfoAboutRefugee(ctx) {
    console.log(`${ctx.from.username} main info about refugee`)
    await ctx.replyWithHTML(aboutDocuments.registartion, {
        protect_content: true,
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_REGISTRATION)
    });
}

//show block about education and sport for children also
async function educationAndSportFunc(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(educationShcools.generalInfoAboutSchool, {protect_content:true, parse_mode: 'HTML',
    disable_web_page_preview: true,  ...Markup.inlineKeyboard(constans.MENU_EDUCATION)});
}

async function showPostWithSites(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML("Каталог сайтів", {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        protect_content:true,
        ...Markup.inlineKeyboard(constans.MENU_BUTTONS_SITES)
    });
}

//show info about med insurance
async function infoAboutMedicineFunc(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(medInfo.aboutMedicine, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content:true,
        ...Markup.inlineKeyboard(constans.MENU_HEALTH)
    });
}

async function writeToOwnerOfTelegram(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithSticker('CAACAgIAAxkBAAIH2mKHkobggkZ52R3V5MqPuA87854qAAJvAAPb234AAZlbUKh7k4B0JAQ');
    await ctx.replyWithHTML(messageFromDeveloper, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        protect_content:true,
    })
    await ctx.replyWithHTML(SOURSES, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        protect_content:true,
    })
    await ctx.replyWithHTML(ourTelegram)
}

//show info about humanitarianAid
async function humanitarianAidFunc(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(humanInfo.humanAid, {protect_content:true , parse_mode: 'HTML',
    disable_web_page_preview: true,  ...Markup.inlineKeyboard(constans.MENU_WITH_CITIES_OF_HUMAN_AID)});
}

//useful contacts 
async function usefulContacts(ctx) { 
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    let string = contacts.usefulContacts + contacts.medContacts;
    return ctx.replyWithHTML(string, {
        parse_mode: "HTML", 
        disable_web_page_preview: true, 
        protect_content:true,
         ...Markup.inlineKeyboard([Markup.button.callback("Адреси реєстраційних центрів", 'btn_addresses_from_CONTACTS')])
    });
}

//info how look for apartments
async function lookforanApartment(ctx) { 
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(aboutApartments.aboutApartmentsMainPage, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content:true,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_APARTMENTS)
    }); 
}

//About Lithuania
async function aboutLithuaniaFunc(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(aboutLithuania.post, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content:true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.sitesForLearning, "language_btn")],
            [Markup.button.callback(constans.appsInLit, "show_apps_BTN")],
            [Markup.button.callback(constans.reccForEveryCities, "show_funs_BTN")]
        ])
    })
}

//show work posts
async function workinLitva(ctx) {
    console.log(`${ctx.from.username} workinLitva choosed`)
    await ctx.replyWithHTML(workInfo.basicInfoAboutWork, {protect_content:true, parse_mode: "HTML",
    disable_web_page_preview: true, ...Markup.inlineKeyboard(constans.MENU_ABOUT_WORK)})
}

//show menu about finance
async function allowanceFinanceFunc(ctx) {
    console.log(`${ctx.from.username} allowanceFinanceFunc choosed`)
    await ctx.replyWithHTML(allowanceFinanceVar.infoAboutBanks, { 
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content:true,
        ...Markup.inlineKeyboard(
        [
            [Markup.button.callback('Пільги', 'pilgi2_btn')],
            [Markup.button.callback('Пільги по містам', 'pilgi_btn')],
            [Markup.button.callback('Виплати', 'childrenMoney_btn')],
            [Markup.button.callback('Пенсія', 'pansion_btn')],
            [Markup.button.callback('Де обміняти гривні на евро', 'exchange_currency_btn')],
        ]
    )});
}

//freeStuff
async function freeStuffForUkraineFunc(ctx) {
    console.log(`${ctx.from.username} freeStuffForUkraineFunc choosed`)
    await ctx.replyWithHTML("Оберіть тему, яка вас цікавить", {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content:true,
        ...Markup.inlineKeyboard(constans.MENU_FREE_STUFF)
    })
}

module.exports.usefulContacts = usefulContacts;
module.exports.workinLitva = workinLitva;
module.exports.freeStuffForUkraineFunc = freeStuffForUkraineFunc;
module.exports.allowanceFinanceFunc = allowanceFinanceFunc;
module.exports.educationAndSportFunc = educationAndSportFunc;
module.exports.mainInfoAboutRefugee = mainInfoAboutRefugee;
module.exports.infoAboutMedicineFunc = infoAboutMedicineFunc;
module.exports.humanitarianAidFunc = humanitarianAidFunc;
module.exports.lookforanApartment = lookforanApartment;
module.exports.writeToOwnerOfTelegram = writeToOwnerOfTelegram;
module.exports.showPostWithSites = showPostWithSites;
module.exports.aboutLithuaniaFunc = aboutLithuaniaFunc;