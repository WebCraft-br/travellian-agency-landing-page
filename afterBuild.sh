# LC_ALL=C find "out" -type f -exec sed -i '' 's/\/_next/\.\/_next/g' {} +

LC_ALL=C find "out" -type f -exec sed -i 's/\/images/\.\/images/g' {} +

LC_ALL=C find "out/_next/static/css" -type f -exec sed -i 's/.\/images/\..\/..\/..\/images/g' {} +

echo "Fixed"