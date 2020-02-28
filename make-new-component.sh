#! /bin/bash
name="$1"
dirname="src/design-system/component-library/$name"
mkdir "$dirname"
search="_NewComponentTemplate"
cp -r ./src/design-system/component-library/_NewComponentTemplate/. "$dirname"

mv "$dirname/_NewComponentTemplate.css" "$dirname/$name.css"
mv "$dirname/_NewComponentTemplate.tsx" "$dirname/$name.tsx"

sed -i '' "s/${search}/${name}/g" "${dirname}/$name.css"
sed -i '' "s/${search}/${name}/g" "${dirname}/$name.tsx"

printf "\n//export * from './${name}" >> "src/design-system/component-library/index.ts"