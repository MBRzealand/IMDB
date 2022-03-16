import React from 'react';
import "./DataStyle.css"

const DataDisplay = () => {
    return (
        <div className={"data-page"}>

            <div className={"found-results"}>
                <div><h5 className={"result-text"}>Results for: <span>Blabla</span></h5></div>
                <h5 className={"title-text"}>Titles</h5>
                <div >
                    <ul className={"title-list"}>
                        <li>blabla</li>
                        <li>blabla</li>
                        <li>blabla</li>
                        <li>blabla</li>
                    </ul>
                </div>
            </div>

            <div className={"search-cards"}>
                <div className={"category-search"}>

                </div>
                <div className={"advanced-search"}>

                </div>
            </div>

        </div>
    );
};

export default DataDisplay;
