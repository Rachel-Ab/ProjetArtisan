import React, { useEffect, useState, useRef, MouseEvent } from "react";
import type { InteractionItem } from "chart.js";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Meubles() {
    const [meubles, setMeubles] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/meuble/all")
            .then((res) => res.json())
            .then((json) => setMeubles(json.data));
    }, []);
    useEffect(() => {
        fetch("http://localhost:8000/api/category/all")
            .then((res) => res.json())
            .then((json) => setCategory(json.data));
    }, []);
    const labels = [];
    // meubles.map((meuble) => {
    //     return labels.push(meuble.name);
    // });
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Meubles quantity",
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    };
    let dataset = [];
    category.map((cat) => {
        let data = [];
        meubles.map((meuble) => {
            if (meuble.category === cat.name) {
                data.push(meuble.quantity);
                labels.push(meuble.name);
            }
            return data;
        });
        return dataset.push({
            label: cat.name,
            data: data,
            backgroundColor: `rgba(255, 99, 132, 0.5)`,
        });
    });
    // console.log(dataset);
    const data = {
        labels,
        // datasets: dataset,
        datasets: [
            {
                label: "Meuble",
                data: meubles.map((meuble) => meuble.quantity),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            // {
            //     label: "Etagere",
            //     data: meubles.map((meuble) => meuble.quantity),
            //     backgroundColor: "rgba(54, 162, 235, 0.5)",
            // }
        ],
    };

    const chartRef = useRef();
    // const onClick = (event) => {
    //     console.log(getElementAtEvent(chartRef.current, event));
    // };
    const printElementAtEvent = (element: InteractionItem[]) => {
        const { datasetIndex, index } = element[0];

        return data.labels[index];
    };

    const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
        const { current: chart } = chartRef;
        if (!chart) {
            return;
        }
        let meuble = printElementAtEvent(getElementAtEvent(chart, event));
        console.log(meuble);
        window.location.href = "/dashboard/meuble-detail/" + meuble;
    };
    return (
        <div className="dashboard-body">
            <div className="chart-block">
                <Bar
                    options={options}
                    data={data}
                    ref={chartRef}
                    onClick={onClick}
                />
            </div>
        </div>
    );
}
