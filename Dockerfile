FROM nginx:alpine AS base

LABEL maintainer="neet@michaeloshino.ru" \
      version="3.2" \
      description="Сайт портфолио"

COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

RUN rm -rf /usr/share/nginx/html/*
COPY site/ /usr/share/nginx/html/

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health || exit 1