const curriculums = [
  {
    version: 'RIF23',
    subjects: [
      {
        data: {
          id: '1. semester',
          label: '1. semester',
          uuid: 'c9f4f8f8-5e1f-4836-b190-583df791c1d7',
        },
        classes: 'compound',
        position: {
          x: -12.569469069631168,
          y: -704.7969161866309,
        },
      },
      {
        data: {
          id: '2. semester',
          label: '2. semester',
          uuid: '401b97b6-d8b1-4325-8956-9a49179c70dc',
        },
        classes: 'compound',
      },
      {
        data: {
          id: '3. semester',
          label: '3. semester',
          uuid: 'eb1fc3ba-88e2-4981-b587-bd8a16e06f88',
        },
        classes: 'compound',
      },
      {
        data: {
          id: '4. semester',
          label: '4. semester',
          uuid: 'b0b41560-dbaf-4186-b3ca-c94bbfe051b3',
        },
        classes: 'compound',
      },
      {
        data: {
          id: '5. semester',
          label: '5. semester',
          uuid: 'd0f23725-e50f-4e9a-88a8-b74593db9dfd',
        },
        classes: 'compound',
      },
      {
        data: {
          id: '6. semester',
          label: '6. semester',
          uuid: 'f524d9e9-6ef9-4ccf-980c-16af1d838fc1',
        },
        classes: 'compound',
        position: {
          x: -2280.728482120695,
          y: 758.4899834692901,
        },
      },
      {
        data: {
          id: 'Programmeerimise alused',
          uuid: '027be654-31da-49d3-9d4b-48320d58387f',
          volume: 6,
          mandatory: 'true',
          parent: '1. semester',
          category: 'Eriala ained',
          description: 'Arv- ja tekstandmete esitamine arvutis. Arvusüsteemid. Ülevaade programmeerimiskeeltest. Kõrgtaseme keelte süntaks ja semantika. Muutujad. Lihtandmetüübid. Struktuursed andmetüübid. Aritmeetika- ja loogikaavaldised. Omistamine. Sisend. Väljund. Juhtstruktuurid: jada, valik ja kordus ning vastavad keeletarindid. Alamprogrammid ja parameetrite edastamine. Failid.',
          learningOutcomes: [
            'tunneb protseduurse programmeerimisega seonduvaid põhimõtteid, mõisteid ja keelt ning programmeerimise olemust',
            'analüüsib lihtsamaid probleeme ning koostab nende lahendamiseks algoritme, kasutades sealjuures tüüpalgoritme',
            'esitab algoritme tegevusskeemi abil ning „tõlgib“ algoritmi programmeerimiskeelde, jälgides kodeerimise reegleid ja häid tavasid',
            'oskab programmikoodi töötlemiseks kasutada sobivat keskkonda, programmikoodi siluda ja testida',
          ],
        },
        position: {
          x: -1776.796318581097,
          y: -1520.3415163261052,
        },
      },
      {
        data: {
          id: 'Multimeedium',
          uuid: '3c1f7312-1844-47dd-b3be-52d2a8c379c8',
          volume: 4,
          mandatory: 'true',
          parent: '1. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -1251.056733837061,
          y: -1412.4457226601685,
        },
      },
      {
        data: {
          id: 'Andmebaasid',
          uuid: '122a129b-f343-4d8d-a070-035270230229',
          volume: 3,
          mandatory: 'true',
          parent: '2. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -1719.547874446765,
          y: -1117.0108556925575,
        },
      },
      {
        data: {
          id: 'Veebirakendused ja nende loomine',
          uuid: '73dde79f-da39-4572-a8db-df7581bdad49',
          volume: 3,
          mandatory: 'true',
          parent: '2. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -2089.5701839565304,
          y: -1161.28972940422,
        },
      },
      {
        data: {
          id: 'Sissejuhatus tarkvaraarendusse',
          uuid: 'e18ab92e-7312-41fc-823e-380becd9ff43',
          volume: 4,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '2. semester',
        },
        position: {
          x: -2273.1663309189034,
          y: -1220.0464413779257,
        },
      },
      {
        data: {
          id: 'Veebiraamistikud',
          uuid: '3f9a265c-9c08-496c-b788-02eb9056be62',
          volume: 4,
          mandatory: 'true',
          parent: '3. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -2327.74927876435,
          y: -587.8463743666023,
        },
      },
      {
        data: {
          id: 'Veebiprogrammeerimine',
          uuid: '4127f949-7d28-4544-a056-c43c70e35f4c',
          volume: 5,
          mandatory: 'true',
          parent: '1. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -2302.0993623110908,
          y: -1549.8643618070546,
        },
      },
      {
        data: {
          id: 'Andmebaasid II',
          uuid: '05678cff-f38c-43d9-a587-a6816be8f3fe',
          volume: 3,
          mandatory: 'false',
          parent: '3. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -1456.3924900491165,
          y: -382.4686062079546,
        },
      },
      {
        data: {
          id: 'Programmeerimine I',
          uuid: '6b9a9c6b-10c8-4416-b653-a9f80f1826e3',
          volume: 5,
          mandatory: 'false',
          parent: '2. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -1919.072957516182,
          y: -1156.6902568757139,
        },
      },
      {
        data: {
          id: 'Programmeerimine II',
          uuid: 'b9711f8c-79a0-41e0-8da4-cafe780a66d8',
          volume: 5,
          mandatory: 'false',
          parent: '3. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -1986.7180257492287,
          y: -378.65074767414166,
        },
      },
      {
        data: {
          id: 'Programmeerimine III',
          uuid: 'fcc9cfac-ff6a-4e0e-9a5a-5f57011e9d8a',
          volume: 5,
          mandatory: 'false',
          parent: '4. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -1893.4612205984765,
          y: 63.12961765274511,
        },
      },
      {
        data: {
          id: 'Arvutivõrgud ja andmeside',
          uuid: '3fe4e6ae-4d34-4091-bd04-30efdfbc17ce',
          volume: 4,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '3. semester',
        },
        position: {
          x: -681.7713870699307,
          y: -843.627819806169,
        },
      },
      {
        data: {
          id: 'Riistvara ja operatsioonisüsteemide alused',
          uuid: 'aca43ec1-a0c9-4e13-acf0-16cc8d8823c6',
          volume: 4,
          mandatory: 'true',
          parent: '1. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -2053.677802962913,
          y: -1534.9720289831798,
        },
      },
      {
        data: {
          id: 'Kasutajakogemuse disain',
          uuid: 'd11b5994-dbc9-4ab0-8638-5bfb56cc3480',
          volume: 4,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '3. semester',
        },
        position: {
          x: -151.85488014215724,
          y: -423.3919753355423,
        },
      },
      {
        data: {
          id: 'Kujundusgraafika',
          uuid: 'e09d20a1-da14-4a9b-8149-313b98fdbea4',
          volume: 3,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '1. semester',
        },
        position: {
          x: -127.27250800168115,
          y: -1330.380778198411,
        },
      },
      {
        data: {
          id: 'Andmeturve',
          uuid: 'c842998d-e26f-4bd5-bdc6-65d04d1d093a',
          volume: 3,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '4. semester',
        },
        position: {
          x: -908.0240741649126,
          y: -142.42694276953992,
        },
      },
      {
        data: {
          id: 'Serverihaldus',
          uuid: '2cc0ab88-fffd-41a0-a513-e0c11a303048',
          volume: 4,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '4. semester',
        },
        position: {
          x: -815.5130336183323,
          y: 61.40572779348031,
        },
      },
      {
        data: {
          id: 'Kujundusgraafika II',
          uuid: '0d444035-378a-4781-b728-9b23658321d9',
          volume: 5,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '3. semester',
        },
        position: {
          x: -616.5633295840167,
          y: -592.4842211942574,
        },
      },
      {
        data: {
          id: 'Kasutajaliideste disain',
          uuid: '6301d56d-b263-4593-ae1f-5e25177b45cb',
          volume: 4,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '4. semester',
        },
        position: {
          x: -202.11190008227476,
          y: -6.904409312039419,
        },
      },
      {
        data: {
          id: 'Disaini alused',
          uuid: '04b17ecf-8334-4aed-b36c-5ab33a636fb9',
          volume: 4,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '2. semester',
        },
        position: {
          x: -122.08653442525925,
          y: -952.4376407702283,
        },
      },
      {
        data: {
          id: 'Mobiilirakenduste arendamine',
          uuid: '79ced183-ee33-49dc-ae46-43114a682784',
          volume: 4,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '4. semester',
        },
        position: {
          x: -2263.6501032543656,
          y: -278.22120867289584,
        },
      },
      {
        data: {
          id: 'Õppimine kõrgkoolis',
          uuid: '6ba7f23c-8bb4-4510-8808-072e3ba5d6e5',
          volume: 6,
          mandatory: 'true',
          parent: '1. semester',
          category: 'Üleülikoolilised ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -1079.5329451110729,
          y: -1534.3477441026316,
        },
      },
      {
        data: {
          id: 'Üld- ja sotsiaalpsühholoogia',
          uuid: 'ae95e8fc-46f8-4726-8807-200411814b51',
          volume: 6,
          mandatory: 'true',
          parent: '4. semester',
          category: 'Üleülikoolilised ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -1697.8339304706333,
          y: -0.2914778009083472,
        },
      },
      {
        data: {
          id: 'ELU - Erialasid Lõimiv Uuendus',
          uuid: 'dc3e823d-29c3-4aae-8171-a13aa797ac18',
          volume: 6,
          category: 'Kohustuslikud ained',
          description: '',
          mandatory: 'true',
          parent: '3. semester',
        },
        position: {
          x: -1020.1673436213005,
          y: -664.0799035221135,
        },
      },
      {
        data: {
          id: 'Praktika I',
          uuid: '1c526fbc-f246-4662-b5e6-0d9d22a63f40',
          volume: 10,
          category: 'Praktika',
          description: '',
          mandatory: 'true',
          parent: '4. semester',
        },
        position: {
          x: -1136.513650331121,
          y: -227.36528545952194,
        },
      },
      {
        data: {
          id: 'Praktika II',
          uuid: 'e9b0823d-5a46-4f35-9a3b-db63d3dd5fe5',
          volume: 10,
          category: 'Praktika',
          description: '',
          mandatory: 'true',
          parent: '5. semester',
        },
        position: {
          x: -2328.8780363130913,
          y: 261.3317078199662,
        },
      },
      {
        data: {
          id: 'Ettevõttepraktika',
          uuid: 'f878a48a-324f-4247-80fc-2ea7056d8034',
          volume: 10,
          category: 'Praktika',
          description: '',
          mandatory: 'true',
          parent: '5. semester',
        },
        position: {
          x: -124.14296859362435,
          y: 385.32693739059073,
        },
      },
      {
        data: {
          id: 'Uurimistöö I',
          volume: 3,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '5. semester',
          uuid: '6ec08219-026d-4aa8-9bb6-a79dd8c1c494',
        },
        position: {
          x: -87.46078389631536,
          y: 153.64732306109477,
        },
      },
      {
        data: {
          id: 'Uurimistöö II',
          volume: 3,
          category: 'Eriala ained',
          description: '',
          mandatory: 'true',
          parent: '6. semester',
          uuid: '66271de2-f073-4f9c-a61c-366121e86d07',
        },
        position: {
          x: -1333.1860031762683,
          y: 583.8598276321599,
        },
      },
    ],
    relations: [
      {
        data: {
          id: '15ed4b5a-a87a-45e9-91af-08af459220f5',
          source: 'Programmeerimise alused',
          target: 'Andmebaasid',
        },
      },
      {
        data: {
          id: '93df9351-ca94-4500-82aa-025865187f5b',
          source: 'Programmeerimise alused',
          target: 'Programmeerimine I',
        },
      },
      {
        data: {
          id: '1f0f6753-c4e1-4703-869f-bb5c310b5436',
          source: 'Programmeerimise alused',
          target: 'Veebirakendused ja nende loomine',
        },
      },
      {
        data: {
          id: '29c54786-64c3-4f09-b241-e921af4ff518',
          source: 'Andmebaasid',
          target: 'Andmebaasid II',
        },
      },
      {
        data: {
          id: '79ca5fd3-7702-4707-89a8-f1277a3944c0',
          source: 'Veebiprogrammeerimine',
          target: 'Veebiraamistikud',
        },
      },
      {
        data: {
          id: 'a3416ac6-9215-40ed-b13c-ab12a90294eb',
          source: 'Programmeerimine I',
          target: 'Programmeerimine II',
        },
      },
      {
        data: {
          id: 'fe44dae0-ec18-49b1-83e4-bafa93d76108',
          source: 'Veebirakendused ja nende loomine',
          target: 'Veebiraamistikud',
        },
      },
      {
        data: {
          id: 'fcb4d4e7-77cb-49dd-8931-96b0a5486a49',
          source: 'Andmebaasid',
          target: 'Programmeerimine II',
        },
      },
      {
        data: {
          id: 'd51aa834-d2da-4d3b-b62c-f6a28e5dfda5',
          source: 'Kasutajakogemuse disain',
          target: 'Kasutajaliideste disain',
        },
      },
      {
        data: {
          id: '893e62ae-c871-4405-baf4-3361ed55c91d',
          source: 'Kujundusgraafika',
          target: 'Kujundusgraafika II',
        },
      },
      {
        data: {
          id: 'e9fad1cf-4e8c-47a9-bc6e-4498738bd97a',
          source: 'Kujundusgraafika',
          target: 'Disaini alused',
        },
      },
      {
        data: {
          id: '6b7fed55-ef54-4683-b140-f550d2c361c8',
          source: 'Disaini alused',
          target: 'Kasutajakogemuse disain',
        },
      },
      {
        data: {
          id: '4e25d83a-c258-428c-abe5-747f4dd921b7',
          source: 'Veebiprogrammeerimine',
          target: 'Mobiilirakenduste arendamine',
        },
      },
      {
        data: {
          id: 'c839767d-1a2e-4513-b628-41fe489e0382',
          source: 'Veebiraamistikud',
          target: 'Mobiilirakenduste arendamine',
        },
      },
      {
        data: {
          id: '12491f38-693d-4edf-9641-7b96d61cdf06',
          source: 'Programmeerimine I',
          target: 'Programmeerimine III',
        },
      },
      {
        data: {
          id: 'cde97a03-45cb-4903-b941-edc2bc006fdb',
          source: 'Programmeerimise alused',
          target: 'Praktika I',
        },
      },
      {
        data: {
          id: '5412bf0f-680b-4e06-b73c-d5498cd997a5',
          source: 'Multimeedium',
          target: 'Praktika I',
        },
      },
      {
        data: {
          id: 'c4439210-c34a-407e-93a9-c9c8469a6e76',
          source: 'Kujundusgraafika',
          target: 'Praktika I',
        },
      },
      {
        data: {
          id: '574742e3-24c3-4b2b-8409-37186575c017',
          source: 'Uurimistöö I',
          target: 'Uurimistöö II',
        },
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
  },
];

module.exports = curriculums;
