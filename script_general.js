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
var script = {"start":"this.init()","toolTipHorizontalAlign":"center","borderRadius":0,"scrollBarColor":"#000000","class":"Player","desktopMipmappingEnabled":false,"backgroundColorRatios":[0],"height":"100%","vrPolyfillScale":0.75,"paddingRight":0,"backgroundPreloadEnabled":true,"paddingLeft":0,"scrollBarWidth":10,"mouseWheelEnabled":false,"downloadEnabled":false,"backgroundColorDirection":"vertical","scrollBarOpacity":0.5,"backgroundOpacity":1,"scrollBarVisible":"rollOver","layout":"absolute","defaultMenu":[],"defaultVRPointer":"laser","propagateClick":false,"overflow":"hidden","backgroundColor":["#FFFFFF"],"contentOpaque":false,"width":"100%","paddingTop":0,"id":"rootPlayer","paddingBottom":0,"minWidth":0,"borderSize":0,"minHeight":0,"scripts":{"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"downloadFile":TDV.Tour.Script.downloadFile,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"quizFinish":TDV.Tour.Script.quizFinish,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"shareSocial":TDV.Tour.Script.shareSocial,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showWindow":TDV.Tour.Script.showWindow,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getKey":TDV.Tour.Script.getKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"textToSpeech":TDV.Tour.Script.textToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupImage":TDV.Tour.Script.showPopupImage,"openLink":TDV.Tour.Script.openLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaByName":TDV.Tour.Script.getMediaByName,"init":TDV.Tour.Script.init,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"cloneBindings":TDV.Tour.Script.cloneBindings,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"unregisterKey":TDV.Tour.Script.unregisterKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setMapLocation":TDV.Tour.Script.setMapLocation,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"getOverlays":TDV.Tour.Script.getOverlays,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setValue":TDV.Tour.Script.setValue,"existsKey":TDV.Tour.Script.existsKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"isPanorama":TDV.Tour.Script.isPanorama,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setLocale":TDV.Tour.Script.setLocale,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPixels":TDV.Tour.Script.getPixels,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneCamera":TDV.Tour.Script.cloneCamera,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeJS":TDV.Tour.Script.executeJS,"quizStart":TDV.Tour.Script.quizStart,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"mixObject":TDV.Tour.Script.mixObject,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getComponentByName":TDV.Tour.Script.getComponentByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"clone":TDV.Tour.Script.clone,"translate":TDV.Tour.Script.translate,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers},"shadow":false,"gap":10,"children":["this.MainViewer"],"mediaActivationMode":"window","scrollBarMargin":2,"verticalAlign":"top","horizontalAlign":"left","definitions": [{"playbackBarHeadWidth":6,"progressBarBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"toolTipHorizontalAlign":"center","subtitlesOpacity":1,"subtitlesFontSize":"3vmin","class":"ViewerArea","progressBarBorderSize":0,"playbackBarProgressBorderSize":0,"subtitlesBackgroundColor":"#000000","paddingLeft":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"transitionDuration":500,"paddingRight":0,"width":"100%","data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","surfaceReticleOpacity":0.6,"height":"100%","subtitlesHorizontalAlign":"center","subtitlesBorderColor":"#FFFFFF","subtitlesGap":0,"progressRight":0,"playbackBarRight":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowBlurRadius":0,"subtitlesVerticalAlign":"bottom","subtitlesTextDecoration":"none","progressOpacity":1,"subtitlesTextShadowOpacity":1,"subtitlesBorderSize":0,"playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","toolTipShadowOpacity":1,"paddingTop":0,"toolTipPaddingBottom":4,"toolTipFontStyle":"normal","progressBorderRadius":0,"toolTipTextShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","paddingBottom":0,"minWidth":100,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"minHeight":50,"progressBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","subtitlesFontFamily":"Arial","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipDisplayTime":600,"subtitlesFontColor":"#FFFFFF","vrPointerColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionOpacity":1,"progressBarBorderColor":"#000000","playbackBarLeft":0,"progressBarBackgroundColorRatios":[0],"borderRadius":0,"displayTooltipInTouchScreens":false,"toolTipFontSize":"1.11vmin","progressBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","toolTipTextShadowOpacity":0,"vrPointerSelectionColor":"#FF6600","progressBorderColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"transitionMode":"blending","playbackBarHeadShadow":true,"playbackBarBorderColor":"#FFFFFF","toolTipShadowBlurRadius":3,"vrPointerSelectionTime":2000,"subtitlesPaddingLeft":5,"progressBarBackgroundColor":["#000000"],"toolTipFontColor":"#606060","playbackBarBorderRadius":0,"playbackBarHeadOpacity":1,"translationTransitionEnabled":false,"toolTipPaddingLeft":6,"toolTipPaddingRight":6,"progressBackgroundOpacity":1,"subtitlesPaddingTop":5,"subtitlesBottom":50,"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderColor":"#000000","subtitlesPaddingRight":5,"propagateClick":false,"toolTipFontWeight":"normal","playbackBarOpacity":1,"playbackBarProgressOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"displayTooltipInSurfaceSelection":true,"subtitlesTop":0,"doubleClickAction":"none","progressBottom":0,"playbackBarBorderSize":0,"playbackBarBottom":5,"playbackBarHeadBorderColor":"#000000","toolTipShadowVerticalLength":0,"id":"MainViewer","subtitlesShadow":false,"borderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","progressBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"shadow":false,"toolTipBorderRadius":3,"firstTransitionDuration":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":10,"subtitlesTextShadowColor":"#000000","subtitlesEnabled":true,"playbackBarBackgroundOpacity":1,"playbackBarHeight":10,"toolTipBorderSize":1,"subtitlesPaddingBottom":5,"toolTipOpacity":1,"toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorDirection":"vertical","toolTipShadowSpread":0},{"vfov":180,"label":trans('panorama_4B16C136_4702_13A3_418D_19DEFEF9F619.label'),"hfovMax":130,"frames":[{"cube":{"levels":[{"colCount":24,"height":2048,"url":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"width":12288},{"colCount":12,"height":1024,"url":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"colCount":6,"height":512,"url":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_t.jpg","class":"CubicPanoramaFrame"}],"class":"Panorama","hfov":360,"thumbnailUrl":"media/panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_t.jpg","partial":false,"id":"panorama_4B16C136_4702_13A3_418D_19DEFEF9F619","pitch":0,"data":{"label":"demo"}},{"initialPosition":{"yaw":0.11,"class":"PanoramaCameraPosition","pitch":-5.62},"initialSequence":"this.sequence_37CEACAD_3DFD_E97F_41BB_1A4AD77E5213","automaticZoomSpeed":10,"id":"panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_camera","class":"PanoramaCamera","hoverFactor":0},{"viewerArea":"this.MainViewer","aaEnabled":true,"mouseControlMode":"drag_rotation","zoomEnabled":false,"touchControlMode":"drag_rotation","arrowKeysAction":"none","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","surfaceSelectionEnabled":false},{"id":"mainPlayList","class":"PlayList","items":[{"media":"this.panorama_4B16C136_4702_13A3_418D_19DEFEF9F619","camera":"this.panorama_4B16C136_4702_13A3_418D_19DEFEF9F619_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}]},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":25.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":309},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":25.5}],"id":"sequence_37CEACAD_3DFD_E97F_41BB_1A4AD77E5213","class":"PanoramaCameraSequence"}],"mobileMipmappingEnabled":false,"data":{"name":"Player456","locales":{"it":"locale/it.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"rate":1},"defaultLocale":"it"}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.30.js.map
})();
//Generated with v2022.1.30, Sat Nov 5 2022