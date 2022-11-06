import React, { useRef} from 'react'

//import apiCalls
import { fetchHeroes } from '../api/apiCalls'

export default function SearchBar({ setter }) {
    let input = useRef('') 
  
    const handleClick = async (e) => {
        e.preventDefault()
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
        <input type="text" placeholder="Search Hero" ref={input}/>
        <button onClick={handleClick}>Search</button>
    </form>
  )
}
