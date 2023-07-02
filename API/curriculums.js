const curriculums = [
  {
    version: 'RIF23',
    subjects: [
      {
        data: {
          id: 'Programmeerimise alused',
          volume: 6,
          mandatory: 'true',
          semester: 1,
          category: 'Eriala ained',
          description: 'Arv- ja tekstandmete esitamine arvutis. Arvusüsteemid. Ülevaade programmeerimiskeeltest. Kõrgtaseme keelte süntaks ja semantika. Muutujad. Lihtandmetüübid. Struktuursed andmetüübid. Aritmeetika- ja loogikaavaldised. Omistamine. Sisend. Väljund. Juhtstruktuurid: jada, valik ja kordus ning vastavad keeletarindid. Alamprogrammid ja parameetrite edastamine. Failid.',
          learningOutcomes: [
            'tunneb protseduurse programmeerimisega seonduvaid põhimõtteid, mõisteid ja keelt ning programmeerimise olemust',
            'analüüsib lihtsamaid probleeme ning koostab nende lahendamiseks algoritme, kasutades sealjuures tüüpalgoritme',
            'esitab algoritme tegevusskeemi abil ning „tõlgib“ algoritmi programmeerimiskeelde, jälgides kodeerimise reegleid ja häid tavasid',
            'oskab programmikoodi töötlemiseks kasutada sobivat keskkonda, programmikoodi siluda ja testida',
          ],
        },
      },
      {
        data: {
          id: 'Multimeedium',
          volume: 4,
          mandatory: 'true',
          semester: 1,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Andmebaasid',
          volume: 3,
          mandatory: 'true',
          semester: 2,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Veebirakendused ja nende loomine',
          volume: 3,
          mandatory: 'true',
          semester: 2,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Sissejuhatus tarkvaraarendusse',
          volume: 4,
          mandatory: 'true',
          semester: 2,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Veebiraamistikud',
          volume: 4,
          mandatory: 'true',
          semester: 3,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Veebiprogrammeerimine',
          volume: 5,
          mandatory: 'true',
          semester: 1,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Andmebaasid II',
          volume: 3,
          mandatory: 'false',
          semester: 3,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Programmeerimine I',
          volume: 5,
          mandatory: 'false',
          semester: 2,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Programmeerimine II',
          volume: 5,
          mandatory: 'false',
          semester: 3,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Programmeerimine III',
          volume: 5,
          mandatory: 'false',
          semester: 4,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Arvutivõrgud ja andmeside',
          volume: 4,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Riistvara ja operatsioonisüsteemide alused',
          volume: 4,
          mandatory: 'true',
          semester: 4,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Kasutajakogemuse disain',
          volume: 4,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Kujundusgraafika',
          volume: 3,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Andmeturve',
          volume: 3,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Serverihaldus',
          volume: 4,
          mandatory: 'false',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Kujundusgraafika II',
          volume: 5,
          mandatory: 'false',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Kasutajaliideste disain',
          volume: 4,
          mandatory: 'false',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Disaini alused',
          volume: 4,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Mobiilirakenduste arendamine',
          volume: 4,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Õppimine kõrgkoolis',
          volume: 6,
          mandatory: 'true',
          semester: 1,
          category: 'Üleülikoolilised ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Üld- ja sotsiaalpsühholoogia',
          volume: 6,
          mandatory: 'true',
          semester: 4,
          category: 'Üleülikoolilised ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'ELU - Erialasid Lõimiv Uuendus',
          volume: 6,
          mandatory: 'true',
          semester: null,
          category: 'Üleülikoolilised ained',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Praktika I',
          volume: 10,
          mandatory: 'true',
          semester: null,
          category: 'Praktika',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Praktika II',
          volume: 10,
          mandatory: 'true',
          semester: null,
          category: 'Praktika',
          description: '',
          learningOutcomes: [],
        },
      },
      {
        data: {
          id: 'Ettevõttepraktika',
          volume: 10,
          mandatory: 'true',
          semester: null,
          category: 'Praktika',
          description: '',
          learningOutcomes: [],
        },
      },
    ],
    relations: [
      {
        data: {
          id: 1,
          source: 'Programmeerimise alused',
          target: 'Andmebaasid',
        },
      },
      {
        data: {
          id: 2,
          source: 'Programmeerimise alused',
          target: 'Programmeerimine I',
        },
      },
      {
        data: {
          id: 3,
          source: 'Programmeerimise alused',
          target: 'Veebirakendused ja nende loomine',
        },
      },
      {
        data: {
          id: 4,
          source: 'Andmebaasid',
          target: 'Andmebaasid II',
        },
      },
      {
        data: {
          id: 5,
          source: 'Veebiprogrammeerimine',
          target: 'Veebiraamistikud',
        },
      },
      {
        data: {
          id: 6,
          source: 'Programmeerimine I',
          target: 'Programmeerimine II',
        },
      },
      {
        data: {
          id: 7,
          source: 'Veebirakendused ja nende loomine',
          target: 'Veebiraamistikud',
        },
      },
      {
        data: {
          id: 9,
          source: 'Andmebaasid',
          target: 'Programmeerimine II',
        },
      },
      {
        data: {
          id: 11,
          source: 'Kasutajakogemuse disain',
          target: 'Kasutajaliideste disain',
        },
      },
      {
        data: {
          id: 12,
          source: 'Kujundusgraafika',
          target: 'Kujundusgraafika II',
        },
      },
      {
        data: {
          id: 13,
          source: 'Kujundusgraafika',
          target: 'Disaini alused',
        },
      },
      {
        data: {
          id: 14,
          source: 'Disaini alused',
          target: 'Kasutajakogemuse disain',
        },
      },
      {
        data: {
          id: 15,
          source: 'Veebiprogrammeerimine',
          target: 'Mobiilirakenduste arendamine',
        },
      },
      {
        data: {
          id: 16,
          source: 'Veebiraamistikud',
          target: 'Mobiilirakenduste arendamine',
        },
      },
      {
        data: {
          id: 17,
          source: 'Programmeerimine I',
          target: 'Programmeerimine III',
        },
      },
      {
        data: {
          id: 18,
          source: 'Programmeerimise alused',
          target: 'Praktika I',
        },
      },
      {
        data: {
          id: 19,
          source: 'Multimeedium',
          target: 'Praktika I',
        },
      },
      {
        data: {
          id: 20,
          source: 'Kujundusgraafika',
          target: 'Praktika I',
        },
      },
      /*       {
      data: {
        id: 11,
        source: 'Programmeerimine II',
        target: 'Andmebaasid II',
        cooperation: 'true',
      }
    }, */
      /*       {
      data: {
        id: 12,
        source: 'Programmeerimine II',
        target: 'Veebiraamistikud',
        cooperation: 'true',
      }
    }, */
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
  }];

module.exports = curriculums;
