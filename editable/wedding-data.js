/**
 * wedding-data.js — Customer-facing editable data layer for Suhit & Charitha wedding celebrations
 * Updated with complete details from invitation cards 1 & 2:
 * - Pelli Koduku & Upanayanam (11th Nov 2026)
 * - Wedding Muhurtham (13th Nov 2026)
 * - Wedding Reception (14th Nov 2026)
 * - Background music, WhatsApp RSVP (+918008066366), and verified venue coordinates
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Suhit",
    bride: "Charitha",
    groomFull: "Suhit",
    brideFull: "Sai Charitha",
    groomParents: "Son of Dr. Sarat Vetcha & Smt. Surekha Vetcha",
    brideParents: "D/o. Sri Amara Sudhakara Rao & Smt. Sudha Madhuri (Late)",
    grandparents: "With blessings of Sri Vetsa Panduranga Rao (Late) & Smt. Jhansi",
    compliments: "With best compliments from: Near & Dear",
    hashtag: "#SuCharitham",
    monogram: "S · C",
    order: "groomFirst",
  },

  wedding: {
    dateISO: "2026-11-14T19:00:00+05:30",
    dateLabel: "Saturday, 14th November 2026",
    timeLabel: "Reception at 7:00 PM",
  },

  venue: {
    name: "Sandhya Convention",
    address: "Old Mumbai Highway, Gachibowli, Hyderabad - 500 032",
    mapsQuery: "Sandhya Convention, Old Mumbai Highway, Gachibowli, Hyderabad",
    mapsUrl: "https://maps.app.goo.gl/T686DPhp2nSSEcAT8?g_st=aw",
  },

  verse: {
    hindi: "|| Srirasthu || Subhamasthu || Avighnamasthu ||",
    text: "With the divine blessings of Almighty & Sri Vetsa Panduranga Rao (Late) & Smt. Jhansi, Dr. Sarat Vetcha & Smt. Surekha Vetcha cordially invite you to grace the auspicious occasion and bless the newlyweds at the marriage reception of their son Suhit with Sai Charitha (D/o. Sri Amara Sudhakara Rao & Smt. Sudha Madhuri [Late]).",
  },

  events: [
    {
      name: "Wedding Reception",
      icon: "heart",
      date: "Saturday, 14th November 2026",
      dayLabel: "Saturday",
      dayNum: "14",
      monthLabel: "November 2026",
      time: "7:00 PM onwards (Dinner follows)",
      venue: "Sandhya Convention, Old Mumbai Highway, Gachibowli, Hyderabad - 500 032",
      note: "Join us to celebrate and bless Suhit & Sai Charitha as they begin their sacred journey together.",
    },
  ],

  program: [
    {
      name: "Pelli Koduku & Upanayanam (Club House, Ramky Towers, Gachibowli)",
      time: "Wed, 11 Nov · 10:27 AM (Lunch 1:00 PM)",
    },
    {
      name: "Sacred Wedding Muhurtham — Dhanurlagnam (Yemmiganur, A.P.)",
      time: "Fri, 13 Nov · 10:21 AM",
    },
    {
      name: "Wedding Reception & Dinner (Sandhya Convention, Gachibowli)",
      time: "Sat, 14 Nov · 7:00 PM onwards",
    },
  ],

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },

  music: {
    track: "./editable/assets/bg-music.mp3",
    startTime: 0,
    title: "Vaa Kannamma - Violin Cover Instrumental",
  },

  rsvp: {
    phone: "+918008066366",
    whatsappNumber: "918008066366",
    message: "Hello! We would like to RSVP for Suhit & Sai Charitha's wedding reception on 14th November 2026.",
  },

  footer: {
    families: "With love, the Vetcha & Amara families",
    blessings: "With blessings of Sri Vetsa Panduranga Rao (Late) & Smt. Jhansi",
    compliments: "With best compliments from: Near & Dear",
  },

  images: {
    couple: "",
    venue: "./editable/assets/venue-palace.webp",
    ganesha: "./editable/assets/ganesha.png",
  },
};
