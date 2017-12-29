import {UserInterface} from "./user.model";

/**
 * Authenticated user
 */
export interface AuthUserInterface extends UserInterface {
  credentials: string; // todo : a definir quand on fera les taches création de compte
  password: string;
}
