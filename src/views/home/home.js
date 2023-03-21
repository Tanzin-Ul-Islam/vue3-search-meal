import { mapState } from "vuex"
import { ref } from "vue"
import axiosClient from "../../utils/axiosClient";
export default {
    name: 'Home',

    setup(props) {
        let list = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));

        function getAllIngredients() {
            axiosClient.get('list.php?i=list').then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error)
            })
        }

        return {
            list,
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