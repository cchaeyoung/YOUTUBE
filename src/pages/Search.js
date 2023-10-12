import React from 'react';
import VideoList from './../components/VideoList';
import SideMenu from '../components/SideMenu';
import {useSelector} from "react-redux";

const Search = () => {
    const {listLayout} = useSelector((state) => state.video);
    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
           {listLayout && <VideoList display={listLayout} />}
          </section>
        </>
    );
};

export default Search;