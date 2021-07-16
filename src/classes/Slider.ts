import { Config } from "./Config";
import { Helper } from "./Helper";

export class Slider {

    private status: number
    private max: number

    constructor() {
        this.status = 1
        this.max = 1
    }

    public slideShowStep(targetClass: string): void {
        try {
            const targetList = Array.from(document.getElementsByClassName(targetClass)) as Array<HTMLDivElement>

            this.max = targetList.length

            targetList.forEach(element => {
                if (parseInt(element.id) === this.status) {
                    element.classList.remove("hide")
                } else {
                    element.classList.add("hide")
                }
            });

        } catch {
            return
        }

    }

    public async run(target: string): Promise<void> {
        while (document.getElementsByClassName(Config.itemName)) {
            if (this.status < this.max ) {
                this.status++
            } else {
                this.status = 1
            }
            this.slideShowStep(target)
            await Helper.sleep(14000)
        }
    }

}