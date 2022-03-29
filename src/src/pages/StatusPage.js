import React, {useState, useEffect} from "react";

const StatusBadge = function ({url, label}){
    /// @description Badge element that fetches url and shows it`s status.

    // Status.
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    // Fetching page.
    useEffect(() => {
        fetch(url, {
            mode: "cors",
        }).then((response) => {
            response.json().then((response) => {
                setIsLoading(false);
                setIsSuccess("success" in response);
            }).catch(() => {
                setIsLoading(false);
                setIsSuccess(false);
            });
        }).catch(() => {
            setIsLoading(false);
            setIsSuccess(false);
        })
    }, [url, setIsSuccess, setIsLoading]);

    return (
        <li className="list-group-item">
            {label} &nbsp;
            {isLoading && <span className="badge alert-primary">Loading...</span>}
            {!isLoading && <span>
                {isSuccess && <span className="badge alert-success">OK!</span>}{!isSuccess && <span className="badge alert-danger">Failed!</span>}
            </span>}
        </li>
    )
}

const StatusPage = function(){
    /// @description Page with statuses of all projects APIs.
    return (
        <div className="row justify-content-center">
            <div className="col-md-auto">
                <div className="display-1 mt-5 mb-3">
                   API Statuses
                </div>
                <div className="display-6">
                   Here you may check API statuses of my projects.
                </div>
                <hr/>
                <ul class="list-group list-group-flush">
                    <li className="list-group"><StatusBadge label="Notes API" url="https://notes.kirillzhosul.site/api"/></li>
                </ul>
            </div>
        </div>
    )
}

export default StatusPage;