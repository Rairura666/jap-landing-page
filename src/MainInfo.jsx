import { TheatersElem } from "./TheaterElem";
import { UkiyoElem } from "./UkiyoElem";


export function MainInfo() {
    return (
        <div className="mainLayout">
            <div className="mainLayoutLineWrapper">
                <TheatersElem></TheatersElem>
                <UkiyoElem></UkiyoElem>
            </div>
        </div>
    )
}