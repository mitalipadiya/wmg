import { useEffect, useState } from "react";
import Form from "./Form";

const Baseline = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(
      {
          "key": "Baseline",
          "data": {
              "title": "Baseline scenario",
              "subTitle": "Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.",
              "data": [
                  {
                      "heading": "",
                      "data": {
                          "inputs": [
                              {
                                  "heading": "Average annual electricity consumption",
                                  "subHeading": "Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel",
                                  "value": "",
                                  "unit": "kWh",
                                  "type": "input",
                                  "id": 1
                              },
                              {
                                  "heading": "Average annual gas consumption",
                                  "subHeading": "Quis enim unde. Rerum corrupti voluptatum",
                                  "value": "",
                                  "unit": "kWh",
                                  "type": "input",
                                  "id": 2
                              },
                              {
                                  "heading": "Emission factor for grid electricity",
                                  "subHeading": "Et voluptatum harum. In rerum necessitatibus quis. Inventor",
                                  "value": "",
                                  "unit": "kgCO2e/kWh",
                                  "type": "input",
                                  "id": 3
                              },
                              {
                                  "heading": "Emission factor for grid gas",
                                  "subHeading": "Et voluptatum harum. In rerum necessitatibus quis. Inventor",
                                  "value": "",
                                  "unit": "kgCO2e/kWh",
                                  "type": "input",
                                  "id": 4
                              }
                          ],
                          "calculated": [
                              {
                                  "heading": "Annual operational emissions for grid electricity",
                                  "value": "",
                                  "unit": "",
                                  "type": "calculated",
                                  "id": 1
                              },
                              {
                                  "heading": "Annual operational emissions for grid gas",
                                  "value": "",
                                  "unit": "",
                                  "type": "calculated",
                                  "id": 2
                              },
                              {
                                  "heading": "Total baseline emissions",
                                  "value": "",
                                  "unit": "",
                                  "type": "calculated",
                                  "id": 3
                              }
                          ]
                      }
                  }
              ]
          }
      });
  }, []);
  return (
    <div>
      <Form data={data?.data} />
    </div>
  );
};
export default Baseline;
