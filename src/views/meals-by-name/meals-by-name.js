import { ref, onMounted } from "vue"
import { computed } from 'vue'
import store from "../../store"
import Card from "../../components/card/Card.vue";
import { useRoute } from "vue-router";
export default {
    components: {
        Card,
    },

    setup(props) {
        const router = useRoute();
        let searchKey = ref("");
        let meals = computed(() => store.state.searchedMeals)
        function handleSearch() {
            store.dispatch('searchMeals', searchKey.value);
        }

        onMounted(() => {
            if (router.params.name) {
                searchKey.value = router.params.name;
                handleSearch();
            }else{
                handleSearch();
            }
        })


        return {
            searchKey,
            meals,
            handleSearch
        }
    }
}