const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
const mytext = require('./text/text')
const contacts = require('./text/contacts')
const medInfo = require('./text/medicineInfo')
const freeMedInfo = require('./text/freeMedServices')
const humanInfo = require('./text/humanitarianAidText')
const allowanceFinanceVar = require('./text/allowanceFinanceFile')
const workInfo = require('./text/workInfoFile')
const educationShcools = require('./text/educationAndSportInfo')
const mainMenuFunctionsFile = require('./functions/functionsMainMenu')
/* const actionsFreeStuff = require('./functions/actionsFreeMenuStaff') */


const token = process.env.BOT_TOKEN

//menu in chatbot
const mainMenu = 
[
    'По Прибутті В Литву', 'Корисні контакти', 'Пошук житла', 
    'Гуманітарна Допомога',"Здоров'я", 'Фінанси, Пільги', 'Робота', 
    'Діти', 'Безкоштовні Послуги', "Литовська мова", "Поширені питання"
];

//menu with free thing/stuff/services
const freeStuffMenu = 
[
    allowanceFinanceVar.freeTransport, allowanceFinanceVar.freeWorkConsultation, allowanceFinanceVar.freeTranslator,
    allowanceFinanceVar.freePrintout, allowanceFinanceVar.freeСommunication, allowanceFinanceVar.freeLegalAid, allowanceFinanceVar.freePatsStuff, 
    allowanceFinanceVar.freeBeautyStauff, allowanceFinanceVar.freeMedOptica, allowanceFinanceVar.freeLessonsAndCourses, allowanceFinanceVar.freeForChildrenAndMothers,
    allowanceFinanceVar.freeKonsulska, allowanceFinanceVar.freeArtEvents
];

const FORWARD_BTN = `Наступна сторінка ➡️`;
const BACKWARD_BTN = `⬅️ Попередня сторінка`

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

bot.hears('По Прибутті В Литву', async (ctx) => mainInfoAboutRefugee(ctx));
bot.hears('Пошук житла', async (ctx) => mainMenuFunctionsFile.lookforanApartment(ctx));
bot.hears("Здоров'я", async (ctx) => infoAboutMedicineFunc(ctx));
bot.hears('Гуманітарна Допомога', async (ctx) => humanitarianAidFunc(ctx));
bot.hears('Корисні контакти', async (ctx) => mainMenuFunctionsFile.usefulContacts(ctx));
bot.hears('Фінанси, Пільги', async (ctx) => allowanceFinanceFunc(ctx));
bot.hears('Безкоштовні Послуги', async (ctx) => freeStuffForUkraineFunc(ctx, currentPostFree));
bot.hears('Робота', async (ctx) => workinLitva(ctx));
bot.hears('Діти', async (ctx) => educationAndSportFunc(ctx));
bot.hears('Литовська мова', async (ctx) => mainMenuFunctionsFile.language(ctx));
bot.hears('Поширені питання', async (ctx) => mainMenuFunctionsFile.questionOften(ctx));

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

//main info for people, who came right now and look for info what they have to do.
function mainInfoAboutRefugee(ctx) {
    ctx.replyWithHTML(mytext.firstVisit, Markup.inlineKeyboard([
        Markup.button.callback("Контакти", 'btn_usefulContacts'),
        Markup.button.callback("Адреси реєстраційних центрів", 'btn_addresses')
    ]));
}

//show info about med insurance
function infoAboutMedicineFunc(ctx) {
    ctx.replyWithHTML(medInfo.aboutMedicine, Markup.inlineKeyboard([
        Markup.button.callback("Безкоштовні медичні послуги", 'freeMedService_btn')
    ]
    ));
}

//show info about humanitarianAid
function humanitarianAidFunc(ctx) {
    ctx.replyWithHTML(humanInfo.humanAid, Markup.inlineKeyboard([
        Markup.button.callback("Інші міста", 'btn_anotherCities')
    ]));
}

//show menu about finance
function allowanceFinanceFunc(ctx) {
    ctx.replyWithHTML(allowanceFinanceVar.infoAboutBanks, Markup.inlineKeyboard([
        Markup.button.callback('Пільги та пільги, на які ви маєте право', 'pilgi_btn'),
        Markup.button.callback('Безкоштовні фінансові послуги', 'freeStuff_btn')
    ]));
}

//show work posts
function workinLitva(ctx) {
    ctx.replyWithHTML(workInfo.basicInfoAboutWork, Markup.inlineKeyboard([
        Markup.button.callback('Як знайти роботу?', 'howtowork_btn'),
        Markup.button.callback('Сайти та оголошення', 'sitesofwork_btn'),
    ]))
}

//show block about education and sport for children also
function educationAndSportFunc(ctx) {
    ctx.replyWithHTML(educationShcools.generalInfoAboutSchool, Markup.inlineKeyboard(
        [
            [Markup.button.callback('Дошкільне виховання', 'preschool_btn'), Markup.button.callback('Художні школи', 'artschools_btn')],
            [Markup.button.callback('Професійне навчання', 'profEduc_btn'),  Markup.button.callback("Вища освіта (університети)", "univer_btn")],
            [Markup.button.callback('Для спортсменів', 'sportEduc_btn'),     Markup.button.callback('Гуртки, уроки, дозвілля', 'lessonsforChildren_btn')]
            
        ]
    ));
}

//freeStuff
function freeStuffForUkraineFunc(ctx) {
    currentPostFree = 0;

    ctx.replyWithHTML(freeStuffMenu[currentPostFree], {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
          Markup.button.callback(BACKWARD_BTN, 'back_btn'),
          Markup.button.callback(FORWARD_BTN, 'forward_btn')
        ])
      }
        
        /* Markup.inlineKeyboard(
        [
            [Markup.button.callback('ДЛЯ ЖІНОК та ДІТЯМИ', 'womenStuffFree_btn'), Markup.button.callback('КОНСУЛЬТАЦІЇ З ПРАЦІ', 'consultFree_btn')],
            [Markup.button.callback('ПОСЛУГИ ПЕРЕКЛАДАЧА', 'tranFree_btn'), Markup.button.callback('ДРУК', 'printFree_btn')],
            [Markup.button.callback('КОМУНІКАЦІЯ', 'communFree_btn'), Markup.button.callback('ЮРИДИЧНІ ПОСЛУГИ', 'jurFree_btn')],
            [Markup.button.callback('Для домашніх тварин', 'petFree_btn'), Markup.button.callback('Послуги', 'serviceFree_btn')],
            [Markup.button.callback('ОПТИКА', 'glassesFree_btn'), Markup.button.callback('КУРСИ, ЛЕКЦІЇ', 'coursesFree_btn')],
            [Markup.button.callback('МИСТЕЦЬКІ ПОДІЇ', 'artStuffFree_btn'), Markup.button.callback('КОНСУЛЬСЬКА ДОПОМОГА', 'konsulFree_btn')],
        ]
        ) */
    );
}

//Actions

bot.action('btn_usefulContacts', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(contacts.usefulContacts);
});

bot.action('btn_addresses', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(contacts.address);
});

bot.action('btn_anotherCities', async (ctx) => {
    await ctx.answerCbQuery();
    ctx.reply('https://www.redcross.lt/kontakti-z-organizaciyami-yaki-nadayut-gumanitarnu-dopomogu-ukrayincyam-ua')
});

bot.action('freeMedService_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(freeMedInfo.freeMedInfo, Markup.inlineKeyboard([
        Markup.button.callback('Психологічна Допомога', "mentalHealth_btn"),
        Markup.button.callback('Духовна, релігійна допомога', "godHelp_btn")
    ]));
});

bot.action('mentalHealth_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(freeMedInfo.mentalHelth);
});

bot.action('godHelp_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(freeMedInfo.godHelp);
});

bot.action('pilgi_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(allowanceFinanceVar.infoAboutFinanceHelp);
});

bot.action('freeStuff_btn', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(allowanceFinanceVar.freeTransport);
    await ctx.replyWithHTML(allowanceFinanceVar.freeWorkConsultation);
    await ctx.replyWithHTML(allowanceFinanceVar.freeTranslator);
    await ctx.replyWithHTML(allowanceFinanceVar.freePrintout);
    await ctx.replyWithHTML(allowanceFinanceVar.freeСommunication);
    await ctx.replyWithHTML(allowanceFinanceVar.freeLegalAid);
    await ctx.replyWithHTML(allowanceFinanceVar.freePatsStuff);
    await ctx.replyWithHTML(allowanceFinanceVar.freeBeautyStauff);
    await ctx.replyWithHTML(allowanceFinanceVar.freeMedOptica);
    await ctx.replyWithHTML(allowanceFinanceVar.freeLessonsAndCourses);
    await ctx.replyWithHTML(allowanceFinanceVar.freeForChildrenAndMothers);
    await ctx.replyWithHTML(allowanceFinanceVar.freeKonsulska);
    await ctx.replyWithHTML(allowanceFinanceVar.freeArtEvents);
});

// work
bot.action('howtowork_btn', async (ctx) => {
    await ctx.replyWithHTML(workInfo.howToFindWork);
});

bot.action('sitesofwork_btn', async (ctx) => {
    await ctx.replyWithHTML(workInfo.sitesforworkpart1);
    await ctx.replyWithHTML(workInfo.sitesforworkpart2);
});

//Education

bot.action('preschool_btn', async (ctx) => {
    await ctx.replyWithHTML(educationShcools.preschool)
});

bot.action('artschools_btn', async (ctx) => {
    await ctx.replyWithHTML(educationShcools.artSchoolsContacts)
});

bot.action('profEduc_btn', async (ctx) => {
    await ctx.replyWithHTML(educationShcools.profEducation)
});

bot.action('univer_btn', async (ctx) => {
    await ctx.replyWithHTML(educationShcools.universities)
});

bot.action('sportEduc_btn', async (ctx) => {
    await ctx.replyWithHTML(educationShcools.sportPlaces)
});

bot.action('lessonsforChildren_btn', async (ctx) => {
    await ctx.replyWithHTML(educationShcools.artfree)
    await ctx.replyWithHTML(educationShcools.sportfree)
    await ctx.replyWithHTML(educationShcools.freeLessonsEducation1)
    await ctx.replyWithHTML(educationShcools.freeLessonsEducation2)
});



//==============================Free Menu Staff===============================

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
        ...Markup.inlineKeyboard([
            Markup.button.callback(BACKWARD_BTN, 'back_btn'),
            Markup.button.callback(FORWARD_BTN, 'forward_btn')
        ])
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
        ...Markup.inlineKeyboard([
            Markup.button.callback(BACKWARD_BTN, 'back_btn'),
            Markup.button.callback(FORWARD_BTN, 'forward_btn')
        ])
    })
})


bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));