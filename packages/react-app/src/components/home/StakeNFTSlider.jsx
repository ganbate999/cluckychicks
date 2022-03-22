import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function StakeNFTSlider() {

    const nftData = [
        {
            id: '1',
            nftURL: `./assets/image/1.png`
        },
        {
            id: '2',
            nftURL: `./assets/image/2.png`
        },
        {
            id: '3',
            nftURL: `./assets/image/3.png`
        },
        {
            id: '4',
            nftURL: `./assets/image/7.png`
        },
        {
            id: '5',
            nftURL: `./assets/image/10.png`
        }
    ];

    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1368,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {nftData.map((data, index) => (
                <div className="NFTitem" key={index}>
                    <img src={data.nftURL} className="NFTitem_img" width="190px" height="190px" />
                    <a className="nftstake-btn">Stake</a>
                </div>
            ))}
        </Slider>
    );
}