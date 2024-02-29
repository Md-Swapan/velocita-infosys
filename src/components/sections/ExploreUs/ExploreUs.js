import './exploreus.css'
import SliderLeftToRight from "./Sliders/SliderLeftToRight";
import SliderRightToLeft from "./Sliders/SliderRightToLeft";
import { digitalMarketingSliderData, internationalCallcenterData, softWareDevelopmentSliderData } from './utils/utils';
export default function ExploreUs() {
    return (
        <div className="container py-5">
            <div className='py-4 d-flex align-items-center justify-content-between'>
                <h1 className='exploreUs_title'>Explore<span>US</span></h1>
                <button className='explore_more_btn'>Explore more...</button>
            </div>
            <SliderRightToLeft badgeTitle={'International Call Center'} products={internationalCallcenterData} />
            <SliderLeftToRight badgeTitle={"Software Development"} products={softWareDevelopmentSliderData}/>
            <SliderRightToLeft badgeTitle={'Digital Marketing'} products={digitalMarketingSliderData}/>
            <SliderLeftToRight badgeTitle={"Software Development"} products={softWareDevelopmentSliderData}/>
        </div>
    );
}
