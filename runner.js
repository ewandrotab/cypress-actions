const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBjYWY1N2JhLTNkMjAtNDY4ZS05YzI4LWE2MjcxZGI5MmJlMC0xNjc2MzkyNDUzMjQwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODhjMDU3NWItZDU0OC00YTcyLThmOTMtNDI4ZjY3OTllMmE3IiwidHlwZSI6InQifQ.T0x7X2iuA0enCCB3g_2YhypN5MfMOPbQmVFwbs0qeI4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
