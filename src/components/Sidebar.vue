<template>
    <sidebar-menu :menu="menu" />
</template>

<script>

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import { SidebarMenu } from 'vue-sidebar-menu'
export default {
    data() {
        return {
            menu: [
                    {
                        header: true,
                        title: 'Admin Panel',
                        // component: componentName
                        // visibleOnCollapse: true
                        // class:''
                        // attributes: {}
                    },
                    { // item
                        href: '/anasayfa',
                        title: 'Dashboard',
                        icon: "fa fa-home",
                        // disabled: true
                        // class:''
                        // attributes: {}
                        /*
                        badge: {
                            text: 'new',
                            // class:''
                            // attributes: {}
                        }
                        */
                    },
                    { // item
                        href: '/hakkimda',
                        title: 'Hakkımda',
                        icon: 'fa fa-user',
                    },
                    { // item
                        href: '/deneyimler',
                        title: 'Deneyimler',
                        icon: 'fa fa-handshake',
                    },
                    { // item
                        href: '/hizmetler',
                        title: 'Hizmetler',
                        icon: 'fa fa-suitcase',
                    },
                    { // item
                        href: '/islerim',
                        title: 'İşlerim',
                        icon: 'fa fa-check',
                    },
                    { // item
                        href: '/motivasyonlar',
                        title: 'Motivasyonlarım',
                        icon: 'fa fa-child',
                    },
                    { // item
                        href: '/cikis',
                        title: 'Çıkış',
                        icon: 'fa fa-reply-all',
                    }
            ]
        }
    },
    components: {
        SidebarMenu
    }

}
</script>

