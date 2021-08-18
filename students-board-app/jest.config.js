module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./config/setupTest.js', '<rootDir>/enzyme.config.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@assets(.*)': '<rootDir>/src/assets/colors/colors.js',
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },
};
