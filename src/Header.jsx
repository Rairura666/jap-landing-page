import { useState, useEffect } from "react"

export function Header() {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const docIsReady = () => setIsReady(true)
        if (document.readyState === "complete") {
    
            docIsReady();
        } else {

            window.addEventListener("load", docIsReady)
        }
         return () => window.removeEventListener("load", docIsReady)
    }, [])

    return (
        <div className="header">
            <div className="headerBgImage"></div>
            <div className="curve"></div>
            <div className="headerDecorativeElem">
                <div className={isReady ? "headerDecorativeRec1 animatedRec1" : "headerDecorativeRec1"}></div>
                <div className={isReady ? "headerDecorativeRec2 animatedRec2" : "headerDecorativeRec2"}>CULTURE&ART</div>
            </div>

            <h1><span className="headerH1Jap">JAPAN</span><br />CULTURE<br />&ART</h1>
        </div>
    )
}