/**
 * Legal pages: privacy notice, disclaimer and terms of use.
 * DRAFTS for the partners' review. Edit the text here; the pages update automatically.
 * Items marked TODO need a decision from the firm.
 */
import { firm, offices } from './site';

export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = { slug: string; title: string; summary: string; updated: string; sections: LegalSection[] };

const UPDATED = '11 October 2026';
const headOffice = `${offices[0].address.join(', ')}`;

export const legalDocs: LegalDoc[] = [
  {
    slug: 'privacy',
    title: 'Privacy notice',
    summary: 'What information this website collects, why, and what you can ask us to do with it.',
    updated: UPDATED,
    sections: [
      {
        heading: 'Who we are',
        body: [
          `This website is operated by ${firm.name}, Advocates & Legal Consultants, whose head office is at ${headOffice}. You can contact us about this notice at ${firm.email}.`,
        ],
      },
      {
        heading: 'What we collect',
        body: [
          'When you send a consultation request, we receive the details you enter: your name, email address, phone number, nearest office, the type of matter and your message.',
          'We also record anonymous visit statistics, such as which pages are viewed, the country of the visit and the type of device. These statistics do not use cookies and do not identify you.',
        ],
      },
      {
        heading: 'How we use it',
        body: [
          'We use the details you send to reply to your enquiry, to check for conflicts of interest before agreeing to act, and to keep a record of the enquiry.',
          'We do not sell your information, and we do not use it for marketing.',
        ],
      },
      {
        heading: 'Who else receives it',
        body: [
          'The website is hosted by Vercel Inc., and consultation requests are delivered to our inbox by Resend. They process the information only to provide those services to us.',
          'We disclose information to anyone else only if the law requires it.',
        ],
      },
      {
        heading: 'How long we keep it',
        body: [
          // TODO: confirm the retention period the firm wants to commit to
          'If an enquiry does not lead to us acting for you, we delete it within 12 months. If you become a client, the enquiry forms part of your file and is kept in line with the firm\'s file retention practice.',
        ],
      },
      {
        heading: 'Confidentiality before we act for you',
        body: [
          'We treat information sent through this website as confidential. Sending it does not, however, make you a client. Please do not send documents or sensitive details until we have confirmed in writing that we can act for you.',
        ],
      },
      {
        heading: 'Your choices',
        body: [
          `You can ask us what information we hold about you, ask us to correct it, or ask us to delete it, by writing to ${firm.email}.`,
        ],
      },
    ],
  },
  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    summary: 'The limits of the information on this website.',
    updated: UPDATED,
    sections: [
      {
        heading: 'Not legal advice',
        body: [
          'The information on this website is general. It is not legal advice and should not be relied on as such. The law changes, and its application depends on the facts of each matter. Please consult a lawyer about your own situation.',
        ],
      },
      {
        heading: 'No lawyer and client relationship',
        body: [
          `Using this website, or sending us a message through it, does not create a lawyer and client relationship. That relationship begins only when ${firm.name} confirms in writing that it will act for you.`,
        ],
      },
      {
        heading: 'Not a solicitation',
        body: [
          'This website is provided for information about the firm and its practice. It is not intended to solicit work or to advertise in a manner contrary to the rules of professional conduct that apply to advocates in Pakistan.',
        ],
      },
      {
        heading: 'Past matters',
        body: [
          'References to clients or past matters describe the firm\'s experience. Every matter turns on its own facts, and no outcome can be guaranteed.',
        ],
      },
      {
        heading: 'Other websites',
        body: [
          'Links to other websites are provided for convenience. We are not responsible for their content.',
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of use',
    summary: 'The terms on which you may use this website.',
    updated: UPDATED,
    sections: [
      {
        heading: 'Using this website',
        body: [
          'By using this website you accept these terms. If you do not accept them, please do not use the website.',
        ],
      },
      {
        heading: 'Ownership',
        body: [
          `The content, design and logo on this website belong to ${firm.name}. You may view, print and share pages for your own non-commercial use. You may not copy or republish the content, or use the firm's name or logo, without written permission.`,
        ],
      },
      {
        heading: 'Accuracy',
        body: [
          'We try to keep the website accurate and up to date, but we do not guarantee that it is complete or current, or that it will always be available.',
        ],
      },
      {
        heading: 'Liability',
        body: [
          'To the extent the law allows, the firm is not liable for any loss arising from reliance on the content of this website or from its unavailability.',
        ],
      },
      {
        heading: 'Governing law',
        body: [
          'These terms are governed by the laws of Pakistan. The courts at Lahore have jurisdiction over any dispute arising from them.',
        ],
      },
      {
        heading: 'Changes',
        body: ['We may update these terms. The date at the top of this page shows when they last changed.'],
      },
    ],
  },
];
