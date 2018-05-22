export default {
    cityChange(state, city) {

        state.city = city
            // localStorage.city = city
        try {
            if (localStorage.city) {
                localStorage.city = city
            }
        } catch (error) {}
    }
}