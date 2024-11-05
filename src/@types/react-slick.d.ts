declare module 'react-slick' {
    import { Component } from 'react';

    interface SliderProps {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        fade?: boolean;
        appendDots?: (dots: React.ReactNode) => React.ReactNode;
        customPaging?: (i: number) => React.ReactNode;
        // Add other props as needed
    }

    export default class Slider extends Component<SliderProps> {}
}