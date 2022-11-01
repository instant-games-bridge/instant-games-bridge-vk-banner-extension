# Instant Games Bridge Vk Banner Extension
Extension for displaying banners in VK without using React

## Usage
```html
<head>
    <link rel="stylesheet" type="text/css" href="./instant-games-bridge-vk-banner-extension.css">
</head>
<body></body>
<script src="./instant-games-bridge-vk-banner-extension.js"></script>
<script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"></script>
<script>
    vkBridge
        .send('VKWebAppInit')
        .then(() => {

            // show banner
            vkBridge
                .send('VKWebAppGetAds')
                .then(data => {
                    let position = 'top' // Supported values: top, bottom. Default: bottom.
                    bridgeExtensions.vk.banner.show(data, position)
                })

            // hide banner
            bridgeExtensions.vk.banner.hide()
        })
</script>
```