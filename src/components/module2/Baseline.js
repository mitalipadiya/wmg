import { useEffect, useState } from "react";
import Form from "./Form";

const Baseline = () => {
    const [data, setData] = useState()
    useEffect(() => {
        setData({
            "title": "Baseline scenario",
            "subTitle": "Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.",
            "inputs": [
                {
                    "heading": "Average annual electricity consumption",
                    "subHeading": "Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel",
                    "value": "",
                    "unit": "",
                    "type": "input",
                    "id": 1
                },
                {
                    "heading": "",
                    "subHeading": "",
                    "value": "",
                    "unit": "",
                    "type": "input",
                    "id": 1
                },
                {
                    "heading": "",
                    "subHeading": "",
                    "value": "",
                    "unit": "",
                    "type": "input",
                    "id": 1
                }
            ],
            "calculated": [
                {
                    "heading": "",
                    "value": "",
                    "unit": "",
                    "type": "calculated",
                    "id": 1
                }
            ]
        })
    }, [])
    return <div>
        <Form data={data} />
    </div>
}
export default Baseline;