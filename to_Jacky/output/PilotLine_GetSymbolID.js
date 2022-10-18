// SymbolID (PT_SEC) -- Pilot Cable segment
if ($feature.assetgroup == 762) {
    if ($originalFeature.lifecyclestatus != $feature.lifecyclestatus) {
        var symid = 1

        //read color from table
        if (DomainName($feature, 'nametype') == "Submarine Cable") {
            if (DomainName($feature, 'lifecyclestatus') == "INS") { symid = 655 }
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX") { symid = 656 }
            else if (DomainName($feature, 'lifecyclestatus') == "RES") { symid = 657 }
        } else {
            if (DomainName($feature, 'nametype') == "Unknown Route") {
                if (DomainName($feature, 'wateringress') == 'Yes') {
                    if (DomainName($feature, 'lifecyclestatus') == "INS") { symid = 661 }
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX") { symid = 662 }
                    else if (DomainName($feature, 'lifecyclestatus') == "RES") { symid = 663 }
                } else {
                    if (DomainName($feature, 'lifecyclestatus') == "INS") { symid = 679 }
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX") { symid = 680 }
                    else if (DomainName($feature, 'lifecyclestatus') == "RES") { symid = 681 }
                }
            } else {
                if (DomainName($feature, 'wateringress') == 'Yes') {
                    if (DomainName($feature, 'lifecyclestatus') == "INS") { symid = 667 }
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX") { symid = 668 }
                    else if (DomainName($feature, 'lifecyclestatus') == "RES") { symid = 669 }
                } else {
                    if (DomainName($feature, 'lifecyclestatus') == "INS") { symid = 670 }
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX") { symid = 671 }
                    else if (DomainName($feature, 'lifecyclestatus') == "RES") { symid = 672 }
                }
            }
        }

        return symid
    }

}