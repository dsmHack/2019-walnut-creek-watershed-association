import React from 'react';
import Step from '../step';
import Section from '../section';

export default function Fibi() {
    return (<Step header={"Fishing"}>
        <Section title={"Fish Index of Biotic Integrity (FIBI)"}
                 description={"FIBI scores are a composite index combining twelve metrics for a community-level assessment of stream biological conditions."}
        />
        <Section title={"Benthic Macroinvertebrate (BMIBI)"}
                 description={"BMIBI scores can predict changes to FIBI scores."}
        />
        <Section title={"Diversity"}
                 description={"FIBI scores reflect aquatic diversity which supports other area wildlife populations."}
        />
        <Section title={"Standard"}
                 description={"The Iowa DNR calculates FIBI and BMIBI scores for different eco-regions roughly every three years."}
        />
    </Step>);
}