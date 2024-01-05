
import "@testing-library/jest-dom";
require('jest-fetch-mock').enableMocks()

require('dotenv').config({
  path: '.env'
})

jest.mock('./src/helpers/getEnvVariables',()=>({
  getEnvVariables: () => ({...process.env})
}))