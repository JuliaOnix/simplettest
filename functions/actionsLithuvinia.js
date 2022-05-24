const {Markup} = require("telegraf");
const constans = require('./fileCostants')
const language = require('../text/languageLitovskiy')
const aboutLithuania = require('../text/aboutLithuania')

async function showLanguagePage(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "language_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(language.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        ...Markup.inlineKeyboard([Markup.button.callback("Назад", "return_back_to_lithuania")])
    })
}

async function returnBack(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + "return back To Lithuania")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(aboutLithuania.post, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(
            [Markup.button.callback("Сайти, де можна вивчати литовську", "language_btn")]
    )})
}


module.exports.showLanguagePage = showLanguagePage;
module.exports.returnBack = returnBack;