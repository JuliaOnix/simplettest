const {Markup} = require("telegraf");
const constans = require('../fileCostants')
const educationShcools = require('../../text/educationAndSportInfo')

//ANCHOR I AM HERE
async function univer(ctx) {
    console.log(`${ctx.from.username} univer_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.universities, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_EDUCATION])
    })
}

async function sportEducation(ctx) {
    console.log(`${ctx.from.username} sportEduc_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.sportPlaces, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_EDUCATION])
    })
}

async function profEducation(ctx) {
    console.log(`${ctx.from.username} profEduc_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.profEducation, 
    {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_EDUCATION])
    })
}

//NOTE позже перенести этот блок в FREESTUFF -> ART
async function showMoreArtEvents(ctx) {
    console.log(ctx.from.first_name, ctx.from.username + ' freeshowMoreArtEvents_btn')
    await ctx.answerCbQuery();
    return await ctx.editMessageText(educationShcools.artfree, {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [constans.RETURN_BACK_TO_FREE_STUFF]
        ])
    })
}

//art in FREE STUFF MENU
async function showArtAndTeatr(ctx) {
    console.log(`${ctx.from.username} artANDTeatr_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.artfree, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_btn')]
        ])
    })
}

async function showSportLessons(ctx) {
    console.log(`${ctx.from.username} sportLessons_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.sportfree, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_btn')]
        ])
    })
}

async function showLections(ctx) {
    console.log(`${ctx.from.username} lections_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.groupsLections, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_btn')]
        ])
    })
}

//art in EDUCATION MENU
async function showArtAndTeatrEDUCATION(ctx) {
    console.log(`${ctx.from.username} artANDTeatr_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.artfree, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_EDUCATION_btn')]
        ])
    })
}

async function showSportLessonsEDUCATION(ctx) {
    console.log(`${ctx.from.username} sportLessons_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.sportfree, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_EDUCATION_btn')]
        ])
    })
}

async function showLectionsEDUCATION(ctx) {
    console.log(`${ctx.from.username} lections_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.groupsLections, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_EDUCATION_btn')]
        ])
    })
}



async function showHelpFromEd(ctx) {
    console.log(`${ctx.from.username} helpFromEduc_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.helpInThings, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback(constans.RETURN_BACK_TO_GROUPLESSONS_EDUCATION, 'return_back_In_GroupMenu_btn')]
        ])
    })
}

async function showMenuGroupChildren(ctx) {
    console.log(`${ctx.from.username} lessonsforChildren_btn choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText('ГУРТКИ, ЛЕКЦІЇ, УРОКИ', {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_EXTRACURRICULARS)
    }); 
}

async function showMenuGroupChildren_in_EDUCATION_MENU(ctx) {
    console.log(`${ctx.from.username} ${ctx.from.first_name} showMenuGroupChildren_in_EDUCATION_MENU choosed`)
    await ctx.answerCbQuery();
    await ctx.editMessageText('ГУРТКИ, ЛЕКЦІЇ, УРОКИ', {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_EXTRACURRICULARSFOR_EDUCATIONMENU)
    }); 
}

async function returnBackFromGroupChildren(ctx) {
    console.log(`${ctx.from.username} return_back_In_GroupMenu_btn`)
    await ctx.answerCbQuery();
    await ctx.editMessageText('ГУРТКИ, ЛЕКЦІЇ, УРОКИ', {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_EXTRACURRICULARS)
    });
}

async function returnBackFromGroupChildrenTOEDUCATION(ctx) {
    console.log(`${ctx.from.username} return_back_In_GroupMenu_btn`)
    await ctx.answerCbQuery();
    await ctx.editMessageText('ГУРТКИ, ЛЕКЦІЇ, УРОКИ', {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard(constans.MENU_ABOUT_EXTRACURRICULARSFOR_EDUCATIONMENU)
    });
}

async function showOnlineEducation(ctx) {
    console.log(`${ctx.from.username} showOnlineEducation_btn`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.freeEducationOnlinePlatforms, {
        parse_mode: "HTML", 
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([constans.RETURN_BACK_TO_EDUCATION])
    });
}

async function returnBack(ctx) {
    console.log(`${ctx.from.username} returnBackEducation_btn`)
    await ctx.answerCbQuery();
    await ctx.editMessageText(educationShcools.generalInfoAboutSchool, {
        parse_mode: "HTML", 
        disable_web_page_preview: false,
        ...Markup.inlineKeyboard(constans.MENU_EDUCATION)
    })
}

module.exports.univer = univer;
module.exports.profEducation = profEducation;
module.exports.sportEducation = sportEducation;
module.exports.showMoreArtEvents = showMoreArtEvents;
module.exports.showArtAndTeatr = showArtAndTeatr;
module.exports.showSportLessons = showSportLessons;
module.exports.showLections = showLections;
module.exports.showHelpFromEd = showHelpFromEd;
module.exports.returnBack = returnBack;
module.exports.showMenuGroupChildren = showMenuGroupChildren;
module.exports.showOnlineEducation = showOnlineEducation;
module.exports.returnBackFromGroupChildren = returnBackFromGroupChildren;
module.exports.showMenuGroupChildren_in_EDUCATION_MENU = showMenuGroupChildren_in_EDUCATION_MENU;
module.exports.returnBackFromGroupChildrenTOEDUCATION = returnBackFromGroupChildrenTOEDUCATION;
module.exports.showArtAndTeatrEDUCATION = showArtAndTeatrEDUCATION;
module.exports.showSportLessonsEDUCATION = showSportLessonsEDUCATION;
module.exports.showLectionsEDUCATION = showLectionsEDUCATION;