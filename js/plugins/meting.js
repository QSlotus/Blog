const metingConfig=theme.plugins.meting;function initMetingPlayer(){if(!metingConfig.id||!metingConfig.server||!metingConfig.type)return void console.error("Missing required parameters:",{id:metingConfig.id,server:metingConfig.server,type:metingConfig.type});const e=document.createElement("meting-js");e.setAttribute("server",metingConfig.server),e.setAttribute("type",metingConfig.type),e.setAttribute("id",metingConfig.id),"fixed"===metingConfig.playerType?e.setAttribute("fixed","true"):"mini"===metingConfig.playerType&&e.setAttribute("mini","true"),void 0!==metingConfig.autoplay&&e.setAttribute("autoplay",metingConfig.autoplay),void 0!==metingConfig.theme&&e.setAttribute("theme",metingConfig.theme),void 0!==metingConfig.loop&&e.setAttribute("loop",metingConfig.loop),void 0!==metingConfig.order&&e.setAttribute("order",metingConfig.order),void 0!==metingConfig.preload&&e.setAttribute("preload",metingConfig.preload),void 0!==metingConfig.volume&&e.setAttribute("volume",metingConfig.volume),void 0!==metingConfig.mutex&&e.setAttribute("mutex",metingConfig.mutex),void 0!==metingConfig.lrcType&&e.setAttribute("lrc-type",metingConfig.lrcType),void 0!==metingConfig.listFolded&&e.setAttribute("list-folded",metingConfig.listFolded),void 0!==metingConfig.listMaxHeight&&e.setAttribute("list-max-height",metingConfig.listMaxHeight),void 0!==metingConfig.storageName&&e.setAttribute("storage-name",metingConfig.storageName);const t=document.getElementById("meting-container");t&&(t.innerHTML="",t.appendChild(e)),console.log("Created meting element:",e.outerHTML)}console.log("Meting Config:",metingConfig),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",initMetingPlayer):initMetingPlayer();