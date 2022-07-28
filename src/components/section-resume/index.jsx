import React from 'react';

import Section from '../section';

const SectionResume = ({ resume }) => {
  return (
    <Section title="Resume">
      <div className="mb-6">
        <p>
            <a
                href="https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"
            >
            "Full Resume"
            </a>
        </p>
      </div>
    </Section>
  );
};

export default SectionResume;