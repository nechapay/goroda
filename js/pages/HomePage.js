const HomePage = {
  name: 'HomePage',
  template:
    '<div id="map" class="map-container">' +
    '<div class="map">' +
    '<svg\n' +
    '   xmlns:dc="http://purl.org/dc/elements/1.1/"\n' +
    '   xmlns:cc="http://creativecommons.org/ns#"\n' +
    '   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n' +
    '   xmlns:svg="http://www.w3.org/2000/svg"\n' +
    '   xmlns="http://www.w3.org/2000/svg"\n' +
    '   xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
    '   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n' +
    '   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n' +
    '   width="598.66394"\n' +
    '   height="593.01941"\n' +
    '   viewBox="0 0 598.66394 593.01943"\n' +
    '   version="1.1"\n' +
    '   id="svg8"\n' +
    '   inkscape:version="0.92.3 (unknown)"\n' +
    '   sodipodi:docname="map.svg">\n' +
    '  <defs id="defs2">' +
    '    <pattern id="imageHero1" x="-1" y="1" height="8" width="8"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="8" height="8" xlink:href="./img/hero.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageHero2" x="10" y="1" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="12" height="12" xlink:href="./img/hero.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageHero3" x="-6" y="5" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="12" height="12" xlink:href="./img/hero.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageHero4" x="8" y="0" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="12" height="12" xlink:href="./img/hero.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageHero5" x="-2" y="8" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="14" height="14" xlink:href="./img/hero.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageHero6" x="-2" y="0" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="14" height="14" xlink:href="./img/hero.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageHero7" x="1" y="4" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="16" height="16" xlink:href="./img/hero.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageGlory1" x="2" y="-5" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="16" height="16" xlink:href="./img/glory.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageGlory2" x="4" y="-2" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="16" height="16" xlink:href="./img/glory.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageGlory3" x="0" y="1" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="16" height="16" xlink:href="./img/glory.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageGlory4" x="0" y="4" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="16" height="16" xlink:href="./img/glory.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageGlory5" x="0" y="-2" height="12" width="12"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="12" height="12" xlink:href="./img/glory.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageGlory6" x="0" y="2" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="16" height="16" xlink:href="./img/glory.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageGlory7" x="0" y="5" height="16" width="16"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="16" height="16" xlink:href="./img/glory.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageTank1" x="27" y="7" height="64" width="64"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="24" height="24" xlink:href="./img/tank.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageTank2" x="36" y="23" height="64" width="64"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="20" height="20" xlink:href="./img/tank.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageTank3" x="13" y="35" height="64" width="64"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="24" height="24" xlink:href="./img/tank.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageTank4" x="17" y="0" height="64" width="64"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="16" height="16" xlink:href="./img/tank.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageDE" x="0" y="35" height="64" width="64"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="32" height="32" xlink:href="./img/de.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageFIN" x="34" y="-3" height="64" width="64"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="28" height="28" xlink:href="./img/fin.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageJP" x="-14" y="1" height="64" width="64"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="32" height="32" xlink:href="./img/jp.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imagePL" x="0" y="10" height="32" width="32"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="32" height="32" xlink:href="./img/pl.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageMON" x="4" y="28" height="32" width="32"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="22" height="22" xlink:href="./img/mon.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageTUR" x="-2" y="0" height="32" width="32"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="32" height="32" xlink:href="./img/tur.jpg"></image>\n' +
    '    </pattern>' +
    '    <pattern id="imageSVE" x="20" y="2" height="32" width="32"\n' +
    '             patternUnits="userSpaceOnUse">\n' +
    '      <image x="0" y="0" width="32" height="32" xlink:href="./img/sve.jpg"></image>\n' +
    '    </pattern>' +
    '  </defs>' +
    '  <image\n' +
    '     y="-2.220446e-16"\n' +
    '     x="0"\n' +
    '     id="image877"\n' +
    '     xlink:href="./img/map.jpg"\n' +
    '     preserveAspectRatio="none"\n' +
    '     height="303.01941"\n' +
    '     width="597.66394" />\n' +
    '  <g\n' +
    '     inkscape:label="Layer 1"\n' +
    '     inkscape:groupmode="layer"\n' +
    '     id="layer1"\n' +
    '     transform="translate(-2.2886286,-1.8243716)" />\n' +
    '  <circle\n' +
    '     id="place1"\n' +
    '     cx="19"\n' +
    '     cy="199"\n' +
    '     r="3"\n' +
    '     class="interacted hero1"' +
    '     @click="handleClick(\'place1\')"/>\n' +
    '  <circle\n' +
    '     id="place2"\n' +
    '     cx="160"\n' +
    '     cy="71"\n' +
    '     r="6"' +
    '     class="interacted hero2"' +
    '     @click="handleClick(\'place2\')"/>\n' +
    '  <circle\n' +
    '     id="place3"\n' +
    '     cx="16"\n' +
    '     cy="188"\n' +
    '     r="5"\n' +
    '     class="interacted hero3"' +
    '     @click="handleClick(\'place3\')"/>\n' +
    '  <circle\n' +
    '     id="place4"\n' +
    '     cx="78"\n' +
    '     cy="152"\n' +
    '     r="5"\n' +
    '     class="interacted hero4"' +
    '     @click="handleClick(\'place4\')"/>\n' +
    '  <circle\n' +
    '     id="place5"\n' +
    '     cx="69"\n' +
    '     cy="128"\n' +
    '     r="6"\n' +
    '     class="interacted hero5"' +
    '     @click="handleClick(\'place5\')"/>\n' +
    '  <circle\n' +
    '     id="place6"\n' +
    '     cx="69"\n' +
    '     cy="200"\n' +
    '     r="7"\n' +
    '     class="interacted hero6"' +
    '     @click="handleClick(\'place6\')"/>\n' +
    '  <circle\n' +
    '     id="place7"\n' +
    '     cx="89"\n' +
    '     cy="141"\n' +
    '     r="8"\n' +
    '     class="interacted hero7"' +
    '     @click="handleClick(\'place7\')"/>\n' +
    '  <circle\n' +
    '     id="place8"\n' +
    '     cx="53"\n' +
    '     cy="162"\n' +
    '     r="5"\n' +
    '     class="interacted glory1"' +
    '     @click="handleClick(\'place8\')"/>\n' +
    '  <circle\n' +
    '     id="place9"\n' +
    '     cx="78"\n' +
    '     cy="102"\n' +
    '     r="6"\n' +
    '     class="interacted glory2"' +
    '     @click="handleClick(\'place9\')"/>\n' +
    '  <circle\n' +
    '     id="place10"\n' +
    '     cx="150"\n' +
    '     cy="105"\n' +
    '     r="7"\n' +
    '     class="interacted glory3"' +
    '     @click="handleClick(\'place10\')"/>\n' +
    '  <circle\n' +
    '     id="place11"\n' +
    '     cx="82"\n' +
    '     cy="126"\n' +
    '     r="4"\n' +
    '     class="interacted glory4"' +
    '     @click="handleClick(\'place11\')"/>\n' +
    '  <circle\n' +
    '     id="place12"\n' +
    '     cx="21"\n' +
    '     cy="207"\n' +
    '     r="3"\n' +
    '     class="interacted glory5"' +
    '     @click="handleClick(\'place12\')"/>\n' +
    '  <circle\n' +
    '     id="place13"\n' +
    '     cx="67"\n' +
    '     cy="170"\n' +
    '     r="5"\n' +
    '     class="interacted glory6"' +
    '     @click="handleClick(\'place13\')"/>\n' +
    '  <circle\n' +
    '     id="place14"\n' +
    '     cx="71"\n' +
    '     cy="142"\n' +
    '     r="4"\n' +
    '     class="interacted glory7"' +
    '     @click="handleClick(\'place14\')"/>\n' +
    '  <circle\n' +
    '     id="place15"\n' +
    '     cx="165"\n' +
    '     cy="210"\n' +
    '     r="6"\n' +
    '     class="interacted tank1"' +
    '     @click="handleClick(\'place15\')"/>\n' +
    '  <circle\n' +
    '     id="place16"\n' +
    '     cx="110"\n' +
    '     cy="160"\n' +
    '     r="6"\n' +
    '     class="interacted tank2"' +
    '     @click="handleClick(\'place16\')"/>\n' +
    '  <circle\n' +
    '     id="place17"\n' +
    '     cx="215"\n' +
    '     cy="238"\n' +
    '     r="7"\n' +
    '     class="interacted tank3"' +
    '     @click="handleClick(\'place17\')"/>\n' +
    '  <circle\n' +
    '     id="place18"\n' +
    '     cx="89"\n' +
    '     cy="135"\n' +
    '     r="4"\n' +
    '     class="interacted tank4"' +
    '     @click="handleClick(\'place18\')"/>\n' +
    '  <circle\n' +
    '     id="place19"\n' +
    '     cx="10"\n' +
    '     cy="50"\n' +
    '     r="8"\n' +
    '     class="interacted de"' +
    '     @click="handleClick(\'place19\')"/>\n' +
    '  <circle\n' +
    '     id="place20"\n' +
    '     cx="110"\n' +
    '     cy="75"\n' +
    '     r="8"\n' +
    '     class="interacted fin"' +
    '     @click="handleClick(\'place20\')"/>\n' +
    '  <circle\n' +
    '     id="place21"\n' +
    '     cx="65"\n' +
    '     cy="50"\n' +
    '     r="8"\n' +
    '     class="interacted sve"' +
    '     @click="handleClick(\'place21\')"/>\n' +
    '  <circle\n' +
    '     id="place22"\n' +
    '     cx="575"\n' +
    '     cy="273"\n' +
    '     r="8"\n' +
    '     class="interacted jp"' +
    '     @click="handleClick(\'place22\')"/>\n' +
    '  <circle\n' +
    '     id="place23"\n' +
    '     cx="335"\n' +
    '     cy="295"\n' +
    '     r="8"\n' +
    '     class="interacted mon"' +
    '     @click="handleClick(\'place23\')"/>\n' +
    '  <circle\n' +
    '     id="place24"\n' +
    '     cx="10"\n' +
    '     cy="240"\n' +
    '     r="8"\n' +
    '     class="interacted tur"' +
    '     @click="handleClick(\'place24\')"/>\n' +
    '  <circle\n' +
    '     id="place25"\n' +
    '     cx="15"\n' +
    '     cy="90"\n' +
    '     r="8"\n' +
    '     class="interacted pl"' +
    '     @click="handleClick(\'place25\')"/>\n' +
    '</svg>' +
    '</div>' +
    '<div :class="infoClass">' +
    '<transition name="fade">' +
    '<div v-if="isInfo" class="card mb-3">\n' +
    '  <img class="card-img-top" :src="activePlace.src" :alt="activePlace.title">\n' +
    '  <div class="card-body">\n' +
    '    <h5 class="card-title">{{activePlace.title}}</h5>\n' +
    '    <p v-html="activePlace.description" class="card-text"></p>\n' +
    '    <button role="button" class="btn btn-outline-primary" @click="hidePlace">Закрыть</button>' +
    '  </div>\n' +
    '</div>' +
    '</transition>' +
    '</div>' +
    '</div>',
  data() {
    return {
      places: {
        place1: {
          description:
            'Город расположен на побережье самого теплого моря России, его порт занимает первое место в стране по грузоперевозкам и является крупнейшим производителем цемента.',
          src: './img/place1.jpg',
          title: 'Город-герой Новороссийск - Краснодарский край'
        },
        place2: {
          description:
            'Город расположен на побережье незамерзающего моря России, является самым северным незамерзающим портом. В городе можно увидеть полярный день и полярную ночь.',
          src: './img/place2.jpg',
          title: 'Город-герой Мурманск - Мурманская область'
        },
        place3: {
          description:
            'Город на полуострове, на берегу пролива, соединяющего два моря. Был  одним из первых населенных пунктов, попавших под удар немецко-фашистских войск в начале войны. За годы войны через него четырежды проходила линия фронта и город был дважды оккупирован немецко-фашистскими войсками. Является  древнейшим городом мира, еще в 7 в. до н.э. переселенцами из Милета на месте него была основана греческая колония Пантикапей, а в 5 в. до н.э. он стал столицей Боспорского Царства.',
          src: './img/place3.jpg',
          title: 'Город-герой Керчь - республика Крым'
        },
        place4: {
          description:
            'Фашисты бросили на взятие этого города свои отборные войска: три танковых дивизии, одну моторизованную и полк «Великая Германия», но  город выстоял! Враг не смог его захватить. Город известен как оружейная кузница России, пряниками и чугуном.',
          src: './img/place4.jpg',
          title: 'город-герой Тула - Тульская область'
        },
        place5: {
          description:
            'С началом Великой Отечественной войны город  оказался на пути главного удара фашистских войск по направлению к Москве.  Один из древнейших городов России, на берегу Днепра.',
          src: './img/place5.jpg',
          title: 'Город-герой Смоленск - Смоленская область'
        },
        place6: {
          description:
            'Свое первое название - Царицын - согласно преданию, город получил от реки Царица.  17 июля 1942 года началось одно из самых великих и масштабных сражений в истории Второй мировой войны. Несмотря на стремление фашистов захватить город как можно скорее, осада  продолжалась 200 долгих, кровопролитных дней и ночей, но  город остался непобежденным, противник остановлен. Эта победа стала переломной в войне и  одной из самых кровавых в истории человечества.',
          src: './img/place6.jpg',
          title: 'Город-герой Волгоград - Волгоградская область'
        },
        place7: {
          description:
            'Город, ставший символом мужества не только воинов, но и всех советских людей, вставших на его защиту от врага. Битва за город – важное военно-политическое событие, предопределившее изменения в дальнейшем ходе Великой Отечественной и Второй мировой войн. 7 ноября 1941 года, по традиции, на  площади состоялся военный парад, как выражение непреклонной решимости советского народа, его силы и уверенности в победе.',
          src: './img/place7.jpg',
          title: 'Город-герой Москва'
        },
        place8: {
          description:
            'Старинный русский город основан в 1593 г. В годы Великой Отечественной войны стал   эпицентром жестоких сражений в ходе Курской битвы. Город был дважды оккупирован немцами, в 1943 году за него велись кровопролитные бои, в результате которых он был почти полностью разрушен.   Этот город первый в списке «Городов воинской Славы» и первый город «воинского салюта»',
          src: './img/place8.jpg',
          title: 'Белгород'
        },
        place9: {
          description:
            'Город-опора России, колыбель российской государственности, никогда не сдавшийся врагу. Невская битва и Чудское озеро, Куликово поле и битва при Грюнвальде помнят поступь дружины. Поморы, бороздившие Балтийское и Белое моря, торговавшие с Византией и Ганзой. В годы ВОВ был захвачен испанской «Голубой дивизией» беспощадно грабившей город и его жителей.',
          src: './img/place9.jpg',
          title: 'Псков'
        },
        place10: {
          description:
            'Основан мореходами — поморами, осваивавшими Русский север. Город-порт, навеки связанный с суровым Белым морем. В годы ВОВ стратегический порт наряду с Мурманском принимавшим союзные грузы по ленд-лизу. Судостроители отремонтировали и построили множество кораблей и судов для Северного флота.',
          src: './img/place10.jpg',
          title: 'Архангельск'
        },
        place11: {
          description:
            'Город был взят немецкими войсками в октябре 1941 года. В результате боевых действий в 1941—1943 годах за 17 месяцев оккупации был разрушен до основания. 3 марта 1943 года город был освобожден войсками 30-й армии Западного фронта. Является первым по течению городом на Волге.  Александр Твардовский написал стихотворение  о событиях битвы за этот город в 1942 году, в один из самых напряжённых моментов Великой Отечественной войны.',
          src: './img/place11.jpg',
          title: 'Ржев'
        },
        place12: {
          description:
            'Период Великой Отечественной войны является одним из наиболее героических в истории  этого города . Через него началась эвакуация промышленных предприятий и населения юга СССР. Город превратился в гигантский эвакогоспиталь, ежедневно по два-три теплохода приходили в  порт с тысячами раненных на борту. Все больницы, школы, здравницы, детсады и пионерлагеря были переоборудованы под госпитали. Город подвергался жесточайшим бомбардировкам и обстрелу, гитлеровцы стремились сравнять его с землей. Кровопролитные бои развернулись на подступах к городу, но фашистские войска были остановлены.',
          src: './img/place12.jpg',
          title: 'Туапсе'
        },
        place13: {
          description:
            'Древнейший русский город  знаменит тем, что его существование тесно и неразрывно связано с важнейшими датами и страницами отечественной истории.  В средние века он был форпостом державы на юго-восточных границах Московского государства и защищал столицу нашей Родины от набегов кочевых народов (крымских и ногайских татар). В петровскую эпоху сухопутный Воронеж стал родиной военно-морского и торгового флота. В предвоенные годы  родиной Воздушно-десантных войск. Двуглавый орёл в золотом поле на гербе города был высочайше пожалован городу в 1781 году  в знак особых заслуг в становлении и развитии российского государства.',
          src: './img/place13.jpg',
          title: 'Воронеж'
        },
        place14: {
          description:
            'Город был основан в 1146 году на месте древнего поселения славян-вятичей, он на год старше  Москвы. «Злой город» так назвали монгольские завоеватели этот город воинской славы России. Во время Великой Отечественной войны он оказался на пути немецко-фашистких захватчиков на подступах к Москве, 8 октября 1941 года был захвачен гитлеровскими войсками. Почти три месяца до 27 декабря продолжались кровопролитные бои за город. 28 декабря 1941 года город был освобожден.',
          src: './img/place14.jpg',
          title: 'Козельск. Калужская область'
        },
        place15: {
          description:
            'Столица боевых машин- Танкоград. Располагался он в городе  на Урале и  давал фронту каждый пятый танк. За все время войны он дал фронту 18 тыс. танков и самоходных артиллерийских установок, 48,5 тыс. танковых дизельмоторов, 17,7 млн заготовок боеприпасов. В 1942 году этот  завод отправил на фронт первую партию произведенных в его цехах Т-34, массовый выпуск которых здесь наладили всего за 33 дня.',
          src: './img/place15.jpg',
          title: 'Челябинск'
        },
        place16: {
          description:
            'Постановлением №1 от 1 июля 1941 года Государственный комитет обороны СССР обязал судоремонтный завод «Красное Сормово»  перейти на выпуск средних танков Т-34. Согласно поставленной задаче, в 1941 году предприятие должно было выпустить 700-750 танков, в 1942 году — уже 3 тыс. танков. Производство полностью перестроили за полтора месяца, и уже в октябре 1941 года первый эшелон танков Т-34 отправился на оборону Москвы.',
          src: './img/place16.jpg',
          title: 'Нижний Новгород'
        },
        place17: {
          description:
            'История выпуска танков в этом городе –миллионере Сибири насчитывает почти 80 лет, она берет свое начало со времен Великой Отечественной войны, когда паровозоремонтный завод стал  заводом танковой промышленности. Всего с 1941 года из стен предприятия вышло около 30 000 танков разных модификаций. После войны это предприятие изготовило 2473 танка Т-54, а в 1958 году завод приступил к созданию Т-55 – самого массового советского танка: за последующие 20 лет с конвейера сошло 12 870 машин. Сегодня Вооруженные силы РФ комплектуются современными Т-80БВМ с мощным газотурбинным двигателем.',
          src: './img/place17.jpg',
          title: 'Омск'
        },
        place18: {
          description:
            'От вагонов к танкам! До войны завод был чисто гражданским: выпускал трамваи, поезда метро, электрички. Но война внесла свои коррективы. Почти сразу после ее начала завод получил номер 592 и занялся ремонтом танков и  производством легкого танка Т-80. Определите этот город –спутник на северо-востоке столицы.',
          src: './img/place18.jpg',
          title: 'Мытищи'
        },
        place19: {
          description:
            'Во времена Петра I учёных, ремесленников и военных этой страны приглашали в Россию и наделяли значительными привилегиями.В ходе Семилетней войны, которую вела  Россия с   этой страной,  русская армия смогла завоевать некоторые ее территории. В ходе длительной войны 20 века, Россия одержала полную победу, разгромив армию этой страны.',
          src: './img/19.png',
          title: 'Германия'
        },
        place20: {
          description:
            '1939-1940 года это война известна как Зимняя война  между СССР и этой страной. Основным рубежом обороны этой страны  была "линия Маннергейма"— уникальные, неприступные фортификационные сооружения. Главным архитектором линии Маннергейма была сама природа. Страна тысячи озер»  манит туристов красивой северной природой, жаркой сауной, богатой «горнолыжкой» и вкусной рыбной едой.',
          src: './img/20.png',
          title: 'Финляндия'
        },
        place21: {
          description:
            'Начало войн между этой страной и Русью восходит к середине XIII век. Северная война была крупнейшей в череде войн. Она длилась с 1700 по 1721 год ,с окончанием этой  войны в Европе возникла новая, с сильным флотом и армией, империя — Российская со столицей Санкт-Петербург на побережье Балтийского моря. Это государство-исключение,  представляющее собой совесть мира, страна, обеспечивающая поддержку своих граждан от колыбели и до последних дней их жизни.',
          src: './img/21.png',
          title: 'Швеция'
        },
        place22: {
          description:
            'На рубеже XIX - XX веков происходила острейшая борьба великих держав за «последние куски неподеленного мира. В результате столкновения захватнических устремлений царской России и милитаристической политики этой страны,  возникла война 1904-1905 годов.  Главной проблемой стоящей на пути полноценного развития отношений между обеими сторонами, остался спор о принадлежности определенной территории, мешающий подписанию мирного договора. Эта страна – архипелаг, сейсмически активная  зона.',
          src: './img/22.png',
          title: 'Япония'
        },
        place23: {
          description:
            'В XIII в. народам Руси пришлось вынести тяжелую борьбу с  завоевателями из этой страны, которые владычествовали в русских землях до XV в и  надолго затормозили экономическое развитие Руси, разрушили ее сельское хозяйство, подорвали культуру, способствовали углублению  разобщенности Руси и обособления отдельных ее частей. Переломным моментом стал 1380 г., когда многотысячная армия этой страны была разгромлена на Куликовом поле. Окончательное же освобождение произошло в 1480 г. при государе Иване III. Это внутриконтинентальная страна, население которой исповедует буддизм.',
          src: './img/23.jpg',
          title: 'Монголия'
        },
        place24: {
          description:
            'Российская и эта империи никогда не были добрыми соседями. На протяжении истории они воевали между собой двенадцать раз, включая Первую мировую войну, в результате которой обе империи перестали существовать. Войны шли за причерноморские земли и Кавказ,  за контроль над проливами. В  среднем, одну войну от другой отделяло около 20 лет. Страна расположена на полуострове, лежит в двух частях Света.',
          src: './img/24.png',
          title: 'Турция'
        },
        place25: {
          description:
            'Войны между Россией (Московским государством) и этим государством второй половине 16 – третьей четверти 17 в. велись за обладание западно-русскими землями. Эта страна Восточной Европы, на севере омывается Балтийским морем. Краковяк – народный танец этой страны.',
          src: './img/25.png',
          title: 'Польша'
        }
      },
      isInfo: false,
      activePlace: null
    }
  },
  computed: {
    infoClass: function () {
      return {
        info: true,
        info_active: this.isInfo
      }
    }
  },
  methods: {
    handleClick(placeName) {
      if (!this.isInfo) {
        this.showPlace(this.places[placeName])
      }
    },
    showPlace(place) {
      this.activePlace = place
      this.isInfo = true

      setTimeout(() => {
        document.getElementById('map').scrollTo(0, 0)
      }, 400)
    },
    hidePlace() {
      this.isInfo = false
      this.activePlace = null
    }
  }
}
