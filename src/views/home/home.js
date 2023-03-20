import { mapState } from "vuex"
export default {
    name: 'Home',

    data(){
        return{
            list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }
    },



    computed: {
        ...mapState(['meals'])
    }
}