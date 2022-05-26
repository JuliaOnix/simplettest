const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const ACTIONS_EDUCATION = require('./functions/actions/actionsEducationPage')
const ACTIONS_HUMAN_AID = require('./functions/actions/actionsHumanAid')
const ACTIONS_INFO_REFUGEE = require('./functions/actions/actionsForRefugee')
const ACTIONS_HEALTH = require('./functions/actions/actionsHealth')
const ACTIONS_ALLOWANCE = require('./functions/actions/actionsAllowance')
const ACTIONS_WORK = require('./functions/actions/actionsWork')
const ACTIONS_FREE_STUFF = require('./functions/actions/actionsFreeMenuStaff')
const ACTIONS_SOCIAL = require('./functions/actions/actionsSocial')
const ACTIONS_LITVA = require('./functions/actions/actionsLithuvinia')
const ACTIONS_APARTMENTS = require('./functions/actions/actionsApartments')

const mainMenuFunctionsFile = require('./functions/functionsMainMenu')
const constans = require('./functions/fileCostants')

const token = process.env.BOT_TOKEN
const bot = new Telegraf(token);
let currentPostFree;

if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

//here is started bot
bot.command('start', async (ctx) => {
    console.log(`${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} ${ctx.from.last_name} started bot`)
    bot.telegram.sendMessage("2143667939", `${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} ${ctx.from.last_name} started bot`)
        return ctx.replyWithHTML("something went wrong.", Markup.removeKeyboard())
    /* await bot.telegram.sendMessage("2143667939", ` @${ctx.from.username} ${ctx.from.first_name} `)
    return startBot(ctx); */
});
//

//listening to, HEARS
bot.hears(constans.MAIN_MENU_NAMES[0], (ctx) => mainMenuFunctionsFile.mainInfoAboutRefugee(ctx));
bot.hears(constans.MAIN_MENU_NAMES[1], (ctx) => mainMenuFunctionsFile.usefulContacts(ctx));
bot.hears(constans.MAIN_MENU_NAMES[2], (ctx) => mainMenuFunctionsFile.lookforanApartment(ctx));
bot.hears(constans.MAIN_MENU_NAMES[3], (ctx) => mainMenuFunctionsFile.humanitarianAidFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[4], (ctx) => mainMenuFunctionsFile.infoAboutMedicineFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[5], (ctx) => mainMenuFunctionsFile.allowanceFinanceFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[6], (ctx) => mainMenuFunctionsFile.workinLitva(ctx));
bot.hears(constans.MAIN_MENU_NAMES[7], (ctx) => mainMenuFunctionsFile.educationAndSportFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[8], (ctx) => mainMenuFunctionsFile.freeStuffForUkraineFunc(ctx, currentPostFree));
bot.hears(constans.MAIN_MENU_NAMES[9], (ctx) => mainMenuFunctionsFile.aboutLithuaniaFunc(ctx));
bot.hears(constans.MAIN_MENU_NAMES[10], (ctx) => mainMenuFunctionsFile.showPostWithSites(ctx));
bot.hears(constans.MAIN_MENU_NAMES[11], (ctx) => mainMenuFunctionsFile.writeToOwnerOfTelegram(ctx));

bot.on("text",  async (ctx) => {
    console.log(`${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} ${ctx.from.last_name} ${ctx.message.text} started bot`)
    bot.telegram.sendMessage("2143667939", `${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} ${ctx.from.last_name}  ${ctx.message.text} started bot`)
        return ctx.replyWithHTML("something went wrong.", Markup.removeKeyboard())
   /*  console.log(ctx.chat.id + " " + ctx.message.text);
    
    //FIXME стикеры вынеси в константы
    await ctx.replyWithSticker("CAACAgIAAxkBAAIO8WKMJUXwYGdfN8bTmI1-dyhCAAH1oQACYwAD29t-AAGMnQU950KD5yQE")
    await ctx.replyWithHTML("Такої команди немає. Тицяй на кнопки 🙂", Markup.keyboard(constans.MAIN_MENU_ARRAY)) */
})

bot.on("message", (ctx) => {
    bot.telegram.sendMessage("2143667939", `${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} ${ctx.from.last_name} ${ctx.message.text}started bot`)
    console.log(ctx.message.sticker);
})

//at the begining
async function startBot(ctx) {

    console.log(`${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} ${ctx.from.last_name} started bot`)
    bot.telegram.sendMessage()
    return ctx.replyWithHTML("something has gone wrong.", Markup.removeKeyboard())
    /* await ctx.reply(constans.GREETING, Markup.keyboard(constans.MAIN_MENU_ARRAY)); */
}

//ANCHOR HumanAID actions
/* bot.action('vilnius_humanAid_btn', (ctx) => ACTIONS_HUMAN_AID.vilniusPage(ctx));
bot.action('kaunas_humanAid_btn', (ctx) => ACTIONS_HUMAN_AID.kaunasPage(ctx));
bot.action('klaipeda_humanAid_btn', (ctx) => ACTIONS_HUMAN_AID.klaypedaPage(ctx));
bot.action('alitus_humanAid_btn', (ctx) => ACTIONS_HUMAN_AID.alitusPage(ctx));
bot.action('shaulyay_humanAid_btn', (ctx) => ACTIONS_HUMAN_AID.shaulyayPage(ctx));
bot.action('panevezis_humanAid_btn', (ctx) => ACTIONS_HUMAN_AID.panevezhysPage(ctx));
bot.action('return_to_human_aid_menu_btn', (ctx) => ACTIONS_HUMAN_AID.returnBack(ctx)); */

//ANCHOR Education block
/* bot.action('univer_btn', (ctx) => ACTIONS_EDUCATION.univer(ctx));
bot.action('sportEduc_btn', (ctx) => ACTIONS_EDUCATION.sportEducation(ctx));
bot.action('profEduc_btn', (ctx) => ACTIONS_EDUCATION.profEducation(ctx));
bot.action('show_more_art_btn', (ctx) => ACTIONS_EDUCATION.showMoreArtEvents(ctx));

bot.action('artANDTeatr_btn', (ctx) => ACTIONS_EDUCATION.showArtAndTeatr(ctx));
bot.action('sportLessons_btn', (ctx) => ACTIONS_EDUCATION.showSportLessons(ctx));
bot.action('lections_btn', (ctx) => ACTIONS_EDUCATION.showLections(ctx));

bot.action('artANDTeatr_EDUCATION_btn', (ctx) => ACTIONS_EDUCATION.showArtAndTeatrEDUCATION(ctx));
bot.action('sportLessons_EDUCATION_btn', (ctx) => ACTIONS_EDUCATION.showSportLessonsEDUCATION(ctx));
bot.action('lections_EDUCATION_btn', (ctx) => ACTIONS_EDUCATION.showLectionsEDUCATION(ctx));

bot.action('helpFromEduc_btn', (ctx) => ACTIONS_EDUCATION.showHelpFromEd(ctx));
bot.action('showOnlineEducation_btn', (ctx) => ACTIONS_EDUCATION.showOnlineEducation(ctx));
bot.action('returnBackEducation_btn', (ctx) => ACTIONS_EDUCATION.returnBack(ctx)); */

//ANCHOR REFUGEE BLOCK
/* bot.action("recoverDocuments_BTN", (ctx) => ACTIONS_INFO_REFUGEE.showRecoverDecuments(ctx));
bot.action('btn_usefulContacts', (ctx) => ACTIONS_INFO_REFUGEE.contactsAndAdresses(ctx));
bot.action('btn_addresses', (ctx) => ACTIONS_INFO_REFUGEE.showAdresses(ctx));
bot.action('adresses_in_apartment', (ctx) => ACTIONS_INFO_REFUGEE.showAdressesInApartMenu(ctx));
bot.action('returnBackFirst_btn', (ctx) => ACTIONS_INFO_REFUGEE.returnBackFrom(ctx));
 */
//ANCHOR WORK BLOCK
/* bot.action('recHelpLook_btn', (ctx) => ACTIONS_WORK.showRecomandationPage(ctx));
bot.action('individualWorker_btn', (ctx) => ACTIONS_WORK.showIndivPage(ctx));
bot.action('sitesofwork_btn', (ctx) => ACTIONS_WORK.showSitesPage(ctx));
bot.action('vacations_btn', (ctx) => ACTIONS_WORK.showVacationsPage(ctx));
bot.action('backToTheWorkMenu_btn', (ctx) => ACTIONS_WORK.returnBack(ctx)); */

//ANCHOR Menu with groups lessons
/* bot.action('lessonsforChildren_btn', (ctx) => ACTIONS_EDUCATION.showMenuGroupChildren(ctx));
//NOTE HERE
bot.action('lessonsforChildren_IN_EDUCATION_btn', (ctx) => ACTIONS_EDUCATION.showMenuGroupChildren_in_EDUCATION_MENU(ctx));
bot.action('return_back_In_GroupMenu_btn', (ctx) => ACTIONS_EDUCATION.returnBackFromGroupChildren(ctx));
bot.action('return_back_In_GroupMenu_EDUCATION_btn', (ctx) => ACTIONS_EDUCATION.returnBackFromGroupChildrenTOEDUCATION(ctx));
 */
//ANCHOR Apartments Block
/* bot.action('lookforapartmants_BTN', (ctx) => ACTIONS_APARTMENTS.showLookFor(ctx));
bot.action("return_back_to_look_for_apart", (ctx) => ACTIONS_APARTMENTS.returnBack(ctx)); */

//ANCHOR Health Menu Block
/* bot.action('dental_btn', (ctx) => ACTIONS_HEALTH.showDentalPage(ctx));
bot.action('pregnantWomen_btn', (ctx) => ACTIONS_HEALTH.showPregnantWomenPage(ctx));
bot.action('mentalHealth_btn', (ctx) => ACTIONS_HEALTH.showMentalPage(ctx));
bot.action('diabet_btn', (ctx) => ACTIONS_HEALTH.showDiabetPage(ctx))
bot.action('anotherMed_btn', (ctx) => ACTIONS_HEALTH.showAnotherMenu(ctx));
bot.action('covid_btn', (ctx) => ACTIONS_HEALTH.showCovidPage(ctx));
bot.action('returnBack_btn', (ctx) => ACTIONS_HEALTH.returnBack(ctx)); */

//ANCHOR FINANCE BLOCK
/* bot.action('pilgi_btn', (ctx) => ACTIONS_ALLOWANCE.showPilgiPage(ctx));
bot.action('exchange_currency_btn', (ctx) => ACTIONS_ALLOWANCE.showExchangeCurrencePage(ctx));
bot.action('backToFinance_btn', (ctx) => ACTIONS_ALLOWANCE.returnBack(ctx)); */

//ANCHOR Free Stuff
/* bot.action('freeSport_btn', (ctx) => ACTIONS_FREE_STUFF.showSport(ctx))
bot.action('freeTransport_btn', (ctx) => ACTIONS_FREE_STUFF.showTransport(ctx))
bot.action('freeForMothers_btn', (ctx) => ACTIONS_FREE_STUFF.showForMother(ctx))
bot.action('freeConsulHelp_btn', (ctx) => ACTIONS_FREE_STUFF.showFreeConsul(ctx))
bot.action('freeshowMoreArtEvents_btn', (ctx) => ACTIONS_EDUCATION.showMoreArtEvents(ctx))
bot.action('freeTranslate_btn', (ctx) => ACTIONS_FREE_STUFF.showTranslate(ctx))
bot.action('freePrint_btn', (ctx) => ACTIONS_FREE_STUFF.showPrintPage(ctx))
bot.action('freeInternet_btn', (ctx) => ACTIONS_FREE_STUFF.showInternet(ctx))
bot.action('freeLegal_btn', (ctx) => ACTIONS_FREE_STUFF.showLegalPage(ctx))
bot.action('freePetStuff_btn', (ctx) => ACTIONS_FREE_STUFF.showPetStuff(ctx))
bot.action('freeBeautyStuff_btn', (ctx) => ACTIONS_FREE_STUFF.freeBeautyStuff(ctx))
bot.action('freeOptica_btn', (ctx) => ACTIONS_FREE_STUFF.showOpticaStuff(ctx))
bot.action('freeSofa_btn', (ctx) => ACTIONS_FREE_STUFF.showSofa(ctx))
bot.action('freeCourses_btn', (ctx) => ACTIONS_FREE_STUFF.showCourses(ctx))
bot.action('freeArtEvents_btn', (ctx) => ACTIONS_FREE_STUFF.showArt(ctx))
bot.action('return_to_free_stuff_btn', (ctx) => ACTIONS_FREE_STUFF.returnBack(ctx)); */

// ANCHOR Sites Block
/* bot.action("telegramChannels_btn", (ctx) => ACTIONS_SOCIAL.showTelegramChannels(ctx))
bot.action("facebookGroups_btn", (ctx) => ACTIONS_SOCIAL.showFacebook(ctx))
bot.action("instagramGroups_btn", (ctx) => ACTIONS_SOCIAL.showInstagram(ctx))
bot.action("dovidnuku_btn", (ctx) => ACTIONS_SOCIAL.showDovidnuku(ctx))
bot.action('return_to_sites_block_btn', (ctx) => ACTIONS_SOCIAL.returnBack(ctx)) */

//ANCHOR Litva Block
/* bot.action("return_back_to_lithuania", (ctx) => ACTIONS_LITVA.returnBack(ctx));
bot.action("language_btn", (ctx) => ACTIONS_LITVA.showLanguagePage(ctx)); */


//special function 



bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));




