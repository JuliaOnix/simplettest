const { Telegraf, Markup } = require("telegraf");
const contacts = require('../text/contacts')
const apartmentsinfo = require('../text/apartmentsinfo')
const constans = require('../functions/fileCostants')
const medInfo = require('../text/medicineInfo')
const humanInfo = require('../text/humanitarianAidText')
const sitesPost = require('../text/sitesWithServices')
const aboutLithuania = require('../text/aboutLithuania')


const messageFromDeveloper = `Якщо у вас виникла проблема з використанням бота/є ідея щодо покращення бота/додати інформацію до бота, напишіть ➡️ <a href='https://t.me/IndependentRiver'>моя сторінка</a>. 

<b>Рекомендація</b>: Частіше перезапускайте бота за допомогою /start для оновлення контенту :)`

const SOURSES = `<b>Джерела інформації:</b>
<a href="https://akrolesta.art/ua/spravochnik.html">https://akrolesta.art/ua</a>

https://ukraina.vilnius.lt

https://helpua.lt/

https://www.renkuosilietuva.lt/ru/informacia-dla-grazdan-ukrainy/
`

async function showPostWithSites(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(sitesPost.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        ...Markup.inlineKeyboard(constans.MENU_BUTTONS_SITES)
    });
}

//show info about med insurance
async function infoAboutMedicineFunc(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(medInfo.aboutMedicine, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_HEALTH).oneTime(true)
    });
}

async function writeToOwnerOfTelegram(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithSticker('CAACAgIAAxkBAAIH2mKHkobggkZ52R3V5MqPuA87854qAAJvAAPb234AAZlbUKh7k4B0JAQ');
    await ctx.replyWithHTML(messageFromDeveloper, {
        parse_mode: "HTML", 
        disable_web_page_preview: true
    });
    await ctx.replyWithHTML(SOURSES)
}

//show info about humanitarianAid
async function humanitarianAidFunc(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(humanInfo.humanAid, Markup.inlineKeyboard(constans.MENU_WITH_CITIES_OF_HUMAN_AID));
}

//useful contacts 
async function usefulContacts(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    let string = contacts.address + contacts.usefulContacts + contacts.medContacts;
    return ctx.replyWithHTML(string, {
        parse_mode: "HTML", 
        disable_web_page_preview: true
    });
}

//info how look for apartments
async function lookforanApartment(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(apartmentsinfo.sites); 
}

//About Lithuania
async function aboutLithuaniaFunc(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(aboutLithuania.post, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback("Сайти, де можна вивчати литовську", "language_btn")]
        ])
    })
}

module.exports.usefulContacts = usefulContacts;
module.exports.infoAboutMedicineFunc = infoAboutMedicineFunc;
module.exports.humanitarianAidFunc = humanitarianAidFunc;
module.exports.lookforanApartment = lookforanApartment;
module.exports.writeToOwnerOfTelegram = writeToOwnerOfTelegram;
module.exports.showPostWithSites = showPostWithSites;
module.exports.aboutLithuaniaFunc = aboutLithuaniaFunc;