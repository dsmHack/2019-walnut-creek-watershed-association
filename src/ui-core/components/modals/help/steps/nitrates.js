import React from 'react';
import Step from '../step';
import Section from '../section';

const section1 = {
    title: "Nitrates",
    description: 'Nitrates can be a nutrient or a pollutant. Potable tap water has Max Contaminant Levels from ingestion over long periods of time.\u000AThis is NOT the same as limited ingestion from recreating in bodies of water.'
};
const section2 = {
    title: "Levels",
    description: 'Nitrates levels reflect risks to human health from long-term ingestion of tap water.'
};
const section3 = {
    title: "Standard",
    description: 'The EPA sets national drinking water standards. University of Iowa researched health risks for women.'
};

export default function Nitrates() {
    return (<Step header={"Drinking"}>
        <Section {...section1}/>
        <Section {...section2}/>
        <Section {...section3}/>
    </Step>);
}
