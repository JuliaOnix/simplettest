const { Telegraf, Markup } = require("telegraf");

const RETURN_BACK_TO_WORK = '🔙 Повернутися до «Робота»';
const RETURN_BACK_TO_FIRST = '🔙 Повернутися до «По Прибутті»';
const RETURN_BACK_LOOK_FOR_APART = Markup.button.callback('🔙 Повернутися до «🔎 Пошук житла»', "return_back_to_look_for_apart");
const RETURN_BACK_TO_GROUPLESSONS_EDUCATION = '🔙 Повернутися до «Гуртки, ЛекціЇ, Уроки»';
const RETURN_BACK_TO_SITES = Markup.button.callback('🔙 Повернутися до «Каталог сайтів»', "return_to_sites_block_btn");

//menu for education block
const MENU_EDUCATION = [
    [Markup.button.callback('Онлайн навчання', 'showOnlineEducation_btn'), Markup.button.callback('Професійне навчання', 'profEduc_btn')],
    [Markup.button.callback('Для спортсменів', 'sportEduc_btn'),  Markup.button.callback("Вища освіта (університети)", "univer_btn")],
];

module.exports.RETURN_BACK_TO_SITES = RETURN_BACK_TO_SITES;
module.exports.MENU_EDUCATION = MENU_EDUCATION;
module.exports.RETURN_BACK_TO_WORK = RETURN_BACK_TO_WORK;
module.exports.RETURN_BACK_LOOK_FOR_APART = RETURN_BACK_LOOK_FOR_APART;
module.exports.RETURN_BACK_TO_FIRST = RETURN_BACK_TO_FIRST;
module.exports.RETURN_BACK_TO_GROUPLESSONS_EDUCATION = RETURN_BACK_TO_GROUPLESSONS_EDUCATION; 