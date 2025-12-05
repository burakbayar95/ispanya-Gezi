export enum ActivityType {
  FOOD = 'Yemek',
  SIGHTSEEING = 'Gezilecek Yer',
  SHOPPING = 'Alışveriş',
  TRANSPORT = 'Ulaşım',
  ENTERTAINMENT = 'Eğlence'
}

export interface ItineraryItem {
  id: string;
  time?: string;
  title: string;
  description: string;
  location?: string;
  price?: string;
  type: ActivityType;
  tips?: string[];
  isBonus?: boolean;
}

export interface DaySchedule {
  id: string;
  date: string;
  title: string;
  items: ItineraryItem[];
}