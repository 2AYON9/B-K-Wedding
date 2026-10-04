const WEDDING_DATE = new Date("2027-01-29T00:00:00+05:30");
let guestName = "";

const translations = {
  en: {
    welcomeEyebrow:"A little note, a lifetime of love", welcomeTitle:"You are warmly<br><em>invited</em>",
    welcomeCopy:"A special day becomes even more beautiful when shared with the people we love.", letterLabel:"WEDDING INVITATION",
    guestLabel:"May we know your name?", guestPlaceholder:"Enter your name", openInvite:"Open invitation",
    guestPrivacy:"Your name is used only to personalize this page.", skipName:"Continue without a name",
    heroEyebrow:"WITH JOY IN OUR HEARTS", heroCopy:"Together with our families, we invite you to celebrate the beginning of our forever.",
    saveTheDate:"SAVE THE DATE", exploreInvite:"Explore the invitation ↓", sectionMessage:"A heartfelt note",
    messageEyebrow:"A NOTE FROM THE HEART", messageTitle:"Your presence is<br><em>our present.</em>",
    messageBody:"As we begin a new chapter together, we would be honoured to have you beside us. Your blessings, laughter, and love will make this day truly unforgettable.",
    sectionStory:"Our story", storyEyebrow:"TWO HEARTS, ONE JOURNEY", storyTitle:"A story still<br><em>being written.</em>",
    storyCopy:"Every love story has its own little moments. We’ll add our favourite memories here soon.",
    storyMoment1:"THE BEGINNING",storyPlaceholder1:"Where it all began",storyMoment2:"THE JOURNEY",storyPlaceholder2:"Little moments, big meaning",storyMoment3:"FOREVER STARTS",storyPlaceholder3:"And now, a new chapter",placeholder:"A memory will be added here.",
    sectionEvents:"Wedding events",eventsEyebrow:"THE CELEBRATION",eventsTitle:"Moments to<br><em>celebrate together.</em>",
    eventsCopy:"Event timings and details will be shared here once confirmed.",eventOne:"Pre-wedding ceremony",eventTwo:"Wedding ceremony",eventThree:"Reception",eventTime:"Time to be announced",eventDetails:"Date and venue details coming soon.",
    countdownEyebrow:"THE COUNTDOWN TO FOREVER",countdownTitle:"Until we say “I do”",days:"DAYS",hours:"HOURS",minutes:"MINUTES",seconds:"SECONDS",
    sectionGallery:"The gallery",galleryEyebrow:"LITTLE GLIMPSES OF US",galleryTitle:"Memories in<br><em>the making.</em>",galleryCopy:"Our favourite photographs will find their place here.",photoPlaceholder:"Photo coming soon",
    sectionVenue:"Find the venue",venueLabel:"THE WEDDING VENUE",venueEyebrow:"WE’LL SAVE YOU A SEAT",venueTitle:"Meet us <em>here.</em>",venueCopy:"Venue name, address, and map link will be added once confirmed.",venueToCome:"Location to be announced",venueToComeSub:"We’ll update this section soon.",mapComing:"Map link coming soon",
    sectionRsvp:"RSVP",rsvpEyebrow:"KINDLY REPLY",rsvpTitle:"Will you join<br><em>our celebration?</em>",rsvpCopy:"We hope to celebrate this special day with you.",accept:"Joyfully accept",decline:"Regretfully decline",rsvpDemoNote:"Preview only: your response is not saved or sent yet.",
    closingEyebrow:"UNTIL WE MEET",closingLine1:"With love and gratitude,",closingLine2:"we’ll see you soon.",backTop:"Back to the beginning ↑",footerText:"Made with love for a beautiful beginning."
  },
  as: {
    welcomeEyebrow:"এটি মৰমৰ নিমন্ত্ৰণ", welcomeTitle:"আপোনাক সাদৰেৰে<br><em>নিমন্ত্ৰণ জনাইছোঁ</em>",
    welcomeCopy:"আমাৰ আপোনজনৰ সৈতে ভাগ-বতৰা কৰিলে বিশেষ দিনটো আৰু অধিক সুন্দৰ হয়।",letterLabel:"বিবাহৰ নিমন্ত্ৰণ",
    guestLabel:"অনুগ্ৰহ কৰি আপোনাৰ নাম লিখক",guestPlaceholder:"আপোনাৰ নাম",openInvite:"নিমন্ত্ৰণ খোলক",
    guestPrivacy:"আপোনাৰ নাম কেৱল এই পৃষ্ঠাখন ব্যক্তিগত কৰিবলৈ ব্যৱহাৰ কৰা হয়।",skipName:"নাম নিদিয়াকৈ আগবাঢ়ক",
    heroEyebrow:"আমাৰ হৃদয়ৰ আনন্দৰে",heroCopy:"আমাৰ পৰিয়ালৰ সৈতে আপোনাক আমাৰ নতুন জীৱনৰ আৰম্ভণি উদযাপন কৰিবলৈ সাদৰেৰে নিমন্ত্ৰণ জনাইছোঁ।",
    saveTheDate:"দিনটো মনত ৰাখিব",exploreInvite:"নিমন্ত্ৰণখন চাওক ↓",sectionMessage:"মৰমৰ কথা",
    messageEyebrow:"হৃদয়ৰ পৰা",messageTitle:"আপোনাৰ উপস্থিতিয়েই<br><em>আমাৰ উপহাৰ।</em>",
    messageBody:"আমি একেলগে নতুন অধ্যায় আৰম্ভ কৰাৰ সময়ত আপোনাৰ উপস্থিতি আৰু আশীৰ্বাদে এই দিনটো স্মৰণীয় কৰি তুলিব।",
    sectionStory:"আমাৰ কাহিনী",storyEyebrow:"দুটা হৃদয়, এটা যাত্ৰা",storyTitle:"এখন কাহিনী<br><em>লিখা হৈ আছে।</em>",
    storyCopy:"প্ৰতিটো প্ৰেমৰ কাহিনীতে থাকে কিছুমান বিশেষ মুহূৰ্ত। আমাৰ প্ৰিয় স্মৃতিবোৰ ইয়াত সোনকালেই যোগ কৰিম।",
    storyMoment1:"আৰম্ভণি",storyPlaceholder1:"য'ত সকলো আৰম্ভ হৈছিল",storyMoment2:"যাত্ৰা",storyPlaceholder2:"সৰু মুহূৰ্ত, ডাঙৰ অৰ্থ",storyMoment3:"চিৰদিনৰ আৰম্ভণি",storyPlaceholder3:"এতিয়া এটা নতুন অধ্যায়",placeholder:"স্মৃতি ইয়াত যোগ কৰা হ'ব।",
    sectionEvents:"বিবাহৰ অনুষ্ঠান",eventsEyebrow:"উদযাপন",eventsTitle:"একেলগে<br><em>উদযাপনৰ মুহূৰ্ত।</em>",
    eventsCopy:"নিশ্চিত হোৱাৰ পিছত অনুষ্ঠানৰ সময় আৰু বিৱৰণ ইয়াত দিয়া হ'ব।",eventOne:"বিয়াৰ আগৰ অনুষ্ঠান",eventTwo:"বিবাহ অনুষ্ঠান",eventThree:"আশীৰ্বাদ অনুষ্ঠান",eventTime:"সময় পিছত জনোৱা হ'ব",eventDetails:"তাৰিখ আৰু স্থানৰ বিৱৰণ সোনকালে দিয়া হ'ব।",
    countdownEyebrow:"নতুন জীৱনলৈ কাউণ্টডাউন",countdownTitle:"সেই বিশেষ দিনটোলৈ",days:"দিন",hours:"ঘণ্টা",minutes:"মিনিট",seconds:"ছেকেণ্ড",
    sectionGallery:"ছবিৰ গেলেৰী",galleryEyebrow:"আমাৰ কিছুমান স্মৃতি",galleryTitle:"স্মৃতিবোৰ<br><em>গঢ় লৈছে।</em>",galleryCopy:"আমাৰ প্ৰিয় ছবিবোৰ ইয়াত সংযোজন কৰা হ'ব।",photoPlaceholder:"ছবি সোনকালে আহিব",
    sectionVenue:"অনুষ্ঠানৰ স্থান",venueLabel:"বিবাহৰ স্থান",venueEyebrow:"আপোনাৰ বাবে আসন ৰাখিম",venueTitle:"ইয়াতে<br><em>দেখা হ'ব।</em>",venueCopy:"স্থানৰ নাম, ঠিকনা আৰু মেপ নিশ্চিত হোৱাৰ পিছত দিয়া হ'ব।",venueToCome:"স্থান পিছত জনোৱা হ'ব",venueToComeSub:"এই অংশটো সোনকালে আপডেট কৰা হ'ব।",mapComing:"মেপৰ লিংক সোনকালে আহিব",
    sectionRsvp:"উপস্থিতি নিশ্চিতকৰণ",rsvpEyebrow:"অনুগ্ৰহ কৰি জনাব",rsvpTitle:"আপুনি আহিবনে<br><em>আমাৰ আনন্দৰ দিনলৈ?</em>",rsvpCopy:"এই বিশেষ দিনটো আপোনাৰ সৈতে উদযাপন কৰিবলৈ আমি আশাবাদী।",accept:"আনন্দেৰে আহিম",decline:"আহিব নোৱাৰিম",rsvpDemoNote:"এয়া কেৱল পূৰ্বদৰ্শন: আপোনাৰ উত্তৰ এতিয়াও সংৰক্ষণ বা প্ৰেৰণ কৰা হোৱা নাই।",
    closingEyebrow:"দেখা পোৱালৈকে",closingLine1:"মৰম আৰু কৃতজ্ঞতাৰে,",closingLine2:"সোনকালে দেখা হ'ব।",backTop:"আৰম্ভণিলৈ উভতি যাওক ↑",footerText:"এটা সুন্দৰ আৰম্ভণিৰ বাবে মৰমেৰে নিৰ্মিত।"
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language === "as" ? "as" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });
  const input = document.getElementById("guestName");
  input.placeholder = dictionary.guestPlaceholder;
  document.getElementById("languageSelect").value = language;
  updatePersonalizedText();
}
function updatePersonalizedText() {
  const language = document.getElementById("languageSelect").value;
  const safeName = guestName.trim();
  const greeting = safeName ? (language === "as" ? `প্ৰিয় ${safeName},` : `Dear ${safeName},`) : (language === "as" ? "প্ৰিয় অতিথি," : "Dear Guest,");
  document.getElementById("personalGreeting").textContent = greeting;
  document.getElementById("closingGuest").textContent = safeName
    ? (language === "as" ? `${safeName}, আপোনাৰ সৈতে উদযাপন কৰিবলৈ আমি অধীৰ আগ্ৰহেৰে বাট চাই আছোঁ।` : `${safeName}, we can’t wait to celebrate with you.`)
    : (language === "as" ? "আপোনাৰ সৈতে উদযাপন কৰিবলৈ আমি অধীৰ আগ্ৰহেৰে বাট চাই আছোঁ।" : "We can’t wait to celebrate with you.");
  document.getElementById("rsvpGreeting").textContent = safeName
    ? (language === "as" ? `${safeName}, এই বিশেষ দিনটো আপোনাৰ সৈতে উদযাপন কৰিবলৈ আমি আশাবাদী।` : `${safeName}, we hope to celebrate this special day with you.`)
    : translations[language].rsvpCopy;
}
function openInvitation(name) {
  guestName = name.trim();
  const envelope = document.getElementById("envelope");
  envelope.classList.add("open");
  document.getElementById("guestForm").hidden = true;
  document.getElementById("skipName").hidden = true;
  window.setTimeout(() => {
    document.getElementById("invitationContent").hidden = false;
    updatePersonalizedText();
    document.getElementById("invitation").scrollIntoView({behavior:"smooth",block:"start"});
  }, 900);
}
document.getElementById("guestForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  if (!name) return;
  openInvitation(name);
});
document.getElementById("skipName").addEventListener("click", () => openInvitation(""));
document.getElementById("languageSelect").addEventListener("change", (event) => setLanguage(event.target.value));

function updateCountdown() {
  const now = new Date();
  const distance = WEDDING_DATE.getTime() - now.getTime();
  if (distance <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => document.getElementById(id).textContent = "00");
    document.querySelector(".countdown-section h2").textContent = "The celebration is here!";
    return;
  }
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);
  document.getElementById("days").textContent = String(days).padStart(3,"0");
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}
document.querySelectorAll(".rsvp-choice").forEach(button => {
  button.addEventListener("click", () => {
    const language = document.getElementById("languageSelect").value;
    const accepted = button.dataset.choice === "yes";
    const name = guestName.trim();
    const message = language === "as"
      ? (accepted ? `${name ? name + ", " : ""}ধন্যবাদ! আপোনাক লগ পোৱাৰ বাবে অধীৰ আগ্ৰহেৰে বাট চাই আছোঁ।` : `${name ? name + ", " : ""}আমাক জনোৱাৰ বাবে ধন্যবাদ। আপোনাৰ অভাৱ অনুভৱ কৰিম।`)
      : (accepted ? `Thank you${name ? ", " + name : ""}! We can’t wait to celebrate with you.` : `Thank you for letting us know${name ? ", " + name : ""}. You’ll be missed!`);
    document.getElementById("rsvpMessage").textContent = message;
  });
});

setLanguage("en");
updateCountdown();
window.setInterval(updateCountdown, 1000);
