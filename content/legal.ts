const SITE_URL = "https://vibepreneur.com";
const COMPANY_NAME = "Vibepreneur";
const CONTACT_EMAIL = "hello@vibepreneur.com";

export interface LegalSection {
  heading: string;
  body: string[];
}

export const privacyPolicy: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
} = {
  title: "Privacy Policy",
  lastUpdated: "2026-03-10",
  sections: [
    {
      heading: "Introduction",
      body: [
        `${COMPANY_NAME} ("we", "us", "our") operates ${SITE_URL}. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website and services.`,
        "By using our website, you agree to the collection and use of information as described in this policy.",
      ],
    },
    {
      heading: "Data we collect",
      body: [
        "We collect information you provide directly: email address, professional role, industry, and any preferences you share during the waitlist signup process.",
        "We may collect usage data automatically: pages visited, time spent, browser type, device type, and referring URL. This data is collected through cookie-free analytics and does not personally identify you.",
      ],
    },
    {
      heading: "How we use your data",
      body: [
        "To provide and maintain our service, including waitlist management and personalised onboarding.",
        "To send you emails about product updates, weekly insights, and early access opportunities. You can unsubscribe at any time.",
        "To improve our website and service based on aggregated usage patterns.",
      ],
    },
    {
      heading: "Data processors",
      body: [
        "We use the following third-party services to operate our platform:",
        "Vercel: website hosting and serverless functions. Resend: transactional email delivery. Vercel Postgres: database storage.",
        "Each processor is bound by their own privacy policies and data processing agreements.",
      ],
    },
    {
      heading: "Data retention",
      body: [
        "We retain your personal data for as long as your account is active or as needed to provide you services. If you request deletion, we will remove your data within 30 days.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "You have the right to access, correct, or delete your personal data at any time. You have the right to withdraw consent for marketing communications. You have the right to request a copy of the data we hold about you.",
        "If you are in the European Economic Area (EEA), you have additional rights under the GDPR, including the right to data portability and the right to lodge a complaint with your local data protection authority.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Our website uses only essential cookies required for the site to function. We do not use tracking cookies or third-party advertising cookies.",
      ],
    },
    {
      heading: "Security",
      body: [
        "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the date at the top.",
      ],
    },
    {
      heading: "Contact",
      body: [
        `If you have any questions about this Privacy Policy, contact us at ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const termsOfService: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
} = {
  title: "Terms of Service",
  lastUpdated: "2026-03-10",
  sections: [
    {
      heading: "Acceptance of terms",
      body: [
        `By accessing or using ${SITE_URL} ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.`,
      ],
    },
    {
      heading: "Description of service",
      body: [
        `${COMPANY_NAME} provides a venture operating system that helps professionals turn expertise into structured, scalable businesses. The Service includes opportunity assessment, venture structuring, launch tools, and growth systems.`,
        "The Service is currently in early access. Features, pricing, and availability may change.",
      ],
    },
    {
      heading: "User accounts",
      body: [
        "You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account.",
        "You must provide accurate and complete information when creating an account or joining the waitlist.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        `All content, features, and functionality of the Service are owned by ${COMPANY_NAME} and are protected by copyright, trademark, and other intellectual property laws.`,
        "Content you create using the Service (business plans, strategies, assets) belongs to you. You grant us a limited licence to process and store this content to provide the Service.",
      ],
    },
    {
      heading: "Acceptable use",
      body: [
        "You may not use the Service for any unlawful purpose. You may not attempt to gain unauthorised access to any part of the Service. You may not use the Service to send spam or unsolicited communications.",
      ],
    },
    {
      heading: "Payment and subscriptions",
      body: [
        "Paid features are billed on a recurring basis. You can cancel your subscription at any time. Refunds are handled on a case-by-case basis.",
        "Prices are subject to change with 30 days notice.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        `${COMPANY_NAME} provides the Service "as is" without warranties of any kind, express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free.`,
        `To the maximum extent permitted by law, ${COMPANY_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.`,
      ],
    },
    {
      heading: "Termination",
      body: [
        "We may suspend or terminate your access to the Service at any time for any reason, including violation of these Terms. Upon termination, your right to use the Service ceases immediately.",
      ],
    },
    {
      heading: "Changes to terms",
      body: [
        "We reserve the right to modify these Terms at any time. We will notify users of material changes. Continued use of the Service after changes constitutes acceptance of the new Terms.",
      ],
    },
    {
      heading: "Contact",
      body: [
        `If you have any questions about these Terms, contact us at ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};
