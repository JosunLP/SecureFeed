import { Result } from './Result'

export class ResultCollection {
  constructor(
    collection: Array<Result>,
  ) {
    this.collection = collection
  }

  collection: Array<Result>
}
