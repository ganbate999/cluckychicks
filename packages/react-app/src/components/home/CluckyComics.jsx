import React from 'react';

export default function CluckyComics() {

    return (
        <div className="cluckycomicsContainer" id="cluckycomicsContainer">
            <div className='comicsSVG'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
                </svg>
            </div>
            <h2 className='comics_title'>CLUCKY COMICS</h2>
            <div className='comics_content'>
                <div className='comics_img'>
                    <img src="./assets/image/Cover.png" />
                </div>
                <div className='comics_text'>
                    <div className='comics_one'>
                        <h3 className='comics_subtitle'>WHAT ARE CLUCKY COMICS?</h3>
                        <p className='comics_subtext'>Clucky Comics are anime inspired digital comic NFTs that are readable through our online E-Reader, or as PDFs on your device of choice.<br />
                            Not only are we providing the Comics as digital versions, but are working towards setting up a physical print run to get them in your hands.<br />
                            All Comic holders will get a FREE physical copy, when we print in batches.</p>
                    </div>
                    <div className='comics_one'>
                        <h3 className='comics_subtitle'>PROFESSIONAL ARTISTRY + VARIANTS</h3>
                        <p className='comics_subtext'>We are hiring a variety of artists to create these visual masterpieces.<br />
                            Not only do we want one concise focused primary art style, we want to see artists imaginations run wild. These will come in the form of Comic ‘Variants’.<br /> These will be rarer Covers to collectors and have their own unique benefits.</p>
                    </div>
                    <div className='comics_one'>
                        <h3 className='comics_subtitle'>FIRST EDITIONS</h3>
                        <p className='comics_subtext'>There will be 5 randomly distributed First Edition comics per Comic Issue.<br />
                            Each First Edition will provide a 5% sales royalty to the holder from that particular Comic Issue.<br />
                            So that is 25% of each Comic Sale going to First Edition holders.</p>
                    </div>
                    <div className='comics_one'>
                        <h3 className='comics_subtitle'>CHICK PARTICIPATION</h3>
                        <p className='comics_subtext'>Each issue of Clucky Comics will have between 3 and 5 ‘Guest Chicks’, that will show up for a cameo.<br />
                            These could just be background roles, or even main storyline parts that can carry on for multiple issues.<br />
                            Each Chick that stars will earn a 5% royalty for each issue they are part of.</p>
                    </div>
                </div>
            </div>
            <div className='comicsBottomSVG'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
                </svg>
            </div>
        </div>
    );
}