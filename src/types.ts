export type FoodPreference = 'veg' | 'non-veg' | 'both';

export type MealTime = 'lunch' | 'dinner' | 'both';

export interface MenuItem {
  day: string;
  lunch: {
    main: string;
    roti: string;
    dal: string;
    rice: string;
    extra?: string;
  };
  dinner: {
    main: string;
    roti: string;
    dal: string;
    rice: string;
    extra?: string;
  };
}

export interface TiffinProvider {
  id: string;
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  city: string;
  area: string;
  distance: string;
  type: FoodPreference;
  pricePerMeal: number;
  weeklyPrice: number;
  monthlyPrice: number;
  timing: string;
  isHygieneVerified: boolean;
  isFeatured?: boolean;
  image: string;
  chefName: string;
  chefExperience: string;
  menu: MenuItem[];
  tags: string[];
  phoneNumber?: string;
}

// HostelListing type removed (PG/Hostel features deprecated)

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  city: string;
  comment: string;
  rating: number;
  avatar: string;
  tiffinName: string;
}

export interface CityOption {
  name: string;
  state: string;
  popularAreas: string[];
  collegeHubs: string[];
  tiffinCount: number;
  pgCount: number;
}
