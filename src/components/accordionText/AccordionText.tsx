import { useState } from 'react';
import styles from './accordionText.module.css';

interface ReadMoreProps {
    text: string;
}
const AccordionText: React.FC<ReadMoreProps> = () => {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };

    return (
        <div className={styles['accordion-container']}>
            <h3>An introduction to Villa Castelo</h3>

            <p>
                What is the story behind Villa Castelo, what was your inspiration to create it?

                Originally, we wanted a holiday house for ourselves and it was only intended for personal use. But then we thought that maybe other people would want to stay in Alentejo and decided to open it up to guests. It’s a private area with privileged views toward a castle and we wanted to share that.
            </p>
            {isShowMore && (
                <p>
                    Our idea was to create something minimalistic that didn’t have a big impact on the landscape. It’s subtle. We also wanted something that was the opposite of what you usually find in Alentejo, which is old houses that are cold and uncomfortable in the wintertime. Along the coast, you can find lots of modern houses but not near the Spanish border where we are. So we invested in all the best materials and insulation, as well as heated floors. 

I’m a physics engineer and my husband has an IT company, so we worked with an architect on the project. We wanted a lot of wood and a lot of glass to enjoy the landscape outside. I love big windows and the feeling of not being sure whether you’re inside or outside. Sometimes you see big houses with lots of rooms. But then everyone stays together in one room. I wanted a design where you could be inside or outside and feel as though you were all together. 

How would you describe the atmosphere and the interior design of the villa?

When I’m there, I feel like I’m in a bubble and time slows down. The days are really long and quiet — you have time to think. In the city, I am always rushing and thinking about all the stuff I have to do. When I go to Alentejo, my mind and body slow down. I have time to think and breathe and enjoy what is around me.

To you personally, what is so special about the house?

It’s the quiet and the silence - the serene feeling I get when I’m there. I like to sit on the terrace beside the pool and enjoy the infinite view. There are no buildings or trees blocking the view. Last New Year’s Eve, we could see fireworks from six different towns. 

I also love the night sky, which is amazing. You can see shooting stars every night and satellites passing by, as well as all the colours of the Milky Way. You don’t need any equipment, just the naked eye. 
                </p>
            )}

            <button onClick={toggleReadMoreLess}>
                {isShowMore ? "Read Less" : "Read More"}
            </button>
        </div>
    );
}

export default AccordionText;