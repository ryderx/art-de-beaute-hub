export interface BusinessHours {
  days: string[];
  hours: string;
  closed: string[];
}

export const businessHours: BusinessHours = {
  days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
  hours: '10:00 – 19:00',
  closed: ['sunday']
};
