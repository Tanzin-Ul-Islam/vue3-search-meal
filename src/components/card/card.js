import { ref, watch } from "vue";
export default {
    props: ['meal'],
    setup(props) {
        const mealData = ref(props.meal);
        watch(() => props.meal, (newVal, oldVal) => {
            mealData.value = newVal;
        })
        return {
            mealData
        }
    }
}