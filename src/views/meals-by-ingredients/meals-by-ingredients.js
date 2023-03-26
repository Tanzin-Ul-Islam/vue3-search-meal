import { ref, onMounted } from "vue"
import axiosClient from "../../utils/axiosClient";
import { useRoute } from "vue-router";
import Card from "../../components/card/Card.vue";
import useHelperHook from '../../hook/index'
export default {
    components: {
        Card,
    },
    setup(props) {
        const route = useRoute();
        const { scrollToTop } = useHelperHook();
        const ingredient = ref("");
        const meals = ref([]);
        async function getMeals() {
            await axiosClient.get(`filter.php?i=${ingredient.value}`).then(response => {
                if (response.status == 200) {
                    let data = response.data.meals?.length > 0 && response.data.meals != null ? response.data.meals : [];
                    meals.value = data;
                    console.log(data);
                }
            })
        }

        onMounted(() => {
            scrollToTop();
            if (route.params.ingredient) {
                ingredient.value = route.params.ingredient;
            }
            getMeals();
        })

        return {
            meals,
        }
    }
}