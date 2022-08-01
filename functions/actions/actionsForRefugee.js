const {Markup} = require("telegraf");
const constans = require('../fileCostants')
const aboutDocuments = require('../../text/newText/mainPage')
const contacts = require('../../text/contacts')

async function showRecoverDecuments(ctx) {
    console.log(`${ctx.from.username} recoverDocuments_BTN`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(aboutDocuments.recoverDocuments, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
}

async function showEuropePass(ctx) {
    console.log(`${ctx.from.username} europe pass _BTN`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(aboutDocuments.aboutPassportForTravel, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback("Чи можу я подорожувати по ЕС?", 'go_abroud_with')],
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
}

async function showLisencePass(ctx) {
    console.log(`${ctx.from.username} lisence pass _BTN`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(aboutDocuments.aboutLisenceText, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback("Документи для виїзду закордон на машині", 'documents_for_car_btn')],
            [Markup.button.callback("Заміна водійських прав", 'exchangeLisence_btn')],
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
}

async function showDocsAbroudCar(ctx) {
    console.log(`${ctx.from.username} abroud doc cars pass _BTN`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(aboutDocuments.abroudDocCars, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
}

async function showExchangeLisence(ctx) {
    console.log(`${ctx.from.username} exchange _BTN`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(aboutDocuments.howToChangeLisence, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
}

async function showGo_Abroud(ctx) {
    console.log(`${ctx.from.username} EU 90 days  _BTN`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(aboutDocuments.aboutEUTravel, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
}

async function contactsAndAdresses(ctx) {
    console.log(`${ctx.from.username} btn_useful Contacts`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(contacts.usefulContacts, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
}

async function showAdresses(ctx) {
    console.log(`${ctx.from.username} btn_addresses choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(contacts.address, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
}

async function showAdressesInApartMenu(ctx) {
    console.log(`${ctx.from.username} btn_addresses in apart choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(contacts.address, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_LOOK_FOR_APART])
    });
}

async function returnBackFrom(ctx) {
    console.log(`${ctx.from.username} returnBackFirst_btn choosed`)
    await ctx.answerCbQuery();
    return await ctx.editMessageText(aboutDocuments.registartion, {
        parse_mode: "HTML",
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard(constans.MENU_REGISTRATION)
    });
}

async function showAdressasInContacts(ctx) {
    console.log(`${ctx.from.username} returnBackFirst_btn choosed`)
    await ctx.answerCbQuery();
    return await ctx.editMessageText(contacts.address, {
        parse_mode: "HTML",
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_CONTACTS_MENU])
    });
}

async function returnContactsMenu(ctx) {
    console.log(`${ctx.from.username} returnBackFirst_btn choosed`)
    let string = contacts.usefulContacts + contacts.medContacts;
    await ctx.answerCbQuery();
    return ctx.editMessageText(string, {
        parse_mode: "HTML",
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard([Markup.button.callback("Адреси реєстраційних центрів", 'btn_addresses_from_CONTACTS')])
    });
}

module.exports.showRecoverDecuments = showRecoverDecuments;
module.exports.contactsAndAdresses = contactsAndAdresses;
module.exports.showAdresses = showAdresses;
module.exports.showAdressesInApartMenu = showAdressesInApartMenu;
module.exports.returnBackFrom = returnBackFrom;
module.exports.returnContactsMenu = returnContactsMenu;
module.exports.showAdressasInContacts = showAdressasInContacts;
module.exports.showLisencePass = showLisencePass;
module.exports.showEuropePass = showEuropePass;
module.exports.showDocsAbroudCar = showDocsAbroudCar;
module.exports.showGo_Abroud = showGo_Abroud;
module.exports.showExchangeLisence = showExchangeLisence;