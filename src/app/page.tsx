import React from 'react';
import FeaturedSlider from '@/components/FeaturedSlider';
import ConsultationSection from '@/components/ConsultationSection';
import AboutUs from '@/components/AboutUs';
import Impact from '@/components/Impact';

const HomePage: React.FC = () => {
    return (
        <div className="text-center m-0 p-0">
            <FeaturedSlider />
            <AboutUs />
            <Impact />
            <ConsultationSection />
        </div>
    );
};

export default HomePage;
