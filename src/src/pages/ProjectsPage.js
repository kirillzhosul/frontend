// Libraries.
import React from "react";

const ProjectsPage = function(){
    /// @description Page with projects.
    return (
        <div className="text-center">
            <div className="row justify-content-center">
                <div className="col-md-auto">
                    <p className="mt-5 display-1">
                        Projects
                    </p>
                    <div className="display-6">
                        My work.
                    </div>
                    <hr/>
                    <div className="row text-center justify-content-center">
                        <div className="col-md-auto">
                            <a href="https://florgon.space" className="display-6">
                                florgon.space
                            </a><br/>
                            Owner, working on APIs (Auth API, Chat API, and many more), web interfaces. FastAPI, ReactJS. <a href="https://github.com/florgon">Florgon GitHub with projects</a>
                        </div>
                    </div>
                    <p></p>
                    <div className="row text-center justify-content-center">
                        <div className="col-md-auto">
                            <a href="https://gofralang.github.io/" className="display-6">
                                gofralang.github.io
                            </a><br/>
                            Frozen (Abondoned) concatenative programming language (Core is written using Python).
                        </div>
                    </div>
                    <p></p>
                    <div className="row text-center justify-content-center">
                        <div className="col-md-auto">
                            <span className="display-6">
                               Much more...
                            </span><br/>
                            A lot of projects which may not be noticed here, be in my GitHub, or even be in private repository!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  

export default ProjectsPage;  