import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {

    return (
        <span>

            {/* Style will be inherited from the parent element */}
            <Typewriter
                words={['Innovation', 'Business', 'Resell', 'Startups', 'Shops', 'Home', 'Office', 'Apartment', 'Automation', 'Scalability', 'Security']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />


        </span>
    )
}

export default TypeWriter;