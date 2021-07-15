import { Result } from "@/model/Result";
import { ResultCollection } from "@/model/ResultCollection";

export class Renderer {

    private static renderItem(data: Result): HTMLDivElement {
        const entry = new HTMLDivElement()
        const title = new HTMLTitleElement()
        const content = new HTMLParagraphElement()
        const link = new HTMLLinkElement()

        title.innerHTML = data.title
        content.innerHTML = data.content
        link.innerHTML = data.link
        link.href = data.link

        entry.appendChild(title)
        entry.appendChild(content)
        entry.appendChild(link)

        return entry
    }

    public static renderList(data: ResultCollection, target: string) {
        const items: HTMLDivElement[] = []
        
        data.collection.forEach(element => {
            items.push(this.renderItem(element))
        })

        const list = <HTMLDivElement>document.getElementById(target)

        list.innerHTML = ""

        items.forEach(item => {
            list!.appendChild(item)
        })
    }
}