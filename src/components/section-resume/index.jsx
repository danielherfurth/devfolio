import React from 'react';
import classes from '../header';
import Section from '../section';

const SectionResume = ({resume}) => {
    return (
        <Section title="Resume">
            <div className={classes.contentWrapper}>
                <a
                    className={classes.link}
                    href="https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"
                >
                    Full Resume
                </a>

            </div>
        </Section>
    );
};

export default SectionResume;