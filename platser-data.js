/* Complete expanderad data för alla platser i spelet */
const platserData = {
   "versailles": {
        namn: "Slottet i Versailles (Château de Versailles)",
        land: "Frankrike, Versailles",
        varldsdel: "Europa",
        bild: "lorena ponte.png",
        kortBeskrivning: "Europas mest storslagna barockpalats med Spegelsalen, kungliga paradvåningar och över 800 hektar trädgårdar.",
        fakta: [
            { titel: "Byggherre", värde: "Ludvig XIV (Solkungen)" },
            { titel: "Spegelsalen", värde: "73 m lång & 357 speglar" },
            { titel: "Parkyta", värde: "Drygt 800 hektar" },
            { titel: "Budget (4 dagar)", värde: "7 000–19 000 SEK / pers" }
        ],
        historia: "Versailles förvandlades under 1600-talet från ett anspråkslöst jaktslott till Europas mest storslagna barockpalats under Solkungen Ludvig XIV. Slottet blev symbolen för den franska absoluta monarkin och rymde vid sin höjdpunkt hela det franska hovet och regeringen. År 1871 utropades det tyska kejsardömet här och 1919 undertecknades det historiska fredsavtalet.",
        attraktioner: [
            { titel: "Spegelsalen (Galerie des Glaces)", beskrivning: "En 73 meter lång salong prydd med 357 speglar och fantastiska takmålningar." },
            { titel: "Le Hameau de la Reine", beskrivning: "Drottningens by – en idyllisk och komplett rekonstruerad lantby uppförd för Marie Antoinette med halmtäckta stugor och lantbruk." },
            { titel: "Grand Trianon & Petit Trianon", beskrivning: "Eleganta lustslott belägna i parken dit kungligheterna drog sig tillbaka från hovets stela etikett." },
            { titel: "Slottsträdgårdarna & Grand Canal", beskrivning: "Geometriska alléer skapade av André Le Nôtre med roddbåtar och fontänshowen Les Grandes Eaux Musicales." }
        ],
        transport: "Pendeltåg RER C från centrala Paris mot Versailles Château Rive Gauche (ca 45 min) och 10 minuters promenad, alternativt tåg från Gare Montparnasse eller Gare Saint-Lazare."
    },
    "akropolis": {
        namn: "Akropolis (Aten)",
        land: "Grekland, Aten",
        varldsdel: "Europa",
        bild: "akropolis.png",
        kortBeskrivning: "Den västerländska civilisationens vagga med det storslagna antika templet Parthenon högt ovanför Aten.",
        fakta: [
            { titel: "Byggdes", värde: "400-talet f.Kr." },
            { titel: "Huvudtempel", värde: "Parthenon" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1987" },
            { titel: "Budget", värde: "500–2 500 SEK / dag" }
        ],
        historia: "Akropolis i Aten är världens mest berömda antika citadellklippa. Under ledning av den atenska statsmannen Perikles på 400-talet f.Kr. uppfördes Parthenon och flera andra ikoniska tempel som tillägnades stadens skyddsgudinna Athena. Klippan har genom århundradena fungerat som fästning, religiöst centrum och symbol för demokrati.",
        attraktioner: [
            { titel: "Parthenon", beskrivning: "Det ikoniska templet i dorisk ordning som tronar högst uppe på klippan." },
            { titel: "Akropolismuseet", beskrivning: "Prisbelönt modernt museum vid foten av klippan med de ursprungliga friser och skulpturer." },
            { titel: "Erechtheion & Karyatiderna", beskrivning: "Antikt tempel berömt för sina pelare utformade som kvinnofigurer." },
            { titel: "Plaka & Monastiraki", beskrivning: "Atens äldsta stadsdelar med charmiga tavernor, marknader och gränder." }
        ],
        transport: "Direktflyg till Aten (Eleftherios Venizelos) samt Metro linje 2 eller 3 till stationen Akropoli."
    },
    "ales-stenar": {
        namn: "Ales stenar",
        land: "Sverige, Skåne",
        varldsdel: "Europa",
        bild: "ales-stenar.png",
        kortBeskrivning: "Sveriges största bevarade skeppssättning högt belägen på Kåseberga åsar med utsikt över Östersjön.",
        fakta: [
            { titel: "Ålder", värde: "Ca 1 400 år (Järnåldern)" },
            { titel: "Antal stenar", värde: "59 block" },
            { titel: "Längd", värde: "67 meter" },
            { titel: "Budget", värde: "400–2 200 SEK / dag" }
        ],
        historia: "Ales stenar består av 59 stora granitblock uppställda i form av ett skepp. Monumentet dateras till yngre järnåldern (ca 600 e.Kr.) och väger upp till 5 ton per sten. Det fungerade troligen som gravplats, astronomisk solkalender samt ceremoniell samlingsplats för forntida hövdingar.",
        attraktioner: [
            { titel: "Skeppssättningen", beskrivning: "59 tunga megalitstenar med fri panoramautsikt över Östersjön." },
            { titel: "Kåseberga hamn", beskrivning: "Charmigt fiskeläge känt för Kåseberga Fiskrökeri och lokala rökta delikatesser." },
            { titel: "Hammars backar", beskrivning: "Spektakulära kustklintar populära för skärmflygning, picknick och kustvandring." }
        ],
        transport: "Pågatåg till Ystad station samt Regionbuss 301 direkt till Kåseberga hamn eller bil längs sydkusten."
    },
    "auschwitz-birkenau": {
        namn: "Auschwitz-Birkenau",
        land: "Polen, Oświęcim",
        varldsdel: "Europa",
        bild: "auschwitz.png",
        kortBeskrivning: "Ett djupt gripande och historiskt viktigt minnesmärke och museum över andra världskrigets händelser.",
        fakta: [
            { titel: "Etablerat", värde: "1940" },
            { titel: "Typ", värde: "Statligt museum & minnesmärke" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1979" },
            { titel: "Budget", värde: "400–1 800 SEK / dag" }
        ],
        historia: "Auschwitz-Birkenau var det största av Nazitysklands koncentrations- och förintelseläger. Idag står området kvar som ett internationellt minnesmärke och museum över förintelsens offer, där besökare kan lära sig om historien för att förhindra framtida tragedier.",
        attraktioner: [
            { titel: "Auschwitz I", beskrivning: "Huvudlägret med tegelbaracker, utställningar, personliga tillhörigheter och grinden med 'Arbeit macht frei'." },
            { titel: "Auschwitz II-Birkenau", beskrivning: "Det enorma lägerområdet med den välkända järnvägsporten och ruinerna av krematorierna." },
            { titel: "Minnesmärkesutställningarna", beskrivning: "Dokumentation och personliga livsöden från fångar från hela Europa." }
        ],
        transport: "Flyg till Kraków eller Katowice, därefter direkttåg eller buss från Kraków Główny till Oświęcim (ca 1,5 timme)."
    },
    "basiliuskatedralen": {
        namn: "Basiliuskatedralen",
        land: "Ryssland, Moskva",
        varldsdel: "Europa",
        bild: "rysk slott.png",
        kortBeskrivning: "Världsberömd ortodox katedral känd för sina färgstarka, lökformade kupoler på Röda torget.",
        fakta: [
            { titel: "Byggdes", värde: "1555–1561" },
            { titel: "Byggherre", värde: "Ivan den förskräcklige" },
            { titel: "Plats", värde: "Röda torget, Moskva" },
            { titel: "Budget", värde: "500–2 500 SEK / dag" }
        ],
        historia: "Katedralen uppfördes på 1500-talet av tsar Ivan IV till minne av erövringen av Kazan och Astrakhan. Dess arkitektur är helt unik och består av nio enskilda kapell sammankopplade i en stjärnformad struktur kring ett centralt torn.",
        attraktioner: [
            { titel: "Lökdomarna", beskrivning: "Mönstrade och färgstarka kupoler som gör byggnaden till en av världens mest kända silhuetter." },
            { titel: "Kapellen inuti", beskrivning: "Rikt dekorerade innerrum med historiska ikoner, väggmålningar och trappgångar." },
            { titel: "Röda torget & Kreml", beskrivning: "Det historiska torget och fästningskomplexet som omger katedralen." }
        ],
        transport: "Tunnelbana (Metro) till stationerna Okhotny Ryad, Ploshchad Revolyutsii eller Kitay-Gorod."
    },
    "blue-lagoon": {
        namn: "Blue Lagoon",
        land: "Island, Grindavík",
        varldsdel: "Europa",
        bild: "blue-lagoon.png",
        kortBeskrivning: "Världsberömt geotermiskt utomhusbad känt för sitt varm-mjölkblå och mineralrika vatten.",
        fakta: [
            { titel: "Vattentemp", värde: "37–39 °C" },
            { titel: "Egenskap", värde: "Rik på kisel, mineraler & alger" },
            { titel: "Typ", värde: "Geotermiskt spa" },
            { titel: "Budget", värde: "1 200–6 000+ SEK / dag" }
        ],
        historia: "Blå lagunen bildades på 1970-talet från mineralrikt spillvatten från det intilliggande geotermiska kraftverket Svartsengi på Reykjaneshalvön. Vattnet förnyas helt var 48:e timme och har visat sig ha läkande effekter på huden.",
        attraktioner: [
            { titel: "Geotermiska badet", beskrivning: "Koppla av i det 37–39 °C varma mjölkblå vattnet mitt i ett kargt, svart lavafält." },
            { titel: "Silica-lermasker", beskrivning: "Självservering av naturbaserade kiselleramasker direkt ur maskbaren i poolen." },
            { titel: "Lava Restaurant", beskrivning: "Exklusiv restaurang byggd rakt in i en naturlig klippvägg av lavasten." }
        ],
        transport: "Direktbuss / flygplatsshuttle (Destination Blue Lagoon) från Keflavíks flygplats (20 min) eller Reykjavík (45 min)."
    },
    "cliffs-of-moher": {
        namn: "Cliffs of Moher",
        land: "Irland, County Clare",
        varldsdel: "Europa",
        bild: "klippor.png",
        kortBeskrivning: "Mäktiga havsklippor som stupar mer än 200 meter rakt ner i den vilda Atlanten.",
        fakta: [
            { titel: "Höjd", värde: "Upp till 214 meter" },
            { titel: "Längd", värde: "14 kilometer" },
            { titel: "Plats", värde: "Grevskapet Clare" },
            { titel: "Budget", värde: "700–3 000 SEK / dag" }
        ],
        historia: "Cliffs of Moher bildades för över 300 miljoner år sedan vid en antik flodmynning. Klipporna sträcker sig 14 km längs Irlands västkust och rymmer tiotusentals häckande havsfåglar, bland annat lunnefåglar. De har även synts i filmer som Harry Potter och Halvblodsprinsen.",
        attraktioner: [
            { titel: "O'Brien's Tower", beskrivning: "Stentorn från 1835 beläget på klippornas högsta punkt med utsikt mot Aranöarna." },
            { titel: "Cliffs Coastal Trail", beskrivning: "Spektakulär vandringsled som sträcker sig utmed hela kustkanten." },
            { titel: "Doolin", beskrivning: "Närliggande kustby känd för seafood chowder, Irish stew och traditionell pubmusik." }
        ],
        transport: "Flyg till Shannon eller Dublin + expressbuss via Galway/Ennis eller hyrbil längs Wild Atlantic Way."
    },
    "colosseum": {
        namn: "Colosseum",
        land: "Italien, Rom",
        varldsdel: "Europa",
        bild: "coluseum.png",
        kortBeskrivning: "Antikens största amfiteater där gladiatorstrider och storslagna publika spel arrangerades.",
        fakta: [
            { titel: "Byggdes", värde: "70–80 e.Kr." },
            { titel: "Kapacitet", värde: "Upp till 80 000 åskådare" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1980" },
            { titel: "Budget", värde: "700–3 200 SEK / dag" }
        ],
        historia: "Colosseum uppfördes under kejsarna Vespasianus och Titus i det flaviska dynastiet. Byggnaden användes i över fyrahundra år för gladiatorstrider, djurhetsningar och teaterföreställningar, och står idag som Roms mest ikoniska symbol.",
        attraktioner: [
            { titel: "Hypogeum", beskrivning: "Det avancerade underjordiska systemet av gångar, fallluckor och burar under arenagolvet." },
            { titel: "Forum Romanum", beskrivning: "Det antika Roms politiska, religiösa och kommersiella centrum tätt intill." },
            { titel: "Konstantinbågen", beskrivning: "Den storslagna triumfbågen uppförd år 315 e.Kr. alldeles bredvid amfiteatern." }
        ],
        transport: "Metro linje B (blå linjen) direkt till stationen Colosseo i centrala Rom."
    },
    "eiffeltornet": {
        namn: "Eiffeltornet",
        land: "Frankrike, Paris",
        varldsdel: "Europa",
        bild: "eiffeltornet.png",
        kortBeskrivning: "Paris ikoniska symbol och ett världsberömt arkitektoniskt mästerverk i smidesjärn.",
        fakta: [
            { titel: "Byggdes", värde: "1887–1889" },
            { titel: "Höjd", värde: "330 meter" },
            { titel: "Arkitekt", värde: "Gustave Eiffel" },
            { titel: "Budget", värde: "800–3 500 SEK / dag" }
        ],
        historia: "Eiffeltornet uppfördes som entréportal till världsutställningen 1889 till minne av den franska revolutionens hundraårsjubileum. Det var ursprungligen tänkt att rivas efter 20 år, men räddades av sin nytta som telegraf- och radiotorn.",
        attraktioner: [
            { titel: "Toppvåningen", beskrivning: "Svindlande utsikt från 276 meters höjd över hela Paris med Gustave Eiffels kontor." },
            { titel: "Champ de Mars", beskrivning: "Det stora öppna parkområdet framför tornet, idealiskt för picknick." },
            { titel: "Bateau Mouche", beskrivning: "Sightseeingbåtar på Seine som startar vid tornet och erbjuder kvällsturer." }
        ],
        transport: "Metro linje 6 till Bir-Hakeim, linje 9 till Trocadéro eller RER C till Champ de Mars-Tour Eiffel."
    },
    "europa-park": {
        namn: "Europa-Park",
        land: "Tyskland, Rust",
        varldsdel: "Europa",
        bild: "eu park.jpg",
        kortBeskrivning: "Europas största temapark med prisbelönta berg- och dalbanor och europeiska teman.",
        fakta: [
            { titel: "Grundat", värde: "1975" },
            { titel: "Antal områden", värde: "Över 15 europeiska temaländer" },
            { titel: "Besökare/år", värde: "> 5,8 miljoner" },
            { titel: "Budget", värde: "800–3 500 SEK / dag" }
        ],
        historia: "Europa-Park ägs och drivs av familjen Mack. Parken öppnade 1975 och har vuxit till Europas ledande nöjespark. Varje område representerar ett europeiskt land med autentisk arkitektur, matkultur och åkattraktioner.",
        attraktioner: [
            { titel: "Silver Star", beskrivning: "En av Europas högsta och snabbaste berg- och dalbanor med toppfart på 130 km/h." },
            { titel: "Rulantica", beskrivning: "Gigantisk nordiskt tematiserad inomhus- och utomhusvattenpark intill huvudparken." },
            { titel: "Voltron Nevera", beskrivning: "Innovativ berg- och dalbana med Tesla-tema i det kroatiska området." }
        ],
        transport: "Tåg till Ringsheim station + direktbuss (Südbadenbus) upp till parkens huvudentré."
    },
    "gjogv": {
        namn: "Gjógv",
        land: "Färöarna, Eysturoy",
        varldsdel: "Europa",
        bild: "fäöarna.png",
        kortBeskrivning: "Pittoresk och naturskön färöisk by känd för sin dramatiska naturhamn i en djup ravin.",
        fakta: [
            { titel: "Plats", värde: "Ön Eysturoy, Färöarna" },
            { titel: "Betydelse", värde: "'Gjógv' betyder klyfta/ravin" },
            { titel: "Invånare", värde: "Ca 30 personer" },
            { titel: "Budget", värde: "900–3 500 SEK / dag" }
        ],
        historia: "Byn har fått sitt namn efter den 200 meter långa havsinloppsklyftan som har fungerat som skyddad naturhamn och livsnerv för byns fiskare i århundraden. Byn är känd för sina färgglada trähus med grästak.",
        attraktioner: [
            { titel: "Naturhamnen", beskrivning: "Den spektakulära ravinen med trappor ner till havet och båtrampen." },
            { titel: "Slættaratindur", beskrivning: "Vandringsled upp till Färöarnas högsta bergstopp (880 m) tätt intill byn." },
            { titel: "Gjáargarður", beskrivning: "Traditionellt färöiskt gästgiveri känt för sina kvällar med färöisk kedjedans." }
        ],
        transport: "Flyg till Vágar flygplats + hyrbil eller bygdebuss (Bygdeleiðir) linje 201 till Gjógv."
    },
    "harry-potter-studios": {
        namn: "Harry Potter Museet",
        land: "Storbritannien, Leavesden",
        varldsdel: "Europa",
        bild: "harry-potter.png",
        kortBeskrivning: "Den officiella Warner Bros. studion där alla åtta Harry Potter-filmer spelades in.",
        fakta: [
            { titel: "Invigt", värde: "2012" },
            { titel: "Typ", värde: "Filmstudio & Utställning" },
            { titel: "Tema", värde: "Harry Potter filmkulisser" },
            { titel: "Budget", värde: "800–3 800 SEK / dag" }
        ],
        historia: "Studion i Leavesden användes under mer än tio år som den primära inspelningsplatsen för alla åtta Harry Potter-filmer. Efter avslutad inspelning bevarades rekvisitan, kostymerna och kulisserna i utställningsform.",
        attraktioner: [
            { titel: "Stora salen", beskrivning: "Den ikoniska matsalen från Hogwarts med elevhemssköldar och bord." },
            { titel: "Diagongänden", beskrivning: "Den magiska shoppinggatan med Ollivanders, Den Läckande Kitteln och Viskas Butik." },
            { titel: "Perrong 9 ¾", beskrivning: "Originalångtåget Hogwarts Express och möjligheten att gå genom väggen." }
        ],
        transport: "Tåg från London Euston till Watford Junction + direkt skyttelbuss till studioserien."
    },
    "icehotel": {
        namn: "Icehotel (Jukkasjärvi)",
        land: "Sverige, Jukkasjärvi",
        varldsdel: "Europa",
        bild: "is-hotellet.png",
        kortBeskrivning: "Världens första och mest berömda hotell helt tillverkat av snö och klaris från Torne älv.",
        fakta: [
            { titel: "Grundat", värde: "1989" },
            { titel: "Material", värde: "Is från Torne älv" },
            { titel: "Temp inne", värde: "-5 °C" },
            { titel: "Budget", värde: "1 000–8 000+ SEK / dag" }
        ],
        historia: "Ishotellet i Jukkasjärvi grundades av Yngve Bergqvist. Varje vinter skapas hotellet på nytt av snö och ren is skördad ur Torne älv. Konstnärer från hela världen bjuds in för att mejsla ut helt unika issviter.",
        attraktioner: [
            { titel: "Konstsviterna", beskrivning: "Unikt skulpterade isrum skapade av internationella isskulptörer." },
            { titel: "Icebar", beskrivning: "Drick färgstarka drinkar serverade ur glas skurna direkt ur klaris." },
            { titel: "Norrskenssafari", beskrivning: "Hundspann, rensläde och skoterturer över den frusna Torne älv." }
        ],
        transport: "Flyg eller nattåg till Kiruna + lokalbuss eller förbokad transfer direkt till Jukkasjärvi."
    },
    "kungliga-palatset-madrid": {
        namn: "Kungliga palatset i Madrid",
        land: "Spanien, Madrid",
        varldsdel: "Europa",
        bild: "madrid-palats.png",
        kortBeskrivning: "Västeuropas största fungerande kungliga slott sett till golvyta.",
        fakta: [
            { titel: "Invigt", värde: "1755" },
            { titel: "Antal rum", värde: "3 418 rum" },
            { titel: "Yta", värde: "135 000 m²" },
            { titel: "Budget", värde: "600–2 800 SEK / dag" }
        ],
        historia: "Palatset uppfördes på 1700-talet på platsen för en medeltida maurisk fästning som brann ner 1734. Det fungerar idag som officiellt residens för Spaniens kungafamilj och används för statsceremonier och banketter.",
        attraktioner: [
            { titel: "Real Armería", beskrivning: "Ett av världens mest framstående rustkammarmuseer med rustningar från 1500-talet." },
            { titel: "Tronsalen", beskrivning: "Praktfullt barockrum inrett med rokokospeglar och takmålningar av Tiepolo." },
            { titel: "Sabatini-trädgårdarna", beskrivning: "Symmetriska barockträdgårdar med skulpturer och spegeldammar nedanför palatset." }
        ],
        transport: "Metro linje 2 eller R till stationen Ópera i centrala Madrid."
    },
    "luxemburg": {
        namn: "Luxemburg stad",
        land: "Luxemburg",
        varldsdel: "Europa",
        bild: "luxenburg city.png",
        kortBeskrivning: "En dramatisk stad byggd över djupa dalar med medeltida befästningar och UNESCO-status.",
        fakta: [
            { titel: "Status", värde: "Huvudstad & UNESCO-världsarv" },
            { titel: "Särdrag", värde: "Klippbefästningar & djupa raviner" },
            { titel: "Kollektivtrafik", värde: "Helt gratis i hela landet" },
            { titel: "Budget", värde: "700–3 200 SEK / dag" }
        ],
        historia: "Luxemburg stad grundades år 963 runt ett litet slott på Bock-klippan. Under århundradena byggdes staden ut med massiva murar och förvandlades till en av Europas starkaste fästningar, känd som 'Nordens Gibraltar'.",
        attraktioner: [
            { titel: "Bock-kasematterna", beskrivning: "Underjordiska försvarstunnlar och kanonöppningar uthuggna rakt ur klippan." },
            { titel: "Le Grund", beskrivning: "Pittoresk och historisk stadsdel belägen nere i Alsettedalen." },
            { titel: "Chemin de la Corniche", beskrivning: "Promenadstråk känt som 'Europas vackraste balkong' med utsikt över dalen." }
        ],
        transport: "Direktflyg till Luxemburg-Findel flygplats + gratis spårvagn/buss in till centrum."
    },
    "mont-saint-michel": {
        namn: "Mont Saint-Michel",
        land: "Frankrike, Normandie",
        varldsdel: "Europa",
        bild: "slott-i-havet.png",
        kortBeskrivning: "Sagolik gotisk abbedia och klosterstad belägen på en dramatisk tidvattenö i Normandie.",
        fakta: [
            { titel: "Grundat", värde: "708 e.Kr." },
            { titel: "Typ", värde: "Tidvattenö & Gotisk abbedia" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1979" },
            { titel: "Budget", värde: "700–3 200 SEK / dag" }
        ],
        historia: "Mont Saint-Michel grundades på 700-talet efter att ärkeängeln Mikael sägs ha visat sig för biskopen av Avranches. Ön förvandlades till ett viktigt pilgrimscentrum och omvandlades under hundraårskriget till en obestiglig fästning.",
        attraktioner: [
            { titel: "Abbaye du Mont-Saint-Michel", beskrivning: "Det gotiska klostret högst upp på ön känt som 'La Merveille' (Underverket)." },
            { titel: "La Mère Poulard", beskrivning: "Historisk restaurang känd sedan 1888 för sina luftiga och vedugnsgräddade omeletter." },
            { titel: "De medeltida vallarna", beskrivning: "Försvarsmurar med slående panoramautsikt över tidvattenbukten." }
        ],
        transport: "Tåg från Paris (Gare Montparnasse) till Rennes eller Dol-de-Bretagne + anslutningsbuss direkt till bron."
    },
    "monument-great-fire": {
        namn: "The Monument",
        land: "Storbritannien, London",
        varldsdel: "Europa",
        bild: "monumnet-of-the-great-fire.png",
        kortBeskrivning: "Stolt dorisk pelare till minne av den stora branden i London 1666.",
        fakta: [
            { titel: "Rest", värde: "1671–1677" },
            { titel: "Höjd", värde: "62 meter" },
            { titel: "Arkitekt", värde: "Christopher Wren" },
            { titel: "Budget", värde: "600–3 000 SEK / dag" }
        ],
        historia: "Monumentet resdes på order av parlamentet för att minnas Londons stora brand 1666. Dess höjd (62 meter) motsvarar det exakta avståndet från pelarens bas till bageriet på Pudding Lane där branden bröt ut.",
        attraktioner: [
            { titel: "Utsiktsplattformen", beskrivning: "311 trappsteg upp till en öppen plattform med vy över City of London och Themsen." },
            { titel: "Pudding Lane", beskrivning: "Den historiska gatan alldeles bredvid där den ödesdigra branden startade." },
            { titel: "Sky Garden & Leadenhall Market", beskrivning: "Närliggande sevärdheter i Londons finanskvarter." }
        ],
        transport: "Tunnelbana (Underground) till stationen Monument eller Bank."
    },
    "mother-ukraine": {
        namn: "Moder Ukraina",
        land: "Ukraina, Kyiv",
        varldsdel: "Europa",
        bild: "mother ukraine.jpg",
        kortBeskrivning: "Ett monumentalt rostfritt stålmonument som stolt blickar ut över Kyiv och Dnjepr-floden.",
        fakta: [
            { titel: "Invigt", värde: "1981" },
            { titel: "Höjd", värde: "102 meter totalt" },
            { titel: "Material", värde: "Rostfritt stål" },
            { titel: "Budget", värde: "300–1 500 SEK / dag" }
        ],
        historia: "Det enorma monumentet reser sig över Kyivs höjder. Det ritades ursprungligen av skulptören Yevgeny Vuchetich. År 2023 byttes det sovjetiska emblemet på skölden ut mot Ukrainas nationella treudd (Tryzub).",
        attraktioner: [
            { titel: "Utsiktsplattformen i skölden", beskrivning: "Utsiktsplats belägen 92 meter upp i monumentets sköld." },
            { titel: "Nationella krigsmuseet", beskrivning: "Det historiska utomhus- och inomhusmuseet beläget direkt under monumentets bas." },
            { titel: "Pechersk Lavra", beskrivning: "Det närliggande grottklostret med guld kupoler och rik historia." }
        ],
        transport: "Tunnelbana till stationen Arsenalna eller Dnipro + promenad eller lokalbuss upp på höjden."
    },
    "neuschwanstein": {
        namn: "Neuschwanstein",
        land: "Tyskland, Bayern",
        varldsdel: "Europa",
        bild: "tyskt-vitt-slott.png",
        kortBeskrivning: "Det bayerska sagoslottet som stod som modell för Disneys Törnrosaslott.",
        fakta: [
            { titel: "Byggstart", värde: "1869" },
            { titel: "Byggherre", värde: "Kung Ludwig II" },
            { titel: "Plats", värde: "Füssen, Bayern" },
            { titel: "Budget", värde: "600–2 900 SEK / dag" }
        ],
        historia: "Neuschwanstein uppfördes på 1800-talet av kung Ludwig II av Bayern som en romantisk tillflyktsort, inspirerad av Richard Wagners operor. Slottet stod som förebild när Walt Disney skapade Törnrosaslottet.",
        attraktioner: [
            { titel: "Marienbrücke", beskrivning: "Hängbron över Pöllatklyftan som ger den klassiska vykortsvyn över slottet." },
            { titel: "Sångarsalen", beskrivning: "Slottets största och mest färgstarka festsal täckt med väggmålningar." },
            { titel: "Alpsee & Hohenschwangau", beskrivning: "Kristallklar alpsjö och grannslottet nedanför i dalen." }
        ],
        transport: "Tåg från München Hbf till Füssen (ca 2 timmar) + lokalbuss 73/78 till Hohenschwangau."
    },
    "nuuk": {
        namn: "Nuuk",
        land: "Grönland",
        varldsdel: "Nordamerika",
        bild: "grönland huvudstad.png",
        kortBeskrivning: "Grönlands färgstarka huvudstad omgiven av storslagna fjäll, isberg och arktiska fjordar.",
        fakta: [
            { titel: "Grundat", värde: "1728" },
            { titel: "Invånare", värde: "Ca 19 000" },
            { titel: "Särdrag", värde: "Världsnordligaste huvudstad" },
            { titel: "Budget", värde: "1 100–4 500 SEK / dag" }
        ],
        historia: "Nuuk grundades av den dansk-norska missionären Hans Egede under namnet Godthåb. Staden kombinerar tusenårig inuitisk kultur med modern arktisk arkitektur och ligger vid mynningen av Nuup Kangerlua-fjorden.",
        attraktioner: [
            { titel: "Gamla hamnen (Kolonihavnen)", beskrivning: "Färgstarka trähus, Hans Egedes hus och den historiska kyrkan." },
            { titel: "Grönlands Nationalmuseum", beskrivning: "Känt för de 500 år gamla och välbevarade Qilakitsoq-mumierna." },
            { titel: "Katuaq Kulturhus", beskrivning: "Arkitektoniskt prisbelönt kulturhus inspirerat av norrskenet." }
        ],
        transport: "Flyg med Air Greenland via Köpenhamn eller Kangerlussuaq till Nuuks flygplats."
    },
    "penapalatsen": {
        namn: "Pena-palatset (Sintra)",
        land: "Portugal, Sintra",
        varldsdel: "Europa",
        bild: "röd-och-gult-slott.png",
        kortBeskrivning: "Romantiskt bergsområde fyllt med färgstarka slott, sagolika parker och underjordiska brunnsspiraltrappor.",
        fakta: [
            { titel: "Färdigställt", värde: "1854" },
            { titel: "Byggherre", värde: "Kung Ferdinand II" },
            { titel: "Höjd", värde: "480 m ö.h." },
            { titel: "Budget", värde: "600–2 800 SEK / dag" }
        ],
        historia: "Pena-palatset uppfördes på 1800-talet i starkt gula och röda färger på en bergsplatå i Sintra nära Lissabon. Det representerar höjdpunkten av den portugisiska romantiken och står upptaget på UNESCO:s världsarvslista.",
        attraktioner: [
            { titel: "Palácio da Pena", beskrivning: "Det färgstarka slottet på bergstoppen med terrasser och orangerier." },
            { titel: "Quinta da Regaleira", beskrivning: "Mystisk park känd för den underjordiska initiationsbrunnen (Poço Initiático)." },
            { titel: "Castelo dos Mouros", beskrivning: "Medeltida maurisk fästningsruin med slingrande murar och utsikt mot Atlanten." }
        ],
        transport: "Lokaltåg från Rossio-stationen i Lissabon (40 min) + lokalbuss 434 upp i Sintra-bergen."
    },
    "pompeji": {
        namn: "Pompeji",
        land: "Italien, Neapel",
        varldsdel: "Europa",
        bild: "pompai.png",
        kortBeskrivning: "Den antika romerska staden som frös i tiden under ett tjockt täcke av vulkanisk aska år 79 e.Kr.",
        fakta: [
            { titel: "Förstördes", värde: "79 e.Kr." },
            { titel: "Vulkan", värde: "Vesuvius" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1997" },
            { titel: "Budget", värde: "600–2 800 SEK / dag" }
        ],
        historia: "När vulkanen Vesuvius fick sitt katastrofala utbrott år 79 e.Kr. begravdes Pompeji under ett sex meter tjockt lager av vulkanisk aska. Detta bevarade gator, villor, bagerier, väggmålningar och gipsavgjutningar av invånarna.",
        attraktioner: [
            { titel: "Forum i Pompeji", beskrivning: "Det centrala torget omgivet av antika tempel, basilikor och offentliga lokaler." },
            { titel: "Villa dei Misteri", beskrivning: "Välbevarad romersk villa berömd för sina intakta, färgstarka fresker." },
            { titel: "Amfiteatern", beskrivning: "En av de äldsta bevarade romerska amfiteatrarna av sten." }
        ],
        transport: "Lokaltåg Circumvesuviana från Neapel (Napoli Centrale) till stationen Pompei Scavi / Villa dei Misteri."
    },
    "sagrada-familia": {
        namn: "Sagrada Família",
        land: "Spanien, Barcelona",
        varldsdel: "Europa",
        bild: "sagrada-famillia.png",
        kortBeskrivning: "Antoni Gaudís spektakulära och ännu ej helt färdigställda katolska basilika.",
        fakta: [
            { titel: "Byggstart", värde: "1882" },
            { titel: "Arkitekt", värde: "Antoni Gaudí" },
            { titel: "Stil", värde: "Katalansk modernism" },
            { titel: "Budget", värde: "700–3 000 SEK / dag" }
        ],
        historia: "Sagrada Família påbörjades 1882 under ledning av Antoni Gaudí, som ägnade de sista 40 åren av sitt liv helt åt projektet. Byggnadens organiska former och pelare som liknar en trädkrona finansieras helt av inträdesbiljetter och privata donationer.",
        attraktioner: [
            { titel: "Tornen", beskrivning: "Hissar upp i de organiskt formade tornen med fantastisk utsikt över Barcelona." },
            { titel: "Födelsefasaden", beskrivning: "Den otroligt detaljrika fasad som färdigställdes direkt under Gaudís egen livstid." },
            { titel: "Gaudímuseet", beskrivning: "Underjordiskt museum med Gaudís originalskisser, gipsmodeller och arkitekturhistoria." }
        ],
        transport: "Metro linje L2 eller L5 direkt till stationen Sagrada Família."
    },
    "st-anton": {
        namn: "St. Anton am Arlberg",
        land: "Österrike, Tyrolen",
        varldsdel: "Europa",
        bild: "saint anton .png",
        kortBeskrivning: "Känd skidort i österrikiska alperna, betraktad som den alpina skidåkningens vagga.",
        fakta: [
            { titel: "Höjd", värde: "1 304 m ö.h." },
            { titel: "Region", värde: "Arlberg, Tyrolen" },
            { titel: "Särdrag", värde: "Den alpina skidåkningens vagga" },
            { titel: "Budget", värde: "900–4 200 SEK / dag" }
        ],
        historia: "St. Anton anses vara den moderna alpina skidåkningens födelseplats. Här grundades en av världens första skidskolor och tekniker för svängar och liftsystem utvecklades under början av 1900-talet.",
        attraktioner: [
            { titel: "Valluga", beskrivning: "Högsta bergstoppen (2 811 m) med utsikt över alptoppar i fem olika länder." },
            { titel: "Dorfstraße", beskrivning: "Bilfri gågata med butiker, traditonella tyrolska restauranger och berömd après-ski." },
            { titel: "Arlberg-skidsystemet", beskrivning: "Över 300 km sammanhängande pist och utmärkta offpist-möjligheter." }
        ],
        transport: "Direkttåg (Railjet) från Innsbruck, Zürich eller Wien till St. Anton am Arlberg station."
    },
    "stonehenge": {
        namn: "Stonehenge",
        land: "Storbritannien, Wiltshire",
        varldsdel: "Europa",
        bild: "stone-hage.png",
        kortBeskrivning: "Världsberömt förhistoriskt megalitmonument format av gigantiska stående stenar.",
        fakta: [
            { titel: "Ålder", värde: "Ca 5 000 år gammalt" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1986" },
            { titel: "Typ", värde: "Megalitmonument" },
            { titel: "Budget", värde: "700–3 200 SEK / dag" }
        ],
        historia: "Stonehenge byggdes i flera etapper mellan 3000 f.Kr. och 2000 f.Kr. Dess exakta syfte förblir ett mysterium, men monumentet är linjerat med solstånden och fungerade troligen som astronomisk kalender, ceremoniell plats och gravfält.",
        attraktioner: [
            { titel: "Stencirkeln", beskrivning: "De gigantiska sarsenstenarna och blåstenarna uppställda i cirkelformation." },
            { titel: "Visitor Centre", beskrivning: "Interaktivt museum med neolitiska föremål och ansiktsrekonstruktioner." },
            { titel: "Neolitiska husen", beskrivning: "Rekonstruerade hyddor som visar hur byggarna av Stonehenge bodde för 4 500 år sedan." }
        ],
        transport: "Tåg från London Waterloo till Salisbury + Stonehenge Tour-bussen direkt till besökscentret."
    },
    "tower-bridge": {
        namn: "Tower Bridge",
        land: "Storbritannien, London",
        varldsdel: "Europa",
        bild: "tower-bridge.png",
        kortBeskrivning: "Känd klaffbro i nygotisk stil över floden Themsen intill Tower of London.",
        fakta: [
            { titel: "Invigd", värde: "1894" },
            { titel: "Längd", värde: "244 meter" },
            { titel: "Brotorntyp", värde: "Nygotisk stål- och stenkostruktion" },
            { titel: "Budget", värde: "700–3 500 SEK / dag" }
        ],
        historia: "Tower Bridge byggdes mellan 1886 och 1894 för att lindra vägtrafiken över Themsen utan att hindra de stora segelfartygen från att nå Londons historiska hamnkvarter.",
        attraktioner: [
            { titel: "Glass Floor Walkways", beskrivning: "Gångbroarna högst upp mellan tornen med panoramautsikt och glasgolv." },
            { titel: "Engine Rooms", beskrivning: "De bevarade victoriaianska ångmaskinsrummen som ursprungligen hissade brohalvorna." },
            { titel: "Tower of London", beskrivning: "Den medeltida fästningen och kungliga slottet som ligger precis vid bron." }
        ],
        transport: "Tunnelbana (Underground) till stationen Tower Hill eller London Bridge."
    },
    "turning-torso": {
        namn: "Turning Torso",
        land: "Sverige, Malmö",
        varldsdel: "Europa",
        bild: "turning-torso.png",
        kortBeskrivning: "Skandinaviens första roterande skyskrapa och ett arkitektoniskt landmärke i Malmö.",
        fakta: [
            { titel: "Höjd", värde: "190 meter" },
            { titel: "Invigt", värde: "2005" },
            { titel: "Arkitekt", värde: "Santiago Calatrava" },
            { titel: "Budget", värde: "500–2 500 SEK / dag" }
        ],
        historia: "Turning Torso ritades av den spanska stjärnarkitekten Santiago Calatrava. Byggnaden vrider sig 90 grader från basen upp till toppen på 190 meters höjd och ligger i den miljöanpassade stadsdelen Västra Hamnen.",
        attraktioner: [
            { titel: "Västra Hamnen", beskrivning: "Strandpromenad med caféer, restauranger, skatepark och sundsutsikt." },
            { titel: "Scaniabadet & Ribersborg", beskrivning: "Populära djuphavsbad och det historiska Ribersborgs kallbadhus." },
            { titel: "Kajrestauranger & Malmö Saluhall", beskrivning: "Mångsidiga matställen och delikatessbutiker i närområdet." }
        ],
        transport: "Pågatåg/Öresundståg till Malmö C + Stadsbuss 2 eller 15 minuters promenad till Västra Hamnen."
    },
    "vasamuseet": {
        namn: "Vasamuseet",
        land: "Sverige, Stockholm",
        varldsdel: "Europa",
        bild: "vasa-museet.png",
        kortBeskrivning: "Specialbyggt museum för regalskeppet Vasa som förliste på sin jungfrufärd 1628.",
        fakta: [
            { titel: "Förlisning", värde: "1628" },
            { titel: "Bärgad", värde: "1961 (efter 333 år)" },
            { titel: "Plats", värde: "Djurgården, Stockholm" },
            { titel: "Budget", värde: "500–2 800 SEK / dag" }
        ],
        historia: "Regalskeppet Vasa sjönk i Stockholms hamn under sin jungfrufärd år 1628. Efter 333 år på havsbotten bärgades skeppet 1961 och är idag världens bäst bevarade 1600-talsskepp med över 98 % originaldelar.",
        attraktioner: [
            { titel: "Regalskeppet Vasa", beskrivning: "Det unikt bevarade fartyget med hundratals täljda originalskulpturer." },
            { titel: "Utställningarna", beskrivning: "Skildringar av livet ombord, skeppsbygget, stormaktstiden och det tekniska bärgningsarbetet." },
            { titel: "Djurgården", beskrivning: "Det gröna parkområdet runt museet med matställen som Rosendals Trädgård och Spritmuseum." }
        ],
        transport: "Spårvagn 7 från T-Centralen eller Djurgårdsfärjan från Slussen direkt till Djurgården."
    },
    "vatikanstaten": {
        namn: "Vatikanstaten",
        land: "Vatikanstaten",
        varldsdel: "Europa",
        bild: "vatikanstaten .png",
        kortBeskrivning: "Världens minsta självständiga stat med Petersplatsen, Peterskyrkan och Sixtinska kapellet.",
        fakta: [
            { titel: "Grundad", värde: "1929 (Lateranfördraget)" },
            { titel: "Yta", värde: "0,49 km²" },
            { titel: "Statsoverhuvud", värde: "Påven" },
            { titel: "Budget", värde: "700–3 200 SEK / dag" }
        ],
        historia: "Vatikanstaten är den katolska kyrkans administrativa och andliga centrum. Den blev en helt självständig stat genom Lateranfördraget 1929 och rymmer några av världens mest värdefulla konstskatter och helgedomar.",
        attraktioner: [
            { titel: "Peterskyrkan", beskrivning: "En av världens största och mest storslagna kyrkor med Michelangelos Kupol och Pietà." },
            { titel: "Sixtinska kapellet", beskrivning: "Världsberömt för Michelangelos takmålningar och 'Yttersta domen'." },
            { titel: "Vatikanmuseerna", beskrivning: "Enorm konstsamling uppbyggd av påvarna under århundraden med klassiska skulpturer och renässanskonst." }
        ],
        transport: "Metro linje A i Rom till stationen Ottaviano - San Pietro."
    },
    "zermatt": {
        namn: "Zermatt",
        land: "Schweiz, Valais",
        varldsdel: "Europa",
        bild: "zermatt sweitz.png",
        kortBeskrivning: "Idyllisk och bilfri alport vid foten av det ikoniska berget Matterhorn.",
        fakta: [
            { titel: "Höjd", värde: "1 620 m ö.h." },
            { titel: "Känt berg", värde: "Matterhorn (4 478 m)" },
            { titel: "Särdrag", värde: "Helt bilfri by (endast elfordon)" },
            { titel: "Budget", värde: "1 200–5 500 SEK / dag" }
        ],
        historia: "Zermatt förvandlades från en isolerad bergsby till ett världskänt alpincentrum efter den första bestigningen av Matterhorn år 1865. Byn har bevarat sin alpina charm genom att hålla hela orten bilfri.",
        attraktioner: [
            { titel: "Gornergrat-banan", beskrivning: "Europas högsta öppna kuggstångsbana upp till 3 089 meters höjd med panoramautsikt över Matterhorn." },
            { titel: "Matterhorn Glacier Paradise", beskrivning: "Europas högsta linbanestation på 3 883 meters höjd med en isgrotta inuti glaciären." },
            { titel: "Zermatt Village", beskrivning: "Charmig bykärna med traditonella trästugor, restauranger och boutiquebutiker." }
        ],
        transport: "Tåg från Visp/Brig med Matterhorn Gotthard Bahn direkt in i bilfria Zermatt."
    },
    "gamla-stan": {
        namn: "Gamla Stan",
        land: "Sverige, Stockholm",
        varldsdel: "Europa",
        bild: "gamla stan.jpg",
        kortBeskrivning: "Stockholms historiska hjärta med kullerstensgator, medeltida torg och Kungliga slottet.",
        fakta: [
            { titel: "Grundat", värde: "1200-talet" },
            { titel: "Särdrag", värde: "En av Europas bäst bevarade medeltida stadskärnor" },
            { titel: "Plats", värde: "Stadsholmen, Stockholm" }
        ],
        historia: "Gamla Stan grundades på 1200-talet och utgjorde ursprungligen hela staden Stockholm. Med sina trånga gränder, historiska torg och bevarade medeltida byggnader är det en levande del av Sveriges historia.",
        attraktioner: [
            { titel: "Kungliga slottet", beskrivning: "Officiellt residens för Sveriges monark med skattkammaren och representationsvåningarna." },
            { titel: "Stortorget", beskrivning: "Stockholms äldsta torg, känt för sina färgstarka byggnader och Nobelprismuseet." },
            { titel: "Mårten Trotzigs gränd", beskrivning: "Stockholms smalaste gränd som mäter endast 90 cm på sitt smalaste ställe." }
        ],
        transport: "Tunnelbana till stationen Gamla Stan eller promenad från T-Centralen/Slussen."
    },
    "nordkapp": {
        namn: "Nordkapp",
        land: "Norge, Finnmark",
        varldsdel: "Europa",
        bild: "nordkapp.jpg",
        kortBeskrivning: "Europas nordligaste fastlandspunkt på en dramatisk klippa med panoramautsikt över Ishavet.",
        fakta: [
            { titel: "Höjd", värde: "307 meter över havet" },
            { titel: "Plats", värde: "Magerøya, Norge" },
            { titel: "Särdrag", värde: "Midnattssol och norrsken" }
        ],
        historia: "Nordkapp namngavs 1553 av den engelska kaptenen Richard Chancellor under en expedition för att hitta Nordostpassagen. Klippan har sedan dess lockat upptäcktsresande och turister från hela världen.",
        attraktioner: [
            { titel: "Nordkapphallen", beskrivning: "Besökscenter inbyggt i klippan med biograf, utställningar och restaurang." },
            { titel: "Globen", beskrivning: "Den ikoniska stålskulpturen på klippans yttersta spets." },
            { titel: "Midnattssolen", beskrivning: "Upplev sol dygnet runt under sommarmånaderna från maj till juli." }
        ],
        transport: "Flyg till Honningsvåg eller Alta och därefter buss/hyrbil längs E69 till Nordkapp."
    },
    "chichen-itza": {
        namn: "Chichén Itzá",
        land: "Mexiko, Yucatán",
        varldsdel: "Nordamerika",
        bild: "chichen itza.jpg",
        kortBeskrivning: "En av Mayakulturens mest betydelsefulla städer med den majestätiska pyramiden El Castillo.",
        fakta: [
            { titel: "Byggdes", värde: "Ca 600–1200 e.Kr." },
            { titel: "Unesco-status", värde: "Världsarv & ett av världens sju nya underverk" },
            { titel: "Kultur", värde: "Mayakulturen" }
        ],
        historia: "Chichén Itzá var ett stort politiskt och ekonomiskt centrum för Mayafolket. Pyramiden El Castillo är utformad efter mayaastronomi, där skuggor skapar illusionen av en slingrande orm vid dagjämningspunkterna.",
        attraktioner: [
            { titel: "El Castillo (Kukulcáns pyramid)", beskrivning: "Den 30 meter höga trappstegspyramiden i stadens centrum." },
            { titel: "Stora bollplanen", beskrivning: "Mesoamerikas största bevarade spelplan för rituelt bollspel." },
            { titel: "Cenote Sagrado", beskrivning: "Den heliga natursänkan som användes för offergåvor och ceremonier." }
        ],
        transport: "Buss eller dagsutflykt från Cancún, Mérida eller Playa del Carmen."
    },
    "frihetsgudinnan": {
        namn: "Frihetsgudinnan (Statue of Liberty)",
        land: "USA, New York",
        varldsdel: "Nordamerika",
        bild: "frihetsgudinnan.jpg",
        kortBeskrivning: "Världsberömd symbol för frihet och demokrati belägen i New Yorks hamninlopp.",
        fakta: [
            { titel: "Invigd", värde: "1886" },
            { titel: "Gåva från", värde: "Frankrike" },
            { titel: "Höjd", värde: "93 meter (inklusive fundament)" }
        ],
        historia: "Frihetsgudinnan var en gåva från det franska folket till USA för att fira hundraårsminnet av den amerikanska oavhängighetsförklaringen. Statyn ritades av Frédéric-Auguste Bartholdi och bärande stålkonstruktion skapades av Gustave Eiffel.",
        attraktioner: [
            { titel: "Kronan", beskrivning: "Utsiktsplats i statyns krona med vy över New Yorks hamn och skyskrapor." },
            { titel: "Ellis Island", beskrivning: "Närliggande ö och historiskt invandringsmuseum där miljoner invandrare togs emot." },
            { titel: "Statue of Liberty Museum", beskrivning: "Museum på Liberty Island med statyns originalfackla och historia." }
        ],
        transport: "Färja (Statue City Cruises) från Battery Park i Manhattan eller Liberty State Park i New Jersey."
    },
    "grand-canyon": {
        namn: "Grand Canyon",
        land: "USA, Arizona",
        varldsdel: "Nordamerika",
        bild: "grand canyon.jpg",
        kortBeskrivning: "Gigantisk och färgglad kanjon utkarvad av Coloradofloden under miljontals år.",
        fakta: [
            { titel: "Djup", värde: "Upp till 1 800 meter" },
            { titel: "Längd", värde: "446 kilometer" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1979" }
        ],
        historia: "Grand Canyon har karvats ut av Coloradofloden under cirka sex miljoner år och blottar geologiska bergslager från nästan två miljarder år av jordens historia. Det är en av världens mest kända nationalparker.",
        attraktioner: [
            { titel: "South Rim", beskrivning: "Den mest populära utsiktsplatsen med Mather Point och Bright Angel Trail." },
            { titel: "Grand Canyon Skywalk", beskrivning: "Hästskoformad glasbro som sträcker sig ut över kanjonkanten på West Rim." },
            { titel: "Helikopterturer", beskrivning: "Flygturer för att se de milsvida klippformationerna och floden ovanifrån." }
        ],
        transport: "Bil, utflyktsbuss eller helikopter från Las Vegas, Flagstaff eller Phoenix."
    },
    "las-vegas-strip": {
        namn: "Las Vegas Strip",
        land: "USA, Nevada",
        varldsdel: "Nordamerika",
        bild: "las vegas strip.jpg",
        kortBeskrivning: "Världens mest kända nöjesgata kantad av neonskyltar, lyxhotell och kasinon.",
        fakta: [
            { titel: "Längd", värde: "Cirka 6,8 kilometer" },
            { titel: "Plats", värde: "Paradise / Las Vegas, Nevada" },
            { titel: "Särdrag", värde: "Kasinon, shower och världskänd underhållning" }
        ],
        historia: "Las Vegas Strip började växa fram under 1940-talet när de första stora kasinohotellen som El Rancho Vegas och Flamingo öppnades. Gatan utvecklades snabbt till världens huvudstad för nöje och spel.",
        attraktioner: [
            { titel: "Bellagio Fountains", beskrivning: "Ikonisk koreograferad fontänshow med musik och ljuseffekter." },
            { titel: "The High Roller", beskrivning: "Ett av världens högsta pariserhjul med utsikt över hela staden." },
            { titel: "Temahotellen", beskrivning: "Utforska kopior av Eiffeltornet, Venedigs kanaler och egyptiska pyramider." }
        ],
        transport: "Flyg till Harry Reid International Airport (LAS), därefter taxi, buss eller monorail."
    },
    "mount-rushmore": {
        namn: "Mount Rushmore",
        land: "USA, South Dakota",
        varldsdel: "Nordamerika",
        bild: "mount ruchmore.jpg",
        kortBeskrivning: "Monumentalt bergsmonument med ansiktena av fyra framstående amerikanska presidenter.",
        fakta: [
            { titel: "Skapat", värde: "1927–1941" },
            { titel: "Skulptör", värde: "Gutzon Borglum" },
            { titel: "Presidenter", värde: "Washington, Jefferson, Roosevelt, Lincoln" }
        ],
        historia: "Monumentet höggs ut ur granitklippan i Black Hills mellan 1927 och 1941. De fyra valda presidenterna representerar USA:s födelse, tillväxt, bevarande och utveckling.",
        attraktioner: [
            { titel: "Avenue of Flags", beskrivning: "Flaggallé med flaggor från alla USA:s delstater som leder mot monumentet." },
            { titel: "Presidential Trail", beskrivning: "Vandringsled som tar besökare nära klippans fot och ger olika vinklar." },
            { titel: "Sculptor's Studio", beskrivning: "Ateljé där skulptören Gutzon Borglum arbetade med sina storskaliga modeller." }
        ],
        transport: "Flyg till Rapid City Regional Airport (RAP) och hyrbil till Black Hills."
    },
    "golden-gate-bridge": {
        namn: "Golden Gate-bron",
        land: "USA, San Francisco",
        varldsdel: "Nordamerika",
        bild: "golden gate brige.jpg",
        kortBeskrivning: "Ikonisk orangeröd hängbro som spänner över inloppet till San Francisco-bukten.",
        fakta: [
            { titel: "Invigd", värde: "1937" },
            { titel: "Längd", värde: "2 737 meter" },
            { titel: "Färg", värde: "International Orange" }
        ],
        historia: "När bron stod färdig 1937 var den världens längsta hängbro. Den konstruerades för att tåla hårda vindar och jordbävningar och har blivit en av USA:s mest kända byggnadsverk.",
        attraktioner: [
            { titel: "Gång- och cykelbanan", beskrivning: "Promenera eller cykla över bron med utsikt mot staden och Alcatraz." },
            { titel: "Hawk Hill", beskrivning: "Utsiktsplats norr om bron i Marin Headlands för klassiska vykortsfoton." },
            { titel: "Welcome Center", beskrivning: "Besökscenter vid brons södra fäste med historiska utställningar." }
        ],
        transport: "Buss från centrala San Francisco (MUNI / Golden Gate Transit) eller hyrcykel från Fisherman's Wharf."
    },
    "niagara-falls": {
        namn: "Niagarafallen",
        land: "Kanada & USA",
        varldsdel: "Nordamerika",
        bild: "niagra falls.jpg",
        kortBeskrivning: "Tre mäktiga vattenfall på gränsen mellan USA och Kanada med enorma vattenflöden.",
        fakta: [
            { titel: "Huvudfall", värde: "Horseshoe Falls, American Falls, Bridal Veil Falls" },
            { titel: "Plats", värde: "Gränsen Ontario (Kanada) & New York (USA)" },
            { titel: "Vattenflöde", värde: "Över 2 800 m³ per sekund" }
        ],
        historia: "Niagarafallen bildades under den senaste istiden för cirka 12 000 år sedan när smältvatten skapade floden Niagara. Fallen är både en stor turistattraktion och en viktig källa till vattenkraft.",
        attraktioner: [
            { titel: "Maid of the Mist / City Cruises", beskrivning: "Båtturer som tar besökare rakt in i dimman vid fallen." },
            { titel: "Cave of the Winds", beskrivning: "Vandringsleder på träbryggor alldeles intill Bridal Veil Falls på den amerikanska sidan." },
            { titel: "Journey Behind the Falls", beskrivning: "Tunnlar som leder bakom det stora Horseshoe Falls på den kanadensiska sidan." }
        ],
        transport: "Flyg till Buffalo Niagara International Airport (BUF) eller Toronto Pearson (YYZ) + buss/hyrbil."
    },
    "machu-picchu": {
        namn: "Machu Picchu",
        land: "Peru, Cusco",
        varldsdel: "Sydamerika",
        bild: "machu picchu.jpg",
        kortBeskrivning: "Inkarikets mytomspunna glömda stad belägen högt uppe bland Andesbergen.",
        fakta: [
            { titel: "Byggdes", värde: "1400-talet" },
            { titel: "Höjd", värde: "2 430 m ö.h." },
            { titel: "Unesco-status", värde: "Världsarv & ett av världens sju nya underverk" }
        ],
        historia: "Machu Picchu uppfördes under inkejsaren Pachacuti på 1400-talet. Staden övergavs i samband med den spanska erövringen och förblev gömd för omvärlden tills den återupptäcktes av Hiram Bingham 1911.",
        attraktioner: [
            { titel: "Intihuatana", beskrivning: "Den heliga solstenen som användes som astronomisk kalender." },
            { titel: "Soltemplet", beskrivning: "Halvcirkelformat tempel med unikt finhuggna stenblock." },
            { titel: "Huayna Picchu", beskrivning: "Den branta bergstoppen bakom ruinerna med panoramautsikt över hela området." }
        ],
        transport: "Tåg från Cusco/Ollantaytambo till Aguas Calientes + skyttelbuss upp till ruinerna, eller vandring längs Inkaleden."
    },
    "santa-monica-pier": {
        namn: "Santa Monica Pier",
        land: "USA, Kalifornien",
        varldsdel: "Nordamerika",
        bild: "santa monica pier.jpg",
        kortBeskrivning: "Ikonisk nöjespir i Santa Monica med pariserhjul, bergochdalbana och historiska Route 66-skylten.",
        fakta: [
            { titel: "Byggdes", värde: "1909" },
            { titel: "Plats", värde: "Santa Monica, Kalifornien" },
            { titel: "Särdrag", värde: "Slutpunkten för historiska Route 66" }
        ],
        historia: "Santa Monica Pier öppnades 1909 och blev snabbt en populär plats för nöje och rekreation vid Stillahavskusten. Piren är berömd för nöjesparken Pacific Park och sitt ikoniska solcellsdrivna pariserhjul.",
        attraktioner: [
            { titel: "Pacific Park", beskrivning: "Nöjespark ute på piren med karuseller och bergochdalbanan West Coaster." },
            { titel: "Route 66-skylten", beskrivning: "Symbolisk skylt som markerar den officiella slutpunkten för den legendariska landsvägen Route 66." },
            { titel: "Pacific Wheel", beskrivning: "Världens första solcellsdrivna pariserhjul med panoramautsikt över kusten och havet." }
        ],
        transport: "Metro Expo Line (E Line) till stationen Downtown Santa Monica eller buss/hyrbil från centrala Los Angeles."
    },
    "kristus-fralsaren": {
        namn: "Kristus Frälsaren (Cristo Redentor)",
        land: "Brasilien, Rio de Janeiro",
        varldsdel: "Sydamerika",
        bild: "christ the redeemer.jpg",
        kortBeskrivning: "Gigantisk art déco-staty av Jesus Kristus högt uppe på berget Corcovado med utsikt över Rio de Janeiro.",
        fakta: [
            { titel: "Invigd", värde: "1931" },
            { titel: "Höjd", värde: "30 meter (exkl. 8 m sockel)" },
            { titel: "Unesco-status", värde: "Världsarv & ett av världens sju nya underverk" }
        ],
        historia: "Statyn uppfördes mellan 1922 och 1931 som en symbol för brasiliansk kristendom och fred. Den ritades av den brasilianska ingenjören Heitor da Silva Costa och skulpterades av den fransk-polske konstnären Paul Landowski.",
        attraktioner: [
            { titel: "Utsiktsplatserna vid sockeln", beskrivning: "Panoramavy över Sugarloaf Mountain, Copacabana-stranden och Guanabarabukten." },
            { titel: "Tijucaskogen", beskrivning: "Världens största stadsnära regnskog som omger berget Corcovado." },
            { titel: "Corcovado-kuggstångsbanan", beskrivning: "Historisk bergbanetåg som tar besökare genom regnskogen upp till statyn." }
        ],
        transport: "Kuggstångsbana (Trem do Corcovado) eller auktoriserade skyttelbussar från Cosme Velho."
    },
    "moai-statyerna": {
        namn: "Moai-statyerna (Påskön)",
        land: "Chile, Påskön",
        varldsdel: "Oceanien",
        bild: "moai statues.jpg",
        kortBeskrivning: "Gåtfulla och monumentala stenskulpturer skapade av Rapa Nui-folket på Påskön.",
        fakta: [
            { titel: "Skapade", värde: "Ca 1250–1500 e.Kr." },
            { titel: "Antal statyer", värde: "Över 900 moai" },
            { titel: "Unesco-status", värde: "Världsarv (Rapa Nui nationalpark)" }
        ],
        historia: "Moai-statyerna höggs ut ur vulkanisk tuff av Rapa Nui-befolkningen för att hedra betydelsefulla förfäder och hövdingar. Många av statyerna står placerade på stenplattformar kallade 'ahu' och blickar in mot ön.",
        attraktioner: [
            { titel: "Ahu Tongariki", beskrivning: "Den största plattformen med 15 stående moai-statyer på rad vid havet." },
            { titel: "Rano Raraku", beskrivning: "Vulkanbrottet där nästan alla statyer höggs ut och där hundratals oavslutade moai finns kvar." },
            { titel: "Anakena-stranden", beskrivning: "Pittoresk sandstrand med palmer och plattformen Ahu Nau Nau." }
        ],
        transport: "Flyg med LATAM från Santiago de Chile till Mataveri International Airport på Påskön."
    },
    "cn-tower": {
        namn: "CN Tower",
        land: "Kanada, Toronto",
        varldsdel: "Nordamerika",
        bild: "CN tower.jpg",
        kortBeskrivning: "Ett av världens högsta fristående torn och ett välkänt landmärke i Torontos skyline.",
        fakta: [
            { titel: "Invigt", värde: "1976" },
            { titel: "Höjd", värde: "553,3 meter" },
            { titel: "Typ", värde: "Kommunikations- & observationstorn" }
        ],
        historia: "CN Tower uppfördes av järnvägsbolaget Canadian National mellan 1973 och 1976 för att lösa kommunikationsproblem i Toronto. Tornet var världens högsta fristående byggnad i över 30 år fram till 2007.",
        attraktioner: [
            { titel: "LookOut & Glass Floor", beskrivning: "Utsiktsplan med glasgolv där besökare kan titta 342 meter rakt ner." },
            { titel: "EdgeWalk", beskrivning: "Handsfree-promenad på kanten utanför tornets tak på 356 meters höjd." },
            { titel: "360 Restaurant", beskrivning: "Roterande restaurang med panoramautsikt över Toronto och Ontariosjön." }
        ],
        transport: "Kort promenad från Union Station i centrala Toronto."
    },
    "vita-huset": {
        namn: "Vita huset (The White House)",
        land: "USA, Washington D.C.",
        varldsdel: "Nordamerika",
        bild: "white house.jpg",
        kortBeskrivning: "Officiellt residens och arbetsplats för USA:s president vid Pennsylvania Avenue.",
        fakta: [
            { titel: "Byggstart", värde: "1792" },
            { titel: "Arkitekt", värde: "James Hoban" },
            { titel: "Adress", värde: "1600 Pennsylvania Avenue NW" }
        ],
        historia: "Vita huset har varit officiellt residens för alla amerikanska presidenter sedan John Adams år 1800. Byggnaden brändes ner av brittiska trupper under 1812 års krig men återuppbyggdes och har utökats under årens lopp.",
        attraktioner: [
            { titel: "Oval Office", beskrivning: "Presidentens berömda arbetsrum beläget i den västra flygeln (West Wing)." },
            { titel: "Lafayette Square", beskrivning: "Historisk park norr om Vita huset med utmärkt utsikt över norra fasaden." },
            { titel: "National Mall", beskrivning: "Den storslagna parken tätt intill med Washingtonmonumentet och Lincoln Memorial." }
        ],
        transport: "Metro till stationerna McPherson Square, Metro Center eller Federal Triangle."
    },
    "atacamaoknen": {
        namn: "Atacamaöknen (Atacama Desert)",
        land: "Chile, Antofagasta",
        varldsdel: "Sydamerika",
        bild: "atacama desert.jpg",
        kortBeskrivning: "Världens torraste icke-polära öken känd för sina marsliknande landskap och stjärnskådning.",
        fakta: [
            { titel: "Yta", värde: "Ca 105 000 km²" },
            { titel: "Höjd", värde: "2 000–4 000 m ö.h." },
            { titel: "Särdrag", värde: "Världens torraste öken & optimal för astronomi" }
        ],
        historia: "Atacamaöknen har varit extremt torr i miljontals år på grund av regnskuggan från Andesbergen och den kalla Humboldtströmmen. Området rymmer rika geoglyfer, saltöknar och några av världens mest avancerade astronomiska observatorier.",
        attraktioner: [
            { titel: "Valle de la Luna (Måndalen)", beskrivning: "Dramatiska sanddyner, saltformationer och raviner som liknar månytan." },
            { titel: "Salar de Atacama", beskrivning: "Chiles största saltöken känd för sina saltsjöar och rikt fågelliv." },
            { titel: "El Tatio-gejsrarna", beskrivning: "Ett av världens högst belägna gejserfält med storslagna ångpelare vid soluppgången." }
        ],
        transport: "Flyg till Calama (CJC) och därefter buss eller transfer till oasbyn San Pedro de Atacama."
    },
    "angel-falls": {
        namn: "Angel Falls (Salto Ángel)",
        land: "Venezuela, Bolívar",
        varldsdel: "Sydamerika",
        bild: "angel falls.jpg",
        kortBeskrivning: "Världens högsta oavbrutna vattenfall beläget i djungeln i Canaima nationalpark.",
        fakta: [
            { titel: "Höjd", värde: "979 meter (fritt fall 807 m)" },
            { titel: "Plats", värde: "Auyán-tepui, Canaima nationalpark" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1994" }
        ],
        historia: "Vattenfallet kallas Kerepakupai Merú på det lokala pemonspråket. Det blev internationellt känt efter att den amerikanske flygaren Jimmie Angel flög över och landade nära fallet 1933.",
        attraktioner: [
            { titel: "Auyán-tepui", beskrivning: "Det gigantiska platta platåberget varifrån vattenfallet kastar sig ner." },
            { titel: "Canaimalagunen", beskrivning: "Naturskön lagun med rosa sand och omgivande vattenfall som Salto Hacha." },
            { titel: "Båttur på Churún-floden", beskrivning: "Flodexpedition i kanoter för att nå utsiktsplatsen vid fallets fot." }
        ],
        transport: "Inrikesflyg till Canaima flygplats (CAJ) följt av båtexpedition längs floderna."
    },
    "times-square": {
        namn: "Times Square",
        land: "USA, New York",
        varldsdel: "Nordamerika",
        bild: "times square.jpg",
        kortBeskrivning: "New Yorks pulserande hjärta känt för sina gigantiska LED-skärmar, teatrar och nyårsfirande.",
        fakta: [
            { titel: "Plats", värde: "Midtown Manhattan, New York" },
            { titel: "Smeknamn", värde: "Världens korsning (Crossroads of the World)" },
            { titel: "Särdrag", värde: "Broadwayteatrar & nyårskulan (Ball Drop)" }
        ],
        historia: "Platsen hette ursprungligen Longacre Square men döptes om till Times Square 1904 när tidningen The New York Times flyttade sitt högkvarter hit. Området utvecklades snabbt till USA:s mest kända nöjes- och teaterdistrikt.",
        attraktioner: [
            { titel: "Röda TKTS-trappan", beskrivning: "Ikonisk trappa i hjärtat av torget med fantastisk utsikt över alla neonskyltar." },
            { titel: "Broadway-teatrar", beskrivning: "Världsberömda musikal- och teaterföreställningar i kvarteren runt torget." },
            { titel: "One Times Square", beskrivning: "Byggnaden där den berömda nyårskulan släpps varje nyårsafton." }
        ],
        transport: "Tunnelbana (Subway) till stationen Times Square – 42nd St (linjerna 1, 2, 3, 7, N, Q, R, W, S)."
    },
    "empire-state-building": {
        namn: "Empire State Building",
        land: "USA, New York",
        varldsdel: "Nordamerika",
        bild: "empire state building.jpg",
        kortBeskrivning: "Ikonisk art déco-skyskrapa på Manhattan som var världens högsta byggnad i nästan fyra decennier.",
        fakta: [
            { titel: "Invigd", värde: "1931" },
            { titel: "Höjd", värde: "381 meter (443 m inkl. spira)" },
            { titel: "Arkitektur", värde: "Art déco" }
        ],
        historia: "Empire State Building uppfördes på rekordtid under den stora depressionen och invigdes 1931. Byggnaden var världens högsta skyskrapa från 1931 till 1970 och har synts i hundratals filmer, däribland King Kong.",
        attraktioner: [
            { titel: "Observation Deck (86:e våningen)", beskrivning: "Öppen utsiktsplattform med 360-graders vy över New Yorks skyline." },
            { titel: "102nd Floor Observatory", beskrivning: "Exklusivt utsiktsplan med panoramafönster från golv till tak." },
            { titel: "Art déco-lobbyn", beskrivning: "Kulturmärkt entréhall med gulddekorationer och relief av skyskrapan." }
        ],
        transport: "Tunnelbana till 34th St – Penn Station eller 34th St – Herald Square."
    },
    "disneyland-orlando": {
        namn: "Walt Disney World (Magic Kingdom)",
        land: "USA, Florida",
        varldsdel: "Nordamerika",
        bild: "disneyland orlando.jpg",
        kortBeskrivning: "Världens mest kända temaparkskomplex med det magiska Askungeslottet i centrum.",
        fakta: [
            { titel: "Invigt", värde: "1971" },
            { titel: "Plats", värde: "Lake Buena Vista / Orlando, Florida" },
            { titel: "Landmärke", värde: "Askungeslottet (Cinderella Castle)" }
        ],
        historia: "Walt Disney World öppnade 1971 och var Walt Disneys drömprojekt om att skapa ett ännu större nöjeskomplex än det ursprungliga Disneyland i Kalifornien. Magic Kingdom är hjärtat i resorten och besöks av miljontals människor varje år.",
        attraktioner: [
            { titel: "Cinderella Castle", beskrivning: "Det ikoniska sago-slottet som står i slutet av Main Street, U.S.A." },
            { titel: "Space Mountain & Big Thunder Mountain", beskrivning: "Klassiska berg- och dalbanor med rymd- respektive vilda västern-tema." },
            { titel: "Happily Ever After", beskrivning: "Storslaget kvällsfyrverkeri med projektioner och musik över slottet." }
        ],
        transport: "Flyg till Orlando International Airport (MCO) och därefter busstransfer, taxi eller hyrbil till resorten."
    },
    "glaciaren-patagonien": {
        namn: "Patagoniens glaciärer (Torres del Paine / Grey)",
        land: "Chile & Argentina",
        varldsdel: "Sydamerika",
        bild: "glaciären patagonien.png",
        kortBeskrivning: "Mäktiga azurblå isformationer och dramatiska bergstoppar i södra Patagonien.",
        fakta: [
            { titel: "Region", värde: "Patagonien (Chile / Argentina)" },
            { titel: "Kända glaciärer", värde: "Glaciären Grey & Perito Moreno" },
            { titel: "Särdrag", värde: "Enorm issköljd söder om Antarktis" }
        ],
        historia: "Södra Patagoniens isfält är en av världens största färskvattenreserver utanför polartrakterna. Områdets glaciärer och vassa bergsryggar har skulpterats under tusentals år av istider.",
        attraktioner: [
            { titel: "Glaciären Grey", beskrivning: "Imponerande blå isvägg belägen i nationalparken Torres del Paine." },
            { titel: "Båttur på Lago Grey", beskrivning: "Navigera bland flytande isberg fram till glaciärkanten." },
            { titel: "Is-vandring", beskrivning: "Guidad vandring med stegjärn direkt på glaciärens sprakande is." }
        ],
        transport: "Flyg till Punta Arenas eller Puerto Natales i Chile, därefter buss eller hyrbil till nationalparken."
    },
    "salar-de-uyuni": {
        namn: "Salar de Uyuni",
        land: "Bolivia, Potosí",
        varldsdel: "Sydamerika",
        bild: "salt öken.png",
        kortBeskrivning: "Världens största saltöken som förvandlas till en gigantisk spegel under regnperioden.",
        fakta: [
            { titel: "Yta", värde: "Över 10 000 km²" },
            { titel: "Höjd", värde: "3 656 m ö.h." },
            { titel: "Särdrag", värde: "Världens största saltsjö" }
        ],
        historia: "Salar de Uyuni bildades när flera förhistoriska sjöar torkade ut för tiotusentals år sedan. Idag täcks området av ett flera meter tjockt salttäcke som rymmer enorma tillgångar av litium och mineraler.",
        attraktioner: [
            { titel: "Spegeleffekten", beskrivning: "Under regnperioden (december–mars) täcks saltet av vatten och reflekterar himlen perfekt." },
            { titel: "Isla Incahuasi", beskrivning: "Klippö mitt i saltöknen bevuxen med hundraåriga jättekaktusar." },
            { titel: "Salthotellen", beskrivning: "Unika hotell byggda helt av saltblock utvunna direkt ur öknen." }
        ],
        transport: "Inrikesflyg från La Paz till Uyuni flygplats (UYU) eller nattbuss/tåg, följt av fyrhjulsdriven jeep."
    },
    "stanley-park": {
        namn: "Stanley Park",
        land: "Kanada, Vancouver",
        varldsdel: "Nordamerika",
        bild: "stanley park.jpg",
        kortBeskrivning: "Lummig stadspark omgiven av Stilla havet med fantastisk utsikt över Vancouvers skyskrapor.",
        fakta: [
            { titel: "Invigd", värde: "1888" },
            { titel: "Yta", värde: "405 hektar" },
            { titel: "Plats", värde: "Vancouver, British Columbia" }
        ],
        historia: "Stanley Park var ursprungligen hem för urfolken Coast Salish i tusentals år innan området vigdes till stadspark 1888. Parken är större än Central Park i New York och bevarar en tät barrskog mitt i storstaden.",
        attraktioner: [
            { titel: "Vancouver Seawall", beskrivning: "Milstolpe lång strandpromenad och cykelväg runt hela parkens kustlinje." },
            { titel: "Brockton Point Totem Poles", beskrivning: "Färgstarka träskurna totempålar skapade av Kanadas urfolk." },
            { titel: "Prospect Point", beskrivning: "Högsta utsiktsplatsen i parken med vy över Lions Gate Bridge och bergen." }
        ],
        transport: "Kort promenad, cykeltur eller lokalbuss från centrala Vancouver (Downtown)."
    },
    "yellowstone": {
        namn: "Yellowstone National Park",
        land: "USA, Wyoming",
        varldsdel: "Nordamerika",
        bild: "yellowstone.jpg",
        kortBeskrivning: "Världens första nationalpark känd för sina färgstarka varma källor, gejsrar och ett rikt djurliv.",
        fakta: [
            { titel: "Grundad", värde: "1872" },
            { titel: "Mest känd källa", värde: "Grand Prismatic Spring" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1978" }
        ],
        historia: "Yellowstone etablerades 1872 som världens allra första nationalpark. Parken ligger ovanpå en gigantisk supervulkan vilket skapar områdets unika geotermiska aktivitet med hälften av världens alla gejsrar.",
        attraktioner: [
            { titel: "Grand Prismatic Spring", beskrivning: "USA:s största varma källa känd för sina spektakulära regnbågsfärger." },
            { titel: "Old Faithful", beskrivning: "Känd gejser som regelbundet sprutar kokande vatten tiotals meter upp i luften." },
            { titel: "Lamar Valley", beskrivning: "Dalgång känd för rika hjordar av vilda bisonoxar, björnar och vargar." }
        ],
        transport: "Flyg till Jackson Hole (JAC), Bozeman (BZN) eller West Yellowstone och hyrbil in i parken."
    },
    "bryce-canyon": {
        namn: "Bryce Canyon National Park",
        land: "USA, Utah",
        varldsdel: "Nordamerika",
        bild: "bryce canyon.jpg",
        kortBeskrivning: "Unikt naturreservat berömt för sina tusentals orangeröda stenspira-formationer kallade hoodoos.",
        fakta: [
            { titel: "Höjd", värde: "2 400–2 700 m ö.h." },
            { titel: "Formationer", värde: "Hoodoos (stenspiror)" },
            { titel: "Plats", värde: "Sydvästra Utah" }
        ],
        historia: "Trots namnet är Bryce Canyon egentligen inte en kanjon utan en serie gigantiska naturliga amfiteatrar. Vind, frost och vatten har format den mjuka kalkstenen till tusentals pelare i nyanser av rött, orange och vitt.",
        attraktioner: [
            { titel: "Bryce Amphitheater", beskrivning: "Parkens största och mest spektakulära samling av stenspiror." },
            { titel: "Navajo Loop Trail", beskrivning: "Populär vandringsled som slingrar sig ner mellan de branta stenpelarna." },
            { titel: "Inspiration Point", beskrivning: "Utsiktsplats som ger en slående överblick över hela klipplandskapet." }
        ],
        transport: "Hyrbil från Las Vegas (ca 4 timmar) eller Salt Lake City (ca 4 timmar)."
    },
    "mojave-desert": {
        namn: "Mojaveöknen (Mojave Desert)",
        land: "USA, Kalifornien",
        varldsdel: "Nordamerika",
        bild: "mojave desert.jpg",
        kortBeskrivning: "Ikoniskt ökenlandskap känt för sina karakteristiska Joshua-träd, vindkraftparker och karga berg.",
        fakta: [
            { titel: "Yta", värde: "Ca 124 000 km²" },
            { titel: "Karaktärsväxt", värde: "Joshua Tree (Yucca brevifolia)" },
            { titel: "Plats", värde: "Kalifornien / Nevada / Utah / Arizona" }
        ],
        historia: "Mojaveöknen är en regnskuggsöken belägen mellan Sierra Nevada-bergen och Los Angeles-bassängen. Den rymmer historiska färdvägar, gamla gruvstäder och den berömda Dödens dal (Death Valley).",
        attraktioner: [
            { titel: "Joshua Tree National Park", beskrivning: "Känd för sina unika krokiga Joshua-träd och gigantiska granitblock." },
            { titel: "Kelso Dunes", beskrivning: "Massiva sanddyner som ger ifrån sig ett brummande ljud när sanden rör sig." },
            { titel: "Vindkraftparkerna", beskrivning: "Stora fält med vindkraftverk som kantar ökenlandskapet nära San Gorgonio Pass." }
        ],
        transport: "Hyrbil från Los Angeles, Palm Springs eller Las Vegas längs Interstate 15 eller Route 66."
    },
    "fuji": {
        namn: "Mount Fuji (Fujisan)",
        land: "Japan, Honshu",
        varldsdel: "Asien",
        bild: "mount Fuji.png",
        kortBeskrivning: "Japans högsta och mest ikoniska vulkan med sin snöklädda, perfekta konform.",
        fakta: [
            { titel: "Höjd", värde: "3 776 m ö.h." },
            { titel: "Typ", värde: "Aktiv stratovulkan" },
            { titel: "Unesco-status", värde: "Världsarv sedan 2013" }
        ],
        historia: "Mount Fuji har varit ett heligt berg inom shintoism och buddhism i århundraden och ett av Japans viktigaste kulturella symboler. Vulkanen hade sitt senaste utbrott 1707.",
        attraktioner: [
            { titel: "Chureito-pagoden", beskrivning: "Klassisk utsiktsplats med femvåningspagod och Fuji i bakgrunden." },
            { titel: "Fuji Five Lakes (Kawaguchiko)", beskrivning: "Sjöområde vid bergets fot med vackra speglingar och varma källor (onsen)." },
            { titel: "Toppbestigning", beskrivning: "Populär vandringsled under sommarmånaderna för att se soluppgången från toppen." }
        ],
        transport: "Tåg (JR Chuo Line/Fujikyu Railway) eller direktbuss från Tokyo/Shinjuku till Kawaguchiko."
    },
    "bangkok-chinatown": {
        namn: "Yaowarat (Chinatown Bangkok)",
        land: "Thailand, Bangkok",
        varldsdel: "Asien",
        bild: "bangkok.png",
        kortBeskrivning: "Färgstark och livlig stadsdel känd för neonskyltar, tempel och gatumat i världsklass.",
        fakta: [
            { titel: "Grundat", värde: "1782" },
            { titel: "Huvudgata", värde: "Yaowarat Road" },
            { titel: "Särdrag", värde: "Ett av världens största Chinatowns" }
        ],
        historia: "Bangkoks Chinatown etablerades på 1700-talet när kinesiska köpmän flyttade till området i samband med att Bangkok blev Thailands nya huvudstad. Det är än idag stadens kommersiella hjärta för guld och kryddor.",
        attraktioner: [
            { titel: "Yaowarat Road Street Food", beskrivning: "Kvällsmarknad med skaldjur, dim sum, nudlar och thailändska desserter." },
            { titel: "Wat Traimit", beskrivning: "Tempel som rymmer världens största massiva guldbuddha (5,5 ton)." },
            { titel: "Sampeng Lane", beskrivning: "Trång och intensiv marknadsgränd fylld med tyger, souvenirer och grossistvaror." }
        ],
        transport: "MRT (tunnelbana) till stationen Wat Mangkon eller flodbåt till Ratchawong Pier."
    },
    "sydney-opera-house": {
        namn: "Operahuset i Sydney",
        land: "Australien, Sydney",
        varldsdel: "Oceanien",
        bild: "sydney oprah house.png",
        kortBeskrivning: "Världsberömt arkitektoniskt mästerverk vid Bennelong Point i Sydney Harbour.",
        fakta: [
            { titel: "Invigt", värde: "1973" },
            { titel: "Arkitekt", värde: "Jørn Utzon (Danmark)" },
            { titel: "Unesco-status", värde: "Världsarv sedan 2007" }
        ],
        historia: "Operahuset ritades av den danska arkitekten Jørn Utzon efter en internationell tävling 1957. Dess unika skalformade tak har gjort byggnaden till en av 1900-talets mest berömda arkitektoniska ikoner.",
        attraktioner: [
            { titel: "Konserthallarna", beskrivning: "Gå på opera, teater eller konsert i den storslagna Concert Hall." },
            { titel: "Sydney Harbour Bridge", beskrivning: "Den ikoniska bron belägen alldeles intill Operahuset vid vattnet." },
            { titel: "Guided Backstage Tour", beskrivning: "Guidad tur bakom kulisserna och in i de unika segelkonstruktionerna." }
        ],
        transport: "Tåg, buss eller färja direkt till Circular Quay, därefter några minuters promenad."
    },
    "hong-kong-skyline": {
        namn: "Victoria Peak & Hong Kong Skyline",
        land: "Kina, Hongkong",
        varldsdel: "Asien",
        bild: "hong kong.png",
        kortBeskrivning: "Spektakulär panoramautsikt över Hongkongs täta skyskrapor och Victoria Harbour.",
        fakta: [
            { titel: "Höjd (The Peak)", värde: "552 m ö.h." },
            { titel: "Plats", värde: "Hong Kong Island" },
            { titel: "Särdrag", värde: "En av världens mest täta skyskrape-skylines" }
        ],
        historia: "Victoria Peak har sedan kolonialtiden varit Hongkongs mest exklusiva bostadsområde tack vare sin svala bergsbris. Idag är berget den mest populära utsiktsplatsen i staden.",
        attraktioner: [
            { titel: "Peak Tram", beskrivning: "Historisk bergbana från 1888 som klättrar brant uppför berget." },
            { titel: "Sky Terrace 428", beskrivning: "Utsiktsplattform på toppen med 360-graders vy över skyskraporna och hamnen." },
            { titel: "A Symphony of Lights", beskrivning: "Ljus- och lasershow varje kväll över skyskraporna i Victoria Harbour." }
        ],
        transport: "Peak Tram från Central, buss 15 från Exchange Square eller taxi upp till The Peak."
    },
    "kinesiska-muren": {
        namn: "Kinesiska muren",
        land: "Kina, Beijing",
        varldsdel: "Asien",
        bild: "kinesiska muren.png",
        kortBeskrivning: "Världens största byggnadsverk bestående av försvarsmurar tvärs över norra Kina.",
        fakta: [
            { titel: "Längd", värde: "Över 21 000 km (totalt mur-system)" },
            { titel: "Byggdes", värde: "200-talet f.Kr. – 1600-talet" },
            { titel: "Unesco-status", värde: "Världsarv & ett av världens sju nya underverk" }
        ],
        historia: "Muren uppfördes och byggdes ut av flera kinesiska dynastier (särskilt Mingdynastin) för att skydda riket mot nomadnationsinvasioner från norr. Den består av murar, vakttorn och fästningar.",
        attraktioner: [
            { titel: "Mutianyu", beskrivning: "Välbevarad och naturskön del av muren med linbana och rodelbana ner." },
            { titel: "Badaling", beskrivning: "Den mest kända och tillgängliga sträckan nära Beijing." },
            { titel: "Simatai & Jinshanling", beskrivning: "Vildare och mer autentiska delar av muren för vandring." }
        ],
        transport: "Utflyktsbuss, tåg eller privat chaufför från centrala Beijing (ca 1,5–2 timmar)."
    },
    "wat-rong-khun": {
        namn: "Wat Rong Khun (Vita templet)",
        land: "Thailand, Chiang Rai",
        varldsdel: "Asien",
        bild: "wat rong khun.png",
        kortBeskrivning: "Unikt och kritvitt buddhistiskt tempelkomplex dekorerat med spegelglas och surrealistisk konst.",
        fakta: [
            { titel: "Påbörjat", värde: "1997" },
            { titel: "Konstnär", värde: "Chalermchai Kositpipat" },
            { titel: "Plats", värde: "Chiang Rai, Norra Thailand" }
        ],
        historia: "Templet skapades av den thailändska konstnären Chalermchai Kositpipat som ett personligt livsverk. Den vita färgen symboliserar Buddhas renhet och spegelglaset hans visdom som strålar över universum.",
        attraktioner: [
            { titel: "Huvudtemplet (Ubosot)", beskrivning: "Nås via en bro över en 'sjö' av utsträckta händer som symboliserar mänskliga begär." },
            { titel: "Den gyllene Byggnaden", beskrivning: "Guldskimrande och överdådig byggnad som inrymmer toaletter och galleri." },
            { titel: "Konstgalleriet", beskrivning: "Utställning med konstnärens målningar och skisser." }
        ],
        transport: "Lokalbuss, songthaew eller tuk-tuk från centrala Chiang Rai (ca 20 minuter)."
    },
    "statue-of-unity": {
        namn: "Statue of Unity",
        land: "Indien, Gujarat",
        varldsdel: "Asien",
        bild: "statue of unity.png",
        kortBeskrivning: "Världens högsta staty, resd till minne av den indiska frihetskämpen Vallabhbhai Patel.",
        fakta: [
            { titel: "Invigd", värde: "2018" },
            { titel: "Höjd", värde: "182 meter" },
            { titel: "Plats", värde: "Narmada-distriktet, Gujarat" }
        ],
        historia: "Statyn föreställer Sardar Vallabhbhai Patel, en av det självständiga Indiens grundare som enade landets 565 furstestater. Den står vid Narmadafloden mittemot Sardar Sarovar-dammen.",
        attraktioner: [
            { titel: "Viewing Gallery", beskrivning: "Utsiktsgalleri inuti statyns bröstkorg på 153 meters höjd med vy över floden." },
            { titel: "Museum & Besökscenter", beskrivning: "Interaktivt museum i statyns bas om Patels liv och Indiens enande." },
            { titel: "Valley of Flowers", beskrivning: "Stort botaniskt parkområde som omger monumentet." }
        ],
        transport: "Tåg till Ekta Nagar (Kevadiya) station eller bil/buss från Vadodara (ca 90 km)."
    },
    "petra": {
        namn: "Petra",
        land: "Jordanien, Ma'an",
        varldsdel: "Asien",
        bild: "petra jordanien.png",
        kortBeskrivning: "Antik rosaröd stad uthuggen direkt ur klipporna i Jordaniens öken.",
        fakta: [
            { titel: "Byggdes", värde: "Ca 300 f.Kr." },
            { titel: "Kultur", värde: "Nabaterna" },
            { titel: "Unesco-status", värde: "Världsarv & ett av världens sju nya underverk" }
        ],
        historia: "Petra var huvudstad i det nabatfeiska riket och ett blomstrande handelscentrum för kryddor och siden. Staden karvades direkt ur sandstensklipporna och glömdes bort för omvärlden fram till 1812.",
        attraktioner: [
            { titel: "Al-Khazneh (Skattekammaren)", beskrivning: "Den mest kända klippfasaden som uppenbarar sig i slutet av Siq-ravinen." },
            { titel: "Siq", beskrivning: "En 1,2 km lång och smal naturravin som utgör huvudentrén till staden." },
            { titel: "Ad-Deir (Klostret)", beskrivning: "Monumental klippbyggnad högt uppe i bergen efter en vandring på 800 trappsteg." }
        ],
        transport: "Buss eller hyrbil från Amman (ca 3 timmar) eller Aqaba (ca 2 timmar) till Wadi Musa."
    },
    "burj-khalifa": {
        namn: "Burj Khalifa",
        land: "Förenade Arabemiraten, Dubai",
        varldsdel: "Asien",
        bild: "burj khalifa.png",
        kortBeskrivning: "Världens högsta skyskrapa och en spektakulär symbol för det moderna Dubai.",
        fakta: [
            { titel: "Invigd", värde: "2010" },
            { titel: "Höjd", värde: "828 meter (163 våningar)" },
            { titel: "Arkitekt", värde: "Adrian Smith / Skidmore, Owings & Merrill" }
        ],
        historia: "Byggandet påbörjades 2004 och skyskrapan invigdes 2010. Byggnaden är uppkallad efter Förenade Arabemiratens dåvarande president Khalifa bin Zayed Al Nahyan och slog flera världsrekord vid öppnandet.",
        attraktioner: [
            { titel: "At the Top (124:e & 148:e våningen)", beskrivning: "Utsiktsplattformar med panoramavy över öknen, staden och Persiska viken." },
            { titel: "The Dubai Fountain", beskrivning: "Koreograferad vatten- och ljusshow i sjön nedanför tornet." },
            { titel: "The Dubai Mall", beskrivning: "Ett av världens största köpcentrum beläget direkt vid skyskrapans fot." }
        ],
        transport: "Dubai Metro (Röda linjen) direkt till stationen Burj Khalifa / Dubai Mall."
    },
    "mecka": {
        namn: "Mekka & Abraj Al-Bait",
        land: "Saudiarabien, Mekka",
        varldsdel: "Asien",
        bild: "mecca.png",
        kortBeskrivning: "Islamens heligaste stad med den stora moskén Al-Haram och det gigantiska klocktornet.",
        fakta: [
            { titel: "Helgedom", värde: "Kaba i Al-Haram-moskén" },
            { titel: "Landmärke", värde: "Makkah Royal Clock Tower (601 meter)" },
            { titel: "Särdrag", värde: "Målet för den årliga vallfärden Hajj" }
        ],
        historia: "Mekka är profeten Muhammeds födelseort och den plats mot vilken muslimer över hela världen vänder sig i sina dagliga böner. Klocktornet Abraj Al-Bait uppfördes för att ta emot de miljontals pilgrimer som besöker staden.",
        attraktioner: [
            { titel: "Masjid al-Haram", beskrivning: "Världens största moské som omsluter den heliga byggnaden Kaba." },
            { titel: "Makkah Clock Tower", beskrivning: "Ett av världens högsta hus med en urtavla som är 35 gånger större än Big Ben." },
            { titel: "Klocktorns-museet", beskrivning: "Museum om astronomi, tidmätning och bygget längst upp i tornet." }
        ],
        transport: "Snabbtåg (Haramain High Speed Railway) från Jidda (Jeddah) flygplats directly till Mekka."
    },
    "taj-mahal": {
        namn: "Taj Mahal",
        land: "Indien, Agra",
        varldsdel: "Asien",
        bild: "taj mahal.png",
        kortBeskrivning: "Storslaget mausoleum i vit marmor, uppfört som en kärleksförklaring och ett av världens sju nya underverk.",
        fakta: [
            { titel: "Byggdes", värde: "1631–1653" },
            { titel: "Byggherre", värde: "Mogulkejsaren Shah Jahan" },
            { titel: "Unesco-status", värde: "Världsarv & ett av världens sju nya underverk" }
        ],
        historia: "Taj Mahal uppfördes av mogulkejsaren Shah Jahan till minne av hans älskade hustru Mumtaz Mahal efter hennes död. Det tog över 20 år och cirka 20 000 hantverkare att färdigställa byggnaden, som anses vara höjdpunkten av indisk-islamisk arkitektur.",
        attraktioner: [
            { titel: "Huvudmausoleet", beskrivning: "Ikonisk byggnad i ren vit marmor dekorerad med inlagda halvädelstenar och kalligrafi." },
            { titel: "Mogulträdgårdarna (Charbagh)", beskrivning: "Symmetriskt anlagd persisk trädgård med en lång spegeldamm i mitten." },
            { titel: "Röda sandstensmoskén", beskrivning: "Vacker moské och dess spegelbildsbyggnad (Jawab) som kantar mausoleets sidor." }
        ],
        transport: "Snabbtåg (Gatimaan Express) från New Delhi till Agra Cantt station (ca 1,5 timme) och därefter taxi eller el-tuk-tuk."
    },
    "maldiverna": {
        namn: "Maldiverna (Soneva Jani / Noonu-atollen)",
        land: "Maldiverna",
        varldsdel: "Asien",
        bild: "maldiverna.png",
        kortBeskrivning: "Tropiskt öparadis med turkosa laguner, korallrev och ikoniska villor byggda på stolpar i vattnet.",
        fakta: [
            { titel: "Plats", värde: "Indiska oceanen" },
            { titel: "Öar", värde: "Över 1 100 korallöar fördelade på 26 atoller" },
            { titel: "Särdrag", värde: "Världens lägsta land (i genomsnitt 1,5 m ö.h.)" }
        ],
        historia: "Maldiverna har bebotts i över 2 500 år av sjöfarare från det indiska subkontinenten och Sri Lanka. Öriket förvandlades under 1970-talet till ett av världens mest exklusiva resmål för sol, dykning och lyxigt vattenvillaboende.",
        attraktioner: [
            { titel: "Vattenvillor & Laguner", beskrivning: "Lyxvillor på styltor över det kristallklara vattnet, ofta utrustade med privata vattenrutschbanor." },
            { titel: "Snorkling och dykning", beskrivning: "Rika korallrev med djurliv som mantor, valhajar och färgglada tropiska fiskar." },
            { titel: "Sandbankar & Ö-hoppning", beskrivning: "Utflykter till helt öde sandrev mitt i oceanen för picknick och avkoppling." }
        ],
        transport: "Sjöflygplan (seaplane) eller snabbåt från Malés internationella flygplats (MLE) till respektive resortö."
    },
    "chongqing": {
        namn: "Chongqing Skyline & Hongyadong",
        land: "Kina, Chongqing",
        varldsdel: "Asien",
        bild: "chongqing.png",
        kortBeskrivning: "Futuristisk och kuperad bergsmotorpol känd som 'Cyberpunk-staden' vid Yangtze-floden.",
        fakta: [
            { titel: "Invånarantal", värde: "Över 30 miljoner (storstadsområdet)" },
            { titel: "Floder", värde: "Mötesplats för Yangtze och Jialing" },
            { titel: "Särdrag", värde: "Känd för sin 3D-arkitektur och starka hotpot" }
        ],
        historia: "Chongqing har en fleratusenårig historia och fungerade som Kinas provisoriska huvudstad under andra världskriget. Idag är det en av världens snabbast växande megastäder med spektakulär arkitektur byggd i olika nivåer på bergen.",
        attraktioner: [
            { titel: "Hongyadong", beskrivning: "Traditionell stilt-byggnadskomplex i elva våningar som lyser upp magiskt i guld vid floden om natten." },
            { titel: "Liziba Monorail", beskrivning: "Berömd tågstation där monorail-tåget kör rakt igenom ett bostadshus." },
            { titel: "Raffles City Chongqing", beskrivning: "Futuristiskt skyskrapekomplex med en liggande 'horisontell skyskrapa' (The Crystal) på toppen." }
        ],
        transport: "Chongqing Rail Transit (CRT) tunnelbana/monorail, flodbåtar eller taxi från Jiangbei International Airport (CKG)."
    },
    "karst-bergen-guilin": {
        namn: "Karstbergen i Guilin & Yangshuo (Moon Hill)",
        land: "Kina, Guangxi",
        varldsdel: "Asien",
        bild: "karst bergen.png",
        kortBeskrivning: "Sagoskulpturerade karstbergslandskap längs Li-floden med den berömda Månhöjden (Moon Hill).",
        fakta: [
            { titel: "Geologi", värde: "Karstlandskap av kalksten" },
            { titel: "Plats", värde: "Yangshuo, Guilin, Guangxi" },
            { titel: "Unesco-status", värde: "Världsarv (Södra Kinas karst)" }
        ],
        historia: "Karstformationerna bildades under hundratals miljoner år när antika hav torkade ut och regnvatten vittrade sönder kalkstenen. Landskapet har i århundraden inspirerat klassisk kinesisk poesi och målarkonst.",
        attraktioner: [
            { titel: "Moon Hill (Månhöjden)", beskrivning: "Ikoniskt karstberg med ett stort naturligt månformat hål rakt igenom klippan." },
            { titel: "Bamskling på Li-floden", beskrivning: "Klassisk båttur på bambuflottar mellan dramatiska bergstoppar och grönskande dalar." },
            { titel: "Yulong River Valley", beskrivning: "Naturskön dalgång perfekt för cykling och vandring bland risterrasserna." }
        ],
        transport: "Snabbtåg till Guilin eller Yangshuo station, därefter lokalbuss, cykel eller scooter i Yangshuo."
    },
    "jewel-changi-airport": {
        namn: "Jewel Changi Airport",
        land: "Singapore",
        varldsdel: "Asien",
        bild: "singapore airport.png",
        kortBeskrivning: "Spektakulär natur- och köpcentrumkupol med världens högsta inomhusvattenfall.",
        fakta: [
            { titel: "Invigt", värde: "2019" },
            { titel: "Arkitekt", värde: "Moshe Safdie" },
            { titel: "Höjd på vattenfall", värde: "40 meter (Rain Vortex)" }
        ],
        historia: "Jewel byggdes på den tidigare parkeringsplatsen vid Terminal 1 på Changi-flygplatsen för att förstärka Singapores position som en global flyghub. Det kombinerar en tropisk regnskogsträdgård med över 200 butiker och restauranger under ett kupolformat glastak.",
        attraktioner: [
            { titel: "HSBC Rain Vortex", beskrivning: "Världens högsta inomhusvattenfall där regnvatten störtar sju våningar ner från kupolens mitt." },
            { titel: "Shiseido Forest Valley", beskrivning: "En klimatkontrollerad inomhusträdgård i fyra våningar med tusentals träd och växter." },
            { titel: "Canopy Park", beskrivning: "Översta planet med nätpromenader, studsmattor, labyrinter och glasskulpterade utsiktsbroar." }
        ],
        transport: "Anslutet direkt via gångbroar till Terminal 1, 2 och 3 på Singapore Changi Airport samt via MRT (Changi Airport station)."
    },
    "ashgabat-självständighetsmonumentet": {
        namn: "Självständighetsmonumentet i Asjchabad",
        land: "Turkmenistan, Asjchabad",
        varldsdel: "Asien",
        bild: "ashgabat.png",
        kortBeskrivning: "Monumental vit marmorpelare utformad som ett traditionellt turkmeniskt tält och minaret.",
        fakta: [
            { titel: "Invigt", värde: "2001" },
            { titel: "Höjd", värde: "118 meter" },
            { titel: "Plats", värde: "Självständighetsparken, Asjchabad" }
        ],
        historia: "Monumentet uppfördes för att fira Turkmenistans självständighet från Sovjetunionen 1991. Höjden på 118 meter symboliserar datumet för självständighetsförklaringen (27 oktober, där 27 + 91 = 118).",
        attraktioner: [
            { titel: "Monumenttornet", beskrivning: "Ikoniskt vitt torn toppat med en gyllene halvmåne och fem stjärnor som representerar landets fem stammar." },
            { titel: "Statyerna av nationalhjältar", beskrivning: "Storslagen allé som omger monumentet med bronstatyer av turkmeniska historiska ledare." },
            { titel: "Självständighetsparken", beskrivning: "Enorm park med ståtliga fontäner, guldstatyer och obelisker i ren vit marmor." }
        ],
        transport: "Taxi eller buss från centrala Asjchabad eller från Ashgabat International Airport (ASB)."
    },
    "gyllene-templet": {
        namn: "Gyllene templet (Harmandir Sahib)",
        land: "Indien, Amritsar",
        varldsdel: "Asien",
        bild: "golden tempel.jpg",
        kortBeskrivning: "Sikhismens allra heligaste helgedom, förgylld med äkta guld och omgiven av en helig sjö.",
        fakta: [
            { titel: "Grundat", värde: "1589 (påbörjades av Guru Arjan)" },
            { titel: "Plats", värde: "Amritsar, Punjab" },
            { titel: "Särdrag", värde: "Täckt av guldblad och öppet för människor av alla trosuppfattningar" }
        ],
        historia: "Harmandir Sahib ritades av den femte sikhiske gurun, Guru Arjan, för att vara en central plats för tillbedjan för alla människor oavsett kast eller religion. Templet kläddes i guld under Maharaja Ranjit Singhs styre på 1800-talet.",
        attraktioner: [
            { titel: "Amrit Sarovar", beskrivning: "Den heliga 'nektarsjön' som omger templet där pilgrimer utför rituella bad." },
            { titel: "Guru ka Langar", beskrivning: "Världens största frikök som serverar gratis vegetarisk mat till tiotusentals besökare varje dag." },
            { titel: "Akal Takht", beskrivning: "Sikhismens högsta religiösa och politiska säte beläget mittemot templet." }
        ],
        transport: "Tåg till Amritsar Junction eller flyg till Sri Guru Ram Dass Jee International Airport (ATQ) + taxi/gratis skyttelbuss."
    },
    "hampi": {
        namn: "Hampi (Vittala-templet)",
        land: "Indien, Karnataka",
        varldsdel: "Asien",
        bild: "hampi.jpg",
        kortBeskrivning: "Mytomspunnen ruinstad från Vijayanagarriket med det berömda stenvagns-monumentet.",
        fakta: [
            { titel: "Storhetstid", värde: "1300–1500-talet" },
            { titel: "Rike", värde: "Vijayanagarriket" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1986" }
        ],
        historia: "Hampi var huvudstad i det rika Vijayanagarriket och en av världens största städer på 1500-talet. Efter en ödesdiger erövring 1565 övergavs staden, men dess storslagna tempel, bazare och stenarkitektur finns bevarade mitt i ett unikt granitlandskap.",
        attraktioner: [
            { titel: "Vittala-templets stenvagn (Stone Chariot)", beskrivning: "Ikonisk och detaljrikt uthuggen stridsvagn i sten tillägnad guden Vishnu." },
            { titel: "Musikalpelarna (Musical Pillars)", beskrivning: "Pillars i Vittala-templet som avger tonala klangljud när man knackar lätt på dem." },
            { titel: "Virupaksha-templet", beskrivning: "Aktivt och storslaget tempelkomplex med ett 49 meter högt gopuram-torn." }
        ],
        transport: "Tåg till Hosapete (Hospet) station (ca 13 km från Hampi) eller nattbuss från Bengaluru/Goa."
    },
    "gateway-of-india": {
        namn: "Gateway of India",
        land: "Indien, Mumbai",
        varldsdel: "Asien",
        bild: "gateway of india.jpg",
        kortBeskrivning: "Storslagen triumfbåge vid Arabiska havet som utgör Mumbais mest kända landmärke.",
        fakta: [
            { titel: "Invigd", värde: "1924" },
            { titel: "Arkitektur", värde: "Indo-saracenisk stil" },
            { titel: "Plats", värde: "Apollo Bunder, Colaba, Mumbai" }
        ],
        historia: "Triumfbågen uppfördes för att fira kung Georg V och drottning Marys besök i Indien 1911. Byggnaden fick senare en historisk innebörd när de sista brittiska trupperna lämnade Indien genom porten år 1948.",
        attraktioner: [
            { titel: "Apollo Bunder-promenaden", beskrivning: "Livlig mötesplats vid vattnet med utsikt över Arabiska havet och fartygstrafiken." },
            { titel: "Taj Mahal Palace Hotel", beskrivning: "Det legendariska lyxhotellet från 1903 beläget alldeles intill monumentet." },
            { titel: "Färjor till Elephanta Caves", beskrivning: "Utgångspunkt för båtturer till Elephanta-ön och dess antika klipptempel." }
        ],
        transport: "Lokalbuss eller taxi till Colaba i södra Mumbai, eller kort resa från Chhatrapati Shivaji Maharaj Terminus (CSMT)."
    },
    "mysore-palace": {
        namn: "Mysore Palace (Amba Vilas)",
        land: "Indien, Karnataka",
        varldsdel: "Asien",
        bild: "mysore palace.jpg",
        kortBeskrivning: "Överdådigt kungligt palats känd för sina kupoler, färgstarka interiörer och kvällsbelysning.",
        fakta: [
            { titel: "Färdigställt", värde: "1912" },
            { titel: "Dynasti", värde: "Wodeyardynastin" },
            { titel: "Arkitekt", värde: "Henry Irwin" }
        ],
        historia: "Det nuvarande palatset uppfördes efter att det gamla träpalatset brann ner under ett bröllop 1897. Det ritades i indo-saracenisk stil och fungerade som officiellt residens för maharajorna av Mysore.",
        attraktioner: [
            { titel: "Söndagsbelysningen", beskrivning: "Varje söndagkväll och under festivaler lyses hela palatset upp av närmare 100 000 glödlampor." },
            { titel: "Durbar Hall", beskrivning: "Storslagen audienssal med målade tak, marmorpelare och färgade glasfönster." },
            { titel: "Gyllene tronstolen (Chinnada Simhasana)", beskrivning: "Legendarisk tronstol i guld som visas upp under den årliga Dasara-festivalen." }
        ],
        transport: "Tåg till Mysuru Junction station eller buss/bil från Bengaluru (ca 3 timmar)."
    },
    "udaipur-lake-palace": {
        namn: "Udaipur Lake Palace (Taj Lake Palace)",
        land: "Indien, Rajasthan",
        varldsdel: "Asien",
        bild: "udaipur.jpg",
        kortBeskrivning: "Magiskt marmorpalats som tycks flyta på vattnet mitt i sjön Pichola.",
        fakta: [
            { titel: "Byggdes", värde: "1743–1746" },
            { titel: "Byggherre", värde: "Maharana Jagat Singh II" },
            { titel: "Plats", värde: "Sjön Pichola, Udaipur" }
        ],
        historia: "Palatset byggdes ursprungligen som ett sommarresidens (Jag Niwas) för kungafamiljen i Mewar. Byggnaden är helt klädd i vit marmor och förvandlades under 1960-talet till ett världskänt lyxhotell som bland annat synts i James Bond-filmen *Octopussy*.",
        attraktioner: [
            { titel: "Sjön Pichola", beskrivning: "Målarrisk insjö som omger palatset med utsikt mot Aravallibergen och City Palace." },
            { titel: "City Palace Udaipur", beskrivning: "Det gigantiska palatskomplexet på stranden mittemot Lake Palace." },
            { titel: "Jag Mandir", beskrivning: "En annan historisk palatsö i sjön Pichola känd för sina stenelefanter." }
        ],
        transport: "Båt från staden Udaipurs pirar (t.ex. Rameshwar Ghat); flyg till Maharana Pratap Airport (UDR)."
    },
    "tigers-nest": {
        namn: "Paro Taktsang (Tiger's Nest)",
        land: "Bhutan, Paro",
        varldsdel: "Asien",
        bild: "tigers nest.jpg",
        kortBeskrivning: "Heligt bhutanesiskt kloster klamrat vid en stupande klippvägg över Parodalen.",
        fakta: [
            { titel: "Byggdes", värde: "1692" },
            { titel: "Höjd", värde: "3 120 m ö.h. (ca 900 m ovanför dalen)" },
            { titel: "Plats", värde: "Parodalen, Bhutan" }
        ],
        historia: "Enligt legenden flög Guru Rinpoche till denna klippa på ryggen av en tigerinna för att meditera i en grotta under 700-talet. Klostret uppfördes kring grottan 1692 och är idag Bhutans mest berömda kultur- och pilgrimsplats.",
        attraktioner: [
            { titel: "Huvudtempelkomplexet", beskrivning: "Samling av fyra tempel och bostadskvarter sammankopplade med trappor uthuggna i klippan." },
            { titel: "Meditationsgrottan", beskrivning: "Den heliga grottan där Guru Rinpoche sägs ha mediterat i tre månader." },
            { titel: "Vandringsleden & Utsiktskaféet", beskrivning: "Naturskön vandring genom tallskogar med böneflaggor och panoramavyer över klostret." }
        ],
        transport: "Flyg till Paro International Airport (PBH) följt av bil till ledernas startpunkt och därefter 2–3 timmars vandring uppför berget."
    },
    "konark-sun-temple": {
        namn: "Soltemplet i Konark (Konark Sun Temple)",
        land: "Indien, Odisha",
        varldsdel: "Asien",
        bild: "konark sun temple.jpg",
        kortBeskrivning: "Storslaget 1200-talstempel utformat som en gigantisk stridsvagn åt solguden Surya.",
        fakta: [
            { titel: "Byggdes", värde: "Ca 1250 e.Kr." },
            { titel: "Byggherre", värde: "Konung Narasimhadeva I" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1984" }
        ],
        historia: "Templet uppfördes av Östra Gangadynastin och utformades som solguden Suryas vagn med 24 uthuggna stenhjul dragna av sju hästar. Det är ett mästerverk inom östra Indiens Kalinga-arkitektur.",
        attraktioner: [
            { titel: "Solhjulen (Konark Wheels)", beskrivning: "Tolv par detaljrikt uthuggna stenhjul som också fungerade som exakta solur." },
            { titel: "Nata Mandir (Danshallen)", beskrivning: "Uthuggen hall täckt av skulpturer som avbildar klassiska dansare och musiker." },
            { titel: "Murens stenskulpturer", beskrivning: "Rikt dekorerade lättreliefer med mytologiska väsen, djur och erotiska motiv." }
        ],
        transport: "Buss eller taxi från Puri (ca 35 km) eller Bhubaneswar (ca 65 km); närmaste flygplats är Biju Patnaik (BBI)."
    },
    "faisal-mosken": {
        namn: "Faisalmoskén (Faisal Mosque)",
        land: "Pakistan, Islamabad",
        varldsdel: "Asien",
        bild: "shah faisal.jpg",
        kortBeskrivning: "Modern och monumental moské utformad som ett beduintält vid foten av Margallabergen.",
        fakta: [
            { titel: "Invigd", värde: "1986" },
            { titel: "Arkitekt", värde: "Vedat Dalokay (Turkiet)" },
            { titel: "Särdrag", värde: "Saknar traditionella kupoler och formar ett tält med fyra 88 m höga minareter" }
        ],
        historia: "Bygget finansierades av kung Faisal av Saudiarabien och påbörjades 1976. Moskén ritades av den turkiske arkitekten Vedat Dalokay och kombinerar stolt modern arkitektur med traditionella islamiska linjer.",
        attraktioner: [
            { titel: "Stora bönehallen", beskrivning: "Gigantisk hall med plats för tiotusentals bedjande, upplyst av en enorm ljuskrona." },
            { titel: "De fyra minareterna", beskrivning: "Slanka, turkisk-inspirerade minareter som sträcker sig 88 meter upp i luften." },
            { titel: "Gårdsplanen", beskrivning: "Marmorbelagd innergård omgiven av vattenbassänger och arkader med utsikt över bergen." }
        ],
        transport: "Taxi eller lokalbuss från centrala Islamabad eller Rawalpindi."
    },
    "lahore-fort": {
        namn: "Lahores fort (Shahi Qila)",
        land: "Pakistan, Lahore",
        varldsdel: "Asien",
        bild: "lahore fort.jpg",
        kortBeskrivning: "Historisk mogulfästning känd för sin överdådiga marmorarkitektur och spegelpalats.",
        fakta: [
            { titel: "Grundat", värde: "Antikt ursprung (ombyggt på 1500-talet av kejsar Akbar)" },
            { titel: "Dynasti", värde: "Mogulriket" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1981" }
        ],
        historia: "Fortet byggdes om och utökades under flera påföljande mogulkejsare som Akbar, Jahangir, Shah Jahan och Aurangzeb. Det utgjorde maktens centrum i regionen och representerar höjdpunkten av indoislamisk fästningsarkitektur.",
        attraktioner: [
            { titel: "Sheesh Mahal (Spegelpalatset)", beskrivning: "Överdådigt palats klätt med miljontals små speelmosaiker och marmorutskärningar." },
            { titel: "Alamgiri-porten", beskrivning: "Mäktig fästningsport byggd av kejsar Aurangzeb som utgör fortets ikoniska entré." },
            { titel: "Diwan-i-Aam", beskrivning: "Storslagen pelarhall där mogulkejsarna tog emot allmänhetens audiens." }
        ],
        transport: "Taxi, rickshaw eller tunnelbana (Orange Line) till centrala Lahore nära Badshahi-moskén."
    },
    "ha-giang": {
        namn: "Ha Giang-provinsen",
        land: "Vietnam, Ha Giang",
        varldsdel: "Asien",
        bild: "ha giang 1.png",
        kortBeskrivning: "Dramatiskt bergslandskap i norra Vietnam känt för terrasserade risfält och etniska byar.",
        fakta: [
            { titel: "Plats", värde: "Norra Vietnam (gränsar till Kina)" },
            { titel: "Känt för", värde: "Dong Van Karst Plateau & Ha Giang Loop" },
            { titel: "Kultur", värde: "Hem för över 20 etniska minoritetsfolk" }
        ],
        historia: "Ha Giang har länge varit en av Vietnams mest isolerade bergsregioner. Områdets unika kultur och terrasserade jordbruk har bevarats genom århundraden av lokala stamfolk som Hmong, Tay och Dao.",
        attraktioner: [
            { titel: "Ma Pi Leng-passet", beskrivning: "Spektakulärt bergspass med stupande dalar och utsikt över den turkosa Nho Que-floden." },
            { titel: "Dong Van Karst Geo-park", beskrivning: "Unesco-skyddat kalkstenslandskap fyllt med djupa raviner och toppar." },
            { titel: "Terrasserade risfält", beskrivning: "Grönskande och gyllene odlingar som kantar bergssluttningarna under skördetid." }
        ],
        transport: "Nattbuss från Hanoi till Ha Giang stad, därefter motorcykel eller hyrbil med chaufför längs Ha Giang Loop."
    },
    "jerevan": {
        namn: "Jerevan (Yerevan)",
        land: "Armenien",
        varldsdel: "Asien",
        bild: "yerevan.png",
        kortBeskrivning: "Historisk huvudstad känd som 'Den rosa staden' med storslagen utsikt mot berget Ararat.",
        fakta: [
            { titel: "Grundad", värde: "782 f.Kr. (Erebuni)" },
            { titel: "Smeknamn", värde: "Den rosa staden" },
            { titel: "Utsikt", värde: "Berget Ararat" }
        ],
        historia: "Jerevan är en av världens äldsta kontinuerligt bebodda städer, grundad som fästningen Erebuni 782 f.Kr. Staden kallas den rosa staden på grund av den vulkaniska tuffstenen som använts i många av dess byggnader.",
        attraktioner: [
            { titel: "Kaskaden (The Cascade)", beskrivning: "Gigantisk kalkstenstrappa och konstmonument med utsikt över staden och berget Ararat." },
            { titel: "Republiktorget", beskrivning: "Stadens centrala torg omgivet av ståtliga byggnader i rosa och gul tuff samt sjungande fontäner." },
            { titel: "Matenadaran", beskrivning: "Världskänt museum och arkiv som inrymmer tusentals antika armeniska handskrifter." }
        ],
        transport: "Flyg till Zvartnots internationella flygplats (EVN) följt av taxi eller buss till centrum."
    },
    "khudayar-khan-palace": {
        namn: "Khudayar Khans palats",
        land: "Uzbekistan, Kokand",
        varldsdel: "Asien",
        bild: "palace of khudayar.png",
        kortBeskrivning: "Överdådigt 1800-talspalats känt som 'Kokands pärla' med färgstarka kakelfasader.",
        fakta: [
            { titel: "Byggdes", värde: "1863–1871" },
            { titel: "Byggherre", värde: "Khudayar Khan" },
            { titel: "Särdrag", värde: "Sista härskarpalatset i Kokand-khanatet" }
        ],
        historia: "Palatset uppfördes av Kokand-khanatets sista härskare, Khudayar Khan. Det storslagna komplexet bestod ursprungligen av sju innergårdar och 119 rum, dekorerade med färgstarkt keramik- och kakelarbete av mästerhantverkare.",
        attraktioner: [
            { titel: "Fasaden och entréporten", beskrivning: "Mäktig portal täckt med geometriska mönster i blått, gult och grönt kakel." },
            { titel: "Tronsalen och Audiensrummen", beskrivning: "Bevarade salar med rikt snidade träpelare och målade gipstak." },
            { titel: "Kokands regionala museum", beskrivning: "Museum inrymt i palatset som visar khanatets historia och konsthantverk." }
        ],
        transport: "Tåg från Tasjkent eller Samarkand till Kokand station, därefter taxi eller marshrutka till palatset."
    },
    "gyeongbokgung": {
        namn: "Gyeongbokgung-palatset",
        land: "Sydkorea, Seoul",
        varldsdel: "Asien",
        bild: "gyeongbokgung palace.jpg",
        kortBeskrivning: "Det största och mest storslagna av de fem kungliga palatsen från Joseondynastin.",
        fakta: [
            { titel: "Grundat", värde: "1395" },
            { titel: "Dynasti", värde: "Joseondynastin" },
            { titel: "Plats", värde: "Jongno-gu, centrala Seoul" }
        ],
        historia: "Gyeongbokgung byggdes som huvudpalats för Joseondynastin vid grundandet av den nya huvudstaden. Palatset har förstörts under invasioner och återuppbyggts, och bevarar idag Koreas mest ikoniska kungliga arkitektur.",
        attraktioner: [
            { titel: "Gwanghwamun-porten", beskrivning: "Huvudentrén där den färgstarka vaktombytesceremonin äger rum dagligen." },
            { titel: "Gyeonghoeru-paviljongen", beskrivning: "Storslagen träpaviljong belägen i en damm, använd för statliga banketter." },
            { titel: "National Palace Museum of Korea", beskrivning: "Museum inom palatsområdet som visar skatter från Joseondynastin." }
        ],
        transport: "Seoul Subway (Linje 3) direkt till Gyeongbokgung Station (Exit 5)."
    },
    "kiyomizudera": {
        namn: "Kiyomizu-dera",
        land: "Japan, Kyoto",
        varldsdel: "Asien",
        bild: "kiyomizudera.jpg",
        kortBeskrivning: "Gammalt buddhistiskt tempel berömt för sin gigantiska träveranda och panoramautsikt över Kyoto.",
        fakta: [
            { titel: "Grundat", värde: "778 e.Kr." },
            { titel: "Träkonstruktion", värde: "Byggd helt utan spikar" },
            { titel: "Unesco-status", värde: "Världsarv (Historiska Kyoto)" }
        ],
        historia: "Kiyomizu-dera betyder 'Det rena vattnets tempel' och härstammar från den heliga Otowa-källan vid bergets fot. Det nuvarande huvudtemplet återuppbyggdes 1633 utan en enda spik.",
        attraktioner: [
            { titel: "Kiyomizu-scenen (Hondō)", beskrivning: "Ikonisk träplattform på styltor som skjuter ut över bergssluttningen med vy över Kyoto." },
            { titel: "Otowa-vattenfallet", beskrivning: "Tre vattenstrålar där besökare dricker för hälsa, långt liv eller framgång i studier." },
            { titel: "Koyasu-pagoden", beskrivning: "Trevåningspagod omgiven av körsbärsträd och lönnskogar." }
        ],
        transport: "Buss från Kyoto Station till Gojo-zaka eller Kiyomizu-michi, därefter en kort promenad uppför de historiska gränderna."
    },
    "tokyo-tower": {
        namn: "Tokyo Tower",
        land: "Japan, Tokyo",
        varldsdel: "Asien",
        bild: "tokyo tower.jpg",
        kortBeskrivning: "Ikoniskt röd-vitt stål- och kommunikationstorn inspirerat av Eiffeltornet i Paris.",
        fakta: [
            { titel: "Invigt", värde: "1958" },
            { titel: "Höjd", värde: "332,9 meter" },
            { titel: "Plats", värde: "Minato, Tokyo" }
        ],
        historia: "Tokyo Tower uppfördes 1958 som en symbol för Japans återhämtning efter andra världskriget och fungerade som huvudsändare för TV och radio i regionen. Tornet är målat i vitt och internationellt orange för flygsäkerhetens skull.",
        attraktioner: [
            { titel: "Main Deck (150 m)", beskrivning: "Utsiktsplan i två våningar med glasgolv och panoramavy över Tokyo." },
            { titel: "Top Deck (250 m)", beskrivning: "Exklusivt utsiktsplan med spegeldekorationer och vy ända till Mount Fuji vid klart väder." },
            { titel: "FootTown", beskrivning: "Byggnaden under tornet fylld med butiker, kaféer och nöjesattraktioner." }
        ],
        transport: "Tunnelbana till stationerna Akabanebashi (Toei Oedo Line) eller Kamiyacho (Tokyo Metro Hibiya Line)."
    },
    "shibuya-crossing": {
        namn: "Shibuya Crossing",
        land: "Japan, Tokyo",
        varldsdel: "Asien",
        bild: "shibuya crossing.jpg",
        kortBeskrivning: "Världens mest berömda och trafikerade fotgängarkorsning utanför Shibuya station.",
        fakta: [
            { titel: "Plats", värde: "Shibuya, Tokyo" },
            { titel: "Kapacitet", värde: "Upp till 3 000 personer per grön ljussignal" },
            { titel: "Särdrag", värde: "Ikonisk korsning omgiven av gigantiska neonskärmar" }
        ],
        historia: "Shibuya Crossing växte fram under 1900-talets expandering av Tokyo och blev ett kommersiellt och kulturellt centrum för unga. När alla trafikljus slår om till rött samtidigt stannar all bilpolitik och tusentals fotgängare korsar gatan åt alla håll.",
        attraktioner: [
            { titel: "Shibuya Sky", beskrivning: "Utsiktsplattform på taket av skyskrapan Shibuya Scramble Square med utsikt över hela korsningen." },
            { titel: "Hachiko-statyn", beskrivning: "Mötesplats och bronsstaty av den trogna hunden Hachiko utanför stationen." },
            { titel: "Starbucks Tsutaya", beskrivning: "Klassisk utsiktsplats på andra våningen för att beskåda myllret ovanifrån." }
        ],
        transport: "Tåg eller tunnelbana (JR Yamanote Line, Tokyo Metro) direkt till Shibuya Station (Hachiko Exit)."
    },
    "nara-park": {
        namn: "Nara-parken (Nara Park)",
        land: "Japan, Nara",
        varldsdel: "Asien",
        bild: "nara park.jpg",
        kortBeskrivning: "Historisk stadspark känd för sina hundratals fritt strövande och tama sikahjortar.",
        fakta: [
            { titel: "Etablerad", värde: "1880" },
            { titel: "Invånare", värde: "Över 1 000 fritt strövande sikahjortar" },
            { titel: "Unesco-status", värde: "Inrymmer flera världsarvstempel" }
        ],
        historia: "Enligt lokal shinto-tro betraktades hjortarna i Nara som heliga budbärare från gudarna. Idag är de skyddade som nationalskatter och rör sig fritt bland besökare, tempel och träddungar.",
        attraktioner: [
            { titel: "Todai-ji", beskrivning: "Gigantiskt trätempel som inrymmer den enorma bronstatyn av den Stora Buddhan (Daibutsu)." },
            { titel: "Shika Senbei", beskrivning: "Speciella kex som besökare kan köpa för att handmata de bockande hjortarna." },
            { titel: "Kasuga Taisha", beskrivning: "Naras mest kända shinto-helgedom prydd med tusentals stensmyckade lyktor." }
        ],
        transport: "Tåg (Kintetsu Line eller JR Line) från Kyoto eller Osaka till Nara Station, därefter en kort promenad."
    },
    "flame-towers-baku": {
        namn: "Flame Towers (Baku)",
        land: "Azerbajdzjan, Baku",
        varldsdel: "Asien",
        bild: "baku.jpg",
        kortBeskrivning: "Tre flamboyanta skyskrapor utformade som eldslågor som dominerar Bakus skyline.",
        fakta: [
            { titel: "Färdigställda", värde: "2012" },
            { titel: "Höjd", värde: "Upp till 182 meter" },
            { titel: "Belysning", värde: "Över 10 000 LED-skärmar" }
        ],
        historia: "Azerbajdzjan kallas historiskt för 'Eldens land' på grund av sina naturliga gas- och oljekällor. Skyskraporna uppfördes för att symbolisera denna historia och landets moderna ekonomiska tillväxt.",
        attraktioner: [
            { titel: "LED-ljusshowen", beskrivning: "Skyskrapornas fasader förvandlas varje kväll till en gigantisk skärm med flammande eld och flaggmotiv." },
            { titel: "Highland Park (Dagustu Park)", beskrivning: "Utsiktspark belägen alldeles intill tornen med panorama över Bakubukten." },
            { titel: "Baku Funicular", beskrivning: "Bergbana som tar besökare från strandpromenaden upp till foten av Flame Towers." }
        ],
        transport: "Bergbana (Baku Funicular) eller taxi/buss från Icherisheher (Gamla stan) upp till Highland Park."
    },
    "borobudur": {
        namn: "Borobudur",
        land: "Indonesien, Java",
        varldsdel: "Asien",
        bild: "borobudur.jpg",
        kortBeskrivning: "Världens största buddhistiska tempelkomplex dekorerat med hundratals stupor och stupande lättreliefer.",
        fakta: [
            { titel: "Byggdes", värde: "700–800-talet e.Kr." },
            { titel: "Dynasti", värde: "Sailendradynastin" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1991" }
        ],
        historia: "Borobudur uppfördes som ett mahayana-buddhistiskt monument på centrala Java. Templet övergavs på 1300-talet när ön konverterade till islam och täcktes av vulkanaska och djungel fram till återupptäckten 1814.",
        attraktioner: [
            { titel: "De klockformade stuporna", beskrivning: "72 genombrutna stupor på de tre översta runda terrasserna med buddhastatyer inuti." },
            { titel: "Reliefpanelerna", beskrivning: "Över 2 600 detaljrika stentavlor som skildrar Buddhas liv och lära." },
            { titel: "Soluppgång över Merapi", beskrivning: "Känd utsikt från templet över dimmiga dalar och den aktiva vulkanen Merapi." }
        ],
        transport: "Buss eller dagsutflykt med bil från Yogyakarta (ca 1 timme)."
    },
    "pyramiderna-i-giza": {
        namn: "Pyramiderna i Giza & Sfinxen",
        land: "Egypten, Giza",
        varldsdel: "Afrika",
        bild: "giza.png",
        kortBeskrivning: "Det enda bevarade underverket från den antika världen, bestående av de tre stora faraopyramiderna.",
        fakta: [
            { titel: "Byggdes", värde: "Ca 2560–2500 f.Kr." },
            { titel: "Största pyramid", värde: "Cheopspyramiden (138,8 meter hög)" },
            { titel: "Unesco-status", värde: "Världsarv (Memfis med dess nekropoler)" }
        ],
        historia: "Pyramiderna uppfördes under Egyptens gamla rike som gigantiska gravmonument åt faraonerna Cheops, Chefren och Mykerinos. De byggdes med enorm teknisk precision av tiotusentals yrkesarbetare.",
        attraktioner: [
            { titel: "Cheopspyramiden", beskrivning: "Den största pyramiden, ursprungligen klädd i slät vit kalksten." },
            { titel: "Sfinxen i Giza", beskrivning: "Monumental skulptur med lejongrupp och faraoansikte som väktare över nekropolen." },
            { titel: "Grand Egyptian Museum (GEM)", beskrivning: "Närbeläget supermuseum som inrymmer Tutankhamons alla skatter." }
        ],
        transport: "Taxi, Uber eller guidad buss från centrala Kairo till Gizaplatån."
    },
    "kilimanjaro": {
        namn: "Kilimanjaro",
        land: "Tanzania",
        varldsdel: "Afrika",
        bild: "kilimanjaro.png",
        kortBeskrivning: "Afrikas högsta berg och världens högsta fristående vulkaniska bergsmassiv.",
        fakta: [
            { titel: "Höjd", värde: "5 895 m ö.h. (Uhuru Peak)" },
            { titel: "Typ", värde: "Slocknad stratovulkan med tre toppar" },
            { titel: "Unesco-status", värde: "Världsarv (Kilimanjaro nationalpark)" }
        ],
        historia: "Kilimanjaro har rest sig ur det östafrikanska förkastningssystemet under miljontals år. Berget upptäcktes internationellt under 1800-talet och nåddes för första gången av Hans Meyer och Ludwig Purtscheller 1889.",
        attraktioner: [
            { titel: "Uhuru Peak", beskrivning: "Den högsta punkten på Kibo-kratern och Afrikas tak." },
            { titel: "Vegetationszonerna", beskrivning: "Vandringsleder som passerar allt från regnskog och hedlandskap till alpin öken och glaciärer." },
            { titel: "Shira-platån", beskrivning: "Dramatisk vulkanisk högplatå med fantastisk utsikt över Kibo-toppen." }
        ],
        transport: "Flyg till Kilimanjaro International Airport (JRO) följt av transfer till Moshi eller Arusha."
    },
    "victoriafallen": {
        namn: "Victoriafallen (Mosi-oa-Tunya)",
        land: "Zambia & Zimbabwe",
        varldsdel: "Afrika",
        bild: "albrecht fietz.png",
        kortBeskrivning: "Ett av världens största och mest spektakulära vattenfall på Zambezifloden.",
        fakta: [
            { titel: "Bredd & Djup", värde: "1 708 meter brett & 108 meter djupt" },
            { titel: "Lokalt namn", värde: "Mosi-oa-Tunya (Röken som dundrar)" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1989" }
        ],
        historia: "Fallen har vördats av lokala folk i årtusenden. Den brittiske utforskaren David Livingstone blev 1855 den förste europén att skåda vattenfallet och döpte det efter drottning Victoria.",
        attraktioner: [
            { titel: "Devil's Pool", beskrivning: "Naturlig klippbassäng vid vattenfallskanten på den zambiska sidan där man kan simma under torrsäsongen." },
            { titel: "Victoria Falls Bridge", beskrivning: "Historisk järnvägsbro från 1905 som spänner över Zambeziravinen." },
            { titel: "Helikoptertur ('Flight of Angels')", beskrivning: "Flygtur som visar det gigantiska vattenskalets hela bredd ovanifrån." }
        ],
        transport: "Flyg till Victoria Falls Airport (VFA) i Zimbabwe eller Livingstone Airport (LVI) i Zambia."
    },
    "arulmigu-navasakti-vinayagar": {
        namn: "Arulmigu Navasakti Vinayagar Temple",
        land: "Seychellerna, Victoria",
        varldsdel: "Afrika",
        bild: "arulmigu navasakti vinayagar temple.jpg",
        kortBeskrivning: "Färgstarkt hinduiskt tempel prytt med rika gudaskulpturer mitt i Seychellernas huvudstad.",
        fakta: [
            { titel: "Byggdes", värde: "1992" },
            { titel: "Plats", värde: "Victoria, ön Mahé" },
            { titel: "Särdrag", värde: "Det enda hinduiska templet i Seychellerna" }
        ],
        historia: "Templet uppfördes för att tjäna det växande hinduiska samfundet på Mahé och uppkallades efter guden Ganesha (Vinayagar). Dets färgstarka gopuram-torn har blivit ett av Victorias mest fotograferade landmärken.",
        attraktioner: [
            { titel: "Gopuram-tornet", beskrivning: "Det höga entrétornet dekorerat med hundratals färgstarka skulpturer av hinduiska gudar." },
            { titel: "Innerhelgedomen", beskrivning: "Templets inre rum där rituella ceremonier och böner (puja) hålls dagligen." },
            { titel: "Taippoosam Kavadi-festivalen", beskrivning: "Årlig hinduisk högtid då färgstarka processioner utgår från templet." }
        ],
        transport: "Gångavstånd från centrala Victoria på ön Mahé, eller lokalbuss/taxi från övriga delar av ön."
    },
    "marrakech-medina": {
        namn: "Marrakech Medina & Koutoubia",
        land: "Marocko, Marrakech",
        varldsdel: "Afrika",
        bild: "marrakech.jpg",
        kortBeskrivning: "Historisk rosa stadsdel känd för sina ringlande basarer, innergårdar och Höga Atlasbergen i bakgrunden.",
        fakta: [
            { titel: "Grundad", värde: "1070" },
            { titel: "Smeknamn", värde: "Den röda staden (La Ville Rouge)" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1985" }
        ],
        historia: "Marrakech grundades av Almoravid-dynastin som en viktig handelsmetropol för karavaner över Sahara. Medinans röda lergipsväggar och minareter har bevarat sin medeltida karaktär i nästan tusen år.",
        attraktioner: [
            { titel: "Jemaa el-Fnaa", beskrivning: "Det berömda centrala torget fyllt med sagoberättare, ormtjusare, matstånd och musiker." },
            { titel: "Koutoubia-moskén", beskrivning: "Stadens största moské med en 77 meter hög minaret som utgjorde förebild för Giralda i Sevilla." },
            { titel: "Soukerna (Basarerna)", beskrivning: "Labyrintiska marknadsgränder med hantverk, kryddor, läder och tidsenliga lyktor." }
        ],
        transport: "Taxi eller gångavstånd från centrala Marrakech; flyg till Marrakech Menara Airport (RAK)."
    },
    "kapstaden-och-signal-hill": {
        namn: "Kapstaden & Lions Head",
        land: "Sydafrika, Kapstaden",
        varldsdel: "Afrika",
        bild: "kapstaden.jpg",
        kortBeskrivning: "Spektakulär kuststad belägen vid foten av Taffelberget och Lions Head längs Atlantkusten.",
        fakta: [
            { titel: "Grundad", värde: "1652" },
            { titel: "Ikoniska berg", värde: "Table Mountain & Lion's Head" },
            { titel: "Plats", värde: "Västra Kapprovinsen, Sydafrika" }
        ],
        historia: "Kapstaden etablerades av Nederländska Ostindiska Kompaniet som en proviantstation för fartyg på väg till Asien. Staden har utvecklats till Sydafrikas kulturella och turistiska nav med unik natur och dramatiska bergsryggar.",
        attraktioner: [
            { titel: "Taffelberget (Table Mountain)", beskrivning: "Det platta berget som nås via linbana med panoramavy över hela staden och havet." },
            { titel: "Victoria & Alfred Waterfront", beskrivning: "Livligt hamnområde fyllt med restauranger, butiker och gatukonstnärer." },
            { titel: "Camps Bay & Clifton Beaches", beskrivning: "Exklusiva vita sandstränder kramade av bergsformationen De tolv apostlarna." }
        ],
        transport: "MyCiTi-bussar, Uber eller hyrbil från Cape Town International Airport (CPT)."
    },
    "zanzibar": {
        namn: "Zanzibar (Nungwi & Kendwa Beach)",
        land: "Tanzania, Zanzibar",
        varldsdel: "Afrika",
        bild: "zanzibar beach.jpg",
        kortBeskrivning: "Tropiskt öparadis känt för kritvita sandstränder, turkost vatten och traditionella dhow-båtar.",
        fakta: [
            { titel: "Plats", värde: "Indiska oceanen, Tanzania" },
            { titel: "Smeknamn", värde: "Kryddön (Spice Island)" },
            { titel: "Kända stränder", värde: "Nungwi Beach & Kendwa Beach" }
        ],
        historia: "Zanzibar har under århundraden varit ett centralt handelsnav för kryddor, siden och elfenben i Indiska oceanen. Öns unika kultur är en färgstark blandning av afrikanska, arabiska, indiska och portugisiska influenser.",
        attraktioner: [
            { titel: "Nungwi & Kendwa Beach", beskrivning: "Bred snövit sandstrand med kristallklart badvatten som påverkas minimalt av tidvattnet." },
            { titel: "Stone Town", beskrivning: "Unesco-skyddad historisk stadsdel känd för sina trånga gränder, kryddmarknader och snidade trädörrar." },
            { titel: "Kryddtur (Spice Tour)", beskrivning: "Guidad tur på lokala plantager för att se, dofta och smaka på färsk kryddnejlika, vanilj och kanel." }
        ],
        transport: "Flyg till Abeid Amani Karume International Airport (ZNZ) eller färja från Dar es Salaam, därefter taxi/minibuss till stränderna i norr."
    },
    "bran-castle": {
        namn: "Bran Castle (Draculas slott)",
        land: "Rumänien, Transylvanien",
        varldsdel: "Europa",
        bild: "transylvanien riktig.png",
        kortBeskrivning: "Mytomspunnet medeltidsslott i Transylvanien känt för sina kopplingar till myten om greve Dracula.",
        fakta: [
            { titel: "Byggdes", värde: "1377" },
            { titel: "Plats", värde: "Bran, Transylvanien" },
            { titel: "Särdrag", värde: "Känt som Draculas mytiska hem" }
        ],
        historia: "Slottet uppfördes på 1300-talet av saxarna i Brașov som en fästning mot Det osmanska riket. Slottet förknippas internationellt med Bram Stokers roman Dracula och den historiska fursten Vlad III Dracula (Vlad Pålspetsaren).",
        attraktioner: [
            { titel: "Slottets hemliga gångar", beskrivning: "Slingrande trappor, trånga passager och innergårdar fyllda med medeltida historia." },
            { titel: "Drottning Marie av Rumäniens samlingar", beskrivning: "Utställning av kungliga möbler och konst från när slottet var ett kungligt residens." },
            { titel: "Byn Bran & Marknaden", beskrivning: "Marknad vid foten av slottet fylld med lokala ost- och hantverkstraditioner samt souvenirer." }
        ],
        transport: "Tåg från Bukarest till Brașov (ca 2,5 timmar) följt av lokalbuss eller taxi till Bran."
    },
    "liseberg": {
        namn: "Liseberg",
        land: "Sverige, Göteborg",
        varldsdel: "Europa",
        bild: "liseberg.jpg",
        kortBeskrivning: "Nordens största nöjespark känd för sina berömda berg- och dalbanor, vackra trädgårdar och julmarknad.",
        fakta: [
            { titel: "Invigt", värde: "1923" },
            { titel: "Plats", värde: "Göteborg, Sverige" },
            { titel: "Särdrag", värde: "Nordens största nöjespark" }
        ],
        historia: "Liseberg öppnades 1923 i samband med Jubileumsutställningen i Göteborg. Parken har sedan dess vuxit till en av Skandinaviens mest populära destinationer med en unik blandning av fartfyllda åkattraktioner, underhållning och gröna parkmiljöer.",
        attraktioner: [
            { titel: "Helix & Valkyria", beskrivning: "Prisbelönta och spektakulära berg- och dalbanor för spänningssökare." },
            { titel: "Lisebergstornet & Pariserhjulet", beskrivning: "Ikoniska landmärken som erbjuder panoramautsikt över hela Göteborg." },
            { titel: "Kaninlandet", beskrivning: "Stort färgglatt område anpassat för de yngre besökarna med tivolilekar och karuseller." }
        ],
        transport: "Spårvagn (linje 2, 4, 5 m.fl.) direkt till hållplatsen Liseberg eller Korsvägen från Göteborgs Centralstation."
    }
};
