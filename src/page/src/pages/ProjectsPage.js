// Libraries.
import React from "react";

const ProjectsPage = function(){
    /// @description Page with projects.
    return (
        <div className="text-center">
            <div className="row justify-content-center">
                <div className="col-md-auto">
                    <p className="mt-5 display-1">
                        Contacts
                    </p>

                    <div className="row">
                        <div className="col">
                            <a href="https://notes.kirillzhosul.site/" className="btn btn-primary btn-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-stickies" viewBox="0 0 16 16">
                                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"/>
                                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"/>
                                </svg>
                                &nbsp;Notes
                            </a>
                        </div>
                        
                        <div className="col">
                            <a href="/" className="btn btn-primary btn-lg disabled">
                                This page
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  

export default ProjectsPage;  