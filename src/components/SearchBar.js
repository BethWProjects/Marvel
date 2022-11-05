import React, { useRef} from 'react'

export default function SearchBar({ setter }) {
    let input = useRef('') //not a controlled component, update later
  
    const handleClick = async (e) => {
        let value = input.current.value
        if (value === '') return

        try {
            let heroes = await fetchHeroes(value)
            setter(heroes)
        } catch (error) {
            console.error(error)
        }
    }
    return (
    <form>
        <input type="text" placeholder="Search Here" ref={input}/>
        <button onClick={handleClick}>Search</button>
    </form>
  )
}
