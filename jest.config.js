// jest.config.js
import { TextEncoder, TextDecoder } from "util";

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
    TextEncoder,
    TextDecoder,
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
