import { ref, onMounted } from "vue"
import axiosClient from "../../utils/axiosClient";
export default {
    setup(props) {
        const ingredients = ref([]);
        async function getIngredients() {
            await axiosClient.get('list.php?i=list').then(response => {
                if (response.status == 200) {
                    let data = response.data.meals;
                    ingredients.value = data;
                }
            })
        }

        onMounted(() => {
            getIngredients();
        })

        return {
            ingredients
        }
    }
}