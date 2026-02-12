import { useState } from "react"

export function NavBar() {

    const [chosenElem, setChosenElem] = useState("main")

    return (
        <>
            <div id="navbar">
                <a
                    className={chosenElem === "main" ? "chosenA" : ""}
                    onClick={() => setChosenElem("main")}
                >MAIN</a>
                <a
                    className={chosenElem === "about" ? "chosenA" : ""}
                    onClick={() => setChosenElem("about")}
                >ABOUT</a>
                <a
                    className={chosenElem === "contact" ? "chosenA" : ""}
                    onClick={() => setChosenElem("contact")}
                >CONTACT</a>
            </div>

        </>
    )
}