// Bilingual (EN/AR) support for the static Raseedee marketing site.
// No framework/build step here (plain HTML + Tailwind CDN), so this is a
// small hand-rolled i18n engine instead of reusing the app repo's
// React-based lib/i18n system:
//   - `translations` below holds every user-facing string for every page,
//     keyed by page then section (e.g. translations.en.index.hero.title).
//   - Elements opt in via data-i18n="dot.path" (sets textContent) or
//     data-i18n-html="dot.path" (sets innerHTML — only used where a string
//     needs an inline nested tag, e.g. a gradient-accented word inside a
//     headline; every such value is authored directly in this file, never
//     from user input, so this is safe).
//   - data-i18n-aria="dot.path" sets aria-label (used once, for the mobile
//     menu toggle).
//   - <title> and the meta-description tag are updated via a small
//     per-page map (PAGE_META below) rather than data attributes, since
//     there's exactly one of each per page.
//   - Language choice: localStorage first (key "raseedee-lang"), else the
//     browser's navigator.language (Arabic if it starts with "ar", English
//     otherwise), else English. Persisted back to localStorage on every
//     switch. <html lang>/<html dir> are set on every load AND on switch,
//     which is also how the whole page mirrors to RTL — Tailwind's logical-
//     property utilities (ps-/pe-/ms-/me-/start-/end-/text-start/text-end,
//     used throughout these pages) and native flexbox/grid direction both
//     key off that one dir attribute, no separate rtl: variant needed.
//   - The language switcher (EN / العربية) is wired up wherever
//     [data-lang-switch] buttons exist on the page (header, desktop and
//     mobile nav) — see initLangSwitcher() at the bottom.
//
// Numbers, currency codes, and Gregorian dates stay Western-numeral in both
// languages (matches the app's own lib/i18n/translations.ts convention —
// see its top comment). Brand name in Arabic is "رصيدي" per explicit
// instruction for this localization pass.

const translations = {
  en: {
    nav: {
      product: "Product",
      ai: "AI",
      investments: "Investments",
      pricing: "Pricing",
      about: "About",
      docs: "Documentation",
      docsShort: "Docs",
      features: "Features",
      login: "Log in",
      getStarted: "Get Started Free",
      getStartedLower: "Get started free",
      openMenu: "Open menu",
      betaBadge: "Beta",
    },
    footer: {
      tagline: "Personal finance for the Gulf. Currently a free public Beta.",
      product: "Product",
      company: "Company",
      resources: "Resources",
      legal: "Legal",
      about: "About",
      contact: "Contact",
      docs: "Documentation",
      faq: "FAQ",
      aiAssistant: "AI Assistant",
      privacy: "Privacy Notice",
      terms: "Terms of Use",
      cookies: "Cookie Notice",
      deleteAccount: "Delete My Account / Data",
      copyright: "Raseedee · Beta · © {year} Raseedee. All rights reserved.",
      contactLine: "Contact: {email}",
    },
    index: {
      metaTitle: "Raseedee — Personal Finance for the Gulf",
      metaDescription:
        "Track spending, savings, investments and net worth in one bilingual personal finance app built for the Gulf and Middle East.",
      heroBadge1: "Built for the Gulf & Middle East",
      heroBadge2: "Raseedee Beta",
      heroTitle: 'Your money, <span class="text-gradient">finally in one place.</span>',
      heroSubtitle:
        "Track spending, savings, investments and net worth — built for the Gulf, in Arabic and English.",
      heroCurrencies: "QAR · SAR · AED · KWD · BHD · OMR · and more",
      heroCta1: "Join the Free Beta",
      heroCta2: "See How It Works",
      heroFinePrint: "Free during Beta · No card required",
      mockDashboardLabel: "Raseedee · Dashboard",
      mockNetWorth: "Net worth",
      mockNetWorthChange: "+6.2% vs last month",
      mockSavings: "Savings",
      mockInvested: "Invested",
      mockNetWorthShort: "Net worth",
      problemTitle: "Your financial life shouldn't be scattered across different places.",
      problemTag1: "Salary in one account",
      problemTag2: "Multiple cards",
      problemTag3: "Recurring expenses",
      problemTag4: "Savings",
      problemTag5: "Installments",
      problemTag6: "Investments",
      problemTag7: "Cash transactions",
      problemQuote1: '"Where did my money actually go?"',
      problemQuote2: '"How much did I really save?"',
      problemQuote3: '"What is my net worth today?"',
      problemQuote4: '"Am I financially better off than last year?"',
      problemFooter: "More control than a bank app. Less work than a spreadsheet.",
      productTitle: 'Track. Understand. <span class="text-gradient">Grow.</span>',
      productSubtitle: "One system for your whole financial picture — not three different apps.",
      trackLabel: "Track",
      trackItem1: "Income",
      trackItem2: "Expenses",
      trackItem3: "Recurring transactions",
      trackItem4: "Savings",
      trackItem5: "Installments",
      understandLabel: "Understand",
      understandItem1: "Savings rate",
      understandItem2: "Spending breakdown",
      understandItem3: "Income vs. expenses",
      understandItem4: "Monthly trends",
      understandItem5: "Net worth",
      growLabel: "Grow",
      growItem1: "Investments",
      growItem2: "Portfolio performance",
      growItem3: "Financial goals",
      growItem4: "AI-powered insights",
      screenshotsTitle: "See it, not just read about it.",
      txMockLabel: "Raseedee · Add Transaction",
      txMockField: "Field",
      txMockFieldValue: "Groceries",
      txMockAmount: "Amount",
      txMockAmountValue: "QAR 214.50",
      txMockDate: "Date",
      txMockDateValue: "Today",
      txMockSave: "Save transaction",
      txSectionTitle: "Log transactions in seconds",
      txSectionBody:
        "Record income and expenses with your own fields, in any currency — no rigid category list to fight with.",
      reportsMockLabel: "Raseedee · Reports",
      reportsMockTitle: "Spending by category",
      reportsHousing: "Housing",
      reportsGroceries: "Groceries",
      reportsTransport: "Transport",
      reportsDining: "Dining out",
      reportsSectionTitle: "Understand where it went",
      reportsSectionBody:
        "Spending breakdowns, income vs. expenses, and month-over-month trends — without building a single pivot table.",
      invMockLabel: "Raseedee · Investments",
      invMockTitle: "Portfolio value",
      invMockChange: "+4,003 unrealized",
      invMockEtfs: "ETFs",
      invMockStocks: "Stocks",
      invMockGoldCash: "Gold & cash",
      invSectionTitle: "Your portfolio, alongside everything else",
      invSectionBody:
        "Stocks, ETFs, mutual funds, bonds, crypto and more — tracked in the same dashboard as your savings, not a separate app.",
      aiEyebrow: "Built in, no setup",
      aiTitle: 'Ask your money <span class="text-gradient">anything.</span>',
      aiSubtitle: "Malee, your AI financial assistant, understands your financial history and helps you make sense of it.",
      aiQ1: '"Where did I spend the most this month?"',
      aiQ2: '"Why did my savings rate drop?"',
      aiQ3: '"How much have I spent on restaurants this year?"',
      aiQ4: '"How has my net worth changed over the last six months?"',
      aiQ5: '"Can I afford a QAR 4,000 trip next month?"',
      aiDisclaimer: "Financial analysis and insights — not regulated financial or investment advice.",
      aiChatName: "Malee",
      aiChatTagline: "Your finances, answered",
      aiChatBubble1: "Ask me anything about your finances.",
      aiChatBubble2: "Can I afford a QAR 4,000 trip next month?",
      aiChatBubble3:
        'Based on your last 3 months, yes — you\'d have about <span class="font-semibold">QAR 1,150</span> left while keeping your current savings rate.',
      gulfTitle: "Built around the Gulf, from day one.",
      gulfSubtitle: "Not a global app with a translation bolted on.",
      gulf1Title: "English & Arabic",
      gulf1Body: "Available in English & Arabic, with RTL support. Arabic localization continues across additional product areas.",
      gulf2Title: "GCC currencies",
      gulf2Body: "QAR, SAR, AED, KWD, BHD, OMR and more, tracked natively.",
      gulf3Title: "Multi-currency households",
      gulf3Body: "Built for people who earn, spend and save across more than one currency.",
      gulf4Title: "Salaried professionals",
      gulf4Body: "Designed around a regular salary, recurring expenses, and building savings over time.",
      gulf5Title: "Savings & installments",
      gulf5Body: "Track savings goals and installment payoff timelines side by side.",
      gulf6Title: "Investment tracking",
      gulf6Body: "Regional and global holdings, in the same dashboard as everything else.",
      gulf7Title: "Real net worth",
      gulf7Body: "One number that combines savings, investments and what you owe.",
      gulf8Title: "Regional behavior",
      gulf8Body: "Built around how people in the Gulf actually earn, spend and save.",
      howTitle: "Less than two minutes a day.",
      how1Title: "Set up your financial picture",
      how1Body: "Add income, expenses, savings and accounts.",
      how2Title: "Log as you go",
      how2Body: "Record transactions quickly throughout the day.",
      how3Title: "Understand your money",
      how3Body: "See trends, savings, investments and net worth in one dashboard.",
      betaBadge: "Raseedee Beta",
      betaTitle: "Currently free, while we build.",
      betaBody1:
        "Raseedee is currently in Beta and available free of charge while we continue developing and improving the platform. You get access to available Beta features without providing any payment details.",
      betaBody2:
        "Features, functionality and availability may evolve during the Beta period. If paid plans are introduced in the future, we'll let you know in advance — and you'll be asked to actively choose a paid plan before any charge occurs. Beta users are never automatically enrolled into a paid subscription.",
      pricingTitle: "Free during Beta",
      pricingSubtitle: "Every feature below is free to use while Raseedee is in Beta — no card required.",
      pricingNotice:
        "Nothing is charged today. The tiers below show our planned pricing structure for after the Beta — if we introduce them, you'll be asked to actively choose and confirm a plan before any charge applies.",
      freeTierName: "Free",
      freeTierPrice: "$0",
      freeTierSub: "Free during Beta",
      freeTierItem1: "1 income field, 10 expense fields",
      freeTierItem2: "Unlimited transactions",
      freeTierItem3: "Dashboard & net worth tracking",
      freeTierItem4: "Savings tracking",
      freeTierItem5: "Multi-currency",
      freeTierItem6: "Excel export",
      freeTierCta: "Start Free",
      plusTierBadge: "Planned tier",
      plusTierName: "Plus",
      plusTierPrice: '$3.99<span class="text-base font-medium text-ice/50">/mo</span>',
      plusTierSub: "Planned — free during Beta",
      plusTierItem1: "2 income fields, 15 expense fields",
      plusTierItem2: "Everything in Free",
      plusTierItem3: "More room to model your finances precisely",
      plusTierCta: "Join the Free Beta",
      unlimitedTierName: "Unlimited",
      unlimitedTierPrice: '$5.99<span class="text-base font-medium text-ice/50">/mo</span>',
      unlimitedTierSub: "Planned — free during Beta",
      unlimitedTierItem1: "No limit on income or expense fields",
      unlimitedTierItem2: "Everything in Plus",
      unlimitedTierItem3: "Built for power users and complex finances",
      unlimitedTierCta: "Join the Free Beta",
      investmentsAddonLabel: "Investments add-on:",
      investmentsAddonBody: "planned at $0.99/month post-Beta — track your portfolio's value, gains and allocation over time. Not charged during Beta; contact us for early access.",
      pricingDocsLink: 'See the <a href="docs/plans.html" class="underline hover:text-ice/70">plans & pricing docs</a> for full details.',
      trustTitle: "Your financial data stays yours.",
      trust1Title: "Private by design",
      trust1Body: "Your data is yours — used to run the app, nothing else.",
      trust2Title: "No advertisements",
      trust2Body: "No ads, ever, in a place that holds your financial life.",
      trust3Title: "Never sold",
      trust3Body: "Your financial data is not sold to anyone.",
      trust4Title: "Row-level access controls",
      trust4Body: "Database-level rules restrict every record to its owner.",
      trust5Title: "Secure authentication",
      trust5Body: "Sign-in is handled by a dedicated authentication provider.",
      trust6Title: "Separated by account",
      trust6Body: "Every user's data is isolated from every other user's.",
      trustFooter: "Export your data to Excel any time — it's always yours to take with you.",
      ctaTitle: "Stop guessing what you're worth.",
      ctaBody: "See your spending, savings, investments and net worth in one place.",
      ctaButton1: "Get Started Free",
      ctaButton2: "See How It Works",
    },
    about: {
      metaTitle: "About — Raseedee",
      metaDescription:
        "Raseedee is a personal finance app built for the Gulf and Middle East — track spending, savings, investments and net worth in one bilingual dashboard.",
      title: "Why Raseedee exists",
      p1: "Raseedee started as a personal spreadsheet — a way to track every riyal earned and spent while rebuilding financially in Doha, Qatar. It grew into an automated system, then a real app.",
      p2: "That same discipline is now built for anyone in the Gulf who wants a clear, honest picture of their money — spending, savings, investments and net worth, in one bilingual dashboard, without wrestling with a bank app or building a spreadsheet from scratch.",
      p3: "Raseedee is built specifically for the Gulf and Middle East: Arabic and English, GCC currencies, and a product designed around how people here actually earn, spend and save — not a global app with a translation added on.",
      backHome: "Back to home",
    },
    docsIndex: {
      metaTitle: "Docs · Raseedee",
      title: "Documentation",
      subtitle: "Everything you need to get the most out of Raseedee.",
      card1Title: "Getting started",
      card1Body: "Create your account, set your currency, and add your first fields.",
      card2Title: "Transactions & fields",
      card2Body: "Custom fields, categories, refunds/corrections, undo, and filtering.",
      card3Title: "Investments & portfolio",
      card3Body: "Assets, categories, pricing, allocation, and multi-currency totals.",
      card4Title: "Plans & pricing",
      card4Body: "What's included in Free, Plus, and Unlimited, and how upgrading works.",
      card5Title: "FAQ",
      card5Body: "Common questions about currencies, privacy, mobile install, and more.",
    },
    docsSidebar: {
      gettingStarted: "Getting started",
      transactions: "Transactions & fields",
      investments: "Investments & portfolio",
      plans: "Plans & pricing",
      faq: "FAQ",
    },
    gettingStarted: {
      metaTitle: "Getting Started · Docs",
      title: "Getting started",
      subtitle: "Raseedee takes about two minutes to set up. Here's the order that works best.",
      s1Title: "1. Create your account",
      s1Body: "Sign up with your email. You'll land on an empty Dashboard — that's expected, it fills in as soon as you log your first transaction.",
      s2Title: "2. Set your preferred currency",
      s2Body: "In Profile settings, choose the currency you think in day-to-day. Every dashboard total is shown in this currency, and investments in other currencies are converted automatically alongside it.",
      s3Title: "3. Add your income and expense fields",
      s3Body: 'Under Settings → Fields, create the fields that match how you actually earn and spend — e.g. "Salary" and "Freelance" for income, "Rent," "Groceries," and "Transport" for expenses. Each field is tagged Needs/Wants (expense) or Revenue/Saving/Investment (income) so your reports stay meaningful. Free plans include 1 income and 10 expense fields; see <a href="plans.html" class="text-emerald-700 underline">Plans & pricing</a> for higher limits.',
      s4Title: "4. Log your first transactions",
      s4Body: "Add a transaction: pick the field, enter the amount and date, add an optional description. Your Dashboard, Transactions log, and net worth all update immediately.",
      s5Title: "5. (Optional) Add savings and investments",
      s5Body: 'Savings are tracked as a dedicated field right from Transactions — no separate setup needed. Investment/portfolio tracking is a separate add-on; see <a href="investments.html" class="text-emerald-700 underline">Investments & portfolio</a> to learn how it works.',
      s6Title: "6. Install it on your phone",
      s6Body: 'Raseedee is a installable web app (PWA). On mobile, open it in your browser and choose "Add to Home Screen" for an app-like experience with optional reminder notifications.',
      nextUpLabel: "Next up",
      nextUpLink: 'Learn how custom fields, categories, and refunds work in <a href="transactions.html" class="text-emerald-700 underline">Transactions & fields →</a>',
    },
    transactionsDoc: {
      metaTitle: "Transactions & Fields · Docs",
      title: "Transactions & fields",
      subtitle: "The core of Raseedee: your own fields, logged as transactions, filtered however you need.",
      s1Title: "Custom fields",
      s1Body: 'A field is a category you define — "Salary," "Rent," "Dining out," anything. Each field has a direction (income or expense) and a category:',
      s1Li1: "<strong>Expense fields</strong> are tagged <strong>Needs</strong> or <strong>Wants</strong>.",
      s1Li2: "<strong>Income fields</strong> are tagged <strong>Revenue</strong>, <strong>Saving</strong>, or <strong>Investment</strong>.",
      s1Footer: "This tagging is what powers your Reports and Dashboard breakdowns — it costs a few seconds up front and saves you from re-categorizing everything later.",
      s2Title: "Savings — a built-in field",
      s2Body: "Savings is a protected, system-managed field available to every account by default — you don't create it yourself. Log a deposit as a normal positive transaction on the Savings field; to withdraw, log a <em>negative</em> amount on the same field. Your Savings balance and Dashboard net worth update immediately either way.",
      s3Title: "Refunds, reimbursements, and corrections",
      s3Body: "Any field accepts a negative amount, not just Savings. Paid for a car repair and got reimbursed later? Log the reimbursement as a negative amount on the same expense field — it nets against your spending there instead of getting miscategorized as income. The same works for a mistaken entry you want to reverse.",
      s4Title: "Undo last 3 deletions",
      s4Body: "Deleted a transaction by mistake? A temporary Undo bar appears after any deletion, covering your last three — one click restores the exact original entry.",
      s5Title: "Filtering & export",
      s5Body: 'Filter your transaction log by year, month, or a custom date range, and exclude transactions with "no balance impact" when you just want to see what actually moved your money. Export the filtered log to Excel at any time.',
      nextUpLabel: "Next up",
      nextUpLink: 'See how asset tracking works in <a href="investments.html" class="text-emerald-700 underline">Investments & portfolio →</a>',
    },
    investmentsDoc: {
      metaTitle: "Investments · Docs",
      title: "Investments & portfolio",
      subtitle: "Optional add-on module for tracking a real investment portfolio alongside your everyday finances.",
      s1Title: "Asset categories",
      s1Body: "Track stocks, ETFs, mutual funds, bonds, cryptocurrency, commodities, fixed deposits, cash/currencies, real estate, vehicles, and other assets — each asset carries its own identifier (ticker, ISIN, fund code, or crypto symbol) where one applies.",
      s2Title: "Activity log",
      s2Body: "Record buys, sells, deposits, and transfers on the Activity tab. Every investment transaction that moves cash is automatically kept in sync with your Transactions log, so your net worth never double-counts or drifts out of sync.",
      s3Title: "Prices — live or manual",
      s3Body: 'Priced assets can pull live market prices, or you can enter a price manually for anything without live coverage. A "Refresh all" action updates every live-priced position in one click.',
      s4Title: "Portfolio allocation",
      s4Body: 'The Portfolio tab shows total invested, current value, and unrealized gain/loss across every currency you hold, converted to USD. Click any slice of the allocation pie to open a category breakdown — including your Savings balance, shown alongside your cash-equivalent holdings under "Currencies."',
      s5Title: "Multi-currency by design",
      s5Body: "Hold a US stock, a European fund, and a local currency account at the same time — every total on the Portfolio tab is shown per-currency and consolidated in USD, so nothing gets lost in translation.",
      s6Title: "Turning it on",
      s6Body: "Investments & portfolio is available as an add-on on any paid plan. If your account doesn't have it yet, the Investments tab will show pricing details and next steps.",
      nextUpLabel: "Next up",
      nextUpLink: 'Compare plan limits and pricing in <a href="plans.html" class="text-emerald-700 underline">Plans & pricing →</a>',
    },
    plansDoc: {
      metaTitle: "Plans & Pricing · Docs",
      title: "Plans & pricing",
      subtitle: "Plans control how many custom income and expense fields your account can have. Everything else — transactions, Dashboard, Savings, reports, Excel export — is available on every plan.",
      notice: "Nothing is charged today, regardless of which row below your account is on. The Monthly/Yearly columns show our planned pricing for after the Beta — if introduced, you'll be asked to actively choose and confirm a plan before any charge applies.",
      noticeLead: "Raseedee is currently a free public Beta.",
      colPlan: "Plan",
      colIncome: "Income fields",
      colExpense: "Expense fields",
      colMonthly: "Monthly (planned)",
      colYearly: "Yearly (planned)",
      rowFree: "Free",
      rowPlus: "Plus",
      rowUnlimited: "Unlimited",
      unlimited: "No limit",
      s1Title: 'What counts as a "field"?',
      s1Body: "A field is a category you create for logging transactions — \"Salary\" or \"Rent,\" for example. The limit is on how many active fields you can have at once, not on how many transactions you log against them (transactions are always unlimited).",
      s2Title: "Investments & portfolio add-on",
      s2Body: "Track your portfolio's value, gains, and allocation over time.",
      s2Badge: "$0.99/month (planned)",
      s2Footer: "Not charged during the Beta. This is the planned price for after the Beta, and would stack with any plan above — it's independent of your field limit. Contact us if you'd like early access to the Investments module.",
      s3Title: "Changing plans",
      s3Body: "You can upgrade at any time from the Plan page in Settings — your existing fields, transactions, and history are never affected by a plan change.",
      nextUpLabel: "Next up",
      nextUpLink: 'Have a specific question? Check the <a href="faq.html" class="text-emerald-700 underline">FAQ →</a>',
    },
    faq: {
      metaTitle: "FAQ · Docs",
      title: "Frequently asked questions",
      q1: "Can I track more than one currency?",
      a1: "Yes. Set a preferred currency in your profile for day-to-day totals, then hold assets or log transactions in any other currency — Raseedee converts and consolidates automatically wherever it shows a combined total.",
      q2: "How do refunds and reimbursements work?",
      a2: "Log them as a negative amount on the same field the original expense used. It nets against that field's total instead of getting counted as separate income, so your category totals stay accurate.",
      q3: "I deleted a transaction by mistake — can I get it back?",
      a3: "Yes, for your last three deletions. An Undo bar appears right after you delete something; click it to restore the exact entry.",
      q4: "What's the difference between Savings and Investments?",
      a4: "Savings is a simple built-in field for cash you're setting aside — no setup required. Investments is a separate add-on module for tracking priced assets (stocks, funds, crypto, and more) with cost basis and gain/loss. Both feed into your overall net worth on the Dashboard, and your Savings balance also appears alongside cash holdings on the Portfolio tab.",
      q5: "Can I install this on my phone?",
      a5: 'Yes — it\'s a Progressive Web App. Open it in your mobile browser and choose "Add to Home Screen" to use it like a native app, with optional reminder notifications.',
      q6: "Is the app available in languages other than English?",
      a6: "Yes, the core app supports English and Arabic. (The Investments module and admin tools are currently English-only.)",
      q7: "Can I export my data?",
      a7: "Yes. Your transaction log, investment activity, and dashboard summary can each be exported to Excel at any time, filtered by whatever date range or view you're currently looking at.",
      q8: "What happens to my data if I downgrade or cancel?",
      a8: "Your fields, transactions, and history are never deleted by a plan change. If a downgrade would put you over a new, lower field limit, you'll be asked to deactivate the extra fields yourself rather than having any of them removed automatically.",
      stillHaveQuestion: "Still have a question?",
      reachOut: 'Reach out at <a href="mailto:support@raseedee.com" class="text-emerald-700 underline">support@raseedee.com</a>.',
    },
  },
  ar: {
    nav: {
      product: "المنتج",
      ai: "الذكاء الاصطناعي",
      investments: "الاستثمارات",
      pricing: "الأسعار",
      about: "من نحن",
      docs: "الدليل التوثيقي",
      docsShort: "الدليل",
      features: "الميزات",
      login: "تسجيل الدخول",
      getStarted: "ابدأ مجانًا الآن",
      getStartedLower: "ابدأ مجانًا الآن",
      openMenu: "فتح القائمة",
      betaBadge: "تجريبي",
    },
    footer: {
      tagline: "الشؤون المالية الشخصية لأهل الخليج. نسخة تجريبية عامة مجانية حاليًا.",
      product: "المنتج",
      company: "الشركة",
      resources: "الموارد",
      legal: "الشؤون القانونية",
      about: "من نحن",
      contact: "تواصل معنا",
      docs: "الدليل التوثيقي",
      faq: "الأسئلة الشائعة",
      aiAssistant: "المساعد الذكي",
      privacy: "إشعار الخصوصية",
      terms: "شروط الاستخدام",
      cookies: "إشعار ملفات تعريف الارتباط",
      deleteAccount: "حذف حسابي وبياناتي",
      copyright: "رصيدي · نسخة تجريبية · © {year} رصيدي. جميع الحقوق محفوظة.",
      contactLine: "تواصل معنا: {email}",
    },
    index: {
      metaTitle: "رصيدي — الشؤون المالية الشخصية لأهل الخليج",
      metaDescription:
        "تتبّع إنفاقك ومدخراتك واستثماراتك وصافي ثروتك في تطبيق واحد ثنائي اللغة للشؤون المالية الشخصية، مصمَّم لدول الخليج والشرق الأوسط.",
      heroBadge1: "مصمَّم لدول الخليج والشرق الأوسط",
      heroBadge2: "رصيدي التجريبي",
      heroTitle: 'أموالك، <span class="text-gradient">أخيرًا في مكان واحد.</span>',
      heroSubtitle: "تتبّع إنفاقك ومدخراتك واستثماراتك وصافي ثروتك — مصمَّم لأهل الخليج، بالعربية والإنجليزية.",
      // Currency codes deliberately kept as literal Latin ISO codes (QAR,
      // SAR, ...) rather than spelled-out Arabic names or abbreviations —
      // matches how the real app displays amounts in both languages (e.g.
      // "QAR 178,420"), and matches the instruction to keep currency codes
      // unchanged rather than localize them.
      heroCurrencies: "QAR · SAR · AED · KWD · BHD · OMR · والمزيد",
      heroCta1: "انضم إلى النسخة التجريبية المجانية",
      heroCta2: "شاهد كيف يعمل",
      heroFinePrint: "مجاني خلال الفترة التجريبية · دون الحاجة إلى بطاقة",
      mockDashboardLabel: "رصيدي · لوحة التحكم",
      mockNetWorth: "صافي الثروة",
      mockNetWorthChange: "+6.2% مقارنة بالشهر الماضي",
      mockSavings: "المدخرات",
      mockInvested: "المستثمر",
      mockNetWorthShort: "صافي الثروة",
      problemTitle: "حياتك المالية لا يجب أن تكون مبعثرة بين أماكن متفرقة.",
      problemTag1: "الراتب في حساب واحد",
      problemTag2: "بطاقات متعددة",
      problemTag3: "مصاريف متكررة",
      problemTag4: "المدخرات",
      problemTag5: "الأقساط",
      problemTag6: "الاستثمارات",
      problemTag7: "المعاملات النقدية",
      problemQuote1: "«إلى أين ذهبت أموالي فعليًا؟»",
      problemQuote2: "«كم ادّخرت حقًا؟»",
      problemQuote3: "«ما هو صافي ثروتي اليوم؟»",
      problemQuote4: "«هل وضعي المالي أفضل من العام الماضي؟»",
      problemFooter: "سيطرة أكبر من تطبيق البنك. وجهد أقل من جدول بيانات.",
      productTitle: 'تتبّع. افهم. <span class="text-gradient">وانمُ.</span>',
      productSubtitle: "نظام واحد لصورتك المالية الكاملة — لا ثلاثة تطبيقات مختلفة.",
      trackLabel: "تتبّع",
      trackItem1: "الدخل",
      trackItem2: "المصروفات",
      trackItem3: "المعاملات المتكررة",
      trackItem4: "المدخرات",
      trackItem5: "الأقساط",
      understandLabel: "افهم",
      understandItem1: "معدّل الادخار",
      understandItem2: "توزيع الإنفاق",
      understandItem3: "الدخل مقابل المصروفات",
      understandItem4: "الاتجاهات الشهرية",
      understandItem5: "صافي الثروة",
      growLabel: "انمُ",
      growItem1: "الاستثمارات",
      growItem2: "أداء المحفظة",
      growItem3: "الأهداف المالية",
      growItem4: "رؤى مدعومة بالذكاء الاصطناعي",
      screenshotsTitle: "شاهدها، لا تكتفِ بالقراءة عنها.",
      txMockLabel: "رصيدي · إضافة معاملة",
      txMockField: "الفئة",
      txMockFieldValue: "بقالة",
      txMockAmount: "المبلغ",
      txMockAmountValue: "QAR 214.50",
      txMockDate: "التاريخ",
      txMockDateValue: "اليوم",
      txMockSave: "حفظ المعاملة",
      txSectionTitle: "سجّل معاملاتك في ثوانٍ",
      txSectionBody: "سجّل دخلك ومصروفاتك بفئاتك الخاصة، بأي عملة — دون قائمة فئات جامدة تُقيّدك.",
      reportsMockLabel: "رصيدي · التقارير",
      reportsMockTitle: "الإنفاق حسب الفئة",
      reportsHousing: "السكن",
      reportsGroceries: "البقالة",
      reportsTransport: "المواصلات",
      reportsDining: "تناول الطعام خارجًا",
      reportsSectionTitle: "افهم أين ذهبت أموالك",
      reportsSectionBody: "توزيع الإنفاق، والدخل مقابل المصروفات، والاتجاهات الشهرية — دون بناء جدول محوري واحد.",
      invMockLabel: "رصيدي · الاستثمارات",
      invMockTitle: "قيمة المحفظة",
      invMockChange: "+4,003 مكاسب غير محققة",
      invMockEtfs: "صناديق مؤشرات",
      invMockStocks: "أسهم",
      invMockGoldCash: "ذهب ونقد",
      invSectionTitle: "محفظتك، إلى جانب كل شيء آخر",
      invSectionBody: "الأسهم، وصناديق المؤشرات، وصناديق الاستثمار، والسندات، والعملات الرقمية، والمزيد — تُتابَع في لوحة التحكم نفسها التي تتابع فيها مدخراتك، لا في تطبيق منفصل.",
      aiEyebrow: "مدمج، دون أي إعداد",
      aiTitle: 'اسأل عن أموالك <span class="text-gradient">أي شيء.</span>',
      aiSubtitle: "مالي، مساعدك المالي الذكي، يفهم تاريخك المالي ويساعدك على فهمه.",
      aiQ1: "«أين أنفقت أكثر هذا الشهر؟»",
      aiQ2: "«لماذا انخفض معدّل ادخاري؟»",
      aiQ3: "«كم أنفقت على المطاعم هذا العام؟»",
      aiQ4: "«كيف تغيّر صافي ثروتي خلال الأشهر الستة الماضية؟»",
      aiQ5: "«هل أستطيع تحمّل تكلفة رحلة بقيمة 4,000 ريال قطري الشهر القادم؟»",
      aiDisclaimer: "تحليلات ورؤى مالية — وليست استشارة مالية أو استثمارية مرخّصة.",
      aiChatName: "مالي",
      aiChatTagline: "أموالك، مُجابة",
      aiChatBubble1: "اسألني أي شيء عن أموالك.",
      aiChatBubble2: "هل أستطيع تحمّل تكلفة رحلة بقيمة 4,000 ريال قطري الشهر القادم؟",
      aiChatBubble3:
        'بناءً على آخر 3 أشهر، نعم — سيتبقى لديك نحو <span class="font-semibold">1,150 ريالًا قطريًا</span> مع الحفاظ على معدّل ادخارك الحالي.',
      gulfTitle: "مصمَّم لأهل الخليج، منذ اليوم الأول.",
      gulfSubtitle: "ليس تطبيقًا عالميًا أُضيفت له ترجمة لاحقًا.",
      gulf1Title: "العربية والإنجليزية",
      gulf1Body: "متوفر بالعربية والإنجليزية، مع دعم الكتابة من اليمين إلى اليسار. ويستمر التعريب في التوسّع عبر مزيد من أقسام المنتج.",
      gulf2Title: "عملات دول الخليج",
      gulf2Body: "الريال القطري، والريال السعودي، والدرهم الإماراتي، والدينار الكويتي، والدينار البحريني، والريال العماني، والمزيد، تُتابَع بشكل أصيل.",
      gulf3Title: "الأسر متعددة العملات",
      gulf3Body: "مصمَّم لمن يكسبون وينفقون ويدّخرون بأكثر من عملة واحدة.",
      gulf4Title: "الموظفون أصحاب الرواتب",
      gulf4Body: "مصمَّم حول راتب منتظم، ومصروفات متكررة، وبناء المدخرات مع الوقت.",
      gulf5Title: "المدخرات والأقساط",
      gulf5Body: "تابع أهداف ادخارك وجداول سداد أقساطك جنبًا إلى جنب.",
      gulf6Title: "تتبّع الاستثمارات",
      gulf6Body: "حيازات إقليمية وعالمية، في لوحة التحكم نفسها مع كل شيء آخر.",
      gulf7Title: "صافي ثروة حقيقي",
      gulf7Body: "رقم واحد يجمع بين مدخراتك واستثماراتك وما عليك من التزامات.",
      gulf8Title: "سلوك إقليمي",
      gulf8Body: "مصمَّم حول الطريقة الفعلية التي يكسب بها أهل الخليج ويُنفقون ويدّخرون.",
      howTitle: "أقل من دقيقتين يوميًا.",
      how1Title: "أعدّ صورتك المالية",
      how1Body: "أضف دخلك ومصروفاتك ومدخراتك وحساباتك.",
      how2Title: "سجّل أولًا بأول",
      how2Body: "سجّل معاملاتك بسرعة على مدار اليوم.",
      how3Title: "افهم أموالك",
      how3Body: "شاهد الاتجاهات والمدخرات والاستثمارات وصافي الثروة في لوحة تحكم واحدة.",
      betaBadge: "رصيدي التجريبي",
      betaTitle: "مجاني حاليًا، بينما نواصل البناء.",
      betaBody1: "رصيدي حاليًا في مرحلته التجريبية ومتاح مجانًا بينما نواصل تطوير المنصة وتحسينها. تحصل على وصول كامل للميزات التجريبية المتاحة دون تقديم أي بيانات دفع.",
      betaBody2: "قد تتطور الميزات والوظائف والتوفر خلال الفترة التجريبية. وفي حال استحدثنا باقات مدفوعة مستقبلًا، سنُعلمك مسبقًا — وستُطلب منك الموافقة الفعلية على باقة مدفوعة قبل حدوث أي رسوم. لن يُسجَّل مستخدمو النسخة التجريبية تلقائيًا في أي اشتراك مدفوع أبدًا.",
      pricingTitle: "مجاني خلال الفترة التجريبية",
      pricingSubtitle: "كل ميزة أدناه مجانية للاستخدام طوال فترة رصيدي التجريبية — دون الحاجة إلى بطاقة.",
      pricingNotice: "لا يُحصَّل أي مبلغ اليوم. تُظهر الباقات أدناه هيكل الأسعار المخطط له بعد انتهاء الفترة التجريبية — وإذا استحدثناها، ستُطلب منك الموافقة الفعلية على باقة قبل تطبيق أي رسوم.",
      freeTierName: "مجانية",
      freeTierPrice: "0$",
      freeTierSub: "مجانية خلال الفترة التجريبية",
      freeTierItem1: "فئة دخل واحدة، و10 فئات مصروفات",
      freeTierItem2: "معاملات غير محدودة",
      freeTierItem3: "لوحة تحكم وتتبّع صافي الثروة",
      freeTierItem4: "تتبّع المدخرات",
      freeTierItem5: "تعدّد العملات",
      freeTierItem6: "تصدير إلى Excel",
      freeTierCta: "ابدأ مجانًا",
      plusTierBadge: "باقة مخطط لها",
      plusTierName: "بلس",
      plusTierPrice: '3.99$<span class="text-base font-medium text-ice/50">/شهريًا</span>',
      plusTierSub: "مخطط لها — مجانية خلال الفترة التجريبية",
      plusTierItem1: "فئتا دخل، و15 فئة مصروفات",
      plusTierItem2: "كل ما في الباقة المجانية",
      plusTierItem3: "مساحة أكبر لتنظيم شؤونك المالية بدقة",
      plusTierCta: "انضم إلى النسخة التجريبية المجانية",
      unlimitedTierName: "غير محدودة",
      unlimitedTierPrice: '5.99$<span class="text-base font-medium text-ice/50">/شهريًا</span>',
      unlimitedTierSub: "مخطط لها — مجانية خلال الفترة التجريبية",
      unlimitedTierItem1: "دون حد لفئات الدخل أو المصروفات",
      unlimitedTierItem2: "كل ما في باقة بلس",
      unlimitedTierItem3: "مصمَّمة للمستخدمين المتقدّمين وذوي الأوضاع المالية المعقّدة",
      unlimitedTierCta: "انضم إلى النسخة التجريبية المجانية",
      investmentsAddonLabel: "إضافة الاستثمارات:",
      investmentsAddonBody: "مخطط لها بسعر 0.99$ شهريًا بعد الفترة التجريبية — تابع قيمة محفظتك ومكاسبها وتوزيعها عبر الزمن. غير مُفعَّلة برسوم خلال الفترة التجريبية؛ تواصل معنا للوصول المبكر.",
      pricingDocsLink: 'راجع <a href="docs/plans.html" class="underline hover:text-ice/70">توثيق الباقات والأسعار</a> لمزيد من التفاصيل.',
      trustTitle: "بياناتك المالية تبقى ملكًا لك.",
      trust1Title: "خصوصية بالتصميم",
      trust1Body: "بياناتك ملك لك — تُستخدم فقط لتشغيل التطبيق، ولا شيء آخر.",
      trust2Title: "بلا إعلانات",
      trust2Body: "لا إعلانات أبدًا، في مكان يحتفظ بحياتك المالية.",
      trust3Title: "لا تُباع أبدًا",
      trust3Body: "بياناتك المالية لا تُباع لأي جهة.",
      trust4Title: "ضوابط وصول على مستوى الصفوف",
      trust4Body: "قواعد على مستوى قاعدة البيانات تقصر كل سجل على مالكه فقط.",
      trust5Title: "مصادقة آمنة",
      trust5Body: "يُدار تسجيل الدخول عبر مزوّد مصادقة مخصص.",
      trust6Title: "معزولة حسب الحساب",
      trust6Body: "بيانات كل مستخدم معزولة تمامًا عن بيانات المستخدمين الآخرين.",
      trustFooter: "صدّر بياناتك إلى Excel في أي وقت — فهي دائمًا ملكك لتأخذها معك.",
      ctaTitle: "توقف عن التخمين بشأن قيمتك المالية.",
      ctaBody: "شاهد إنفاقك ومدخراتك واستثماراتك وصافي ثروتك في مكان واحد.",
      ctaButton1: "ابدأ مجانًا الآن",
      ctaButton2: "شاهد كيف يعمل",
    },
    about: {
      metaTitle: "من نحن — رصيدي",
      metaDescription: "رصيدي تطبيق للشؤون المالية الشخصية مصمَّم لدول الخليج والشرق الأوسط — تتبّع إنفاقك ومدخراتك واستثماراتك وصافي ثروتك في لوحة تحكم واحدة ثنائية اللغة.",
      title: "لماذا وُجد رصيدي",
      p1: "بدأ رصيدي كجدول بيانات شخصي — وسيلة لتتبّع كل ريال يُكسب ويُنفق أثناء إعادة البناء المالي في الدوحة، قطر. ثم تطوّر إلى نظام آلي، ثم إلى تطبيق حقيقي.",
      p2: "الانضباط نفسه أصبح الآن متاحًا لكل من في الخليج يريد صورة واضحة وصادقة عن أمواله — الإنفاق، والمدخرات، والاستثمارات، وصافي الثروة، في لوحة تحكم واحدة ثنائية اللغة، دون الحاجة لمصارعة تطبيق بنكي أو بناء جدول بيانات من الصفر.",
      p3: "صُمّم رصيدي خصيصًا لدول الخليج والشرق الأوسط: بالعربية والإنجليزية، وبعملات دول مجلس التعاون الخليجي، ومنتج مصمَّم حول الطريقة الفعلية التي يكسب بها الناس هنا ويُنفقون ويدّخرون — لا تطبيق عالمي أُضيفت له ترجمة.",
      backHome: "العودة إلى الصفحة الرئيسية",
    },
    docsIndex: {
      metaTitle: "الدليل التوثيقي · رصيدي",
      title: "الدليل التوثيقي",
      subtitle: "كل ما تحتاجه للاستفادة الكاملة من رصيدي.",
      card1Title: "البدء",
      card1Body: "أنشئ حسابك، وحدّد عملتك، وأضف فئاتك الأولى.",
      card2Title: "المعاملات والفئات",
      card2Body: "الفئات المخصصة، والتصنيفات، والاسترجاعات/التصحيحات، والتراجع، والتصفية.",
      card3Title: "الاستثمارات والمحفظة",
      card3Body: "الأصول، والفئات، والأسعار، والتوزيع، والإجماليات متعددة العملات.",
      card4Title: "الباقات والأسعار",
      card4Body: "ما تشمله الباقات المجانية وبلس وغير المحدودة، وكيفية الترقية.",
      card5Title: "الأسئلة الشائعة",
      card5Body: "أسئلة شائعة حول العملات، والخصوصية، والتثبيت على الجوال، والمزيد.",
    },
    docsSidebar: {
      gettingStarted: "البدء",
      transactions: "المعاملات والفئات",
      investments: "الاستثمارات والمحفظة",
      plans: "الباقات والأسعار",
      faq: "الأسئلة الشائعة",
    },
    gettingStarted: {
      metaTitle: "البدء · الدليل التوثيقي",
      title: "البدء",
      subtitle: "يستغرق إعداد رصيدي نحو دقيقتين. إليك الترتيب الأنسب.",
      s1Title: "1. أنشئ حسابك",
      s1Body: "سجّل باستخدام بريدك الإلكتروني. ستصل إلى لوحة تحكم فارغة — وهذا متوقّع، إذ تمتلئ فور تسجيلك أول معاملة.",
      s2Title: "2. حدّد عملتك المفضّلة",
      s2Body: "في إعدادات الملف الشخصي، اختر العملة التي تفكّر بها يوميًا. تُعرض كل إجماليات لوحة التحكم بهذه العملة، وتُحوَّل الاستثمارات بعملات أخرى تلقائيًا لتُعرض إلى جانبها.",
      s3Title: "3. أضف فئات الدخل والمصروفات",
      s3Body: 'من الإعدادات ← الفئات، أنشئ الفئات التي تعكس كيفية كسبك وإنفاقك فعليًا — مثل "الراتب" و"العمل الحر" للدخل، و"الإيجار" و"البقالة" و"المواصلات" للمصروفات. تُصنَّف كل فئة كضرورية أو كمالية (للمصروفات) أو إيراد/ادخار/استثمار (للدخل) لتبقى تقاريرك ذات معنى. تشمل الباقة المجانية فئة دخل واحدة و10 فئات مصروفات؛ راجع <a href="plans.html" class="text-emerald-700 underline">الباقات والأسعار</a> للحصول على حدود أعلى.',
      s4Title: "4. سجّل معاملاتك الأولى",
      s4Body: "أضف معاملة: اختر الفئة، وأدخل المبلغ والتاريخ، وأضف وصفًا اختياريًا. تتحدّث لوحة التحكم وسجل المعاملات وصافي الثروة فورًا.",
      s5Title: "5. (اختياري) أضف المدخرات والاستثمارات",
      s5Body: 'تُتابَع المدخرات كفئة مخصصة مباشرة من المعاملات — دون إعداد منفصل. أما تتبّع الاستثمارات/المحفظة فهو إضافة منفصلة؛ راجع <a href="investments.html" class="text-emerald-700 underline">الاستثمارات والمحفظة</a> لمعرفة كيفية عملها.',
      s6Title: "6. ثبّته على هاتفك",
      s6Body: 'رصيدي تطبيق ويب قابل للتثبيت (PWA). على الجوال، افتحه في متصفحك واختر "إضافة إلى الشاشة الرئيسية" للحصول على تجربة أشبه بتطبيق أصلي مع إشعارات تذكير اختيارية.',
      nextUpLabel: "التالي",
      nextUpLink: '← تعرّف على كيفية عمل الفئات المخصصة والتصنيفات والاسترجاعات في <a href="transactions.html" class="text-emerald-700 underline">المعاملات والفئات</a>',
    },
    transactionsDoc: {
      metaTitle: "المعاملات والفئات · الدليل التوثيقي",
      title: "المعاملات والفئات",
      subtitle: "جوهر رصيدي: فئاتك الخاصة، مسجَّلة كمعاملات، ومُصفّاة بالطريقة التي تحتاجها.",
      s1Title: "الفئات المخصصة",
      s1Body: 'الفئة هي تصنيف تحدّده بنفسك — "الراتب" أو "الإيجار" أو "تناول الطعام خارجًا"، أي شيء. لكل فئة اتجاه (دخل أو مصروف) وتصنيف:',
      s1Li1: "<strong>فئات المصروفات</strong> تُصنَّف كـ<strong>ضرورية</strong> أو <strong>كمالية</strong>.",
      s1Li2: "<strong>فئات الدخل</strong> تُصنَّف كـ<strong>إيراد</strong> أو <strong>ادخار</strong> أو <strong>استثمار</strong>.",
      s1Footer: "هذا التصنيف هو ما يُشغّل تفصيلات تقاريرك ولوحة تحكمك — يكلّفك بضع ثوانٍ مقدَّمًا ويوفّر عليك إعادة التصنيف لاحقًا.",
      s2Title: "المدخرات — فئة مدمجة",
      s2Body: "المدخرات فئة محمية يديرها النظام ومتاحة لكل حساب افتراضيًا — لا تُنشئها بنفسك. سجّل الإيداع كمعاملة موجبة عادية على فئة المدخرات؛ وللسحب، سجّل مبلغًا <em>سالبًا</em> على الفئة نفسها. يتحدّث رصيد مدخراتك وصافي ثروة لوحة التحكم فورًا في الحالتين.",
      s3Title: "الاسترجاعات والتعويضات والتصحيحات",
      s3Body: "تقبل أي فئة مبلغًا سالبًا، وليس المدخرات فقط. هل دفعت تكلفة إصلاح سيارة وعُوّضت لاحقًا؟ سجّل التعويض كمبلغ سالب على فئة المصروف نفسها — فيُخصم من إنفاقك هناك بدلًا من تصنيفه خطأً كدخل. الأمر نفسه ينطبق على إدخال خاطئ تريد عكسه.",
      s4Title: "تراجع عن آخر 3 عمليات حذف",
      s4Body: "هل حذفت معاملة عن طريق الخطأ؟ يظهر شريط تراجع مؤقت بعد أي حذف، يغطّي آخر ثلاث عمليات — نقرة واحدة تستعيد الإدخال الأصلي بالضبط.",
      s5Title: "التصفية والتصدير",
      s5Body: 'صفِّ سجل معاملاتك حسب السنة أو الشهر أو نطاق تاريخ مخصص، واستبعد المعاملات "بلا أثر على الرصيد" عندما تريد فقط رؤية ما حرّك أموالك فعليًا. صدّر السجل المُصفّى إلى Excel في أي وقت.',
      nextUpLabel: "التالي",
      nextUpLink: '← تعرّف على كيفية عمل تتبّع الأصول في <a href="investments.html" class="text-emerald-700 underline">الاستثمارات والمحفظة</a>',
    },
    investmentsDoc: {
      metaTitle: "الاستثمارات · الدليل التوثيقي",
      title: "الاستثمارات والمحفظة",
      subtitle: "وحدة إضافية اختيارية لتتبّع محفظة استثمارية حقيقية إلى جانب شؤونك المالية اليومية.",
      s1Title: "فئات الأصول",
      s1Body: "تابع الأسهم، وصناديق المؤشرات، وصناديق الاستثمار، والسندات، والعملات الرقمية، والسلع، والودائع الثابتة، والنقد/العملات، والعقارات، والمركبات، وأصولًا أخرى — يحمل كل أصل معرِّفه الخاص (رمز التداول، أو ISIN، أو رمز الصندوق، أو رمز العملة الرقمية) حيثما ينطبق ذلك.",
      s2Title: "سجل النشاط",
      s2Body: "سجّل عمليات الشراء والبيع والإيداع والتحويل من تبويب النشاط. تبقى كل معاملة استثمارية تحرّك نقدًا متزامنة تلقائيًا مع سجل معاملاتك، بحيث لا يتكرر احتساب صافي ثروتك أو ينحرف عن التزامن أبدًا.",
      s3Title: "الأسعار — مباشرة أو يدوية",
      s3Body: 'يمكن للأصول المُسعَّرة سحب أسعار السوق المباشرة، أو يمكنك إدخال سعر يدويًا لأي أصل بلا تغطية مباشرة. يُحدّث إجراء "تحديث الكل" كل مركز مُسعَّر مباشرة بنقرة واحدة.',
      s4Title: "توزيع المحفظة",
      s4Body: 'يعرض تبويب المحفظة إجمالي المبلغ المستثمر، والقيمة الحالية، والمكاسب/الخسائر غير المحققة عبر كل عملة تملكها، محوَّلة إلى الدولار الأمريكي. اضغط على أي قطاع من دائرة التوزيع لفتح تفصيل الفئة — بما في ذلك رصيد مدخراتك، المعروض إلى جانب حيازاتك شبه النقدية تحت "العملات".',
      s5Title: "تعدّد العملات بالتصميم",
      s5Body: "احتفظ بسهم أمريكي، وصندوق أوروبي، وحساب بعملة محلية في الوقت نفسه — تُعرض كل إجماليات تبويب المحفظة لكل عملة على حدة ومُجمَّعة بالدولار الأمريكي، دون أن يضيع شيء في الترجمة.",
      s6Title: "تفعيلها",
      s6Body: "الاستثمارات والمحفظة متاحة كإضافة على أي باقة مدفوعة. إذا لم تكن مُفعَّلة في حسابك بعد، سيعرض تبويب الاستثمارات تفاصيل التسعير والخطوات التالية.",
      nextUpLabel: "التالي",
      nextUpLink: '← قارن حدود الباقات والأسعار في <a href="plans.html" class="text-emerald-700 underline">الباقات والأسعار</a>',
    },
    plansDoc: {
      metaTitle: "الباقات والأسعار · الدليل التوثيقي",
      title: "الباقات والأسعار",
      subtitle: "تتحكم الباقات في عدد فئات الدخل والمصروفات المخصصة التي يمكن لحسابك امتلاكها. كل شيء آخر — المعاملات، ولوحة التحكم، والمدخرات، والتقارير، وتصدير Excel — متاح في كل باقة.",
      noticeLead: "رصيدي حاليًا نسخة تجريبية عامة مجانية.",
      notice: "لا يُحصَّل أي مبلغ اليوم، بغض النظر عن الصف الذي يقع فيه حسابك أدناه. يُظهر عمودا الشهري/السنوي أسعارنا المخطط لها بعد انتهاء الفترة التجريبية — وإذا استُحدثت، ستُطلب منك الموافقة الفعلية على باقة قبل تطبيق أي رسوم.",
      colPlan: "الباقة",
      colIncome: "فئات الدخل",
      colExpense: "فئات المصروفات",
      colMonthly: "شهريًا (مخطط له)",
      colYearly: "سنويًا (مخطط له)",
      rowFree: "مجانية",
      rowPlus: "بلس",
      rowUnlimited: "غير محدودة",
      unlimited: "بلا حد",
      s1Title: "ماذا يُقصد بـ«الفئة»؟",
      s1Body: 'الفئة هي تصنيف تُنشئه لتسجيل المعاملات — مثل "الراتب" أو "الإيجار". الحد ينطبق على عدد الفئات النشطة التي يمكنك امتلاكها في وقت واحد، وليس على عدد المعاملات التي تسجّلها عليها (المعاملات دائمًا غير محدودة).',
      s2Title: "إضافة الاستثمارات والمحفظة",
      s2Body: "تابع قيمة محفظتك ومكاسبها وتوزيعها عبر الزمن.",
      s2Badge: "0.99$ شهريًا (مخطط له)",
      s2Footer: "غير مُفعَّلة برسوم خلال الفترة التجريبية. هذا هو السعر المخطط له بعد انتهاء الفترة التجريبية، ويُضاف إلى أي باقة أعلاه — وهو مستقل عن حد فئاتك. تواصل معنا إذا رغبت بالوصول المبكر لوحدة الاستثمارات.",
      s3Title: "تغيير الباقات",
      s3Body: "يمكنك الترقية في أي وقت من صفحة الباقة في الإعدادات — لن تتأثر فئاتك ومعاملاتك وسجلك الحالي أبدًا بتغيير الباقة.",
      nextUpLabel: "التالي",
      nextUpLink: 'لديك سؤال محدد؟ راجع <a href="faq.html" class="text-emerald-700 underline">الأسئلة الشائعة</a> ←',
    },
    faq: {
      metaTitle: "الأسئلة الشائعة · الدليل التوثيقي",
      title: "الأسئلة الشائعة",
      q1: "هل يمكنني تتبّع أكثر من عملة؟",
      a1: "نعم. حدّد عملة مفضّلة في ملفك الشخصي للإجماليات اليومية، ثم احتفظ بأصول أو سجّل معاملات بأي عملة أخرى — يقوم رصيدي بالتحويل والتجميع تلقائيًا أينما يعرض إجماليًا مجمَّعًا.",
      q2: "كيف تعمل الاسترجاعات والتعويضات؟",
      a2: "سجّلها كمبلغ سالب على الفئة نفسها التي استُخدمت للمصروف الأصلي. فيُخصم من إجمالي تلك الفئة بدلًا من احتسابه كدخل منفصل، بحيث تبقى إجماليات فئاتك دقيقة.",
      q3: "حذفت معاملة عن طريق الخطأ — هل يمكنني استعادتها؟",
      a3: "نعم، لآخر ثلاث عمليات حذف. يظهر شريط تراجع مباشرة بعد حذف أي شيء؛ اضغط عليه لاستعادة الإدخال بالضبط.",
      q4: "ما الفرق بين المدخرات والاستثمارات؟",
      a4: "المدخرات فئة مدمجة بسيطة للنقد الذي تضعه جانبًا — دون أي إعداد. أما الاستثمارات فهي وحدة إضافية منفصلة لتتبّع الأصول المُسعَّرة (أسهم وصناديق وعملات رقمية والمزيد) مع أساس التكلفة والمكاسب/الخسائر. يُضاف كلاهما إلى صافي ثروتك الإجمالي في لوحة التحكم، ويظهر رصيد مدخراتك أيضًا إلى جانب حيازاتك النقدية في تبويب المحفظة.",
      q5: "هل يمكنني تثبيته على هاتفي؟",
      a5: 'نعم — إنه تطبيق ويب تقدّمي. افتحه في متصفح جوالك واختر "إضافة إلى الشاشة الرئيسية" لاستخدامه كتطبيق أصلي، مع إشعارات تذكير اختيارية.',
      q6: "هل التطبيق متاح بلغات أخرى غير الإنجليزية؟",
      a6: "نعم، يدعم التطبيق الأساسي العربية والإنجليزية. (وحدة الاستثمارات وأدوات الإدارة متاحة بالإنجليزية فقط حاليًا.)",
      q7: "هل يمكنني تصدير بياناتي؟",
      a7: "نعم. يمكن تصدير سجل معاملاتك، ونشاطك الاستثماري، وملخص لوحة التحكم كل على حدة إلى Excel في أي وقت، مُصفّاة حسب نطاق التاريخ أو العرض الذي تشاهده حاليًا.",
      q8: "ماذا يحدث لبياناتي إذا خفّضت باقتي أو ألغيتها؟",
      a8: "لا تُحذف فئاتك ومعاملاتك وسجلك أبدًا بسبب تغيير الباقة. وإذا كان التخفيض سيتجاوز حد الفئات الجديد الأقل، ستُطلب منك إلغاء تفعيل الفئات الزائدة بنفسك بدلًا من إزالة أي منها تلقائيًا.",
      stillHaveQuestion: "ما زال لديك سؤال؟",
      reachOut: 'تواصل معنا عبر <a href="mailto:support@raseedee.com" class="text-emerald-700 underline">support@raseedee.com</a>.',
    },
  },
};

// ---------------------------------------------------------------------
// Engine
// ---------------------------------------------------------------------

const LANG_KEY = "raseedee-lang";

function lookup(lang, path) {
  let node = translations[lang];
  for (const part of path.split(".")) {
    if (node == null) return undefined;
    node = node[part];
  }
  return typeof node === "string" ? node : undefined;
}

function translate(lang, path) {
  return lookup(lang, path) ?? lookup("en", path) ?? path;
}

function detectInitialLang() {
  try {
    const cached = window.localStorage.getItem(LANG_KEY);
    if (cached === "en" || cached === "ar") return cached;
  } catch {
    // localStorage unavailable (privacy mode, etc.) — fall through.
  }
  const nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
  return nav.startsWith("ar") ? "ar" : "en";
}

// Runs as early as possible (this script is loaded synchronously, before
// deferred script.js) so <html lang/dir> — and therefore the whole page's
// layout direction — is correct before first paint, avoiding an LTR->RTL
// flash for Arabic-default visitors.
let currentLang = detectInitialLang();
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = translate(lang, el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = translate(lang, el.getAttribute("data-i18n-html"));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", translate(lang, el.getAttribute("data-i18n-aria")));
  });

  // <title> and meta description — one per page, identified by the
  // page's own body[data-page] attribute (set once per HTML file).
  const page = document.body.getAttribute("data-page");
  if (page) {
    const titleKey = `${page}.metaTitle`;
    const descKey = `${page}.metaDescription`;
    const title = lookup(lang, titleKey) ?? lookup("en", titleKey);
    if (title) document.title = title;
    const desc = lookup(lang, descKey) ?? lookup("en", descKey);
    if (desc) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", desc);
    }
  }

  // Footer copyright/contact lines take a {year}/{email} token — every
  // other string above is plain, so a tiny inline replace here is simpler
  // than a general-purpose {token} interpolation pass for the whole page.
  document.querySelectorAll("[data-i18n-year]").forEach((el) => {
    const key = el.getAttribute("data-i18n-year");
    el.textContent = translate(lang, key).replace("{year}", String(new Date().getFullYear()));
  });
  document.querySelectorAll("[data-i18n-email]").forEach((el) => {
    const key = el.getAttribute("data-i18n-email");
    el.textContent = translate(lang, key).replace("{email}", "support@raseedee.com");
  });

  // Active/inactive styling is theme-neutral on purpose (gold reads fine on
  // both the dark navy pages and the light docs pages) — each page's own
  // markup sets the inactive base color (text-ice/60 on dark pages,
  // text-slate-500 on light docs pages), and this only layers the active
  // state + a dimmed opacity for inactive on top of that.
  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang-switch") === lang;
    btn.classList.toggle("text-gold", isActive);
    btn.classList.toggle("font-semibold", isActive);
    btn.classList.toggle("opacity-60", !isActive);
    btn.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function setLang(lang) {
  currentLang = lang;
  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch {
    // ignore
  }
  applyTranslations(lang);
}

function initLangSwitcher() {
  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-switch")));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  initLangSwitcher();
});
