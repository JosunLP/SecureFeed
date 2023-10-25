import FeedChoice from 'src/model/FeedChoice';

export default class FeedChoiceChanged extends CustomEvent<FeedChoice> {
  public static eventName = 'feedChoiceChanged';

  constructor(feedChoice: FeedChoice) {
    super(FeedChoiceChanged.eventName, {
      detail: feedChoice,
    });
  }
}
