export class Helper {

    public static sleep(milliseconds: number): Promise<number> {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    public static removeHTML(str: string) {
        let tmp = document.createElement("img")
        tmp.innerHTML = str
        return tmp.textContent || tmp.innerText || ""
    }
}