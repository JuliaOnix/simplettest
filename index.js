const { Telegraf, Markup } = require("telegraf");
const newInfoBlock = require("./text/newText/addnewinfoBlock")
require("dotenv").config();

const ACTIONS_EDUCATION = require('./functions/actions/actionsEducationPage')
const ACTIONS_HUMAN_AID = require('./functions/actions/actionsHumanAid')
/* const ACTIONS_INFO_REFUGEE = require('./functions/actions/actionsForRefugee') */
const ACTIONS_HEALTH = require('./functions/actions/actionsHealth')
//const ACTIONS_ALLOWANCE = require('./functions/actions/actionsAllowance')
const ACTIONS_FREE_STUFF = require('./functions/actions/actionsFreeMenuStaff')
const ACTIONS_SOCIAL = require('./functions/actions/actionsSocial')
const ACTIONS_LITVA = require('./functions/actions/actionsLithuvinia')
const ACTIONS_APARTMENTS = require('./functions/actions/actionsApartments')
const ACTIONS_BENEFITS = require('./functions/actions/actionsBenefits')
const constans = require('./functions/fileCostants')


const mainMenu = require('./functions/updates_20_09_22/Main_Manu')

const token = process.env.BOT_TOKEN
const bot = new Telegraf(token);

if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

//here is started bot
bot.command('start', async (ctx) => {
    console.log(`${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} ${ctx.from.last_name} started bot`)
    bot.telegram.sendMessage("2143667939", `${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} ${ctx.from.last_name} started bot`)
    await bot.telegram.sendMessage("2143667939", ` @${ctx.from.username} ${ctx.from.first_name} `)
    return startBot(ctx);
});

//add new information in bot
bot.command('addinfo', async (ctx) => {
    console.log("someone press the button 'add info'");
    await ctx.replyWithHTML(newInfoBlock.text, {
        protect_content: false,
        parse_mode: "HTML", 
        disable_web_page_preview: true,
    });
});

bot.command('question', async (ctx) => {
    console.log("someone press the button 'спитати'");
    await ctx.replyWithHTML(newInfoBlock.text2, {
        protect_content: true,
        parse_mode: "HTML", 
        disable_web_page_preview: true,
    });
});
//

//Получает текущий айди и удаляет все в обратном порядке

/* bot.command('deleteAll', async (ctx) => {
    let res = await ctx.reply('deleting');
    console.log(res);
    for(let i = res.message_id; i >= 0; i--) {
        console.log(`chat_id: ${ctx.chat.id}, message_id: ${i}`);
        try {
            let res = await ctx.telegram.deleteMessage(ctx.chat.id, i);
            console.log(res);
        } catch (e) {
            console.error(e);
        }
    }
}); */


bot.action('main_info', (ctx) => mainMenu.mainInfoAboutRefugee(ctx))
bot.action('about_flats', (ctx) => mainMenu.lookforanApartment(ctx))
bot.action('help_refugee', (ctx) => mainMenu.humanitarianAidFunc(ctx))
bot.action('medicine', (ctx) => mainMenu.infoAboutMedicineFunc(ctx))
//bot.action('finance', (ctx) => mainMenu.allowanceFinanceFunc(ctx))
bot.action('work', (ctx) => mainMenu.workinLitva(ctx))
//bot.action('education', (ctx) => mainMenuFunctionsFile.educationAndSportFunc(ctx))
bot.action('lithuania', (ctx) => mainMenu.aboutLithuaniaFunc(ctx))
bot.action('social_media', (ctx) => mainMenu.showPostWithSites(ctx))
bot.action('back_to_the_main_menu', (ctx) => mainMenu.returnBackToMainMenuFunc(ctx))
//bot.action('owner', (ctx) => mainMenuFunctionsFile.writeToOwnerOfTelegram(ctx))

bot.on("text",  async (ctx) => {
    console.log(`${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} wrote text`)
    bot.telegram.sendMessage("2143667939", `${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} wrote text`) 
        //return ctx.replyWithHTML("something went wrong.", Markup.removeKeyboard())
   //console.log(ctx.chat.id + " " + ctx.message.text);
    
    //FIXME стикеры вынеси в константы
    await ctx.replyWithSticker("CAACAgIAAxkBAAIO8WKMJUXwYGdfN8bTmI1-dyhCAAH1oQACYwAD29t-AAGMnQU950KD5yQE")
    await ctx.replyWithHTML("Спробуй оновити /start", {protect_content: true, ...Markup.keyboard(constans.MAIN_MENU_ARRAY).resize() })
    //return ctx.replyWithHTML("<b>Бот наразі знаходиться у розробці.</b> \n\nТакож було створено канал https://t.me/+uA00yl9KweQ1MTQy \nЛаскаво просимо!", Markup.removeKeyboard())
})

bot.on("message", (ctx) => {
    bot.telegram.sendMessage("2143667939", `${ctx.chat.id} ${ctx.from.username} ${ctx.from.first_name} ${ctx.from.last_name} ${ctx.message.text} wrote message`)
    console.log(ctx.message.sticker);
})

//at the begining
async function startBot(ctx) {
    await ctx.replyWithHTML(" ", Markup.removeKeyboard())
    return ctx.replyWithHTML(mainMenu.GREETING, {protect_content: true, parse_mode: 'HTML',
    disable_web_page_preview: true,  ...Markup.inlineKeyboard(mainMenu.main_kaybord).resize()})
    //return ctx.replyWithHTML("<b>Бот наразі знаходиться у розробці.</b> \n\nТакож було створено канал https://t.me/+uA00yl9KweQ1MTQy  \nЛаскаво просимо!", Markup.removeKeyboard())
}

// ANCHOR Sites Block
bot.action("services_sites_btn", (ctx) => ACTIONS_SOCIAL.showServicesSites(ctx))
bot.action("another_sites_btn", (ctx) => ACTIONS_SOCIAL.showAnotherSites(ctx))
bot.action("afisha_sites_btn", (ctx) => ACTIONS_SOCIAL.showAfishaSites(ctx))
bot.action("med_sites_btn", (ctx) => ACTIONS_SOCIAL.showMedSites(ctx))
bot.action("products_sites_btn", (ctx) => ACTIONS_SOCIAL.showProductSites(ctx))
bot.action("children_sites_btn", (ctx) => ACTIONS_SOCIAL.showChildrenSites(ctx))
bot.action("mun_sites_btn", (ctx) => ACTIONS_SOCIAL.showMunSites(ctx))
bot.action("work_sites_btn", (ctx) => ACTIONS_SOCIAL.showWorkSites(ctx))
bot.action("cars_sites_btn", (ctx) => ACTIONS_SOCIAL.showAutoSites(ctx))
bot.action("zoo_sites_btn", (ctx) => ACTIONS_SOCIAL.showZooSites(ctx))
bot.action("houses_sites_btn", (ctx) => ACTIONS_SOCIAL.showHouseSites(ctx))
bot.action("ukraine_sites_btn", (ctx) => ACTIONS_SOCIAL.showUkshowUkranianSymbSites(ctx))
bot.action("telegramChannels_btn", (ctx) => ACTIONS_SOCIAL.showTelegramChannels(ctx))
bot.action("facebookGroups_btn", (ctx) => ACTIONS_SOCIAL.showFacebook(ctx))
bot.action("instagramGroups_btn", (ctx) => ACTIONS_SOCIAL.showInstagram(ctx))
bot.action("dovidnuku_btn", (ctx) => ACTIONS_SOCIAL.showDovidnuku(ctx))
bot.action('return_to_sites_block_btn', (ctx) => ACTIONS_SOCIAL.returnBack(ctx))

//ANCHOR Litva Block
bot.action("return_back_to_lithuania", (ctx) => ACTIONS_LITVA.returnBack(ctx));
bot.action("language_btn", (ctx) => ACTIONS_LITVA.showLanguagePage(ctx));
//bot.action("show_how_to_recTrash_BTN", (ctx) => ACTIONS_LITVA.showRecycleTrashPage(ctx));

//ANCHOR Lithuanian block
bot.action("show_apps_BTN", (ctx) => ACTIONS_LITVA.showAppsPage(ctx))
bot.action("show_funs_BTN", (ctx) => ACTIONS_LITVA.showFunsPage(ctx))

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
