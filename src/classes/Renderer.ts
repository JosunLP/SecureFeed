import { Result } from "@/model/Result";
import { ResultCollection } from "@/model/ResultCollection";
import { Config } from "./Config";

export class Renderer {

    private static renderItem(data: Result, id: number): HTMLDivElement {
        const entry = document.createElement("div")
        const title = document.createElement("h3")
        const content = document.createElement("p")
        const contentWrapper = document.createElement("div")
        const link = document.createElement("a")
        const changed = document.createElement("label")
        const breaker = document.createElement("br")
        const dateOfPublish = new Date(data.published)
        const image = document.createElement("img")
        
        title.innerHTML = data.title
        content.innerHTML = data.content.replace("<!--[CDATA[<p-->", "").replace("]]>", "")
        content.classList.add("entryContent")
        link.innerHTML = data.link
        link.href = data.link
        link.target = "_blank"
        changed.innerHTML = dateOfPublish.toLocaleString()
        changed.className = "changed"
        image.alt = "Content Image"
        image.className = "entryImage"
        contentWrapper.className = "contentWrapper"        

        if (data.image !== '') {
            image.src = <string>data.image
            contentWrapper.appendChild(image)
        }
        contentWrapper.appendChild(content)

        entry.appendChild(title)
        entry.appendChild(contentWrapper)
        entry.appendChild(link)
        entry.appendChild(breaker)
        entry.appendChild(changed)
        entry.classList.add(Config.itemName)
        entry.classList.add("hide")
        entry.id = id.toString()

        return entry
    }

    public static renderList(data: ResultCollection, target: string) {
        const items: HTMLDivElement[] = []
        let id = 1
        data.collection.forEach(element => {
            items.push(this.renderItem(element, id))
            id++
        })

        const list = <HTMLDivElement>document.getElementById(target)

        list.innerHTML = ""

        items.forEach(item => {
            list!.appendChild(item)
        })
    }
}