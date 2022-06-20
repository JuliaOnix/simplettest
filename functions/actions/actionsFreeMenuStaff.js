const {Markup} = require("telegraf");
const constans = require('../fileCostants')
const freeEvents  = require('../../text/newText/freeEvents')

async function showSport(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + 'freeSport_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[0], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showTransport(ctx)  {
    console.log(ctx.from.first_name, ctx.from.username + 'freeTransport_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[1], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showForMother(ctx)  {
    console.log(ctx.from.first_name, ctx.from.username + 'freeForMothers_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[2], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showFreeConsul(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeConsulHelp_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[3], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showArt(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeshowArtEvents_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(freeEvents.general, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback("Вільнюс", "show_vilnius_events_BTN"), Markup.button.callback("Каунас", "show_kaunas_events_BTN")],
            [constans.RETURN_BACK_TO_FREE_STUFF]
        ])
    })
}

async function showVilniusPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeshowArtEvents_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(freeEvents.vilnius, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [constans.RETURN_BACK_TO_FREE_STUFF]
        ])
    })
}

async function showKaunasPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeshowArtEvents_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(freeEvents.kaunas, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [constans.RETURN_BACK_TO_FREE_STUFF]
        ])
    })
}

async function showTranslate(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeTranslate_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[6], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showPrintPage (ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freePrint_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[7], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showInternet(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeInternet_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[8], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showLegalPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeLegal_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[9], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showPetStuff(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freePetStuff_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[10], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function freeBeautyStuff(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeBeautyStuff_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[11], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showOpticaStuff(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeOptica_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[12], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showSofa(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeSofa_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[14], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
}

async function showCourses(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeCourses_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[13], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [constans.RETURN_BACK_TO_FREE_STUFF],
        ])
    })
}

async function returnBack(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + 'return_to_free_stuff_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText("Оберіть тему, яка вас цікавить", {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard(constans.MENU_FREE_STUFF)
    })
}

module.exports.showSport = showSport;
module.exports.showTransport = showTransport;
module.exports.showForMother = showForMother;
module.exports.showFreeConsul = showFreeConsul;
module.exports.showArt = showArt;
module.exports.showTranslate = showTranslate;
module.exports.showPrintPage = showPrintPage;
module.exports.showInternet = showInternet;
module.exports.showLegalPage = showLegalPage;
module.exports.showPetStuff = showPetStuff;
module.exports.freeBeautyStuff = freeBeautyStuff;
module.exports.showOpticaStuff = showOpticaStuff;
module.exports.showSofa = showSofa;
module.exports.showCourses = showCourses;
module.exports.returnBack = returnBack;
module.exports.showKaunasPage = showKaunasPage;
module.exports.showVilniusPage = showVilniusPage;
