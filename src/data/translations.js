
import { translations as base } from './translations-base';

/* =============================================
   SHARED UI LABELS
   ============================================= */

const ui = {
  en: {
    viewDetails: 'View details',
    clickDescription: 'Click for description',
    service: 'SERVICE',
    oneEcosystem: 'One connected ecosystem.',
    faqIntro: 'FAQS',
    emailUs: 'EMAIL US',
    callUs: 'CALL US',
    visitUs: 'VISIT US',
  },

  te: {
    viewDetails: 'వివరాలు చూడండి',
    clickDescription: 'వివరాల కోసం క్లిక్ చేయండి',
    service: 'సేవ',
    oneEcosystem: 'ఒకే అనుసంధాన వ్యవస్థ.',
    faqIntro: 'తరచుగా అడిగే ప్రశ్నలు',
    emailUs: 'ఈమెయిల్ పంపండి',
    callUs: 'ఫోన్ చేయండి',
    visitUs: 'మా చిరునామా',
  },
};

/* =============================================
   FAQ CATEGORY TRANSLATIONS
   ============================================= */

const faqCategories = {
  en: {
    all: 'All',
    General: 'General',
    'Patient Services': 'Patient Services',
    'Doctors & Partners': 'Doctors & Partners',
  },

  te: {
    all: 'అన్నీ',
    General: 'సాధారణ ప్రశ్నలు',
    'Patient Services': 'రోగుల సేవలు',
    'Doctors & Partners': 'వైద్యులు, భాగస్వాములు',
  },
};

/* =============================================
   COMPLETE ENGLISH FAQ CONTENT
   ============================================= */

const faqEnglish = [
  {
    category: 'General',
    q: 'What is SUSALI HEALTH CARE SERVICES PVT LTD?',
    a: 'SUSALI is a healthcare coordination platform designed to simplify access to healthcare services by connecting patients with doctors, hospitals, diagnostic centres, and other healthcare service providers through an organized and patient-focused approach.',
  },
  {
    category: 'General',
    q: 'What services does SUSALI provide?',
    a: 'SUSALI facilitates healthcare coordination services, including patient registration, doctor and hospital referrals, appointment coordination, diagnostic service coordination, healthcare information management, and follow-up support.',
  },
  {
    category: 'General',
    q: 'What is the primary objective of SUSALI?',
    a: 'Our objective is to make healthcare more accessible, organized, and convenient by creating reliable connections between patients and healthcare providers.',
  },
  {
    category: 'Patient Services',
    q: 'How can I register with SUSALI?',
    a: "Patients can register through our website by providing the required basic information. A registered profile can help organize their healthcare information and support future referral and coordination requests, subject to the platform's available features.",
  },
  {
    category: 'Patient Services',
    q: 'How can SUSALI help me find a doctor or hospital?',
    a: "SUSALI helps coordinate connections with suitable doctors and hospitals based on the patient's healthcare requirements, location, and available service options.",
  },
  {
    category: 'Patient Services',
    q: 'Can SUSALI help me book a doctor’s appointment?',
    a: 'Yes. SUSALI can assist with appointment coordination by communicating with relevant healthcare providers and helping patients understand the available appointment options.',
  },
  {
    category: 'Patient Services',
    q: 'Can I access my previous healthcare information?',
    a: "Where supported by our platform, registered patients can access or manage their available healthcare information and records. Access depends on the information recorded, the platform's features, and applicable privacy permissions.",
  },
  {
    category: 'Patient Services',
    q: 'Does SUSALI provide emergency medical services?',
    a: 'SUSALI may assist with healthcare coordination, but it is not a substitute for emergency medical services. For a medical emergency in India, call 112 or go to the nearest emergency department.',
  },
  {
    category: 'Doctors & Partners',
    q: 'Can hospitals and doctors collaborate with SUSALI?',
    a: 'Eligible doctors, hospitals, clinics, diagnostic centres and other healthcare providers can contact SUSALI to explore collaboration opportunities.',
  },
  {
    category: 'Doctors & Partners',
    q: 'How can a hospital partner with SUSALI?',
    a: 'Healthcare institutions can contact the SUSALI team to discuss partnership requirements, referral coordination, service availability, documentation and agreed terms.',
  },
];

/* =============================================
   COMPLETE TELUGU FAQ CONTENT
   ============================================= */

const faqTelugu = [
  {
    category: 'General',
    q: 'SUSALI HEALTH CARE SERVICES PVT LTD అంటే ఏమిటి?',
    a: 'SUSALI అనేది రోగులను వైద్యులు, ఆసుపత్రులు, డయాగ్నస్టిక్ కేంద్రాలు మరియు ఇతర ఆరోగ్య సేవల సంస్థలతో అనుసంధానించి వైద్య సేవల సమన్వయాన్ని సులభతరం చేయడానికి రూపొందించిన వేదిక.',
  },
  {
    category: 'General',
    q: 'SUSALI ఏ సేవలను అందిస్తుంది?',
    a: 'SUSALI రోగుల నమోదు, వైద్య రిఫరల్స్, ఆసుపత్రి అపాయింట్‌మెంట్ల సమన్వయం, పరీక్షలకు సంబంధించిన సమన్వయం, వైద్య సమాచార నిర్వహణ మరియు తదుపరి చికిత్స సమాచారానికి తోడ్పడుతుంది.',
  },
  {
    category: 'General',
    q: 'SUSALI ప్రధాన లక్ష్యం ఏమిటి?',
    a: 'రోగులు, ఆరోగ్య సేవల సంస్థల మధ్య నమ్మకమైన అనుసంధానాన్ని ఏర్పరచి వైద్య సేవల ప్రక్రియను మరింత సులభంగా, క్రమబద్ధంగా నిర్వహించడమే SUSALI లక్ష్యం.',
  },
  {
    category: 'Patient Services',
    q: 'SUSALIలో నేను ఎలా నమోదు చేసుకోవాలి?',
    a: 'అవసరమైన ప్రాథమిక వివరాలు ఇచ్చి SUSALI వెబ్‌సైట్ ద్వారా నమోదు చేసుకోవచ్చు. అందుబాటులో ఉన్న ప్లాట్‌ఫామ్ సౌకర్యాల మేరకు మీ ఆరోగ్య సమాచారాన్ని క్రమబద్ధంగా ఉంచుకోవడానికి, భవిష్యత్తులో రిఫరల్ మరియు సమన్వయ అభ్యర్థనలకు ప్రొఫైల్ ఉపయోగపడుతుంది.',
  },
  {
    category: 'Patient Services',
    q: 'వైద్యుడు లేదా ఆసుపత్రిని చేరుకోవడంలో SUSALI ఎలా సహాయపడుతుంది?',
    a: 'రోగి వైద్య అవసరాలు, ప్రాంతం మరియు అందుబాటులో ఉన్న సేవలను బట్టి తగిన వైద్యులు, ఆసుపత్రులతో అనుసంధానానికి SUSALI సమన్వయ సహాయం అందిస్తుంది.',
  },
  {
    category: 'Patient Services',
    q: 'వైద్యుడి అపాయింట్‌మెంట్ ఏర్పాటు చేయడంలో SUSALI సహాయపడుతుందా?',
    a: 'అవును. సంబంధిత ఆరోగ్య సేవల సంస్థలతో సంప్రదించి అపాయింట్‌మెంట్ సమన్వయం చేయడంలో, అందుబాటులో ఉన్న ఎంపికల గురించి రోగులకు వివరించడంలో SUSALI సహాయపడుతుంది.',
  },
  {
    category: 'Patient Services',
    q: 'నా గత వైద్య సమాచారాన్ని చూడగలనా?',
    a: 'ప్లాట్‌ఫామ్‌లో అందుబాటులో ఉన్న సౌకర్యాల మేరకు నమోదు చేసుకున్న రోగులు తమ ఆరోగ్య సమాచారం, రికార్డులను చూడవచ్చు లేదా నిర్వహించవచ్చు. ఈ అవకాశం నమోదైన సమాచారం, ప్లాట్‌ఫామ్ సౌకర్యాలు మరియు వర్తించే గోప్యతా అనుమతులపై ఆధారపడి ఉంటుంది.',
  },
  {
    category: 'Patient Services',
    q: 'SUSALI అత్యవసర వైద్య సేవలను అందిస్తుందా?',
    a: 'SUSALI వైద్య సేవల సమన్వయానికి సహాయం చేయవచ్చు, కానీ అత్యవసర వైద్య సేవలకు ప్రత్యామ్నాయం కాదు. భారతదేశంలో వైద్య అత్యవసర పరిస్థితి ఏర్పడితే 112కు కాల్ చేయండి లేదా సమీపంలోని అత్యవసర చికిత్స విభాగానికి వెళ్లండి.',
  },
  {
    category: 'Doctors & Partners',
    q: 'వైద్యులు, ఆసుపత్రులు SUSALIతో భాగస్వామ్యం కావచ్చా?',
    a: 'అర్హత కలిగిన వైద్యులు, ఆసుపత్రులు, క్లినిక్‌లు, పరీక్షా కేంద్రాలు మరియు ఇతర ఆరోగ్య సంస్థలు భాగస్వామ్య అవకాశాల కోసం SUSALIని సంప్రదించవచ్చు.',
  },
  {
    category: 'Doctors & Partners',
    q: 'ఆసుపత్రి SUSALIతో ఎలా భాగస్వామ్యం కావచ్చు?',
    a: 'భాగస్వామ్య అవసరాలు, రిఫరల్ సమన్వయం, సేవల అందుబాటు, పత్రాలు మరియు పరస్పరం అంగీకరించిన నిబంధనల గురించి చర్చించేందుకు SUSALI బృందాన్ని సంప్రదించవచ్చు.',
  },
];

/* =============================================
   SERVICES PAGE — EIGHT JOURNEY STEPS
   ============================================= */

const journeySteps = {
  en: [
    {
      title: 'Begin Your Journey',
      desc: 'Register with SUSALI and establish your individual healthcare profile.',
    },
    {
      title: 'Seek Assistance',
      desc: 'When a health concern arises, begin the appropriate healthcare consultation process.',
    },
    {
      title: 'Connect Through SUSALI',
      desc: 'Log in to your profile and submit the necessary referral and healthcare information.',
    },
    {
      title: 'Hospital Appointment',
      desc: 'The appointment is coordinated with the relevant hospital, and details are made available to you.',
    },
    {
      title: 'Consult Your Doctor',
      desc: 'Your treating professional evaluates your condition and recommends appropriate care.',
    },
    {
      title: 'Receive Care',
      desc: 'Your care may include consultation, diagnostics, hospitalization or surgical treatment.',
    },
    {
      title: 'Medical Story Updated',
      desc: 'Authorized staff upload relevant medical documents and treatment information to your profile.',
    },
    {
      title: 'Stay Connected',
      desc: 'Access previous records, review follow-ups and continue using your profile for future visits.',
    },
  ],

  te: [
    {
      title: 'మీ ఆరోగ్య ప్రయాణాన్ని ప్రారంభించండి',
      desc: 'SUSALIలో నమోదు చేసుకుని మీ వ్యక్తిగత ఆరోగ్య ప్రొఫైల్‌ను ఏర్పాటు చేసుకోండి.',
    },
    {
      title: 'వైద్య సహాయం పొందండి',
      desc: 'ఆరోగ్య సమస్య తలెత్తినప్పుడు సరైన వైద్య సంప్రదింపు ప్రక్రియను ప్రారంభించండి.',
    },
    {
      title: 'SUSALI ద్వారా అనుసంధానం',
      desc: 'మీ ప్రొఫైల్‌లోకి ప్రవేశించి అవసరమైన రిఫరల్ మరియు ఆరోగ్య సమాచారాన్ని సమర్పించండి.',
    },
    {
      title: 'ఆసుపత్రి అపాయింట్‌మెంట్',
      desc: 'సంబంధిత ఆసుపత్రితో అపాయింట్‌మెంట్ సమన్వయం చేసి వివరాలను మీకు అందుబాటులో ఉంచుతారు.',
    },
    {
      title: 'వైద్యుడిని సంప్రదించండి',
      desc: 'వైద్యుడు మీ ఆరోగ్య పరిస్థితిని పరిశీలించి తగిన చికిత్సను సూచిస్తారు.',
    },
    {
      title: 'చికిత్స పొందండి',
      desc: 'మీ చికిత్సలో వైద్య సంప్రదింపులు, పరీక్షలు, ఆసుపత్రిలో చేరడం లేదా శస్త్రచికిత్స ఉండవచ్చు.',
    },
    {
      title: 'వైద్య చరిత్ర నవీకరణ',
      desc: 'అధీకృత సిబ్బంది వైద్య పత్రాలు, చికిత్స సమాచారాన్ని మీ ప్రొఫైల్‌కు జత చేస్తారు.',
    },
    {
      title: 'అనుసంధానంగా ఉండండి',
      desc: 'గత రికార్డులు, తదుపరి వైద్య సూచనలను చూసి భవిష్యత్తులోనూ అదే ప్రొఫైల్‌ను ఉపయోగించండి.',
    },
  ],
};

/* =============================================
   HOME PAGE — INTERACTIVE JOURNEY
   ============================================= */

const interactiveJourney = {
  en: [
    {
      title: 'Begin Journey',
      sub: 'Register & Refer',
      desc: 'Establish your profile and initiate the appropriate healthcare consultation.',
    },
    {
      title: 'Hospital Visit',
      sub: 'Care & Consultation',
      desc: 'The appointment is coordinated and your treating professional evaluates your condition.',
    },
    {
      title: 'Medical Records',
      sub: 'Information Updated',
      desc: 'Authorized staff upload relevant medical documents and treatment information to your profile.',
    },
    {
      title: 'Continued Care',
      sub: 'Stay Connected',
      desc: 'Access previous records, review follow-ups and continue using your profile for future visits.',
    },
  ],

  te: [
    {
      title: 'ఆరోగ్య ప్రయాణం',
      sub: 'నమోదు మరియు రిఫరల్',
      desc: 'మీ ప్రొఫైల్‌ను ఏర్పాటు చేసుకుని తగిన వైద్య సంప్రదింపు ప్రక్రియను ప్రారంభించండి.',
    },
    {
      title: 'ఆసుపత్రి సందర్శన',
      sub: 'వైద్య సంప్రదింపు',
      desc: 'అపాయింట్‌మెంట్ సమన్వయం జరుగుతుంది. వైద్యుడు మీ పరిస్థితిని పరిశీలిస్తారు.',
    },
    {
      title: 'వైద్య రికార్డులు',
      sub: 'సమాచార నవీకరణ',
      desc: 'అధీకృత సిబ్బంది సంబంధిత వైద్య పత్రాలు, చికిత్స వివరాలను మీ ప్రొఫైల్‌కు జత చేస్తారు.',
    },
    {
      title: 'తదుపరి సంరక్షణ',
      sub: 'అనుసంధానంగా ఉండండి',
      desc: 'గత రికార్డులు, తదుపరి సూచనలను చూసి భవిష్యత్తులోనూ మీ ప్రొఫైల్‌ను కొనసాగించండి.',
    },
  ],
};

const journeyUi = {
  en: {
    phase: 'PHASE',
    next: 'Next phase',
    again: 'Start again',
    stagesLabel: 'Healthcare journey stages',
  },

  te: {
    phase: 'దశ',
    next: 'తదుపరి దశ',
    again: 'మళ్లీ ప్రారంభించండి',
    stagesLabel: 'ఆరోగ్య ప్రయాణ దశలు',
  },
};

/* =============================================
   SHARED CTA — ABOVE FOOTER
   ============================================= */

const sharedCta = {
  en: {
    kicker: "LET'S MOVE HEALTHCARE FORWARD",
    title1: 'Better connections.',
    title2: 'Stronger care journeys.',
    desc: 'Discover how a connected healthcare approach can support patients, care teams and organizations.',
    button: 'Get in touch',
  },

  te: {
    kicker: 'ఆరోగ్య సేవలను ముందుకు తీసుకెళ్దాం',
    title1: 'మెరుగైన అనుసంధానాలు.',
    title2: 'మరింత బలమైన ఆరోగ్య సంరక్షణ ప్రయాణాలు.',
    desc: 'రోగులు, వైద్య బృందాలు, సంస్థలకు అనుసంధానమైన ఆరోగ్య సేవల విధానం ఎలా తోడ్పడుతుందో తెలుసుకోండి.',
    button: 'మమ్మల్ని సంప్రదించండి',
  },
};

/* =============================================
   HOME HERO FLOATING CARDS
   ============================================= */

const heroVisual = {
  en: {
    digitalProfile: 'DIGITAL HEALTH PROFILE',
    recordsTitle: 'Your Records, Together.',
    recordsSub: 'Accessible when you need them.',
    betterCare: 'A BETTER CARE JOURNEY',
    patientsDoctors: 'Patients & Doctors, Connected.',
    patients: 'Patients',
    doctors: 'Doctors',
    hospitals: 'Hospitals',
    consultations: 'Consultations',
    diagnostics: 'Diagnostics',
    followups: 'Follow-ups',
    connectedCare: 'Connected Care',
    simplifiedJourney: 'Simplified healthcare journey.',
    networkSupport: 'Support',
    networkTeams: 'Teams',
    networkCare: 'Care',
    networkTrust: 'Trust',
    ecosystem: 'Connected Ecosystem',
    careClarityConnection: 'Care. Clarity. Connection.',
  },

  te: {
    digitalProfile: 'డిజిటల్ హెల్త్ ప్రొఫైల్',
    recordsTitle: 'మీ వైద్య రికార్డులు ఒకే చోట.',
    recordsSub: 'అవసరమైనప్పుడు అందుబాటులో.',
    betterCare: 'మెరుగైన ఆరోగ్య ప్రయాణం',
    patientsDoctors: 'రోగులు, వైద్యులు — అనుసంధానంగా.',
    patients: 'రోగులు',
    doctors: 'వైద్యులు',
    hospitals: 'ఆసుపత్రులు',
    consultations: 'వైద్య సంప్రదింపులు',
    diagnostics: 'పరీక్షలు',
    followups: 'తదుపరి సందర్శనలు',
    connectedCare: 'అనుసంధాన ఆరోగ్య సేవలు',
    simplifiedJourney: 'సులభమైన ఆరోగ్య ప్రయాణం.',
    networkSupport: 'సహాయం',
    networkTeams: 'బృందాలు',
    networkCare: 'సంరక్షణ',
    networkTrust: 'నమ్మకం',
    ecosystem: 'అనుసంధాన వ్యవస్థ',
    careClarityConnection: 'సంరక్షణ. స్పష్టత. అనుసంధానం.',
  },
};

/* =============================================
   MERGE WITH EXISTING PAGE TRANSLATIONS
   ============================================= */

export const translations = {
  en: {
    ...base.en,

    home: {
      ...base.en.home,
      heroTitle1: 'Better Affiliations.',
      heroTitle2: 'Better Healthcare.',
    },

    services: {
      ...base.en.services,
      heroAccent: 'Healthcare Journey.',
    },

    ui: ui.en,
    faqCategories: faqCategories.en,
    faqItems: faqEnglish,
    journeySteps: journeySteps.en,
    interactiveJourney: interactiveJourney.en,
    journeyUi: journeyUi.en,
    sharedCta: sharedCta.en,
    heroVisual: heroVisual.en,
  },

  te: {
    ...base.te,

    home: {
      ...base.te.home,
      heroTitle1: 'మెరుగైన అనుబంధాలు.',
      heroTitle2: 'మెరుగైన ఆరోగ్య సంరక్షణ.',
      journeyTitle1: 'మరింత స్పష్టమైన ఆరోగ్య ప్రయాణం,',
      journeyTitle2: 'దశలవారీగా.',
    },

    ui: ui.te,
    faqCategories: faqCategories.te,
    faqItems: faqTelugu,
    journeySteps: journeySteps.te,
    interactiveJourney: interactiveJourney.te,
    journeyUi: journeyUi.te,
    sharedCta: sharedCta.te,
    heroVisual: heroVisual.te,
  },
};
