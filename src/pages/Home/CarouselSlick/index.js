import ListFilms from './../ListFilms'

import Slider from "react-slick";
import './CarouselSlick.css'


const CarouselSlick = ({ listFilm }) => {
    
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2
    };

    const renderFilms = () => {
        return (
            listFilm?.map((film, index) => {
                return (
                    <ListFilms film={film} key={index} />
                )
            })
        )
    }



    return (
        <div>
            <Slider {...settings}>
                {renderFilms()}
            </Slider>
        </div >
    );
}

export default CarouselSlick
