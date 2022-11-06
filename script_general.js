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
var script = {"start":"this.init()","toolTipHorizontalAlign":"center","borderRadius":0,"scrollBarColor":"#000000","paddingLeft":0,"desktopMipmappingEnabled":false,"backgroundColorRatios":[0],"height":"100%","downloadEnabled":false,"vrPolyfillScale":0.75,"paddingRight":0,"backgroundPreloadEnabled":true,"scrollBarWidth":10,"mouseWheelEnabled":false,"class":"Player","backgroundColorDirection":"vertical","scrollBarOpacity":0.5,"backgroundOpacity":1,"scrollBarVisible":"rollOver","layout":"absolute","defaultMenu":[],"defaultVRPointer":"laser","propagateClick":false,"overflow":"hidden","backgroundColor":["#FFFFFF"],"contentOpaque":false,"width":"100%","paddingTop":0,"id":"rootPlayer","paddingBottom":0,"minWidth":0,"borderSize":0,"minHeight":0,"scripts":{"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"translate":TDV.Tour.Script.translate,"cloneCamera":TDV.Tour.Script.cloneCamera,"clone":TDV.Tour.Script.clone,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"isPanorama":TDV.Tour.Script.isPanorama,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"initQuiz":TDV.Tour.Script.initQuiz,"getKey":TDV.Tour.Script.getKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"executeJS":TDV.Tour.Script.executeJS,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"openLink":TDV.Tour.Script.openLink,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"init":TDV.Tour.Script.init,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playAudioList":TDV.Tour.Script.playAudioList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showWindow":TDV.Tour.Script.showWindow,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setValue":TDV.Tour.Script.setValue,"quizShowScore":TDV.Tour.Script.quizShowScore,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPixels":TDV.Tour.Script.getPixels,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"registerKey":TDV.Tour.Script.registerKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizStart":TDV.Tour.Script.quizStart,"setLocale":TDV.Tour.Script.setLocale,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"mixObject":TDV.Tour.Script.mixObject,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"cloneBindings":TDV.Tour.Script.cloneBindings,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"existsKey":TDV.Tour.Script.existsKey,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizFinish":TDV.Tour.Script.quizFinish,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData},"shadow":false,"gap":10,"children":["this.MainViewer"],"mediaActivationMode":"window","scrollBarMargin":2,"verticalAlign":"top","horizontalAlign":"left","definitions": [{"playbackBarHeadWidth":6,"progressBarBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"toolTipHorizontalAlign":"center","subtitlesOpacity":1,"subtitlesFontSize":"3vmin","paddingLeft":0,"progressBarBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressBorderSize":0,"subtitlesBackgroundColor":"#000000","surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"transitionDuration":5000,"paddingRight":0,"width":"100%","data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","class":"ViewerArea","height":"100%","subtitlesHorizontalAlign":"center","subtitlesBorderColor":"#FFFFFF","subtitlesGap":0,"progressRight":0,"playbackBarRight":0,"subtitlesTextShadowBlurRadius":0,"subtitlesVerticalAlign":"bottom","subtitlesTextDecoration":"none","progressOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"subtitlesBorderSize":0,"playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","toolTipShadowOpacity":1,"paddingTop":0,"toolTipPaddingBottom":4,"toolTipFontStyle":"normal","progressBorderRadius":0,"toolTipTextShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","paddingBottom":0,"minWidth":100,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"minHeight":50,"progressBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","subtitlesFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"top":0,"subtitlesFontColor":"#FFFFFF","surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"progressBarBorderColor":"#000000","playbackBarLeft":0,"subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColorRatios":[0],"borderRadius":0,"displayTooltipInTouchScreens":false,"toolTipFontSize":"1.11vmin","progressBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","toolTipTextShadowOpacity":0,"vrPointerSelectionColor":"#FF6600","progressBorderColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"transitionMode":"fade_out_fade_in","playbackBarHeadShadow":true,"playbackBarBorderColor":"#FFFFFF","toolTipShadowBlurRadius":3,"vrPointerSelectionTime":2000,"subtitlesPaddingLeft":5,"progressBarBackgroundColor":["#000000"],"toolTipFontColor":"#606060","playbackBarBorderRadius":0,"playbackBarHeadOpacity":1,"translationTransitionEnabled":false,"toolTipPaddingLeft":6,"toolTipPaddingRight":6,"progressBackgroundOpacity":1,"subtitlesPaddingTop":5,"subtitlesTextShadowVerticalLength":1,"subtitlesBottom":50,"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowVerticalLength":0,"subtitlesPaddingRight":5,"propagateClick":false,"toolTipFontWeight":"normal","playbackBarOpacity":1,"playbackBarProgressOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"displayTooltipInSurfaceSelection":true,"subtitlesTop":0,"doubleClickAction":"none","progressBottom":0,"playbackBarBorderSize":0,"playbackBarBottom":5,"playbackBarHeadBorderColor":"#000000","toolTipShadowVerticalLength":0,"id":"MainViewer","subtitlesShadow":false,"vrPointerColor":"#FFFFFF","borderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","progressBorderSize":0,"shadow":false,"toolTipBorderRadius":3,"left":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":10,"subtitlesTextShadowColor":"#000000","subtitlesEnabled":true,"playbackBarBackgroundOpacity":1,"playbackBarHeight":10,"firstTransitionDuration":0,"toolTipBorderSize":1,"subtitlesPaddingBottom":5,"toolTipOpacity":1,"toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorDirection":"vertical","toolTipShadowSpread":0},{"hfovMax":130,"frames":[{"cube":{"class":"ImageResource","levels":[{"colCount":24,"class":"TiledImageResourceLevel","height":2048,"width":12288,"tags":"ondemand","rowCount":4,"url":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_0/{face}/0/{row}_{column}.jpg"},{"colCount":12,"class":"TiledImageResourceLevel","height":1024,"width":6144,"tags":"ondemand","rowCount":2,"url":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_0/{face}/1/{row}_{column}.jpg"},{"colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_0/{face}/2/{row}_{column}.jpg"}]},"thumbnailUrl":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_t.jpg","class":"CubicPanoramaFrame"}],"class":"Panorama","partial":false,"hfov":360,"thumbnailUrl":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_t.jpg","vfov":180,"id":"panorama_4B16C136_4702_13A3_418D_19DEFEF9F619","pitch":0},{"id":"mainPlayList","items":[{"media":"this.panorama_4B16C136_4702_13A3_418D_19DEFEF9F619","camera":"this.panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList"},{"initialPosition":{"yaw":0.11,"class":"PanoramaCameraPosition","pitch":-5.62,"hfov":110},"initialSequence":"this.sequence_50117FD6_4728_BB06_41D0_FBCB131891C4","class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_camera","hoverFactor":0},{"class":"PanoramaPlayer","viewerArea":"this.MainViewer","aaEnabled":true,"mouseControlMode":"drag_rotation","zoomEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"none","touchControlMode":"drag_rotation","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","surfaceSelectionEnabled":false},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_50117FD6_4728_BB06_41D0_FBCB131891C4"}],"mobileMipmappingEnabled":false,"data":{"name":"Player456","locales":{"it":"locale/it.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"rate":1},"defaultLocale":"it"}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
})();
//Generated with v2022.1.30, Sun Nov 6 2022