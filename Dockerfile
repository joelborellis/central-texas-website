#FROM httpd:2.4
#COPY . /usr/local/apache2/htdocs/

FROM php:7.2-apache
COPY . /var/www/html/