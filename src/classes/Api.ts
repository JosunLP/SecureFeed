import { Result } from "../model/Result"
import { ResultCollection } from "../model/ResultCollection"
import { Helper } from "./Helper"

export class Api {

    data: Promise<ResultCollection>

    static header: RequestInit = {
        mode: 'cors',
        method: 'GET'
    }

    constructor(url: string) {

        let result: ResultCollection = new ResultCollection([])

        this.data = fetch(url, Api.header)
            .then(response => response.text())
            .then(xml => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xml, "application/xml")
                const rss = xmlDoc.getElementsByTagName("item")[0]
                const atom = xmlDoc.getElementsByTagName("entry")[0]

                if (rss != undefined) {
                    result = this.rssParser(xmlDoc, result)
                }

                if (atom != undefined) {
                    result = this.atomParser(xmlDoc, result)
                }

                return result
            })
    }

    private atomParser(xmlDoc: Document, resultCollection: ResultCollection): ResultCollection {

        const feedItems = <HTMLCollectionOf<HTMLDivElement>>xmlDoc.getElementsByTagName("entry")

        Array.from(feedItems).forEach(entry => {
            const title = Array.from(entry.getElementsByTagName("title"))[0].innerHTML
            let id;
            try {
                id = Array.from(entry.getElementsByTagName("id"))[0].innerHTML
            } catch (error) {
                id = "noIdGiven"
            }
            const updated = Array.from(entry.getElementsByTagName("updated"))[0].innerHTML
            const link = <string>Array.from(entry.getElementsByTagName("link"))[0].getAttribute("href")
            const published = Array.from(entry.getElementsByTagName("published"))[0].innerHTML
            const summary = Array.from(entry.getElementsByTagName("summary"))[0].innerHTML
            let content = Array.from(entry.getElementsByTagName("content"))[0].innerHTML
            let image;
            try {
                image = (new DOMParser()).parseFromString(content, "text/html").getElementsByTagName("img")[0].src
            } catch (error) {
                image = ''
            }

            content = Helper.removeHTML(content);

            const item = new Result(title, id, updated, published, link, summary, content, image)

            resultCollection.collection.push(item)
        })

        return resultCollection
    }

    private rssParser(xmlDoc: Document, resultCollection: ResultCollection): ResultCollection {

        const feedItems = <HTMLCollectionOf<HTMLDivElement>>xmlDoc.getElementsByTagName("item")

        Array.from(feedItems).forEach(entry => {
            const title = Array.from(entry.getElementsByTagName("title"))[0].innerHTML
            let id;
            try {
                id = Array.from(entry.getElementsByTagName("id"))[0].innerHTML
            } catch (error) {
                id = "noIdGiven"
            }
            const updated = Array.from(entry.getElementsByTagName("pubDate"))[0].innerHTML
            const link = Array.from(entry.getElementsByTagName("link"))[0].innerHTML
            const published = Array.from(entry.getElementsByTagName("pubDate"))[0].innerHTML
            const summary = Array.from(entry.getElementsByTagName("description"))[0].innerHTML
            let image;
            let content;
            try {
                content = Array.from(entry.getElementsByTagName("content:encoded"))[0].innerHTML
                try {
                    image = (new DOMParser()).parseFromString(content, "text/html").getElementsByTagName("img")[0].src
                } catch (error) {
                    image = ''
                }
            } catch (error) {
                content = Array.from(entry.getElementsByTagName("description"))[0].innerHTML
                try {
                    image = (new DOMParser()).parseFromString(content, "text/html").getElementsByTagName("img")[0].src
                } catch (error) {
                    image = ''
                }
            }

            content = Helper.removeHTML(content)

            const item = new Result(title, id, updated, published, link, summary, content, image)

            resultCollection.collection.push(item)
        })

        return resultCollection
    }
}
