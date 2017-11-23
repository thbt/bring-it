import { BringItItem } from './item.model';

export interface BringItEvent {
  id: string;
  title: string;
  type: string; // BBQ, Babyshower, etc...
  isOver: boolean;
  hostId: string;
  guestsId: string[];
  suggestions: BringItItem[];
  items: BringItItem[];
  theme?: string; // B&W, Love, autumn, etc.
  date?: Date;
  location?: string;
  description?: string;
}
