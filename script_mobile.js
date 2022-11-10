(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"scrollBarOpacity":0.5,"propagateClick":false,"scrollBarColor":"#000000","scrollBarMargin":2,"height":"100%","borderRadius":0,"verticalAlign":"top","vrPolyfillScale":0.75,"definitions": [{"pitch":0,"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_t.jpg","partial":false,"hfov":360,"id":"panorama_4B16C136_4702_13A3_418D_19DEFEF9F619","frames":[{"cube":{"levels":[{"rowCount":4,"height":2048,"width":12288,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24,"url":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_0/{face}/0/{row}_{column}.jpg"},{"rowCount":2,"height":1024,"width":6144,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"url":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_0/{face}/1/{row}_{column}.jpg"},{"rowCount":1,"height":512,"width":3072,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_0/{face}/2/{row}_{column}.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_t.jpg"}],"hfovMax":130},{"touchControlMode":"drag_rotation","aaEnabled":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"zoomEnabled":false,"viewerArea":"this.MainViewer_mobile","class":"PanoramaPlayer","arrowKeysAction":"none","gyroscopeVerticalDraggingEnabled":true,"id":"MainViewer_mobilePanoramaPlayer","displayPlaybackBar":true},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_4B16C136_4702_13A3_418D_19DEFEF9F619","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_camera","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}]},{"propagateClick":false,"subtitlesGap":0,"subtitlesHorizontalAlign":"center","subtitlesVerticalAlign":"bottom","height":"100%","surfaceReticleSelectionColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","surfaceReticleOpacity":0.6,"toolTipShadowBlurRadius":1,"subtitlesPaddingBottom":5,"progressBorderRadius":0,"toolTipFontStyle":"normal","progressBackgroundOpacity":1,"toolTipFontWeight":"normal","surfaceReticleSelectionOpacity":1,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","toolTipTextShadowColor":"#000000","playbackBarHeadHeight":15,"toolTipHorizontalAlign":"center","displayTooltipInTouchScreens":false,"subtitlesTextShadowOpacity":1,"progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"toolTipPaddingLeft":3,"toolTipPaddingBottom":2,"playbackBarHeadBorderSize":0,"progressOpacity":1,"class":"ViewerArea","progressRight":0,"subtitlesBorderSize":0,"doubleClickAction":"none","progressLeft":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"playbackBarHeadOpacity":1,"progressBarBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarHeadShadow":true,"toolTipTextShadowOpacity":0,"transitionDuration":5000,"translationTransitionEnabled":false,"playbackBarOpacity":1,"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressOpacity":1,"paddingTop":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundOpacity":1,"toolTipFontColor":"#606060","playbackBarBottom":5,"subtitlesTextDecoration":"none","paddingBottom":0,"toolTipFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowVerticalLength":0,"subtitlesBorderColor":"#FFFFFF","shadow":false,"subtitlesFontWeight":"normal","toolTipShadowColor":"#333138","progressBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderSize":0,"playbackBarHeadBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#000000"],"progressBorderColor":"#000000","playbackBarHeight":10,"borderRadius":0,"top":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesTextShadowBlurRadius":0,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"progressBarOpacity":1,"paddingLeft":0,"subtitlesPaddingLeft":5,"subtitlesBottom":50,"progressBottom":0,"subtitlesFontFamily":"Arial","toolTipShadowSpread":0,"subtitlesEnabled":true,"toolTipFontSize":"1.11vmin","paddingRight":0,"subtitlesTop":0,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":1,"playbackBarProgressBorderSize":0,"toolTipBorderColor":"#767676","subtitlesPaddingRight":5,"subtitlesTextShadowColor":"#000000","subtitlesPaddingTop":5,"width":"100%","progressHeight":10,"toolTipBorderRadius":1,"vrPointerColor":"#FFFFFF","toolTipTextShadowBlurRadius":1,"progressBorderSize":0,"playbackBarRight":0,"displayTooltipInSurfaceSelection":true,"subtitlesShadow":false,"transitionMode":"fade_out_fade_in","toolTipDisplayTime":600,"subtitlesFontSize":"3vmin","playbackBarProgressBackgroundColor":["#3399FF"],"id":"MainViewer_mobile","playbackBarProgressBorderRadius":0,"borderSize":0,"subtitlesOpacity":1,"toolTipBorderSize":1,"minWidth":50,"progressBarBorderSize":0,"minHeight":25,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingTop":2,"progressBarBorderRadius":0,"left":0,"toolTipShadowOpacity":1,"toolTipPaddingRight":3,"playbackBarHeadShadowVerticalLength":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":1.5,"data":{"name":"Main Viewer"}},{"id":"panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_camera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","hfov":110,"yaw":0.11,"pitch":-5.62},"class":"PanoramaCamera","initialSequence":"this.sequence_50117FD6_4728_BB06_41D0_FBCB131891C4","hoverFactor":0},{"class":"PanoramaCameraSequence","id":"sequence_50117FD6_4728_BB06_41D0_FBCB131891C4","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}],"restartMovementOnUserInteraction":false}],"downloadEnabled":false,"defaultVRPointer":"laser","mediaActivationMode":"window","paddingLeft":0,"toolTipHorizontalAlign":"center","backgroundPreloadEnabled":true,"mouseWheelEnabled":false,"defaultMenu":[],"backgroundColorDirection":"vertical","contentOpaque":false,"paddingRight":0,"desktopMipmappingEnabled":false,"class":"Player","overflow":"hidden","layout":"absolute","start":"this.init()","mobileMipmappingEnabled":false,"width":"100%","backgroundColor":["#FFFFFF"],"scrollBarWidth":10,"paddingTop":0,"children":["this.MainViewer_mobile"],"gap":10,"id":"rootPlayer","scripts":{"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"textToSpeech":TDV.Tour.Script.textToSpeech,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeJS":TDV.Tour.Script.executeJS,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getComponentByName":TDV.Tour.Script.getComponentByName,"getKey":TDV.Tour.Script.getKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMapLocation":TDV.Tour.Script.setMapLocation,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"downloadFile":TDV.Tour.Script.downloadFile,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizFinish":TDV.Tour.Script.quizFinish,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openLink":TDV.Tour.Script.openLink,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setValue":TDV.Tour.Script.setValue,"init":TDV.Tour.Script.init,"cloneCamera":TDV.Tour.Script.cloneCamera,"shareSocial":TDV.Tour.Script.shareSocial,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"cloneBindings":TDV.Tour.Script.cloneBindings,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"mixObject":TDV.Tour.Script.mixObject,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"isPanorama":TDV.Tour.Script.isPanorama,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getOverlays":TDV.Tour.Script.getOverlays,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"existsKey":TDV.Tour.Script.existsKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"registerKey":TDV.Tour.Script.registerKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showWindow":TDV.Tour.Script.showWindow,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaByName":TDV.Tour.Script.getMediaByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setLocale":TDV.Tour.Script.setLocale,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizStart":TDV.Tour.Script.quizStart,"getPixels":TDV.Tour.Script.getPixels,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupImage":TDV.Tour.Script.showPopupImage,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"translate":TDV.Tour.Script.translate,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"unregisterKey":TDV.Tour.Script.unregisterKey,"clone":TDV.Tour.Script.clone},"paddingBottom":0,"borderSize":0,"scrollBarVisible":"rollOver","minWidth":0,"minHeight":0,"shadow":false,"data":{"defaultLocale":"it","textToSpeechConfig":{"speechOnInfoWindow":false,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"name":"Player456","locales":{"it":"locale/it.txt"}},"backgroundOpacity":1,"backgroundColorRatios":[0],"horizontalAlign":"left"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
})();