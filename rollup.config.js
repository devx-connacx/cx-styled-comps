import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

import { getPackages } from '@lerna/project';
import filterPackages from '@lerna/filter-packages';
import batchPackages from '@lerna/batch-packages';

import path from 'path';
import minimist from 'minimist';

/**
 * @param {string}[scope] - packages to only build (if you don't
 *    want to build everything)
 * @param {string}[ignore] - packages to not build
 *
 * @returns {string[]} - sorted list of Package objects that
 *    represent packages to be built.
 */
async function getSortedPackages(scope, ignore) {    
    const packages = await getPackages(__dirname);    
    const filtered = filterPackages(packages,
        scope,
        ignore,
        false,
    );     
  
    return batchPackages(filtered)
        .reduce((arr, batch) => arr.concat(batch), []);
}

export default async () => {
    const configs = [];

    const { scope, ignore } = minimist(process.argv.slice(2));
    const packages = await getSortedPackages(scope, ignore);

    packages.forEach(pkg => {
        const basePath = path.relative(__dirname, pkg.location);
        const input = path.join(basePath, 'src/index.ts');
        const { main, module } = pkg.toJSON();
        
        configs.push({
            input,
            output: [{
                file: path.join(basePath, main),
                format: "cjs",
                sourcemap: true
            },{
                file: path.join(basePath, module),
                format: "esm",
                sourcemap: true
            }],
            plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()],
        });
    });

    return configs;
};