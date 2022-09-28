import { createSlice } from "@reduxjs/toolkit";
import wordList from "../words.json";

const wordCount = 30;

const shuffleWords = (words, count) => {
  const rand = [...words].sort(() => 0.5 - Math.random());
  const cut = rand.slice(0, count);
  return cut.map((word) => ({ ...word, status: "" }));
};

export const typingSlice = createSlice({
  name: "typing",
  initialState: {
    count: wordCount,
    words: shuffleWords(wordList.words, wordCount),
    time: 60,
    correct: 0,
    incorrect: 0,
  },
  reducers: {
    setStatus: (state, action) => {
      const word = state.words.find((word) => word.id === action.payload.id);

      if (action.payload.status === "correct") {
        state.correct += 1;
      } else if (action.payload.status === "incorrect") {
        state.incorrect += 1;
      }

      word.status = action.payload.status;
    },
  },
});

export default typingSlice.reducer;
export const { setStatus } = typingSlice.actions;
