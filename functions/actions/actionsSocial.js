const {Markup} = require("telegraf");
const constans = require('../../functions/fileCostants')
const sitesInfo = require('../../text/sitesWithServices')
const sitesKatalog = require('../../text/oftenAks')

async function showAutoSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "AutoSites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.cars, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showAnotherSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " tech sites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.different_shops, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showChildrenSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " Children Sites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.children, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showZooSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " Zoo sites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.zoo, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showAfishaSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " Afisha sites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.afisha, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showWorkSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " work sites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.work, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showHouseSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " showHouseSites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.houses, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}



async function showDifferentShopsSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " Different sites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.different_shops, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showMedSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " Med Sites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.medPost, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showMunSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " Mun sites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.munInfo, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showUkranianSymbSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " Symb Ukraine_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.ukranianSymb, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showServicesSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " Services sites _btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.services, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showProductSites(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " Products Sites_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.products, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showTelegramChannels(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "telegramChannels_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.telegramChannelsList, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showFacebook(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " facebookGroups_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.facebookGroupsText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showInstagram(ctx)  {
    console.log(ctx.from.first_name, ctx.from.username + " instagramGroups_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.instagramPages, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function showDovidnuku(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " dovidnuku_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesKatalog.qAndA, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
}

async function returnBack(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + " return_to_sites_block_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.mainText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard(constans.MENU_BUTTONS_SITES)
    })
}

module.exports.showAutoSites = showAutoSites;
module.exports.showAfishaSites = showAfishaSites;
module.exports.showServicesSites = showServicesSites;
module.exports.showChildrenSites = showChildrenSites;
module.exports.showProductSites = showProductSites;
module.exports.showUkshowUkranianSymbSites = showUkranianSymbSites;
module.exports.showMunSites  = showMunSites;
module.exports.showMedSites  = showMedSites;
module.exports.showWorkSites  = showWorkSites;
module.exports.showDifferentShopsSites  = showDifferentShopsSites;
module.exports.showTelegramChannels = showTelegramChannels;
module.exports.showFacebook = showFacebook;
module.exports.showInstagram = showInstagram;
module.exports.showDovidnuku = showDovidnuku;
module.exports.showHouseSites = showHouseSites;
module.exports.showZooSites = showZooSites;
module.exports.showAnotherSites = showAnotherSites;
module.exports.returnBack = returnBack;
