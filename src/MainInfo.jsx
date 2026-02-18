import { BridgeAndFishElem } from "./BridgeAndFishDecorativeElem";
import { LifeBirdDecorativeElem } from "./LifeBirdDecorativeElem";
import { SushiFoodElem } from "./SushiFoodElem";
import { TheatersElem } from "./TheaterElem";
import { TravelJapaneseElem } from "./TravelJapaneseElem";
import { UkiyoElem } from "./UkiyoElem";
import { HistoryElem } from "./HistoryElem";
import { ModernEraElem } from "./ModernEraElem";

export function MainInfo() {
    return (
        <div className="mainLayout">
            <div className="mainLayoutLineWrapper">
                <TheatersElem></TheatersElem>
                <UkiyoElem></UkiyoElem>
            </div>
            <div className="mainLayoutLineWrapper">
                <SushiFoodElem></SushiFoodElem>
                <div className='bgImgUnderMainInfo'></div>
                <LifeBirdDecorativeElem></LifeBirdDecorativeElem>
            </div>
            <div className="mainLayoutLineWrapper">
                <BridgeAndFishElem></BridgeAndFishElem>
                <TravelJapaneseElem></TravelJapaneseElem>
            </div>
            <div className="mainLayoutLineWrapper">
                <HistoryElem></HistoryElem>
                <ModernEraElem></ModernEraElem>
            </div>
        </div>
    )
}