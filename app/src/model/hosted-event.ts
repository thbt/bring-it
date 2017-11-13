import {EventDescription} from "./event-description";

export interface HostedEvent {
  id: string;
  name : string;
  type : String;
  isOver : boolean;
  eventDescription : EventDescription;
}
