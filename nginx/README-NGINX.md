# Crear un servidor local con NGINX en Windows
## 1. Descargar y ejecutar NGINX 
- Descargar de la página oficial de [NGINX](https://nginx.org/en/download.html) la versión de Windows.
- Descomprimir en la carpeta que queramos, por ejemplo:
```
c:/nginx
```
- Abir la terminal.
- Acceder a la carpeta.
```
cd c:/nginx
```

## 2. Crer el servidor para que responda a una url ficticia (http://prueba.local)
- Editar el fichero conf/nginx.conf.
- Crear un servidor con "server". (Ir a 2.1).
- Tenemos dos opciones disponibles:
  - Crear un servidor para una aplicación Angular sin multiidioma. ( ir a 2.2).
  - Crear un servidor para una aplicación Angular con multiidioma. ( ir a 2.3).

### 2.1 Crear un servidor (común para sin y con multiidioma)
- Los ficheros crt y key puedes obtenerlos del email enviado por Altran para acceder a la VPN (Certificados VPN de Altran España), o bien generarlos con cualquier herramienta que lo permita, como por ejemplo OpenSSl. [Ver una guía aquí](https://www.ssldragon.com/es/how-to/openssl/create-self-signed-certificate-openssl/) .

```
server {
  listen 80;
  listen [::]:80;
  listen 443 ssl;
  listen [::]:443 ssl;
  ssl_certificate c:/nginx/certificados/fichero.crt;
  ssl_certificate_key c:/nginx/certificados/fichero.key;

  server_name prueba.local; # Nombre del servidor

  root c:/nginx/html/prueba; # Ruta absoluta donde se alojan los ficheros del servidor
}
```

### 2.2 Crear un servidor sin multiidioma

```
http {
  ...
  # servidor sin multiidioma
  server {
    listen 80;
    listen [::]:80;
    listen 443 ssl;
    listen [::]:443 ssl;
    ssl_certificate c:/nginx/certificados/fichero.crt;
    ssl_certificate_key c:/nginx/certificados/fichero.key;
    
    server_name prueba1.local;
    
    root c:/nginx/html/prueba1; # Ruta absoluta donde se alojan los ficheros del servidor

    index index.html;						
    
    # Configuración para la navegación interna
    location / {
      try_files $uri /index.html;
    }
  }
}
```

### 2.3. Configurar el servidor para que soporte multiidioma por carpetas

```
http {
  # Define los idiomas permitidos
  ...
  map $http_accept_language $accept_language {
    ~*^es es;
    ~*^ca ca;
    ~*^en en;
    ~*^va va;
    ~*^gl gl;
    ~*^eu eu;
  }
  ...

  # Servidor con multiidioma
  server {
    listen 80;
    listen [::]:80;
    listen 443 ssl;
    listen [::]:443 ssl;
    ssl_certificate c:/nginx/certificados/fichero.crt;
    ssl_certificate_key c:/nginx/certificados/fichero.key;
	 
    server_name prueba2.local;
		
    root c:/nginx/html/prueba2;
    
    # Redirige al idioma preferido del navegador
    if ($accept_language ~ "^$") {
      set $accept_language "es";
    }
    
    # Redirige a la carpeta 'es' si no coincide con los idiomas definidos
    location / {
      try_files $uri $uri/ /$accept_language/;
    }	
    
    rewrite ^/$ /$accept_language;
                  
    # Configuración para la carpeta config siempre en el root
    location /config/ {
        autoindex on;
    }
    
    # Redirige cada idioma a su carpeta
    location /es/ {
      try_files $uri /es/index.html;
    }
    location /ca/ {
      try_files $uri /ca/index.html;
    }
    location /eu/ {
      try_files $uri /eu/index.html;
    }
    location /gl/ {
      try_files $uri /gl/index.html;
    }
    location /va/ {
      try_files $uri /va/index.html;
    }
    location /en/ {
      try_files $uri /en/index.html;
    }				
  }
}
```

## 3. Modificar el fichero host  .

- Modificar el archivo host de Windows para añadir la redirección de prueba.local al la ip 127.0.0.1.
```
C:\Windows\System32\drivers\etc
...
127.0.0.1   prueba1.local
127.0.0.1   prueba2.local
...
```

## 4. Ejecutar el servidor NGINX.
- En la carpeta donde está el ejecutable (c:/nginx), ejecutar el servidor.
```
start nginx
```

## 5. Acceder a la url del servidor.

- En el navegador poner https://prueba1.local, y deberemos poder acceder a la página.
