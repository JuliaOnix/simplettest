const {Markup } = require("telegraf");
const constans = require('./fileCostants')
const freeMedInfo = require('../text/freeMedServices')
const medInfo = require('../text/medicineInfo')

async function showDentalPage(ctx) {
    console.log(`${ctx.from.username} dental_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.dentist, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
}

async function showPregnantWomenPage(ctx)  {
    console.log(`${ctx.from.username} pregnantWomen_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.forWomenAndPregnant, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
}

async function showMentalPage(ctx) {
    console.log(`${ctx.from.username} mentalHealth_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.mentalHelth, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
}

async function showDiabetPage(ctx) {
    console.log(`${ctx.from.username} diabet_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.diabetPost, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
}

async function showAnotherMenu(ctx) {
    console.log(`${ctx.from.username} anotherMed_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.anotherMedInfo, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
}

async function showCovidPage(ctx) {
    console.log(`${ctx.from.username} covid_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.corona, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
}

async function returnBack(ctx) {
    console.log(`${ctx.from.username} returnBack_btn choosed`)
    /* return infoAboutMedicineFunc(ctx); */
    await ctx.answerCbQuery();
    return await ctx.editMessageText(medInfo.aboutMedicine, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_HEALTH)
    })
}

module.exports.showDentalPage = showDentalPage;
module.exports.showCovidPage = showCovidPage;
module.exports.showMentalPage = showMentalPage;
module.exports.showDiabetPage = showDiabetPage;
module.exports.showAnotherMenu = showAnotherMenu;
module.exports.showPregnantWomenPage = showPregnantWomenPage;
module.exports.returnBack = returnBack;