(function () {
  var translateObjs = {};
  function trans(c, d) {
    var e =
      arguments["length"] === 0x1
        ? [arguments[0x0]]
        : Array["apply"](null, arguments);
    translateObjs[e[0x0]] = e;
    return "";
  }
  function regTextVar(f, g) {
    var h = ![];
    g = g["toLowerCase"]();
    var i = function () {
      var r = this["get"]("data");
      r["updateText"](r["translateObjs"][f]);
    };
    var j = function (s) {
      var t = s["data"]["nextSelectedIndex"];
      if (t >= 0x0) {
        var u = s["source"]["get"]("items")[t];
        var v = function () {
          u["unbind"]("start", v, this);
          i["call"](this);
        };
        u["bind"]("start", v, this);
      } else i["call"](this);
    };
    var k = function (w) {
      return function (x) {
        if (w in x) {
          i["call"](this);
        }
      }["bind"](this);
    };
    var l = function (y, z) {
      return function (A, B) {
        if (y == A && z in B) {
          i["call"](this);
        }
      }["bind"](this);
    };
    var m = function (C, D, E) {
      for (var F = 0x0; F < C["length"]; ++F) {
        var G = C[F];
        var H = G["get"]("selectedIndex");
        if (H >= 0x0) {
          var I = D["split"](".");
          var J = G["get"]("items")[H];
          if (E !== undefined && !E["call"](this, J)) continue;
          for (var K = 0x0; K < I["length"]; ++K) {
            if (J == undefined) return "";
            J = "get" in J ? J["get"](I[K]) : J[I[K]];
          }
          return J;
        }
      }
      return "";
    };
    var n = function (L) {
      var M = L["get"]("player");
      return (
        M !== undefined && M["get"]("viewerArea") == this["getMainViewer"]()
      );
    };
    switch (g) {
      case "title":
      case "subtitle":
        var p = (function () {
          switch (g) {
            case "title":
              return "media.label";
            case "subtitle":
              return "media.data.subtitle";
          }
        })();
        if (p) {
          return function () {
            var N = this["_getPlayListsWithViewer"](this["getMainViewer"]());
            if (!h) {
              for (var O = 0x0; O < N["length"]; ++O) {
                N[O]["bind"]("changing", j, this);
              }
              h = !![];
            }
            return m["call"](this, N, p, n);
          };
        }
        break;
      default:
        if (g["startsWith"]("quiz.") && "Quiz" in TDV) {
          var q = undefined;
          var p = (function () {
            switch (g) {
              case "quiz.questions.answered":
                return TDV["Quiz"]["PROPERTY"]["QUESTIONS_ANSWERED"];
              case "quiz.question.count":
                return TDV["Quiz"]["PROPERTY"]["QUESTION_COUNT"];
              case "quiz.items.found":
                return TDV["Quiz"]["PROPERTY"]["ITEMS_FOUND"];
              case "quiz.item.count":
                return TDV["Quiz"]["PROPERTY"]["ITEM_COUNT"];
              case "quiz.score":
                return TDV["Quiz"]["PROPERTY"]["SCORE"];
              case "quiz.score.total":
                return TDV["Quiz"]["PROPERTY"]["TOTAL_SCORE"];
              case "quiz.time.remaining":
                return TDV["Quiz"]["PROPERTY"]["REMAINING_TIME"];
              case "quiz.time.elapsed":
                return TDV["Quiz"]["PROPERTY"]["ELAPSED_TIME"];
              case "quiz.time.limit":
                return TDV["Quiz"]["PROPERTY"]["TIME_LIMIT"];
              case "quiz.media.items.found":
                return TDV["Quiz"]["PROPERTY"]["PANORAMA_ITEMS_FOUND"];
              case "quiz.media.item.count":
                return TDV["Quiz"]["PROPERTY"]["PANORAMA_ITEM_COUNT"];
              case "quiz.media.questions.answered":
                return TDV["Quiz"]["PROPERTY"]["PANORAMA_QUESTIONS_ANSWERED"];
              case "quiz.media.question.count":
                return TDV["Quiz"]["PROPERTY"]["PANORAMA_QUESTION_COUNT"];
              case "quiz.media.score":
                return TDV["Quiz"]["PROPERTY"]["PANORAMA_SCORE"];
              case "quiz.media.score.total":
                return TDV["Quiz"]["PROPERTY"]["PANORAMA_TOTAL_SCORE"];
              case "quiz.media.index":
                return TDV["Quiz"]["PROPERTY"]["PANORAMA_INDEX"];
              case "quiz.media.count":
                return TDV["Quiz"]["PROPERTY"]["PANORAMA_COUNT"];
              case "quiz.media.visited":
                return TDV["Quiz"]["PROPERTY"]["PANORAMA_VISITED_COUNT"];
              default:
                var P = /quiz\.([\w_]+)\.(.+)/["exec"](g);
                if (P) {
                  q = P[0x1];
                  switch ("quiz." + P[0x2]) {
                    case "quiz.score":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"]["SCORE"];
                    case "quiz.score.total":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"]["TOTAL_SCORE"];
                    case "quiz.media.items.found":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"][
                        "PANORAMA_ITEMS_FOUND"
                      ];
                    case "quiz.media.item.count":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"][
                        "PANORAMA_ITEM_COUNT"
                      ];
                    case "quiz.media.questions.answered":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"][
                        "PANORAMA_QUESTIONS_ANSWERED"
                      ];
                    case "quiz.media.question.count":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"][
                        "PANORAMA_QUESTION_COUNT"
                      ];
                    case "quiz.questions.answered":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"][
                        "QUESTIONS_ANSWERED"
                      ];
                    case "quiz.question.count":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"][
                        "QUESTION_COUNT"
                      ];
                    case "quiz.items.found":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"]["ITEMS_FOUND"];
                    case "quiz.item.count":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"]["ITEM_COUNT"];
                    case "quiz.media.score":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"][
                        "PANORAMA_SCORE"
                      ];
                    case "quiz.media.score.total":
                      return TDV["Quiz"]["OBJECTIVE_PROPERTY"][
                        "PANORAMA_TOTAL_SCORE"
                      ];
                  }
                }
            }
          })();
          if (p) {
            return function () {
              var Q = this["get"]("data")["quiz"];
              if (Q) {
                if (!h) {
                  if (q != undefined)
                    if (q == "global") {
                      var S = this["get"]("data")["quizConfig"];
                      var U = S["objectives"];
                      for (var W = 0x0, Y = U["length"]; W < Y; ++W) {
                        Q["bind"](
                          TDV["Quiz"]["EVENT_OBJECTIVE_PROPERTIES_CHANGE"],
                          l["call"](this, U[W]["id"], p),
                          this
                        );
                      }
                    } else {
                      Q["bind"](
                        TDV["Quiz"]["EVENT_OBJECTIVE_PROPERTIES_CHANGE"],
                        l["call"](this, q, p),
                        this
                      );
                    }
                  else
                    Q["bind"](
                      TDV["Quiz"]["EVENT_PROPERTIES_CHANGE"],
                      k["call"](this, p),
                      this
                    );
                  h = !![];
                }
                try {
                  var Z = 0x0;
                  if (q != undefined) {
                    if (q == "global") {
                      var S = this["get"]("data")["quizConfig"];
                      var U = S["objectives"];
                      for (var W = 0x0, Y = U["length"]; W < Y; ++W) {
                        Z += Q["getObjective"](U[W]["id"], p);
                      }
                    } else {
                      Z = Q["getObjective"](q, p);
                    }
                  } else {
                    Z = Q["get"](p);
                    if (p == TDV["Quiz"]["PROPERTY"]["PANORAMA_INDEX"])
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
    return "";
  }
  function createQuizConfig(player, a1) {
    var a2 = {};
    a2["player"] = player;
    a2["playList"] = a1;
    function a3(a6) {
      for (var a7 = 0x0; a7 < a6["length"]; ++a7) {
        var a8 = a6[a7];
        if ("id" in a8) player[a8["id"]] = a8;
      }
    }
    if (a2["questions"]) {
      a3(a2["questions"]);
      for (var a4 = 0x0; a4 < a2["questions"]["length"]; ++a4) {
        var a5 = a2["questions"][a4];
        a3(a5["options"]);
      }
    }
    if (a2["objectives"]) {
      a3(a2["objectives"]);
    }
    if (a2["califications"]) {
      a3(a2["califications"]);
    }
    if (a2["score"]) {
      player[a2["score"]["id"]] = a2["score"];
    }
    if (a2["question"]) {
      player[a2["question"]["id"]] = a2["question"];
    }
    if (a2["timeout"]) {
      player[a2["timeout"]["id"]] = a2["timeout"];
    }
    player["get"]("data")["translateObjs"] = translateObjs;
    return a2;
  }
  var script = {
    verticalAlign: "top",
    height: "100%",
    vrPolyfillScale: 0.75,
    start: "this.init()",
    paddingLeft: 0,
    backgroundPreloadEnabled: true,
    scrollBarWidth: 10,
    backgroundColorDirection: "vertical",
    scrollBarOpacity: 0.5,
    backgroundOpacity: 1,
    scrollBarVisible: "rollOver",
    paddingRight: 0,
    mediaActivationMode: "window",
    mouseWheelEnabled: false,
    children: ["this.MainViewer"],
    defaultVRPointer: "laser",
    propagateClick: false,
    layout: "absolute",
    overflow: "hidden",
    defaultMenu: [],
    width: "100%",
    contentOpaque: false,
    backgroundColor: ["#FFFFFF"],
    scrollBarMargin: 2,
    paddingTop: 0,
    downloadEnabled: false,
    scripts: {
      getRootOverlay: TDV.Tour.Script.getRootOverlay,
      unregisterKey: TDV.Tour.Script.unregisterKey,
      keepCompVisible: TDV.Tour.Script.keepCompVisible,
      setOverlaysVisibility: TDV.Tour.Script.setOverlaysVisibility,
      getFirstPlayListWithMedia: TDV.Tour.Script.getFirstPlayListWithMedia,
      existsKey: TDV.Tour.Script.existsKey,
      setEndToItemIndex: TDV.Tour.Script.setEndToItemIndex,
      assignObjRecursively: TDV.Tour.Script.assignObjRecursively,
      getQuizTotalObjectiveProperty:
        TDV.Tour.Script.getQuizTotalObjectiveProperty,
      showPopupMedia: TDV.Tour.Script.showPopupMedia,
      setSurfaceSelectionHotspotMode:
        TDV.Tour.Script.setSurfaceSelectionHotspotMode,
      setMapLocation: TDV.Tour.Script.setMapLocation,
      getKey: TDV.Tour.Script.getKey,
      _initTTSTooltips: TDV.Tour.Script._initTTSTooltips,
      stopAndGoCamera: TDV.Tour.Script.stopAndGoCamera,
      sendAnalyticsData: TDV.Tour.Script.sendAnalyticsData,
      _initItemWithComps: TDV.Tour.Script._initItemWithComps,
      shareSocial: TDV.Tour.Script.shareSocial,
      cloneBindings: TDV.Tour.Script.cloneBindings,
      executeFunctionWhenChange: TDV.Tour.Script.executeFunctionWhenChange,
      executeAudioAction: TDV.Tour.Script.executeAudioAction,
      getPlayListItems: TDV.Tour.Script.getPlayListItems,
      openLink: TDV.Tour.Script.openLink,
      init: TDV.Tour.Script.init,
      getMediaFromPlayer: TDV.Tour.Script.getMediaFromPlayer,
      fixTogglePlayPauseButton: TDV.Tour.Script.fixTogglePlayPauseButton,
      skip3DTransitionOnce: TDV.Tour.Script.skip3DTransitionOnce,
      changeOpacityWhilePlay: TDV.Tour.Script.changeOpacityWhilePlay,
      mixObject: TDV.Tour.Script.mixObject,
      setComponentVisibility: TDV.Tour.Script.setComponentVisibility,
      historyGoForward: TDV.Tour.Script.historyGoForward,
      pauseGlobalAudiosWhilePlayItem:
        TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,
      initAnalytics: TDV.Tour.Script.initAnalytics,
      isCardboardViewMode: TDV.Tour.Script.isCardboardViewMode,
      takeScreenshot: TDV.Tour.Script.takeScreenshot,
      stopGlobalAudios: TDV.Tour.Script.stopGlobalAudios,
      startPanoramaWithCamera: TDV.Tour.Script.startPanoramaWithCamera,
      restartTourWithoutInteraction:
        TDV.Tour.Script.restartTourWithoutInteraction,
      _getPlayListsWithViewer: TDV.Tour.Script._getPlayListsWithViewer,
      getGlobalAudio: TDV.Tour.Script.getGlobalAudio,
      downloadFile: TDV.Tour.Script.downloadFile,
      getMediaWidth: TDV.Tour.Script.getMediaWidth,
      playGlobalAudio: TDV.Tour.Script.playGlobalAudio,
      registerKey: TDV.Tour.Script.registerKey,
      quizShowScore: TDV.Tour.Script.quizShowScore,
      getPlayListItemByMedia: TDV.Tour.Script.getPlayListItemByMedia,
      pauseGlobalAudios: TDV.Tour.Script.pauseGlobalAudios,
      showComponentsWhileMouseOver:
        TDV.Tour.Script.showComponentsWhileMouseOver,
      quizResumeTimer: TDV.Tour.Script.quizResumeTimer,
      showPopupPanoramaVideoOverlay:
        TDV.Tour.Script.showPopupPanoramaVideoOverlay,
      quizShowTimeout: TDV.Tour.Script.quizShowTimeout,
      cloneCamera: TDV.Tour.Script.cloneCamera,
      setMainMediaByName: TDV.Tour.Script.setMainMediaByName,
      executeJS: TDV.Tour.Script.executeJS,
      quizStart: TDV.Tour.Script.quizStart,
      setStartTimeVideoSync: TDV.Tour.Script.setStartTimeVideoSync,
      copyObjRecursively: TDV.Tour.Script.copyObjRecursively,
      textToSpeechComponent: TDV.Tour.Script.textToSpeechComponent,
      htmlToPlainText: TDV.Tour.Script.htmlToPlainText,
      getCurrentPlayerWithMedia: TDV.Tour.Script.getCurrentPlayerWithMedia,
      setDirectionalPanoramaAudio: TDV.Tour.Script.setDirectionalPanoramaAudio,
      changeBackgroundWhilePlay: TDV.Tour.Script.changeBackgroundWhilePlay,
      getActivePlayerWithViewer: TDV.Tour.Script.getActivePlayerWithViewer,
      loadFromCurrentMediaPlayList:
        TDV.Tour.Script.loadFromCurrentMediaPlayList,
      quizPauseTimer: TDV.Tour.Script.quizPauseTimer,
      executeAudioActionByTags: TDV.Tour.Script.executeAudioActionByTags,
      showWindow: TDV.Tour.Script.showWindow,
      playGlobalAudioWhilePlayActiveMedia:
        TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,
      getOverlaysByGroupname: TDV.Tour.Script.getOverlaysByGroupname,
      setCameraSameSpotAsMedia: TDV.Tour.Script.setCameraSameSpotAsMedia,
      getOverlays: TDV.Tour.Script.getOverlays,
      getPlayListsWithMedia: TDV.Tour.Script.getPlayListsWithMedia,
      triggerOverlay: TDV.Tour.Script.triggerOverlay,
      initQuiz: TDV.Tour.Script.initQuiz,
      changePlayListWithSameSpot: TDV.Tour.Script.changePlayListWithSameSpot,
      setStartTimeVideo: TDV.Tour.Script.setStartTimeVideo,
      pauseGlobalAudio: TDV.Tour.Script.pauseGlobalAudio,
      _getObjectsByTags: TDV.Tour.Script._getObjectsByTags,
      copyToClipboard: TDV.Tour.Script.copyToClipboard,
      setPanoramaCameraWithCurrentSpot:
        TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,
      getPanoramaOverlaysByTags: TDV.Tour.Script.getPanoramaOverlaysByTags,
      getPanoramaOverlayByName: TDV.Tour.Script.getPanoramaOverlayByName,
      setMainMediaByIndex: TDV.Tour.Script.setMainMediaByIndex,
      syncPlaylists: TDV.Tour.Script.syncPlaylists,
      historyGoBack: TDV.Tour.Script.historyGoBack,
      pauseCurrentPlayers: TDV.Tour.Script.pauseCurrentPlayers,
      resumeGlobalAudios: TDV.Tour.Script.resumeGlobalAudios,
      setValue: TDV.Tour.Script.setValue,
      stopTextToSpeech: TDV.Tour.Script.stopTextToSpeech,
      getCurrentPlayers: TDV.Tour.Script.getCurrentPlayers,
      getPixels: TDV.Tour.Script.getPixels,
      setOverlaysVisibilityByTags: TDV.Tour.Script.setOverlaysVisibilityByTags,
      playGlobalAudioWhilePlay: TDV.Tour.Script.playGlobalAudioWhilePlay,
      getMediaHeight: TDV.Tour.Script.getMediaHeight,
      _initTwinsViewer: TDV.Tour.Script._initTwinsViewer,
      showPopupImage: TDV.Tour.Script.showPopupImage,
      setLocale: TDV.Tour.Script.setLocale,
      quizFinish: TDV.Tour.Script.quizFinish,
      showPopupPanoramaOverlay: TDV.Tour.Script.showPopupPanoramaOverlay,
      _initSplitViewer: TDV.Tour.Script._initSplitViewer,
      updateVideoCues: TDV.Tour.Script.updateVideoCues,
      getMediaByName: TDV.Tour.Script.getMediaByName,
      stopGlobalAudio: TDV.Tour.Script.stopGlobalAudio,
      updateMediaLabelFromPlayList:
        TDV.Tour.Script.updateMediaLabelFromPlayList,
      playAudioList: TDV.Tour.Script.playAudioList,
      getMediaByTags: TDV.Tour.Script.getMediaByTags,
      getComponentsByTags: TDV.Tour.Script.getComponentsByTags,
      getActiveMediaWithViewer: TDV.Tour.Script.getActiveMediaWithViewer,
      autotriggerAtStart: TDV.Tour.Script.autotriggerAtStart,
      resumePlayers: TDV.Tour.Script.resumePlayers,
      quizSetItemFound: TDV.Tour.Script.quizSetItemFound,
      visibleComponentsIfPlayerFlagEnabled:
        TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,
      getMainViewer: TDV.Tour.Script.getMainViewer,
      getPlayListWithItem: TDV.Tour.Script.getPlayListWithItem,
      setMediaBehaviour: TDV.Tour.Script.setMediaBehaviour,
      setPanoramaCameraWithSpot: TDV.Tour.Script.setPanoramaCameraWithSpot,
      getComponentByName: TDV.Tour.Script.getComponentByName,
      setOverlayBehaviour: TDV.Tour.Script.setOverlayBehaviour,
      openEmbeddedPDF: TDV.Tour.Script.openEmbeddedPDF,
      setComponentsVisibilityByTags:
        TDV.Tour.Script.setComponentsVisibilityByTags,
      getPlayListItemIndexByMedia: TDV.Tour.Script.getPlayListItemIndexByMedia,
      textToSpeech: TDV.Tour.Script.textToSpeech,
      quizShowQuestion: TDV.Tour.Script.quizShowQuestion,
      initOverlayGroupRotationOnClick:
        TDV.Tour.Script.initOverlayGroupRotationOnClick,
      isPanorama: TDV.Tour.Script.isPanorama,
      getAudioByTags: TDV.Tour.Script.getAudioByTags,
      clone: TDV.Tour.Script.clone,
      updateDeepLink: TDV.Tour.Script.updateDeepLink,
      translate: TDV.Tour.Script.translate,
      getOverlaysByTags: TDV.Tour.Script.getOverlaysByTags,
    },
    gap: 10,
    minHeight: 0,
    id: "rootPlayer",
    paddingBottom: 0,
    minWidth: 0,
    borderSize: 0,
    definitions: [
      {
        progressBackgroundColorRatios: [0],
        subtitlesOpacity: 1,
        playbackBarBackgroundColorDirection: "vertical",
        surfaceReticleColor: "#FFFFFF",
        paddingLeft: 0,
        subtitlesBorderColor: "#FFFFFF",
        surfaceReticleOpacity: 0.6,
        toolTipTextShadowColor: "#000000",
        subtitlesHorizontalAlign: "center",
        subtitlesEnabled: true,
        subtitlesVerticalAlign: "bottom",
        height: "100%",
        playbackBarRight: 0,
        paddingRight: 0,
        subtitlesTextDecoration: "none",
        progressOpacity: 1,
        subtitlesTextShadowOpacity: 1,
        progressRight: 0,
        subtitlesBorderSize: 0,
        toolTipBorderColor: "#767676",
        subtitlesTextShadowBlurRadius: 0,
        playbackBarProgressBackgroundColor: ["#3399FF"],
        progressBorderRadius: 0,
        playbackBarProgressBorderRadius: 0,
        toolTipFontStyle: "normal",
        toolTipShadowOpacity: 1,
        toolTipPaddingBottom: 4,
        surfaceReticleSelectionColor: "#FFFFFF",
        toolTipTextShadowBlurRadius: 3,
        toolTipBackgroundColor: "#F6F6F6",
        playbackBarHeadShadowOpacity: 0.7,
        playbackBarHeadShadowVerticalLength: 0,
        subtitlesTextShadowHorizontalLength: 1,
        progressLeft: 0,
        paddingTop: 0,
        subtitlesFontFamily: "Arial",
        progressBarBackgroundColorDirection: "vertical",
        toolTipShadowColor: "#333138",
        minHeight: 50,
        surfaceReticleSelectionOpacity: 1,
        paddingBottom: 0,
        minWidth: 100,
        playbackBarHeadShadowBlurRadius: 3,
        progressBarBorderColor: "#000000",
        toolTipDisplayTime: 600,
        playbackBarProgressBackgroundColorRatios: [0],
        playbackBarLeft: 0,
        subtitlesFontColor: "#FFFFFF",
        progressBarBackgroundColorRatios: [0],
        toolTipShadowHorizontalLength: 0,
        progressBackgroundColorDirection: "vertical",
        displayTooltipInTouchScreens: false,
        toolTipFontSize: "1.11vmin",
        playbackBarHeadHeight: 15,
        borderRadius: 0,
        playbackBarHeadShadowColor: "#000000",
        playbackBarHeadBackgroundColorRatios: [0, 1],
        subtitlesFontWeight: "normal",
        toolTipTextShadowOpacity: 0,
        playbackBarHeadBorderSize: 0,
        vrPointerSelectionColor: "#FF6600",
        playbackBarHeadShadow: true,
        progressBorderColor: "#000000",
        transitionMode: "blending",
        toolTipShadowBlurRadius: 3,
        playbackBarBorderColor: "#FFFFFF",
        progressBarBackgroundColor: ["#000000"],
        playbackBarBorderRadius: 0,
        subtitlesPaddingLeft: 5,
        toolTipPaddingLeft: 6,
        playbackBarProgressBorderColor: "#000000",
        subtitlesPaddingRight: 5,
        subtitlesPaddingTop: 5,
        toolTipFontColor: "#606060",
        playbackBarHeadOpacity: 1,
        toolTipPaddingRight: 6,
        progressBackgroundOpacity: 1,
        toolTipFontWeight: "normal",
        progressBackgroundColor: ["#FFFFFF"],
        vrPointerColor: "#FFFFFF",
        propagateClick: false,
        playbackBarOpacity: 1,
        playbackBarProgressOpacity: 1,
        playbackBarHeadBackgroundColor: ["#111111", "#666666"],
        playbackBarHeadBorderRadius: 0,
        progressBarOpacity: 1,
        vrPointerSelectionTime: 2000,
        subtitlesTop: 0,
        playbackBarHeadShadowHorizontalLength: 0,
        progressBottom: 0,
        playbackBarBorderSize: 0,
        playbackBarBottom: 5,
        playbackBarHeadBorderColor: "#000000",
        subtitlesBottom: 50,
        translationTransitionEnabled: false,
        subtitlesShadow: false,
        width: "100%",
        toolTipShadowVerticalLength: 0,
        progressHeight: 10,
        playbackBarProgressBackgroundColorDirection: "vertical",
        doubleClickAction: "none",
        progressBorderSize: 0,
        toolTipBorderRadius: 3,
        displayTooltipInSurfaceSelection: true,
        subtitlesTextShadowColor: "#000000",
        subtitlesTextShadowVerticalLength: 1,
        id: "MainViewer",
        borderSize: 0,
        playbackBarHeight: 10,
        playbackBarBackgroundColor: ["#FFFFFF"],
        playbackBarBackgroundOpacity: 1,
        subtitlesPaddingBottom: 5,
        shadow: false,
        toolTipShadowSpread: 0,
        progressBarBorderRadius: 0,
        playbackBarHeadBackgroundColorDirection: "vertical",
        toolTipOpacity: 1,
        toolTipFontFamily: "Arial",
        class: "ViewerArea",
        firstTransitionDuration: 0,
        toolTipBorderSize: 1,
        subtitlesBackgroundOpacity: 0.2,
        subtitlesBackgroundColor: "#000000",
        toolTipPaddingTop: 4,
        playbackBarHeadWidth: 6,
        data: { name: "Main Viewer" },
        toolTipHorizontalAlign: "center",
        subtitlesGap: 0,
        transitionDuration: 500,
        playbackBarProgressBorderSize: 0,
        progressBarBorderSize: 0,
        subtitlesFontSize: "3vmin",
      },
      {
        hfov: 360,
        thumbnailUrl:
          "media/panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4_t.jpg",
        label: trans("panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4.label"),
        data: { label: "office_demo_00001" },
        class: "Panorama",
        partial: false,
        hfovMax: 130,
        id: "panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4",
        frames: [
          {
            cube: {
              class: "ImageResource",
              levels: [
                {
                  rowCount: 8,
                  colCount: 48,
                  height: 4096,
                  width: 24576,
                  tags: "ondemand",
                  class: "TiledImageResourceLevel",
                  url: "media/panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4_0/{face}/0/{row}_{column}.jpg",
                },
                {
                  rowCount: 4,
                  colCount: 24,
                  height: 2048,
                  width: 12288,
                  tags: "ondemand",
                  class: "TiledImageResourceLevel",
                  url: "media/panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4_0/{face}/1/{row}_{column}.jpg",
                },
                {
                  rowCount: 2,
                  colCount: 12,
                  height: 1024,
                  width: 6144,
                  tags: "ondemand",
                  class: "TiledImageResourceLevel",
                  url: "media/panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4_0/{face}/2/{row}_{column}.jpg",
                },
                {
                  rowCount: 1,
                  colCount: 6,
                  height: 512,
                  width: 3072,
                  tags: ["ondemand", "preload"],
                  class: "TiledImageResourceLevel",
                  url: "media/panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4_0/{face}/3/{row}_{column}.jpg",
                },
              ],
            },
            thumbnailUrl:
              "media/panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4_t.jpg",
            class: "CubicPanoramaFrame",
          },
        ],
        pitch: 0,
        vfov: 180,
      },
      {
        hoverFactor: 0,
        initialPosition: { yaw: 0, class: "PanoramaCameraPosition", pitch: 0 },
        initialSequence: "this.sequence_37CEACAD_3DFD_E97F_41BB_1A4AD77E5213",
        class: "PanoramaCamera",
        id: "panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4_camera",
        automaticZoomSpeed: 10,
      },
      {
        id: "mainPlayList",
        items: [
          {
            media: "this.panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4",
            camera: "this.panorama_3693B9DB_3DFD_EADA_41BB_CDFBD5DA00E4_camera",
            player: "this.MainViewerPanoramaPlayer",
            class: "PanoramaPlayListItem",
            end: "this.trigger('tourEnded')",
          },
        ],
        class: "PlayList",
      },
      {
        gyroscopeVerticalDraggingEnabled: true,
        displayPlaybackBar: true,
        aaEnabled: true,
        surfaceSelectionEnabled: false,
        class: "PanoramaPlayer",
        arrowKeysAction: "none",
        viewerArea: "this.MainViewer",
        id: "MainViewerPanoramaPlayer",
        mouseControlMode: "drag_rotation",
        zoomEnabled: false,
        touchControlMode: "drag_rotation",
      },
      {
        restartMovementOnUserInteraction: false,
        movements: [
          {
            easing: "cubic_in",
            class: "DistancePanoramaCameraMovement",
            yawSpeed: 7.96,
            yawDelta: 25.5,
          },
          {
            easing: "linear",
            class: "DistancePanoramaCameraMovement",
            yawSpeed: 7.96,
            yawDelta: 309,
          },
          {
            easing: "cubic_out",
            class: "DistancePanoramaCameraMovement",
            yawSpeed: 7.96,
            yawDelta: 25.5,
          },
        ],
        id: "sequence_37CEACAD_3DFD_E97F_41BB_1A4AD77E5213",
        class: "PanoramaCameraSequence",
      },
    ],
    shadow: false,
    mobileMipmappingEnabled: false,
    class: "Player",
    backgroundColorRatios: [0],
    data: {
      defaultLocale: "it",
      name: "Player456",
      locales: { it: "locale/it.txt" },
      textToSpeechConfig: {
        speechOnQuizQuestion: false,
        volume: 1,
        pitch: 1,
        stopBackgroundAudio: false,
        speechOnInfoWindow: false,
        speechOnTooltip: false,
        rate: 1,
      },
    },
    toolTipHorizontalAlign: "center",
    borderRadius: 0,
    scrollBarColor: "#000000",
    horizontalAlign: "left",
    desktopMipmappingEnabled: false,
  };
  if (script["data"] == undefined) script["data"] = {};
  script["data"]["translateObjs"] = translateObjs;
  script["data"]["history"] = {};
  script["scripts"]["createQuizConfig"] = createQuizConfig;
  TDV["PlayerAPI"]["defineScript"](script);
})();
//Generated with v2022.1.30, Thu Nov 3 2022
