// ============================================================
// MAALTIJDEN
// ============================================================
const meals = [
  { id:1, name:"Pasta pesto met kip en spinazie", time:"15 min", cost:"€3.50", category:"Pasta", balance:"Goed. Eiwit van kip, groenten van spinazie en tomaat, koolhydraten van pasta.", freezable:false, ingredients:["200g pasta (penne/fusilli)","1 potje groene pesto","300g kipfilet","Handvol cherrytomaatjes","2 handenvol verse spinazie","Parmezaan","Scheutje olijfolie"], steps:["Zet een pan water op met zout. Pasta koken volgens de verpakking.","Snijd de kip in blokjes. Bak in olijfolie op hoog vuur tot goudbruin, 5-6 minuten. Kruid met peper en zout.","Halveer de cherrytomaatjes. Gooi ze de laatste 2 minuten bij de kip.","Giet de pasta af. Bewaar een klein kopje kookvocht.","Doe de pasta terug in de pan. Roer de pesto erdoor met een scheut kookvocht zodat het smeuïg wordt.","Schep de kip en tomaatjes erdoor. Voeg de spinazie toe en roer tot hij slinkt.","Verdeel over borden, parmezaan erover."] },
  { id:2, name:"Wraps met kip, paprika en sla", time:"15 min", cost:"€3.00", category:"Wraps", balance:"Goed. Eiwit van kip, veel groenten, wrap is licht qua koolhydraten.", freezable:false, ingredients:["4 tortilla wraps","300g kipfilet","1 paprika","Halve komkommer","Sla","Geraspte kaas","Sour cream","Scheutje olijfolie"], steps:["Snijd de kip in reepjes, de paprika in dunne plakjes.","Bak de kip in olijfolie op hoog vuur. Voeg na 3 minuten de paprika toe. Kruid met peper, zout, en eventueel paprikapoeder.","Snijd de komkommer in halve plakjes. Scheur de sla.","Warm de wraps kort op in een droge pan of magnetron (10 sec).","Leg sla op de wrap, dan kip en paprika, komkommer, kaas, en een lepel sour cream.","Oprollen: onderkant omvouwen, dan de zijkanten naar binnen."] },
  { id:3, name:"Nasi goreng", time:"20 min", cost:"€3.00", category:"Rijst", balance:"Redelijk. Voeg extra groenten toe via de groentenmix. Ei is goed eiwit.", freezable:true, ingredients:["200g rijst (of restjes van gister)","300g kipfilet","150g diepvries groentenmix","2 eieren","2 el sojasaus","2 el ketjap manis","1 teen knoflook","Sambal naar smaak","Scheutje olie"], steps:["Kook de rijst als je geen restjes hebt. Giet af en laat even stomen — droge rijst bakt beter.","Snijd de kip in kleine blokjes. Bak op hoog vuur in olie, 5 minuten.","Pers de knoflook erbij, bak 30 seconden mee.","Voeg de diepvriesgroenten toe. 3 minuten meebakken.","Doe de rijst erbij. Giet de sojasaus en ketjap erover. Bak alles 3-4 minuten op hoog vuur door elkaar.","Maak ruimte in de pan, bak de eieren als spiegelei of roerei.","Verdeel de nasi, ei erop, sambal ernaast.","💡 Dubbele portie? Vries de helft in zonder het ei. Opwarmen in de pan met een scheutje water."] },
  { id:4, name:"Pasta bolognese met wortel", time:"20 min", cost:"€3.00", category:"Pasta", balance:"Goed. Gehakt is eiwit, wortel en tomaat zijn groenten. Voeg sla toe als je wilt.", freezable:true, ingredients:["200g spaghetti","250g rundergehakt","1 blik tomatenblokjes (400g)","1 ui","2 tenen knoflook","1 wortel","Italiaanse kruiden","Parmezaan","Scheutje olijfolie"], steps:["Snipper de ui, pers de knoflook, rasp de wortel grof.","Verhit olijfolie in een pan. Fruit de ui 3 minuten op middelhoog vuur.","Voeg het gehakt toe. Bak tot het niet meer roze is, breek het fijn met een spatel.","Knoflook en wortel erbij. 1 minuut meebakken.","Giet het blik tomatenblokjes erbij. Voeg Italiaanse kruiden, peper en zout toe.","Laat 10-12 minuten zachtjes pruttelen op laag vuur. Roer af en toe.","Kook ondertussen de spaghetti. Giet af.","Pasta op bord, saus erover, parmezaan erop.","💡 Maak dubbele saus. Vries de helft in. Volgende keer alleen pasta koken, saus ontdooien, 10 minuten klaar."] },
  { id:5, name:"Taco wraps met gehakt", time:"15 min", cost:"€3.50", category:"Wraps", balance:"Goed. Eiwit van gehakt, groenten van sla en tomaat. Lekker compleet.", freezable:false, ingredients:["4 tortilla wraps","250g rundergehakt","1 zakje taco kruidenmix","Sla","2 tomaten","Geraspte kaas","Sour cream","Scheutje olie"], steps:["Bak het gehakt in olie op hoog vuur. Breek het fijn.","Voeg de taco kruidenmix toe met een scheut water volgens de verpakking. Laat 3 minuten indikken.","Snijd de tomaten in blokjes. Scheur de sla.","Warm de wraps op.","Bouw: sla, gehakt, tomaat, kaas, sour cream.","Oprollen en eten."] },
  { id:6, name:"Rijst met teriyaki kip en broccoli", time:"20 min", cost:"€3.50", category:"Rijst", balance:"Sterk. Goed eiwit, broccoli is voedingsrijk, rijst voor energie.", freezable:false, ingredients:["200g rijst","300g kipfilet","1 broccoli","3 el teriyaki saus","1 teen knoflook","Sesamzaad","Scheutje olie"], steps:["Zet de rijst op. Kooktijd zie verpakking.","Snijd de broccoli in roosjes. Stoom of kook ze 4 minuten tot ze nog stevig zijn. Giet af.","Snijd de kip in reepjes. Bak op hoog vuur in olie, 5-6 minuten.","Pers de knoflook erbij. 30 seconden meebakken.","Giet de teriyaki saus over de kip. Laat 1 minuut indikken.","Schep de broccoli erdoor.","Rijst op bord, kip en broccoli erover, sesamzaad erop."] },
  { id:7, name:"Tomatensoep met brood en kaas", time:"15 min", cost:"€2.50", category:"Makkelijk", balance:"Licht. Prima als maaltijd met genoeg brood en kaas voor verzadiging. Minder eiwit.", freezable:true, ingredients:["1 blik tomatensoep of 500ml passata","1 ui","1 teen knoflook","Scheut room","Italiaanse kruiden","Brood","Boter","Kaas"], steps:["Snipper de ui, pers de knoflook.","Fruit de ui in boter, 3 minuten. Knoflook erbij, 30 seconden.","Giet de passata of soep erbij. Voeg kruiden toe en een snuf suiker als het te zuur is.","Laat 8-10 minuten zachtjes koken.","Voeg een scheut room toe. Pureer met een staafmixer tot glad.","Brood met boter en kaas ernaast.","💡 Maak een dubbele pan. Vries porties in. Perfecte noodmaaltijd uit de vriezer."] },
  { id:8, name:"Stamppot boerenkool met rookworst", time:"20 min", cost:"€2.50", category:"Hollands", balance:"Redelijk. Boerenkool is zeer voedingsrijk. Rookworst is bewerkt vlees — prima in een rotatie.", freezable:false, ingredients:["500g aardappelen","250g boerenkool (voorgesneden)","1 rookworst","Klontje boter","Scheut melk","Mosterd"], steps:["Schil de aardappelen, snijd in gelijke stukken.","Kook in ruim water met zout. Na 12 minuten de boerenkool erbij, 5 minuten meekoken.","Verwarm de rookworst in heet water (niet koken).","Giet de aardappelen en boerenkool af. Voeg boter en een scheut melk toe.","Stamp grof — mag best stukjes hebben.","Snijd de rookworst. Serveer met mosterd."] },
  { id:9, name:"Pasta carbonara", time:"15 min", cost:"€3.00", category:"Pasta", balance:"Redelijk. Goed eiwit van ei en spek. Mist groenten — doe er een simpele sla naast.", freezable:false, ingredients:["200g spaghetti","150g spekblokjes","3 eieren","50g parmezaan (geraspt)","Zwarte peper","Sla en komkommer (ernaast)"], steps:["Kook de spaghetti in gezouten water.","Bak de spekblokjes in een droge pan tot ze knapperig zijn. Geen olie nodig.","Klop de eieren met de parmezaan en flink wat zwarte peper in een kom.","Giet de pasta af. Bewaar een kopje kookvocht.","Doe de pasta bij de spekjes in de pan. Haal de pan VAN HET VUUR.","Giet het ei-kaasmengsel erbij en roer snel door. Het restwarmte gaart het ei — als de pan te heet is krijg je roerei.","Voeg een scheut kookvocht toe als het te dik is.","Bord, peper erover, sla ernaast."] },
  { id:10, name:"Bami goreng", time:"20 min", cost:"€3.00", category:"Noedels", balance:"Redelijk. Vergelijkbaar met nasi. Eiwit van kip, groenten uit de mix.", freezable:true, ingredients:["200g bami/mie noedels","300g kipfilet","150g diepvries groentenmix","2 el ketjap manis","1 el sojasaus","1 teen knoflook","Sambal","Scheutje olie"], steps:["Kook de noedels volgens de verpakking. Meestal 3-4 minuten. Giet af.","Snijd de kip in reepjes. Bak op hoog vuur in olie, 5 minuten.","Pers de knoflook erbij. Voeg de diepvriesgroenten toe, 3 minuten meebakken.","Doe de noedels erbij. Giet ketjap en sojasaus erover.","Bak alles 2-3 minuten op hoog vuur, blijf roeren.","Sambal ernaast serveren."] },
  { id:11, name:"Ovenschotel met aardappel en gehakt", time:"20 min + 25 oven", cost:"€3.50", category:"Hollands", balance:"Goed. Compleet gerecht. Groenten zitten in de saus.", freezable:true, ingredients:["500g aardappelen","250g rundergehakt","1 ui","1 blik tomatenblokjes","1 courgette (optioneel)","Geraspte kaas","Italiaanse kruiden","Scheutje olijfolie"], steps:["Verwarm de oven op 200°C.","Snijd de aardappelen in dunne plakjes (3-4mm). Hoeft niet geschild.","Snipper de ui. Snijd eventueel de courgette in halve plakjes.","Bak het gehakt met de ui in olijfolie. Voeg tomatenblokjes en kruiden toe. 5 minuten laten pruttelen.","Schep de helft van het gehaktmengsel in een ovenschaal. Optioneel: laag courgette.","Leg de aardappelplakjes dakpansgewijs erop. Restje gehakt erover.","Kaas erop. 25 minuten in de oven tot de aardappel gaar is en de kaas goudbruin.","Even laten rusten voor je opschept.","💡 Maak er twee van. Eén in de oven, één afgedekt in de vriezer. Ontdooien en 30 min in de oven — klaar."] },
  { id:12, name:"Rijst met shoarma bowl", time:"15 min", cost:"€3.50", category:"Rijst", balance:"Goed als je de groenten niet skipt. Sla, tomaat en komkommer maken het compleet.", freezable:false, ingredients:["200g rijst","300g shoarmavlees","Knoflooksaus","Sla","2 tomaten","Halve komkommer","Halve rode ui","Scheutje olie"], steps:["Zet de rijst op.","Bak het shoarmavlees in olie op hoog vuur tot het krokant wordt, 5-7 minuten.","Snijd tomaat in partjes, komkommer in halve plakjes, rode ui in dunne ringen.","Scheur de sla.","Bouw de bowl: rijst als basis, groenten eromheen, shoarma in het midden.","Knoflooksaus erover. Eventueel sambal of sriracha."] },
  { id:13, name:"Gebakken ei op brood (lazy night)", time:"10 min", cost:"€1.50", category:"Makkelijk", balance:"Licht maar prima voor een makkelijke avond. Ei is goed eiwit, avocado heeft goede vetten.", freezable:false, ingredients:["2-3 sneetjes brood","2-3 eieren","1 avocado","Peper en zout","Optioneel: sriracha, tomaat"], steps:["Rooster het brood.","Halveer de avocado, verwijder de pit, prak het vruchtvlees met een vork. Peper en zout.","Bak de eieren in een beetje boter. Sunny side up of hoe je ze lust.","Avocado op brood, ei erop, peper en zout, eventueel sriracha.","Dit is je lazy night. Geen schuldgevoel. Dit IS het plan."] },
  { id:14, name:"Wraps met zalm en roomkaas", time:"10 min", cost:"€4.00", category:"Wraps", balance:"Sterk. Zalm is uitstekend (omega-3, eiwit). Groenten van komkommer en rucola.", freezable:false, ingredients:["4 tortilla wraps","100g gerookte zalm","Roomkaas (naturel)","Halve komkommer","Handvol rucola","Scheutje citroensap"], steps:["Smeer elke wrap in met een laag roomkaas.","Verdeel de zalm over de wraps.","Snijd de komkommer in dunne reepjes. Leg op de wrap met rucola.","Druppel citroensap erover als je het hebt.","Oprollen. Eventueel diagonaal doorsnijden."] },
  { id:15, name:"Stamppot andijvie met spekjes", time:"20 min", cost:"€2.50", category:"Hollands", balance:"Redelijk. Andijvie is voedingsrijk. Spekjes zijn niet de gezondste maar prima in een rotatie.", freezable:false, ingredients:["500g aardappelen","300g andijvie (voorgesneden)","150g spekblokjes","Klontje boter","Scheut melk"], steps:["Schil de aardappelen, snijd in stukken, kook in gezouten water. 15-18 minuten.","Bak de spekblokjes krokant in een droge pan.","Giet de aardappelen af. Voeg boter en een scheut melk toe.","Stamp tot puree — mag grof zijn.","Schep de RAUWE andijvie erdoor. De warmte van de aardappel laat het slinken.","Spekjes erover."] },
  { id:16, name:"Pangafilet met ovenfriet en sla", time:"20 min + 20 oven", cost:"€3.00", category:"Vis", balance:"Goed. Vis is mager eiwit, ovenfriet is beter dan gefrituurde, sla maakt het compleet.", freezable:false, ingredients:["2 pangafilets (diepvries)","400g ovenfriet","Sla","Halve komkommer","Cherrytomaatjes","Mayonaise","Citroensap","Scheutje olie"], steps:["Verwarm de oven op 220°C. Ovenfriet op de bakplaat, in de oven.","Ontdooi de pangafilets als ze nog bevroren zijn (magnetron ontdooisstand, 3-4 min).","Dep de vis droog. Kruid met peper, zout en een scheutje citroensap.","Bak de vis in olie op middelhoog vuur, 3-4 minuten per kant tot goudbruin.","Maak een simpele sla van sla, komkommer en tomaatjes.","Friet uit de oven, vis ernaast, sla erbij, mayo als je wilt."] },
  { id:17, name:"Couscous met gegrilde groenten en kipfilet", time:"20 min", cost:"€3.50", category:"Couscous", balance:"Sterk. Veel groenten, goed eiwit, couscous is lichte koolhydraat. Erg compleet.", freezable:false, ingredients:["200g couscous","300g kipfilet","1 courgette","1 paprika","1 rode ui","Feta (50g)","2 el olijfolie","Italiaanse kruiden","Scheutje citroensap"], steps:["Couscous in een kom. Giet er kokend water bij (1:1 verhouding). Deksel erop, 5 minuten laten staan. Plukken met een vork.","Snijd de courgette in halve plakjes, paprika in stukken, rode ui in parten.","Bak de groenten in olijfolie op hoog vuur, 5-6 minuten. Kruid met Italiaanse kruiden, peper en zout.","Snijd de kip in reepjes. Bak apart (of duw de groenten opzij) tot goudbruin, 5-6 minuten.","Meng de couscous met een scheutje olijfolie en citroensap.","Schep de groenten en kip over de couscous. Verkruimel de feta erover."] },
  { id:18, name:"Rode curry met rijst", time:"20 min", cost:"€3.50", category:"Rijst", balance:"Goed. Kokosmelk heeft goede vetten, kip is eiwit, veel groenten mogelijk.", freezable:true, ingredients:["200g rijst","300g kipfilet","1 blik kokosmelk (400ml)","2 el rode currypasta","1 paprika","Handvol sugarsnaps of sperziebonen","Scheutje vissaus of sojasaus","Scheutje olie"], steps:["Zet de rijst op.","Snijd de kip in blokjes. Bak in olie op hoog vuur, 4-5 minuten.","Voeg de currypasta toe. Bak 1 minuut mee tot het geurig wordt.","Giet de kokosmelk erbij. Roer goed door.","Snijd de paprika in reepjes. Voeg toe met de sugarsnaps of sperziebonen.","Laat 8-10 minuten zachtjes koken tot de groenten gaar zijn en de saus iets indikt.","Breng op smaak met vissaus of sojasaus.","Rijst op bord, curry erover.","💡 Dubbele portie curry? Vries in. Ontdooien en opwarmen, alleen verse rijst koken."] },
  { id:19, name:"Tilapiafilet met rijst en roerbakgroenten", time:"20 min", cost:"€3.00", category:"Vis", balance:"Sterk. Mager eiwit van vis, veel groenten, rijst voor energie. Ideaal.", freezable:false, ingredients:["200g rijst","2 tilapiafilets (diepvries)","200g roerbakgroenten (vers of diepvries)","2 el sojasaus","1 el honing of ketjap","1 teen knoflook","Scheutje olie"], steps:["Zet de rijst op.","Ontdooi de tilapia als nodig. Dep droog, kruid met peper en zout.","Bak de vis in olie op middelhoog vuur, 3 minuten per kant. Leg apart.","In dezelfde pan: knoflook kort bakken, groenten erbij, 4-5 minuten op hoog vuur.","Meng sojasaus met honing of ketjap. Giet over de groenten, 1 minuut laten karamelliseren.","Rijst op bord, vis erop, groenten ernaast."] },
  { id:20, name:"Ovenfriet met gehaktbal en salade", time:"15 min + 20 oven", cost:"€3.00", category:"Makkelijk", balance:"Prima. Ovenfriet is geen superfood maar met een gehaktbal en salade is het compleet genoeg.", freezable:false, ingredients:["400g ovenfriet","2 grote gehaktballen (vers of diepvries)","Sla","Cherrytomaatjes","Komkommer","Mayonaise of mosterd"], steps:["Oven op 220°C. Friet op de bakplaat.","Gehaktballen erbij op de plaat (of apart als ze vers zijn). Baktijd zie verpakking, meestal 20-25 min.","Maak een simpele salade: sla, tomaatjes, komkommer.","Alles op bord. Mayo of mosterd erbij.","Dit is een eerlijke weekmaaltijd. Geen schaamte nodig."] }
];

const mealCategories = ["Pasta","Wraps","Rijst","Couscous","Noedels","Vis","Hollands","Makkelijk"];

const staplesData = [
  { name:"Rijst (1kg)", price:2.00, category:"voorraadkast", note:"Gaat 3-4 weken mee" },
  { name:"Pasta (500g, 2x)", price:2.00, category:"voorraadkast", note:"1-2 weken" },
  { name:"Couscous (500g)", price:1.50, category:"voorraadkast", note:"Gaat weken mee" },
  { name:"Tortilla wraps (8st)", price:1.80, category:"vers", note:"Elke week als je wraps maakt" },
  { name:"Blikken tomatenblokjes (2x)", price:1.60, category:"voorraadkast", note:"Gaat lang mee" },
  { name:"Blik kokosmelk", price:1.50, category:"voorraadkast", note:"Voor curry, gaat lang mee" },
  { name:"Rode currypasta", price:2.00, category:"voorraadkast", note:"Gaat maanden mee" },
  { name:"Olijfolie", price:3.50, category:"voorraadkast", note:"Maandelijks" },
  { name:"Sojasaus", price:2.00, category:"voorraadkast", note:"Maandelijks" },
  { name:"Ketjap manis", price:2.00, category:"voorraadkast", note:"Maandelijks" },
  { name:"Teriyaki saus", price:2.50, category:"voorraadkast", note:"Maandelijks" },
  { name:"Italiaanse kruiden", price:1.50, category:"voorraadkast", note:"Maandelijks" },
  { name:"Peper en zout", price:1.50, category:"voorraadkast", note:"Gaat maanden mee" },
  { name:"Sambal", price:1.50, category:"voorraadkast", note:"Maandelijks" },
  { name:"Taco kruidenmix (paar zakjes)", price:2.00, category:"voorraadkast", note:"Per zakje 1 maaltijd" },
  { name:"Pesto (potje)", price:2.00, category:"voorraadkast", note:"Geopend 1-2 weken houdbaar" },
  { name:"Parmezaan", price:3.00, category:"vers", note:"Gaat 2-3 weken in de koelkast" },
  { name:"Brood", price:2.20, category:"vers", note:"Elke week" },
  { name:"Eieren (10st)", price:2.50, category:"vers", note:"Elke week" },
  { name:"Melk", price:1.30, category:"vers", note:"Elke week" },
  { name:"Boter", price:2.00, category:"vers", note:"Elke 2 weken" },
  { name:"Geraspte kaas", price:2.50, category:"vers", note:"Elke week" },
  { name:"Sour cream", price:1.20, category:"vers", note:"Elke week als je wraps maakt" },
  { name:"Uien (net)", price:1.00, category:"vers", note:"Elke 1-2 weken" },
  { name:"Knoflook", price:0.80, category:"vers", note:"Elke 2 weken" },
  { name:"Diepvries groentenmix", price:2.00, category:"diepvries", note:"Elke 1-2 weken" },
  { name:"Ovenfriet (1kg)", price:2.00, category:"diepvries", note:"Vriezer, per maaltijd" },
  { name:"Diepvriesvis (panga of tilapia)", price:3.50, category:"diepvries", note:"Vriezer, per maaltijd" },
  { name:"Fruit (bananen, appels)", price:3.00, category:"vers", note:"Elke week" },
  { name:"Sla (krop of zak)", price:1.50, category:"vers", note:"Elke week" },
  { name:"Komkommer", price:0.80, category:"vers", note:"Elke week" },
  { name:"Tomaten", price:1.50, category:"vers", note:"Elke week" },
];

const snacks = [
  { name:"Noten (ongezouten, zak)", price:2.50 },
  { name:"Crackers", price:1.50 },
  { name:"Hummus", price:1.80 },
  { name:"Wortels (om te snacken)", price:1.00 },
  { name:"Komkommer (extra voor snack)", price:0.80 },
  { name:"Mueslirepen", price:2.00 },
];

const backupMeals = [
  { name:"Diepvriespizza (2st)", price:4.00 },
  { name:"Kant-en-klaarmaaltijd (2st)", price:6.00 },
];

const breakfastItems = [
  { name:"Kaas (plakken)", price:2.50 },
  { name:"Ham", price:2.00 },
  { name:"Pindakaas", price:2.50 },
  { name:"Hagelslag", price:1.50 },
  { name:"Yoghurt of kwark (500g)", price:1.80 },
  { name:"Muesli/granola", price:2.50 },
];

// ============================================================
// HUISHOUDEN
// ============================================================
const TRASH_CONFIG = {
  keukenafval: { day:2, label:"Keukenafval", color:"#2ea043", everyWeek:true },
  restafval: { day:3, label:"Restafval", color:"#777", refDate:new Date(2026,2,25), intervalWeeks:4 },
  papier: { day:3, label:"Papier", color:"#38a0d4", refDate:new Date(2026,2,4), intervalWeeks:2 },
  pmd: { day:5, label:"PMD", color:"#d44030", refDate:new Date(2026,2,6), intervalWeeks:2 },
};

const TASKS = {
  was:       { name:"Was draaien",    desc:"Machine vullen en aanzetten",                     duration:10, icon:"👕" },
  opvouwen:  { name:"Was opvouwen",   desc:"Uit de droger, opvouwen en opruimen",             duration:15, icon:"👔" },
  badkamer:  { name:"Badkamer & wc",  desc:"Poetsen, spiegel, toilet",                        duration:20, icon:"🚿" },
  stofzuiger:{ name:"Stofzuigen",     desc:"Handmatig — hoeken, trap, waar de robot niet komt",duration:20, icon:"🧹" },
  dweil:     { name:"Dweilen",        desc:"Alle harde vloeren",                              duration:15, icon:"🪣" },
  bed:       { name:"Bed verschonen",  desc:"Lakens eraf, schone erop",                        duration:20, icon:"🛏️" },
  ramen:     { name:"Ramen lappen",    desc:"Binnenkant (en buiten als het kan)",              duration:30, icon:"🪟" },
};

const DAILY_TASK = { name:"Keuken opruimen", desc:"Aanrecht leeg, vaatwasser in- of uitruimen", duration:10, icon:"🍳", person:"Funs" };
