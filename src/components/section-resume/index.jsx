import React from 'react';

import Section from '../section';


const classes = {
    title: 'pb-6 md:w-full md:max-w-150 md:p-0 hover:text-underline'
};


const SectionResume = ({resume}) => {
    return (
        <div className={classes.title}>
            {/*<Section title="Resume">*/}
                <a
                    href="https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"
                >
                    Full Resume
                </a>
            {/*</Section>*/}
        </div>
    );
};

export default SectionResume;