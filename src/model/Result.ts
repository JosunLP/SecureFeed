export class Result {

    constructor(
        title: string,
        id: string, 
        updated: string, 
        published: string, 
        link: string, 
        summary: string, 
        content: string
        ) {
        this.title = title
        this.id = id
        this.updated = updated
        this.published = published
        this.link = link
        this.summary = summary
        this.content = content
    }
    
    title: string

    id: string

    updated: string

    published: string

    link: string

    summary: string

    content: string
}