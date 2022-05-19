const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
const mytext = require('./text/text')
const contacts = require('./text/contacts')
const medInfo = require('./text/medicineInfo')
const freeMedInfo = require('./text/freeMedServices')
const humanAidInfo = require('./text/humanitarianAidText')
const allowanceFinanceVar = require('./text/allowanceFinanceFile')
const workInfo = require('./text/workInfoFile')
const educationShcools = require('./text/educationAndSportInfo')
const mainMenuFunctionsFile = require('./functions/functionsMainMenu')
const constans = require('./functions/fileCostants')
const sitesInfo = require('./text/sitesWithServices')


const token = process.env.BOT_TOKEN

//menu in chatbot
const mainMenu = 
[
    '🛬 По Прибутті', '📞 Корисні контакти', '🔎 Пошук житла', 
    '📦 Гуманітарна Допомога',"🩺 Здоров'я", '💵 Фінанси, Пільги', '🏭 Робота', 
    '🏫 Навчання', '🆓 Безкоштовні Послуги', "🇱🇹 Литовська мова", "❓ Часті запитання", 
    '📡 Каталог сайтів', 'Написати розробнику'
];

//menu with free thing/stuff/services
const freeStuffMenu = 
[
    allowanceFinanceVar.freeTransport, allowanceFinanceVar.freeWorkConsultation, allowanceFinanceVar.freeTranslator,
    allowanceFinanceVar.freePrintout, allowanceFinanceVar.freeСommunication, allowanceFinanceVar.freeLegalAid, allowanceFinanceVar.freePatsStuff, 
    allowanceFinanceVar.freeBeautyStauff, allowanceFinanceVar.freeMedOptica, allowanceFinanceVar.freeLessonsAndCourses, allowanceFinanceVar.freeForChildrenAndMothers,
    allowanceFinanceVar.freeKonsulska, allowanceFinanceVar.freeArtEvents, allowanceFinanceVar.freeSport
];

const bot = new Telegraf(token);
let currentPostFree;

if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

//here is started bot
bot.command('start', async (ctx) => {
    return startBot(ctx);
});
//listening to, HEARS
bot.hears(mainMenu[0], (ctx) => mainInfoAboutRefugee(ctx));
bot.hears(mainMenu[1], (ctx) => mainMenuFunctionsFile.usefulContacts(ctx));
bot.hears(mainMenu[2], (ctx) => mainMenuFunctionsFile.lookforanApartment(ctx));
bot.hears(mainMenu[3], (ctx) => mainMenuFunctionsFile.humanitarianAidFunc(ctx));
bot.hears(mainMenu[4], (ctx) => mainMenuFunctionsFile.infoAboutMedicineFunc(ctx));
bot.hears(mainMenu[5], (ctx) => allowanceFinanceFunc(ctx));
bot.hears(mainMenu[6], (ctx) => workinLitva(ctx));
bot.hears(mainMenu[7], (ctx) => educationAndSportFunc(ctx));
bot.hears(mainMenu[8], (ctx) => freeStuffForUkraineFunc(ctx, currentPostFree));
bot.hears(mainMenu[9], (ctx) => mainMenuFunctionsFile.language(ctx));
bot.hears(mainMenu[10], (ctx) => mainMenuFunctionsFile.questionOften(ctx));
bot.hears(mainMenu[11], (ctx) => mainMenuFunctionsFile.showPostWithSites(ctx));
bot.hears(mainMenu[12], (ctx) => mainMenuFunctionsFile.writeToOwnerOfTelegram(ctx));

//Functions


//at the begining
function startBot(ctx) {
    ctx.reply('Вибери тему, яка тебе цікавить', Markup
    .keyboard([
        [mainMenu[0]],
        [mainMenu[1], mainMenu[2], mainMenu[6]], // Row1 with 2 buttons
        [mainMenu[4], mainMenu[3], mainMenu[5]], // Row2 with 2 buttons
        [mainMenu[8], mainMenu[7], mainMenu[9]], // Row3 with 3 buttons
        [mainMenu[11], mainMenu[10], mainMenu[12]]
    ]
    ));
}

/* //Actions
bot.action('btn_anotherCities', async (ctx) => {
    await ctx.answerCbQuery();
    ctx.reply('https://www.redcross.lt/kontakti-z-organizaciyami-yaki-nadayut-gumanitarnu-dopomogu-ukrayincyam-ua')
}); */

//ANCHOR Education

//show block about education and sport for children also
async function educationAndSportFunc(ctx) {
    await ctx.replyWithHTML(educationShcools.generalInfoAboutSchool, Markup.inlineKeyboard(constans.MENU_EDUCATION));
}

bot.action('preschool_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.preschool, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_EDUCATION, 'returnBackEducation_btn')]
        ])
    })
});

bot.action('artschools_btn', async (ctx) => {
    await ctx.answerCbQuery();
    //ctx.replyWithSticker
    await ctx.editMessageText(educationShcools.artSchoolsContacts, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_EDUCATION, 'returnBackEducation_btn')]
        ])
    })
});

bot.action('profEduc_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.profEducation, 
    {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_EDUCATION, 'returnBackEducation_btn')]
        ])
    })
});

bot.action('univer_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.universities, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_EDUCATION, 'returnBackEducation_btn')]
        ])
    })
});

bot.action('sportEduc_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.sportPlaces, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_EDUCATION, 'returnBackEducation_btn')]
        ])
    })
});

bot.action('lessonsforChildren_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText('ГУРТКИ, ЛЕКЦІЇ, УРОКИ', {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_EXTRACURRICULARS)
    }); 
});

//show post about extracurriculars 
//Art and teatr block
bot.action('artANDTeatr_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.artfree, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_btn')]
        ])
    })
})

//sport 
bot.action('sportLessons_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.sportfree, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_btn')]
        ])
    })
})

//lection
bot.action('lections_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.groupsLections, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_btn')]
        ])
    })
})

//help for children
bot.action('helpFromEduc_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.helpInThings, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_btn')]
        ])
    })
})

//return to choosing type of free groups
bot.action('return_back_In_GroupMenu_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText('ГУРТКИ, ЛЕКЦІЇ, УРОКИ', {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_EXTRACURRICULARS)
    });
});

//return back to manu education
bot.action('returnBackEducation_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.generalInfoAboutSchool, {
        parse_mode: "HTML", 
        disable_web_page_preview: false,
        ...Markup.inlineKeyboard(constans.MENU_EDUCATION)
    })
})

//ANCHOR First Visit Block

//main info for people, who came right now and look for info what they have to do.
async function mainInfoAboutRefugee(ctx) {
    await ctx.replyWithHTML(mytext.firstVisit, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            Markup.button.callback("Контакти", 'btn_usefulContacts'),
            Markup.button.callback("Адреси реєстраційних центрів", 'btn_addresses')
        ])
    });
}

bot.action('btn_usefulContacts', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(contacts.usefulContacts, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
});

bot.action('btn_addresses', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(contacts.address, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FIRST, 'returnBackFirst_btn')]
        ])
    });
});

//return to the main menu button
bot.action('returnBackFirst_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(mytext.firstVisit, {
        parse_mode: "HTML",
        disable_web_page_preview: true, 
        ...Markup.inlineKeyboard(
            [
                [Markup.button.callback("Контакти", 'btn_usefulContacts'),
                Markup.button.callback("Адреси реєстраційних центрів", 'btn_addresses')]
            ]
        )
    });
});

//ANCHOR Health Menu Block

//dental
bot.action('dental_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.dentist, {
        parse_mode: 'HTML',
        disable_web_page_preview: false, ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
});

//for pregnant and women
bot.action('pregnantWomen_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.forWomenAndPregnant, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
});

//mental health
bot.action('mentalHealth_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.mentalHelth, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
});

//diabet
bot.action('diabet_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.diabetPost, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
});

bot.action('anotherMed_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.anotherMedInfo, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
});

bot.action('covid_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeMedInfo.corona, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_MENU, 'returnBack_btn')]
        ])
    });
});


//returning back to the main menu
bot.action('returnBack_btn', async (ctx) => {
    /* return infoAboutMedicineFunc(ctx); */
    await ctx.answerCbQuery();
    return await ctx.editMessageText(medInfo.aboutMedicine, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_HEALTH)
    })
});

//ANCHORFINANCE BLOCK
//show menu about finance
async function allowanceFinanceFunc(ctx) {
    await ctx.replyWithHTML(allowanceFinanceVar.infoAboutBanks, Markup.inlineKeyboard([
        Markup.button.callback('Пільги, на які ви маєте право', 'pilgi_btn'),
    ]));
}

bot.action('pilgi_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(allowanceFinanceVar.infoAboutFinanceHelp,
    {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_FINANCE, 'backToFinance_btn')]
        ])
        });
});

bot.action('freeStuff_btn', async (ctx) => {
    currentPostFree = 0;
    await ctx.answerCbQuery();
    await ctx.editMessageText(freeStuffMenu[currentPostFree], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
          [Markup.button.callback(constans.BACKWARD_BTN, 'back_btn'), Markup.button.callback(constans.FORWARD_BTN, 'forward_btn')],
          [Markup.button.callback(constans.RETURN_BACK_TO_FINANCE, 'backToFinance_btn')]
        ])
      }
    );
});

bot.action('backToFinance_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(allowanceFinanceVar.infoAboutBanks, {
        parse_mode: "HTML",
        disable_web_page_preview: false,
        ...Markup.inlineKeyboard([
            Markup.button.callback('Пільги, на які ви маєте право', 'pilgi_btn')
        ])
    })
});

//ANCHOR WORK BLOCK

//show work posts
async function workinLitva(ctx) {
    await ctx.replyWithHTML(workInfo.basicInfoAboutWork, Markup.inlineKeyboard(constans.MENU_ABOUT_WORK))
}

// work
bot.action('recHelpLook_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.recommendationsForHowToWork, {
        parse_mode: "HTML",
        disable_web_page_preview: true, 
        ...Markup.inlineKeyboard(
            [
                [Markup.button.callback('Індивідуальна зайнятість', 'individualWorker_btn'), Markup.button.callback('Сайти для пошуку роботиашч', 'sitesofwork_btn')],
                [Markup.button.callback(constans.RETURN_BACK_TO_WORK, 'backToTheWorkMenu_btn')],
            ]
        )})
});

//Individual Worker 

bot.action('individualWorker_btn', async (ctx) => {
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
});

//show post with sites
bot.action('sitesofwork_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.siteForLookForWork, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_WORK, 'backToTheWorkMenu_btn')]
        ])
        
    });
});

bot.action('vacations_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.vacationONGoogleDocs, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_WORK, 'backToTheWorkMenu_btn')]
        ])
    });
});

//back to the main menu
bot.action('backToTheWorkMenu_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.basicInfoAboutWork, {
        parse_mode: "HTML",
        disable_web_page_preview: false,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_WORK)
    });
});



//ANCHOR Free Stuff

//freeStuff
async function freeStuffForUkraineFunc(ctx) {
    await ctx.replyWithHTML("Вибери тему, яка тебе цікавить", {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_FREE_STUFF)
    })
}



//sport button
bot.action('freeSport_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[0], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//transport button
bot.action('freeTransport_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[1], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//mother children button
bot.action('freeForMothers_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[2], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//freeConsulHelp_btn button
bot.action('freeConsulHelp_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[3], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//freeConsulHelp_btn button
bot.action('freeArtEvents_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[4], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//freeConsulHelp_btn button
bot.action('freeConsultationWork_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[5], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//freeConsulHelp_btn button
bot.action('freeTranslate_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[6], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freePrint_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[7], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeInternet_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[8], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeLegal_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[9], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freePetStuff_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[10], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeBeautyStuff_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[11], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeOptica_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[12], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeCourses_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[13], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})



//return button 
bot.action('return_to_free_stuff_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText("Вибери тему, яка тебе цікавить", {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_FREE_STUFF)
    })
});

//ANCHOR Humanitarium Aid
//kaunas
bot.action('kaunas_humanAid_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.kaunasText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

//klaypeda
bot.action('klaipeda_humanAid_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.klaipedaText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

//alitus
bot.action('alitus_humanAid_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.alitusText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

//shaulyay
bot.action('shaulyay_humanAid_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.shaulyayText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

//panesvezhis
bot.action('panevezis_humanAid_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.panesvezhisText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

bot.action('return_to_human_aid_menu_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.humanAid, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_WITH_CITIES_OF_HUMAN_AID)
    })
});

// ANCHOR Sites Block

bot.action("telegramChannels_btn", async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.telegramChannelsList, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
})

bot.action("facebookGroups_btn", async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.facebookGroupsText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
})

bot.action('return_to_sites_block_btn', async (ctx) => {
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_BUTTONS_SITES)
    })
})


/* //next page
bot.action('forward_btn', async (ctx) => {

    if (currentPostFree === freeStuffMenu.length-1) {
        currentPostFree = 0;
    } 
    else {
        currentPostFree++;
    }

    await ctx.answerCbQuery();
    return await ctx.editMessageText(freeStuffMenu[currentPostFree], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_BUTTONS)
    })
})

//back
bot.action('back_btn', async (ctx) => {
    if (currentPostFree === 0) {
        currentPostFree = freeStuffMenu.length-1
    }
    else {
        currentPostFree--;
    }

    await ctx.answerCbQuery();
    return await ctx.editMessageText(freeStuffMenu[currentPostFree], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_BUTTONS)
    })
}) */

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));




