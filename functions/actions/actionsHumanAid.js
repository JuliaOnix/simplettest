const humanAidInfo = require('../../text/humanitarianAidText')
const constans = require('../fileCostants')
const {Markup} = require("telegraf");

async function vilniusPage(ctx) {
    console.log(`${ctx.from.username} vilnius_humanAid_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(humanAidInfo.vilniusHelp, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
}

async function kaunasPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + 'kaunas_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.kaunasText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
}

async function klaypedaPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + 'klaipeda_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.klaipedaText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
}

async function alitusPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + 'alitus_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.alitusText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
}

async function shaulyayPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + 'shaulyay_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.shaulyayText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
}

async function panevezhysPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + 'panevezis_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.panesvezhisText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
}

async function returnBack(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + 'return_to_human_aid_menu_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.humanAid, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard(constans.MENU_WITH_CITIES_OF_HUMAN_AID)
    })
}

module.exports.vilniusPage = vilniusPage;
module.exports.kaunasPage = kaunasPage;
module.exports.klaypedaPage = klaypedaPage;
module.exports.alitusPage = alitusPage;
module.exports.shaulyayPage = shaulyayPage;
module.exports.panevezhysPage = panevezhysPage;
module.exports.returnBack = returnBack;