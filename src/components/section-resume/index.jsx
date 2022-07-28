import React from 'react';
import classes from '../header';
import Section from '../section';

const SectionResume = ({resume}) => {
    return (
        <Section title="Resume">
            <div className={classes.contentWrapper}>
                <h1 className={classes.name}>
                    <a
                      className={classes.name}
                      href="https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"
                    >
                        Full Resume
                    </a>
                </h1>
            </div>
        </Section>
    );
};

export default SectionResume;