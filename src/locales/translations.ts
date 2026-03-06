export type Language = 'en' | 'zh' | 'ja' | 'hi' | 'bn' | 'ar' | 'ru';

export interface Translation {
  title: string;
  modeStandard: string;
  modePlsDonate: string;
  beforeTax: string;
  afterTax: string;
  creatorEarnings: string;
  robloxFee: string;
  plsDonateFee: string;
  settings: string;
  language: string;
  theme: string;
  errorMax: string;
  errorNegative: string;
  dir: string;
  font: string;
  breakdown: string;
  donate: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    title: "RbuxCalculator",
    modeStandard: "Standard",
    modePlsDonate: "PLS Donate",
    beforeTax: "Before Tax",
    afterTax: "After Tax",
    creatorEarnings: "Creator Earnings",
    robloxFee: "Roblox Fee",
    plsDonateFee: "PLS Donate Fee",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    errorMax: "Max limit reached",
    errorNegative: "Cannot be negative",
    dir: "ltr",
    font: "font-sans",
    breakdown: "Breakdown",
    donate: "If you want to support the website creator, you can donate to my Roblox ID: AstralNox0",
  },
  zh: {
    title: "Rbux计算器",
    modeStandard: "标准模式",
    modePlsDonate: "PLS捐赠",
    beforeTax: "税前",
    afterTax: "税后",
    creatorEarnings: "创作者收入",
    robloxFee: "Roblox费用",
    plsDonateFee: "PLS捐赠费用",
    settings: "设置",
    language: "语言",
    theme: "主题",
    errorMax: "达到最大限制",
    errorNegative: "不能为负数",
    dir: "ltr",
    font: "font-sans",
    breakdown: "明细",
    donate: "If you want to support the website creator, you can donate to my Roblox ID: AstralNox0",
  },
  ja: {
    title: "Rbux電卓",
    modeStandard: "標準",
    modePlsDonate: "PLS寄付",
    beforeTax: "税引前",
    afterTax: "税引後",
    creatorEarnings: "クリエイター収益",
    robloxFee: "Roblox手数料",
    plsDonateFee: "PLS寄付手数料",
    settings: "設定",
    language: "言語",
    theme: "テーマ",
    errorMax: "上限に達しました",
    errorNegative: "負の値は不可",
    dir: "ltr",
    font: "font-sans", 
    breakdown: "内訳",
    donate: "If you want to support the website creator, you can donate to my Roblox ID: AstralNox0",
  },
  hi: {
    title: "Rbux कैलकुलेटर",
    modeStandard: "मानक",
    modePlsDonate: "PLS डोनेट",
    beforeTax: "कर पूर्व",
    afterTax: "कर पश्चात",
    creatorEarnings: "निर्माता की कमाई",
    robloxFee: "Roblox शुल्क",
    plsDonateFee: "PLS डोनेट शुल्क",
    settings: "सेटिंग्स",
    language: "भाषा",
    theme: "थीम",
    errorMax: "अधिकतम सीमा पार",
    errorNegative: "नकारात्मक नहीं हो सकता",
    dir: "ltr",
    font: "font-sans",
    breakdown: "ब्रेकडाउन",
    donate: "If you want to support the website creator, you can donate to my Roblox ID: AstralNox0",
  },
  bn: {
    title: "Rbux ক্যালকুলেটর",
    modeStandard: "স্ট্যান্ডার্ড",
    modePlsDonate: "PLS ডোনেট",
    beforeTax: "করের আগে",
    afterTax: "করের পরে",
    creatorEarnings: "নির্মাতার আয়",
    robloxFee: "Roblox ফি",
    plsDonateFee: "PLS ডোনেট ফি",
    settings: "সেটিংস",
    language: "ভাষা",
    theme: "থিম",
    errorMax: "সর্বোচ্চ সীমা পৌঁছেছে",
    errorNegative: "নেতিবাচক হতে পারে না",
    dir: "ltr",
    font: "font-sans",
    breakdown: "ব্রেকডাউন",
    donate: "If you want to support the website creator, you can donate to my Roblox ID: AstralNox0",
  },
  ar: {
    title: "حاسبة Rbux",
    modeStandard: "قياسي",
    modePlsDonate: "تبرع PLS",
    beforeTax: "قبل الضريبة",
    afterTax: "بعد الضريبة",
    creatorEarnings: "أرباح المبدع",
    robloxFee: "رسوم Roblox",
    plsDonateFee: "رسوم تبرع PLS",
    settings: "الإعدادات",
    language: "اللغة",
    theme: "المظهر",
    errorMax: "تم الوصول للحد الأقصى",
    errorNegative: "لا يمكن أن يكون سلبيًا",
    dir: "rtl",
    font: "font-sans",
    breakdown: "تفاصيل",
    donate: "If you want to support the website creator, you can donate to my Roblox ID: AstralNox0",
  },
  ru: {
    title: "Rbux Калькулятор",
    modeStandard: "Стандарт",
    modePlsDonate: "PLS Донат",
    beforeTax: "До налога",
    afterTax: "После налога",
    creatorEarnings: "Доход автора",
    robloxFee: "Комиссия Roblox",
    plsDonateFee: "Комиссия PLS",
    settings: "Настройки",
    language: "Язык",
    theme: "Тема",
    errorMax: "Достигнут лимит",
    errorNegative: "Не может быть отрицательным",
    dir: "ltr",
    font: "font-sans",
    breakdown: "Детализация",
    donate: "If you want to support the website creator, you can donate to my Roblox ID: AstralNox0",
  },
};
