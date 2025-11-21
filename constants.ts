import { Content, Language } from './types';

export const translations: Record<Language, Content> = {
  am: {
    nav: [
      { id: 'home', label: 'መነሻ' },
      { id: 'about', label: 'ስለ እኛ' },
      { id: 'services', label: 'አገልግሎቶች' },
      { id: 'portfolio', label: 'ፕሮጀክቶች' },
      { id: 'pricing', label: 'ዋጋዎች' },
      { id: 'contact', label: 'ያግኙን' },
    ],
    hero: {
      title: 'ሞን ሶፍትዌር ሶሉሽንስ',
      subtitle: 'የኢትዮጵያ ቀዳሚ የሶፍትዌር ልማት አጋርዎ። ለንግድዎ ዘመናዊ የቴክኖሎጂ መፍትሄዎችን እናቀርባለን።',
      cta: 'ፕሮጀክት እንጀምር',
      secondaryCta: 'አማክሩን',
    },
    about: {
      title: 'ስለ ሞን',
      storyTitle: 'የእኛ ታሪክ',
      story: 'ሞን በኢትዮጵያ የቴክኖሎጂ ዘርፍ ላይ ለውጥ ለማምጣት የተቋቋመ ኩባንያ ነው። ከትንሽ ጅማሮ ተነስተን፣ ዛሬ ለበርካታ ድርጅቶች አስተማማኝ ዲጂታል አጋር ሆነናል።',
      missionTitle: 'ተልዕኮ',
      mission: 'ጥራት ያለው እና ለተጠቃሚ ምቹ የሆነ የሶፍትዌር መፍትሄ በማቅረብ የደንበኞቻችንን የንግድ እንቅስቃሴ ማሳደግ።',
      visionTitle: 'ራዕይ',
      vision: 'በምስራቅ አፍሪካ ተመራጭ የቴክኖሎጂ ማዕከል መሆን።',
      stats: [
        { label: 'የተጠናቀቁ ፕሮጀክቶች', value: '50+' },
        { label: 'ደስተኛ ደንበኞች', value: '30+' },
        { label: 'የልምድ ዓመታት', value: '5+' },
      ],
    },
    services: {
      title: 'አገልግሎቶቻችን',
      subtitle: 'ለንግድዎ እድገት የተዘጋጁ ዘመናዊ መፍትሄዎች',
      items: [
        {
          title: 'የድረ-ገጽ ልማት',
          description: 'ዘመናዊ፣ ፈጣን እና ለተጠቃሚ ምቹ የሆኑ ድረ-ገጾችን ለንግድዎ እንገነባለን።',
          iconName: 'Globe',
        },
        {
          title: 'የሞባይል መተግበሪያ',
          description: 'ለ Android እና iOS ስልኮች የሚሆኑ ድንቅ መተግበሪያዎችን እናበለጽጋለን።',
          iconName: 'Smartphone',
        },
        {
          title: 'ሲስተም ልማት',
          description: 'የድርጅትዎን ውስብስብ ስራዎች የሚያቀልሉ የሶፍትዌር ሲስተሞችን እንሰራለን።',
          iconName: 'Database',
        },
        {
          title: 'አይቲ (IT) ማማከር',
          description: 'ትክክለኛውን የቴክኖሎጂ ውሳኔ እንዲወስኑ የባለሙያ ምክር እንሰጣለን።',
          iconName: 'Briefcase',
        },
      ],
    },
    portfolio: {
      title: 'የሰጠናቸው ስራዎች',
      subtitle: 'በቅርቡ ያጠናቀቅናቸው አንዳንድ ፕሮጀክቶች',
      items: [
        {
          title: 'አዋሽ ኢ-ኮሜርስ',
          category: 'Web App',
          description: 'ሙሉ የኦንላይን ግብይት መድረክ ከክፍያ አማራጮች ጋር።',
          image: 'https://picsum.photos/600/400?random=1',
        },
        {
          title: 'ጤና ፕላስ',
          category: 'Mobile App',
          description: 'የህክምና ቀጠሮ እና የምክር አገልግሎት መተግበሪያ።',
          image: 'https://picsum.photos/600/400?random=2',
        },
        {
          title: 'ትምህርት ቤት ማኔጅመንት',
          category: 'System',
          description: 'ለአንድ ትልቅ ትምህርት ቤት የተሰራ የተማሪዎች መረጃ አያያዝ ሲስተም።',
          image: 'https://picsum.photos/600/400?random=3',
        },
      ],
    },
    pricing: {
      title: 'የዋጋ ጥቅሎች',
      subtitle: 'ለእርስዎ ተመጣጣኝ የሆኑ የክፍያ አማራጮች',
      tiers: [
        {
          name: 'መነሻ (Basic)',
          price: '15,000 ብር',
          features: ['ቀላል ድረ-ገጽ (5 ገጾች)', '1 ዓመት ነጻ ሆስቲንግ', 'የሞባይል እይታ', 'የእውቂያ ቅጽ'],
          recommended: false,
        },
        {
          name: 'መደበኛ (Pro)',
          price: '45,000 ብር',
          features: ['ዳይናሚክ ድረ-ገጽ', 'CMS (ማስተዳደሪያ)', 'SEO ማሻሻያ', 'የሶሻል ሚዲያ ትስስር', '3 ወር ድጋፍ'],
          recommended: true,
        },
        {
          name: 'ድርጅታዊ (Enterprise)',
          price: 'በስምምነት',
          features: ['ሙሉ የሲስተም ልማት', 'የሞባይል መተግበሪያ', '24/7 ድጋፍ', 'ክላውድ ሰርቨር', 'ልዩ ዲዛይን'],
          recommended: false,
        },
      ],
    },
    contact: {
      title: 'ያግኙን',
      subtitle: 'ፕሮጀክትዎን ለመጀመር ዝግጁ ነዎት? መልእክት ይላኩልን።',
      form: {
        name: 'ሙሉ ስም',
        email: 'ኢሜይል',
        message: 'መልእክት',
        submit: 'ላክ',
      },
      info: {
        address: 'ቦሌ ክፍለ ከተማ፣ አዲስ አበባ፣ ኢትዮጵያ',
        phone: '+251 911 00 00 00',
        email: 'info@monsoftware.com',
      },
    },
    footer: {
      rights: 'መብቱ በህግ የተጠበቀ ነው።',
      company: 'ሞን ሶፍትዌር ሶሉሽንስ',
    },
  },
  en: {
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About Us' },
      { id: 'services', label: 'Services' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'pricing', label: 'Packages' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      title: 'Mon Software Solutions',
      subtitle: 'Ethiopia\'s premier software development partner. Building tomorrow\'s technology for your business today.',
      cta: 'Start a Project',
      secondaryCta: 'Consult Us',
    },
    about: {
      title: 'About Mon',
      storyTitle: 'Our Story',
      story: 'Mon was established to revolutionize the tech landscape in Ethiopia. From humble beginnings, we have grown into a trusted digital partner for numerous organizations.',
      missionTitle: 'Mission',
      mission: 'To enhance our clients\' business operations by delivering high-quality and user-friendly software solutions.',
      visionTitle: 'Vision',
      vision: 'To be the preferred technology hub in East Africa.',
      stats: [
        { label: 'Projects Completed', value: '50+' },
        { label: 'Happy Clients', value: '30+' },
        { label: 'Years Experience', value: '5+' },
      ],
    },
    services: {
      title: 'Our Services',
      subtitle: 'Modern solutions tailored for your business growth',
      items: [
        {
          title: 'Web Development',
          description: 'We build modern, fast, and user-friendly websites for your business.',
          iconName: 'Globe',
        },
        {
          title: 'Mobile App Development',
          description: 'Developing native and cross-platform applications for Android and iOS.',
          iconName: 'Smartphone',
        },
        {
          title: 'System Integration',
          description: 'Complex software systems that streamline your organizational operations.',
          iconName: 'Database',
        },
        {
          title: 'IT Consulting',
          description: 'Expert advice to help you make the right technology decisions.',
          iconName: 'Briefcase',
        },
      ],
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Some of our recently completed projects',
      items: [
        {
          title: 'Awash E-Commerce',
          category: 'Web App',
          description: 'A full online shopping platform with integrated payment gateways.',
          image: 'https://picsum.photos/600/400?random=1',
        },
        {
          title: 'Tena Plus',
          category: 'Mobile App',
          description: 'Medical appointment booking and consultation application.',
          image: 'https://picsum.photos/600/400?random=2',
        },
        {
          title: 'School Management',
          category: 'System',
          description: 'Student information management system for a large academy.',
          image: 'https://picsum.photos/600/400?random=3',
        },
      ],
    },
    pricing: {
      title: 'Service Packages',
      subtitle: 'Affordable pricing tiers for your needs',
      tiers: [
        {
          name: 'Basic',
          price: '15,000 ETB',
          features: ['Simple Website (5 Pages)', '1 Year Free Hosting', 'Mobile Responsive', 'Contact Form'],
          recommended: false,
        },
        {
          name: 'Pro',
          price: '45,000 ETB',
          features: ['Dynamic Website', 'CMS (Admin Panel)', 'SEO Optimization', 'Social Integration', '3 Months Support'],
          recommended: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Full System Development', 'Mobile Application', '24/7 Support', 'Cloud Server', 'Custom Design'],
          recommended: false,
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to start your project? Send us a message.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Message',
        submit: 'Send Message',
      },
      info: {
        address: 'Bole Sub-city, Addis Ababa, Ethiopia',
        phone: '+251 911 00 00 00',
        email: 'info@monsoftware.com',
      },
    },
    footer: {
      rights: 'All Rights Reserved.',
      company: 'Mon Software Solutions',
    },
  },
};