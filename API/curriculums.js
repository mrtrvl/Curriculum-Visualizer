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
          x: -148.63225655926198,
          y: -572.1323848377069,
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
          x: 378.7068454797633,
          y: -565.0061807560984,
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
          x: -120.12744023282819,
          y: -361.4003498529999,
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
          x: -416.3739241968365,
          y: -392.9592536429801,
        },
      },
      {
        data: {
          id: 'Sissejuhatus tarkvaraarendusse',
          uuid: '3b923f56-4a04-464e-9866-bcf60ae05ff3',
          volume: 4,
          mandatory: 'true',
          parent: '2. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 166.95678134054077,
          y: -581.2946472283463,
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
          x: -539.555451893211,
          y: -293.1923965004619,
        },
      },
      {
        data: {
          id: 'Veebiprogrammeerimine',
          uuid: '4127f949-7d28-4544-a056-c43c70e35f4c',
          volume: 5,
          mandatory: 'true',
          sparent: '1. semester',
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -673.9353002892562,
          y: -601.6552303186562,
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
          x: -108.9291195331576,
          y: -188.33539358536612,
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
          x: -299.3005714275549,
          y: -345.111883380752,
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
          x: -246.36305539274923,
          y: -139.4699941686225,
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
          x: -669.8631836711941,
          y: 142.52408163216896,
        },
      },
      {
        data: {
          id: 'Arvutivõrgud ja andmeside',
          uuid: '1ce94e34-89b4-46e2-bb1a-6186636d8e3d',
          volume: 4,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 746.2153702598562,
          y: -592.4929679280168,
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
          x: -425.513740941078,
          y: -586.7628974947813,
        },
      },
      {
        data: {
          id: 'Kasutajakogemuse disain',
          uuid: 'feaae6b5-ec62-410b-979d-cea5fc3977fb',
          volume: 4,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -9.892405078171446,
          y: -94.51553575008776,
        },
      },
      {
        data: {
          id: 'Kujundusgraafika',
          uuid: '0749b721-a2d0-4041-b1f0-2551215d9783',
          volume: 3,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 86.8211609039261,
          y: -374.2923208849744,
        },
      },
      {
        data: {
          id: 'Andmeturve',
          uuid: '2452c37d-3792-42e7-9175-cc25a608284f',
          volume: 3,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 290.4434278902602,
          y: -233.29426896081182,
        },
      },
      {
        data: {
          id: 'Serverihaldus',
          uuid: '9f2e8589-0679-4c2e-a34f-e380bff8db8d',
          volume: 4,
          mandatory: 'false',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 641.6298177285082,
          y: -40.18188606690911,
        },
      },
      {
        data: {
          id: 'Kujundusgraafika II',
          uuid: '2c8bd2eb-1a61-4386-b1e0-54fd42a32c60',
          volume: 5,
          mandatory: 'false',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 142.5577501017659,
          y: -126.36232600705148,
        },
      },
      {
        data: {
          id: 'Kasutajaliideste disain',
          uuid: 'b7710987-b4d1-49fb-8c12-ddd8429c513c',
          volume: 4,
          mandatory: 'false',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -45.596411126726345,
          y: 103.40794036323074,
        },
      },
      {
        data: {
          id: 'Disaini alused',
          uuid: '6a32c79b-8cdc-415a-b769-6604c23c1e81',
          volume: 4,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -42.92723402332556,
          y: -267.5588426744493,
        },
      },
      {
        data: {
          id: 'Mobiilirakenduste arendamine',
          uuid: 'fe20d3dc-1b64-475e-96ee-9c07b2f8886f',
          volume: 4,
          mandatory: 'true',
          semester: null,
          category: 'Eriala ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: -697.8495729240639,
          y: -174.6198766264827,
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
          x: 548.6311169107616,
          y: -586.1386126142331,
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
          x: 901.6001433637799,
          y: -306.23352402596475,
        },
      },
      {
        data: {
          id: 'ELU - Erialasid Lõimiv Uuendus',
          uuid: '784bd2a9-984f-4a4b-9d9b-2adf66f3a672',
          volume: 6,
          mandatory: 'true',
          semester: null,
          category: 'Üleülikoolilised ained',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 758.1474543008437,
          y: -417.9609204190309,
        },
      },
      {
        data: {
          id: 'Praktika I',
          uuid: '135a8b51-512f-46ff-8c1d-7566c3e80323',
          volume: 10,
          mandatory: 'true',
          semester: null,
          category: 'Praktika',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 794.1858307154296,
          y: -194.549426319443,
        },
      },
      {
        data: {
          id: 'Praktika II',
          uuid: '1bba6fba-85a1-45ff-b5fd-f0e87e3f6253',
          volume: 10,
          mandatory: 'true',
          semester: null,
          category: 'Praktika',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 401.8284163065995,
          y: -119.30707951842206,
        },
      },
      {
        data: {
          id: 'Ettevõttepraktika',
          uuid: '03b220d8-107e-4c01-a114-bc21d1ceeb2d',
          volume: 10,
          mandatory: 'true',
          semester: null,
          category: 'Praktika',
          description: '',
          learningOutcomes: [],
        },
        position: {
          x: 430.52046851707604,
          y: 55.1667051300721,
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
