import React from 'react';
import FeaturedSlider from '@/components/FeaturedSlider';
import ConsultationSection from '@/components/ConsultationSection';
import AboutUs from '@/components/AboutUs';
import Impact from '@/components/Impact';

const HomePage = () => {
    return (
        <div className="text-center m-0 p-0"> {/* Remove any default margin and padding */}
            {/* Display the FeaturedSlider component */}
            <FeaturedSlider />
            <AboutUs />
            <Impact />
            
            {/* Display Consultation Section */}
            <ConsultationSection />
            
        </div>
    );
};

export default HomePage;