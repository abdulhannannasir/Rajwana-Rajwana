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
    'Advocates and legal consultants with offices in Lahore, Multan, Islamabad and Karachi. Commercial litigation, tax and revenue, constitutional petitions and corporate advisory.',
  url: 'https://rajwanaandrajwana.com',
  city: 'Lahore',
  // Head office (Lahore) details, shown in the contact block and footer
  address: 'Office No. 1 & 2, 3rd Floor, SAF Centre, 8-Fane Road, Lahore',
  phone: '+92 42 3736 3863',
  email: 'rajwanaandrajwana@gmail.com',
  // TODO: confirm office hours
  hours: 'Monday to Saturday, 10:00 to 18:00',
  // TODO: confirm the founding year before publishing
  founded: 1990,
};

export type Office = {
  city: string;
  label: string;
  address: string[];
  phone: string;
  fax?: string;
  contact?: { name: string; role: string; phone: string };
};

// From the firm's letterhead. Lahore is listed first as the head office.
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
    label: 'Branch',
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
    'commercial disputes.',
    'tax and revenue matters.',
    'constitutional petitions.',
    'corporate advisory work.',
  ],
  chips: [
    { icon: 'shield', title: 'Confidential intake', text: 'Privileged from first contact' },
    { icon: 'clock', title: 'Same-day review', text: 'For urgent notices' },
    { icon: 'file', title: 'Fixed-fee advisory', text: 'Costs agreed upfront' },
  ],
} as const;

// Courts and forums the firm appears before. Keep this list accurate.
export const forums = [
  'Supreme Court of Pakistan',
  'Lahore High Court',
  'Appellate Tribunal Inland Revenue',
  'Federal Tax Ombudsman',
  'Punjab Revenue Authority',
  'Banking Courts',
  'Civil Courts, Lahore',
  // TODO: add benches the firm appears before from its other offices (e.g. Multan and Islamabad)
];

export type PracticeArea = {
  slug: string;
  icon: 'scale' | 'receipt' | 'landmark' | 'briefcase' | 'clipboard' | 'shield';
  title: string;
  summary: string;
  law: string;
  intro: string;
  matters: string[];
  forums: string[];
};

export const practiceAreas: PracticeArea[] = [
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
];

// TODO: replace with figures the firm can verify, or remove this section.
export const stats = [
  { value: 35, suffix: '', label: 'Years in practice', detail: 'Since the firm was founded.' },
  { value: 1200, suffix: '+', label: 'Matters handled', detail: 'Across litigation, tax and advisory work.' },
  { value: 6, suffix: '', label: 'Forums appeared before', detail: 'From civil courts to the Supreme Court.' },
];

// Team. Sources: the firm's letterhead, the bio supplied for Barrister Kashif Rajwana,
// and public record for the founding partner.
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
    practice: ['Civil law', 'Company law', 'Arbitration and ADR'],
    highlights: [
      'Governor of Punjab, 2015 to 2018',
      'Senator from Punjab, 1997 to 1999 and 2012 to 2015',
      'President, High Court Bar Association Multan, 1996',
      'Chair, parliamentary committee on the appointment of the Chief Election Commissioner, 2014',
    ],
    qualifications: ['MA Economics, Forman Christian College, Lahore', 'Government Emerson College, Multan'],
    bio: [
      'Malik Muhammad Rafique Rajwana founded Rajwana & Rajwana after leaving the Punjab judicial service. He is a senior Advocate of the Supreme Court of Pakistan, and his practice centres on civil and company law, arbitration and alternative dispute resolution.',
      'Alongside his practice he served two terms in the Senate of Pakistan, sitting on its committees for Law, Justice and Human Rights and for Foreign Affairs, and was Governor of Punjab from 2015 to 2018. He was elected President of the High Court Bar Association, Multan, in 1996.',
    ],
  },
  {
    slug: 'kashif-rajwana',
    name: 'Barrister Malik Kashif Rafique Rajwana',
    role: 'Partner',
    enrolment: 'Advocate High Court',
    practice: ['Civil law', 'Corporate law', 'Commercial law', 'Banking and finance'],
    qualifications: [
      'LLB, ULC',
      'GDL/CPE (UK)',
      'LLM, International Trade Law (UK)',
      'LLM, International Banking & Financial Services and Crimes (UK)',
      'PG-Dip (CLS) (UK)',
      "Bar Professional Training Course, Lincoln's Inn (UK)",
    ],
    bio: [
      'Barrister Malik Kashif Rafique Rajwana has practised before the High Court since 2009 in civil, corporate and commercial matters.',
      'He holds two LLMs from the United Kingdom, in International Trade Law and in International Banking and Financial Services, and trained for the Bar at Lincoln\'s Inn. He advises individuals, companies and institutions on contractual, banking and trade disputes, and acts for them in litigation.',
    ],
  },
  {
    slug: 'asif-rajwana',
    // TODO: full name, enrolment, qualifications and a short bio
    name: 'Asif Rajwana',
    role: 'Partner',
    enrolment: 'Advocate',
  },
  {
    slug: 'tariq-rajwana',
    name: 'Malik M. Tariq Rajwana',
    role: 'Advocate',
    enrolment: 'Advocate Supreme Court',
  },
  {
    slug: 'husnain-rajwana',
    name: 'Malik M. Husnain Rajwana',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
  },
  {
    slug: 'sohail-ashiq-shujra',
    name: 'Barrister Malik Sohail Ashiq Shujra',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    qualifications: ['LL.B (Punjab)', 'LL.M, Commercial Law (UK)'], // confirm
  },
  {
    slug: 'saleem-rajwana',
    name: 'Malik M. Saleem Rajwana',
    role: 'Advocate',
    enrolment: 'Advocate High Court',
    qualifications: ['GDL/CPE (UK)', "Bar Professional Training Course, Lincoln's Inn (UK)"], // confirm
  },
];

export const founderWikipedia = 'https://en.wikipedia.org/wiki/Rafique_Rajwana';

// TODO: confirm each client has agreed to be named on the website.
export const clients = [
  { short: 'GEPCO', name: 'Gujranwala Electric Power Company', sector: 'Power distribution' },
  { short: 'LESCO', name: 'Lahore Electric Supply Company', sector: 'Power distribution' },
  { short: 'MEPCO', name: 'Multan Electric Power Company', sector: 'Power distribution' },
  { short: 'Fatima Fertilizer', name: 'Fatima Fertilizer Company Limited', sector: 'Fertilizer manufacturing' },
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
    a: 'Advisory work is usually fixed-fee. Litigation is quoted by stage, so you know the cost before each phase begins.',
  },
  {
    q: 'Can you act on a stay application at short notice?',
    a: 'Yes, where the documents are available. Urgent writ and stay matters are prioritised on intake.',
  },
  {
    q: 'Do you take matters outside Lahore?',
    a: 'Yes. The firm has offices in Lahore, Multan, Islamabad and Karachi, so matters can be handled close to the court where they are heard.',
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
