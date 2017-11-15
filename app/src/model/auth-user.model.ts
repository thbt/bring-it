import { User } from "./user.model";

/**
 * Authenticated user
 */
export interface AuthUser extends User {
  credentials: string; // todo : a definir quand on fera les taches création de compte
  password: string;
}
