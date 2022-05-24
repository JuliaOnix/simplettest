const {Markup} = require("telegraf");
const constans = require('../functions/fileCostants')
const aboutDocuments = require('../text/newText/mainPage')
const contacts = require('../text/contacts')

async function showRecoverDecuments(ctx) {
    console.log(`${ctx.from.username} recoverDocuments_BTN`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(aboutDocuments.recoverDocuments, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
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
        ...Markup.inlineKeyboard([constans.RETURN_BACK_LOOK_FOR_APART])
    });
}

async function returnBackFrom(ctx) {
    console.log(`${ctx.from.username} returnBackFirst_btn choosed`)
    await ctx.answerCbQuery();
    return await ctx.editMessageText(aboutDocuments.registartion, {
        parse_mode: "HTML",
        disable_web_page_preview: true, 
        ...Markup.inlineKeyboard(constans.MENU_REGISTRATION)
    });
}

module.exports.showRecoverDecuments = showRecoverDecuments;
module.exports.contactsAndAdresses = contactsAndAdresses;
module.exports.showAdresses = showAdresses;
module.exports.showAdressesInApartMenu = showAdressesInApartMenu;
module.exports.returnBackFrom = returnBackFrom;