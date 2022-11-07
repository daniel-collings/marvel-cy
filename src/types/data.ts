export type Character = {
    id: string
    name: string
    meter: number
    heroName: string
    img: string
}

export type CharactersResponse = {
    characters: Character[]
}