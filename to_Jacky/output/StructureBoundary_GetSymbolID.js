// SymbolID (for LV_DPM) -- Cabinet boundary
if ($feature.assetgroup == 171) {

    if ($originalFeature.lifecyclestatus != $feature.lifecyclestatus) {
        var symid = 1

        if (DomainName($feature, 'lifecyclestatus') == "INS") { symid = 670 }
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX") { symid = 671 }
        else if (DomainName($feature, 'lifecyclestatus') == "RES") { symid = 672 }

        return symid
    }

}

// SymbolID (for DT_SEG) -- Duct boundary
if ($feature.assetgroup == 180) {

    if ($originalFeature.symbolfid != 707) {
        return 707
    }

}

// SymbolID (for DT_PIT) -- Underground structure boundary
if ($feature.assetgroup == 174) {
    if ($originalFeature.symbolfid != 670) {
        return 670
    }
}

// SymbolID (for ADM_ADR) -- Building boundary
if ($feature.assetgroup == 176) {
    if ($originalFeature.lifecyclestatus != $feature.lifecyclestatus) {
        var symid = 1

        if (DomainName($feature, 'lifecyclestatus') == "INS") { symid = 670 }
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX") { symid = 671 }
        else if (DomainName($feature, 'lifecyclestatus') == "RES") { symid = 672 }

        return symid
    }

}