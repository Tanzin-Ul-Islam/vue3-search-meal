import { ref, onMounted } from "vue"
import { useRoute } from "vue-router";
import axiosClient from "../../utils/axiosClient";
import Card from '../../components/card/Card.vue';
export default {
    components: {
        Card,
    },
    setup(props) {
        const list = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        const letter = ref("a");
        let mealList = ref([]);
        const router = useRoute();
        async function getData() {
            await axiosClient.get(`search.php?f=${letter.value}`).then(response => {
                if (response.status == 200) {
                    let data = (response.data.meals?.length > 0 && response.data.meals != null) ? response.data.meals : [];
                    mealList.value = data;
                }
            })
        }

        async function handleClick(data) {
            letter.value = data.toLowerCase();
            await getData();
        }

        onMounted(async () => {
            if (router.params.letter) {
                letter.value = router.params.letter;
            }
            await getData();
        });

        return {
            list,
            letter,
            mealList,
            handleClick
        }
    }
}