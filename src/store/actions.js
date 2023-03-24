import axiosClient from "../utils/axiosClient";
export function searchMeals(context, payload) {
    axiosClient.get(`search.php?s=${payload}`).then(respose => {
        if (respose.status == 200) {
            let data = respose.data.meals;
            context.commit('setSearchedMeals', data);
        }
    })
}