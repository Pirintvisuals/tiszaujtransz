# CLAUDE.md — Tiszaújváros Transz Website Rebuild

## Project
Rebuilding https://tiszaujvarostransz.hu/ as plain HTML/CSS/JS.
Goal: same structure and content, modernized design, animations, filterable References page.
Language: Hungarian only. Self-hosted, no build step, relative paths only.

## ⚠️ CRITICAL RULES — READ FIRST
- NEVER visit any URL or website during the build
- NEVER fetch any external resource to inspect it
- ALL content, images, videos and text are in this file — use only what is here
- ONE file per prompt — finish it completely before moving on
- Keep prompts small — if a file is getting long, stop and ask

---

## Brand
```css
:root {
  --color-primary:   #3A8B7D;
  --color-dark:      #4C4C4C;
  --color-bg:        #FFFFFF;
  --color-accent:    #2271B1;
  --color-light:     #F6F7F7;
  --color-footer:    #2C2C2C;
  --font-heading:    'Poppins', Helvetica, Arial, sans-serif;
  --font-body:       'Open Sans', Arial, sans-serif;
}
```
Google Fonts: `Poppins:wght@600;700` + `Open+Sans:wght@400;500`

---

## File Structure
```
/project
  /assets/images/
  /css/
    main.css
    animations.css
  /js/
    main.js
    filters.js
  index.html
  rolunk.html
  generalkivitelezes.html
  epitoipari-fovallalkozas.html
  magasepites.html
  beton-es-vasbeton-epites.html
  ut-kozmu-melyepites.html
  gepi-foldmunkavegzes.html
  referenciak.html
  karrier.html
  kapcsolat.html
  bejelentesek.html
  media-megjelenes.html
```

---

## Navigation (use on every page)
```
FŐOLDAL                → index.html
RÓLUNK ▾
  Cégünkről            → rolunk.html
  Média megjelenés     → media-megjelenes.html
SZOLGÁLTATÁSOK ▾
  Generálkivitelezés          → generalkivitelezes.html
  Építőipari fővállalkozás    → epitoipari-fovallalkozas.html
  Magasépítés                 → magasepites.html
  Beton és vasbeton építés    → beton-es-vasbeton-epites.html
  Út-, közmű- és mélyépítés   → ut-kozmu-melyepites.html
  Gépi földmunkavégzés        → gepi-foldmunkavegzes.html
REFERENCIÁK            → referenciak.html
KARRIER                → karrier.html
KAPCSOLAT              → kapcsolat.html
BEJELENTÉSEK           → bejelentesek.html
```
Nav behavior: transparent at top → white + box-shadow on scroll. Hamburger on mobile.

---

## Shared Footer (use on every page)
- Background: #2C2C2C
- Logo: `<img src="assets/images/logo.png">`
- Two columns: nav links left, contact right
- Company: Tiszaújváros Transz Építőipari és Szállítmányozó Kft.
- Address: 3580 Tiszaújváros, Kandó Kálmán u. 2.
- Phone: +36 30 751 0000
- Email: info@tiszaujvarostransz.hu
- Bottom bar: © 2025 Tiszaújváros Transz Kft.

---

## Shared Partner Logos Strip
Use on: index.html, rolunk.html
Dark/teal background (#3A8B7D), logos displayed in a horizontal row:
```html
<img src="https://tiszaujvarostransz.hu/wp-content/uploads/2024/05/joyson-logo-white.png" alt="Joyson">
<img src="https://tiszaujvarostransz.hu/wp-content/uploads/2024/08/mvm-xpert-logo-white.png" alt="MVM Xpert">
<img src="https://tiszaujvarostransz.hu/wp-content/uploads/2024/08/kkbsc-logo-white.png" alt="KKBSC">
<img src="https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/ref-logo-jysk-white.png" alt="JYSK">
<img src="https://tiszaujvarostransz.hu/wp-content/uploads/2024/05/mb-logo-white.png" alt="Molnár Beton">
```

---

## IMAGE URLS (use these directly as src — do not change)
```
Logo:             https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/TT-logo-H-GP-csop.png
Hero/About img:   https://tiszaujvarostransz.hu/wp-content/uploads/2024/08/tt-image-2024.webp
Széchenyi banner: https://tiszaujvarostransz.hu/wp-content/uploads/2024/05/szechenyi-infoblokk-2.png
About pic 1:      https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/tt-pic-03.jpg
About pic 2:      https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/tt-pic-04.jpg
Service page img: https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/tt-pic-05.jpg
Certificates:     https://tiszaujvarostransz.hu/wp-content/uploads/2024/05/tanusitvanyok.png

Service icons:
  Generálkivitelezés:    https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/icon-building-2.png
  Fővállalkozás:         https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/icon-engineers.png
  Magasépítés:           https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/icon-crane-2.png
  Beton/vasbeton:        https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/icon-concrete-mixer.png
  Út/közmű/mélyépítés:   https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/icon-worker.png
  Gépi földmunka:        https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/icon-excavator.png
```

---

## YOUTUBE EMBEDS (use on rolunk.html)
```html
<iframe src="https://www.youtube.com/embed/grq5MqPFAww" title="Tiszaújváros Transz Kft." frameborder="0" allowfullscreen></iframe>
<iframe src="https://www.youtube.com/embed/2vjGQ6JElxY" title="Tiszaújváros Transz Kft." frameborder="0" allowfullscreen></iframe>
```
Each embed: 16:9 aspect ratio, full column width.

---

## PAGE CONTENT

### index.html — Homepage
Sections in order:

**1. HERO**
- Full viewport height, background: #3A8B7D with dark overlay
- Image: tt-image-2024.webp (right side or background)
- H1: "Több, mint 25 éve az építőiparban!"
- Subtext: "Kimagasló szakmai háttérrel és több mint 25 év tapasztalatával állunk rendelkezésére, hogy megvalósítsuk elképzeléseit."
- Buttons: "KAPCSOLAT" → kapcsolat.html | "REFERENCIÁINK" → referenciak.html
- Stagger entrance animation on load

**2. SZÉCHENYI BANNER**
- White background, centered
- Image: szechenyi-infoblokk-2.png
- Caption: "Európai Uniós társfinanszírozással megvalósuló fejlesztéseink"

**3. KIK VAGYUNK**
- Two columns: text left, image right
- H2: "Kik vagyunk?"
- Body: "Cégünk fennállása óta, a legfontosabb számunkra, hogy úgy valósítsuk meg ügyfeleink terveit és elképzeléseit, ahogyan azt megálmodták. Így tudunk hosszútávú, stabil együttműködéseket kialakítani partnereinkkel."
- Button: "RÓLUNK" → rolunk.html
- Image: tt-image-2024.webp
- Stats below text: 25+ Év tapasztalat | 200+ Befejezett projekt | 50+ Szakember | 2 Telephely

**4. SERVICES GRID**
- H2: "Szolgáltatások"
- 3×2 grid, each card: icon + title + description + "Részletek →" link
1. Építőipari generálkivitelezés — "Összehangoljuk a velünk együttműködő vállalkozók munkáját és teljesítjük az Ön elképzelését!" → generalkivitelezes.html
2. Általános építőipari fővállalkozás — "Koordináljuk az építkezésen dolgozó vállalkozók munkavégzését, megteremtjük a feltételeket, hogy munkájukat határidőkhöz igazodva, kiváló minőségben tudják elvégezni." → epitoipari-fovallalkozas.html
3. Magasépítés — "Saját tulajdonú gépparkunk, tapasztalt gépkezelő munkásaink és mérnökeink biztosítják a megfelelő hátteret magasépítési szolgáltatások elvégzéséhez." → magasepites.html
4. Speciális beton és vasbeton építés — "Cégünk speciális igényekre szabott beton és vasbeton műtárgyak, aknák, támfalak építésével is foglalkozik." → beton-es-vasbeton-epites.html
5. Út-, közmű-, és mélyépítés — "Egy kézben látjuk el megbízóink épületeinek elkészítését és az ahhoz tartozó út-, közmű-, és mélyépítési feladatok elvégzését is." → ut-kozmu-melyepites.html
6. Gépi földmunkavégzés — "Vállalunk alapozási munkálatokat, autópálya kivitelezést, gát és töltések kiépítését, tereprendezést és minden egyéb olyan feladatot, ahol nagy mennyiségű földet kell mozgatni." → gepi-foldmunkavegzes.html

**5. QUALITY CTA BANNER**
- Full-width teal (#3A8B7D) background with subtle background image overlay
- H2: "Minőségi munkák, országszerte"
- Subtext: "Megbízóinktól kapott bizalmat első osztályú munkával háláljuk meg."
- Partner logos strip (see above)
- Button: "REFERENCIÁK" → referenciak.html

**6. FOOTER**

---

### rolunk.html — Rólunk
**Hero section:**
- Teal background (#3A8B7D)
- H1: "Rólunk"
- Subtext: "Alkotunk, átalakítunk, bérbeadjuk épületeinket, földmunkákat végzünk. Azt csináljuk, amit szeretünk, és amiben a legjobbak vagyunk."
- Button: "KAPCSOLAT" → kapcsolat.html
- Right image: tt-pic-03.jpg

**About section:**
- H2: "Tiszaújváros Transz Kft."
- Text col 1: "Saját gépparkunk, emberi erőforrásunk, több évtizedre visszanyúló kapcsolatrendszerünk és megfontolt gazdaságpolitikánk tesz minket igazán erőssé az építőipari piacon. Az eddig elkészült munkáink állítanak emléket és fémjelzik azt az utat, amin a cégünk jár és aminek eredményeképp évről évre dinamikusan fejlődünk. Mára cégünk egy jelentős kapacitással bíró, multinacionális vállalatok kiszolgálására is alkalmas vállalkozássá nőtte ki magát."
- Text col 2: "Telephelyeinket Borsod-Abaúj-Zemplén vármegye két, az iparban meghatározó városában, Miskolcon és Tiszaújvárosban üzemeltetjük. Ezeken a területeken évtizedek tapasztalatai alapján, a piaci igényekhez igazodva építettük ki a tevékenységeink körét. Megbízóinktól kapott bizalmat első osztályú munkával háláljuk meg. Rendszeresen dolgozunk az ország meghatározó vállalatainak. Több áru- és irodaházat építettünk a Hewlett-Packard, a BOSCH és a JYSK részére."
- Button: "VEGYE FEL VELÜNK A KAPCSOLATOT" → kapcsolat.html
- Image left: tt-pic-03.jpg
- YouTube embed 1: grq5MqPFAww (right side)

**Minőségirányítás section:**
- H2: "Minőségirányítás"
- Text col 1: "Az eredményes gazdálkodás és a folyamatos fejlődés érdekében vállalkozásunk életében kiemelt szerepet kap a minőség és környezetpolitika, hogy hosszú távú és kifogástalan minőségű szolgáltatásokat nyújtunk ügyfeleink számára. Társaságunk bevezette az ISO 9001 és 14001-es minőségirányítási rendszert."
- Text col 2: "A Tiszaújváros Transz Kft. tudatos vállalatfejlesztési koncepciójába illesztve mindent megtesz azért, hogy az MSZ EN ISO 9001:2015 és MSZ EN ISO 14001:2015 szabványok szerinti integrált irányítási rendszerünk hatékonyságát a folyamatokban meghatározott szinten tartsuk, és folyamatosan tovább fejlesszük."
- Image: tanusitvanyok.png (certificates)
- YouTube embed 2: 2vjGQ6JElxY

**Quality CTA Banner + Partner logos + Footer**

---

### generalkivitelezes.html — Generálkivitelezés
**Hero:** Teal bg, H1: "Építőipari generálkivitelezés", image: tt-pic-05.jpg
**Main content:**
- H2: "Építőipari generálkivitelezés"
- "Komplex építési projektek kulcsrakész átadását vállaljuk, mely során nem csak a legkiválóbb vállalkozók közreműködését garantáljuk, hanem gondoskodunk a legjobb minőségű alapanyagok beszerzéséről is. Projektjeink sikerességét és ügyfeleink elégedettségét a több évtizedes tapasztalatnak, a magasan képzett szakembergárdának és a saját tulajdonú eszközparkunknak köszönhetjük. Elsődleges szempontunk, hogy a kitűzött cél felé megrendelőinkkel közös elképzelések mentén haladjunk és a projekt minden szakaszában segítséget nyújtsunk a lehető legjobb eredmény elérése érdekében."
**Services sidebar/grid + CTA "Dolgozzon velünk! Kérjen ajánlatot" → kapcsolat.html + Footer**

---

### epitoipari-fovallalkozas.html — Fővállalkozás
**Hero:** Teal bg, H1: "Általános építőipari fővállalkozás"
**Main content:**
- "Tervezéstől az átadásig, fővállalkozóként valósítunk meg építőipari projekteket. Vállaljuk a különböző munkafázisok optimális összehangolását, a szükséges anyagok beszerzését, helyszíni egyeztetések lebonyolítását. Koordináljuk az építkezésen dolgozó vállalkozók munkavégzését, megteremtjük a feltételeket, hogy munkájukat határidőkhöz igazodva, kiváló minőségben tudják elvégezni. Gondoskodunk a műszaki, gazdasági feltételek teljesítéséről is. Projektjeink sikerességét és ügyfeleink megelégedettségét több évtizedes múltunk, magasan képzett szakembergárdánk és saját tulajdonú eszközparkunk garantálja."
**Services sidebar/grid + CTA + Footer**

---

### magasepites.html — Magasépítés
**Hero:** Teal bg, H1: "Magasépítés"
**Main content:**
- "Saját tulajdonú gépparkunk, hosszú évek óta az iparban dolgozó, tapasztalt gépkezelő munkásaink és mérnökeink biztosítják a megfelelő hátteret komplex magasépítési szolgáltatások elvégzéséhez. Cégünk rendelkezik a magasépítési feladatok ellátásához nélkülözhetetlen, legmagasabb felkészültségű szakemberekkel és technikai felszerelésekkel. Állványozással és ipari alpinistákkal egyaránt dolgozunk, már elkészült épületek generálozását és bővítését is el tudjuk végezni."
**Services sidebar/grid + CTA + Footer**

---

### beton-es-vasbeton-epites.html — Beton és vasbeton
**Hero:** Teal bg, H1: "Speciális beton és vasbeton építés"
**Main content:**
- "Cégünk speciális igényekre szabott vasbeton elemek tervezésével, elkészítésével, szállításával, és komplett szerkezetépítési munkák kivitelezésével is foglalkozik. Projektjeink sikerességét és ügyfeleink megelégedettségét a több évtizedes múltunk, magasan képzett szakembergárdánk és saját tulajdonú eszközparkunk garantálja. Mindemellett elsődleges szempontunk, hogy egy közös cél felé haladjunk, amelyben cégünk segítő kezet nyújt a minket megbízó vállalatok számára."
**Services sidebar/grid + CTA + Footer**

---

### ut-kozmu-melyepites.html — Út-, közmű-, mélyépítés
**Hero:** Teal bg, H1: "Út-, közmű- és mélyépítés"
**Main content:**
- "Egy kézben vállaljuk megbízóink épületeinek kivitelezését és az azokhoz tartozó út-, közmű-, és mélyépítési projektek megvalósítását is. Legyen szó csatornahálózat kiépítéséről, gátak, rézsű, speciális öntöző, tüzivíz vagy ivóvíztározók létesítéséről, saját gépparkunkkal, a szükséges műszaki szakértelemmel rendelkező kollégáinkkal végezzük el a szükséges feladatokat. Kiemeljük a már meglévő bontásra, vagy felújításra szánt régi elemeket, tömböket, megtervezzük a biztonságos szenny- vagy csapadékvízkezelő rendszereket és ezek újrahasznosításához szükséges felépítményeket. Nem jelent gondot speciális gáz és szállítóvezetékek kivitelezése sem, megfelelő tanúsítványokkal és minősített hegesztőink segítségével biztonságosan és professzionális módon végezzük el a kivitelezést. Tevékenységeink között szerepel az út-, járda és térburkolatok építése felújítása, különféle bontási munkálatok is."
**Services sidebar/grid + CTA + Footer**

---

### gepi-foldmunkavegzes.html — Gépi földmunkavégzés
**Hero:** Teal bg, H1: "Gépi földmunkavégzés"
**Main content:**
- "Vállalkozásunk meghatározó tevékenysége a nagy tömegű, gépi földmunkavégzés. 2016-ban több száz millió forintos beruházás keretein belül fejlesztettük gépparkunkat és bővítettük szakembergárdánkat. Földmunka csoportunk vállal alapozási munkálatokat, autópálya kivitelezést, gát és töltések kiépítését, tereprendezést és minden egyéb olyan feladatot, ahol nagy mennyiségű földet kell mozgatni, szállítani."
**Services sidebar/grid + CTA + Footer**

---

### referenciak.html — Referenciák
**Hero:** Teal bg, H1: "Referenciák"
**Filter bar** (two rows):
- Row 1 — Projekt típusa: Összes | Útépítés | Raktárcsarnok | Magasépítés | Alapozás | Földmunka | Felújítás
- Row 2 — Helyszín: Összes | Miskolc | Tiszaújváros | Szirmabesenyő | Alsózsolca | Jászfényszaru | Egyéb

**Reference cards grid (3 columns):**
Each card: image + title + location badge + type badge

1. Title: "Pere, útépítés" | Location: Pere | Type: Útépítés | Client: Pere Község Önkormányzata
   Image: https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/ref-pere-utepites.jpg

2. Title: "Szirmabesenyő, Raktárcsarnok alapozás" | Location: Szirmabesenyő | Type: Alapozás | Size: 4 600 m²
   Image: https://tiszaujvarostransz.hu/wp-content/uploads/2022/06/szirmabeseny%C5%91-0129-114.jpg

3. Title: "Szirmabesenyő, Logisztikai csarnok" | Location: Szirmabesenyő | Type: Raktárcsarnok | Size: 9 000 m²
   Image: https://tiszaujvarostransz.hu/wp-content/uploads/2022/06/szirmabeseny%C5%91-0129-114.jpg

4. Title: "Robert Bosch Csarnok Bővítés" | Location: Miskolc | Type: Magasépítés | Size: 1 134 m²
   Image: https://tiszaujvarostransz.hu/wp-content/uploads/2017/10/Bosch-csarmok-bovites-2017..jpg

5. Title: "Bonar Geosynthetics Raktárcsarnok" | Location: Tiszaújváros | Type: Raktárcsarnok | Size: 10 560 m²
   Image: https://tiszaujvarostransz.hu/wp-content/uploads/2017/05/tiszaujvaros-transz-bonar1.jpg

6. Title: "Robert Bosch Logisztikai Raktár" | Location: Miskolc | Type: Raktárcsarnok | Size: 10 128 m²
   Image: https://tiszaujvarostransz.hu/wp-content/uploads/2017/10/Bosch-Logisztikai-raktar-2014..jpg

7. Title: "Simontornya – bőrgyár rekultiváció" | Location: Egyéb | Type: Földmunka
   Image: https://tiszaujvarostransz.hu/wp-content/uploads/2017/10/simontornya-borgyar.jpg

8. Title: "Alsózsolca, Logisztikai csarnok" | Location: Alsózsolca | Type: Raktárcsarnok | Size: 9 000 m²
   Image: https://tiszaujvarostransz.hu/wp-content/uploads/2022/06/MAIP.jpg

9. Title: "Jászfényszaru, Logisztikai csarnok" | Location: Jászfényszaru | Type: Raktárcsarnok | Size: 14 000 m²
   Image: https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/ref-jaszfenyszaru.jpg

10. Title: "Logisztikai raktár és irodaépület alapozás" | Location: Tiszaújváros | Type: Alapozás
    Image: https://tiszaujvarostransz.hu/wp-content/uploads/2022/06/aktual-bau-k%C3%B6zben.jpg

11. Title: "M30 autópálya földmunkák" | Location: Egyéb | Type: Földmunka
    Image: https://tiszaujvarostransz.hu/wp-content/uploads/2022/10/ref-pere-utepites.jpg

12. Title: "Miskolci Jysk Áruház" | Location: Miskolc | Type: Magasépítés | Size: 1 300 m²
    Image: https://tiszaujvarostransz.hu/wp-content/uploads/2022/06/MAIP.jpg

Filter logic in filters.js: data-type and data-location attributes on each card, buttons filter by these.
Cards animate out/in with fade when filter changes.

---

### kapcsolat.html — Kapcsolat
**Hero:** Teal bg, H1: "Kapcsolat"
**Two-column layout:**
Left — Contact form:
- Fields: Név, Email, Telefon, Üzenet (textarea), Küldés button

Right — Info:
- Cím: 3580 Tiszaújváros, Kandó Kálmán u. 2.
- Telefon: +36 30 751 0000
- Email: info@tiszaujvarostransz.hu

**Team contacts grid:**
| Név | Beosztás | Email | Telefon |
|---|---|---|---|
| Mantlik Péter | ügyvezető | peter.mantlik@tiszaujvarostransz.hu | +36 30 405 7060 |
| Fazekasné Kollár Anita | műszaki menedzser | anita.kollar@tiszaujvarostransz.hu | +36 30 364 2339 |
| Nagy Zoltán | logisztikai vezető | nagy.zoltan@greenplan.hu | +36 70 607 7273 |
| Galuska Balázs | főmérnök | balazs.galuska@tiszaujvarostransz.hu | +36 30 355 5546 |
| Homoki Gábor | munkahelyi mérnök | gabor.homoki@tiszaujvarostransz.hu | +36 30 194 2601 |
| Sári-Timár Katalin | logisztikai munkatárs | katalin.timar@tiszaujvarostransz.hu | +36 30 482 8878 |
| Szeszák Attila | útépítési üzletágvezető | attila.szeszak@tiszaujvarostransz.hu | +36 30 249 9682 |
| Pirint Tímea | műszaki előkészítő | timea.pirint@tiszaujvarostransz.hu | +36 20 222 0085 |
| Lengyel József | építésvezető | jozsef.lengyel@tiszaujvarostransz.hu | +36 30 831 3257 |
| Prágai Ferenc | építésvezető | pragai.ferenc@tiszaujvarostransz.hu | +36 30 848 7896 |
| Kiss Katalin | projekt menedzser | katalin.kiss@tiszaujvarostransz.hu | +36 20 945 7461 |
| Bodnár Krisztina | pénzügyi munkatárs | krisztina.bodnar@tiszaujvarostransz.hu | +36 30 472 5306 |
| Belényesi Lajosné | logisztikai munkatárs | marika.belenyesine@tiszaujvarostransz.hu | +36 70 229 6100 |

**Google Maps embed** (Tiszaújváros, Kandó Kálmán u. 2.) + Footer

---

### karrier.html — Karrier
**Hero:** Teal bg, H1: "Karrier", subtext: "Stabil vállalati háttér, dinamikus csapat – csatlakozzon hozzánk!"
**Job listings** (3 cards):
1. Nehézgépkezelő — "Gyakorlattal rendelkező nehézgépkezelőt keresünk! Küldje el önéletrajzát az info@tiszaujvarostransz.hu címre" — Button: "Jelentkezés" (mailto:info@tiszaujvarostransz.hu)
2. Kőműves — "Gyakorlattal rendelkező kőművest keresünk! Küldje el önéletrajzát az info@tiszaujvarostransz.hu címre" — Button: "Jelentkezés"
3. Tehergépjármű-vezető — "Gyakorlattal és C + E jogosítvánnyal rendelkező tehergépjármű-vezetőt keresünk! Küldje el önéletrajzát az info@tiszaujvarostransz.hu címre" — Button: "Jelentkezés"
**Quality CTA Banner + Footer**

---

### bejelentesek.html — Bejelentések
**Hero:** Teal bg, H1: "Bejelentések"
**Content:**
- Intro: "A Bejelentővédelmi program a 2023. évi XXV. törvény alapján szabályozott bejelentőrendszer, mely a jövőbeni, jelenlegi és múltbéli tulajdonosok, partnerek, munkavállalók, gyakornokok és önkéntesek részére biztosít lehetőséget a panaszok, a közérdekű bejelentések, valamint a visszaélések bejelentésére biztonságos keretek között."
- Simple contact form: Név, Email, Üzenet, Küldés
**Footer**

---

### media-megjelenes.html — Média megjelenés
**Hero:** Teal bg, H1: "Média megjelenés", subtext: "Rólunk szóló hírek a sajtóban és közösségi médiában"
**News cards:**
1. Title: "Technológiai korszerűsítés — új munkagépeket vásárolt a Tiszaújváros Transz" | Source: Sümegi Szó – Facebook | Date: 2024. november 8.
2. Title: "Ma Tapolcán megtörtént az alapkőletétel" | Description: "Ma Tapolcán megtörtént az alapkőletétel, ezzel megkezdődnek a kivitelezési munkálatok. A tervek szerint tavasszal várható az étterem nyitása."
**Footer**

---

## Animations (css/animations.css + js/main.js)
- `.fade-up`: opacity 0 + translateY(30px) → opacity 1 + translateY(0) via Intersection Observer
- Stagger: `animation-delay: calc(var(--i) * 0.1s)` on grid children
- Nav scroll: add `.scrolled` class to nav when window.scrollY > 50
- Card hover: `transform: translateY(-6px); box-shadow: 0 12px 32px rgba(0,0,0,0.12)`
- Button hover: `background: darken 10% + transform: scale(1.02)`
- Hero entrance: H1 fades up first, then subtext (0.2s delay), then buttons (0.4s delay)

---

## Design Rules (apply on every page)
- Use frontend-design skill — production-grade, not generic
- Poppins for all headings, Open Sans for body
- Service page layout: full-width hero, then content + services sidebar
- All pages fully mobile responsive
- No console errors
- Relative paths: `./css/main.css` not `/css/main.css`
- Alt text on every image

---

## Build Order
1. `css/main.css` — variables, resets, shared components
2. `css/animations.css` — all animations
3. `js/main.js` — nav scroll + hamburger
4. `index.html` — **get approval before any other page**
5. `rolunk.html`
6. Service pages (one at a time)
7. `referenciak.html` + `js/filters.js`
8. `kapcsolat.html`, `karrier.html`, `bejelentesek.html`, `media-megjelenes.html`

## Page Inventory
| Page | File | Status |
|---|---|---|
| Homepage | index.html | ⬜ |
| Rólunk | rolunk.html | ⬜ |
| Generálkivitelezés | generalkivitelezes.html | ⬜ |
| Fővállalkozás | epitoipari-fovallalkozas.html | ⬜ |
| Magasépítés | magasepites.html | ⬜ |
| Beton/vasbeton | beton-es-vasbeton-epites.html | ⬜ |
| Út/közmű/mélyépítés | ut-kozmu-melyepites.html | ⬜ |
| Gépi földmunka | gepi-foldmunkavegzes.html | ⬜ |
| Referenciák | referenciak.html | ⬜ |
| Karrier | karrier.html | ⬜ |
| Kapcsolat | kapcsolat.html | ⬜ |
| Bejelentések | bejelentesek.html | ⬜ |
| Média megjelenés | media-megjelenes.html | ⬜ |
