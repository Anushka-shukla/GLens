import backBtnImg from '../../assets/images/arrow_back.svg';
import flashOff from '../../assets/images/flash_off.svg';
import history from '../../assets/images/history.svg';
import more from '../../assets/images/more.svg';
import searchMore from '../../assets/images/searchIconLens.svg';
import pic from '../../assets/images/WhatTheFont.png';
import "../Lens/styles/Lens.css";

const Lens = () => {
    return (
        <div className='lens-screen-layout'>
            <div className="lens-top-row">
                <div className='lens-left-layout'>
                    <button className="back-btn">
                        <img src={backBtnImg} alt="back-img" />
                    </button>

                    <button className="flash-btn">
                        <img src={flashOff} alt="flash-img" />
                    </button>
                </div>

                <div className='lens-text'>Google lens</div>

                <div className='lens-right-layout'>
                    <button className="clock-btn">
                        <img src={history} alt="clock-img" />
                    </button>

                    <button className="more-btn">
                        <img src={more} alt="more-img" />
                    </button>
                </div>

                <div class="lens-overlay">
                    <div class="corner top-left"></div>
                    <div class="corner top-right"></div>
                    <div class="corner bottom-left"></div>
                    <div class="corner bottom-right"></div>
                </div>
            </div>

            <div>
                <div className='left-gallery-btn gallery-corner'>
                    <div className='gallery-btn'>
                        <img src={pic} alt='pic' />
                    </div>

                </div>
                <div className='bottom-search-icon'>
                    <div className="search-img-btn-container">
                        <div className='search-big-circle'>
                            <div className='search-big-small'>
                                <button className='search-img'>
                                    <img src={searchMore} alt="search-more" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )


}

export default Lens;