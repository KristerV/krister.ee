# Vaibkoodija sõber — koolitus

**Veebikoolitus · 99 €**
*Kõik, mida pead teadma, et vaibkoodida targalt ja teada, millal kutsuda appi insener.*

**Üritus:** *Vaibkoodija ellujäämiskursus* — *väldi vigu, mis su äpi tapavad*
**Bränd:** Vaibkoodija sõber · Krister Viirsaar

> **NB:** allolev kava on teadlikult üle 3 tunni. Kirja on pandud kõik, mida tahame käsitleda — kärbime hiljem 3 tunni sisse.

---

## 0. Positsioneerimine (sisemine — ei lähe Fientasse)

**Suur idee:** vaibkoodi äriloogikat, mitte vundamenti.

- Kui ehitad tööriista iseendale → 100% vaibkood on täiesti okei.
- Kui ehitad tööriista oma tiimile või klientidele → vajad turvalisust ja stabiilsust aastateks. **Siin tuleb mängu partner — mina.**

**Minu eesmärk koolitusega:**
1. Anda inimestele julgus ja oskus väikseid asju ise ehitada.
2. Teha selgeks, kus on piir, mille taga läheb vaja inseneri.
3. Positsioneerida ennast *vaibkoodija-sõbraliku insenerina* — inimesena, kes ei naeruväärista su Lovable'i äppi, vaid ehitab sellele kindla vundamendi.
4. Anda kaasa **minu Elixiri stack koos valmis RLS- ja rollilahendusega**, et nad saaksid kohe vaibkoodimisega edasi minna ja minu juurde tagasi tulla, kui asi suureks kasvab.

**Sihtgrupp:** vähemalt 10 töötajaga ettevõtted, kes on juba 1–2 äppi sisekasutuseks teinud ja saavad hea teenuse eest maksta. Inimene, kes on äpi valmis saanud, aga **ei tunne end sellega kindlalt.** Kiired õppijad. See on *näitan kõike, mida vaja*, mitte töötuba.

---

## 1. Koolituse kava (läbiviimise kava)

Tempo on kiire — see on ülevaade, mitte praktiline töötuba. Kaks pausi.

### Plokk 0 — Sissejuhatus (10 min)
- Kes ma olen, miks ma seda teen.
- Kellele see koolitus on (ja kellele mitte).
- **Üks lubadus:** lahkud teadmisega, mida julgelt ise vaibkoodida ja kus tõmmata piir.
- Päeva kaart.

### Plokk 1 — Tööriistad ja realistlik pilt AI-st (15 min)
- Lovable'i kiire ülevaade: mis see on, kuidas töötab, kus särab.
- Claude Code'i kiire ülevaade: terminal, päris failid, päris koodihoidla — samm Lovable'ist edasi.
- **Mida AI suudab ja mida mitte.** Mõttemudel: AI on suurepärane juunior, kes ei väsi, aga ei kanna vastutust ega näe tervikut. Ta kirjutab koodi, aga ei oma arhitektuuri.
- Müüt, mille me täna maha matame: *"AI lahendab kõik."* — vt plokk 9.

### Plokk 2 — Tegelik risk: PMF ja UX (äriline) (15 min)
*See plokk raamistab kogu koolituse ümber ja näitab, et ma ei mõtle ainult tehniliselt.*
- **Su nr 1 risk EI OLE turvalisus.** Su nr 1 risk on, et keegi ei taha seda, mida ehitad — või et UX on nii halb, et seda ei suuda keegi kasutada.
- **Selgita PMF (toote ja turu sobivus) ning UX välja ENNE**, kui arhitektuuri pärast muretsed.
- **Just siin vaibkood tõeliselt särab:** sellega saab kiiresti ja odavalt prototüüpida ning päris kasutajatega katsetada. Vaibi julgelt, kuni leiad selle, mida inimesed päriselt tahavad.
- Reegel: **kõigepealt ehita õige asi (vaib), siis ehita asi õigesti (vundament).** Turvalisus ja arhitektuur on raisatud, kui toodet keegi ei taha.

### Plokk 3 — Mis tegelikult kapoti all toimub (30 min)
- **Mis on andmebaas ja miks see on su äpi süda.** Andmed elavad kauem kui kood.
- **Miks Postgres on nii hea:** relatsioonid, terviklikkus (piirangud), transaktsioonid, küpsus. Miks "lihtsalt JSON-i kuhugi salvestamine" maksab hiljem valusalt kätte.
- **Relatsioonid lihtsalt:** kasutaja → tellimused → read. Miks seosed > duplikaadid.
- **Miks on vaja tagarakendust** ja mis see on. Kasutajaliides = vitriin, tagarakendus = ladu + kassa + turvamees.
- **Mis tegelikult juhtub Verceli + Supabase'i seadistuses:** kus su kood jookseb, kus andmed on, mis on serverita arhitektuur ja millised kohad jäävad sulle nähtamatuks.

### Plokk 4 — Omandus ja lukustus: kelle oma see kõik on? (15 min)
- **Kelle oma su kood on?** Kas lugesid Lovable'i või teiste tööriistade tingimusi? Kellele kuulub AI-ga genereeritud kood — sulle, Lovable'ile või Anthropicule? Kas saad selle eksportida ja mujale viia?
- **Teenusepakkuja lukustus on päris — eriti Supabase'i puhul.** Algul on see tasuta ja mugav, siis oledki kinni: kolimine on valus ja arved kasvavad ebanormaalselt suureks. Räägime, kuidas seda ette näha ja vältida.
- Küsimus, mida iga vaibkoodija peaks küsima: **kui see teenus homme kaob või kallineb 10×, kas ma saan edasi?**

> ☕ **Paus (10 min)**

### Plokk 5 — Päris stack, arhitektuur ja tehniline võlg (35 min)
- **Miks Vercel + Supabase EI OLE alati piisav** keerukamate projektide jaoks: keerukas loogika, taustatööd, õigused, integratsioonid, kontroll, hind skaleerumisel.
- **Kuidas näeb välja päris stack** ja miks. Tutvustan **minu Elixiri/Phoenixi stacki** ja annan kaasa valmis stardipaki.
- **Pikaajaline arhitektuur:** kuidas hoida äppi nii, et kuue kuu pärast saab keegi, ka AI, sellest aru ja julgeb seda muuta.
- **Kuidas vältida spagetikoodi:** selged piirid, üks asi teeb ühte asja, äriloogika on ühes kohas. Kuidas *arhitektuuril silma peal hoida* ilma ise insener olemata.
- **"Kas keegi peale sinu ja AI saab su äpist aru?"** — üleandmise test. Kui ei → oled lõksus.
- **Tehniline võlg:** mis see on, kuidas see vaikselt sisse hiilib ja miks see on kallis. **Mõnikord on lappimine kallim kui ümber ehitamine** — kuidas seda otsust teha enne, kui on hilja.

### Plokk 6 — Turvalisus, õigused ja andmed (35 min)
- **Saladused ja API-võtmed** — kõige sagedasem aps. Võti koodis või viibas = uks lahti.
- **Keskkonnad** (arendus-, test- ja tootmiskeskkond) ja miks kunagi ei tohi otse tootmiskeskkonna vastu töötada.
- **Varukoopiad ja andmekadu** — vaibkoodija ei mõtle varukoopiatele enne, kui on hilja.
- **Turvalised migratsioonid** — kuidas andmebaasi muuta nii, et andmeid ei kaota.
- **Mis on RLS (Row Level Security)** lihtsalt — ja miks sa *alati* lõpuks selleni jõuad, kui äpp pole ainult sulle.
- **Mis on päris rollisüsteem:** autentimine (kes sa oled) vs. autoriseerimine (mida tohid teha). Miks "admini märkeruut" ei skaleeru.
- **Kuidas äpp päris majutusse üles panna** — mitte ainult "vajutasin Lovable'is avaldamise nuppu". Oma keskkond, domeen ja logid.

### Plokk 7 — Kvaliteet ja töökindlus: testimine + CI/CD (20 min)
- **Manuaalne testimine** — kuidas süstemaatiliselt ise üle käia.
- **AI brauseritestimine** — lased AI-l su äppi päris brauseris läbi klõpsida.
- **Automaatne testimine** — miks see on see asi, mis laseb sul (ja AI-l) julgelt muudatusi teha ilma vana katki tegemata.
- **CI/CD lihtsalt:** mis on töövoog, miks "töötab mu masinas" ei piisa ja kuidas muudatus turvaliselt tootmiskeskkonda jõuab.

### Plokk 8 — Maksed ja integratsioonid (10 min)
- **Maksete sidumine: Stripe või Montonio** — millal kumb, mida silmas pidada.
- **Mis juhtub, kui Stripe valesti ühendada** — elav näide, kuidas hooletu seadistus avab ukse pettusele või rahakaole.

> ☕ **Lühike paus (5 min)**

### Plokk 9 — Vaibkoodija ja insener: kus on piir (20 min)
- **Mida vaibkoodida ja millal pöörduda päris programmeerija poole.** Selge raamistik:
  - Sisetööriist sulle endale → vaibi julgelt 100%.
  - Tööriist tiimile, klientidele, rahaga seotud kasutuseks või isikuandmetega töötamiseks → vajab vundamenti.
- **"Kas AI ei paranda siis kõike?"** — miks ei. AI parandab sümptomi, mitte arhitektuuri. Mida rohkem võlga, seda rohkem AI eksib.
- **Kuidas vaibkoodija ja insener koostööd teevad:** äriline ja tehniline järelevalve. Sinu käes on visioon ja äriloogika, mina hoian vundamenti ja turvalisust.
- **Kuidas vältida vaibivaenulikke programmeerijaid** — neid, kes su töö maha teevad ja kõik nullist üle kirjutavad. **Miks mina olen teistsugune:** ma austan seda, mida sa ehitasid, ja ehitan selle peale.

### Plokk 10 — Sinu stardipakk + edasi (10 min)
- **Mida sa täna kaasa saad:** minu Elixiri stack koos valmis RLS- ja rollilahendusega, et kohe kindlal vundamendil vaibkoodimisega pihta hakata.
- Kuidas minuga edasi töötada: millal ja kuidas mind kaasata (tehniline järelevalve, mitte "tee mu äpp ära").
- Küsimused ja vastused.

---

## 2. Kärpimise abimaterjal (kui 3 h sisse ei mahu)

*Kui peab lõikama, siis prioriteediga:*
- **Tuumik (ei kärbi):** Plokk 2 (PMF/UX), Plokk 5 (arhitektuur+võlg), Plokk 6 (turvalisus+RLS), Plokk 9 (piir+partnerlus), Plokk 10 (stardipakk).
- **Saab lühendada:** Plokk 3 (kapoti all) ja Plokk 7 (testimine) — anna ülevaade, detailid jäta järelmüügiks.
- **Esimesed kandidaadid kärpeks → järelmüüki või e-kirja:** Plokk 8 (maksed), osa Plokk 4-st (omandus), CI/CD detailid.
- **GDPR ja isikuandmed** — mainin ühe lausega plokis 6; täismaht jääb järelmüüki.

---

## 3. Fienta kuulutus (avalik müügitekst)

> Kuupäev/kellaaeg lisame, kui paika paneme.

### Pealkiri
**Vaibkoodija ellujäämiskursus**
*Väldi vigu, mis su äpi tapavad · Vaibkoodija sõber · Krister Viirsaar*

### Lühikirjeldus (listi jaoks)
Veebikoolitus neile, kes on juba äpi valmis saanud, aga ei tunne end sellega kindlalt. Näitan, mida saad julgelt ise edasi ehitada ja kus jookseb piir, ning annan kaasa oma valmis stardipaki, et alustada kindlal vundamendil.

### Täiskirjeldus

**Oled teinud äpi. Toimib. Aga kas julged selle peale oma tiimi panna?**

Vaibkoodimine on päris — sa saad nädalavahetusega valmis asja, mille peale kuluks agentuuril kuu. Aga kui äpp kasvab tööriistast, mida kasutad sina, tööriistaks, mida kasutavad su kolleegid, hakkavad nähtamatud asjad maksma kätte: turvaaugud, sassis kood, mida AI enam parandada ei suuda, ja andmed, mida keegi ei kaitse.

See koolitus annab sulle selguse: **mida saad julgelt ise teha ja kus tõmmata piir.**

Koolitusel käime läbi:
- **Turvarisk on päris** — su äppi kasutavad kolleegid ja selles on ettevõtte andmed. Piisab ühest pahasest või hooletust töötajast liiga laiade õigustega ja andmed lekivad või saavad rikutud. Miks ligipääs ja õigused on esimene asi, mis tõsiseks läheb.
- **Mis tegelikult kapoti all toimub** — andmebaas, Postgres, tagarakendus ja mida Vercel + Supabase'i seadistus *päriselt* teeb.
- **Kelle oma su kood ja andmed on** — ja miks Supabase'i lukustus võib sulle kalliks maksma minna.
- **Miks Vercel + Supabase ei ole alati piisav** ja kuidas näeb välja päris stack.
- **Kuidas hoida arhitektuuril silm peal** ja vältida spagetikoodi ka siis, kui sa ise insener pole.
- **Tehniline võlg** — kuidas see sisse hiilib ja miks on mõnikord odavam ümber ehitada kui lappida.
- **Turvalisus, RLS ja päris rollisüsteem** — saladused, varukoopiad, turvalised migratsioonid, õigused.
- **Testimine ja CI/CD** — manuaalne testimine, AI brauseritestimine ja automaatne testimine, et julgeda muudatusi teha.
- **Maksed** — Stripe või Montonio ja mis juhtub, kui makselahendus valesti ühendada.
- **Mida vaibkoodida ja millal kutsuda insener** — selge raamistik, mitte hirmutamine.

**Boonus:** saad kaasa minu enda Elixiri stacki koos valmis RLS- ja rollilahendusega, et alustada kindlal vundamendil juba homme.

**Kellele see on:**
Sulle, kes oled juba midagi vaibkoodinud ja tahad järgmist asja ehitada *õigesti* — eriti kui seda hakkavad kasutama su kolleegid ja selles liiguvad ettevõtte andmed.

**Hea teada (sobib ka algajale):**
Tööriistu — Lovable'i ja Claude Code'i — näitan ma ainult paariminutilise demoga, mitte ei õpeta põhjalikult selgeks. Seda oskab AI sulle isegi paremini selgitada, küsi vaid. Minu fookus on sellel, mida AI sulle EI ütle: mida oskab öelda 12+ aastat tarkvara ehitanud ja 10 aastat IT-d õpetanud insener. Eelistatult oled juba ühe äpi vaibkoodinud, aga kui oled kiire õppija, saad ka nullist hakkama.

**Mida sa kaasa saad:**
- Otsekoolitus veebis.
- Minu Elixiri stack koos valmis RLS- ja rollilahendusega.
- Selge mõttemudel: mida ise teha, kus tõmmata piir.
- Võimalus küsida küsimusi otse.

**Hind:** 99 €
**Formaat:** veebis, otse (üks kord). Salvestatakse — registreerunud saavad seda hiljem järele vaadata.
**Keel:** Eesti keel.

### Korraldaja
**Krister Viirsaar** — vaibkoodija-sõbralik tarkvarainsener.

12+ aastat tarkvaraarendust (täna kirjutab kogu mu koodi AI) ja 10 aastat IT õpetamist — IT Kolledžis, ValiITs ja nüüd TechnoTLN-is (varem Polütehnikum). Aitan ettevõtetel vaibkooditud äpid stabiilseks, turvaliseks ja aastateks vastupidavaks teha.

→ [krister.ee](https://krister.ee)

### FAQ
- **Kas vaja on programmeerimist osata?** Ei, aga sa pead olema juba midagi vaibkoodinud ja olema kiire õppija.
- **Kas see on töötuba, kus koos koodime?** Ei. Ülevaade — näitan kõike, mida vaja teada. Koodimine jääb sinu koju.
- **Kas salvestus tuleb?** Jah — registreerunud saavad koolituse hiljem järele vaadata.
- **Mis tööriistadest räägime?** Lovable'ist ja Claude Code'ist põhitasemel, edasi päris stackist (Elixir/Phoenix, Postgres).

---

## 4. Soovitused — mis on veel laual

- **Hinnarealism** (1 slaid): mida maksab päris majutus, inseneri palkamine või katkise äpi ümberehitus. Raha on sihtgrupil peas.
- **Seire, logid ja alarmid:** kuidas saad teada, kui äpp on katki. Hea järelmüügi teema.
- **Jõudlus ja skaleerumine:** mis juhtub 1000 kasutajaga. Järelmüüki.
- **Päringupiirangud ja kaitse väärkasutuse vastu** avalikel äppidel. Järelmüüki.

---

## 5. Lahtised otsused (enne Fientasse panekut)

- [x] **Pealkiri:** *Vaibkoodija ellujäämiskursus — väldi vigu, mis su äpi tapavad.*
- [ ] Kuupäev ja kellaaeg.
- [x] Salvestus: jah, registreerunud saavad järele vaadata.
- [ ] Kohtade arv ja kas see on piiratud (knappus müüb)?
- [ ] Lõplik 3 h kärbe (vt §2 prioriteete).
- [x] Brändi kirjapilt: "vaibkoodija" (ilma i-täheta) kogu sõnapere ulatuses.
