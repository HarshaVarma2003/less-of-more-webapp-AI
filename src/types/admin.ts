
export interface Fellowship {
  id: number;
  title: string;
  organization: string;
  about?: string;
  responsibilities?: string;
  eligibility?: string;
  image: string;
  stipend: string;
  duration: string;
  location?: string;
  website?: string;
}

export interface Activity {
  id: number;
  title: string;
  image: string;
  url: string;
}

export interface Podcast {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
}

export const TABS = {
  FELLOWSHIPS: 'fellowships',
  ACTIVITIES: 'activities',
  PODCASTS: 'podcasts',
} as const;

export type TabType = typeof TABS[keyof typeof TABS];
