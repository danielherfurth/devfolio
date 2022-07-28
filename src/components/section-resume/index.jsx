import React from "react";

import Section from "../section";
import classes from "../header"

const SectionResume = ({resume}) => {
    return (
        <Section title="Full Resume">
            <div className="mb-6">
                <a
                    className={classes.link} href="https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"
                >
                </a>
            </div>
        </Section>
    );
};

export default SectionResume;