import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const TwoSidedChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Data
        // const data = [
        //   { x: 10, y: 20, color: "#9092BE" },
        //   { x: 23, y: 25, color: "#F4A3A0" },
        //   { x: 15, y: 30, color: "#FBD07B" },
        //   { x: 30, y: 35, color: "#AC9A81" },
        //   { x: 8, y: 40, color: "#79D4F1" },
        // ];

        if (data.length > 0) {
            // Chart dimensions
            const width = 600;
            const height = 500;
            const margin = { top: 20, right: 350, bottom: 40, left: 60 };

            // Create SVG container
            const svg = d3.select(chartRef.current)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`);

            // Create scales
            const xScale = d3.scaleLinear().domain([0, d3.sum(data, d => d.totalOperational)]).range([0, width]);
            const yScale = d3.scaleLinear().domain([d3.min(data, d => d.costEffectiveness) - 200, d3.max(data, d => d.costEffectiveness) + 200]).range([height, 0]);

            // Create x-axis
            svg.append('g')
                .attr('transform', `translate(0,${yScale(0)})`)
                .call(d3.axisBottom(xScale));

            // Create x-axis label
            svg.append('text')
                .attr('class', 'axis-label')
                .attr('x', width / 2)
                .attr('y', height + margin.bottom - 10)
                .attr('text-anchor', 'middle')
                .text('CO2 emissions savings (tCO2e)');


            // Create y-axis
            svg.append('g')
                .call(d3.axisLeft(yScale));

            // Create y-axis label
            svg.append('text')
                .attr('class', 'axis-label')
                .attr('transform', 'rotate(-90)')
                .attr('x', -height / 2 + 70)
                .attr('y', -margin.left + 15)
                .attr('text-anchor', 'middle')
                .text('tCO2e');

            let prevX = 0; // Store previous x value

            // Create bars
            svg.selectAll('.bar')
                .data(data)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', d => {
                    const currentX = xScale(d.totalOperational);
                    const currentPrevX = prevX; // Store previous x value
                    prevX = currentX + currentPrevX; // Update previous x value
                    return currentPrevX; // Return previous x value
                })
                .attr('y', d => (d.costEffectiveness >= 0) ? yScale(d.costEffectiveness) : yScale(0))
                // .attr('y', d => yScale(d.costEffectiveness))
                .attr('width', d => { return xScale(d.totalOperational) }) // Adjust bar width as needed
                .attr('height', d => Math.abs(yScale(d.costEffectiveness) - yScale(0)))

                // .attr('height', d => height - yScale(d.costEffectiveness))
                .attr('fill', d => d.color);

            // Create legend
            const legend = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${width + 50},${(height - data.length * 20) / 2})`);

            data.forEach((d, i) => {
                legend.append('rect')
                    .attr('x', 0)
                    .attr('y', i * 20)
                    .attr('width', 10)
                    .attr('height', 10)
                    .attr('fill', d.color);

                legend.append('text')
                    .attr('x', 20)
                    .attr('y', i * 20 + 9)
                    .attr('dy', '.35em')
                    .text(d.technologyOptions);
            });
        }
    }, [data]);

    return <>{chartRef ? <svg ref={chartRef} /> : null}</>;
};

export default TwoSidedChart;
