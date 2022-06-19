const sites = `
<b>Каталог медичних поослуг</b> 
(аптеки, поліклініки):
https://www.medicina.lt/ru/veiklos

<b>Замовлення ліків онлайн</b> (нерецептурные)
https://eurovaistine.lt
https://camelia.lt
https://benu.lt

<b>Записатися на beauty-послуги</b>
Зручно бронювати різноманітні послуги краси
https://www.treatwell.lt/

<b>Доставка їжи/продуктів</b>
Готові страви/ресторанні страви:
https://food.bolt.eu
https://wolt.com/ru
Магазинні продукти:
https://barbora.lt
https://lastmile.lt
https://www.rimi.lt/e-parduotuve/ru

<b>Фізичні (не онлайн) магазини електронікі та побутової техніки</b>
https://topocentras.lt 
https://elektromartk.lt 
https://euronics.lt

<b>Універсальні онлайн-магазини (на кшталт амазону, але тільки литовські):</b>
https://pigu.lt/ru/
https://varle.lt/
https://rde.lt/home/ru/

<b>Комп'ютерна техніка онлайн-магазини:</b>
https://skytech.lt
https://kilobaitas.lt
https://varle.lt

<b>Автомобілі (купівля-продаж):</b>
https://ru.autoplius.lt/
https://ru.autogidas.lt/
https://alio.lt/
https://skelbiu.lt/

<b>Онлайн магазини одягу</b>
https://aboutyou.lt
https://asos.com
https://zalando.lt
https://vinted.lt

<b>Онлайн магазини взуття</b>
https://sizeer.lt
https://eavalyne.lt
https://danija.lt
https://este.lt
https://famclub.lt

<b>Купити прапор України:</b>
<a href="https://brandus.lt/pirkti-internetu/veliavos/valstybiu-veliavos">https://brandus.lt</a>
<a href="https://www.akabaltic.lt/veliavu-gamyba/ukrainos-veliavos.html">https://www.akabaltic.lt</a>
<a href="https://koalaprint.lt/produktai/veliavu-gamyba/ukrainos-veliavos/">https://koalaprint.lt</a>
<a href="https://flagmanas.lt/ukrainos-atributika/">https://flagmanas.lt</a>

<b>Сайти з новинами:</b>
https://www.delfi.lt/ru/
https://rusradio.lt/
https://www.lrt.lt/ru/novosti
https://www.govilnius.lt/visit-vilnius
`

const telegramChannelsList = `
<b>Групи у телеграмі:</b>

<b><a href="https://t.me/ua_lt_channel">Довідник | Заходи | Мітинги</a></b>

<b><a href="https://t.me/abflithuania">АБФ в Литве</a></b>
(Канал волонтеров. Обучающие мероприятия )

<b><a href="https://t.me/ukrainpatriot">Украинцы в Литве</a></b>

<b><a href="https://t.me/ukraincilitva">Українці у Литві</a></b>

<b><a href="https://t.me/vilnius_ukr">Вільнюс. Ми з України</a></b>

<b><a href="https://t.me/zustrichiiznayomsvavkaunasi">Українці KAUNAS</a></b>

<b><a href="https://t.me/ukraincivklaipedi">Українці в Клайпеді</a></b>

<b><a href="https://t.me/+Q6KPSibr39hlOGUy">Укринці в Паланзі</a></b>

<b><a href="https://t.me/beauty_industry_chat">Українські мами в Каунасі</a></b> 

<b><a href="https://t.me/+JTp703gf23ViNmIy">Доставка/перевозка людей/грузов в Украину и обратно</a></b>

<b><a href="https://t.me/mamavilnius">Мама в Вильнюсе</a></b>

<b><a href="https://t.me/vilnius_lithuania">ВильнюсЧат × Литва</a></b>

<b><a href="https://t.me/vilnius_dog">Vilnius Pet’s Community</a></b>
(Чат для тех, у кого есть питомцы.)

<b><a href="https://t.me/spravkavilnius">Нужный справочник Вильнюс</a></b>
(Списки услуг в Вильнюсе: маникюр, педикюр, фотографы и т.п.)

<b><a href="https://t.me/vilniusmarket">Vilnius Market</a></b>
(Покупка/Продажа в Вильнюсе)

<b><a href="https://t.me/belarusVLN">Чат - Беларусы Вільні</a></b>
(Чат беларусов, но тоже можно задавать вопросы о жизне в Литве и досуге.)

<b><a href="https://t.me/rudelfi">Новости Литвы</a></b>

<b><a href="https://t.me/rradiolt">Новости Литвы</a></b>
` 

const facebookGroupsText = `
<b>Групи у фейсбуці:</b>

<b><a href="https://www.facebook.com/ukr.embassy.Lithuania/">Ukrainos Ambasada Lietuvoje / Посольство України в Литві</a></b>

<b><a href="https://www.facebook.com/groups/2294077994171869">Українці у Литві / Украинцы в Литве / Ukrainiečiai Lietuvoje</a></b>

<b><a href="https://www.facebook.com/groups/5046154952110242">Українські діти у Литві - Ukrainos vaikai Lietuvoje</a></b>

<b><a href="https://www.facebook.com/%D0%A8%D0%B0%D1%85%D0%B8-%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0-%C5%A0achmatai-Ukraina-104103198962485">Шахи / Україна - Šachmatai / Ukraina</a></b>

<b><a href="https://www.facebook.com/groups/868903884507780/">Допомога українським родинам</a></b>

<b><a href="https://www.facebook.com/groups/356243299713614/">Українці в Каунасі</a></b>

<b><a href="https://www.facebook.com/groups/669398504323707">Українці в Укмерзі - Украинки и украинцы в Укмерге</a></b>

<b><a href="https://www.facebook.com/groups/286679646911263/">Допомога народу України</a></b>

<b><a href="https://www.facebook.com/groups/901162937247328/">Українки в Литві</a></b>

<b><a href="https://www.facebook.com/groups/3112002959126318/">Литва допомагає Україні</a></b>

<b><a href="https://www.facebook.com/groups/2294077994171869">Група українці ЛТ</a></b>
 
<b><a href="https://www.facebook.com/groups/371063444546375/posts/375909924061727/">Допомога для українців, Клайпеда</a></b>  

<b><a href="https://www.facebook.com/groups/668743400840858/">Купую в українців у LT</a></b>

<b><a href="https://www.facebook.com/groups/413914537172259/">Українці в Литві, м.Маріямполе</a></b>

<b><a href="https://www.facebook.com/groups/479655308899391/?ref=share">Група в fb Українці в Каунасі</a></b> 

<b><a href="https://www.facebook.com/groups/352386036806778/?ref=share">Українські психологи в Каунасі</a></b> 

<b><a href="https://www.facebook.com/groups/356243299713614/?ref=share">Ukrainiečiai Kaune - Украинцы в Каунасе</a></b> 

<b><a href="https://www.facebook.com/groups/471961771327433/?ref=share">Україночки в Каунасі 🇺🇦 Творче об'єднання</a></b> 

<b><a href="https://www.facebook.com/groups/2639955882956165">Русскоязычные девушки Вильнюса</a></b> 

<b>Группы Вильнюса, где отдают мебель и другие б/у вещи</b> 
<a href="https://www.facebook.com/groups/1822607451305797">Free your Stuff VILNIUS/Atiduotuvė</a>

<a href="https://www.facebook.com/groups/402245120175026">Vilniuje atiduodu už šokoladą arba kavą</a>

<a href="https://www.facebook.com/groups/496838900815085">Free atiduodu, dovanoju Vilnius</a>

<a href="https://www.facebook.com/groups/130415577697665">Atiduotuve Vilnius / Free your stuff</a>

<a href="https://www.facebook.com/groups/648801559074232">Dovanoju, atiduodu. VILNIUS</a>

<a href="https://www.facebook.com/groups/116329859740519">Барахолка в Литве</a>

<b>Отдам даром(группы в fb):</b>

<a href="https://www.facebook.com/groups/777531836529525">Каунас</a>

<a href="https://www.facebook.com/groups/668172780250851">Клайпеда</a>

<a href="https://www.facebook.com/groups/714686082617374">По всей Литве</a>

<a href="https://www.facebook.com/groups/dovanuoj">По всей Литве</a>


💅🏻💇🏻‍♀️ <b>Ищут моделей:</b>

<a href="https://www.facebook.com/groups/485814969203661">По всей Литве</a>

<a href="https://www.facebook.com/groups/390641094460378">По всей Литве</a>

<a href="https://www.facebook.com/groups/2323366677989432">По всей Литве</a>

<a href="https://www.facebook.com/groups/976573235815146">Каунас</a>

<a href="http://facebook.com/groups/249255388815100">Вильнюс</a>

<a href="https://www.facebook.com/groups/320430144999724">Вильнюс</a> 

<a href="https://www.facebook.com/groups/4263308243700099">Шяуляй</a>
`


const instagramPages = `
<b><a href='https://instagram.com/govilnius?igshid=YmMyMTA2M2Y='>GoVilnius</a></b> 
Новини, фотографії Вільнюса
`

module.exports.sites = sites;
module.exports.facebookGroupsText = facebookGroupsText;
module.exports.telegramChannelsList = telegramChannelsList;
module.exports.instagramPages = instagramPages;




