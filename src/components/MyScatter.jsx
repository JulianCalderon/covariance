import React from 'react'
import { Scatter } from 'react-chartjs-2'

const MyScatter = (props) => {
    const config = {
        labels: ['Scatter'],
        datasets: [{
            label: 'Esfuerzo',
            data:props.data,
            trendlineLinear: {
                style: "rgba(255,105,180, .8)",
                lineStyle: "solid",
                width: 2
            }
        }],
      };
    return (
        <Scatter data={config} />
    )
}

export default MyScatter
