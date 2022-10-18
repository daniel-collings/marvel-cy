import HeroForm from "components/HeroForm"
import React from "react"
import { useLocation } from "react-router-dom"
import marvel from '../data/marvelCharacters.json'

export default function Details() {
    const { pathname } = useLocation()
    const [heroData, setHeroData] = React.useState<any | undefined>()

    function getHeroes(param: string) {
        if (!param) {
            setHeroData(undefined)
        }
        else {
            const hero = marvel.characters.find(f => `/${f.heroName.replaceAll(" ", "")}` === param)
            setHeroData(hero)
        }
    }

    React.useEffect(() => {
        getHeroes(pathname)
    }, [pathname])

    return (
        <div data-test={`marvel-container`}>
            <div data-test={`marvel-${pathname}`}>
                <h2>{pathname}</h2>
                <HeroForm data={heroData} />
            </div>
        </div>
    )
}
