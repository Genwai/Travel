let defaultCity = "厦门"
try {
    if (localStorage.city) {
        defaultCity = localStorage.city

    }
} catch (error) {}

export default {
    city: defaultCity

}