import React, { useState } from 'react'
import Searchicon from '../assets/search.png'

function Search({setUser}) {
    const apiUrl = ``;
    const [searchValue, setSearchValue] = useState("")
    async function handleSearch() {
        try{
            if(searchValue !== '') {
                const res = await fetch(`https://api.github.com/users/${searchValue}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    },
                })
                const data = await res.json()
                setUser(data)
                console.log(data)
                setSearchValue("")
            }
        }catch(err) {
            console.log(err)
        }
    }
  return (
    <div className='bg-white dark:bg-[#1E2A47] px-3 flex items-center justify-between rounded-2xl h-[60px] shadow-lg mb-5'>
        <div className='flex gap-3 items-center justify-stretch'>
        <span><img src={Searchicon} /></span>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='outline-none bg-transparent dark:placeholder:text-slate-400 dark:text-white' placeholder='Search Github Username'/>
        </div>
        <button className='bg-[#0079FF] text-white px-5 py-3 rounded-xl dark:hover:bg-red-500' onClick={handleSearch}>search</button>
    </div>
  )
}

export default Search