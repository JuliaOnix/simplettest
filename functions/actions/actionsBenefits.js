const {Markup} = require("telegraf");
const constans = require('../fileCostants');
const benefits = require('../../text/newText/benefits')

async function showKaunasPage(ctx) {
    console.log(`${ctx.from.username} showKaunas choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(benefits.kaunas,
    {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FINANCE, 'backToFinance_btn')]
        ])
    });
}

async function showKlaypedaPage(ctx) {
    await ctx.answerCbQuery();
    await ctx.editMessageText(benefits.klaypeda,
    {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FINANCE, 'backToFinance_btn')]
        ])
    });
}

async function showMoreBenefitsPage(ctx) {
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

module.exports.showKaunasPage = showKaunasPage;
module.exports.showKlaypedaPage = showKlaypedaPage;
module.exports.showMoreBenefitsPage = showMoreBenefitsPage;