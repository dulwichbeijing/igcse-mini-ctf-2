<template>
    <div class="footer">
        <div class="points">
            <span>{{currentScore}}</span>
            <span>points</span>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import store from "../store";

export default {
    name: 'Points',
    data() {
        return {
            newColour: "",
            colourOptions: [
                {
                    name: 'Dulwich',
                    value: 'dhsz'
                },
                {
                    name: 'Fan',
                    value: 'f'
                },
                {
                    name: 'Grenville',
                    value: 'g'
                },
                {
                    name: 'Raleigh',
                    value: 'r'
                },
                {
                    name: 'Spenser',
                    value: 's'
                }
            ]
        }
    },
    computed: mapState(['colourScheme', 'currentScore']),
    methods: {
        setColour() {
            store.commit("updateColour", this.newColour)
        }
    }
}
</script>
<style scoped>
    .footer {
        border-top: 2px solid #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px;
        font-weight: bold;
        text-align: left;
        background: #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .points span:first-child {
        display: inline-block;
        text-align: right;
        min-width: 40px;
        margin-right: 5px;
    }

    .house {
        margin-right: 40px;
    }

    .house select {
        margin-left: 10px;
    }
</style>