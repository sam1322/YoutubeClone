import React from 'react'
import VideoCard from './VideoCard'
import './RecommendedVideos.css'
import {videos} from './videos'
function RecommendedVideos() {
    return (
        <div className='recommendedvideos'>
            <h2>Recommended</h2>
            <div className='recommendedvideos__videos'>
                {
                    videos.map(
                        ({title,views,timestamp,channelImage,channel,image},i)=>
                        <div className="videoCard" key={i}><VideoCard 
                        title={title} 
                        views={views} 
                        timestamp={timestamp} 
                        channelImage={channelImage} 
                        channel={channel} 
                        image={image} 
                         />
                        </div>)
                }
            </div>
            </div>
    )
}

export default RecommendedVideos
