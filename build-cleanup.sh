echo "export * from './components'" > dist/index.d.ts
echo "export * from './components'" > dist/index.js
rm -r dist/components/_NewComponentTemplate
rm dist/react-app-env.d.js
rm dist/App.js
rm dist/App.d.js

find dist/components -type f -name '*.scss*' -delete
find dist/components -type f -name '*.stories.js*' -delete

sed -i ''  "s/\(import '\.\/\)\(.*\)\(.scss'\)/\1\2.css'/g" dist/components/*/*.js dist/components/*/*.ts