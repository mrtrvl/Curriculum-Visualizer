/* eslint-disable import/no-extraneous-dependencies */
const axios = require('axios');
const cheerio = require('cheerio');

// Replace this URL with the URL of the page you want to scrape
const baseUrl = 'https://ois2.tlu.ee/tluois/aine/';

const scrapeService = {
  scrapeSubject: async (data) => {
    const oisContent = {};
    const $ = cheerio.load(data);
    // eslint-disable-next-line func-names
    $('.yldaine_r', data).each(async function () {
      const ryhmHeader = $(this).find('div.ryhmHeader').text();
      const yldaineC1 = $(this).find('div.yldaine_c1').text();
      const yldaineC2 = $(this).find('div.yldaine_c2').text();

      if (ryhmHeader && ryhmHeader !== '') oisContent.oisName = ryhmHeader;
      if (yldaineC1 && yldaineC1 === 'Õppeaine kood') oisContent.code = yldaineC2;
      if (yldaineC1 && yldaineC1 === 'Õppeaine nimetus eesti k') oisContent.name = yldaineC2;
      if (yldaineC1 && yldaineC1 === 'Õppeaine maht EAP') oisContent.EAP = yldaineC2;
      if (yldaineC1 && yldaineC1 === 'Kontrollivorm') oisContent.grading = yldaineC2;
      if (yldaineC1 && yldaineC1 === 'Õppeaine eesmärgid') oisContent.objectives = yldaineC2;
      if (yldaineC1 && yldaineC1 === 'Õppeaine sisu lühikirjeldus') oisContent.description = yldaineC2;
      if (yldaineC1 && yldaineC1 === 'Õppeaine õpiväljundid') {
        const learningOutcomesArray = await yldaineC2.match(/-[^-]+[;.]/g).map((outcome) => outcome.slice(1, -1).trim()).filter(Boolean);
        oisContent.learningOutcomes = learningOutcomesArray;
      }
    });
    return oisContent;
  },
  getSubject: async (subjectCode) => {
    const response = await axios.get(`${baseUrl}${subjectCode}`);
    if (response.status === 200) {
      const html = response.data;
      const subjectData = scrapeService.scrapeSubject(html);
      return subjectData;
    }
    console.log('Error');
    return false;
  },
};

module.exports = scrapeService;
