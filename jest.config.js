module.exports = {
    presets: [ "react-native"],
    moduleNameMapper: {
        "^src/(.*)$": "<rootDir>/src/$1", 
        '^react-native$': ['react-native',"react-native-web"],
        '^../Utilities/Platform$': 'react-native-web/dist/exports/Platform',
        '^../../Utilities/Platform$': 'react-native-web/dist/exports/Platform',
        '^./Platform$': 'react-native-web/dist/exports/Platform',
    },
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
      ],
    globals:{
        __DEV__ : true
    },
    transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    },
    collectCoverage: true,
    coverageDirectory: 'coverage',
        "colectCo'verageFrom":[
        "**/*.{js,jsx}",
        "!**/coverage/**",
        "!**/node_modules/**",
        "!**/babel.config.js",
        "!**/jest.setup.js"
     ],
    setupFiles: ['./jest.setup.js'],
    coverageReporters: ['lcov','text-summary'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '__test__', // Ignore test files for coverage
      ],
      reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'coverage', outputName: 'junit.xml' }],
  ],
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      ".android.js",
      "node"
    ]
  };
