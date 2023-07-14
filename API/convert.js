/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */

const Curriculum = require('./models');

const uuid = '23ba0635-9549-4090-816e-84a6b1ed382d';

const convert = async () => {
  try {
    const curriculum = await Curriculum.findOne({ uuid });
    curriculum.subjects.forEach(async (subject) => {
      if (subject.data.learningOutcomes) {
        // const outcomeString = subject.data.learningOutcomes.replace('Õppeaine edukal läbimisel üliõpilane:', '').trim();
        // const outcomesArray = outcomeString.split('-').map((outcome) => outcome.trim()).filter(Boolean);
        const outcomesArray = await subject.data.learningOutcomes.match(/-[^-]+[;.]/g).map((outcome) => outcome.slice(1, -1).trim()).filter(Boolean);
        // console.log(subject.data.uuid, outcomesArray);
        await Curriculum.updateOne(
          {
            uuid,
            'subjects.data.uuid': subject.data.uuid,
          },
          {
            $set: {
              'subjects.$.data.learningOutcomes': outcomesArray,
            },
          },
        );
        // console.log(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

convert();
