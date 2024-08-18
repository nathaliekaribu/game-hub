import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '395862e6bad744e4a209c9dd5883cccc'
    }
}
)   