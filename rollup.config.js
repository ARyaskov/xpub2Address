import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'
import replace from "@rollup/plugin-replace"

import { readFileSync } from "node:fs"
import { resolve as resolvePath, dirname } from "node:path"
import { fileURLToPath } from "node:url"

import pkg from './package.json' with { type: "json" }

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const packageJson = JSON.parse(
    readFileSync(resolvePath(__dirname, './package.json'))
);
const version = packageJson.version;


const minifiedOutputs = [
    {
        file: pkg.exports['.'].import,
        format: 'esm',
    },
    {
        file: pkg.exports['.'].require,
        format: 'cjs',
    }
];

const unminifiedOutputs = minifiedOutputs.map(({ file, ...rest }) => ({
    ...rest,
    file: file.replace('.min.', '.'),
}));


export default [
    // {
    //     input: './src/index.ts',
    //     output: [...unminifiedOutputs, ],
    //     plugins: [
    //         typescript({tsconfig: resolvePath(__dirname, 'tsconfig.esm.json')}),
    //         babel({
    //             exclude: 'node_modules/**',
    //             extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //         }),
    //         resolve(),
    //         json()
    //     ],
    //     external: [/^@babel\/runtime\//],
    // },
    {
        input: './index.ts',
        output: [...minifiedOutputs],
        plugins: [
          // replace({
          //   'Object.defineProperty(exports,"__esModule",{value:!0})': '',
          //   delimiters: ['\n', '\n']
          // }),
            typescript({tsconfig: resolvePath(__dirname, 'tsconfig.json')}),
            babel({
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            }),
            resolve({
              modulePaths: ['./node_modules/bitcoinjs-lib/src']
            }),
            terser(),
            json(),

        ],
        external: [/^@babel\/runtime\//],
    },
];