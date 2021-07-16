import { Result } from "../model/Result"
import { ResultCollection } from "../model/ResultCollection"

export class Api {

    data: Promise<ResultCollection>

    static header: RequestInit = {
        mode: 'cors',
        method: 'GET'
    }
    
    constructor(url: string) {

        this.data = fetch("https://www.heise.de/security/rss/alert-news-atom.xml", Api.header)
            .then(response => response.text())
            .then(xml => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xml, "application/xml");
                const result: ResultCollection = new ResultCollection([])

                const feedItems = <HTMLCollectionOf<HTMLDivElement>>xmlDoc.getElementsByTagName("entry")

                Array.from(feedItems).forEach(entry => {
                    const title = Array.from(entry.getElementsByTagName("title"))[0].innerHTML
                    const id = Array.from(entry.getElementsByTagName("id"))[0].innerHTML
                    const updated = Array.from(entry.getElementsByTagName("updated"))[0].innerHTML
                    const link = Array.from(entry.getElementsByTagName("link"))[0].href
                    const published = Array.from(entry.getElementsByTagName("published"))[0].innerHTML
                    const summary = Array.from(entry.getElementsByTagName("summary"))[0].innerHTML
                    const content = Array.from(entry.getElementsByTagName("content"))[0].innerHTML

                    const item = new Result(title, id, updated, published, link, summary, content)

                    result.collection.push(item)
                })

                return result

        })
    }
}
