const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
const mytext = require('./text/text')
const contacts = require('./text/contacts')
const medInfo = require('./text/medicineInfo')
const freeMedInfo = require('./text/freeMedServices')
const allowanceFinanceVar = require('./text/allowanceFinanceFile')
const workInfo = require('./text/workInfoFile')
const educationShcools = require('./text/educationAndSportInfo')
const mainMenuFunctionsFile = require('./functions/functionsMainMenu')
const constans = require('./functions/fileCostants')


const token = process.env.BOT_TOKEN

//menu in chatbot
const mainMenu = 
[
    '🛬 По Прибутті', '📞 Корисні контакти', '🔎 Пошук житла', 
    '📦 Гуманітарна Допомога',"🩺 Здоров'я", '💵 Фінанси, Пільги', '🏭 Робота', 
    '🏫 Навчання', '🆓 Безкоштовні Послуги', "🇱🇹 Литовська мова", "❓ Часті запитання", 
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

bot.hears(mainMenu[0], async (ctx) => mainInfoAboutRefugee(ctx));
bot.hears(mainMenu[1], (ctx) => mainMenuFunctionsFile.usefulContacts(ctx));
bot.hears(mainMenu[2], async (ctx) => mainMenuFunctionsFile.lookforanApartment(ctx));
bot.hears(mainMenu[3], async (ctx) => mainMenuFunctionsFile.humanitarianAidFunc(ctx));
bot.hears(mainMenu[4], async (ctx) => mainMenuFunctionsFile.infoAboutMedicineFunc(ctx));
bot.hears(mainMenu[5], async (ctx) => allowanceFinanceFunc(ctx));
bot.hears(mainMenu[6], async (ctx) => workinLitva(ctx));
bot.hears(mainMenu[7], async (ctx) => educationAndSportFunc(ctx));
bot.hears(mainMenu[8], async (ctx) => freeStuffForUkraineFunc(ctx, currentPostFree));
bot.hears(mainMenu[9], async (ctx) => mainMenuFunctionsFile.language(ctx));
bot.hears(mainMenu[10], async (ctx) => mainMenuFunctionsFile.questionOften(ctx));

//Functions

//at the begining
function startBot(ctx) {
    ctx.reply('Вибери тему, яка тебе цікавить', Markup
    .keyboard([
        [mainMenu[0]],
        [mainMenu[1], mainMenu[2]], // Row1 with 2 buttons
        [mainMenu[3], mainMenu[4]], // Row2 with 2 buttons
        [mainMenu[5], mainMenu[6], mainMenu[7]], // Row3 with 3 buttons
        [mainMenu[8], mainMenu[9], mainMenu[10]]
    ]).oneTime().resize());
}

//Actions
bot.action('btn_anotherCities', async (ctx) => {
    await ctx.answerCbQuery();
    ctx.reply('https://www.redcross.lt/kontakti-z-organizaciyami-yaki-nadayut-gumanitarnu-dopomogu-ukrayincyam-ua')
});

//SECTION Education

//show block about education and sport for children also
function educationAndSportFunc(ctx) {
    ctx.replyWithHTML(educationShcools.generalInfoAboutSchool, Markup.inlineKeyboard(constans.MENU_EDUCATION));
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

//SECTION First Visit Block

//main info for people, who came right now and look for info what they have to do.
function mainInfoAboutRefugee(ctx) {
    ctx.replyWithHTML(mytext.firstVisit, {
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

//SECTION Health Menu Block

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

//SECTION FINANCE BLOCK
//show menu about finance
function allowanceFinanceFunc(ctx) {
    ctx.replyWithHTML(allowanceFinanceVar.infoAboutBanks, Markup.inlineKeyboard([
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

//SECTION WORK BLOCK

//show work posts
function workinLitva(ctx) {
    ctx.replyWithHTML(workInfo.basicInfoAboutWork, Markup.inlineKeyboard(constans.MENU_ABOUT_WORK))
}

// work
bot.action('recHelpLook_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(workInfo.recommendationsForHowToWork, {
        parse_mode: "HTML",
        disable_web_page_preview: true, 
        ...Markup.inlineKeyboard(
            [
                [Markup.button.callback('Індивідуальна зайнятість', 'individualWorker_btn'), Markup.button.callback('Сайти для поиска работы', 'sitesofwork_btn')],
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

//SECTION Free Stuff

//freeStuff
function freeStuffForUkraineFunc(ctx) {
    currentPostFree = 0;

    ctx.replyWithHTML(freeStuffMenu[currentPostFree], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
          Markup.button.callback(constans.BACKWARD_BTN, 'back_btn'),
          Markup.button.callback(constans.FORWARD_BTN, 'forward_btn')
        ])
      }
    );
}

//next page
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
})

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));




