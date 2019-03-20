const Nitrate_Section1Title = "Levels: ";
const Nitrate_Section1Description =
    "Nitrate levels reflect risks to human health from long-term ingestion of tap water";

const Nitrate_Section2Title = "Standard: ";
const Nitrate_Section2Description =
    "The EPA sets national drinking water standards.";
const Nitrate_Section2EPALearnMoreLink = "";
const Nitrate_Section2DescriptionPart2 =
    "University of Iowa researched health risks for women.";
const Nitrate_Section2UoILearnMoreLink = "";

const Nitrate_Section3Title = "Users: ";
const Nitrate_Section3Description = "Municipal water works and wells";

const Ecoli_Section1Title = "Levels: ";
const Ecoli_Section1Description =
    "E. Coli levels reflect risks to human health from skin exposure and limited ingestion.";

const Ecoli_Section2Title = "Standard: ";
const Ecoli_Section2Description =
    "The Iowa DNR tests E. Coli levels. Five consecutive samples over 126 per mL or one sample over 235 consitute an advisory.";
const Ecoli_Section2LearnMoreLink = "";

const Ecoli_Section3Title = "Users: ";
const Ecoli_Section3Description = "Swimmins, canoers, and kayakers";

const Fibi_Section1Title = "Diversity: ";
const Fibi_Section1Description =
    "FIBI scores reflect aquatic diversity which supports other area wildlife populations.";

const Fibi_Section2Title = "Standard: ";
const Fibi_Section2Description =
    "The Iowa DNR calculates FIBI and BMIBI scores for different eco-regions roughly every three years.";
const Fibi_Section2LearnMoreLink = "";

const Fibi_Section3Title = "Users: ";
const Fibi_Section3Description = "Anglers, hunters, and birders.";

export const NitrateSection = {
    section1: {
        title: Nitrate_Section1Title,
        description: Nitrate_Section1Description
    },
    section2: {
        title: Nitrate_Section2Title,
        description: Nitrate_Section2Description,
        learnMoreLinks: [Nitrate_Section2EPALearnMoreLink, Nitrate_Section2UoILearnMoreLink],
        descriptionPart2: Nitrate_Section2DescriptionPart2
    },
    section3: {
        title: Nitrate_Section3Title,
        description: Nitrate_Section3Description
    }
};

export const EcoliSection = {
    section1: {
        title: Ecoli_Section1Title,
        description: Ecoli_Section1Description
    },
    section2: {
        title: Ecoli_Section2Title,
        description: Ecoli_Section2Description,
        learnMoreLinks: [Ecoli_Section2LearnMoreLink]
    },
    section3: {
        title: Ecoli_Section3Title,
        description: Ecoli_Section3Description
    }
};

export const FibiSection = {
    section1: {
        title: Fibi_Section1Title,
        description: Fibi_Section1Description
    },
    section2: {
        title: Fibi_Section2Title,
        description: Fibi_Section2Description,
        learnMoreLinks: [Fibi_Section2LearnMoreLink]
    },
    section3: {
        title: Fibi_Section3Title,
        description: Fibi_Section3Description
    }
};
