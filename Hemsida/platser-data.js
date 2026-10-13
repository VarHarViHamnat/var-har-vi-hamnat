/* Data för alla platser i spelet */
const platserData = {
    "africamuseum": {
        namn: "AfrikaMuseum",
        land: "Belgien, Tervuren",
        varldsdel: "Europa",
        bild: "lorena ponte.png",
        kortBeskrivning: "Ett ståtligt museum och palats i Tervuren, känt för sin nyklassiska arkitektur och vackra spegeldammar."
    },
    "akropolis": {
        namn: "Akropolis",
        land: "Grekland, Aten",
        varldsdel: "Europa",
        bild: "akropolis.png",
        kortBeskrivning: "Antik akropol belägen på en stenklippa ovanför Aten med templet Parthenon i centrum.",
        fakta: [
            { titel: "Byggdes", värde: "400-talet f.Kr." },
            { titel: "Huvudtempel", värde: "Parthenon" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1987" }
        ],
        historia: "Akropolis i Aten är den mest kända antika citadellklippan i världen. Under ledning av statsmannen Perikles på 400-talet f.Kr. uppfördes de flesta av de berömda byggnaderna, inklusive Parthenon som tillägnades gudinnan Athena.",
        attraktioner: [
            "Parthenon – Det storslagna templet på klippans högsta punkt.",
            "Akropolismuseet – Modernt museum vid foten av klippan med alla antika fynd.",
            "Plaka – Atens äldsta och mest charmiga stadsdel med trånga gränder."
        ]
    },
    "ales-stenar": {
        namn: "Ales stenar",
        land: "Sverige, Skåne",
        varldsdel: "Europa",
        bild: "ales-stenar.png",
        kortBeskrivning: "Sveriges största bevarade skeppssättning högt belägen på Kåseberga åsar.",
        fakta: [
            { titel: "Ålder", värde: "Ca 1 400 år (Järnåldern)" },
            { titel: "Antal stenar", värde: "59 block" },
            { titel: "Längd", värde: "67 meter" }
        ],
        historia: "Ales stenar består av 59 stora granitblock ställda i form av ett skepp. Monumentet dateras till yngre järnåldern (ca 600 e.Kr.) och tros ha fungerat både som en gravplats, solkalender och en plats för religiösa ceremonier.",
        attraktioner: [
            "Kåseberga hamn – Charmigt fiskeläge känt för sina rökta fiskdelikatesser.",
            "Hammars backar – Spektakulära kuststeg populära för skärmflygning.",
            "Utsiktspunkten – Panorama över Östersjön och Bornholm vid klart väder."
        ]
    },
    "auschwitz-birkenau": {
        namn: "Auschwitz-Birkenau",
        land: "Polen, Oświęcim",
        varldsdel: "Europa",
        bild: "auschwitz.png",
        kortBeskrivning: "Ett gripande och historiskt viktigt minnesmärke över andra världskrigets händelser."
    },
    "basiliuskatedralen": {
        namn: "Basiliuskatedralen",
        land: "Ryssland, Moskva",
        varldsdel: "Europa",
        bild: "rysk slott.png",
        kortBeskrivning: "Känd för sina färgglada, lökformade kupoler och unika arkitektur vid Röda torget."
    },
    "blue-lagoon": {
        namn: "Blue Lagoon",
        land: "Island, Grindavík",
        varldsdel: "Europa",
        bild: "blue-lagoon.png",
        kortBeskrivning: "Världsberömt geotermiskt spa känt för sitt mjölkblå, mineralrika vatten.",
        fakta: [
            { titel: "Vattentemp", värde: "37–39 °C" },
            { titel: "Egenskap", värde: "Rik på kisel & mineraler" },
            { titel: "Typ", värde: "Geotermiskt bad" }
        ],
        historia: "Blå lagunen bildades av en slump på 1970-talet från spillvatten från det närliggande geotermiska kraftverket Svartsengi. Lokalbefolkningen upptäckte snart att det mineralrika vattnet hade helande effekter på huden.",
        attraktioner: [
            "Kiselmask-bar – Behandlingar med naturlig kisellera direkt i vattnet.",
            "Lava Restaurant – Restaurang byggd rakt in i en naturlig klippvägg av lava.",
            "Steam Caves – Ångbastur uthuggna ur lavasten."
        ]
    },
    "burg-eltz": {
        namn: "Burg Eltz",
        land: "Tyskland, Wierschem",
        varldsdel: "Europa",
        bild: "transylvanien.png",
        kortBeskrivning: "Ett sagolikt medeltidsslott gömt i en grönskande dal, bevarat i samma familjs ägo i århundraden."
    },
    "cliffs-of-moher": {
        namn: "Cliffs of Moher",
        land: "Irland, County Clare",
        varldsdel: "Europa",
        bild: "klippor.png",
        kortBeskrivning: "Mäktiga havs-klippor som stupar mer än 200 meter rakt ner i Atlanten.",
        fakta: [
            { titel: "Höjd", värde: "Upp till 214 meter" },
            { titel: "Längd", värde: "14 kilometer" },
            { titel: "Besökare/år", värde: "~1,5 miljoner" }
        ],
        historia: "Cliffs of Moher bildades för över 300 miljoner år sedan av sand, lera och silt vid en antik flodmynning. Klipporna är en av Irlands mest kända natursevärdheter och rymmer tusentals häckande havsfåglar.",
        attraktioner: [
            "O'Brien's Tower – Ett stentorn från 1835 med utsikt över klipporna.",
            "Visitor Center – Utställningshall inbyggd i sluttningen.",
            "Doolin Cliff Walk – Vandringsled utmed kustkanten."
        ]
    },
    "colosseum": {
        namn: "Colosseum",
        land: "Italien, Rom",
        varldsdel: "Europa",
        bild: "coluseum.png",
        kortBeskrivning: "Antikens största amfiteater där gladiatorstrider och publika spel hölls.",
        fakta: [
            { titel: "Byggdes", värde: "70–80 e.Kr." },
            { titel: "Kapacitet", värde: "Upp till 80 000 åskådare" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1980" }
        ],
        historia: "Colosseum uppfördes under kejsarna Vespasianus och Titus. Byggnaden användes i över fyrahundra år för gladiatorstrider, avrättningar och teaterföreställningar, och står idag som en tidlös symbol för det romerska riket.",
        attraktioner: [
            "Hypogeum – Det underjordiska systemet av gångar och burar under arenagolvet.",
            "Forum Romanum – Det antika Roms politiska och kommersiella centrum tätt intill.",
            "Konstantinbågen – Triumfbågen som står alldeles bredvid Colosseum."
        ]
    },
    "den-lilla-sjojungfrun": {
        namn: "Den lilla sjöjungfrun",
        land: "Danmark, Köpenhamn",
        varldsdel: "Europa",
        bild: "sjöljungfrun.png",
        kortBeskrivning: "Köpenhamns mest ikoniska bronsstaty vid Langelinie, inspirerad av H.C. Andersens kända saga."
    },
    "eiffeltornet": {
        namn: "Eiffeltornet",
        land: "Frankrike, Paris",
        varldsdel: "Europa",
        bild: "eiffeltornet.png",
        kortBeskrivning: "Paris mest berömda symbol och ett arkitektoniskt mästerverk i smidesjärn.",
        fakta: [
            { titel: "Byggdes", värde: "1887–1889" },
            { titel: "Höjd", värde: "330 meter" },
            { titel: "Arkitekt", värde: "Gustave Eiffel" }
        ],
        historia: "Eiffeltornet uppfördes som entréportal till världsutställningen Exposition Universelle 1889. Det var ursprungligen tänkt att rivas efter 20 år, men räddades av sin nytta som radiotorn och är idag ett av världens mest kända landmärken.",
        attraktioner: [
            "Toppvåningen – Svindlande utsikt över hela Paris.",
            "Champ de Mars – Den stora parken framför tornet, perfekt för picknick.",
            "Bateau Mouche – Båtturer på Seine som passerar tornet."
        ]
    },
    "europa-park": {
        namn: "Europa-Park",
        land: "Tyskland, Rust",
        varldsdel: "Europa",
        bild: "eu park.jpg",
        kortBeskrivning: "Europas största temapark med spektakulära berg- och dalbanor och temabaserade områden."
    },
    "gjogv": {
        namn: "Gjógv",
        land: "Färöarna, Eysturoy",
        varldsdel: "Europa",
        bild: "fäöarna.png",
        kortBeskrivning: "En naturskön by känd för sin dramatiska naturliga hamn i en djup ravinspricka."
    },
    "harry-potter-studios": {
        namn: "Harry Potter Museet",
        land: "Storbritannien, Leavesden",
        varldsdel: "Europa",
        bild: "harry-potter.png",
        kortBeskrivning: "Den officiella studion där alla åtta Harry Potter-filmer spelades in.",
        fakta: [
            { titel: "Invigt", värde: "2012" },
            { titel: "Typ", värde: "Filmstudio & Utställning" },
            { titel: "Tema", värde: "Harry Potter" }
        ],
        historia: "Studion i Leavesden användes under tio år för att spela in filmerna om Harry Potter. Efter filminspelningarna omvandlades lokalerna till en permanent utställning där besökare får se äkta kulisser, rekvisita och kostymer.",
        attraktioner: [
            "Stora salen (The Great Hall) – Den ikoniska matsalen från filmerna.",
            "Diagongänden (Diagon Alley) – Den magiska shoppinggatan.",
            "Perrong 9 ¾ – Tåget Hogwarts Express och perrongen."
        ]
    },
    "icehotel": {
        namn: "Ishotellet",
        land: "Sverige, Jukkasjärvi",
        varldsdel: "Europa",
        bild: "is-hotellet.png",
        kortBeskrivning: "Världens första och mest berömda hotell helt tillverkat av snö och is.",
        fakta: [
            { titel: "Grundat", värde: "1989" },
            { titel: "Material", värde: "Is från Torne älv" },
            { titel: "Temp inne", värde: "-5 °C" }
        ],
        historia: "Ishotellet i Jukkasjärvi grundades av Yngve Bergqvist och byggs upp på nytt varje vinter med hjälp av tonvis med is blockerade från den närliggande Torne älv. Konstnärer från hela världen bjuds in för att skulptera rummen.",
        attraktioner: [
            "Konstsviterna – Unika isskulpterade rum skapade av internationella konstnärer.",
            "Icebar – Drick drinkar ur glas helt tillverkade av ren is.",
            "Torne älv – Skåda norrskenet över den frusna älven."
        ]
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
            { titel: "Yta", värde: "135 000 m²" }
        ],
        historia: "Palatset uppfördes på platsen för en medeltida maurisk borg som brann ner 1734. Det fungerar än idag som officiellt residens för den spanska kungafamiljen, även om det numera främst används vid statsceremonier.",
        attraktioner: [
            "Real Armería – Ett av världens främsta rustkammarmuseer.",
            "Tronsalen – Praktfullt inredd sal med bevarade takmålningar.",
            "Sabatini-trädgårdarna – Eleganta trädgårdar norr om palatset."
        ]
    },
    "luxemburg": {
        namn: "Luxemburg stad",
        land: "Luxemburg",
        varldsdel: "Europa",
        bild: "luxenburg city.png",
        kortBeskrivning: "En dramatisk stad byggd över djupa dalar och klippor med medeltida befästningar."
    },
    "mont-saint-michel": {
        namn: "Mont Saint-Michel",
        land: "Frankrike, Normandie",
        varldsdel: "Europa",
        bild: "slott-i-havet.png",
        kortBeskrivning: "Ikonisk tidvattenö med ett spektakulärt medeltida kloster på toppen.",
        fakta: [
            { titel: "Grundat", värde: "708 e.Kr." },
            { titel: "Typ", värde: "Tidvattenö & Kloster" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1979" }
        ],
        historia: "Mont Saint-Michel är känd för sin dramatiska placering där havet drar sig tillbaka och skapar enorma skillnader mellan ebb och flod. Klostret har varit en viktig pilgrimsort sedan medeltiden.",
        attraktioner: [
            "Abbaye du Mont-Saint-Michel – Det gotiska klostret på ön.",
            "Grand Rue – Den historiska huvudgatan fylld med puttriga butiker.",
            "Tidvattenvandringar – Guidade turer på havsbotten vid lågvatten."
        ]
    },
    "monument-great-fire": {
        namn: "The Monument",
        land: "Storbritannien, London",
        varldsdel: "Europa",
        bild: "monumnet-of-the-great-fire.png",
        kortBeskrivning: "Stolt dorisk pelare till minne av den stora branden i London 1666.",
        fakta: [
            { titel: "Resrest", värde: "1671–1677" },
            { titel: "Höjd", värde: "62 meter" },
            { titel: "Arkitekt", värde: "Christopher Wren" }
        ],
        historia: "Monumentet uppfördes för att minnas Londons stora brand 1666 som förstörde stora delar av staden. Pelarens höjd (62 meter) motsvarar det exakta avståndet från dess bas till bageriet på Pudding Lane där branden startade.",
        attraktioner: [
            "Utsiktsplattformen – 311 trappsteg upp till en fantastisk panoramautsikt.",
            "Pudding Lane – Den historiska gatan där den ödesdigra branden bröt ut.",
            "Tower of London – Närliggande medeltida fästning och museum."
        ]
    },
    "mother-ukraine": {
        namn: "Moder Ukraina",
        land: "Ukraina, Kyiv",
        varldsdel: "Europa",
        bild: "mother ukraine.jpg",
        kortBeskrivning: "Ett monumentalt rostfritt stålmonument som blickar ut över Kyiv och Dnjepr-floden."
    },
    "neuschwanstein": {
        namn: "Neuschwanstein",
        land: "Tyskland, Bayern",
        varldsdel: "Europa",
        bild: "tyskt-vitt-slott.png",
        kortBeskrivning: "Sagoslottet i de bayerska alperna som inspirerade Disneys Törnrosaslott.",
        fakta: [
            { titel: "Byggstart", värde: "1869" },
            { titel: "Byggherre", värde: "Kung Ludwig II" },
            { titel: "Plats", värde: "Füssen, Bayern" }
        ],
        historia: "Neuschwanstein lät uppföras av kung Ludwig II av Bayern som en privat tillflyktsort, inspirerad av Richard Wagners operor. Kungen hann bara bo där i ett tiotal dagar innan han avled 1886.",
        attraktioner: [
            "Marienbrücke – Bron som ger den klassiska vykortsvyn över slottet.",
            "Sångarsalen – Slottets största och mest praktfulla rum.",
            "Alpsee – Den kristallklara sjön nedanför berget."
        ]
    },
    "nuuk": {
        namn: "Nuuk",
        land: "Grönland",
        varldsdel: "Nordamerika",
        bild: "grönland huvudstad.png",
        kortBeskrivning: "Grönlands färgstarka huvudstad omgiven av storslagna fjäll och arktiska fjordar."
    },
    "penapalatsen": {
        namn: "Pena-palatset",
        land: "Portugal, Sintra",
        varldsdel: "Europa",
        bild: "röd-och-gult-slott.png",
        kortBeskrivning: "Färgstarkt romantiskt slott beläget på en topp i Sintras bergslandskap.",
        fakta: [
            { titel: "Färdigställt", värde: "1854" },
            { titel: "Arkitektur", värde: "Romantism" },
            { titel: "Höjd", värde: "480 m ö.h." }
        ],
        historia: "Pena-palatset uppfördes på uppdrag av kung Ferdinand II som ett sommarresidens för den portugisiska kungafamiljen. Slottet sticker ut med sina starka röda och gula färger.",
        attraktioner: [
            "Pena Park – Den enorma skogsparken som omger slottet.",
            "Palacio da Pena Interiör – De bevarade kungliga rummen.",
            "Castelo dos Mouros – En närliggande maurisk fästningsruin med utsikt."
        ]
    },
    "pompeji": {
        namn: "Pompeji",
        land: "Italien, Neapel",
        varldsdel: "Europa",
        bild: "pompai.png",
        kortBeskrivning: "Den antika romerska staden som bevarades under vulkanisk aska från Vesuvius utbrott år 79 e.Kr."
    },
    "sagrada-familia": {
        namn: "Sagrada Família",
        land: "Spanien, Barcelona",
        varldsdel: "Europa",
        bild: "sagrada-famillia.png",
        kortBeskrivning: "Antoni Gaudís spektakulära och ännu ej helt färdigställda basilika.",
        fakta: [
            { titel: "Byggstart", värde: "1882" },
            { titel: "Arkitekt", värde: "Antoni Gaudí" },
            { titel: "Stil", värde: "Katalansk modernism" }
        ],
        historia: "Sagrada Família påbörjades 1882 och Gaudí ägnade de sista 40 åren av sitt liv åt projektet. Bygget finansieras helt av donationer och biljetter och förväntas färdigställas inom kort.",
        attraktioner: [
            "Tornen – Hissar upp i tornen med utsikt över Barcelona.",
            "Födelsefasaden – Den fasad som färdigställdes först under Gaudís livstid.",
            "Gaudímuseet – Museum i källaren om arkitekturen och bygget."
        ]
    },
    "st-anton": {
        namn: "St. Anton am Arlberg",
        land: "Österrike, Tyrolen",
        varldsdel: "Europa",
        bild: "saint anton .png",
        kortBeskrivning: "Känd skidort i österrikiska alperna med stämningsfull bymiljö och snöklädda bergstoppar."
    },
    "stonehenge": {
        namn: "Stonehenge",
        land: "Storbritannien, Wiltshire",
        varldsdel: "Europa",
        bild: "stone-hage.png",
        kortBeskrivning: "Världsberömt förhistoriskt monument format av gigantiska stående stenar.",
        fakta: [
            { titel: "Ålder", värde: "Ca 5 000 år gammalt" },
            { titel: "Unesco-status", värde: "Världsarv sedan 1986" },
            { titel: "Typ", värde: "Förhistoriskt monument" }
        ],
        historia: "Stonehenge byggdes i flera etapper mellan 3000 f.Kr. och 2000 f.Kr. Dess exakta syfte är fortfarande delvis ett mysterium, men det tros ha fungerat som en astronomisk kalender och ceremoniell plats.",
        attraktioner: [
            "Visitor Centre – Utställningar med antika fynd och rekonstruerade hus.",
            "Avebury – En närliggande och ännu större stencirkel.",
            "Salisbury Cathedral – Gotisk katedral i den närbelägna staden Salisbury."
        ]
    },
    "tower-bridge": {
        namn: "Tower Bridge",
        land: "Storbritannien, London",
        varldsdel: "Europa",
        bild: "tower-bridge.png",
        kortBeskrivning: "Känd klaffbro i nygotisk stil över floden Themsen.",
        fakta: [
            { titel: "Invigd", värde: "1894" },
            { titel: "Längd", värde: "244 meter" },
            { titel: "Brotorntyp", värde: "Nygotisk stål & sten" }
        ],
        historia: "Tower Bridge byggdes mellan 1886 och 1894 för att minska trängseln på floden utan att hindra fartygstrafiken in mot Londons hamn. Bron drivs än idag av hydraulik för att fälla upp brohalvorna.",
        attraktioner: [
            "Glass Floor Walkways – Gångbroarna högst upp med glasgolv över trafiken.",
            "Tower of London – Den historiska fästningen som ligger direkt vid bron.",
            "Engine Rooms – Det bevarade ångmaskinsrummet som förr drev bron."
        ]
    },
    "turning-torso": {
        namn: "Turning Torso",
        land: "Sverige, Malmö",
        varldsdel: "Europa",
        bild: "turning-torso.png",
        kortBeskrivning: "Skandinaviens första skyskrapa med en unik skruvad arkitektur.",
        fakta: [
            { titel: "Höjd", värde: "190 meter" },
            { titel: "Invigt", värde: "2005" },
            { titel: "Arkitekt", värde: "Santiago Calatrava" }
        ],
        historia: "Turning Torso ritades av den spanska stjärnarkitekten Santiago Calatrava och baseras på hans egen skulptur 'Twisting Torso'. Byggnaden vrider sig 90 grader från basen upp till översta våningen.",
        attraktioner: [
            "Västra Hamnen – Strandpromenad med caféer, restauranger och badplatser.",
            "Scaniaparken – Populärt parkområde och djuphavsbad precis vid havet.",
            "Stapelbäddsparken – En av Europas största utomhusskateparker."
        ]
    },
    "vasamuseet": {
        namn: "Vasamuseet",
        land: "Sverige, Stockholm",
        varldsdel: "Europa",
        bild: "vasa-museet.png",
        kortBeskrivning: "Specialbyggt museum för regalskeppet Vasa som förliste på sin jungfrufärd 1628.",
        fakta: [
            { titel: "Förlisning", värde: "1628" },
            { titel: "Bärgad", värde: "1961" },
            { titel: "Plats", värde: "Djurgården, Stockholm" }
        ],
        historia: "Regalskeppet Vasa var ett av sin tids mest praktfulla krigsfartyg, men sjönk i Stockholms hamn efter bara cirka 1 300 meters segling. Efter 333 år på havsbotten bärgades fartyget nästan helt intakt.",
        attraktioner: [
            "Regalskeppet Vasa – Det bevarade 1600-talsskeppet med originalskulpturer.",
            "Djurgården – Det gröna parkområdet där museet ligger beläget.",
            "Skansen – Världens äldsta friluftsmuseum beläget strax intill."
        ]
    },
    "vatikanstaten": {
        namn: "Vatikanstaten",
        land: "Vatikanstaten",
        varldsdel: "Europa",
        bild: "vatikanstaten .png",
        kortBeskrivning: "Världens minsta stat med den storslagna Petersplatsen och Peterskyrkan i hjärtat av Rom."
    },
    "zermatt": {
        namn: "Zermatt",
        land: "Schweiz, Valais",
        varldsdel: "Europa",
        bild: "zermatt sweitz.png",
        kortBeskrivning: "Idyllisk alporg vid foten av det ikoniska berget Matterhorn, känd för skidåkning i världsklass."
    }
};
