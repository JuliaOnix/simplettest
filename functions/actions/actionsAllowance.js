const {Markup} = require("telegraf");
const constans = require('../fileCostants')
const allowanceFinanceVar = require('../../text/allowanceFinanceFile')
const benefits = require('../../text/newText/benefits')

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
            [Markup.button.callback('Пільги, на які ви маєте право', 'pilgi_btn')],
            [Markup.button.callback('Де обміняти гривні на евро', 'exchange_currency_btn')],
        ])
    })
}




module.exports.showPilgiPage = showPilgiPage;
module.exports.showExchangeCurrencePage = showExchangeCurrencePage;
module.exports.returnBack = returnBack;