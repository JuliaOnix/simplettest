const {Markup} = require("telegraf");
const constans = require('../fileCostants')
const apartmentsinfo = require('../../text/newText/whereLive')


async function showLookFor(ctx) {
    console.log(`${ctx.from.username} lookforapartmants_BTN choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(apartmentsinfo.sites, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_LOOK_FOR_APART])
    });
}

async function returnBack(ctx) {
    console.log(`${ctx.from.username} return_back_to_look_for_apart choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(apartmentsinfo.aboutApartmentsMainPage, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_APARTMENTS)
    });
}

module.exports.showLookFor = showLookFor;
module.exports.returnBack = returnBack;