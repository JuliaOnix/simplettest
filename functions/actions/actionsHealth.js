const {Markup} = require("telegraf");
const constans = require('../fileCostants')
const freeMedInfo = require('../../text/freeMedServices')
const medInfo = require('../../text/medicineInfo')

/**

// здесь хранить все действия по кнопкам
// ключ-значение (действие-текст на кнопке)
const BUTTONS = {
    'returnBack_btn': constants.RETURN_BACK_TO_MENU
}

// функция которая вернет
// Markup.inlineKeyboard([[Markup.button.callback(BUTTONS[${action}], ${action})]])
function inlineButtons(...actions) {
    return Markup.inlineKeyboard([
        // map выполнит действие для каждого элемента
        actions.map(
            action => Markup.button.callback(BUTTONS[action], action)
        )
    ])
}

// одно место для лога по контексту и названию команды
function logAction(ctx, name) {
    console.log(`${ctx.from.username} ${name} choosed`)
}

//функция handleAction может быть одной общей функцией для всех действий обработчиков бота
function handleAction(name) {
    return async function (ctx) {
        logAction(ctx, name); //для логирования нужен контекст и название метода

        await ctx.answerCbQuery();
        ctx.editMessageText(freeMedInfo[name], {    //freeMedInfo[name] аналогично freeMedInfo.dentist, только берет значение из переменной
            parse_mode: 'HTML',
            disable_web_page_preview: true,
            ...inlineButtons('returnBack_btn')    // меньше кода, чем раньше для задания кнопок. Будет полезно когда кнопок будет несколько
        })
    }
}

// все 6 функций ниже можно свернуть в одну общую, для которой нужно название действия
showDentalPage = handleAction('dentist')
showPregnantWomenPage = handleAction('forWomenAndPregnant')
showMentalPage = handleAction('mentalHelth')
showDiabetPage = handleAction('diabetPost')
showAnotherMenu = handleAction('anotherMedInfo')
showCovidPage = handleAction('corona')

*/

async function showDentalPage(ctx) {
    console.log(`${ctx.from.username} dental_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.dentist, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
}

async function showPregnantWomenPage(ctx)  {
    console.log(`${ctx.from.username} pregnantWomen_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.forWomenAndPregnant, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        protect_content: true,
        ...Markup.inlineKeyboard([
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
        protect_content: true,
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
        protect_content: true,
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
        protect_content: true,
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
        protect_content: true,
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
        protect_content: true,
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
