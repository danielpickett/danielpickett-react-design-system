echo "export * from './components'" > dist/index.d.ts
echo "export * from './components'" > dist/index.js


sed -i ''  "s/\(import '\.\/\)\(.*\)\(.scss'\)/\1\2.css'/g" dist/components/*/*.js dist/components/*/*.ts

find dist/components -type f -name '*.scss*' -delete
find dist/components -type f -name '*.stories.js*' -delete


rm -r dist/components/_NewComponentTemplate
rm -r dist/color-token-generator
rm -r dist/showcases
rm -r dist/design-tokens
rm dist/react-app-env.d.js
rm dist/App.js
rm dist/App.d.ts
rm dist/App.css
rm dist/App.scss
rm dist/index.css
rm dist/index.scss
rm dist/styles.scss