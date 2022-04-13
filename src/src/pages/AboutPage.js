// Libraries.
import React from "react";

const ProjectsPage = function(){
    /// @description Page with projects.
    return (
        <div className="text-center">
            <div className="row justify-content-center">
                <div className="col-md-auto">
                    <p className="mt-5 display-1">
                        About me
                    </p>
                    <div className="display-6">
                        I am a programmer-developer
                    </div>
                    <hr/>
                    <div>
                        Mostly web and game development. With overall code experience for 3-5 years total.
                    </div>
                    <p>
                        Having experience at hackatons (offline/online), as winner and participiant.
                    </p>
                    <p>
                        
                        <p><h2>Web development</h2></p>
                        <hr className="w-50 mx-auto"/>
                        <div className="row justify-content-center">
                            <div className="col">
                                <p><h4>Python</h4></p>
                                <div>Flask, FastAPI, Django.</div>
                                <div>Docker, PostgreSQL.</div>
                                <i>Working on APIs, scripts for more than 1 year</i>
                            </div>
                            <div className="col">
                                <p><h4>JavaScript</h4></p>
                                <div>ReactJS, JQuery.</div>
                                <i>Working on websites for my APIs and many more</i>
                            </div>
                            <div className="col">
                                <p><h4>SQL</h4></p>
                                <div>SQL, noSQL.</div>
                                <div>PostgreSQL, MongoDB, mySQL.</div>
                            </div>
                            <div className="col">
                                <p><h4>HTML, CSS</h4></p>
                                <div>Bootstrap CSS.</div>
                            </div>
                        </div>

                        <br></br>
                        <p><h2>Game development</h2></p>
                        <hr className="w-50 mx-auto"/>
                        <div className="row justify-content-center">
                            <div className="col">
                                <p><h4>GML</h4></p>
                                <i>Working on a lot games, for more than 5 years</i>
                            </div>
                            <div className="col">
                                <p><h4>C#</h4></p>
                                <div>Unity.</div>
                                <i>Working on some games, some applications</i>
                            </div>
                        </div>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
  

export default ProjectsPage;  