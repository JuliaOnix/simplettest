const {Markup, Telegraf} = require("telegraf");
const constans = require('../fileCostants')
const language = require('../../text/languageLitovskiy')
const aboutLithuania = require('../../text/aboutLithuania')
const trashText = require('../../text/newText/recycleTrash')

async function showLanguagePage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "language_btn")
    //let text = ctx.telegram.copyMessage(ctx.chat.id, "@englishFreeTeacherYes", 30)
    await ctx.answerCbQuery();
    return await ctx.editMessageText(language.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard([Markup.button.callback("Назад", "return_back_to_lithuania")])
    })
}

async function showFunsPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "language_btn")
    //let text = ctx.telegram.copyMessage(ctx.chat.id, "@englishFreeTeacherYes", 30)
    await ctx.answerCbQuery();
    return await ctx.editMessageText(language.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard([Markup.button.callback("Назад", "return_back_to_lithuania")])
    })
}

async function showAppsPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "apps_btn")
    //let text = ctx.telegram.copyMessage(ctx.chat.id, "@englishFreeTeacherYes", 30)
    await ctx.answerCbQuery();
    return await ctx.editMessageText(aboutLithuania.apps, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard([Markup.button.callback("Назад", "return_back_to_lithuania")])
    })
}

async function returnBack(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "return back To Lithuania")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(aboutLithuania.post, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.sitesForLearning, "language_btn")],
            [Markup.button.callback(constans.appsInLit, "show_apps_BTN")],
            [Markup.button.callback(constans.recTrash, "show_how_to_recTrash_BTN")],
            [Markup.button.callback(constans.reccForEveryCities, "show_funs_BTN")]
        ]
    )})
}

async function showRecycleTrashPage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "about trash _btn")
    //let text = ctx.telegram.copyMessage(ctx.chat.id, "@englishFreeTeacherYes", 30)
    await ctx.answerCbQuery();
    return await ctx.editMessageText(trashText.text, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard([Markup.button.callback("Назад", "return_back_to_lithuania")])
    })
}


module.exports.showLanguagePage = showLanguagePage;
module.exports.showFunsPage = showFunsPage;
module.exports.showAppsPage = showAppsPage;
module.exports.showRecycleTrashPage = showRecycleTrashPage;
module.exports.returnBack = returnBack;