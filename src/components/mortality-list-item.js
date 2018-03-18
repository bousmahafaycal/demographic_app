import React from 'react'
import Flag from "./flag"
import { ColumnChart } from 'react-chartkick';
window.Chart = require('chart.js');

const xTitle = "Age";
const yTitle = "% de mortalité";

const MortalityListItem = ({mortality}) => {
    const formatedDataMale = formatMortalityData(mortality.male);
    const formatedDataFemale = formatMortalityData(mortality.female);
    return (
        <tr>
            <td><Flag country={mortality.country} className={"flag-medium"}/></td>
            <td className={"col-md-6"}><ColumnChart xtitle={xTitle} ytitle={yTitle} data={formatedDataMale} max={30}/></td>
            <td className={"col-md-6"}><ColumnChart xtitle={xTitle} ytitle={yTitle} data={formatedDataFemale} max={30}/></td>
        </tr>
    )
};

function formatMortalityData(mortality) {
    const filteredData = mortality.filter((data) => {
        if (data.age >= 101){
            return false;
        } else {
            return data;
        }
    });
    const array = filteredData.map((data) => {
        return [Number((data.age).toFixed(0)), Number((data.mortality_percent).toFixed(0))]
    });
    return array;
}

export default MortalityListItem