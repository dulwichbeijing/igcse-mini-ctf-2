<template>
    <div class="task" :class="{correct: isCorrect || solved}">
        <div class="task__title">
            <h4>Task {{ taskNo + 1}}: {{ name }}</h4>
            <strong>{{ points }}</strong>
        </div>
        <p>{{ detail }}</p>
        <pre v-if="monospace">{{ monospace }}</pre>
        <ul>
            <li v-for="(file, index) in files" :key="index">
                <a :href="file" target="_blank">{{`Link ${index + 1}`}}</a>
            </li>
        </ul>
        <div class="task__answer">
            <label :for="md5">
                Enter your flag here:
            </label>
            <input :name="md5" type="text" :disabled="checking || isCorrect" v-model="flag" placeholder="dcbCTF{...}">
            <button @click="checkFlag" :disabled="checking || isCorrect">{{ (checking) ? "Checking..." : "Check" }}</button>
        </div>
        <div v-if="message !== ''" class="task__message">{{ message }}</div>
    </div>    
</template>
<script>
import md5 from "md5"
import store from "../store"

export default {
    name: 'Task',
    data() {
        return {
            flag: "",
            active: true,
            checking: false,
            isCorrect: false,
            message: "",
        }
    },
    props: {
        taskNo: Number,
        name: String,
        points: Number,
        detail: String,
        monospace: String,
        files: Array,
        md5: String,
        solved: Boolean
    },
    methods: {
        checkFlag() {
            this.checking = true
            console.log(md5(this.flag))
            setTimeout(()=> {
                this.isCorrect = md5(this.flag) === this.md5
                if (this.isCorrect) {
                    this.checking = false
                    this.message = "That is correct!"
                    this.active = false
                    store.commit('pushPoints', {points: this.points, number: this.taskNo})
                } else {
                    this.checking = false
                    this.message = "That flag is not correct, please try again! 🤨"
                }
            }, 500)
        }
    }
}
</script>
<style scoped>
    .task {
        border: 1px solid #eee;
        padding: 15px 15px 30px;
        border-radius: 5px 5px;
        margin-top: 20px;
        margin-bottom: 40px;
        position: relative;
        overflow: hidden;
        background: #fff;
    }

    .task:after {
        content: "";
        position: absolute;
        height: 15px;
        bottom : 0;
        left: 0;
        width: 100%;
        display: block;
        background: linear-gradient(-90deg, #ec911a, #E9190F, #820263, #2364AA, #065143);
    }

    .task.correct {
        pointer-events: none;
        position: relative;
    }

    .task.correct:before {
        content: "😁";
        font-size: 750%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.15);
        text-shadow: 0px 0px 15px #aaa;
    }

    .task__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .task__title h4 {
        font-size: 120%;
        margin: 5px 0;
    }
    
    .task__title strong {
        font-size: 175%;
        opacity: 0.8;
    }

    .task__title strong:after {
        content: "points";
        font-size: 60%;
        margin-left: 4px;
    }

    .task pre {
        background: #efefef;
        padding: 10px 15px;
        line-height: 1.75;
        text-align: left;
        overflow: auto;
        border-radius: 5px;
        white-space: pre-wrap;
    }

    .task__answer {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #eee;
        margin-top: 15px;
        padding-top: 15px;
        padding-bottom: 1px;
    }

    .task__answer label {
        align-self: center;
        margin-right: 10px;
    }

    .task__answer input {
        margin-right: 15px;
        flex-grow: 1;
    }

    .task__answer button {
        min-width: 120px;
    }

    .task__message {
        margin-top: 15px;
        text-transform: uppercase;
        font-size: 80%;
        opacity: 0.8;
    }
</style>