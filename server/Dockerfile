FROM node:10

# 指定工作目录为 /usr/src/app，接下来的命令全部在这个目录下操作
WORKDIR /usr/src/app

# 将 package.json 拷贝到工作目录
COPY package.json .

# 安装 npm 依赖
RUN npm config set registry https://registry.npm.taobao.org && npm install

# 拷贝源代码
COPY . .

# 设置环境变量
ENV NODE_ENV=production
ENV MONGO_URI=mongodb://db:27017/admin
ENV MONGO_USER=mongoadmin
ENV MONGO_PASSWORD=secret
ENV HOST=0.0.0.0
ENV PORT=3000

# 开放 3000 端口
EXPOSE 3000

# 设置镜像运行命令
CMD [ "node", "./bin/www" ]
