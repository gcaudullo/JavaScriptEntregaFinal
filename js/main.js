const productos = [];
let idUniversal = 0;

class producto {
    constructor(id, nombre, imagen, alt, categoria, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.alt = alt;
        this.categoria = categoria;
        this.precio = precio;
    }
}
/*CARGO CELULARES A MI ARRAY DE PRODUCTOS*/
productos.push(new producto(idUniversal++, "Apple Ipad 10 9 10th gen wifi 256Gb pink mpqc3ll", "./img/cel-tecno/apple-ipad-10-9-10th-gen-wifi-256gb-pink-mpqc3ll-a-apple-ipad-10-9-10th-gen-wifi-256gb-pink-mpqc3ll-a-959.webp", "apple-ipad-10-9-10th-gen-wifi-256gb-pink-mpqc3ll", "Celulares", 959));
productos.push(new producto(idUniversal++, "Apple Watch se 2nd gen gps 44mm starlight temp sense", "./img/cel-tecno/apple-watch-se-2nd-gen-gps-44mm-starlight-aluminum-case-mnte3lla-apple-watch-se-2nd-gen-gps-44mm-starlight-aluminum-case-mnte3lla-479.webp", "apple-watch-se-2nd-gen-gps-44mm-starlight", "Celulares", 479));
productos.push(new producto(idUniversal++, "Apple Watch series 8 gps 41mm midnigh temp sense", "./img/cel-tecno/apple-watch-series-8-gps-41mm-midnight-aluminum-case-mnu73-mnu83-apple-watch-series-8-gps-41mm-midnight-aluminum-case-mnu73-mnu83-649.webp", "apple-watch-series-8-gps-41mm-midnight", "Celulares", 649));
productos.push(new producto(idUniversal++, "Cel Samsung Galaxy A04 sm a045mz ds 64Gb", "./img/cel-tecno/cel-samsung-galaxy-a04-sm-a045mz-ds-64gb-green-cel-samsung-galaxy-a04-sm-a045mz-ds-64gb-green-179.webp", "cel-samsung-galaxy-a04-sm-a045mz-ds-64gb", "Celulares", 179));
productos.push(new producto(idUniversal++, "Cel Samsung Galaxy A525 8Gb 256Gb", "./img/cel-tecno/cel-samsung-galaxy-a525-8gb-256gb-ds-white-cel-samsung-galaxy-a525-8gb-256gb-ds-white-499.webp", "cel-samsung-galaxy-a525-8gb-256gb", "Celulares", 499));
productos.push(new producto(idUniversal++, "Celular Honor X6 color azul 4Gb 64Gb", "./img/cel-tecno/celular-honor-x6-color-azul-4gb-64gb-celular-honor-x6-color-azul-4gb-64gb-189.webp", "celular-honor-x6-color-azul-4gb-64gb", "Celulares", 189));
productos.push(new producto(idUniversal++, "Celular Huawei Nova 9 128Gb 8Gb black", "./img/cel-tecno/celular-huawei-nova-9-128gb-8gb-black-celular-huawei-nova-9-128gb-8gb-black-539.webp", "celular-huawei-nova-9-128gb-8gb-black", "Celulares", 539));
productos.push(new producto(idUniversal++, "Cel Moto E32 64Gb gris", "./img/cel-tecno/moto-e32-64-gb-gris-4-gb-ram-moto-e32-64-gb-gris-4-gb-ram-189.webp", "moto-e32-64-gb-gris", "Celulares", 189));
productos.push(new producto(idUniversal++, "Cel Samsung Galaxy S20 fe 5g dual sim 128 Gb", "./img/cel-tecno/samsung-galaxy-s20-fe-5g-dual-sim-128-gb-cloud-white-6-gb-ram-samsung-galaxy-s20-fe-5g-dual-sim-128-gb-cloud-white-6-gb-ram-599.webp", "samsung-galaxy-s20-fe-5g-dual-sim-128-gb", "Celulares", 599));
productos.push(new producto(idUniversal++, "Tablet con funda Lenovo tab M7 3rd gen", "./img/cel-tecno/tablet-con-funda-lenovo-tab-m7-3rd-gen-tb-7306f-7-32gb-iron-gray-2gb-tablet-con-funda-lenovo-tab-m7-3rd-gen-tb-7306f-7-32gb-iron-gray-2gb-134.webp", "tablet-con-funda-lenovo-tab-m7-3rd-gen", "Celulares", 134));
productos.push(new producto(idUniversal++, "Cel Xiaomi Redmi 10a dual sim 64Gb plata", "./img/cel-tecno/xiaomi-redmi-10a-dual-sim-64-gb-plata-cromada-3-gb-ram-xiaomi-redmi-10a-dual-sim-64-gb-plata-cromada-3-gb-ram-153.webp", "xiaomi-redmi-10a-dual-sim-64-gb-plata", "Celulares", 153));
productos.push(new producto(idUniversal++, "Cel Xiaomi Redmi 12c 128 4Gb camara dual 50mpx", "./img/cel-tecno/xiaomi-redmi-12c-128-4-gb-camara-dual-50-mpx-5000-mah-gris-xiaomi-redmi-12c-128-4-gb-camara-dual-50-mpx-5000-mah-gris-184.jpg", "Celulares", "xiaomi-redmi-12c-128-4-gb-camara-dual-50-mpx-5000-mah", 189));
productos.push(new producto(idUniversal++, "Cel Xiaomi Redmi Note 11s 5g dual sim 128Gb 4Gb RAM", "./img/cel-tecno/xiaomi-redmi-note-11s-5g-dual-sim-128-gb-midnight-black-4-gb-ram-xiaomi-redmi-note-11s-5g-dual-sim-128-gb-midnight-black-4-gb-ram-329.webp", "Celulares", "xiaomi-redmi-note-11s-5g-dual-sim-128-gb-black-4-gb-ram", 329));

/*CARGO ELECTRODOMESTICOS A MI ARRAY DE PRODUCTOS*/
productos.push(new producto(idUniversal++, "Cafetera punktal PK 426", "./img/electrodomesticos/cafetera-punktal-pk-426-caf-semi-automatica-negra-de-filtro-220v-240-cafetera-punktal-pk-426-caf-semi-automatica-negra-de-filtro-220v-240.jpg", "cafetera-punktal-pk-426", "Electrodomesticos", 25));
productos.push(new producto(idUniversal++, "Cocina Punktal Agile Glass PK Gl5 a gas", "./img/electrodomesticos/cocina-punktal-agile-glass-pk-gl5-gas-envasado-5-hornallas-negra-220v-cocina-punktal-agile-glass-pk-gl5-gas-envasado-5-hornallas-negra-220v.jpg", "Cocina Punktal Agile Glass PK Gl5 a gas", "Electrodomesticos", 352));
productos.push(new producto(idUniversal++, "Cocina Punktal Coliseum PK 299c a gas 5 hornallas", "./img/electrodomesticos/cocina-punktal-coliseum-pk-299c-gas-5-hornallas-gris-220v-84-litros-cocina-punktal-coliseum-pk-299c-gas-5-hornallas-gris-220v-84-litros.jpg", "cocina-punktal-coliseum-pk-299c-gas-5-hornallas", "Electrodomesticos", 229));
productos.push(new producto(idUniversal++, "Cocina Punktal a gas inox", "./img/electrodomesticos/cocina-punktal-s-gas-inox-gl44inox-cocina-punktal-s-gas-inox-gl44inox.jpg", "cocina-punktal-s-gas-inox", "Electrodomesticos", 125));
productos.push(new producto(idUniversal++, "Freidora Enxuta sadenxfsa1116", "./img/electrodomesticos/freidora-enxuta-sadenxfsa1116-freidora-enxuta-sadenxfsa1116.jpg", "freidora-enxuta-sadenxfsa1116", "Electrodomesticos", 159));
productos.push(new producto(idUniversal++, "Freidora sin aceite Midea 12lt mf cy120a", "./img/electrodomesticos/freidora-sin-aceite-midea-12lt-mf-cy120a-freidora-sin-aceite-midea-12lt-mf-cy120a.jpg", "freidora-sin-aceite-midea-12lt-mf-cy120a", "Electrodomesticos", 219));
productos.push(new producto(idUniversal++, "Heladera inverter LG-GS66spp", "./img/electrodomesticos/heladera-inverter-lg-gs66spp-platinum-silver-con-freezer-591l-220v-heladera-inverter-lg-gs66spp-platinum-silver-con-freezer-591l-220v.jpg", "heladera-inverter-lg-gs66spp", "Electrodomesticos", 1919));
productos.push(new producto(idUniversal++, "Heladera inverter no frost Samsung top mount RT48a6684", "./img/electrodomesticos/heladera-inverter-no-frost-samsung-top-mount-rt48a6684-black-doi-con-heladera-inverter-no-frost-samsung-top-mount-rt48a6684-black-doi-con.jpg", "heladera-inverter-no-frost-samsung-top-mount-rt48a6684", "Electrodomesticos", 1289));
productos.push(new producto(idUniversal++, "Jarra Electrica Enxuta sdaenxj5151", "./img/electrodomesticos/jarra-electrica-enxuta-sdaenxj5151-jarra-electrica-enxuta-sdaenxj5151.jpg", "jarra-electrica-enxuta-sdaenxj5151", "Electrodomesticos", 36));
productos.push(new producto(idUniversal++, "Lavarropas LG 19kgs carga superior wt19bsb", "./img/electrodomesticos/lavarropas-lg-19-kgs-carga-superior-wt19bsb-lavarropas-lg-19-kgs-carga-superior-wt19bsb.jpg", "lavarropas-lg-19-kgs-carga-superior-wt19bsb", "Electrodomesticos", 890));
productos.push(new producto(idUniversal++, "Microondas Enxuta moenx0325dg", "./img/electrodomesticos/microondas-enxuta-moenx0325dg-microondas-enxuta-moenx0325dg.jpg", "microondas-enxuta-moenx0325dg", "Electrodomesticos", 159));
productos.push(new producto(idUniversal++, "Microondas Grill Enxuta moenx0323dgi acero inox", "./img/electrodomesticos/microondas-grill-enxuta-moenx0323dgi-acero-inox-23l-microondas-grill-enxuta-moenx0323dgi-acero-inox-23l.jpg", "microondas-grill-enxuta-moenx0323dgi-acero-inox", "Electrodomesticos", 220));
productos.push(new producto(idUniversal++, "Microondas Midea 20l espejado mmdv07s2dg", "./img/electrodomesticos/microondas-midea-20l-espejado-mmdv07s2dg-b-microondas-midea-20l-espejado-mmdv07s2dg-b.jpg", "microondas-midea-20l-espejado-mmdv07s2dg", "Electrodomesticos", 129));
productos.push(new producto(idUniversal++, "Philips jarra electrica hd9318", "./img/electrodomesticos/philips-jarra-electrica-hd9318-20-philips-jarra-electrica-hd9318-20.jpg", "philips-jarra-electrica-hd9318", "Electrodomesticos", 59));
productos.push(new producto(idUniversal++, "Plancha a vapor Enxuta sdaenxp284", "./img/electrodomesticos/plancha-a-vapor-enxuta-sdaenxp284-plancha-a-vapor-enxuta-sdaenxp284.jpg", "plancha-a-vapor-enxuta-sdaenxp284", "Electrodomesticos", 99));
productos.push(new producto(idUniversal++, "Refrigerador Enxuta renx24280fhs", "./img/electrodomesticos/refrigerador-enxuta-renx24280fhs-refrigerador-enxuta-renx24280fhs.webp", "refrigerador-enxuta-renx24280fhs", "Electrodomesticos", 475));
productos.push(new producto(idUniversal++, "Samsung refrigerador frio seco 430 lts RT44a6640b1", "./img/electrodomesticos/samsung-refrigerador-frio-seco-430-lts-rt44a6640b1-samsung-refrigerador-frio-seco-430-lts-rt44a6640b1.jpg", "samsung-refrigerador-frio-seco-430-lts-rt44a6640b1", "Electrodomesticos", 1399));
productos.push(new producto(idUniversal++, "Termotanque Enxuta 25 litros", "./img/electrodomesticos/termotanque-enxuta-25-litros-tenx1025-termotanque-enxuta-25-litros-tenx1025.jpg", "termotanque-enxuta-25-litros", "Electrodomesticos", 115));

/*CARGO ELECTRODOMESTICOS A MI ARRAY DE PRODUCTOS*/
productos.push(new producto(idUniversal++, "Apple Macbook air 13' m2 8gb RAM 256gb SSD silver", "./img/notebooks/apple-macbook-air-13-6-m2-8gb-256gb-silver-mlxy3lla-apple-macbook-air-13-6-m2-8gb-256gb-silver-mlxy3lla.jpg", "apple-macbook-air-13-6-m2-8gb-256gb-silver", "Notebooks", 2000));
productos.push(new producto(idUniversal++, "Apple Macbook air 13' m2 8gb RAM 256gb SSD Gris", "./img/notebooks/apple-macbook-air-13-6-m2-8gb-256gb-sp-gray-mlxw3lla-apple-macbook-air-13-6-m2-8gb-256gb-sp-gray-mlxw3lla.jpg", "apple-macbook-air-13-6-m2-8gb-256gb-sp-gray", "Notebooks", 2000));
productos.push(new producto(idUniversal++, "ASUS Vivobook m513ia bq322t", "./img/notebooks/asus-vivobook-m513ia-bq322t-asus-vivobook-m513ia-bq322t.jpg", "asus-vivobook-m513ia", "Notebooks", 800));
productos.push(new producto(idUniversal++, "Gateway Ultra Slim gwtn141 FHD Core i3 6GB RAM 128GB SSD Win10 Blue", "./img/notebooks/gateway-ultra-slim-gwtn141-6bl-14-1-fhd-i3-4gb-128gb-w10-blue-gateway-ultra-slim-gwtn141-6bl-14-1-fhd-i3-4gb-128gb-w10-blue.jpg", "gateway-ultra-slim-gwtn141-6bl-14-1-fhd-i3-4gb-128gb-w10-blue", "Notebooks", 600));
productos.push(new producto(idUniversal++, "HP-14\" dq2088wm HD Core i5 8GB RAM 256GB SSD Win10Home", "./img/notebooks/hp-14-dq2088wm-14-hd-i5-8gb-256gb-ssd-w10h-hp-14-dq2088wm-14-hd-i5-8gb-256gb-ssd-w10h.jpg", "hp-14-dq2088wm-14-hd-i5-8gb-256gb-ssd-w10h", "Notebooks", 800));
productos.push(new producto(idUniversal++, "HP-14\" dq2088wm HD Core i3 8GB RAM 256GB SSD Win10", "./img/notebooks/hp-14-dq2089wm-14-hd-i3-8gb-256gb-ssd-w10-camo-refurbished-hp-14-dq2089wm-14-hd-i3-8gb-256gb-ssd-w10-camo-refurbished.jpg", "hp-14-dq2089wm-14-hd-i3-8gb-256gb-ssd-w10-camo-refurbished", "Notebooks", 659));
productos.push(new producto(idUniversal++, "HP-15\" dy2061ms FHD Core i5 12GB RAM 256GB SSD Win11", "./img/notebooks/hp-15-dy2061ms-15-6-i5-12gb-256gb-ssd-w11-hp-15-dy2061ms-15-6-i5-12gb-256gb-ssd-w11.jpg", "hp-15-dy2061ms-15-6-i5-12gb-256gb-ssd-w11", "Notebooks", 900));
productos.push(new producto(idUniversal++, "Lenovo 15\" FHD Core i5 8GB RAM 512GB SSD Win10h", "./img/notebooks/lenovo-ip-1-14igl7-14-hd-n5030-4gb-128gb-emmc-w11-lenovo-ip-1-14igl7-14-hd-n5030-4gb-128gb-emmc-w11.jpg", "lenovo-ip-1-14igl7-14-hd-n5030-4gb-128gb-emmc-w11", "Notebooks", 2000));
productos.push(new producto(idUniversal++, "Apple Macbook PRO 13\" m2 8gb RAM 256gb SSD", "./img/notebooks/macbook-pro-13-3-retina-apple-m2-256-gb-ssd-8-gb-macbook-pro-13-3-retina-apple-m2-256-gb-ssd-8-gb.jpg", "macbook-pro-13-3-retina-apple-m2-256-gb-ssd-8-gb", "Notebooks", 1750));
productos.push(new producto(idUniversal++, "ASUS 14\" m2 FHD Core i3 4gb RAM 128gb SSD Win10", "./img/notebooks/notebook-asus-14-core-i3-128-gb-ssd-4-gb-ram-windows-notebook-asus-14-core-i3-128-gb-ssd-4-gb-ram-windows.jpg", "notebook-asus-14-core-i3-128-gb-ssd-4-gb-ram-windows", "Notebooks", 650));
productos.push(new producto(idUniversal++, "ASUS 14\" m2 FHD 8gb RAM 128gb SSD Win10", "./img/notebooks/notebook-asus-14-fhd-i3-128-gb-ssd-8-gb-ram-windows-10-notebook-asus-14-fhd-i3-128-gb-ssd-8-gb-ram-windows-10.jpg", "notebook-asus-14-fhd-i3-128-gb-ssd-8-gb-ram-windows-10", "Notebooks", 700));
productos.push(new producto(idUniversal++, "ASUS 15\" m2 OLED Core i5 8gb RAM 256gb SSD Win10", "./img/notebooks/notebook-asus-15-6-pantalla-oled-i5-256gb-ssd-8-gb-ram-k513ea-l12061t-notebook-asus-15-6-pantalla-oled-i5-256gb-ssd-8-gb-ram-k513ea-l12061t.jpg", "notebook-asus-15-6-pantalla-oled-i5-256gb-ssd-8-gb-ram-k513ea", "Notebooks", 1000));
productos.push(new producto(idUniversal++, "DELL 15\" m2 FHD Core i5 8gb RAM 256gb SSD Win10", "./img/notebooks/notebook-dell-15-6-fhd-ryzen-5-256gb-ssd-8gb-windows-10-notebook-dell-15-6-fhd-ryzen-5-256gb-ssd-8gb-windows-10.jpg", "notebook-dell-15-6-fhd-ryzen-5-256gb-ssd-8gb-windows-10", "Notebooks", 900));
productos.push(new producto(idUniversal++, "Gateway 15\" FHD Ryzen 7 8GB RAM 512GB SSD Win11 (Blue)", "./img/notebooks/notebook-gateway-15-6-ryzen-7-512-gb-ssd-8-gb-ram-w11-blue-notebook-gateway-15-6-ryzen-7-512-gb-ssd-8-gb-ram-w11-blue.jpg", "notebook-gateway-15-6-ryzen-7-512-gb-ssd-8-gb-ram-w11-blue", "Notebooks", 550));
productos.push(new producto(idUniversal++, "Gateway 15\" FHD Ryzen 7 8GB RAM 512GB SSD Win11", "./img/notebooks/notebook-gateway-15-6-ryzen-7-512-gb-ssd-8-gb-ram-w11-notebook-gateway-15-6-ryzen-7-512-gb-ssd-8-gb-ram-w11.jpg", "notebook-gateway-15-6-ryzen-7-512-gb-ssd-8-gb-ram-w11", "Notebooks", 600));
productos.push(new producto(idUniversal++, "Lenovo 15\" FHD Core i5 8GB RAM 512GB SSD Win10h", "./img/notebooks/notebook-lenovo-ip-3-15itl6-i3-1115g4-8gb-512gb-w10h-82h80080lm-notebook-lenovo-ip-3-15itl6-i3-1115g4-8gb-512gb-w10h-82h80080lm.jpg", "notebook-lenovo-ip-3-15itl6-i3-1115g4-8gb-512gb-w10h", "Notebooks", 1100));
productos.push(new producto(idUniversal++, "Lenovo 15\" FHD Core i5 16GB RAM 256GB SSD Win11", "./img/notebooks/notebook-lenovo-ip-5-15itl05-i5-1135g7-16gb-256gb-mx450-82fg00velm-notebook-lenovo-ip-5-15itl05-i5-1135g7-16gb-256gb-mx450-82fg00velm.jpg", "notebook-lenovo-ip-5-15itl05-i5-1135g7-16gb-256gb-mx450", "Notebooks", 900));

/*CARGO TV Y VIDEO A MI ARRAY DE PRODUCTOS*/
productos.push(new producto(idUniversal++, "Amazon Echo Dot 5th gen con asistente virtual alexa charcoal", "./img/tv-video/amazon-echo-dot-5th-gen-con-asistente-virtual-alexa-charcoal-110v-240v-amazon-echo-dot-5th-gen-con-asistente-virtual-alexa-charcoal-110v-240v.jpg", "amazon-echo-dot-5th-gen-con-asistente-virtual-alexa-charcoal-110v-240v", "TV y Audio", 99));
productos.push(new producto(idUniversal++, "Barra de Sonido lg sp2 barra de sonido lg sp2", "./img/tv-video/barra-de-sonido-lg-sp2-barra-de-sonido-lg-sp2.jpg", "barra-de-sonido-lg-sp2-barra-de-sonido-lg-sp2", "TV y Audio", 319));
productos.push(new producto(idUniversal++, "Enxuta smart tv 24\" ledenx1224d1k", "./img/tv-video/enxuta-smart-tv-24-ledenx1224d1k-enxuta-smart-tv-24-ledenx1224d1k.jpg", "enxuta-smart-tv-24-ledenx1224d1k", "TV y Audio", 134));
productos.push(new producto(idUniversal++, "JBL wave 300 tws headphone truly wireless black", "./img/tv-video/jbl-wave-300-tws-headphone-truly-wireless-black-jbl-wave-300-tws-headphone-truly-wireless-black.jpg", "jbl-wave-300-tws-headphone", "TV y Audio", 89));
productos.push(new producto(idUniversal++, "Minicomponente LG Cl88", "./img/tv-video/minicomponente-lg-cl88-minicomponente-lg-cl88.jpg", "minicomponente-lg-cl88-minicomponente-lg-cl88", "TV y Audio", 799));
productos.push(new producto(idUniversal++, "Minicomponente LG Xboom Cl65", "./img/tv-video/minicomponente-lg-xboom-cl65-minicomponente-lg-xboom-cl65.jpg", "minicomponente-lg-xboom-cl65n", "TV y Audio", 449));
productos.push(new producto(idUniversal++, "Nintendo Switch Oled 64gb", "./img/tv-video/nintendo-switch-oled-64gb-standard-color-rojo-neon-azul-neon-y-negro-nintendo-switch-oled-64gb-standard-color-rojo-neon-azul-neon-y-negro.jpg", "nintendo-switch-oled-64gb", "TV y Audio", 650));
productos.push(new producto(idUniversal++, "Parlante JBL flip 6 portatil bluetooth potencia 20w", "./img/tv-video/parlante-jbl-flip-6-portatil-bluetooth-potencia-20w-amv-parlante-jbl-flip-6-portatil-bluetooth-potencia-20w-amv.jpg", "parlante-jbl-flip-6-portatil-bluetooth-potencia-20w", "TV y Audio", 144));
productos.push(new producto(idUniversal++, "Smart TV led Xiaomi l32m6 6a android tv", "./img/tv-video/smart-tv-led-xiaomi-l32m6-6a-android-tv-google-asitente-smart-tv-led-xiaomi-l32m6-6a-android-tv-google-asitente.jpg", "smart-tv-led-xiaomi-l32m6-6a-android-tv", "TV y Audio", 289));
productos.push(new producto(idUniversal++, "Smart TV LG 42\" oled oled42c2psa", "./img/tv-video/smart-tv-lg-42-oled-oled42c2psa-smart-tv-lg-42-oled-oled42c2psa.jpg", "smart-tv-lg-42-oled-oled42c2psa", "TV y Audio", 559));
productos.push(new producto(idUniversal++, "Smart TV LG 55\" oled oled55c2psa", "./img/tv-video/smart-tv-lg-55-oled55a2psa-ultra-hd-4k-web-os-oled-smart-tv-lg-55-oled55a2psa-ultra-hd-4k-web-os-oled.jpg", "smart-tv-lg-55-oled-oled55c2psa", "TV y Audio", 2849));
productos.push(new producto(idUniversal++, "Smart TV LG AI thinq 50nano75spa led 4k 50\"", "./img/tv-video/smart-tv-lg-ai-thinq-50nano75spa-led-4k-50-100v-240v-smart-tv-lg-ai-thinq-50nano75spa-led-4k-50-100v-240v.jpg", "smart-tv-lg-ai-thinq-50nano75spa-led-4k-50", "TV y Audio", 849));
productos.push(new producto(idUniversal++, "Smart TV Samsung 43\" 4k UHD un43bu80000", "./img/tv-video/smart-tv-samsung-43-4k-uhd-control-con-comando-de-voz-un43bu80000-smart-tv-samsung-43-4k-uhd-control-con-comando-de-voz-un43bu80000.jpg", "smart-tv-samsung-43-4k-uhd", "TV y Audio", 497));
productos.push(new producto(idUniversal++, "Smart TV Samsung 65\" 4k UHD led un65bu80000", "./img/tv-video/smart-tv-samsung-crystal-uhd-un65bu8000gxzd-led-4k-65-100v-240v-smart-tv-samsung-crystal-uhd-un65bu8000gxzd-led-4k-65-100v-240v.jpg", "smart-tv-samsung-crystal-uhd-un65bu8000gxzd-led-4k-65", "TV y Audio", 1235));
productos.push(new producto(idUniversal++, "Smart TV Xiaomi mi 50\" led 4k", "./img/tv-video/smart-tv-xiaomi-mi-tv-p1-50-led-4k-50-100v-240v-smart-tv-xiaomi-mi-tv-p1-50-led-4k-50-100v-240v.jpg", "smart-tv-xiaomi-mi-tv-p1-50-led-4k", "TV y Audio", 599));
productos.push(new producto(idUniversal++, "Sony Playstation 5 825Gb FIFA 23 bundle color blanco y negro", "./img/tv-video/sony-playstation-5-825gb-fifa-23-bundle-color-blanco-y-negro-sony-playstation-5-825gb-fifa-23-bundle-color-blanco-y-negro.jpg", "sony-playstation-5-825gb-fifa-23-bundle-color-blanco-y-negro", "TV y Audio", 1200));
productos.push(new producto(idUniversal++, "Xiaomi TV 65\"", "./img/tv-video/xiaomi-tv-p1e-65-lm-xiaomi-tv-p1e-65-lm.jpg", "xiaomi-tv-p1e-65-lm", "TV y Audio", 899));


const contenedorProductos = document.querySelector("#contenedor-productos")
console.log(contenedorProductos);

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.alt}"
        <div class="producto-detalles">
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <p class="producto-precio"><strong>USD ${producto.precio}</strong></p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div);
    });
    
}

cargarProductos();

