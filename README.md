# Proyecto Shopify - Web Designer Pixels

Este repositorio contiene un tema personalizado de Shopify desarrollado para la tienda Web Designer Pixels.

## Acceso a la tienda
* **URL:** https://webdesignerpixels.myshopify.com/
* **Contraseña:** 123123

## Requisitos previos
Para trabajar con este proyecto, necesitas tener instalado Shopify CLI en tu computadora. Si aún no lo tienes, puedes instalarlo siguiendo las instrucciones oficiales de Shopify.

## Cómo descargar el tema
Para descargar directamente el tema completo a tu computadora, ejecuta el siguiente comando en tu terminal:

```bash
theme get --password=shptka_5106854455b2bb830d9848ffd3931f8f --store="webdesignerpixels.myshopify.com" --themeid=148958183674
```

## Desarrollo local
Para trabajar localmente con el tema y ver los cambios en tiempo real, utiliza el siguiente comando:

```bash
shopify theme dev --store webdesignerpixels.myshopify.com --poll --theme-editor-sync
```

Este comando iniciará un servidor local que sincronizará automáticamente tus cambios con la tienda.

## Secciones personalizadas
Se han creado las siguientes secciones administrables desde el editor de temas de Shopify:
* Header personalizado
* Sección Hero
* Sección de bloques de contenido
* Footer personalizado

## Librerías utilizadas
* **WOW.js**: Se ha implementado esta librería para añadir animaciones atractivas a diferentes elementos del sitio.

## Ramas del proyecto
El desarrollo principal se realiza en la rama `staging`. Asegúrate de trabajar en esta rama para nuevas funcionalidades y mejoras.

## Contribuir al proyecto
1. Clona este repositorio: `git clone https://github.com/DrojasFrontend/pruebafrontendshopify.git`
2. Cambia a la rama staging: `git checkout staging`
3. Realiza tus cambios
4. Haz commit de tus cambios: `git commit -m "descripción de los cambios"`
5. Sube tus cambios al repositorio: `git push origin staging`