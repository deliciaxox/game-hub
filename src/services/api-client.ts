import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'd5b9167e77e446c49aa7ab5f6c591a62'
    }
})

