import React from 'react';

import Section from '../section';


const classes = {
    title: 'pb-6 md:w-full md:max-w-150 md:p-0 hover:text-underline'
};


const SectionResume = ({resume}) => {
    return (

            <Section title="Resume">
                <div className={classes.title}>
                <a
                    href="https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"
                >
                    Full Resume
                </a></div>
            </Section>

    );
};

export default SectionResume;