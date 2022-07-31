import React from 'react';

import Section from '../section';
import SummaryItem from "../summary-item";

const SectionResume = ({resume}) => {
//     return (
//         <Section title="Resume">
//             <div className={"mb-6"}>
//                 <a
//                     href="https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"
//                 >
//                     Full Resume
//                 </a>
//         </div>
//         </Section>
//
//     );
// };
//       if (!projects.length) return null;

  return (
    <Section title="Resume">
      {resume.map((resume) => (
        <SummaryItem
          key={"Resume"}
          name={"Resume"}
          // description={project.description}
          // link={resume.link}
          link={"https://danielherfurth.github.io/DanielHerfurthResume_data.pdf"}
        />
      ))}
    </Section>
  );
};


export default SectionResume;