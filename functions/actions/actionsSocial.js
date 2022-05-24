const {Markup} = require("telegraf");
const constans = require('../../functions/fileCostants')
const sitesInfo = require('../../text/sitesWithServices')
const sitesKatalog = require('../../text/oftenAks')

async function showTelegramChannels(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "telegramChannels_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.telegramChannelsList, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showFacebook(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " facebookGroups_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.facebookGroupsText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showInstagram(ctx)  {
    console.log(ctx.from.first_name, ctx.from.username + "instagramGroups_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.instagramPages, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showDovidnuku(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "dovidnuku_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesKatalog.qAndA, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function returnBack(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "return_to_sites_block_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_BUTTONS_SITES)
    })
}

module.exports.showTelegramChannels = showTelegramChannels;
module.exports.showFacebook = showFacebook;
module.exports.showInstagram = showInstagram;
module.exports.showDovidnuku = showDovidnuku;
module.exports.returnBack = returnBack;
