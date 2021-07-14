import { Result } from "@/model/Result";
import { ResultCollection } from "@/model/ResultCollection";

export class Renderer {

    private static renderItem(data: Result): HTMLDivElement {
        let entry = new HTMLDivElement()
        let title = new HTMLTitleElement()
        let content = new HTMLParagraphElement()
        let link = new HTMLLinkElement()

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
        let items: HTMLDivElement[] = []
        
        data.collection.forEach(element => {
            items.push(this.renderItem(element))
        })

        let list = document.getElementById(target)

        items.forEach(item => {
            list!.appendChild(item)
        })
    }
}