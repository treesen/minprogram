#!/bin/sh
# npm install @tencent/tnpm -g --registry=http://r.tnpm.oa.com --no-proxy
type tnpm >/dev/null 2>&1 || npm install @tencent/tnpm -g --registry=http://r.tnpm.oa.com --no-proxy
tnpm install
tnpm run build

mkdir -p bin/
#mkdir -p bin/confTemp
#cp ./restart.sh ./bin
cp ./dist/* ./bin -r
#cp ./config.bak ./bin/confTemp/config.js
