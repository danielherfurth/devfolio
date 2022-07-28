import React from 'react';
import classes from '../header';
import Section from '../section';

const SectionResume = ({resume}) => {
    return (
        <div className={classes.wrapper}>
            <Section title="Resume">
                <a
                    className={resume}
                    href="https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"
                >
                    Full Resume
                </a>
            </Section>
        </div>
    );
};

export default SectionResume;