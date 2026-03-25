export const HeroSection = () => {
    return (
        <section className="hero">
            <h1 className="visually-hidden">Строительная компания ООО "БАРС-В"</h1>
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__left">
                        <h2 className="hero__title">О нас</h2>
                        <p className="hero__text"></p>
                    </div>
                    <div className="hero__right">
                        <ul className="hero__list">
                            <li className="hero__item">26+ лет на рынке</li>
                            <li className="hero__item">300млн.руб годовой оборот за 2025</li>
                            <li className="hero__item">Надежность</li>
                            <li className="hero__item">Опыт</li>
                            <li className="hero__item">Качество</li>
                            <li className="hero__item">Соблюдение сроков</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}