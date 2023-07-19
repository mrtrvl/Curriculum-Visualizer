# Õppekava visualiseerimine

Selle projekti eesmärk on õppekava visualiseerimise tööriista veebiversiooni loomine. Tööriist võimaldab õppekava visualiseerimist, muutmist ja salvestamist. Tööriistast võiks olla kasu õppekava loomisel, muutmisel, analüüsimisel, tutvustamisel jne.

Lisaks võiks olla sellest kasu õpilastel ja õppejõududel, kes saaksid õppekava visualiseerimise abil paremini aru õppekava ülesehitusest ja sellest, kuidas erinevad õppeained omavahel seotud on.

> Hetkel on tegemist prototüübiga, mille eesmärgiks on välja selgitada, kas päriselt on sellisest tööriistast kasu ja kuidas seda võiks edasi arendada.
> See tähendab seda, et hetkel võib olla tööriist ebastabiilne ja võib sisaldada vigu. Samuti ei ole väga palju rõhku pandud kasutajaliidesele ja kasutajakogemusele, vaid pigem on keskendutud funktsionaalsusele.

## Üldpõhimõte

- Õppekava sisaldab endas õppeaineid.
- Õppeained kuuluvad semestri alla.
- Õppeainetel võivad olla omavahel seosed või eeldused, mis omakorda võivad olla kohustuslikud või soovituslikud.
- Õppeained võivad kuuluda ka moodulitesse (Näiteks "Erialaained").
- Õppeaineid näidatakse graafina, kus iga õppeaine on ühendatud teiste õppeainetega, millel on seos või eeldus.
- Õppeaineid saab graafil liigutada.
- Seoseid ainete vahel saab luua ja kustutada
- Õppeainetele saab lisada märksõnu, mis ei pruugi olla otseselt ainekaardiga seotud.
- Graafil õppeainele vajutades tõstetakse esile kõik selle õppeaine seosed ja eeldused.
- Esilhel olev otsing otsib ja tõstab esile märksõnade ja õppeainete nimede järgi.
- Õppeainete lehel saab õppeaineid sorteerida ja filtreerida tabelis nähtavate väärtuste alusel.

## Õppekava ja ainete lisamine

Uue õppekava saab lisada või kopeerida olemasolevast õppeakavast. Õppekava lisamisel luuakse tühi õppeakava, mis sisaldab ainult semestreid. Olemasoleva õppekava kopeerimisel kopeeritakse ka kõik õppeained ja seosed.

Õppeaineid saab lisada õppekavasse käsitsi või importides ÕIS-ist. ÕIS-ist importimiseks on vaja teada õppeaine koodi, mille alusel otsitakse ÕIS-ist vastava õppeaine ainekaart ja võetakse vajalikud andmed otse ainekaardilt. Seejärel on võimalik teha vajalikud muudatused (kindlasti tuleks valida semester, millal õppeaine toimub ja moodul, mille alla õppeaine kuulub) ja salvestada õppeaine.

Seoseid saab luua otse graafil, kus tuleb alguses menüüst valida seose loomine ja vastavalt vajadusele valida seose tüüp (soovituslik või kohustuslik). Seejärel tuleb graafilt valida õppeaine, millest seos algab ja õppeaine, mille poole seos suunatud on.

Märksõnu saab lisada graafi vaates, valides kõigepealt õppeaine ja seejärel lisada vasakult vaatest vajalikud märksõnad. Peale märksõnade lisamist tuleb vajutada nupule salvesta.
## Andmemudel

Curriculum (Õppekava)
 - name: string (Õppekava nimi - näiteks "Rakendusinformaatika")
 - version: string (Õppekava versioon - näiteks "RIF23")
 - uuid: string (Unikaalne identifikaator)
 - subjects [Subject] (Õppeained)
 - relations [Relation] (Seosed õppeainete vahel)
 - deleted: boolean (Kas õppekava on kustutatud)

Subject (Õppeaine)
 - id: string (Õppeaine nimi - näiteks "Programmeerimine")
 - volume: number (Õppeaine maht EAP-des)
 - category: string (Õppeaine moodul - näiteks "Erialaained")
 - mandatory: string (Kas õppeaine on kohustuslik - näiteks "true") Boolean stringina tuleneb visualiseerimiseks kasutatavast raamistikust
 - parent: string (Semester, millal õppeaine toimub - näiteks "1. semester") - hetkel on semester ise samamoodi õppeaine, kuid ilma parent-ita ja muude mittevajalike parameetriteta
 - uuid: string (Unikaalne identifikaator)
 - learningOutcomes: [string] (Õpiväljundid)
 - keywords: [string] (Õppeaine võtmesõnad)
 - position: { x: number, y: number } (Õppeaine asukoht visualiseerimisel)

Relations
 - id: string (Unikaalne identifikaator)
 - source: string (Õppeaine nimi, millest seos algab)
 - tagret: string (Õppeaine nimi, mille poole seos suunatud)
 - recommended: string (Kas seos on soovituslik - näiteks "true") Boolean stringina tuleneb visualiseerimiseks kasutatavast raamistikust

## Planeeritavad/võimalikud funktsionaalsused
- Avalik vaade
  - Ei saa midagi lisada, kustutada, muuta
  - Mõeldud õppekava tutvustamiseks
  - ...
- Õpilase vaade
  - Saab märkida õppeaineid tehtuks
  - Saab peita õppeaineid, mida ei soovi õppida
  - Saab lisada vabaaineid
  - ...
- Sisselogimine
  - Vajalik eristamaks õpilast/õppejõudu/administraatorit/külalist
  - Isikustamiseks
  - ...
- Otsingu täiustamine
 - Otsimine õppeainete kirjeldustest, õpiväljunditest jne
 - ...
- Õpilaste lisamine õppekavale
  - ...
- Õppeainete täiendamine lisainfoga
  - e-kursuse asukoht
  - õppejõud
  - ainekaardi asukoht?
  - ...
- Integratsioon tunniplaaniga?
  - ...
## Kommentaarid ja ettepanekud

... võib saata e-mailile: mrt@tlu.ee

## Lokaalse arenduskeskkonna seadistamine

- TODO
### Andmebaas
- docker network create some-network
- docker run --network some-network --name mongo -p 27017:27017 -v ./mongodb:/data/db -d mongo
- docker run -it --rm -p 8081:8081 --network some-network mongo-express

