import React from 'react'
import ReactDOM from 'react-dom/client'
import '@vkontakte/vkui/dist/vkui.css'
import { FixedLayout, PromoBanner } from '@vkontakte/vkui'

if (!window.bridgeExtensions) {
    window.bridgeExtensions = { }
}

if (!window.bridgeExtensions.vk) {
    window.bridgeExtensions.vk = { }
}

window.bridgeExtensions.vk.banner = {
    version: '1.0.0'
}

window.bridgeExtensions.vk.banner.container = document.createElement('div')
window.bridgeExtensions.vk.banner.container.id = 'vk-banner-container'
document.body.appendChild(window.bridgeExtensions.vk.banner.container)

window.bridgeExtensions.vk.banner.reactApp = ReactDOM.createRoot(window.bridgeExtensions.vk.banner.container)

window.bridgeExtensions.vk.banner.hide = function() {
    window.bridgeExtensions.vk.banner.container.style.display = 'none'
}

window.bridgeExtensions.vk.banner.show = function(data, position) {
    if (!position) {
        position = 'bottom'
    }

    window.bridgeExtensions.vk.banner.reactApp.render(<React.StrictMode><FixedLayout vertical={position}><PromoBanner bannerData={ data } onClose={ () => window.bridgeExtensions.vk.banner.hide() }/></FixedLayout></React.StrictMode>)
    window.bridgeExtensions.vk.banner.container.style.display = 'block'
}

console.log('%c InstantGamesBridge VkBannerExtension v.' + window.bridgeExtensions.vk.banner.version + ' added. ', 'background: #7445a3; color: white')