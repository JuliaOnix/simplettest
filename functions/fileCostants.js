const { Telegraf, Markup } = require("telegraf");
const financeText = require('../text/allowanceFinanceFile')

const RETURN_BACK_TO_EDUCATION = '🔙 Повернутися до «Навчання»';
const FORWARD_BTN = `Наступна сторінка ➡️`;
const BACKWARD_BTN = `⬅️ Попередня сторінка`;
const RETURN_BACK_TO_MENU = "🔙 Повернутися до «Здоров'я»";
const RETURN_BACK_TO_FINANCE = '🔙 Повернутися до «Фінанси, Пільги»';
const RETURN_BACK_TO_WORK = '🔙 Повернутися до «Робота»';
const RETURN_BACK_TO_FIRST = '🔙 Повернутися до «По Прибутті»';
const RETURN_BACK_TO_FREE_STUFF = Markup.button.callback('🔙 Повернутися до «Безкоштовні Послуги»', "return_to_free_stuff_btn");
const RETURN_BACK_TO_GROUPLESSONS_EDUCATION = '🔙 Повернутися до «ГУРТКИ, ЛЕКЦІЇ, УРОКИ»';
const RETURN_BACK_TO_HUMANAID_MENU = Markup.button.callback('🔙 Повернутися до «Гуманітарна Допомога»', "return_to_human_aid_menu_btn");
const RETURN_BACK_TO_SITES = Markup.button.callback('🔙 Повернутися до «Каталог сайтів»', "return_to_sites_block_btn");

//menu in chatbot
const MAIN_MENU_NAMES = 
[
    '🛬 По Прибутті', '📞 Корисні контакти', '🔎 Пошук житла', 
    '📦 Гуманітарна Допомога',"🩺 Здоров'я", '💵 Фінанси, Пільги', '🏭 Робота', 
    '🏫 Навчання', '🆓 Безкоштовні Послуги', "🇱🇹 Литва", 
    '📡 Каталог сайтів', 'Написати розробнику'
];

const MAIN_MENU_ARRAY = [[MAIN_MENU_NAMES[0]],
[MAIN_MENU_NAMES[1], MAIN_MENU_NAMES[2], MAIN_MENU_NAMES[6]],
[MAIN_MENU_NAMES[4], MAIN_MENU_NAMES[3], MAIN_MENU_NAMES[5]],
[MAIN_MENU_NAMES[8], MAIN_MENU_NAMES[7], MAIN_MENU_NAMES[9]],
[MAIN_MENU_NAMES[10],MAIN_MENU_NAMES[11]]]


//menu for health block 
const MENU_HEALTH = [
    [Markup.button.callback('Стоматологія 🦷', "dental_btn"), Markup.button.callback('Жінкам 🤰🏻', "pregnantWomen_btn")],
    [Markup.button.callback('Психологічна Допомога', "mentalHealth_btn")],
    [Markup.button.callback('Діабет', "diabet_btn"), Markup.button.callback('COVID-19 🦠', "covid_btn"), Markup.button.callback('Інше', "anotherMed_btn")]
];

//menu for group lessons
const MENU_ABOUT_EXTRACURRICULARS = [
    [Markup.button.callback('МИСТЕЦТВО, ТЕАТР', 'artANDTeatr_btn'), Markup.button.callback('СПОРТ', 'sportLessons_btn')],
    [Markup.button.callback('УРОКИ', 'lections_btn'), Markup.button.callback('ПІДТРИМКА В РЕЧАХ', 'helpFromEduc_btn')],
    [Markup.button.callback(RETURN_BACK_TO_EDUCATION, 'returnBackEducation_btn')],
]

//menu for work block
const MENU_ABOUT_WORK = [
    [Markup.button.callback('Рекомендації / Допомога з пошуку роботи', 'recHelpLook_btn')],
    [Markup.button.callback('Сайти для пошуку роботи', 'sitesofwork_btn'), Markup.button.callback('Вакансії', 'vacations_btn')]
]

//menu for education block
const MENU_EDUCATION = [
    [Markup.button.callback('Дошкільне виховання', 'preschool_btn'), Markup.button.callback('Художні школи', 'artschools_btn')],
    [Markup.button.callback('Професійне навчання', 'profEduc_btn'),  Markup.button.callback("Вища освіта (університети)", "univer_btn")],
    [Markup.button.callback('Для спортсменів', 'sportEduc_btn'),     Markup.button.callback('Гуртки, уроки, дозвілля', 'lessonsforChildren_btn')]
];

const MENU_FREE_STUFF = [
    [Markup.button.callback('💪🏻 Спорт', 'freeSport_btn'), Markup.button.callback('🚕 Транспорт', 'freeTransport_btn')],
    [Markup.button.callback('🤰🏻 Для жінок, для мам з дітьми', 'freeForMothers_btn'),  Markup.button.callback("🇪🇺 Консульска допомога", "freeConsulHelp_btn")],
    [Markup.button.callback('👩‍🎨 Мистецькі подіЇ', 'freeArtEvents_btn'),     Markup.button.callback('👷‍♂️ КонсультаціЇ з праці', 'freeConsultationWork_btn')],   
    [Markup.button.callback('🔡 Послуги перекладача', 'freeTranslate_btn'),     Markup.button.callback('🖨 Друк', 'freePrint_btn')],   
    [Markup.button.callback('🌐 Інтернет, Комунікація', 'freeInternet_btn'),     Markup.button.callback('🏢 Юридичні послуги', 'freeLegal_btn')],   
    [Markup.button.callback('🐈 Для домашніх тварин', 'freePetStuff_btn'),     Markup.button.callback('💅🏻 Послуги краси', 'freeBeautyStuff_btn')],   
    [Markup.button.callback('👓 Оптика', 'freeOptica_btn'),     Markup.button.callback('🎨 Курси, ЛекціЇ', 'freeCourses_btn')],   
    [Markup.button.callback('🛋 Мебель', 'freeSofa_btn')],   
]

const MENU_WITH_CITIES_OF_HUMAN_AID = [
    [Markup.button.callback("Каунас", 'kaunas_humanAid_btn'), Markup.button.callback("Клайпеда", 'klaipeda_humanAid_btn')],
    [Markup.button.callback("Паневєжіс", 'panevezis_humanAid_btn'), Markup.button.callback("Aлітус", 'alitus_humanAid_btn')],
    [Markup.button.callback("Шяуляй", 'shaulyay_humanAid_btn'), Markup.button.url("Інші міста", 'https://www.redcross.lt/kontakti-z-organizaciyami-yaki-nadayut-gumanitarnu-dopomogu-ukrayincyam-ua')],
]

const LIST_TEXT_OF_FREE_STUFF = [financeText.freeSport, financeText.freeTransport, financeText.freeForChildrenAndMothers,
financeText.freeKonsulska, financeText.freeArtEvents, financeText.freeWorkConsultation, financeText.freeTranslator, financeText.freePrintout,
financeText.freeСommunication, financeText.freeLegalAid, financeText.freePatsStuff, financeText.freeBeautyStauff, financeText.freeMedOptica,
financeText.freeLessonsAndCourses, financeText.freeSofa]

//menu buttons for free block
const MENU_BUTTONS = [
    [Markup.button.callback(BACKWARD_BTN, 'back_btn'), Markup.button.callback(FORWARD_BTN, 'forward_btn')]
];

const MENU_BUTTONS_SITES = [
    [Markup.button.callback('Сайти довідники', 'dovidnuku_btn'), Markup.button.callback('Facebook групи', 'facebookGroups_btn')],
    [Markup.button.callback('Instagram канали', 'instagramGroups_btn'), Markup.button.callback('Телеграм канали', 'telegramChannels_btn')]
]

module.exports.MAIN_MENU_ARRAY = MAIN_MENU_ARRAY;
module.exports.MAIN_MENU_NAMES = MAIN_MENU_NAMES;
module.exports.MENU_HEALTH = MENU_HEALTH;
module.exports.RETURN_BACK_TO_SITES = RETURN_BACK_TO_SITES;
module.exports.MENU_BUTTONS_SITES = MENU_BUTTONS_SITES;
module.exports.MENU_WITH_CITIES_OF_HUMAN_AID = MENU_WITH_CITIES_OF_HUMAN_AID;
module.exports.LIST_TEXT_OF_FREE_STUFF = LIST_TEXT_OF_FREE_STUFF;
module.exports.MENU_FREE_STUFF = MENU_FREE_STUFF;
module.exports.MENU_EDUCATION = MENU_EDUCATION;
module.exports.MENU_BUTTONS = MENU_BUTTONS;
module.exports.FORWARD_BTN = FORWARD_BTN;
module.exports.BACKWARD_BTN = BACKWARD_BTN;
module.exports.RETURN_BACK_TO_MENU = RETURN_BACK_TO_MENU;
module.exports.RETURN_BACK_TO_FINANCE = RETURN_BACK_TO_FINANCE;
module.exports.RETURN_BACK_TO_WORK = RETURN_BACK_TO_WORK;
module.exports.RETURN_BACK_TO_FREE_STUFF = RETURN_BACK_TO_FREE_STUFF;
module.exports.MENU_ABOUT_WORK = MENU_ABOUT_WORK;
module.exports.RETURN_BACK_TO_EDUCATION = RETURN_BACK_TO_EDUCATION;
module.exports.MENU_ABOUT_EXTRACURRICULARS = MENU_ABOUT_EXTRACURRICULARS;
module.exports.RETURN_BACK_TO_FIRST = RETURN_BACK_TO_FIRST;
module.exports.RETURN_BACK_TO_HUMANAID_MENU = RETURN_BACK_TO_HUMANAID_MENU;
module.exports.RETURN_BACK_TO_GROUPLESSONS_EDUCATION = RETURN_BACK_TO_GROUPLESSONS_EDUCATION;