import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './layout'
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

ReactDOM.render(
    // <React.StrictMode>
    //     <Layout/>
    // </React.StrictMode>
    <React.Suspense fallback>
        <I18nextProvider i18n={i18n}>
            <Layout />
        </I18nextProvider>
    </React.Suspense>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

