import {Sidebar} from 'flowbite-react'
import { useEffect, useState } from 'react';
import {HiArrowSmRight, HiUser} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'

const DashSidebar = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if(tabFromUrl) {
        setTab(tabFromUrl);
      }
    }, [location.search])

    const handleSignout = async() => {
      try{
        const res = await fetch(`/api/user/signout`,{
          method: 'POST'
        })
        const data = await res.json();
  
        if(!res.ok){
          console.log(data.message);
        }else{
          dispatch(signoutSuccess());
        }
      }catch(error){
        console.log('signout error',error.message);
      }
    }
    
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                    <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'User'} labelColor='dark' as='div'>
                        Profile
                    </Sidebar.Item>
                    <Sidebar.Item active icon={HiArrowSmRight} className='cursor-pointer' as='div' onClick ={handleSignout}>
                        Sign Out
                    </Sidebar.Item>
                </Link>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar