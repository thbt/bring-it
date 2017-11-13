import {WishList} from "./wish-list";
import {SuggestionList} from "./suggestion-list";

export interface OfficialEventList extends WishList {
  /**
   * A suggestionsList always belongs to a officialEventList
   */
  suggestions : SuggestionList[];
}
