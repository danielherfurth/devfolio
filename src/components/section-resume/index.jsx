import React from 'react';

import Section from '../section';
import SummaryItem from "../summary-item";

const SectionResume = ({resume}) => {
    return (
        <Section title="Resume">
            {resume.map((res) => (
                <SummaryItem
                key={res.name}
                name={res.name}
                description={res.description()}
                />
            ))}

                <a
                    href="https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"
                >
                    Full Resume
                </a>
        </Section>

    );
};

export default SectionResume;