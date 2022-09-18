

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

