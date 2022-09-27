import { createSlice } from "@reduxjs/toolkit";
import wordList from "../words.json";

const shuffleWords = (words, count) => {
  const rand = [...words].sort(() => 0.5 - Math.random());
  const cut = rand.slice(0, count);
  return cut.map((word) => ({ ...word }));
};

export const typingSlice = createSlice({
  name: "typing",
  initialState: {
    words: shuffleWords(wordList.words, 30),
    time: 60,
    correct: 0,
    incorrect: 0,
    selectedLang: "english",
  },
  reducers: {},
});

export default typingSlice.reducer;
