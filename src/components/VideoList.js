import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map(item => {
        return <VideoItem key= {item.id.videoId} video={item} onVideoSelect={onVideoSelect}/>
    })
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}
export default VideoList;