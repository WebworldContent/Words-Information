import React from "react";
import useSWR from "swr";
import "./Word.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Words() {
  const { data: word, error: errorInWord } = useSWR(
    "http://localhost:3005/api/word",
    fetcher
  );
  const { data: meaning, error: errorInMeaning } = useSWR(
    () => `http://localhost:3005/api/meaning/${word.word}`,
    fetcher
  );

  if (errorInWord) return <div>failed to load word</div>;

  if (errorInMeaning) return <div>failed to load meaning</div>;

  if (!meaning) return <div>loading...</div>;

  console.log(meaning?.meanings[0]?.definitions);
  const meanings = meaning?.meanings[0]?.definitions || [];

  return (
    <div className="word-container">
      <div className="word-text">
        <h1 className="word-title">{meaning.word}</h1>
        <div className="word-audio">
          <audio controls>
            <source src={meaning?.phonetics[0]?.audio || ""} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        </div>
        <div className="meaning">
          <ul>
            {meanings.map((meaning, indx) => (
              <li key={indx}>
                <p className="meaning-element">{meaning?.definition || ""}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
