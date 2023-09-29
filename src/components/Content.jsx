import React from 'react'
import Avatar from '../assets/avatar.png'
import Pin from '../assets/pin.png'
import Twitter from '../assets/twitter.png'
import Url from '../assets/url.png'
import Office from '../assets/office-building.png'

function Content({user}) {
    const {avatar_url, bio, followers, following, public_repos, blog, location, name, company, twitter_username, created_at, login} = user
  return (
    <div className='bg-white text-[#697C9A] dark:bg-[#1E2A47] dark:text-white px-8 py-5 rounded-lg shadow-lg'>
        <div className='grid grid-cols-custom row-cols-5'>

        {/* <div className='flex gap-5 py-5'> */}
            <img src={avatar_url ? avatar_url : "Not Available"} width="130px" className='col-span-1 lg:row-span-5 mr-8 rounded-full'/>
            <div className='flex flex-col col-span-1 lg:grid lg:grid-cols-2 lg:grid-rows-2'>
                <p className='font-bold text-black text-[26px] dark:text-white'>{name ? name.split(" ")[1] : ""}</p>
                <p className='text-[#0079FF] lg:col-start-1 lg:col-end-2'>{login ? login : "Not Available"}</p>
                <p className='lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2'>{created_at ? `Joined ${created_at.split('T')[0]}` : "Not Available"}</p>
            </div>
        {/* </div> */}
        <div className='my-5 col-span-2 lg:col-start-2 lg:col-end-3'>
            <p>{bio}</p>
        </div>
        <div className='col-span-2 lg:col-start-2 lg:col-end-3 bg-[#F6F8FF] dark:bg-[#141D2F] py-5 mb-5 flex justify-evenly items-center rounded-lg'>
            <div className='flex flex-col gap-2'>
                <p className='font-normal text-[13px]'>Repos</p>
                <p className='text-black dark:text-white font-bold text-[22px]'>{public_repos ? public_repos : "Not Available"}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-normal text-[13px]'>Followers</p>
                <p className='text-black dark:text-white font-bold text-[22px]'>{followers ? followers : "Not Available"}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-normal text-[13px]'>Following</p>
                <p className='text-black dark:text-white font-bold text-[22px]'>{following ? following : "Not Available"}</p>
            </div>
        </div>

        <div className='grid md:grid-cols-2 col-span-2 lg:col-start-2 lg:col-end-3 gap-5 mb-5'>
            <div className='flex gap-3 items-center'>
                <img src={Pin}/>
                <p>{location ? location : "Not Available"}</p>
            </div>
            <div className='flex gap-3 items-center'>
                <img src={Url}/>
                <a href={blog ? blog : ""} target='_blank'>{blog ? blog : "Not Available"}</a>
            </div>
            <div className='flex gap-3 items-center'>
                <img src={Twitter}/>
                <p>{twitter_username ? twitter_username : "Not Available"}</p>
            </div>
            <div className='flex gap-3 items-center'>
                <img src={Office}/>
                <p>{company ? company : "Not Available"}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Content