const { Telegraf, Markup } = require("telegraf");

const aboutLithuania = require('..//../text/aboutLithuania')
const aboutDocuments = require('..//../text/newText/mainPage')
const sites = require('..//../text/sitesWithServices')

const ADDITIONAL_INFO = `C 20 червня працює <b>24/7</b> «гаряча лінія» для надання інформації про соціальний та медичний захист, центри реєстрації, повернення додому та інші важливі питання. \n
📞 <b>1808</b> — оператори консультуватимуть біженців українською, англійською та російською мовами. \n
Якщо Ви бажаєте додати інформацію до бота, або у вас є питання, пишіть на цю сторінку <b>@ua_lt_inbox_bot</b>`

const GREETING = `Оберіть тему, яка вас цікавить.\n\n ${ADDITIONAL_INFO}`;

const BACK_TO_THE_MAIN_MENU = Markup.button.callback('Головне меню', 'back_to_the_main_menu')

const main_kaybord = [
    [Markup.button.callback('Головна інформація' ,'main_info')],
    [Markup.button.callback('Пошук роботи' , 'work'), Markup.button.callback('Пошук житла' ,'about_flats')],
    [Markup.button.callback('Про Литву' ,'lithuania'), Markup.button.callback('Соц. мережі' ,'social_media')],
];

//menu for work block
const MENU_ABOUT_WORK = [
    [BACK_TO_THE_MAIN_MENU],
]  

const MENU_REGISTRATION = [
   /*  [Markup.button.callback("Якщо немає документів", "recoverDocuments_BTN")],
    [Markup.button.callback("Про загранпаспорт", "show_Eorope_Post_BTN")],
    [Markup.button.callback("Про посвідчення водія", "show_about_lisence_BTN")], */
    [BACK_TO_THE_MAIN_MENU],
];

const MENU_ABOUT_APARTMENTS = [
    /* [Markup.button.callback("Сайти для пошук житла", 'lookforapartmants_BTN')], */
    [BACK_TO_THE_MAIN_MENU],
]

//menu for health block 
const MENU_HEALTH = [
    [BACK_TO_THE_MAIN_MENU],
];

const MENU_WITH_CITIES_OF_HUMAN_AID = [
    [Markup.button.callback("Вільнюс", 'vilnius_humanAid_btn')],
    [Markup.button.url("Повний список міст", 'https://www.redcross.lt/kontakti-z-organizaciyami-yaki-nadayut-gumanitarnu-dopomogu-ukrayincyam-ua')],
    [BACK_TO_THE_MAIN_MENU],
]

const MENU_BUTTONS_SITES = [
    [Markup.button.callback('🏥 Медицина', 'med_sites_btn'), Markup.button.callback('🥬 Їжа та продукти', 'products_sites_btn')],
    [Markup.button.callback('👶 Діти', 'children_sites_btn'), Markup.button.callback('👨🏼‍💻 Послуги', 'services_sites_btn')],
    [Markup.button.callback('🚘 Авто/Транспорт', 'cars_sites_btn'), Markup.button.callback('🦜 ЗООтовари та послуги', 'zoo_sites_btn')],
    [Markup.button.callback('🛒 Інше', 'another_sites_btn'), Markup.button.callback('📰 Афіша та новини', 'afisha_sites_btn')],
    [Markup.button.callback('🇺🇦 Україна', 'ukraine_sites_btn'), Markup.button.callback('Державні та муніципальні послуги', 'mun_sites_btn')],
    [Markup.button.callback('Сайти довідники', 'dovidnuku_btn'), Markup.button.callback('Facebook групи', 'facebookGroups_btn')],
    [Markup.button.callback('Instagram канали', 'instagramGroups_btn'), Markup.button.callback('Телеграм канали', 'telegramChannels_btn')],
    [BACK_TO_THE_MAIN_MENU],
]

//about funs in Lithuania
const sitesForLearning = "Литовська мова";
const appsInLit = "Корисні додатки"
const reccForEveryCities = "Кафе, Ресторани, Розваги";
const recTrash = 'Переробка сміття'

const ABOUT_LITHUANIA = [
    [Markup.button.callback(sitesForLearning, "language_btn")],
    [Markup.button.callback(appsInLit, "show_apps_BTN")],
    /* [Markup.button.callback(recTrash, "show_how_to_recTrash_BTN")], */
    [Markup.button.callback(reccForEveryCities, "show_funs_BTN")],
    [BACK_TO_THE_MAIN_MENU],
]

// ANCHOR First button
async function mainInfoAboutRefugee(ctx) {
    //console.log(`${ctx.from.username} main info about refugee`)
    await ctx.editMessageText(aboutDocuments.registartion, {
        protect_content: true,
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(MENU_REGISTRATION)
    });
}

async function showPostWithSites(ctx) {
    //console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.editMessageText("Каталог сайтів", {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        protect_content:true,
        ...Markup.inlineKeyboard(MENU_BUTTONS_SITES)
    });
}

//show info about humanitarianAid
async function humanitarianAidFunc(ctx) {
    //console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.editMessageText(humanInfo.humanAid, {protect_content:true , parse_mode: 'HTML',
    disable_web_page_preview: true,  ...Markup.inlineKeyboard(MENU_WITH_CITIES_OF_HUMAN_AID)});
}

//useful contacts 
async function usefulContacts(ctx) { 
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    let string = contacts.usefulContacts + contacts.medContacts;
    return ctx.editMessageText(string, {
        parse_mode: "HTML", 
        disable_web_page_preview: true, 
        protect_content:true,
         ...Markup.inlineKeyboard()
    });
}

//info how look for apartments
async function lookforanApartment(ctx) { 
    //console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.editMessageText(sites.houses, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content:true,
        ...Markup.inlineKeyboard(MENU_ABOUT_APARTMENTS)
    }); 
}

//About Lithuania
async function aboutLithuaniaFunc(ctx) {
    //console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.editMessageText(aboutLithuania.post, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content:true,
        ...Markup.inlineKeyboard(ABOUT_LITHUANIA)
    })
}

//show work posts
async function workinLitva(ctx) {
    //console.log(`${ctx.from.username} workinLitva choosed`)
    await ctx.editMessageText(sites.work, {protect_content:true, parse_mode: "HTML",
    disable_web_page_preview: true, ...Markup.inlineKeyboard(MENU_ABOUT_WORK)})
}

async function returnBackToMainMenuFunc(ctx) {
    //console.log(`${ctx.from.username} main info about refugee`)
    await ctx.editMessageText(GREETING, {
        protect_content: true,
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(main_kaybord)
    });
}

module.exports.GREETING = GREETING;
module.exports.MENU_HEALTH = MENU_HEALTH;
module.exports.MENU_BUTTONS_SITES = MENU_BUTTONS_SITES;
module.exports.ABOUT_LITHUANIA = ABOUT_LITHUANIA;
module.exports.main_kaybord = main_kaybord;
module.exports.workinLitva = workinLitva;
module.exports.mainInfoAboutRefugee = mainInfoAboutRefugee;
module.exports.humanitarianAidFunc = humanitarianAidFunc;
module.exports.lookforanApartment = lookforanApartment;
module.exports.showPostWithSites = showPostWithSites;
module.exports.aboutLithuaniaFunc = aboutLithuaniaFunc;
module.exports.returnBackToMainMenuFunc = returnBackToMainMenuFunc;