import React from 'react';
// import FeaturedSlider from '@/components/FeaturedSlider';
import ConsultationSection from '@/components/ConsultationSection';

const HomePage = () => {
    return (
        <div className="text-center m-0 p-0"> {/* Remove any default margin and padding */}
            {/* Display the FeaturedSlider component */}
            {/* <FeaturedSlider /> */}
            
            {/* Display Consultation Section */}
            <ConsultationSection />
            
        </div>
    );
};

export default HomePage;