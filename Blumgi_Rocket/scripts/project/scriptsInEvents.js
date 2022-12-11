const scriptsInEvents = {
    async Flowmanager_Event28_Act2(runtime, localVars) {
        PokiSDK.commercialBreak().then(() => {
            console.log("Commercial break finished, proceeding to game");
            PokiSDK.gameplayStart();
            runtime.globalVars.PAUSED = false;
        });
    },
    async Flowmanager_Event36_Act5(runtime, localVars) {
        PokiSDK.gameplayStop();
        console.log("Gameplay has stopped");
    },
    async Flowmanager_Event56_Act14(runtime, localVars) {},
    async Pokisdk_Event2_Act4(runtime, localVars) {
        runtime.globalVars.PokiHasInitialised = globalThis.PokiHasInitialised;
    },
    async Pokisdk_Event3_Act1(runtime, localVars) {
        PokiSDK.gameLoadingStart();
        console.log("gameloading has started");
    },
    async Pokisdk_Event4_Act1(runtime, localVars) {
        PokiSDK.gameLoadingFinished();
        console.log("gameloading has finished");
    },
    async Functions_Event19_Act1(runtime, localVars) {
        PokiSDK.gameplayStop();
        console.log("Gameplay has stopped");
    },
    async Functions_Event21_Act1(runtime, localVars) {
        PokiSDK.gameplayStop();
        console.log("Gameplay has stopped");
    },
    async Functions_Event111_Act3(runtime, localVars) {
        PokiSDK.gameplayStop();
        PokiSDK.rewardedBreak().then((success) => {
            if (success) {
                runtime.globalVars.PAUSED = false;
                runtime.globalVars.RWDX2wasTriggered = true;
                runtime.globalVars.isPlayingRwd = false;
            } else {}
        });
    },
    async Functions_Event113_Act3(runtime, localVars) {
        PokiSDK.gameplayStop();
        PokiSDK.rewardedBreak().then((success) => {
            if (success) {
                runtime.globalVars.PAUSED = false;
                runtime.globalVars.rwdSkinwasTriggered = true;
                runtime.globalVars.isPlayingRwd = false;
            } else {}
        });
    }
};
self.C3.ScriptsInEvents = scriptsInEvents;