import { BringItItemInterface } from './item.model';

export interface BringItEventInterface {
  uuid: string;
  title: string;
  type: string; // BBQ, Babyshower, etc...
  isOver: boolean;
  hostId: string;
  //guestsId: string[];
  suggestions: BringItItemInterface[];
  items: BringItItemInterface[];
  theme: string; // B&W, Love, autumn, etc.
  date: Date;
  location: string;
  description: string;
}
