function HeroRight() {
    return (
        <div className="rounded-xl btn-outline">
            <div className="btn-outline-inner bg-bg-body">
                {/* Dots */}
                <div className="flex items-center px-4 lg:px-8 py-5 gap-3">
                    <div className="w-3 h-3 rounded-full bg-text-orange-code"></div>
                    <div className="w-3 h-3 rounded-full bg-text-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-text-green-500"></div>
                </div>

                {/* Code block */}
                <div className="max-w-[700px] px-4 lg:px-8 py-4 lg:py-8 border-t-2 border-indigo-900">
                    <pre className="whitespace-pre-wrap text-text2">
                        <code>
                            <div>
                                <span className="me-2 text-text-pink-code-100">
                                    const
                                </span>
                                <span className="me-2 ">developer</span>
                                <span className="me-2 text-text-pink-code-100">
                                    =
                                </span>
                                <span>{"{"}</span>
                            </div>
                            <div>
                                <span className="ms-8 me-2">name:</span>
                                <span className="text-text-yellow-300">
                                    {`'`}Nguyễn Tiến Khởi{`'`}
                                </span>
                                <span>{","}</span>
                            </div>
                            <div className="ms-8 me-2 text-text-yellow-300">
                                <span className="text-text2">skills:</span>
                                <span className="text-text2">{"["}</span>
                                <span>{`'`}</span>
                                <span>HTML</span>
                                <span>{"', '"}</span>
                                <span>CSS</span>
                                <span>{"', '"}</span>
                                <span>Javascript</span>
                                <span>{"', '"}</span>
                                <span>ReactJS</span>
                                <span>{"', '"}</span>
                                <span>Redux</span>
                                <span>{"', '"}</span>
                                <span>NextJS</span>
                                <span>{"', '"}</span>
                                <span>NodeJS</span>
                                <span>{"', '"}</span>
                                <span>NestJS</span>
                                <span>{"', '"}</span>
                                <span>SQL</span>
                                <span>{"', "}</span>
                                <span>MongoDB</span>
                                <span>{","}</span>
                                <span className="text-text2">{"],"}</span>
                            </div>
                            <div>
                                <span className="ms-8 me-2 ">hardWorker:</span>
                                <span className="text-text-orange-code">
                                    true
                                </span>
                                <span>,</span>
                            </div>
                            <div>
                                <span className="ms-8  me-2 ">
                                    quickLearner:
                                </span>
                                <span className="text-text-orange-code">
                                    true
                                </span>
                                <span>,</span>
                            </div>
                            <div>
                                <span className="ms-8 me-2 ">
                                    problemSolver:
                                </span>
                                <span className="text-text-orange-code">
                                    true
                                </span>
                                <span>,</span>
                            </div>
                            <div>
                                <span className="ms-8 me-2 text-text-green-500">
                                    hireable:
                                </span>
                                <span className="text-text-orange-code">
                                    function
                                </span>
                                <span>{"() {"}</span>
                            </div>
                            <div>
                                <span className="me-2 text-text-orange-code">
                                    return
                                </span>
                                <span>{`(`}</span>
                            </div>
                            <div>
                                <span className="ms-5 ps-3 text-text-blue-100">
                                    this.
                                </span>
                                <span className="me-2 ">hardWorker</span>
                                <span className="text-text-yellow-300">
                                    &amp;&amp;
                                </span>
                            </div>
                            <div>
                                <span className="ms-5 ps-3 text-text-blue-100">
                                    this.
                                </span>
                                <span className="me-2 ">problemSolver</span>
                                <span className="text-text-yellow-300">
                                    &amp;&amp;
                                </span>
                            </div>
                            <div>
                                <span className="ms-5 ps-3 text-text-blue-100">
                                    this.
                                </span>
                                <span className="me-2">skills.length</span>
                                <span className="me-2 text-text-yellow-300">
                                    &gt;=
                                </span>
                                <span className="text-text-orange-code">5</span>
                            </div>
                            <div>
                                <span className="ms-5 me-2 ">{`);`}</span>
                            </div>
                            <div>
                                <span className="ms-8">{`};`}</span>
                            </div>
                            <div>
                                <span>{`};`}</span>
                            </div>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default HeroRight;
