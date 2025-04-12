import backBtnImg from '../../assets/images/arrow_back.svg';
import flashOff from '../../assets/images/flash_off.svg';
import history from '../../assets/images/history.svg';
import more from '../../assets/images/more.svg';
import searchMore from '../../assets/images/searchIconLens.svg';
import pic from '../../assets/images/WhatTheFont.png';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Lens/styles/Lens.css";
import ImageSearchContext from '../../components/ImageSearchContext';

const Lens = () => {
    const [capturedImage, setCapturedImage] = useContext(ImageSearchContext);
    const [showCropModal, setShowCropModal] = useState(false);
    const fileInputRef = useRef(null);

    const navigate = useNavigate();

    const handleSearchImage = () => {
        if (capturedImage) {
            navigate('/search/image');
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setCapturedImage(reader.result);
            setShowCropModal(true);
        };
        reader.readAsDataURL(file);
        console.log(file)

    };

    const handleLensBtn = () => {
        // Open file input (gallery)
        fileInputRef.current?.click();
    };
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

                <div className="lens-overlay">

                    <div className="corner top-left"></div>
                    <div className="corner top-right"></div>
                    <div className="corner bottom-left"></div>
                    <div className="corner bottom-right"></div>


                </div>
                {capturedImage && (
                    <div className="preview-image-wrapper">
                        <img src={capturedImage} alt="Uploaded Preview" className="preview-image" />
                    </div>
                )}
            </div>

            <div>
                <div className='left-gallery-btn gallery-corner' onClick={handleLensBtn}>
                    <div className='gallery-btn'>
                        <img src={pic} alt='pic' />
                    </div>

                </div>
                <div className='bottom-search-icon' onClick={handleSearchImage}>
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
            {/* Hidden file input for gallery upload */}
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileUpload}
            />

        </div>
    )


}

export default Lens;