#! /bin/bash

echo "开始打包："
grunt build
if [ $? -eq 0 ]; then
    echo "打包完成开始上传"
    scp -r dist/* root@121.251.255.96:/home/wwwroot/yb.upc.edu.cn/project/dormsearch/
else
    echo "出错了，检查错误";
fi

exit 0
