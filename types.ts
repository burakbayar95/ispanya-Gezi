export enum ActivityType {
  FOOD = 'Yemek',
  SIGHTSEEING = 'Gezilecek Yer',
  SHOPPING = 'Alışveriş',
  TRANSPORT = 'Ulaşım',
  ENTERTAINMENT = 'Eğlence',
  CHRISTMAS_MARKET = 'Noel Pazarı'
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
  isOptional?: boolean;
  isUrgent?: boolean;
}

export interface DaySchedule {
  id: string;
  date: string;
  title: string;
  items: ItineraryItem[];
}

export interface Ticket {
  id: string;
  title: string;
  url: string;
  description?: string;
  isUrgent?: boolean;
}