import React from 'react';
import './index.css';
import {useDispatch} from "react-redux";
import {getVideoList,videoListLayout} from '../../../store/video/videoSlice';
import { searchUrl } from './../../../lib/api';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const dispatch = useDispatch();
    const inputRef=useRef();
    const navigate=useNavigate()

    const onSearch = (keyword) => {
        const url = searchUrl(keyword)
        dispatch(getVideoList(url))
        dispatch(videoListLayout('list'))
        navigate('/search')
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const keyword =inputRef.current.value;
        keyword && onSearch(keyword) ;
        inputRef.current.value = '';
    }

    return (
       <form className='search' onSubmit={onSubmit}>
            <input
                placeholder='검색'
                type="text"
                className='searchInput'
                ref={inputRef}
            />
            <button className='searchBtn'>
                <img src="/images/search.png" alt="search icon" className='searchIcon' />
            </button>
        </form>
    );
};

export default SearchForm;