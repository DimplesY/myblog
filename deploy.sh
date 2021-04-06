#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git config --global user.name "Dimples_Yj"
git config --global user.email "2890841438@qq.com"

# deploy to coding
echo 'www.dimples.top' > CNAME  # 自定义域名

if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:Dimples_Yj/vuepress_blog/vuepree_blog.git
else
  codingUrl=https://ptmmdvt1fchf:${CODING_TOKEN}@e.coding.net/Dimples_Yj/vuepress_blog/vuepree_blog.git
fi

msg='deploy'

git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist