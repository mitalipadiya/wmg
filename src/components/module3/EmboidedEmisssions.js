import { useEffect, useState } from "react";
import Table from "../UI/Table";
import "./EmboidedEmissions.scss";
import ComparePortfolios from "./ComparePortfolios";
import StackedBarChart from "../UI/StackedBarChart";
import axios from "axios";
const EmbodiedEmissions = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [allTabs, setAllTabs] = useState([]);
    const [currentGraphData, setCurrentGraphData] = useState([]);
    const [comparisionData, setComparisionData] = useState([]);
    const [isCompareSelected, setIsCompareSelected] = useState(false);
    const [portfolioDeleted, setPortfolioDeleted] = useState();
    const [currency, setCurrency] = useState("£");
    const [gbpRate, setGbpRate] = useState(1);

    const colorCodes = ["#DFE566", "#F7A47B", "#79D4F1", "#9092BE", "#FBD07B", "#BA80C6", "#AC9A81", "#A8A8A9", "#F4A3A0", "#B0E195"]

    useEffect(() => {
        if (allTabs.length == 0) {
            setAllTabs(prev => [...prev, []]);
        }
        axios.get(`https://v6.exchangerate-api.com/v6/cbff060a311477c8e65035f5/latest/USD`)
            .then((response) => {
                const rates = response.data.conversion_rates;
                setGbpRate(rates.GBP);
                console.log("rates ==>", rates);
            })
            .catch((error) => console.error('Error fetching exchange rates:', error));
    }, []);

    useEffect(()=>{
        if(portfolioDeleted) {
            if(allTabs.length > 1) {
                setCurrentTabIndex(portfolioDeleted - 1)
            }else {
                setCurrentTabIndex(0);
            }
        }else {
            setPortfolioDeleted(false);
        }
    }, [portfolioDeleted]);

    useEffect(() => {
        if (allTabs && allTabs[currentTabIndex] && allTabs[currentTabIndex].length && (allTabs[currentTabIndex].length == 1) ) {
            const groupedData = allTabs[currentTabIndex].reduce((data, obj) => {
                const key = obj["country"];
                if (!data[key]) {
                    data[key] = [];
                }
                data[key].push(obj);
                return data
            }, {});
            console.log(groupedData);
            let graphData = [];
            Object.keys(groupedData).forEach(ele => {
                let sectors = {};
                let totalCost = 0;
                groupedData[ele].forEach(dt => {
                    sectors[dt.sector] = dt.emission;
                    totalCost += parseFloat(dt.cost);
                })
                graphData.push({ name: ele, ...sectors, ...{ cost: totalCost } });
            })
            setCurrentGraphData([...graphData]);
        }
    }, [allTabs, currentTabIndex])

    useEffect(() => {
        if (isCompareSelected) {
            let compareData = [];

            allTabs.forEach((data, index) => {
                let totalEmission = 0;
                let totalCost = 0;
                data.forEach(ele => {
                    totalEmission += parseFloat(ele.emission);
                    totalCost += parseFloat(ele.cost);
                })
                compareData.push({
                    name: "Portfolio" + (index + 1),
                    emission: totalEmission,
                    color: colorCodes[(index) % (colorCodes.length - 1)],
                    cost: totalCost
                });
            })
            setComparisionData(prev => {
                return [...compareData];
            });
        }
    }, [isCompareSelected])

    const addEntry = (id, country, sector, subSector, cost, emission, countryVal) => {
        let newEntry = {
            id: id,
            country: country,
            sector: sector,
            subSector: subSector,
            cost: cost,
            emission: emission,
            countryVal: countryVal
        }
        setAllTabs(prev => {
            prev[currentTabIndex].push(newEntry);
            return [...prev];
        })
    }

    const updateTableData = (newTableData) => {
        setAllTabs(prev => {
            prev[currentTabIndex] = [...newTableData];
            return [...prev];
        })
    }
    const addTab = () => {
        setIsCompareSelected(false);
        setCurrentTabIndex(allTabs.length);
        setAllTabs(prev => [...prev, []]);
    }

    const deletePortfolio = param => event => {
        setAllTabs(prev => {
            let newPortfolios = [];
            newPortfolios = prev.filter((data, index) => index != param);
            setPortfolioDeleted(param);
            return [...newPortfolios];
        })
    }
    const deleteEntry = (id) => {
        setAllTabs(prev => {
            let currentData = prev[currentTabIndex];
            currentData = currentData.filter(data => data.id != id);
            prev[currentTabIndex] = [...currentData];
            return [...prev];
        })
    }

    return <div className="module3-form-main">
        <h2 className="form-heading">Embodied emissions calculator</h2>
        <div className="emboided-subheading">
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="conversion-main">
                <p className="conversion-cost">Cost in</p>
                <div className="conversion-div">
                    <span className={`pound ${currency == "£" ? 'selected' : ''}`} onClick={()=>{setCurrency("£")}}>£</span>
                    <span className={`usd ${currency == "$" ? 'selected' : ''}`} onClick={()=>{setCurrency("$")}}>$</span>
                </div>
            </div>

        </div>
        <ul class="nav nav-tabs">
            <div>
                {allTabs.map((ele, index) => {
                    return <li class="nav-item">
                        <a class={`nav-link ${index == currentTabIndex && !isCompareSelected ? 'active' : ''}`} onClick={() => { setCurrentTabIndex(index); setIsCompareSelected(false) }}>Portfolio {index + 1} {index == currentTabIndex && !isCompareSelected && allTabs.length > 1 ? <span className="delete-portfolio" onClick={deletePortfolio(currentTabIndex)}></span> : null}</a>
                    </li>
                })}

                <a onClick={addTab}><span className="add-tab"></span></a>
            </div>

            {
                allTabs.length > 1 ? <li class="nav-item compare-portfolios">
                    <a class={`nav-link ${isCompareSelected ? 'active' : ''}`} onClick={() => setIsCompareSelected(true)}>Compare Portfolios</a>
                </li> : null
            }
        </ul>
        {
            isCompareSelected ? <ComparePortfolios data={comparisionData} currency={currency}/> : <><div className="main-container-emboided">
                <Table 
                className="forms-table" 
                addEntry={addEntry} 
                tableData={allTabs.length ? allTabs[currentTabIndex] : []} 
                deleteEntry={deleteEntry} 
                currency={currency} 
                gbpRate={gbpRate} 
                updateTableData={updateTableData}/>
            </div>
                {
                    allTabs.length && allTabs[currentTabIndex] && allTabs[currentTabIndex].length ? <div>
                        <h3 className="group-heading">GRAPHICAL VIEW</h3>
                        <StackedBarChart data={currentGraphData} currency={currency} />
                    </div> : null
                }</>
        }


    </div>
}
export default EmbodiedEmissions;