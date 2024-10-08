New-Item "./dist/" -ItemType Directory -Force && Copy-Item -Path "./public/*" -Destination "./dist" -Recurse
