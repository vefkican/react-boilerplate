@"
#!/bin/bash

# Kullanım: ./init.sh MyApp

NEW_NAME=`$1`

if [ -z "`$NEW_NAME`" ]; then
  echo "Kullanım: ./init.sh <ProjectName>"
  exit 1
fi

OLD_NAME="react-boilerplate"

echo "Değiştiriliyor: `$OLD_NAME` → `$NEW_NAME`"

# package.json içindeki proje adını değiştir
sed -i "s/`$OLD_NAME`/`$NEW_NAME`/g" package.json

echo ""
echo "`$NEW_NAME` hazır!"
echo ""
echo "Sonraki adımlar:"
echo "  1. .env dosyasını oluştur: VITE_API_URL=http://localhost:8080"
echo "  2. npm install"
echo "  3. npm run dev"
"@ | Out-File -FilePath init.sh -Encoding utf8