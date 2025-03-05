import { useEffect, useState } from "react";

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imgUrl: "http://i.imgflip.com/1bij.jpg",
    });

    const [memeData, setMemeData] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setMemeData(data.data.memes));
    }, []);

    function handleChange(e) {
        const { value, name } = e.target;

        setMeme((prevState) => ({ ...prevState, [name]: value }));
    }

    function handleGetNewMeme() {
        const randomPick = Math.floor(Math.random() * memeData.length);
        const randomImg = memeData[randomPick].url;
        setMeme((prevState) => ({ ...prevState, imgUrl: randomImg }));
    }

    return (
        <main>
            <div className="form">
                <label>
                    Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleGetNewMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    );
}
