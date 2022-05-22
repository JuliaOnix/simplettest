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
const sitesKatalog = require('./text/oftenAks')
const language = require('./text/languageLitovskiy')
const aboutLithuania = require('./text/aboutLithuania')


const token = process.env.BOT_TOKEN

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
    console.log(`${ctx.chat.id} ${ctx.from.username} started bot`)
    return startBot(ctx);
});

//NOTE here I am refactoring code
//listening to, HEARS
bot.hears(constans.MAIN_MENU_NAMES[0], (ctx) => mainInfoAboutRefugee(ctx));
bot.hears(constans.MAIN_MENU_NAMES[1], (ctx) => mainMenuFunctionsFile.usefulContacts(ctx));
bot.hears(constans.MAIN_MENU_NAMES[2], (ctx) => mainMenuFunctionsFile.lookforanApartment(ctx));
bot.hears(constans.MAIN_MENU_NAMES[3], (ctx) => mainMenuFunctionsFile.humanitarianAidFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[4], (ctx) => mainMenuFunctionsFile.infoAboutMedicineFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[5], (ctx) => allowanceFinanceFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[6], (ctx) => workinLitva(ctx));
bot.hears(constans.MAIN_MENU_NAMES[7], (ctx) => educationAndSportFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[8], (ctx) => freeStuffForUkraineFunc(ctx, currentPostFree));
bot.hears(constans.MAIN_MENU_NAMES[9], (ctx) => mainMenuFunctionsFile.aboutLithuaniaFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[10], (ctx) => mainMenuFunctionsFile.showPostWithSites(ctx));
bot.hears(constans.MAIN_MENU_NAMES[11], (ctx) => mainMenuFunctionsFile.writeToOwnerOfTelegram(ctx));
bot.on("text",  async (ctx) => {
    console.log(ctx.message.text);
    await ctx.replyWithSticker("CAACAgIAAxkBAAIIYmKIImnuHqG87U8il4x-rxL0VR_oAAL5FAACRgjQSALifIoIRnMCJAQ")
    await ctx.replyWithHTML("Такої команди немає. Тицяй на кнопки 🙂", Markup.keyboard(constans.MAIN_MENU_ARRAY))
})

bot.on("message", (ctx) => {
    console.log(ctx.message.sticker);
})

//Functions

//at the begining
function startBot(ctx) {
    ctx.reply('Обери тему, яка тебе цікавить', Markup
    .keyboard(constans.MAIN_MENU_ARRAY));
}

//ANCHOR Education

//show block about education and sport for children also
async function educationAndSportFunc(ctx) {
    console.log(`${ctx.from.username} ${ctx.message.text} choosed`)
    await ctx.replyWithHTML(educationShcools.generalInfoAboutSchool, Markup.inlineKeyboard(constans.MENU_EDUCATION));
}

/* bot.action('preschool_btn', async (ctx) => {
    console.log(`${ctx.from.username} preschool_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.preschool, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_EDUCATION, 'returnBackEducation_btn')]
        ])
    })
}); */

/* bot.action('artschools_btn', async (ctx) => {
    console.log(`${ctx.from.username} artschools_btn choosed`)
    await ctx.answerCbQuery();
    //ctx.replyWithSticker
    await ctx.editMessageText(educationShcools.artSchoolsContacts, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_EDUCATION, 'returnBackEducation_btn')]
        ])
    })
}); */

bot.action('profEduc_btn', async (ctx) => {
    console.log(`${ctx.from.username} profEduc_btn choosed`)
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
    console.log(`${ctx.from.username} univer_btn choosed`)
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
    console.log(`${ctx.from.username} sportEduc_btn choosed`)
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
    console.log(`${ctx.from.username} lessonsforChildren_btn choosed`)
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
    console.log(`${ctx.from.username} artANDTeatr_btn choosed`)
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
    console.log(`${ctx.from.username} sportLessons_btn choosed`)
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
    console.log(`${ctx.from.username} lections_btn choosed`)
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
    console.log(`${ctx.from.username} lections_btn choosed`)
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
    console.log(`${ctx.from.username} return_back_In_GroupMenu_btn`)
    await ctx.answerCbQuery();
    await ctx.editMessageText('ГУРТКИ, ЛЕКЦІЇ, УРОКИ', {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_EXTRACURRICULARS)
    });
});

//return back to manu education
bot.action('returnBackEducation_btn', async (ctx) => {
    console.log(`${ctx.from.username} returnBackEducation_btn`)
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

bot.action('btn_usefulContacts', async (ctx) => {
    console.log(`${ctx.from.username} btn_useful Contacts`)
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
    console.log(`${ctx.from.username} btn_addresses choosed`)
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
    console.log(`${ctx.from.username} returnBackFirst_btn choosed`)
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
    console.log(`${ctx.from.username} dental_btn choosed`)
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
    console.log(`${ctx.from.username} pregnantWomen_btn choosed`)
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
    console.log(`${ctx.from.username} mentalHealth_btn choosed`)
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
    console.log(`${ctx.from.username} diabet_btn choosed`)
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
    console.log(`${ctx.from.username} anotherMed_btn choosed`)
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
    console.log(`${ctx.from.username} covid_btn choosed`)
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
    console.log(`${ctx.from.username} returnBack_btn choosed`)
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
    console.log(`${ctx.from.username} allowanceFinanceFunc choosed`)
    await ctx.replyWithHTML(allowanceFinanceVar.infoAboutBanks, Markup.inlineKeyboard([
        Markup.button.callback('Пільги, на які ви маєте право', 'pilgi_btn'),
    ]));
}

bot.action('pilgi_btn', async (ctx) => {
    console.log(`${ctx.from.username} pilgi_btn choosed`)
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
    console.log(`${ctx.from.username} freeStuff_btn choosed`)
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
    console.log(`${ctx.from.username} backToFinance_btn choosed`)
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
    console.log(`${ctx.from.username} workinLitva choosed`)
    await ctx.replyWithHTML(workInfo.basicInfoAboutWork, Markup.inlineKeyboard(constans.MENU_ABOUT_WORK))
}

// work
bot.action('recHelpLook_btn', async (ctx) => {
    console.log(`${ctx.from.username} recHelpLook_btn choosed`)
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
});

//show post with sites
bot.action('sitesofwork_btn', async (ctx) => {
    console.log(`${ctx.from.username} sitesofwork_btn choosed`)
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
    console.log(`${ctx.from.username} vacations_btn choosed`)
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
    console.log(`${ctx.from.username} backToTheWorkMenu_btn choosed`)
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
    console.log(`${ctx.from.username} freeStuffForUkraineFunc choosed`)
    await ctx.replyWithHTML("Обери тему, яка тебе цікавить", {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_FREE_STUFF)
    })
}



//sport button
bot.action('freeSport_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'freeSport_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[0], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//transport button
bot.action('freeTransport_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'freeTransport_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[1], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//mother children button
bot.action('freeForMothers_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'freeForMothers_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[2], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//freeConsulHelp_btn button
bot.action('freeConsulHelp_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeConsulHelp_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[3], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//freeConsulHelp_btn button
bot.action('freeArtEvents_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeArtEvents_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[4], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            //[Markup.button.callback("Показати більше...", "show_more_art_btn")],
            [constans.RETURN_BACK_TO_FREE_STUFF]
        ])
    })
})

/* bot.action('show_more_art_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeArtEvents_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[4], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback("Показати більше...", "show_more_art_btn")],
            [constans.RETURN_BACK_TO_FREE_STUFF]
        ])
    })
}) */

//freeConsulHelp_btn button
bot.action('freeConsultationWork_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeConsultationWork_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[5], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

//freeConsulHelp_btn button
bot.action('freeTranslate_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeTranslate_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[6], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freePrint_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freePrint_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[7], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeInternet_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeInternet_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[8], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeLegal_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeLegal_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[9], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freePetStuff_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freePetStuff_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[10], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeBeautyStuff_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeBeautyStuff_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[11], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeOptica_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeOptica_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[12], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeSofa_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeSofa_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[14], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_FREE_STUFF])
    })
})

bot.action('freeCourses_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + ' freeCourses_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(constans.LIST_TEXT_OF_FREE_STUFF[13], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [constans.RETURN_BACK_TO_FREE_STUFF],
        ])
    })
})



//return button 
bot.action('return_to_free_stuff_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'return_to_free_stuff_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText("Обери тему, яка тебе цікавить", {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_FREE_STUFF)
    })
});

//ANCHOR Humanitarium Aid
//kaunas
bot.action('kaunas_humanAid_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'kaunas_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.kaunasText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

//klaypeda
bot.action('klaipeda_humanAid_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'klaipeda_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.klaipedaText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

//alitus
bot.action('alitus_humanAid_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'alitus_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.alitusText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

//shaulyay
bot.action('shaulyay_humanAid_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'shaulyay_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.shaulyayText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

//panesvezhis
bot.action('panevezis_humanAid_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'panevezis_humanAid_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.panesvezhisText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_HUMANAID_MENU])
    })
});

bot.action('return_to_human_aid_menu_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + 'return_to_human_aid_menu_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(humanAidInfo.humanAid, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_WITH_CITIES_OF_HUMAN_AID)
    })
});

// ANCHOR Sites Block

bot.action("telegramChannels_btn", async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + "telegramChannels_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.telegramChannelsList, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
})

bot.action("facebookGroups_btn", async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + "facebookGroups_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.facebookGroupsText, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
})

bot.action("instagramGroups_btn", async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + "instagramGroups_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.instagramPages, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
})

bot.action("dovidnuku_btn", async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + "dovidnuku_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesKatalog.qAndA, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_SITES])
    })
})

bot.action('return_to_sites_block_btn', async (ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + "return_to_sites_block_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(sitesInfo.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_BUTTONS_SITES)
    })
})


bot.action("return_back_to_lithuania", async(ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + "return back To Lithuania")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(aboutLithuania.post, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(
            [Markup.button.callback("Сайти, де можна вивчати литовську", "language_btn")]
        )})
});

bot.action("language_btn", async(ctx) => {
    console.log(ctx.from.first_name, ctx.from.username + "language_btn")
    await ctx.answerCbQuery();
    return await ctx.editMessageText(language.sites, {
        parse_mode: 'HTML',
        disable_web_page_preview: true, 
        ...Markup.inlineKeyboard([Markup.button.callback("Назад", "return_back_to_lithuania")])
    })
});


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




