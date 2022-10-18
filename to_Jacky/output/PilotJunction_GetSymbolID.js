// SymbolID (for PT_HUB) -- Pilot Network hub
if ($feature.assetgroup == 766) {
    if ($originalFeature.symbolfid != 48) {
        return 48
    }
}

// SymbolID (for PT_JNT) -- Pilot Cable joint
if ($feature.assetgroup == 763) {
    if ($originalFeature.symbolfid != 60) {
        return 60
    }
}

// SymbolID -- Pilot Line End
if ($feature.assetgroup == 764) {
    if ($originalFeature.symbolfid != 86) {
        return 86
    }
}


// SymbolID -- Pilot Depth Marker
if ($feature.assetgroup == 767) {
    if ($originalFeature.symbolfid != 87) {
        return 87
    }
}