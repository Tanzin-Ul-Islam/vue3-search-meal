import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import axiosClient from "../../utils/axiosClient";
import useHelperHook from "../../hook";
export default {
    setup(props) {
        let route = useRoute();
        let mealId = route.params.id;
        let mealData = ref({});
        const { scrollToTop } = useHelperHook();
        async function getMealData() {
            await axiosClient.get(`lookup.php?i=${mealId}`).then(response => {
                if (response.status == 200) {
                    let data = (response.data.meals.length > 0) ? response.data.meals[0] : {};
                    mealData.value = data;
                }
            });
        }

        onMounted(async () => {
            scrollToTop();
            await getMealData();
        })

        return {
            mealData,
        }

    }
}