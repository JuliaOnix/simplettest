const {Markup} = require("telegraf");
const constans = require('../fileCostants')
const allowanceFinanceVar = require('../../text/allowanceFinanceFile')
const benefits = require('../../text/newText/benefits')
const pension = require('../../text/newText/aboutPension')

//FIXME add buttons anothers cities
async function showPilgiPage(ctx) {
    console.log(`${ctx.from.username} pilgi_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(benefits.vilnius,
    {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback("Каунас", 'showKaunasBenefits_BTN'), Markup.button.callback("Клайпеда", 'showKlaypedaBenefits_BTN')],
            [Markup.button.callback(constans.RETURN_BACK_TO_FINANCE, 'backToFinance_btn')]
        ])
    });
}

async function showPilgi2Page(ctx) {
    console.log(`${ctx.from.username} pilgi_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(pension.text,
    {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FINANCE, 'backToFinance_btn')]
        ])
    });
}

async function showPanshionPage(ctx) {
    console.log(`${ctx.from.username} pansion_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(pension.pension,
    {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FINANCE, 'backToFinance_btn')]
        ])
    });
}

async function showExchangeCurrencePage(ctx) {
    console.log(`${ctx.from.username} currency_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(allowanceFinanceVar.exchange_money,
    {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FINANCE, 'backToFinance_btn')]
        ])
    });
}

async function returnBack(ctx) {
    console.log(`${ctx.from.username} backToFinance_btn choosed`)
    await ctx.answerCbQuery();
    return await ctx.editMessageText(allowanceFinanceVar.infoAboutBanks, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback('Пільги', 'pilgi_btn')],
            [Markup.button.callback('Також про пільги', 'pilgi2_btn')],
            [Markup.button.callback('Де обміняти гривні на евро', 'exchange_currency_btn')],
        ])
    })
}

module.exports.showPilgiPage = showPilgiPage;
module.exports.showPilgi2Page = showPilgi2Page;
module.exports.showPanshionPage = showPanshionPage;
module.exports.showExchangeCurrencePage = showExchangeCurrencePage;
module.exports.returnBack = returnBack;