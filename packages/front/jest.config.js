module.exports = {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	clearMocks: true,
	moduleNameMapper: {
		'\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/../../__mocks__/fileMock.ts',
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'components/(.*)': '<rootDir>/src/components/$1',
	},
};
