// SymbolID (LV_POL) -- Pole
if ($feature.assetgroup == 102) {

    if ($originalFeature.nameproductvariant != $feature.nameproductvariant) {
        var symid = 0
        if ($feature.nameproductvariant == "Aerial Bundled Cable Pole") { symid = 38 }
        else if ($feature.nameproductvariant == "Path Lighting Pole") { symid = 39 }
        else if ($feature.nameproductvariant == "Central Metering Pole") { symid = 40 }
        else if ($feature.nameproductvariant == "Aerial Bundled Central Metering Pole") { symid = 41 }
        else { symid = 42 }

        return symid
    }

}

// SymbolID -- Duct End
if ($feature.assetgroup == 759) {
    if ($originalFeature.symbolfid != 88) {
        return 88
    }
}