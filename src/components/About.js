import React from "react"

export default function About(props) {


    return (
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className={`accordion-button bg-${props.abouts} text-${props.aboutText}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        <strong>Accordion Item #1</strong>
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className={`accordion-collapse collapse bg-${props.abouts} `}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by
                        default, until the collapse plugin adds the appropriate classes that we
                        use to style each element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default variables. It's
                        also worth noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className={`accordion-button bg-${props.abouts} text-${props.aboutText}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        <strong>Accordion Item #2 </strong>
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse bg-${props.abouts}`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden
                        by default, until the collapse plugin adds the appropriate classes that
                        we use to style each element. These classes control the overall
                        appearance, as well as the showing and hiding via CSS transitions. You
                        can modify any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit
                        overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className={`accordion-button bg-${props.abouts} text-${props.aboutText}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        <strong>Accordion Item #3</strong>
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className={`accordion-collapse collapse bg-${props.abouts}`} 
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body ">
                        <strong>This is the third item's accordion body.</strong> It is hidden
                        by default, until the collapse plugin adds the appropriate classes that
                        we use to style each element. These classes control the overall
                        appearance, as well as the showing and hiding via CSS transitions. You
                        can modify any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit
                        overflow.
                    </div>
                </div>
            </div>
        </div>

    )
}
