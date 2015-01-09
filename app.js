"use strict";

// Load the libraries and modules

var config = {
    npm: __dirname + '/node_modules/',
    libraries: {
        nodejs: {},
        npm: {
            Crawler: 'crawler',
            express: 'express',
            swig: 'swig'
        }
    },
    directory: __dirname + '/modules/',
    modules: {
        npm: {},
        directory: {
            app: {
                path: __dirname + '/web/',
                port: process.env.PORT
            },
            bower: {
                libraries: ['jquery', 'bootstrap'],
                path: __dirname + '/bower_components/'
            },
            swig: { views: __dirname + '/views/' },
            homepage: {
                feeds: [
                    {
                        title: 'Maxdome Blog',
                        description: 'RSS Feed des Maxdome Blogs mit den News aus der Welt der Filme',
                        link: 'http://blog.maxdome.de/feed'
                    },
                    {
                        title: 'Maxdome News Blog',
                        description: 'RSS Feed des Maxdome Blogs mit den News der Firma Maxdome',
                        link: 'http://blog.maxdome.de/maxdome-news/feed'
                    },
                    {
                        title: 'Serien im Paket',
                        description: 'RSS Feed mit den neuen Serien im Monatspaket',
                        link: '/package/new-series'
                    },
                    {
                        title: 'Filme im Paket',
                        description: 'RSS Feed mit den neuen Filmen im Monatspaket',
                        link: '/package/new-movies'
                    },
                    {
                        title: 'Serien im Store',
                        description: 'RSS Feed mit den neuen Serien im Store',
                        link: '/store/new-series'
                    },
                    {
                        title: 'Filme im Store',
                        description: 'RSS Feed mit den neuen Filmen im Store',
                        link: '/store/new-movies'
                    }
                ]
            },
            crawler: {},
            maxdome: {},
            rss: {
                feeds: [
                    {
                        route: '/package/new-series',
                        channel: {
                            title: 'Serien im Paket',
                            description: 'RSS Feed mit den neuen Serien im Monatspaket',
                            link: 'http://www.maxdome.de/serie/neu-bei-maxdome'
                        },
                        parser: {
                            service: 'maxdome',
                            crawlerurl: 'http://www.maxdome.de/serie/neu-bei-maxdome',
                            asseturl: 'http://www.maxdome.de'
                        },
                        cache: 60
                    },
                    {
                        route: '/package/new-movies',
                        channel: {
                            title: 'Filme im Paket',
                            description: 'RSS Feed mit den neuen Filmen im Monatspaket',
                            link: 'http://www.maxdome.de/spielfilm/neu-bei-maxdome'
                        },
                        parser: {
                            service: 'maxdome',
                            crawlerurl: 'http://www.maxdome.de/spielfilm/neu-bei-maxdome',
                            asseturl: 'http://www.maxdome.de'
                        },
                        cache: 60
                    },
                    {
                        route: '/store/new-series',
                        channel: {
                            title: 'Serien im Store',
                            description: 'RSS Feed mit den neuen Serien im Store',
                            link: 'http://store.maxdome.de/serie/neu-bei-maxdome'
                        },
                        parser: {
                            service: 'maxdome',
                            crawlerurl: 'http://store.maxdome.de/serie/neu-bei-maxdome',
                            asseturl: 'http://store.maxdome.de'
                        },
                        cache: 60
                    },
                    {
                        route: '/store/new-movies',
                        channel: {
                            title: 'Filme im Store',
                            description: 'RSS Feed mit den neuen Filmen im Store',
                            link: 'http://store.maxdome.de/spielfilm/neu-bei-maxdome'
                        },
                        parser: {
                            service: 'maxdome',
                            crawlerurl: 'http://store.maxdome.de/spielfilm/neu-bei-maxdome',
                            asseturl: 'http://store.maxdome.de'
                        },
                        cache: 60
                    }
                ]
            }
        }
    }
};
require('dragonnodejs')(config);
