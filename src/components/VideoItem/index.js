import React from 'react';
import './index.css';
import {convertDate} from './../../lib/common'
import {useNavigate} from 'react-router-dom';
const VideoItem = ({item,value}) => {
  let id;
  if(typeof value.id === 'string'){
      id=value.id
  }else if(typeof value.id === 'object') {
      id=value.id.videoId;
  }
  const navigate=useNavigate();
  const goToWatch = () => {
    navigate(`/watch?id=${id}&channelId=${item.channelId}`)
  }
    return (
        <li className='videoItem videoItemGrid' onClick={goToWatch}>
          <div className='thumbnail-img-box'>
            <img src={item.thumbnails.medium.url} alt='비디오썸네일' className='thumbnail-img' />
          </div>
          <div className='descriptionBox'>
            <div className='description'>
                  <h2 className='videoTitle'>{item.title}</h2>
                  <h3 className='channelTitle'>{item.channelTitle}</h3>
                  <p className='date'>{convertDate(item.publishedAt)}</p>
            </div>
          </div>
        </li>
    );
};

export default VideoItem;