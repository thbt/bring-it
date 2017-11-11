import {WishList} from "./wish-list";
import {SuggestionsList} from "./suggestions-list";

export class OfficialEventList extends WishList {
  /**
   * A suggestionsList always belongs to a officialEventList
   */
  suggestionsList : SuggestionsList;
}
