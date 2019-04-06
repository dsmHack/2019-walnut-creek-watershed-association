import React from 'react';
import Step from '../step';
import Section from '../section';

const section1 = {
    title: "Escherichia coli (E.coli)",
    description: "E.coli bacteria occurs naturally in the body, so is not necessarily disease-causing. High levels are used to conservatively test the likelihood of an infectious dose for human health."
};

const section2 = {
    title: "Levels",
    description: "E. Coli levels reflect risks to human health from skin exposure and limited ingestion."
};

const section3 = {
    title: "Standard",
    description: "The Iowa DNR tests E. Coli levels. Five consecutive samples over 126 per mL or one sample over 235 consitute an advisory."
};

export default function Ecoli() {
    return (<Step header={"Swimming"}>
        <Section {...section1}/>
        <Section {...section2}/>
        <Section {...section3}/>
    </Step>);
}