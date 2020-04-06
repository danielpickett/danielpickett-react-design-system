#! /bin/bash
name="$1"
dirname="src/components/$name"
mkdir "$dirname"
search="_NewComponentTemplate"
cp -r ./src/components/_NewComponentTemplate/. "$dirname"

mv "$dirname/_NewComponentTemplate.scss" "$dirname/$name.scss"
mv "$dirname/_NewComponentTemplate.tsx" "$dirname/$name.tsx"

sed -i '' "s/${search}/${name}/g" "${dirname}/$name.scss"
sed -i '' "s/${search}/${name}/g" "${dirname}/$name.tsx"

sed -i '' "s/${search}/${name}/g" "${dirname}/index.ts"

printf "\n//export * from './${name}'" >> "src/components/index.ts"

code "$dirname/$name.tsx"
code "src/components/index.ts"
