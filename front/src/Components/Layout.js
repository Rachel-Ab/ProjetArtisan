import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout(props) {
    return (
        <>
            <Header />
            <Sidebar />
            {props.children}
            <Footer />
        </>
    );
}
