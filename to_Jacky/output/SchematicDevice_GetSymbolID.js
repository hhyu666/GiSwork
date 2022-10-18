// SymbolID (for HV_TRF) -- Medium voltage 2 winding power transformer
if ($feature.assetgroup == 801) {
    if ($originalFeature.nameproductvariant != $feature.nameproductvariant) {
        var symid = 513
        if (DomainName($feature, "nameproductvariant") == "Rectifier") {
            symid = 512
        }
        else {
            symid = 513
        }
        return symid
    }
}

// SymbolID (for HV_SWG) -- Medium voltage Switchgear
if ($feature.assetgroup == 775) {
    if ($originalFeature.nameproductvariant != $feature.nameproductvariant) {
        var symid = 508
        if (DomainName($feature, "nameproductvariant") == "GVS - Gas Vacuum Switch" || DomainName($feature, "nameproductvariant") == "Breaker" || DomainName($feature, "nameproductvariant") == "Bus Breaker") {
            symid = 507
        }
        else if (DomainName($feature, 'nameproductvariant') == "AVF - Air Vacuum Feeder") {
            symid = 509
        } else {
            symid = 508
        }
        return symid
    }
}

// SymbolID (For HV_BKR) -- Medium voltage Circuit breaker primary
if ($feature.assetgroup == 771) {
    if ($originalFeature.symbolfid != 514) {
        return 514
    }
}

// SymbolID (for HV_SWG_4) -- Medium voltage Meter point
if ($feature.assetgroup == 819) {

    if ($originalFeature.symbolrotation != $feature.symbolrotation || $originalFeature.nameproductvariant != $feature.nameproductvariant) {
        var symid = 515
        var deg = round($feature.symbolrotation * 180 / 3.1415926)
        if (DomainName($feature, 'nameproductvariant') == "AMP - Air Metering Panel" || DomainName($feature, 'nameproductvariant') == "GMP - Gas Metering Panel") {
            if (deg == 90 || deg == -90) { symid = 516 }
            else if (deg == 0 || deg == 180) { symid = 515 }
        } else {
            if (deg == 90 || deg == -90) { symid = 518 }
            else if (deg == 0 || deg == 180) { symid = 517 }
            else { symid = 17 }
        }
        return symid
    }


}

// SymbolID (for LV_SWG) -- Low voltage Switchgear
if ($feature.assetgroup == 774) {
    if ($originalFeature.statusswitchingnormal != $feature.statusswitchingnormal) {
        var symid = 0
        if (DomainName($feature, "statusswitchingnormal") == "Closed") { symid = 574 }
        else { symid = 573 }
        return symid
    }

}

// SymbolID (for LV_ISO) -- Low voltage Disconnector
if ($feature.assetgroup == 850) {
    if ($originalFeature.symbolfid != 572) {
        return 572
    }
}

// SymbolID (for LV_TRF) -- Low voltage Transformer end
if ($feature.assetgroup == 808) {
    if ($originalFeature.symbolfid != 519) {
        return 519
    }
}

// SymbolID (for LV_IO) -M -- Low voltage Cutout
if ($feature.assetgroup == 773) {
    if ($originalFeature.statusswitchingnormal != $feature.statusswitchingnormal || $originalFeature.ASSETTYPE != $feature.ASSETTYPE) {
        // Cutout fuse - Low voltage
        var symid = 558
        if ($feature.ASSETTYPE == 354) {
            if (DomainName($feature, 'statusswitchingnormal') == 'Open') {
                return 550
            } else if (DomainName($feature, 'statusswitchingnormal') == 'Closed') {
                return 551
            }
        } else if (Includes([352, 353, 355, 356, 357], $feature.ASSETTYPE)) {
            if (DomainName($feature, "statusswitchingnormal") == "Closed") { symid = 558 }
            else { symid = 559 }

        }
        return symid
    }

}