const curriculum = {
  version: 'RIF23',
  subjects: [
    {
      id: 1,
      name: 'Programmeerimise alused',
      credits: 5,
      prerequisites: [],
      learningOutcomes: [1, 2, 3, 4],
      mandatory: true,
      semester: 1,
      objective: '',
      description: '',
      topics: [1, 2],
    },
    {
      id: 2,
      name: 'Programmeerimine I',
      credits: 5,
      prerequisites: [1],
      learningOutcomes: [],
      mandatory: false,
      semester: 2,
      objective: '',
      description: '',
      topics: [],
    },
    {
      id: 3,
      name: 'Programmeerimine II',
      credits: 5,
      prerequisites: [2],
      learningOutcomes: [],
      mandatory: false,
      semester: 3,
      objective: '',
      description: '',
      topics: [],
    },
    {
      id: 4,
      name: 'Programmeerimine III',
      credits: 5,
      prerequisites: [3],
      learningOutcomes: [],
      mandatory: false,
      semester: 4,
      objective: '',
      description: '',
      topics: [],
    },
    {
      id: 5,
      name: 'Veebirakendused ja nende loomine',
      credits: 3,
      prerequisites: [1],
      learningOutcomes: [],
      mandatory: true,
      semester: 2,
      objective: '',
      description: '',
      topics: [],
    },
  ],
  learningOutcomes: [
    {
      id: 1,
      description: 'tunneb protseduurse programmeerimisega seonduvaid põhimõtteid, mõisteid ja keelt ning programmeerimise olemust',
    },
    {
      id: 2,
      description: 'analüüsib lihtsamaid probleeme ning koostab nende lahendamiseks algoritme, kasutades sealjuures tüüpalgoritme',
    },
    {
      id: 3,
      description: 'esitab algoritme tegevusskeemi abil ning „tõlgib“ algoritmi programmeerimiskeelde, jälgides kodeerimise reegleid ja häid tavasid',
    },
    {
      id: 4,
      description: 'oskab programmikoodi töötlemiseks kasutada sobivat keskkonda, programmikoodi siluda ja testida',
    },
  ],
  topics: [
    {
      id: 1,
      topic: 'Protseduuriline programmeerimine',
    },
    {
      id: 2,
      topic: 'Algoritm',
    },
  ],
};

const getCurriculum = () => curriculum;

module.exports = { getCurriculum };
