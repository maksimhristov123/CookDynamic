
export const SectionHeading = (props) => {
    return (
        
        <div className="section_heading_container">
            <h2 className="section_heading">
                {props.heading}
            </h2>
            <p>
                {props.heading_text}
            </p>
        </div>
    )
}