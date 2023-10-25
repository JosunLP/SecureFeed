/**
 * Feed choice
 */
export default class FeedChoice {
  /**
   * Name  of feed choice
   */
  public name: string;

  /**
   * Key  of feed choice
   */
  public key: string;

  /**
   * Url  of feed choice
   */
  public url: string;

  /**
   * Creates an instance of feed choice.
   * @param name
   * @param key
   * @param url
   */
  constructor(name: string, key: string, url: string) {
    this.name = name;
    this.key = key;
    this.url = url;
  }
}
