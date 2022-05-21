

/* const MENU_DATA = [
    {
        name: '🛬 По Прибутті',
        fancLink: mainInfoAboutRefugee(ctx),
    },
    {
        name: '📞 Корисні контакти',
        funcLink: mainMenuFunctionsFile.usefulContacts(ctx)
    },
    {
        name: '🔎 Пошук житла',
        funcLink: mainMenuFunctionsFile.lookforanApartment(ctx)
    },
    {
        name:"🩺 Здоров'я",
        funcLink: mainMenuFunctionsFile.humanitarianAidFunc(ctx)
    },
    {
        name: '💵 Фінанси, Пільги',
        funcLink: mainMenuFunctionsFile.infoAboutMedicineFunc(ctx)
    }
]

//main info for people, who came right now and look for info what they have to do.
async function mainInfoAboutRefugee(ctx) {
    console.log(`${ctx.from.username} main info about refugee`)
    await ctx.replyWithHTML(mytext.firstVisit, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            Markup.button.callback("Контакти", 'btn_usefulContacts'),
            Markup.button.callback("Адреси реєстраційних центрів", 'btn_addresses')
        ])
    });
}


module.exports.MENU_DATA = MENU_DATA; */