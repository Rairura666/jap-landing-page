import { useState } from "react"

export function NavBar() {

    const [chosenElem, setChosenElem] = useState("main")

    return (
        <>
            <div id="navbar">
                <a
                    href="#"
                    onClick={() => setChosenElem("main")}
                ><span className={chosenElem === "main" ? "chosenA" : ""}>MAIN</span></a>
                <a
                    href="#about"
                    onClick={() => setChosenElem("about")}
                ><span className={chosenElem === "about" ? "chosenA" : ""}>ABOUT</span></a>
                <a
                    href="#contact"
                    onClick={() => setChosenElem("contact")}
                ><span className={chosenElem === "contact" ? "chosenA" : ""}>CONTACT</span></a>
            </div>

        </>
    )
}