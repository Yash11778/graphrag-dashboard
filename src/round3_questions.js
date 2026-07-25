/* Auto-generated from round3-sp100/data/qa — dev + official Round 3 questions. */
export const FEATURED_QUESTIONS = [
  {
    label: 'Graph Aggregation',
    icon: '🕸️',
    question: 'List all dataset companies audited by Deloitte & Touche.',
    answer: 'AMT, BA, BKNG, BLK, BMY, BRK.B, CMCSA, DE, DUK, GE, HON, LOW, MET, MS, MSFT, NEE, PG, SBUX, SCHW, SO, TMUS, UNH, UNP, UPS',
    hint: 'Tier C · AUDITED_BY traversal — exact set in ~200 tokens',
  },
  {
    label: 'Event Bridge',
    icon: '🌉',
    question: 'The company that authorized a $4.1B share-repurchase program (a 2026 8-K) — who is its auditor?',
    answer: 'FedEx; Ernst & Young LLP',
    hint: 'Tier B · Event.value → company → AUDITED_BY, 0 routing tokens',
  },
  {
    label: 'Leadership Bridge',
    icon: '👤',
    question: 'The company that appointed John Ternus as CEO — what were its total net sales in FY2025?',
    answer: 'Apple; $416,161 million (approximately $416.2 billion)',
    hint: 'Tier B · kwsearch(8-K) resolves the company, then scoped facts',
  },
  {
    label: 'Dividend Facts',
    icon: '💰',
    question: 'Which companies declared a cash dividend via an 8-K in this dataset?',
    answer: 'AIG ($0.50), Caterpillar ($1.63), Costco ($1.47), Oracle ($1,625 pref.+common), P&G',
    hint: 'Tier C · Event.declared distinguishes declarations from intents',
  },
  {
    label: 'Numeric Lookup',
    icon: '📊',
    question: 'What were Coca-Cola\'s net operating revenues for FY2025?',
    answer: '$47,941 million (approximately $47.9 billion)',
    hint: 'Tier A · ticker-scoped statement-row retrieval',
  },
];

export const DOMAIN_QUESTIONS = [
  {
    domain: '📄 Tier A — Single-hop facts',
    questions: [
      { question: 'Who is Goldman Sachs\'s independent registered public accounting firm?', answer: 'PricewaterhouseCoopers LLP' },
      { question: 'Who is General Motors\'s independent registered public accounting firm?', answer: 'Ernst & Young LLP' },
      { question: 'What quarterly cash dividend per share did Bank of New York Mellon declare in its 2026 8-K?', answer: '$0.63/share' },
      { question: 'What quarterly cash dividend per share did Intuit declare in its 2026 8-K?', answer: '$1.20/share' },
      { question: 'On what date does Microsoft\'s FY2025 end?', answer: 'June 30, 2025' },
      { question: 'Who is Amazon\'s Chief Executive Officer?', answer: 'Andrew R. Jassy' },
    ],
  },
  {
    domain: '🌉 Tier B — Two-hop bridges',
    questions: [
      { question: 'The company that authorized a $5.0B share-repurchase program (a 2026 8-K) — who is its auditor?', answer: 'Intuitive Surgical; PricewaterhouseCoopers LLP' },
      { question: 'The company that authorized a $2.0B share-repurchase program (a 2026 8-K) — who is its auditor?', answer: 'PayPal; PricewaterhouseCoopers LLP' },
      { question: 'The company that agreed to acquire Apogee Therapeutics — who is its independent auditor?', answer: 'AbbVie; Ernst & Young LLP' },
      { question: 'The company that formed a 50/50 joint venture with BT Group plc — who is its auditor?', answer: 'Verizon; Ernst & Young LLP' },
      { question: 'Amgen named an incoming CFO in 2026 — who is he, and who is Amgen\'s auditor?', answer: 'Thomas Dittrich; Ernst & Young LLP' },
      { question: 'In Apple\'s April 2026 8-K, who was appointed CEO, and what role will Tim Cook move into?', answer: 'John Ternus appointed CEO; Tim Cook moves to Executive Chair of the Board' },
    ],
  },
  {
    domain: '🕸️ Tier C — Aggregation & intersection',
    questions: [
      { question: 'Which companies are in the Energy sector?', answer: 'COP, CVX, XOM' },
      { question: 'Which Ernst & Young-audited companies are in the Information Technology sector?', answer: 'AAPL, AMD, CRM, INTC, INTU, ORCL, PLTR, TXN' },
      { question: 'Which companies in the dataset name TSMC as a foundry/manufacturing partner?', answer: 'AMD, AVGO, INTC, NVDA, QCOM' },
      { question: 'Which Energy-sector companies discuss climate change as a risk factor in their 10-K?', answer: 'Chevron (CVX), ExxonMobil (XOM), ConocoPhillips (COP)' },
      { question: 'Which KPMG-audited companies are in the Consumer Staples sector?', answer: 'PepsiCo (PEP), Costco (COST)' },
      { question: 'Among the dataset\'s semiconductor and networking companies, which explicitly name NVIDIA as a competitor?', answer: 'AMD, CSCO, INTC, QCOM' },
    ],
  },
  {
    domain: '⏱️ Tier D — Cross-doc & temporal',
    questions: [
      { question: 'Amgen\'s CFO transition (2026): when does the outgoing CFO retire, and when does the incoming CFO start?', answer: 'Peter H. Griffith retires as CFO Aug 31, 2026 (EVP until Jan 31, 2027); Thomas Dittrich effective Sept 1, 2026' },
      { question: 'Put these 2026 buyback authorizations in chronological order: Adobe $25B, Netflix +$25B, Accenture +$2B, Morgan Stanley $20B.', answer: 'Adobe (Apr 21) -> Netflix (Apr 22) -> Accenture (Jun 23) -> Morgan Stanley (Jun 24)' },
      { question: 'Apple filed two 8-Ks in April 2026 (Apr 20, Apr 30). What event does each report?', answer: 'Apr 20 = CEO transition (Ternus); Apr 30 = Q2 FY26 earnings / results of operations' },
      { question: 'Cisco\'s May 2026 restructuring 8-K funds which growth areas, and who is Cisco\'s auditor?', answer: 'Silicon, optics, security, and AI; PwC' },
      { question: 'What quarterly cash dividend per share did Costco declare in its July 2026 8-K?', answer: '$1.47 per share' },
    ],
  },
];
