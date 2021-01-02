# cx-styled-comps
React &amp; React-native Styled Components from Connacx

### yarn link react and react-dom
```javascript
(cd apps/next-comp-gallery/node_modules/react && yarn link) && (cd apps/next-comp-gallery/node_modules/react-dom && yarn link)
yarn link react && yarn link react-dom
```

issues
1. bundling issue => needed to use rollup
2. react cannot be resolved
3. invalid hook issue due to main app and package using both react and react dom and these 2 libraries are in 2 places/node_modules
solution:
- in app, (cd node_modules/react && yarn link)
- in package, yarn link react
- do the same for react-dom as well