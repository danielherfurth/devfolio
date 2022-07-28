import React from "react";

import Section from "../section";

const SectionResume = ({resume}) => {
    return (
        <Section title="Full Resume">
            <div className="mb-6">
                <p>{resume}</p>
            </div>
        </Section>
    );
};

export default SectionResume;