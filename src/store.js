import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage,
  })],
  state: {
    colourScheme: "dhsz",
    currentScore: 0,
    tasks: [
      {
        name: "The first one is free",
        points: 100,
        detail: "Quickly test that the website is working for you, the answer is:",
        monospace: "dcbCTF{dulwich}",
        files: [],
        md5: "faa85bfd7c5d216076e78b611229b137", // done
        solved: false
      },
      {
        name: "Only zeroes and ones",
        points: 200,
        detail: "As you know everything is binary, even this flag...",
        monospace: "01100100 01100011 01100010 01000011 01010100 01000110 01111011 01100001 01110011 01100011 01101001 01101001 01011111 01110111 01101000 01100001 01110100 01011111 01111001 01101111 01110101 01011111 01100100 01101001 01100100 01111101 ",
        files: [],
        md5: "da2b0955e5f7045900267229e2a293a3",
        solved: false
      },
      {
        name: "Let's get logical",
        points: 200,
        detail: "Only one combination of inputs will have a positive output, format your flag by giving the letter then the binary value. E.g.:",
        monospace: "dcbCTF{a0b0c0d0e0} // if all inputs are 0",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-2/main/public/task-files/task3.png"],
        md5: "cf5146a3e42808ba5810174ea05077dd",
        solved: false
      },
      {
        name: "What does Caesar say?",
        points: 200,
        detail: "Decode this flag using one of the oldest encryption methods...",
        monospace: "tsrSJV{adyvu_yd_jxu_rqsa}",
        files: [],
        md5: "caed85f00dd7cf802c2db7ac3aa5a340",
        solved: false
      },
      {
        name: "Inspector Morse",
        points: 200,
        detail: "I picked up this message while a boat was passing by, what does it say? Make sure you use the usual flag format.",
        monospace: ".-- . .- - .... . .-. / .-. . .--. --- .-. - --..-- / -.-. .-.. --- ..- -.. -.-- / ... -.- .. . ... --..-- / .--. --- --- .-. / ...- .. ... .. -... .. .-.. .. - -.-- / .- -. -.. / .- / ..-. .-.. .- --. / --- ..-. / -... . . .--. -... . . .--. -... --- --- .--. -... --- --- .--.",
        files: [],
        md5: "8f3bd12ca206533e7abbf33a56fa72bb",
        solved: false
      },
      {
        name: "Lost in sound",
        points: 400,
        detail: "Did you know it's possible to hide messages in audio files by using different frequencies? Aphex Twin did it!",
        monospace: "",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-2/main/public/task-files/task6.wav"],
        md5: "88fe387a462aadc030c3973d4e1f0a09", // done
        solved: false
      },
      {
        name: "Who is this?",
        points: 400,
        detail: "I was making some ASCII art but something went wrong, there's supposed to be a new line every 200 characters. Can you tell me who this member of staff is? Give your answer in the format:",
        monospace: "dcbCTF{firstname_lastname}",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-2/main/public/task-files/task7.txt"],
        md5: "cd970d0f2191d796cedc111eb60ba5da",
        solved: false
      }
    ]
  },
  mutations: {
    pushPoints(state, task) {
      state.currentScore = state.currentScore + task.points
      state.tasks[task.number].solved = true
    },
    updateColour(state, newColour) {
      state.colourScheme = newColour
    }
  }
});