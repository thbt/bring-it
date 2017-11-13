import {User} from "./user";
import {HostedEvent} from "./hosted-event";

export interface HostUser extends User {
  events : HostedEvent[];
}
