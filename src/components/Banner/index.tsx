import './style.css';

interface BannerProps {
    imageAddress: string,
    alternativeText?: string
}

function Banner({ imageAddress, alternativeText } :BannerProps) {
    return (
        <header className='banner'>
            {/* <img src="./images/banner.png" alt="The main banner of the page"/> */}
            <img src={imageAddress} alt={alternativeText}/>
        </header>
    );

}

export default Banner;