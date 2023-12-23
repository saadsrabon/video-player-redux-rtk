import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideos } from "../../features/videos/videoSlice";

export default function VideGrid() {
    const videos = useSelector((state) => state.videos?.videos);
    const dispatch = useDispatch();
  
    useEffect(() => {
       dispatch(fetchVideos())
    }, [dispatch]);

    // making desicion what to render
    let content;
    if(videos.isLoading){
        content = <div className="col-span-12">Loading...</div>
    }
    else if(videos.error){
        content = <div className="col-span-12">some error happened</div>
    }
    else{
        content = videos.map((video) => {
            return <VideoGridItem video={video} key={video.id} />;
        });
    }
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                   {content}

                    {/* <div className="col-span-12">some error happened</div> */}
                </div>
            </section>
        </section>
    );
}
