import {User} from "./user";
import {HostedEvent} from "./hosted-event";

export class HostUser extends User {
  eventsList : Array<HostedEvent>;
}
