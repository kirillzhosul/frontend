import React, {useState, useEffect} from "react";

const StatusBadge = function ({url, label}){
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        fetch(url, {
            mode: "cors"
        }).then(() => {
            setIsLoading(false);
            setIsSuccess(true);
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
    return (
        <div className="row justify-content-center">
            <div className="col-md-auto">
                <div className="display-1 mt-5 mb-3">
                   API Statuses
                </div>
                <ul class="list-group list-group-flush">
                    <StatusBadge label="Notes API" url="https://notes.kirillzhosul.site/api"/>
                </ul>
            </div>
        </div>
    )
}

export default StatusPage;