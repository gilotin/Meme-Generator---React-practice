import { useState } from "react";

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imgUrl: "http://i.imgflip.com/1bij.jpg",
    });

    function handleChange(e) {
        const { value } = e.target;

        if (e.target.id === "topText") {
            setMeme((prevState) => ({ ...prevState, topText: value }));
        }
        if (e.target.id === "bottomText") {
            setMeme((prevState) => ({ ...prevState, bottomText: value }));
        }
    }

    return (
        <main>
            <div className="form">
                <label>
                    Top Text
                    <input
                        id="topText"
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Bottom Text
                    <input
                        id="bottomText"
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    );
}
