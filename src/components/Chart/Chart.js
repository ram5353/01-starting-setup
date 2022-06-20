import './Chart.css'
import ChartBar from './ChartBar';

const Chart = props => {

    const dataPointsValuesArray = props.dataPoints.map(datapoint => datapoint.value)
    const totalmaximum = Math.max(...dataPointsValuesArray)
    return (
        <div className='chart'>
            {props.dataPoints.map(datapoint => 
            <ChartBar 
                key={datapoint.label}
                value={datapoint.value} 
                maxValue={totalmaximum} 
                label={datapoint.label}/>)}
        </div>
    );

}

export default Chart