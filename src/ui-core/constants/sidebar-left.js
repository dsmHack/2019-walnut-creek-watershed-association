const waterWarning =
    "A single data point can never give a full picture of water quality";

const Section1Title = "Metric: ";
const Section2Title = "Other Metrics: ";

const Nitrate_Section1Description =
    "Nitrates can be a nutrient or a pollutant. Potable tap water has Max Contaminant Levels from ingestion over long periods of time. This is NOT the same as limited ingestion from recreating in bodies of water.";
const Nitrate_Section1LearnMoreLink = "";

const Nitrate_Section2Description = "Phosphates";
const Nitrate_Section2LearnMoreLink = "";

const Ecoli_Section1Description =
    "Escherichia coli(E.coli) bacteria occurs naturally in the body, so is not necessarily disease-causing. High levels are used to conservatively test the likelihood of an infectious dose for human health.";
const Ecoli_Section1LearnMoreLink = "";

const Ecoli_Section2Description = "Coliform bacteria.";
const Ecoli_Section2LearnMoreLink = "";

const Fibi_Section1Description =
    "Fish Index of Biotic Integrity(FIBI) scores are a composite index combining twelve metrics for a community-level assessment of stream biological conditions.";
const Fibi_Section1LearnMoreLink = "";

const Fibi_Section2Description =
    "Benthic Macroinvertebrate(BMIBI) scores can predict changes to FIBI scores.";
const Fibi_Section2LearnMoreLink = "";

export const NitrateSection = {
    warning: waterWarning,
    section1: {
        title: Section1Title,
        description: Nitrate_Section1Description,
        learnMoreLink: Nitrate_Section1LearnMoreLink
    },
    section2: {
        title: Section2Title,
        description: Nitrate_Section2Description,
        learnMoreLink: Nitrate_Section2LearnMoreLink
    }
}
export const EcoliSection = {
    warning: waterWarning,
    section1: {
        title: Section1Title,
        description: Ecoli_Section1Description,
        learnMoreLink: Ecoli_Section1LearnMoreLink
    },
    section2: {
        title: Section2Title,
        description: Ecoli_Section2Description,
        learnMoreLink: Ecoli_Section2LearnMoreLink
    }
}
export const FibiSection = {
    warning: waterWarning,
    section1: {
        title: Section1Title,
        description: Fibi_Section1Description,
        learnMoreLink: Fibi_Section1LearnMoreLink
    },
    section2: {
        title: Section2Title,
        description: Fibi_Section2Description,
        learnMoreLink: Fibi_Section2LearnMoreLink
    }
}