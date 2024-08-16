import React, { useState } from 'react';
import { feedback } from '../assets/index'; // Image to display on the left side
import '../App.css'; 
import { 
    review1, review2, review3, review4, review5,
    review6, review7, review8, review9, review10,
} from '../assets/index';

const testimonials = [
    {
        id: 1,
        image: review1,
        text: 'Great service provider. Highly recommend to new freelancers and businessmen to avail their services and register yourselves with FBR.',
        name: 'Rai Ghulam Qadir',
    },
    {
        id: 2,
        image: review2,
        text: 'Befiler has provided a great service in filing the tax return, each step was guided properly and if there were any concerns they do clear it before proceeding to process.',
        name: 'Abdul Moiz',
    },
    {
        id: 3,
        image: review3,
        text: 'It was very difficult to file the tax. A common citizen was not properly guided to file the tax. But with this app it’s the easiest thing to do.',
        name: 'Yawar Khan',
    },
    {
        id: 4,
        image: review4,
        text: 'Its a great service to deal with the FBR issues. staff is very cooperative, helpful and responds quickly.',
        name: 'Muhammad Umair Umer',
    },
    {
        id: 5,
        image: review5,
        text: 'I was struggling in tax filing, Befiler helped me in the process. The team is really professional and competent in their work. Highly recommend.',
        name: 'Rizwan Muhammad',
    },
    {
        id: 6,
        image: review6,
        text: 'My experience have been quite good so far. They do focus on the significance of customer satisfaction.',
        name: 'Mamoon Javaid',
    },
    {
        id: 7,
        image: review7,
        text: 'The team was very responsive and helpful in guiding me through the tax filing process.',
        name: 'Sarah Ali',
    },
    {
        id: 8,
        image: review8,
        text: 'Befiler made the entire process of filing taxes straightforward and easy to understand.',
        name: 'Ali Hassan',
    },
    {
        id: 9,
        image: review9,
        text: 'A very professional service that made tax filing much easier than I expected.',
        name: 'Kiran Shah',
    },
    {
        id: 10,
        image: review10,
        text: 'Excellent support and guidance throughout the entire tax filing process. Highly recommended!',
        name: 'Aisha Khan',
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonial-slider bg-pink-100">
            <h1 className="title">What people have to say about us</h1>
            <div className="content">
                <div className="image-container">
                    <img src={feedback} alt="Feedback" className="main-image" />
                </div>
                <div className="testimonials-container">
                    <button className="up-button" onClick={prevTestimonial}>&#9650;</button>
                    <div className="testimonials">
                        {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
                            <div key={testimonial.id} className="testimonial">
                                <div className="testimonial-content">
                                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                                    <div className="testimonial-text-container">
                                        <p className="testimonial-text">"{testimonial.text}"</p>
                                        <p className="testimonial-name">— {testimonial.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="down-button" onClick={nextTestimonial}>&#9660;</button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
