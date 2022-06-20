const {Markup} = require("telegraf");
const constans = require('../../functions/fileCostants')
const workInfo = require('../../text/workInfoFile')

async function showRecomandationPage(ctx)  {
    console.log(`${ctx.from.username} recHelpLook_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.recommendationsForHowToWork, {
        parse_mode: "HTML",
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard(
            [
                [Markup.button.callback('Індивідуальна зайнятість', 'individualWorker_btn'), Markup.button.callback('Сайти для пошуку роботиашч', 'sitesofwork_btn')],
                [Markup.button.callback(constans.RETURN_BACK_TO_WORK, 'backToTheWorkMenu_btn')],
            ]
        )}
    )
}

async function showIndivPage(ctx)  {
    console.log(`${ctx.from.username} individualWorker_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.individualWorkerPost, {
        parse_mode: "HTML",
        disable_web_page_preview: true, 
        ...Markup.inlineKeyboard(
            [
                [Markup.button.callback(constans.RETURN_BACK_TO_WORK, 'backToTheWorkMenu_btn')],
            ]
        )
    })
}

async function showSitesPage(ctx) {
    console.log(`${ctx.from.username} sitesofwork_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.siteForLookForWork, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_WORK, 'backToTheWorkMenu_btn')]
        ])
    });
}

async function showVacationsPage(ctx) {
    console.log(`${ctx.from.username} vacations_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.vacationONGoogleDocs, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_WORK, 'backToTheWorkMenu_btn')]
        ])
    });
}

async function returnBack(ctx) {
    console.log(`${ctx.from.username} backToTheWorkMenu_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.basicInfoAboutWork, {
        parse_mode: "HTML",
        disable_web_page_preview: false,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_WORK)
    });
}

module.exports.showRecomandationPage = showRecomandationPage;
module.exports.showIndivPage = showIndivPage;
module.exports.showSitesPage = showSitesPage;
module.exports.showVacationsPage = showVacationsPage;
module.exports.returnBack = returnBack;