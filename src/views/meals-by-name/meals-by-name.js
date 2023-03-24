import { ref } from "vue"
import { computed } from 'vue'
import store from "../../store"
import Card from "../../components/card/Card.vue";
export default {
    components:{
        Card,
    },
    setup(props) {
        let searchKey = ref("");
        let meals = computed(()=>store.state.searchedMeals)
        function handleSearch() {
            store.dispatch('searchMeals', searchKey.value);
        }
        return {
            searchKey,
            meals,
            handleSearch
        }
    }
}