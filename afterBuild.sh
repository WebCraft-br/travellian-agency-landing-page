# LC_ALL=C find "out" -type f -exec sed -i '' 's/\/_next/\.\/_next/g' {} +
pwd

echo pwd

LC_ALL=C find "out" -type f -exec sed -i '' 's/\/images/\.\/images/g' {} +

echo "Fixed"