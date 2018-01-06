import { IGuest } from './guest.model';
import { IBringItItem } from './item.model';

export interface IBringItEvent {
  _id: string;
  title: string;
  type: string; // BBQ, Babyshower, etc...
  isOver: boolean;
  hostId: string;
  guests: IGuest[];
  suggestions: IBringItItem[];
  items: IBringItItem[];
  theme: string; // B&W, Love, autumn, etc.
  date: Date;
  location: string;
  description: string;
}
