import { mapState } from "vuex"
import { ref } from "vue"
import axiosClient from "../../utils/axiosClient";
export default {
    name: 'Home',

    setup(props) {
        let list = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
        let ingredients = ref([]);

        async function getAllIngredients() {
            await axiosClient.get('list.php?i=list').then(response => {
                if (response.status == 200) {
                    let data = response.data.meals;
                    ingredients.value = data;
                }
            }).catch(error => {
                console.log(error)
            })
        }

        return {
            list,
            ingredients,
            getAllIngredients
        }
    },

    created() {
        this.getAllIngredients();
    },



    computed: {
        ...mapState(['meals'])
    }
}