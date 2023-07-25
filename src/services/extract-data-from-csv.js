import axios from "axios";

const extractDataFromCSV = async (url) => {
    const data = await axios.get("https://renewables.ninja/api/data/pv?local_time=true&format=json&header=true&lat=52.4081812&lon=-1.510477&date_from=2019-01-01&date_to=2019-12-31&dataset=merra2&capacity=1&system_loss=0.1&tracking=0&tilt=35&azim=180&raw=true")
    return Object.values(data.data.data);
}
export default extractDataFromCSV;