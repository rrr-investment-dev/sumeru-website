export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  id: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    title: "About the Fund",
    id: "about-fund",
    items: [
      { id: "what-is-sigf", question: "What is Sumeru India Growth Fund (SIGF)?", answer: "SIGF is a Category III Alternative Investment Fund focused on generating superior risk-adjusted returns through investments in late-stage private, pre-IPO, selective anchor, and listed equity opportunities." },
      { id: "investment-strategy", question: "What is the investment strategy of the fund?", answer: "SIGF follows a long-only strategy that is disciplined and research-led. The focus is on identifying high-quality businesses at key value inflection points with strong growth visibility and attractive risk-reward potential." },
      { id: "sector-focus", question: "Which sectors does SIGF focus on?", answer: "SIGF is sector-agnostic and invests across industries where it identifies compelling opportunities." },
      { id: "is-regulated", question: "Is SIGF regulated?", answer: "Yes. SIGF is a SEBI-registered Category III Alternative Investment Fund, governed under the SEBI (Alternative Investment Funds) Regulations, 2012, which regulate fund structure, investor eligibility, disclosures, investment activities, and compliance standards applicable to AIFs in India." },
      { id: "what-makes-different", question: "What makes SIGF different?", answer: "SIGF combines institutional research, disciplined capital allocation, governance-led investing, and a focus on identifying businesses at critical value-unlocking inflection points." },
      { id: "category-iii-aif", question: "What is a Category III AIF?", answer: "Category III AIFs are alternative investment funds that use diverse investment strategies across listed and unlisted opportunities with the objective of generating superior risk-adjusted returns." },
    ]
  },
  {
    title: "Who Can Invest",
    id: "who-can-invest",
    items: [
      { id: "eligible-investors", question: "Who can invest in SIGF?", answer: "SIGF is intended for eligible investors such as HNIs, family offices, corporates, NRIs (subject to applicable regulations), and institutional investors." },
      { id: "minimum-investment", question: "What is the minimum investment amount?", answer: "As per SEBI regulations, the minimum investment in an AIF is generally ₹1 crore per investor, subject to applicable exceptions." },
      { id: "investor-suitability", question: "Is this fund suitable for all investors?", answer: "SIGF is designed for sophisticated investors with a long-term investment horizon and the ability to understand market risks associated with alternative investments." },
      { id: "nri-investing", question: "Can NRIs invest in SIGF?", answer: "Eligible NRIs may invest in SIGF subject to applicable regulatory, KYC, and fund-level requirements." },
    ]
  },
  {
    title: "Investment Approach",
    id: "investment-approach",
    items: [
      { id: "opportunity-types", question: "What types of opportunities does the fund invest in?", answer: "SIGF invests across late-stage private companies, pre-IPO opportunities, selective anchor allocations, and listed equity opportunities." },
      { id: "risk-management", question: "How does SIGF manage risk?", answer: "The fund follows a disciplined investment process focused on governance, prudent valuations, portfolio construction, liquidity awareness, risk monitoring, and structured exit planning." },
      { id: "listed-only", question: "Does the fund invest only in listed equities?", answer: "No. SIGF follows a flexible strategy across late-stage private, pre-IPO, anchor, and listed equity opportunities, depending on risk-reward attractiveness." },
      { id: "investment-horizon", question: "What is the investment horizon for SIGF?", answer: "SIGF is intended for investors with a medium to long-term investment horizon, aligned with the fund's strategy and investment cycle." },
      { id: "identify-opportunities", question: "How does SIGF identify investment opportunities?", answer: "The fund uses a research-led investment process focused on business quality, promoter capability, valuation discipline, sector tailwinds, and clear value-unlocking catalysts." },
    ]
  },
  {
    title: "Returns, Risks & Reporting",
    id: "returns-risks-reporting",
    items: [
      { id: "lock-in", question: "Is there a lock-in period?", answer: "Lock-in, redemption, and liquidity terms are scheme-specific and are governed by the fund's Private Placement Memorandum (PPM)." },
      { id: "performance-reporting", question: "How often is portfolio performance reported?", answer: "Investors receive periodic reporting and disclosures in accordance with regulatory requirements and fund-level reporting practices." },
      { id: "nav-disclosure", question: "How is NAV disclosed?", answer: "NAV disclosure frequency is governed by the structure of the scheme and applicable regulatory norms, with investors receiving updates through prescribed reporting channels." },
      { id: "aif-risks", question: "What are the key risks in investing in AIFs?", answer: "Like all market-linked investments, AIFs are subject to market risk, liquidity risk, business risk, and strategy-specific investment risks. Investors should review all disclosures carefully." },
    ]
  },
  {
    title: "Fees, Taxes & Onboarding",
    id: "fees-taxes-onboarding",
    items: [
      { id: "fees-expenses", question: "How are fees and expenses disclosed?", answer: "All fees, expenses, and applicable charges are disclosed in the Private Placement Memorandum (PPM) and fund documents." },
      { id: "taxation", question: "How are investments taxed?", answer: "Taxation depends on the structure of the scheme and prevailing tax regulations. Investors are advised to consult their tax advisors for specific implications." },
      { id: "how-to-invest", question: "How can I invest in SIGF?", answer: "Interested investors can connect with our team through the Contact section on the homepage to understand eligibility, documentation, onboarding, and the investment process." },
    ]
  },
];
