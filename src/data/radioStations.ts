export interface RadioStationData {
  name: string;
  streamUrl: string;
  description?: string;
  favicon?: string;
  tags?: string;
  country?: string;
}

export const allRadioStations: RadioStationData[] = [
  {
    name: "MANGORADIO",
    streamUrl: "https://mangoradio.stream.laut.fm/mangoradio",
    favicon: "https://mangoradio.de/wp-content/uploads/cropped-Logo-192x192.webp",
    tags: "music,variety",
    country: "Germany"
  },
  {
    name: "Dance Wave!",
    streamUrl: "http://stream.dancewave.online:8080/dance.mp3",
    favicon: "https://dancewave.online/dw_logo.png",
    tags: "club dance electronic house trance",
    country: "Hungary"
  },
  {
    name: "REYFM - #original",
    streamUrl: "https://reyfm.stream37.radiohost.de/reyfm-original_mp3-192?upd-meta&upd-scheme=https&_art=dD0xNzY2MTUxMDEyJmQ9Yjk5YjE2NTA5YWEwNTBhYjhiMTU",
    favicon: "https://www.reyfm.de/icon.png",
    tags: "#original,fm,rey,reyfm",
    country: ""
  },
  {
    name: "Radio Paradise Main Mix (EU) 320k AAC",
    streamUrl: "http://stream-uk1.radioparadise.com/aac-320",
    favicon: "https://radioparadise.com/apple-touch-icon.png",
    tags: "california,eclectic,free,internet,non-commercial,paradise,radio",
    country: "The United States Of America"
  },
  {
    name: "Classic Vinyl HD",
    streamUrl: "https://icecast.walmradio.com:8443/classic",
    favicon: "https://icecast.walmradio.com:8443/classic.jpg",
    tags: "1930,1940,1950,1960,beautiful music,big band,classic hits,crooners,easy,easy listening,hd,jazz,light orchestral,lounge,oldies,orchestral,otr,relaxation,strings,swing,unwind,walm",
    country: "The United States Of America"
  },
  {
    name: "Adroit Jazz Underground",
    streamUrl: "https://icecast.walmradio.com:8443/jazz",
    favicon: "https://icecast.walmradio.com:8443/jazz.jpg",
    tags: "avant-garde,bebop,big band,bop,combos,contemporary,contemporary jazz,cool,cool jazz,free jazz,fusion,hard bop,hd,mainstream,mainstream jazz,modern,modern big band,post-bop,straight-ahead,walm,west coast",
    country: "The United States Of America"
  },
  {
    name: "Christmas Vinyl HD",
    streamUrl: "https://icecast.walmradio.com:8443/christmas",
    favicon: "https://icecast.walmradio.com:8443/christmas.png",
    tags: "christian,christmas,easy listening,hd,holiday,otr,seasonal,vintage,vinyl,walm",
    country: "The United States Of America"
  },
  {
    name: "BBC World Service",
    streamUrl: "http://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    favicon: "http://cdn-profiles.tunein.com/s24948/images/logoq.jpg?t=1",
    tags: "news,talk",
    country: "The United Kingdom Of Great Britain And Northern Ireland"
  },
  {
    name: "WALM HD",
    streamUrl: "https://icecast.walmradio.com:8443/walm",
    favicon: "https://icecast.walmradio.com:8443/walm.jpg",
    tags: "christian,christian music,contemporary christian,jesus",
    country: "The United States Of America"
  },
  {
    name: "Iran International",
    streamUrl: "http://n05.radiojar.com/dfnrphnr5f0uv?rj-ttl=5&rj-tok=AAABmzeRapMA2-RrDJPArQeIGg",
    favicon: "",
    tags: "news",
    country: ""
  },
  {
    name: "WALM - Old Time Radio",
    streamUrl: "https://icecast.walmradio.com:8443/otr",
    favicon: "https://icecast.walmradio.com:8443/otr.jpg",
    tags: "78,78-rpm,78rpm,classic,comedy,drama,easy listening,musical,mystery,old time radio,otr,sci-fi,v-disc,vintage,walm",
    country: "The United States Of America"
  },
  {
    name: "Fantasy Italo Radio",
    streamUrl: "https://italo.live-streams.nl/fantasy",
    favicon: "https://italo.nu/fantasy-logo.png",
    tags: "80s,disco,high enery,italo,italodisco,spacesynth",
    country: "The Netherlands"
  },
  {
    name: "RFE/RL Radio Farda",
    streamUrl: "http://n0e.radiojar.com/cp13r2cpn3quv?rj-ttl=5&rj-tok=AAABmzes7hAA7bsY3QWQQHDLZA",
    favicon: "http://www.radiofarda.com//Content/responsive/RFE/img/webApp/favicon.ico",
    tags: "music,news,persian,rfe-rl,talk",
    country: "Czechia"
  },
  {
    name: "iraninternational",
    streamUrl: "http://n04.radiojar.com/dfnrphnr5f0uv?rj-ttl=5&rj-tok=AAABmzVjMOAApoegRDK9Zessdw",
    favicon: "https://iranintl.com/favicon.ico",
    tags: "iran,news,persian",
    country: "Islamic Republic Of Iran"
  },
  {
    name: "France Info",
    streamUrl: "http://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    favicon: "https://www.francetvinfo.fr/assets/common/images/pwa/ios/120-5487caf3.png",
    tags: "",
    country: "France"
  },
  {
    name: "101 SMOOTH JAZZ",
    streamUrl: "http://jking.cdnstream1.com/b22139_128mp3",
    favicon: "http://101smoothjazz.com/favicon.ico",
    tags: "easy listening,jazz,smooth jazz",
    country: "The United States Of America"
  },
  {
    name: "WALM 2 HD",
    streamUrl: "https://icecast.walmradio.com:8443/walm2",
    favicon: "https://icecast.walmradio.com:8443/walm.jpg",
    tags: "choral,christian,christian music,classical music,hymns,orchestral,talk,talk radio,traditional christian",
    country: "The United States Of America"
  },
  {
    name: "RFI Afrique",
    streamUrl: "http://live02.rfi.fr/rfiafrique-64.mp3",
    favicon: "http://www.rfi.fr/apple-touch-icon.png",
    tags: "africa,news",
    country: "France"
  },
  {
    name: "Mosaique FM",
    streamUrl: "http://radio.mosaiquefm.net:8000/mosalive",
    favicon: "",
    tags: "",
    country: "Tunisia"
  },
  {
    name: "Deep House Lounge",
    streamUrl: "http://198.15.94.34:8006/stream",
    favicon: "http://www.deephouselounge.com/wp-content/themes/maronpro/images/favicon.ico",
    tags: "deep house,disco,electronica,funky,house,jazzy,lounge,philadelphia,techno",
    country: "The United States Of America"
  },
  {
    name: "RMC FR",
    streamUrl: "https://audio.bfmtv.com/rmcradio_128.mp3",
    favicon: "https://i1.wp.com/www.mediasportif.fr/wp-content/uploads/2014/05/Radio-RMC.jpg",
    tags: "france,info,sport,talk",
    country: "France"
  },
  {
    name: "parsa",
    streamUrl: "http://parsa.icdndhcp.com:18000/stream",
    favicon: "https://lh5.googleusercontent.com/proxy/25PMsUBa3Z6So8cdvAyZT7_93NyV26cJNuTTDY4xk6aJU1lcKPByf2C7o2HbrGrv-QxPvbI3dio2D39zYlgi1v6nLg",
    tags: "classical",
    country: "Islamic Republic Of Iran"
  },
  {
    name: "ایران  Radio Liberty (Iran) (official stream)",
    streamUrl: "https://n0b.radiojar.com/cp13r2cpn3quv?rj-ttl=5&rj-tok=AAABmzdM4XEAXbEbIZGuWEyPiQ",
    favicon: "https://www.radiofarda.com/content/responsive/rfe/img/webapp/ico-128x128.png",
    tags: "",
    country: "Islamic Republic Of Iran"
  },
  {
    name: "Jazz Radio Blues",
    streamUrl: "http://jazzblues.ice.infomaniak.ch/jazzblues-high.mp3",
    favicon: "https://www.jazzradio.fr/apple-touch-icon-120x120.png",
    tags: "blues,jazz",
    country: "France"
  },
  {
    name: "France Inter",
    streamUrl: "http://icecast.radiofrance.fr/franceinter-hifi.aac",
    favicon: "https://www.franceinter.fr/favicon.ico",
    tags: "",
    country: "France"
  },
  {
    name: "RMF FM",
    streamUrl: "http://195.150.20.242:8000/rmf_fm",
    favicon: "https://www.rmf.fm/assets/images/favicon/apple-icon-120x120.png?3",
    tags: "fm,rmf,rmffm",
    country: "Poland"
  },
  {
    name: "Europa Plus",
    streamUrl: "http://ep256.hostingradio.ru:8052/europaplus256.mp3",
    favicon: "http://liveam.tv/img/2494.jpg",
    tags: "dance,house,pop",
    country: "The Russian Federation"
  },
  {
    name: "Hit FM (UKraine) - 128kb/s",
    streamUrl: "http://195.95.206.17/HitFM",
    favicon: "https://www.hitfm.ua/static/img/fav-icon/apple-icon-120x120.png",
    tags: "dance,pop,rock",
    country: "Ukraine"
  },
  {
    name: "WALM - Old Time Radio Opus",
    streamUrl: "https://icecast.walmradio.com:8443/otr_opus",
    favicon: "https://icecast.walmradio.com:8443/otr.jpg",
    tags: "78,78-rpm,78rpm,classic,comedy,drama,easy listening,musical,mystery,old time radio,opus,otr,sci-fi,v-disc,vintage,walm",
    country: "The United States Of America"
  },
  {
    name: "Radio IFM",
    streamUrl: "https://live.ifm.tn/radio/8000/ifmlive",
    favicon: "",
    tags: "entertainment,music,news",
    country: "Tunisia"
  },
  {
    name: "Adroit Jazz Underground HD Opus",
    streamUrl: "https://icecast.walmradio.com:8443/jazz_opus",
    favicon: "https://icecast.walmradio.com:8443/jazz.jpg",
    tags: "avant-garde,bebop,big band,bop,combos,contemporary,contemporary jazz,cool,cool jazz,free jazz,fusion,hard bop,hd,mainstream,mainstream jazz,modern,modern big band,opus,post-bop,straight-ahead,walm,west coast",
    country: "The United States Of America"
  },
  {
    name: "ROCK FM",
    streamUrl: "http://nashe1.hostingradio.ru/rock-128.mp3",
    favicon: "https://lh3.googleusercontent.com/D3taObR7tfyhwDFY40VS8DIVri7iif5RuzI9C-mXxRwF41vGZ_dO_n6MWM57P-mZczFC=w300",
    tags: "classic rock,pop rock,rock",
    country: "The Russian Federation"
  },
  {
    name: "France Info",
    streamUrl: "http://icecast.radiofrance.fr/franceinfo-hifi.aac",
    favicon: "https://www.francetvinfo.fr/assets/common/images/pwa/ios/120-0cfbd6d4.png",
    tags: "aac,information,public radio,radio france",
    country: "France"
  },
  {
    name: "RFI Monde",
    streamUrl: "http://live02.rfi.fr/rfimonde-64.mp3",
    favicon: "http://www.rfi.fr/apple-touch-icon.png",
    tags: "news,world music",
    country: "France"
  },
  {
    name: "CLASSIC HITS RADIO 70 80 DiscoFunk ModernSoul Boogie",
    streamUrl: "https://radiopanther.radiolebowski.com/play",
    favicon: "",
    tags: "1970s,1980s,70's,70s,70s disco,80,80's,80s,classic hits",
    country: "The United States Of America"
  },
  {
    name: "РАДИО ВАНЯ",
    streamUrl: "https://icecast-radiovanya.cdnvideo.ru/radiovanya",
    favicon: "",
    tags: "pop",
    country: "The Russian Federation"
  },
  {
    name: "Dance Wave Retro!",
    streamUrl: "http://onair.dancewave.online:8080/retrodance.mp3",
    favicon: "https://dancewave.online/dwr_logo.png",
    tags: "90s dance",
    country: "Hungary"
  },
  {
    name: "WALM 2 HD Opus",
    streamUrl: "https://icecast.walmradio.com:8443/walm2_opus",
    favicon: "https://icecast.walmradio.com:8443/walm.jpg",
    tags: "choral,christian,christian music,classical music,hymns,opus,orchestral,talk,talk radio,traditional christian",
    country: "The United States Of America"
  },
  {
    name: "Classic FM UK",
    streamUrl: "http://ice-the.musicradio.com/ClassicFMMP3",
    favicon: "http://www.classicfm.com/assets_v4r/classic/img/favicon-196x196.png",
    tags: "classical",
    country: "The United Kingdom Of Great Britain And Northern Ireland"
  },
  {
    name: ".977 80s",
    streamUrl: "http://17573.live.streamtheworld.com/977_80_SC",
    favicon: "",
    tags: "80s",
    country: "The United States Of America"
  },
  {
    name: "181.FM - Old School HipHop/RnB",
    streamUrl: "http://listen.181fm.com/181-oldschool_128k.mp3",
    favicon: "http://www.181.fm/favicon.ico",
    tags: "hiphop,oldschool,rnb,waynesboro",
    country: "The United States Of America"
  },
  {
    name: ".977 Country",
    streamUrl: "http://15113.live.streamtheworld.com/977_COUNTRY_SC",
    favicon: "",
    tags: "country",
    country: "The United States Of America"
  },
  {
    name: "Your Classical - Relax",
    streamUrl: "http://relax.stream.publicradio.org/relax.mp3",
    favicon: "http://www.yourclassical.org/apple-touch-icon.png",
    tags: "classical,relax",
    country: "The United States Of America"
  },
  {
    name: "RTL",
    streamUrl: "http://streamer-03.rtl.fr/rtl-1-44-128",
    favicon: "",
    tags: "",
    country: "France"
  },
  {
    name: "DFM RUSSIAN DANCE",
    streamUrl: "https://dfm-dfmrusdance.hostingradio.ru/dfmrusdance96.aacp?0.9987259013359274",
    favicon: "https://dfm.ru/uploads/favicon.ico",
    tags: "dance",
    country: "The Russian Federation"
  },
  {
    name: "DFM Дискач 90-х",
    streamUrl: "https://dfm-disc90.hostingradio.ru/disc9096.aacp",
    favicon: "",
    tags: "90-е,eurodance,nostalgia",
    country: "The Russian Federation"
  },
  {
    name: "France Culture",
    streamUrl: "http://icecast.radiofrance.fr/franceculture-hifi.aac",
    favicon: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c9/France_Culture_-_2008.svg/1024px-France_Culture_-_2008.svg.png",
    tags: "aac,culture,public radio,radio france",
    country: "France"
  },
  {
    name: "France Inter",
    streamUrl: "http://icecast.radiofrance.fr/franceinter-midfi.mp3",
    favicon: "",
    tags: "",
    country: "France"
  },
  {
    name: "Дорожное радио",
    streamUrl: "http://dorognoe.hostingradio.ru:8000/radio",
    favicon: "https://dorognoe.ru/assets/default/i/fav_114x114.png",
    tags: "dorojnoe",
    country: "The Russian Federation"
  },
  {
    name: ".977 Hitz",
    streamUrl: "http://14123.live.streamtheworld.com/977_HITS_SC",
    favicon: "",
    tags: "hits,top 40",
    country: "The United States Of America"
  },
  {
    name: "Ретро FM",
    streamUrl: "http://retroserver.streamr.ru:8043/retro256.mp3",
    favicon: "",
    tags: "classic hits,moscow,music,pop,retro,russia,russian pop",
    country: "The Russian Federation"
  },
  {
    name: "Шансон Радио",
    streamUrl: "http://chanson.hostingradio.ru:8041/chanson128.mp3",
    favicon: "",
    tags: "chanson",
    country: "The Russian Federation"
  },
  {
    name: "Вести ФМ (Vesti FM)",
    streamUrl: "http://icecast.vgtrk.cdnvideo.ru/vestifm_mp3_192kbps",
    favicon: "",
    tags: "news",
    country: "The Russian Federation"
  },
  {
    name: "RMF FM",
    streamUrl: "http://195.150.20.9/RMFFM48",
    favicon: "http://www.rmf.fm/assets/images/favicon/apple-icon-120x120.png?3",
    tags: "pop",
    country: "Poland"
  },
  {
    name: "Радио Русские Песни",
    streamUrl: "http://listen.rusongs.ru/ru-mp3-128",
    favicon: "",
    tags: "russian pop",
    country: "The Russian Federation"
  },
  {
    name: "дорожное радио (Dorognoe Radio)",
    streamUrl: "http://dorognoe.hostingradio.ru:8000/dorognoe",
    favicon: "https://dorognoe.ru/assets/default/i/fav_114x114.png",
    tags: "moscow",
    country: "The Russian Federation"
  },
  {
    name: "Faz",
    streamUrl: "http://www.radiofaaz.com:8000/radiofaaz",
    favicon: "",
    tags: "",
    country: "Islamic Republic Of Iran"
  },
  {
    name: "Авторадио - FM 90.3 - Москва",
    streamUrl: "http://ic4.101.ru:8000/v3_1",
    favicon: "",
    tags: "",
    country: "The Russian Federation"
  },
  {
    name: "Christmas Vinyl HD Opus",
    streamUrl: "https://icecast.walmradio.com:8443/christmas_opus",
    favicon: "https://icecast.walmradio.com:8443/christmas.jpg",
    tags: "christian,christmas,easy listening,hd,holiday,opus,otr,seasonal,vintage,vinyl,walm",
    country: "The United States Of America"
  },
  {
    name: "LBC Radio",
    streamUrl: "http://media-sov.musicradio.com/LBC973MP3Low",
    favicon: "http://www.lbc.co.uk/assets_v4r/lbc/img/favicon-196x196.png",
    tags: "political talk",
    country: "The United Kingdom Of Great Britain And Northern Ireland"
  },
  {
    name: "Intense Radio - We love Dance #HQ# FLAC",
    streamUrl: "http://secure.live-streams.nl/flac.ogg",
    favicon: "https://www.intenseradio.net/wp-content/uploads/fbrfg/apple-touch-icon.png?v=gaek7lvrgd",
    tags: "90s,club,dance,house,melodic,techno,trance",
    country: "The Netherlands"
  },
  {
    name: "Ambient Sleeping Pill",
    streamUrl: "http://radio.stereoscenic.com/asp-h",
    favicon: "",
    tags: "ambient,meditation,sleep",
    country: "The United States Of America"
  },
  {
    name: "Вести FM",
    streamUrl: "http://icecast.vgtrk.cdnvideo.ru/vestifm",
    favicon: "",
    tags: "news,talk",
    country: "The Russian Federation"
  },
  {
    name: "Европа плюс",
    streamUrl: "http://ep128server.streamr.ru:8030/ep128",
    favicon: "https://radiomap.eu/2015/images/icon-120.png",
    tags: "поп",
    country: "The Russian Federation"
  },
  {
    name: "Comedy Radio new link",
    streamUrl: "http://ic6.101.ru:8000/stream/air/aac/64/202",
    favicon: "",
    tags: "comedy,humor,pop,sketches",
    country: "The Russian Federation"
  },
  {
    name: "Rockabilly-radio.net",
    streamUrl: "http://lin3.ash.fast-serv.com:6026/stream_96",
    favicon: "",
    tags: "rockabilly",
    country: "The United States Of America"
  },
  {
    name: "Frisky",
    streamUrl: "http://stream2.friskyradio.com/frisky_mp3_hi",
    favicon: "https://s3.amazonaws.com/media.friskyradio.com/favicon.png",
    tags: "electronic,frisky,new york city,progressive",
    country: "The United States Of America"
  },
  {
    name: "Intense Radio - We love Dance 256k",
    streamUrl: "http://intenseradio.live-streams.nl:8000/main",
    favicon: "https://www.intenseradio.net/wp-content/uploads/fbrfg/apple-touch-icon.png",
    tags: "dance house club  electronic techhouse",
    country: "The Netherlands"
  },
  {
    name: "Iran On Air",
    streamUrl: "http://ice41.securenetsystems.net/KIRN",
    favicon: "",
    tags: "",
    country: "Islamic Republic Of Iran"
  },
  {
    name: "Radio Zet",
    streamUrl: "http://zt04.cdn.eurozet.pl/zet-old.mp3?redirected=04",
    favicon: "https://gfx.radiozet.pl/extension/radiozet/design/standard/images/favicon/apple-touch-icon.png",
    tags: "",
    country: "Poland"
  },
  {
    name: "إذاعة القرآن الكريم من القاهرة",
    streamUrl: "http://n03.radiojar.com/8s5u5tpdtwzuv?listening-from-radio-garden=1620219571863&rj-ttl=5&rj-tok=AAABmzcHD4UAKQlMAyFgyIiXvA",
    favicon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDeG4UfceNKx39_KEr8RQhM3QX5kSdpK6zQ&usqp=CAU",
    tags: "اسلامي,دين",
    country: "Egypt"
  },
  {
    name: "SomaFM Groove Salad (128k MP3)",
    streamUrl: "https://somafm.com/groovesalad.pls",
    favicon: "https://somafm.com/img3/groovesalad-400.jpg",
    tags: "ambient,chillout,downtempo,groove,lounge,sleep",
    country: "The United States Of America"
  },
  {
    name: "Skyrock",
    streamUrl: "http://icecast.skyrock.net/s/natio_mp3_128k",
    favicon: "https://play-lh.googleusercontent.com/dPiQ01OUKZVfRZUbbb-EVK5g9miS_K-xrxHgmBbynGG-GQ53yt3GzFKr0zUTnb-xswQ=s200-rw",
    tags: "rap",
    country: "France"
  },
  {
    name: "Jazz Radio",
    streamUrl: "http://jazzradio.ice.infomaniak.ch/jazzradio-high.mp3",
    favicon: "http://www.jazzradio.fr/apple-touch-icon-120x120.png",
    tags: "jazz,soul",
    country: "France"
  },
  {
    name: "Radio Record - Russian Mix",
    streamUrl: "https://radiorecord.hostingradio.ru/rus96.aacp",
    favicon: "",
    tags: "",
    country: "The Russian Federation"
  },
  {
    name: "Radio Sarcheshme",
    streamUrl: "http://sarcheshmeh.icdndhcp.com:18452/stream",
    favicon: "",
    tags: "",
    country: "Islamic Republic Of Iran"
  },
  {
    name: "Люкс FМ 103.1",
    streamUrl: "http://lux.radio.tvstitch.com/kyiv/lux_adv_sd",
    favicon: "https://lux.fm/favicons/apple-touch-icon.png",
    tags: "music",
    country: "Ukraine"
  },
  {
    name: "Nashe Radio",
    streamUrl: "http://nashe1.hostingradio.ru/nashe-128.mp3",
    favicon: "https://www.nashe.ru/favicons/apple-touch-icon.png",
    tags: "live air",
    country: "The Russian Federation"
  },
  {
    name: "Radio Caroline",
    streamUrl: "http://78.129.202.200:8040/;",
    favicon: "http://www.radiocaroline.co.uk/favicon.ico",
    tags: "country,pop,rock",
    country: "The United Kingdom Of Great Britain And Northern Ireland"
  },
  {
    name: "Радио «Комсомольская Правда» | КП Россия",
    streamUrl: "http://kpradio.hostingradio.ru:8000/russia.radiokp128.mp3",
    favicon: "",
    tags: "moscow,music,news,russia,talk",
    country: "The Russian Federation"
  },
  {
    name: "Kiss FM 106.5",
    streamUrl: "http://online.kissfm.ua/KissFM",
    favicon: "",
    tags: "music",
    country: "Ukraine"
  },
  {
    name: "Радио Маяк (Radio Mayak)",
    streamUrl: "http://icecast.vgtrk.cdnvideo.ru/mayakfm_mp3_192kbps",
    favicon: "",
    tags: "music,news,talk",
    country: "The Russian Federation"
  },
  {
    name: ".977 The Mix",
    streamUrl: "http://15113.live.streamtheworld.com/977_MIX_SC",
    favicon: "",
    tags: "80s,90s,hits,today",
    country: "The United States Of America"
  },
  {
    name: "Русский Рок - Russian Rock",
    streamUrl: "http://rock.volna.top/RusRock",
    favicon: "",
    tags: "amg,rock,russian",
    country: "The Russian Federation"
  },
  {
    name: " Radio Navahang",
    streamUrl: "https://navairan.com/;stream.nsv",
    favicon: "https://www.navahang.com/apple-touch-icon.png",
    tags: "middle eastern music,pop",
    country: "Islamic Republic Of Iran"
  },
  {
    name: "talkSPORT",
    streamUrl: "http://radio.talksport.com/stream?aisGetOriginalStream=true",
    favicon: "",
    tags: "speech,sport",
    country: "The United Kingdom Of Great Britain And Northern Ireland"
  },
  {
    name: "Classic Vinyl HD Opus",
    streamUrl: "https://icecast.walmradio.com:8443/classic_opus",
    favicon: "https://icecast.walmradio.com:8443/classic.jpg",
    tags: "1930,1940,1950,1960,beautiful music,big band,classic hits,crooners,easy,easy listening,hd,jazz,light orchestral,lounge,oldies,opus,orchestral,otr,relaxation,strings,swing,unwind,walm",
    country: "The United States Of America"
  },
  {
    name: "Classic Vinyl HD",
    streamUrl: "https://icecast.walmradio.com:8443/classic",
    favicon: "https://icecast.walmradio.com:8443/classic.jpg",
    tags: "1930,1940,1950,1960,beautiful music,big band,classic hits,crooners,easy,easy listening,hd,jazz,light orchestral,lounge,oldies,orchestral,otr,relaxation,strings,swing,unwind,walm",
    country: "The United States Of America"
  },
  {
    name: "Synthetic FM The New Italo generation sound",
    streamUrl: "https://mediaserv38.live-streams.nl:18030/stream",
    favicon: "https://syntheticfm.com/logo-synth-italo.png",
    tags: "80s,disco,electronic,generation,italo,new,synthpop",
    country: "The Netherlands"
  },
  {
    name: "Cadena 100",
    streamUrl: "http://cadena100-streamers-mp3.flumotion.com/cope/cadena100.mp3",
    favicon: "https://www.cadena100.es/estaticos/apple-touch-icon-192x192.png",
    tags: "music",
    country: "Spain"
  },
  {
    name: "Rai Radio 1",
    streamUrl: "https://icecdn-19d24861e90342cc8decb03c24c8a419.msvdn.net/icecastRelay/S16355530/Q4zh3NTu28Rx/icecast",
    favicon: "",
    tags: "news,public radio,rai",
    country: "Italy"
  },
  {
    name: "FIP",
    streamUrl: "http://icecast.radiofrance.fr/fip-hifi.aac",
    favicon: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d5/FIP_logo_2005.svg/1024px-FIP_logo_2005.svg.png",
    tags: "aac,music,public radio,radio france",
    country: "France"
  },
  {
    name: "Fnf.Fm Hindi",
    streamUrl: "http://192.99.8.192:5032/;stream",
    favicon: "",
    tags: "bollywood",
    country: "India"
  },
  {
    name: "Deep House Radio",
    streamUrl: "http://62.210.105.16:7000/stream",
    favicon: "",
    tags: "electronic",
    country: "The United States Of America"
  },
  {
    name: "Big R Radio - 80s Metal FM",
    streamUrl: "http://bigrradio.cdnstream1.com/5186_128",
    favicon: "http://www.bigrradio.com/image/favicon/apple-touch-icon.png",
    tags: "80s,aor,glam metal,hair metal,hard rock,heavy metal,metal",
    country: "The United States Of America"
  },
  {
    name: "Ретро FM 70e",
    streamUrl: "http://retro70.hostingradio.ru:8025/retro70-128.mp3",
    favicon: "",
    tags: "70s",
    country: "The Russian Federation"
  },
  {
    name: "Радио НВ",
    streamUrl: "http://91.218.212.84:8000/radionv.mp3",
    favicon: "https://d3e54v103j8qbb.cloudfront.net/static/designer_favicon.5ea478d03e.png",
    tags: "news,politics",
    country: "Ukraine"
  },
  {
    name: "EuroDance 90 radio",
    streamUrl: "https://stream-eurodance90.fr/radio/8000/128.mp3?1627933323",
    favicon: "https://eurodance90.fr/favicon.ico",
    tags: "dancefloor,electronic dance music,eurodance,pop dance,pop music",
    country: "France"
  }
];

