export type Language = 'am' | 'en';

export type Page = 'home' | 'about' | 'services' | 'portfolio' | 'pricing' | 'contact';

export interface NavItem {
  id: Page;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Content {
  nav: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  about: {
    title: string;
    storyTitle: string;
    story: string;
    missionTitle: string;
    mission: string;
    visionTitle: string;
    vision: string;
    stats: { label: string; value: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    tiers: PricingTier[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
    };
  };
  footer: {
    rights: string;
    company: string;
  };
}