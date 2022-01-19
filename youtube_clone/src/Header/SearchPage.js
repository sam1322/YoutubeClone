import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import {videoRow} from './videoRow'
function SearchPage() {
    
            return (
                <div className='searchPage'>
                    <div className='searchPage__filter'>
                        <TuneOutlinedIcon/>
                        <h2>FILTER</h2>
                    </div> 
                    <hr/>
                    <ChannelRow
                        image="https://yt3.ggpht.com/ytc/AKedOLRAxNbtcDnQiDH0Rj6NTbnztrkHntW1TDEBMLtWgg=s176-c-k-c0x00ffffff-no-rj-mo"
                        channel="James Scholz"
                        verified
                        subs="472K"
                        noOfVideos="406"
                        description="study with me 
                        send me mail!
                        James Scholz
                        P.O. BOX 9373
                        Salt Lake City, UT 
                        84109"
                    />
                    {videoRow.map(video=>
                        <div className="videoRow">
                            <VideoRow 
                                views={video.views}
                                subs={video.subs}
                                description={video.description}
                                timestamp={video.timestamp}
                                channel={video.channel}
                                title={video.title}
                                image={video.image}
                            />
                        </div>
                        )}
                </div>
            )
}

export default SearchPage
