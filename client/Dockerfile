FROM nginx:1.13

# 删除 Nginx 的默认配置
RUN rm /etc/nginx/conf.d/default.conf

# 添加自定义 Nginx 配置
COPY config/nginx.conf /etc/nginx/conf.d/

# 将前端静态文件拷贝到容器的 /www 目录下
COPY dist /www
