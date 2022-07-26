

export const Intro = (props) => {
    return (
        <section className="hero inner_hero">

            <img className="bg_hero_mobile bg_inner" src={props.mobileIntroImage} alt="" />
            <img className="bg_hero_desktop bg_inner" src={props.desktopIntroImage} alt="" />

            <div className="hero_container">

                <h1 className="hero_heading home_hero_heading">{props.introHeading}</h1>
            </div>

        </section>
    )
}