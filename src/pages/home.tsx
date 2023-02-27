import Header from "../component/header";
import MainSlider from "../component/mainSlider";
import Summery from "../component/summery";
import Discount from "../component/discount";
import VideoPlayer from "../component/videoPlayer";
import Blogs from "@/component/blogs";
import Card from "@/component/Card";
import Footer from "@/component/footer";

const MainPage = () => {
    return (
        <>
            <Header />
            <MainSlider />
            <Summery />
            <Discount />
            <VideoPlayer />
            <Card />
            <Blogs />
            <Footer />
        </>
    )

}
export default MainPage