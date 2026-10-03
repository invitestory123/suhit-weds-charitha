# Customer Editing Guide — Suhit & Charitha Wedding Celebrations

This digital invitation is designed for the wedding celebrations and reception of **Suhit & Sai Charitha**, featuring starry night sky animations, Lord Ganesha blessing, celestial archway, countdown timer, multiple celebration timeline, interactive Google Maps directions to Sandhya Convention, background music player, and WhatsApp RSVP.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week5/suhit-weds-charitha/editable/wedding-data.js)

### Couple Profiles & Family
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: First names (`"Suhit"`, `"Charitha"`)
- `groomFull` & `brideFull`: Full ceremonial names (`"Suhit"`, `"Sai Charitha"`)
- `groomParents`: `"Son of Dr. Sarat Vetcha & Smt. Surekha Vetcha"`
- `brideParents`: `"D/o. Sri Amara Sudhakara Rao & Smt. Sudha Madhuri (Late)"`
- `grandparents`: `"With blessings of Sri Vetsa Panduranga Rao (Late) & Smt. Jhansi"`
- `compliments`: `"With best compliments from: Near & Dear"`
- `hashtag`: Wedding hashtag (`"#SuCharitham"`)
- `monogram`: Monogram initials (`"S · C"`)
- `order`: `"groomFirst"`

### Reception Date & Auspicious Schedule
Edit `wedding`, `events`, and `program` in `editable/wedding-data.js`:
- `wedding.dateISO`: ISO 8601 date string (`"2026-11-14T19:00:00+05:30"`) driving the live countdown and calendar exports
- `wedding.dateLabel`: Display date string (`"Saturday, 14th November 2026"`)
- `wedding.timeLabel`: Event time (`"Reception at 7:00 PM"`)
- `events[]`: Main reception ceremony card
- `program[]`: Comprehensive wedding functions timeline:
  1. **Pelli Koduku & Upanayanam** (Wed, 11 Nov 2026 · 10:27 AM | Lunch 1:00 PM at Club House, Ramky Towers, Gachibowli)
  2. **Sacred Wedding Muhurtham** (Fri, 13 Nov 2026 · 10:21 AM Dhanurlagnam at Yemmiganur, A.P.)
  3. **Wedding Reception & Dinner** (Sat, 14 Nov 2026 · 7:00 PM onwards at Sandhya Convention, Gachibowli)

### Verse & Venue
Edit `verse` and `venue` in `editable/wedding-data.js`:
- `verse.hindi`: Sacred Telugu/Sanskrit invocation (`"|| Srirasthu || Subhamasthu || Avighnamasthu ||"`)
- `verse.text`: Formal invitation message from the Vetcha & Amara families
- `venue.name`: `"Sandhya Convention"`
- `venue.address`: `"Old Mumbai Highway, Gachibowli, Hyderabad - 500 032"`
- `venue.mapsQuery`: Location query for Google Maps embed
- `venue.mapsUrl`: Direct Google Maps link (`"https://maps.app.goo.gl/T686DPhp2nSSEcAT8?g_st=aw"`)

### Background Music & WhatsApp RSVP
- `music.track`: Path to the background music file (`./editable/assets/bg-music.mp3`, *Vaa Kannamma Violin Instrumental*)
- `rsvp.phone`: `+918008066366`
- `rsvp.whatsappNumber`: `918008066366`

---

## Verifying Syntax

Always verify syntax before deploying:
```bash
node --check editable/wedding-data.js
node --check assets/index-B7GbZwnv.js
```
