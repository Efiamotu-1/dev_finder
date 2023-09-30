import React, { useState } from 'react'
import Searchicon from '../assets/search.png'

function Search({setUser, setError, error}) {
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
                if(data.message){
                    setError(data.message)
                }else {

                    setUser(data)
                }
                setSearchValue("")
            }
        }catch(err) {
            console.error(err)
        }
    }
  return (
    <div className='bg-white dark:bg-[#1E2A47] px-3 flex items-center justify-between rounded-2xl h-[60px] shadow-lg mb-5'>
        <div className='flex gap-3 items-center justify-stretch'>
        <span><img src={Searchicon} /></span>
        <input type="text" value={searchValue} onChange={(e) => {
            setSearchValue(e.target.value)
            setError("")
        }} className='outline-none bg-transparent dark:placeholder:text-slate-400 dark:text-white' placeholder='Search Github Username'/>
        </div>
        <div className='flex gap-3 items-center'>
        <p className='text-red-500'>{error ? 'No results' : ''}</p>
        <button className='bg-[#0079FF] text-white px-5 py-3 rounded-xl hover:bg-[#60ABFF] active:bg-[#60ABFF]' onClick={handleSearch}>search</button>
        </div>
    </div>
  )
}

export default Search