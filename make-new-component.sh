#! /bin/bash
name="$1"
dirname="src/components/$name"
mkdir "$dirname"
search="_NewComponentTemplate"
cp -r ./src/components/_NewComponentTemplate/. "$dirname"

mv "$dirname/_NewComponentTemplate.css" "$dirname/$name.css"
mv "$dirname/_NewComponentTemplate.tsx" "$dirname/$name.tsx"

sed -i '' "s/${search}/${name}/g" "${dirname}/$name.css"
sed -i '' "s/${search}/${name}/g" "${dirname}/$name.tsx"

sed -i '' "s/${search}/${name}/g" "${dirname}/index.ts"

printf "\n//export * from './${name}'" >> "src/components/index.ts"