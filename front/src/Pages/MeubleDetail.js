import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function MeubleDetail(props) {
    let name = props.match.params.name;
    const [meuble, setMeuble] = useState([]);
    const [materials, setMaterials] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/meuble/" + name)
            .then((res) => res.json())
            .then((json) => setMeuble(json.data));
    }, [name]);
    useEffect(() => {
        fetch("http://localhost:8000/api/material/all")
            .then((res) => res.json())
            .then((json) => setMaterials(json.data));
    }, [name]);

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Materials",
            },
        },
    };
    const labels = [];
    const nums = [];
    const stock = [];
    meuble.map((item, key) => {
        item.materials.map((mat, key) => {
            return labels.push(mat.name);
        });
    });
    meuble.map((item, key) => {
        return item.materials.map((mat, key) => {
            return nums.push(mat.qty_needed);
        });
    });
    labels.map((item) => {
        return materials.map((mat) => {
            if (item === mat.name) {
                stock.push(mat.quantity);
            }
            return stock;
        });
    });

    const data = {
        labels,
        datasets: [
            {
                label: "Quantity needed",
                data: nums,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Quantity in stock",
                data: stock,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    return (
        <div className="dashboard-body">
            <div className="chart-block">
                {meuble.map((item, key) => {
                    return (
                        <div key={key}>
                            <h3>
                                {item.category} : {item.name}
                            </h3>
                            <div className="meuble-key">
                                {item.materials.map((mat, key) => {
                                    return (
                                        <Link
                                            to={
                                                "/dashboard/material/" +
                                                mat.name
                                            }
                                            key={key}
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-primary mb-2"
                                            >
                                                {mat.name}
                                            </button>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                <Line options={options} data={data} />
            </div>
        </div>
    );
}
