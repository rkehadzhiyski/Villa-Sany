import { useState } from 'react';
import styles from './accordionText.module.css';

import Button from '@mui/material/Button';

interface ReadMoreProps {
    text: {
        heading: string;
        main: string;
        preview: string;
        hidden: string;
    }
}
const AccordionText: React.FC<ReadMoreProps> = ({ text }) => {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };

    return (
        <div className={styles['accordion-container']}>
            <h3>{text.heading}</h3>

            <p>{text.main}</p>

            {!isShowMore && (
                <p className={styles.gradient}>
                    {text.preview}
                </p>
            )}

            {isShowMore && (
                <p>{text.hidden}</p>
            )}

            <Button size="small" sx={{ color: '#3f3f43', fontSize: '12px' }} onClick={toggleReadMoreLess}>{isShowMore ? "Read Less" : "Read More"}</Button>
        </div>
    );
}

export default AccordionText;