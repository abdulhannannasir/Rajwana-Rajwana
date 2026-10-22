/**
 * All of the site's words live in this file.
 * Edit text here; the pages pick it up automatically.
 *
 * Anything marked  TODO  is a placeholder and must be replaced
 * with verified firm information before the site goes live.
 */

export const firm = {
  name: 'Rajwana & Rajwana',
  tagline: 'Advocates & Legal Consultants',
  description:
    'Advocates and legal consultants, established in Multan in 1975, with offices in Lahore, Multan and Islamabad and a liaison office in Karachi. Power sector, banking, tax and commercial litigation, constitutional petitions, arbitration and corporate advisory.',
  url: 'https://rajwanaandrajwana.com',
  city: 'Lahore',
  // Head office (Lahore) details, shown in the contact block and footer
  address: 'Office No. 1 & 2, 3rd Floor, SAF Centre, 8-Fane Road, Lahore',
  phone: '+92 42 3736 3863',
  email: 'rajwanaandrajwana@gmail.com',
  // TODO: confirm office hours
  hours: 'Monday to Saturday, 10:00 to 18:00',
  // The firm's Aug 2024 profile and Asif Rajwana's CV both say it was established in Multan in 1975.
  // TODO: confirm with the partners before publishing. The founder's own bio says he joined the
  // judiciary in 1987 and established the firm after resigning, which reads as later than 1975.
  founded: 1975,
};

export type Office = {
  city: string;
  label: string;
  address: string[];
  phone: string;
  fax?: string;
  contact?: { name: string; role: string; phone: string };
};

// From the firm's letterhead and Oct 2026 profile. Lahore is listed first as the head office;
// the profile describes Karachi as a liaison office.
export const offices: Office[] = [
  {
    city: 'Lahore',
    label: 'Head office',
    address: ['Office No. 1 & 2, 3rd Floor', 'SAF Centre, 8-Fane Road', 'Lahore'],
    phone: '+92 42 3736 3863',
    fax: '+92 42 3736 3864',
    // TODO: confirm the firm wants the clerk's mobile published on the website
    contact: { name: 'Jameel Anjum', role: 'Senior Clerk', phone: '+92 300 4818823' },
  },
  {
    city: 'Multan',
    label: 'Branch',
    address: ['Rajwana Avenue, 3rd Floor', 'Near Commissioner Office, LMQ Road', 'Multan'],
    phone: '+92 61 442 5888',
  },
  {
    city: 'Islamabad',
    label: 'Branch',
    address: ['3rd Floor, Asif Plaza', 'Fazal-e-Haq Road, Blue Area', 'Islamabad'],
    phone: '+92 51 280 6212',
    fax: '+92 51 280 6213',
  },
  {
    city: 'Karachi',
    label: 'Liaison office',
    address: ['11-C, South Sea-view Avenue', 'Main Sunset Boulevard, Phase-II DHA', 'Karachi'],
    phone: '+92 21 3588 8047',
  },
];

export const nav = [
  { label: 'Practice areas', href: '/#practice' },
  { label: 'The firm', href: '/#team' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Offices', href: '/#offices' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export const hero = {
  eyebrow: firm.tagline,
  headingStart: 'Steady counsel when the',
  headingHighlight: 'stakes are high',
  lead: 'Practising before courts and tribunals in Pakistan on',
  rotating: [
    'power sector litigation.',
    'banking and finance disputes.',
    'commercial disputes.',
    'tax and revenue matters.',
    'constitutional petitions.',
    'corporate advisory work.',
  ],
  // Turnaround and billing claims are taken from the firm's Oct 2026 profile.
  chips: [
    { icon: 'shield', title: 'Confidential intake', text: 'Privileged from first contact' },
    { icon: 'clock', title: '24 to 48 hours', text: 'Turnaround on most general work' },
    { icon: 'file', title: 'Costs estimated upfront', text: 'Ceiling figures or retainers on request' },
  ],
} as const;

// Courts and forums the firm appears before. Keep this list accurate.
// Sources: the Oct 2026 profile and the partners' CVs.
export const forums = [
  'Federal Constitutional Court of Pakistan',
  'Supreme Court of Pakistan',
  'Lahore High Court and its benches',
  'Islamabad High Court',
  'Appellate Tribunal Inland Revenue',
  'NEPRA',
  'OGRA',
  'Federal Tax Ombudsman',
  'Punjab Revenue Authority',
  'Banking Courts',
  'Intellectual Property Tribunals',
  'Consumer and Labour Courts',
  'Civil and Sessions Courts',
];

export type PracticeArea = {
  slug: string;
  icon:
    | 'scale' | 'receipt' | 'landmark' | 'briefcase' | 'clipboard' | 'shield'
    | 'zap' | 'banknote' | 'globe' | 'gavel' | 'house' | 'users';
  title: string;
  summary: string;
  law: string;
  intro: string;
  matters: string[];
  forums: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'power-sector',
    icon: 'zap',
    title: 'Power sector & regulatory',
    summary: 'Litigation and regulatory work for power distribution and generation companies, up to the Supreme Court.',
    law: 'NEPRA · OGRA',
    intro:
      'We act for power distribution companies (DISCOs), generation companies and other state-owned enterprises in judicial and regulatory proceedings, from tribunals to the Supreme Court of Pakistan.',
    matters: [
      'Litigation for distribution and generation companies',
      'Proceedings before NEPRA and OGRA',
      'Income tax and sales tax disputes of power utilities',
      'Writ petitions and appeals by and against power companies',
      'Representing state-owned enterprises before Alternative Dispute Resolution Committees',
    ],
    forums: ['NEPRA', 'OGRA', 'Appellate Tribunal Inland Revenue', 'Lahore High Court', 'Supreme Court of Pakistan'],
  },
  {
    slug: 'banking-and-finance',
    icon: 'banknote',
    title: 'Banking & finance',
    summary: 'Recovery suits, banking offences and finance documentation for banks and borrowers.',
    law: 'FIO 2001',
    intro:
      'We act for banks, financial institutions and borrowers in recovery litigation and criminal banking complaints, and we draft and vet finance and settlement agreements.',
    matters: [
      'Recovery suits before the Banking Courts',
      'Criminal complaints before the Special Courts for Banking Offences',
      'Appeals and constitutional petitions arising from banking court decisions',
      'Winding-up proceedings for creditors and banks',
      'Finance and settlement agreements',
      'Mergers, amalgamations and restructuring of banks and companies',
    ],
    forums: ['Banking Courts', 'Banking Tribunals', 'Lahore High Court', 'Supreme Court of Pakistan'],
  },
  {
    slug: 'commercial-litigation',
    icon: 'scale',
    title: 'Commercial litigation',
    summary: 'Recovery suits, contractual disputes and injunctions before civil and banking courts.',
    law: 'CPC 1908 · Order XXXVII',
    intro:
      'We act for businesses and individuals in disputes over contracts, payments and property, from the first legal notice through trial and appeal.',
    matters: [
      'Suits for recovery, including summary suits under Order XXXVII CPC',
      'Temporary and permanent injunctions',
      'Banking recovery suits and defence of finance cases',
      'Breach of contract and specific performance',
      'Execution of decrees',
    ],
    forums: ['Civil Courts', 'Banking Courts', 'Lahore High Court'],
  },
  {
    slug: 'tax-and-revenue',
    icon: 'receipt',
    title: 'Tax & revenue',
    summary: 'Appeals and petitions against assessment, withholding and recovery notices, federal and provincial.',
    law: 'ITO 2001 · Sales Tax Act 1990',
    intro:
      'We handle tax disputes at every stage: replies to notices, departmental appeals, tribunal hearings and constitutional challenges where the department acts beyond its powers.',
    matters: [
      'Replies to show-cause, assessment and withholding notices',
      'Appeals before the Commissioner (Appeals) and the Appellate Tribunal',
      'Sales tax on services before the Punjab Revenue Authority',
      'Recovery proceedings and stay applications',
      'Complaints before the Federal Tax Ombudsman',
    ],
    forums: ['Commissioner (Appeals)', 'Appellate Tribunal Inland Revenue', 'Federal Tax Ombudsman', 'Lahore High Court'],
  },
  {
    slug: 'constitutional-petitions',
    icon: 'landmark',
    title: 'Constitutional petitions',
    summary: 'Writ jurisdiction against public bodies, regulators and statutory authorities.',
    law: 'Art. 199, Constitution of Pakistan',
    intro:
      'When a public body acts without lawful authority, a writ petition can stop it. We draft and argue petitions and the interim applications that go with them.',
    matters: [
      'Writ petitions under Article 199',
      'Stay and interim relief applications',
      'Challenges to notices issued without jurisdiction',
      'Election matters',
      'Service and regulatory matters',
      'Intra-court appeals',
    ],
    forums: ['Lahore High Court', 'Supreme Court of Pakistan'],
  },
  {
    slug: 'corporate-advisory',
    icon: 'briefcase',
    title: 'Corporate advisory',
    summary: 'Incorporation, governance, shareholder agreements and SECP filings.',
    law: 'Companies Act 2017',
    intro:
      'We advise companies and founders on how to set up, govern and document their business so that disputes are less likely and easier to resolve.',
    matters: [
      'Company and partnership formation',
      'Shareholder and joint venture agreements',
      'Commercial contracts and terms of business',
      'Intellectual property: trade marks, copyright and proceedings before the IP Tribunals',
      'SECP filings and corporate compliance',
      'Board resolutions and governance documents',
    ],
    forums: ['SECP'],
  },
  {
    slug: 'procurement',
    icon: 'clipboard',
    title: 'Procurement',
    summary: 'Bid challenges, grievance proceedings and contract review for public tenders.',
    law: 'PPRA Rules 2014',
    intro:
      'We help bidders and contractors through public procurement, from reviewing tender documents to challenging an unfair evaluation.',
    matters: [
      'Review of bidding documents and contracts',
      'Grievance redressal proceedings',
      'Challenges to blacklisting and disqualification',
      'Contract disputes with public bodies',
    ],
    forums: ['Grievance Redressal Committees', 'Lahore High Court'],
  },
  {
    slug: 'insurance-and-regulatory',
    icon: 'shield',
    title: 'Insurance & regulatory',
    summary: 'Claims disputes and representation before regulators and ombudsmen.',
    law: 'Insurance Ordinance 2000',
    intro:
      'We represent policyholders and businesses in insurance claims and in proceedings before sector regulators.',
    matters: [
      'Insurance claim disputes and repudiations',
      'Proceedings before the Insurance Tribunal',
      'Complaints before ombudsmen',
      'Regulatory licensing and compliance advice',
    ],
    forums: ['Insurance Tribunal', 'Ombudsmen', 'Regulators'],
  },
  {
    slug: 'international-law',
    icon: 'globe',
    title: 'International law & arbitration',
    summary: 'Arbitration, trade and investment matters, treaty work and enforcement of foreign awards.',
    law: 'Arbitration · Trade law',
    intro:
      'The firm advises on public and private international law, including disputes between businesses and states and cross-border matters for corporate clients, and acts in domestic and international arbitration.',
    matters: [
      'Domestic and international arbitration',
      'Enforcement of foreign arbitral awards',
      'International trade, investment and commercial law',
      'Treaty negotiation and interpretation',
      'Environmental and climate change law',
      'Marine, aviation and insurance law',
    ],
    forums: ['Arbitral tribunals', 'Lahore High Court', 'Supreme Court of Pakistan'],
  },
  {
    slug: 'criminal-law',
    icon: 'gavel',
    title: 'Criminal law',
    summary: 'Trials, bail and appeals, including criminal complaints under banking laws.',
    law: 'CrPC 1898 · PPC 1860',
    intro:
      'We conduct criminal trials, bail applications and appeals, and appear in criminal complaints before the Banking Courts and the Special Courts for Banking Offences.',
    matters: [
      'Criminal trials and appeals',
      'Bail applications',
      'Criminal revisions and constitutional petitions',
      'Criminal complaints before the Banking Courts and the Special Courts for Banking Offences',
      'Cyber crime matters',
    ],
    forums: ['Sessions Courts', 'Special Courts for Banking Offences', 'Lahore High Court', 'Supreme Court of Pakistan'],
  },
  {
    slug: 'civil-family-property',
    icon: 'house',
    title: 'Civil, family & property',
    summary: 'Civil suits, family matters, property and revenue disputes, rent and execution.',
    law: 'CPC 1908 · Family Courts Act',
    intro:
      'We act in civil and family courts and before revenue authorities, from the plaint and written statement through trial, appeal and execution.',
    matters: [
      'Civil suits, declarations and cancellation of documents',
      'Injunctions and specific relief',
      'Title, possession, partition and inheritance disputes',
      'Revenue proceedings and land records, including mutations',
      'Land acquisition proceedings',
      'Family matters: dissolution of marriage, maintenance, dower, custody and guardianship',
      'Rent and ejectment proceedings',
    ],
    forums: ['Civil Courts', 'Family Courts', 'Revenue authorities', 'Lahore High Court'],
  },
  {
    slug: 'labour-service-education',
    icon: 'users',
    title: 'Labour, service & education',
    summary: 'Labour and HR disputes, service matters, and work for universities and public institutions.',
    law: 'Labour · Service · Education',
    intro:
      'We advise and represent employers, institutions and public bodies in labour, human-resource and service disputes, and act for universities and other education bodies.',
    matters: [
      'Labour and human-resource disputes',
      'Service matters of public-sector employees',
      'Matters of universities and education institutions',
      'Consumer court proceedings',
      'Writ petitions in service and education matters',
    ],
    forums: ['Labour Courts', 'Consumer Courts', 'Lahore High Court'],
  },
];

// Figures come from the firm's profiles: the year it was established (`firm.founded`), the clients
// listed (106) and the Oct 2026 list of lawyers (20). Update them when the profile changes.
export const stats = [
  {
    value: new Date().getFullYear() - firm.founded,
    suffix: '',
    label: 'Years in practice',
    detail: `Since the firm was established in Multan in ${firm.founded}.`,
  },
  { value: 100, suffix: '+', label: 'Clients served', detail: 'Public bodies, banks, universities and industry.' },
  { value: 20, suffix: '', label: 'Lawyers', detail: 'Senior advocates, barristers and associates.' },
];

// From the "Our approach", "Our philosophy" and "Cost effective" sections of the firm's profile.
export const about = {
  eyebrow: 'About the firm',
  heading: 'Prepared early, supervised by a partner',
  lead: `Rajwana & Rajwana was established in Multan in ${firm.founded} and has since opened offices in Lahore and Islamabad, with a liaison office in Karachi. We act for corporate, public-sector and private clients, and our lawyers are licensed to appear before the Supreme Court and the High Courts of Pakistan.`,
  principles: [
    {
      title: 'Thorough preparation',
      text: 'We take a detailed approach at the outset, so that strengths and weaknesses show early, especially in matters of factual and documentary complexity.',
    },
    {
      title: 'Partner-led',
      text: 'Every case is handled or supervised by a partner, who stays fully informed when junior lawyers deal with it.',
    },
    {
      title: 'Settle or litigate',
      text: 'Where ADR, arbitration or negotiation serves the client, we use it. When a case has to be argued in court, we prepare it fully.',
    },
    {
      title: 'Multi-disciplinary teams',
      text: 'Close links with bankers, chartered accountants, financial advisors, architects, engineers and surveyors let us assemble a combined team when a matter needs one.',
    },
  ],
};

// Team. Sources: the firm's Oct 2026 profile and the CVs supplied for it, plus public record for
// the founding partner. Personal details in the CVs (ID numbers, dates of birth, home addresses,
// personal phone numbers and emails, tax figures) are deliberately not published here.
// Add a portrait to /public/team/<slug>.jpg and set `photo` when available.
export type Lawyer = {
  slug: string;
  name: string;
  role: 'Founding Partner' | 'Partner' | 'Advocate';
  enrolment: string;
  practice?: string[];
  qualifications?: string[];
  highlights?: string[];
  bio?: string[];
  photo?: string;
};

export const team: Lawyer[] = [
  {
    slug: 'rafique-rajwana',
    name: 'Malik Muhammad Rafique Rajwana',
    role: 'Founding Partner',
    enrolment: 'Senior Advocate Supreme Court of Pakistan',
    practice: ['Civil law', 'Company law', 'Commercial and banking law', 'Election law', 'Arbitration and ADR'],
    highlights: [
      'Governor of Punjab, 2015 to 2018',
      'Senator from Punjab, 1997 to 1999 and 2012 to 2015',
      'President, High Court Bar Association Multan, 1996',
      'Additional District and Sessions Judge, 1987',
      'Chair, parliamentary committee on the appointment of the Chief Election Commissioner, 2014',
    ],
    qualifications: ['MA Economics, Forman Christian College, Lahore', 'Government Emerson College, Multan'],
    bio: [
      'Malik Muhammad Rafique Rajwana founded Rajwana & Rajwana after leaving the Punjab judicial service, where he sat as an Additional District and Sessions Judge in 1987. He is a Senior Advocate of the Supreme Court of Pakistan with more than forty-five years in practice, which began under the late Khalid Farook Qureshi. His practice centres on civil, company, commercial and banking law, election law, and domestic and international arbitration, and many of his cases are reported in the law journals.',
      'Alongside his practice he served two terms in the Senate of Pakistan, sitting on its committees for Law, Justice and Human Rights and for Foreign Affairs, and was Governor of Punjab from 2015 to 2018, returning to practice in August 2018. He was elected President of the High Court Bar Association, Multan, in 1996.',
      'He took the firm into international work, acting in matters for Alstom Energy, Rally Energy and the Liverpool Cotton Association, and opened its offices in Multan, Lahore and Islamabad.',
    ],
  },
  {
    slug: 'kashif-rajwana',
    name: 'Barrister Malik Kashif Rafique Rajwana',
    role: 'Partner',
    enrolment: 'Advocate Supreme Court of Pakistan',
    practice: [
      'Banking and financial litigation',
      'Company law',
      'Tax and customs',
      'Power sector and regulatory',
      'Constitutional petitions',
      'Arbitration and ADR',
    ],
    highlights: [
      'Amicus curiae to the Lahore High Court in Higher Education Commission v. Muhammad Umar (ICA 546 of 2016), on joint transcripts and degrees of two universities',
      'Amicus curiae to the Lahore High Court in Rana Altaf Brothers Rice Factory v. Judge Banking Court (WP 11501 of 2019), on comparison of signatures under the Financial Institutions (Recovery of Finances) Ordinance 2001',
    ],
    qualifications: [
      "Bar-at-Law, Lincoln's Inn",
      'LLM, International Banking & Financial Services and Crimes, University of Wolverhampton',
      'LLM, International Trade Law, London Metropolitan University',
      'Graduate Diploma in Law (GDL/CPE), University of Wolverhampton',
      'Postgraduate Diploma in Law, City University London',
      'LLB, University of the Punjab',
      'BA, Government College Lahore',
    ],
    bio: [
      'Barrister Malik Kashif Rafique Rajwana is a partner at Rajwana & Rajwana and manages its corporate and institutional clients. Enrolled as an advocate in 2005, he has practised before the High Court since 2007 and the Supreme Court of Pakistan since 2024. He appears before the Federal Constitutional Court, the Lahore High Court and its benches, the Islamabad High Court, the Appellate Tribunals Inland Revenue, NEPRA and the Intellectual Property Tribunals.',
      'His practice centres on banking and financial litigation, company law, tax and customs, power sector matters and constitutional petitions. He has conducted amalgamations, de-mergers, takeovers and restructurings, represented creditors and banks in winding-up proceedings, drafted finance and settlement agreements for financial institutions, and acted for power distribution and generation companies up to the Supreme Court.',
      "He holds two LLMs from the United Kingdom, in International Banking and Financial Services and Crimes and in International Trade Law, and was called to the Bar by Lincoln's Inn. His research on international arbitration examined the obstacles to enforcing foreign arbitral awards.",
    ],
  },
  {
    slug: 'asif-rajwana',
    name: 'Malik Asif Rafique Rajwana',
    role: 'Partner',
    enrolment: 'Advocate High Court',
    practice: ['Tax', 'Power sector litigation', 'Corporate and civil litigation', 'Intellectual property', 'Banking'],
    qualifications: [
      'LLB, Bahauddin Zakariya University, Multan',
      'MS Computer Science, LUMS',
      'BS Computer Science (Honours), University of Central Punjab',
    ],
    bio: [
      'Malik Asif Rafique Rajwana joined Rajwana & Rajwana in 2010 and is a partner, managing its corporate clients. He was enrolled as an Advocate of the High Court in 2012.',
      'His practice covers tax, power sector litigation for distribution companies, corporate and civil litigation, banking, and intellectual property, including copyright and trade marks. He represents state-owned enterprises before Alternative Dispute Resolution Committees, drafts and vets commercial agreements, and gives opinions on corporate affairs. He has also taught at university level.',
    ],
  },
  {
    slug: 'sher-newaz-shah',
    name: 'Sher Newaz Shah',
    role: 'Advocate',
    enrolment: 'Senior Advocate Supreme Court of Pakistan',
    practice: ['Civil law', 'Banking and finance', 'Corporate advisory', 'Land and revenue'],
    qualifications: [
      'Advocate High Court, 1983',
      'Advocate Supreme Court, 1998',
      'Life Member, Lahore High Court Bar Association',
      'Life Member, Supreme Court Bar Association',
    ],
    bio: [
      'Sher Newaz Shah has been a senior advocate with Rajwana & Rajwana since its foundation. He began in 1978-79 in the chambers of the late Khalid Farook Qureshi, Senior Advocate Supreme Court, and before joining the firm ran his own practice, Shah & Qureshi, on Fane Road, Lahore.',
      'He appears before the Supreme Court, the Lahore High Court and the Banking Tribunals in civil, banking, service, family, and land and revenue matters, and drafts agreements, contracts and legal opinions. He is legal consultant to several banks, firms and companies.',
    ],
  },
  {
    slug: 'faiz-rasool-rajwana',
    name: 'Malik Faiz Rasool Rajwana',
    role: 'Advocate',
    enrolment: 'Advocate Supreme Court of Pakistan',
    practice: ['Criminal law', 'Banking offences', 'Public and corporate sector litigation'],
    highlights: ['Deputy Attorney General for Pakistan, before joining the firm'],
    bio: [
      'Malik Faiz Rasool Rajwana has thirty years of experience in law, mainly in criminal law. He has conducted trials and criminal complaints before the Banking Courts and the Special Courts for Banking Offences, and has wide experience of legal consultation, vetting and litigation in the public and corporate sectors.',
      'Before joining Rajwana & Rajwana he served as Deputy Attorney General for Pakistan.',
    ],
  },
  {
    slug: 'rustam-khan-padhiar',
    name: 'Rustam Khan Padhiar',
    role: 'Advocate',
    enrolment: 'Advocate Supreme Court of Pakistan',
  },
  {
    slug: 'saeed-nasir',
    name: 'Barrister Saeed Nasir',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    practice: ['International law', 'International trade and commercial law', 'Environmental law', 'Arbitration and mediation'],
    qualifications: [
      'LLM, International Law',
      'LLM, International Human Rights Law',
      'LLM, Advanced International Environmental Law',
      'MPhil, TRIPS Agreement and developing countries',
      'Barrister-at-Law',
    ],
    bio: [
      "Barrister Saeed Nasir practises in public and private international law. He worked for six years in Pakistan, in the private sector and for the Government of Punjab, before studying abroad for a postgraduate diploma in law, a Master in Commercial Law and an LLM, both with First Class Honours, an MPhil on the TRIPS Agreement for developing countries, and the Bar Professional Course.",
      'His work covers international contracts, treaties and conventions, including human rights conventions, climate and biodiversity agreements and the TRIPS Agreement, and dispute resolution by arbitration and mediation. He is an independent consultant to research bodies, non-governmental organisations and the Government of Punjab, a resource person at the University Law College, University of the Punjab, in international, environmental and trade law, and an examiner for LLM theses.',
    ],
  },
  {
    slug: 'junaid-qayyum',
    name: 'Junaid Qayyum',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    practice: ['Civil litigation', 'Family law', 'Property and revenue', 'Commercial disputes'],
    qualifications: ['LLB, University of the Punjab, 2004'],
    bio: [
      'Junaid Qayyum graduated in law from the University of the Punjab in 2004 and has been an Advocate of the High Court since 2009. He practises in civil, commercial, family, property and revenue litigation before civil and family courts, revenue authorities and the Lahore High Court, from plaints and written statements through trials, appeals, constitutional petitions and execution.',
      'He teaches contract law at a law school, drawing on his practice.',
    ],
  },
  {
    slug: 'husnain-rajwana',
    name: 'Malik M. Husnain Rajwana',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    practice: ['Banking and finance', 'Civil and property litigation', 'Corporate, labour and consumer law'],
    highlights: [
      'Finance Secretary, District Bar Association Multan, 2014',
      'Executive Member, High Court Bar Association Multan, 2014',
    ],
    qualifications: [
      'LLB, Bahauddin Zakariya University, Multan',
      'MA English',
      'Postgraduate Diploma, Computer Applications',
    ],
    bio: [
      "Malik M. Husnain Rajwana joined Rajwana & Rajwana in 2010 after his LLB at Bahauddin Zakariya University and was enrolled as an Advocate of the High Court in 2012. He leads the firm's banking practice team, working under the supervision of Barrister Kashif Rajwana.",
      'He conducts trials, appeals and execution proceedings before the High Court and the Banking Courts across Multan, Bahawalpur, Sahiwal and Vehari, and drafts commercial agreements and legal opinions for institutional clients. He has acted as counsel and panel adviser to banks including Askari Bank and Al Baraka Bank.',
    ],
  },
  {
    slug: 'hammad-khan-babar',
    name: 'Hammad Khan Babar',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    practice: ['Banking and corporate', 'Tax', 'Civil and commercial'],
    qualifications: [
      'LLM, University of Greenwich, London',
      'MBA (Marketing), NCBA&E, Lahore',
      'Certificate in Intellectual Property, University of Pennsylvania',
    ],
    bio: [
      'Hammad Khan Babar has been a senior legal associate at Rajwana & Rajwana since 2017 and was enrolled as an Advocate of the High Court in 2018. He appears before the banking, civil, consumer and sessions courts, tax tribunals and the High Court for textile, fertiliser, power distribution and banking clients.',
      'He advises on corporate affairs and vets contracts and agreements. His work for power distribution companies includes sales tax and income tax disputes before the Appellate Tribunal Inland Revenue and the Lahore High Court.',
    ],
  },
  {
    slug: 'asghar-ali-dogar',
    name: 'Asghar Ali Dogar',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    practice: ['Criminal law', 'Banking'],
    qualifications: ['LLB, University Law College, University of the Punjab, 2003'],
    bio: [
      'Asghar Ali Dogar graduated from the University Law College, University of the Punjab, in 2003 and joined Rajwana & Rajwana in 2004. He practises criminal law and manages banking sector matters for the firm, and has a number of reported cases.',
    ],
  },
  {
    slug: 'tariq-rajwana',
    name: 'Malik Tariq Naseer Rajwana',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    practice: ['Banking', 'Civil litigation'],
    bio: [
      'Malik Tariq Naseer Rajwana completed his law degree in 2010 and worked in teaching before joining Rajwana & Rajwana in 2013. Based in Multan, he practises in banking and civil matters and has appeared before the Banking Tribunals and the Special Courts for Banking Offences since 2013.',
    ],
  },
  {
    slug: 'hamza-khakwani',
    name: 'Hamza Khakwani',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
  },
  {
    slug: 'saleem-rajwana',
    name: 'Malik M. Saleem Rajwana',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    qualifications: ['GDL/CPE (UK)', "Bar Professional Training Course, Lincoln's Inn (UK)"], // confirm
  },
  {
    slug: 'haseeb-ahmed',
    name: 'Haseeb Ahmed',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    practice: ['Civil litigation', 'Corporate', 'Tax'],
    qualifications: [
      'LLM, University of Lahore',
      'LLB, Bahauddin Zakariya University, Multan',
      'BA, Bahauddin Zakariya University, Multan',
    ],
    bio: [
      'Haseeb Ahmed has been an advocate at Rajwana & Rajwana since November 2019, acting for clients in civil, corporate and tax matters. He drafts petitions, agreements, contracts and legal notices, prepares case files and legal research, and advises clients on litigation.',
    ],
  },
  {
    slug: 'oman-ali-nasir',
    name: 'Oman Ali Nasir',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    practice: ['Civil and commercial law', 'Contracts and opinions'],
    qualifications: [
      'LLM, Commercial and Corporate Law, University of London (in progress)',
      'LLB (Hons), University of London',
    ],
    bio: [
      'Oman Ali Nasir joined Rajwana & Rajwana as a junior associate in May 2024 and was enrolled as an Advocate of the High Court in June 2026. He drafts contracts, case briefs, writ petitions and legal opinions for clients including state-owned enterprises, and appears before the district courts.',
    ],
  },
  {
    slug: 'shahnawaz-abid-bodla',
    name: 'Barrister Shahnawaz Abid Bodla',
    role: 'Advocate',
    enrolment: 'Advocate',
    practice: ['Civil and corporate litigation', 'Banking', 'Contract review'],
    qualifications: [
      "LLM, International Commercial Law, City St George's, University of London",
      "Bar Vocational Studies with LLM, Corporate Law and Practice, City St George's",
      'LLB, University of London',
    ],
    bio: [
      'Barrister Shahnawaz Abid Bodla joined Rajwana & Rajwana as an associate in September 2023. He researches and drafts pleadings, petitions, legal notices and opinions for clients in civil, corporate and banking litigation, including power distribution companies, fertiliser and textile groups, and banks, and takes part in client meetings and case strategy with the partners.',
    ],
  },
  {
    slug: 'hasnat-khan',
    name: 'Barrister Muhammad Hasnat Khan',
    role: 'Advocate',
    enrolment: 'Advocate',
    practice: ['Tax and revenue', 'Corporate and company law', 'Banking', 'Alternative dispute resolution'],
    qualifications: [
      "LLM, Alternative Dispute Resolution, and Barrister Practice and Training Course, Nottingham Trent University (Lincoln's Inn)",
      'LLM, International Corporate and Financial Regulation, Brunel University London',
      'LLB (Hons), University of London',
    ],
    bio: [
      'Barrister Muhammad Hasnat Khan is an associate at Rajwana & Rajwana. He supports senior counsel on tax, revenue, corporate and banking matters before the Lahore High Court and the Supreme Court of Pakistan, including proceedings involving the Federal Board of Revenue and the Punjab Revenue Authority.',
    ],
  },
  {
    slug: 'muhammad-abdullah-shah',
    name: 'Muhammad Abdullah Shah',
    role: 'Advocate',
    enrolment: 'Advocate',
    practice: ['Tax and customs', 'Regulatory matters'],
    qualifications: [
      'LLM, International Commercial and Economic Law, SOAS University of London',
      'LLB (Hons), University of London',
    ],
    bio: [
      'Muhammad Abdullah Shah was enrolled as an advocate of the lower courts in April 2025 and joined Rajwana & Rajwana as an associate in June 2025. He researches and drafts pleadings, petitions and advisory notes in tax, customs and regulatory matters, and appears for corporate clients before tax tribunals and appellate courts.',
    ],
  },
  {
    slug: 'shakeeb-arshad',
    name: 'M. Shakeeb Arshad',
    role: 'Advocate',
    enrolment: 'Advocate',
  },
];

export const founderWikipedia = 'https://en.wikipedia.org/wiki/Rafique_Rajwana';

// A selection from the 106 clients in the firm's Oct 2026 profile. Keep the count a multiple of four
// so the grid fills its rows.
// TODO: confirm each client has agreed to be named on the website, not just in the profile.
export const clients = [
  { short: 'GEPCO', name: 'Gujranwala Electric Power Company', sector: 'Power distribution' },
  { short: 'LESCO', name: 'Lahore Electric Supply Company', sector: 'Power distribution' },
  { short: 'MEPCO', name: 'Multan Electric Power Company', sector: 'Power distribution' },
  { short: 'SNGPL', name: 'Sui Northern Gas Pipelines Limited', sector: 'Gas utility' },
  { short: 'PSO', name: 'Pakistan State Oil Limited', sector: 'Oil marketing' },
  { short: 'State Life', name: 'State Life Insurance Corporation of Pakistan', sector: 'Life insurance' },
  { short: 'NHA', name: 'National Highway Authority', sector: 'Highways' },
  { short: 'Fatima Fertilizer', name: 'Fatima Fertilizer Company Limited', sector: 'Fertilizer manufacturing' },
  { short: 'Askari Bank', name: 'Askari Bank Limited', sector: 'Banking' },
  { short: 'Al Baraka', name: 'Al Baraka Bank (Pakistan) Limited', sector: 'Banking' },
  { short: 'UBL', name: 'United Bank Limited', sector: 'Banking' },
  { short: 'HBL', name: 'Habib Bank Limited', sector: 'Banking' },
];

// TODO: replace with real articles or remove the section until there are some.
export const insights = [
  {
    category: 'Tax',
    title: 'Can a writ petition be filed against a tax notice?',
    excerpt: 'When the High Court will hear a challenge directly, and when it will send you back to the appellate forum.',
    href: '/#insights',
  },
  {
    category: 'Litigation',
    title: 'Summary suits under Order XXXVII: speed and its limits',
    excerpt: 'What qualifies as a negotiable instrument claim, and how defendants obtain leave to defend.',
    href: '/#insights',
  },
  {
    category: 'Corporate',
    title: 'Five clauses every shareholder agreement should settle',
    excerpt: 'Deadlock, transfer restrictions, exit, information rights and dispute resolution under the Companies Act 2017.',
    href: '/#insights',
  },
];

export const faqs = [
  {
    q: 'What should I bring to the first consultation?',
    a: 'Any notice, order or agreement involved, and a short timeline of events. Copies are enough at this stage.',
  },
  {
    q: 'How are fees agreed?',
    a: 'Where we can, we give an estimate of the likely costs at the outset and tell you if circumstances change. We can also work to a ceiling or budget figure, or act on a retainer. We do not bill for every call or letter.',
  },
  {
    q: 'Can you act on a stay application at short notice?',
    a: 'Yes, where the documents are available. Urgent writ and stay matters are prioritised on intake.',
  },
  {
    q: 'Do you take matters outside Lahore?',
    a: 'Yes. The firm has offices in Lahore, Multan and Islamabad and a liaison office in Karachi, and its lawyers hold licences to practise before the Supreme Court and the High Courts, so matters can be handled close to the court where they are heard.',
  },
  {
    q: 'How will I hear about progress on my case?',
    a: 'You get a short update after every hearing date, with the next step and anything needed from you.',
  },
];

export const contact = {
  heading: 'Tell us about your matter',
  lead:
    'Share the basics and a lawyer will reply within one working day. Sending this form does not create a client relationship until we confirm in writing.',
  matterTypes: [...practiceAreas.map((p) => p.title), 'Something else'],
  offices: offices.map((o) => o.city),
};

export const disclaimer = 'Information on this website is general and is not legal advice.';
