import { IBringItEvent } from "../interfaces/event.model";
import { BringItItem } from "./item.class";
import { IGuest } from "../interfaces/guest.model";

export class BringItEvent implements IBringItEvent {
  _id: string;
  theme: string;
  date: Date;
  location: string;
  description: string;
  title: string;
  type: string;
  isOver: boolean;
  hostId: string;
  suggestions: BringItItem[];
  items: BringItItem[];
  guests: IGuest[];

  constructor(title: string, type: string, hostId: string) {
    this.title = title;
    this.type = type;
    this.hostId = hostId;
    this.isOver = false;
    this.items = [];
    this.suggestions = [];
    this.guests = [];
  }
}
