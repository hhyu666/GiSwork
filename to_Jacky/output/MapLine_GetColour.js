if ($originalFeature.lifecyclestatus!=$feature.lifecyclestatus||$originalFeature.voltagelimitmaxoperating!=$feature.voltagelimitmaxoperating) {  
    // GetColour (for LV_SEC) -- Low voltage Conductor
    var colourTable = FeatureSetByName($datastore,"NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour")
    var colorkey = 14

    if ($feature.assetgroup == 920) {
        //Testing
        //read color from table
        if ($feature.ASSETTYPE != 883){
            if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
            else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 24}
        }else{colorkey = 24}
        

    }

    // GetColour (for HV_SEC) -- Medium voltage Conductor
    if ($feature.assetgroup == 921) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){
            if (DomainName($feature,'voltagelimitmaxoperating') == '22 kV' || $feature.voltagelimitmaxoperating == 22000){colorkey = 23}
            else{colorkey = 22}}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 22}
        

    }

    // GetColour (for HV_BUS) -- Medium voltage Busbar
    if ($feature.assetgroup == 925) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 22}

    }

    // GetColour (for LV_PAN) -- Low voltage Busbar
    if ($feature.assetgroup == 924) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 22}

    }

    // GetColour (for SK_SEC) -- Solkor Line segment
    if ($feature.assetgroup == 755) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){
        colorkey = 23}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 23}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 23}
        
    }

    // GetColour (for TR_SEC) -- Transmission Conductor
    if ($feature.assetgroup == 923) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){
        if ($feature.voltagelimitmaxoperating == 33000 || $feature.voltagelimitmaxoperating == 66000){colorkey = 10}
        else if ($feature.voltagelimitmaxoperating == 132000){colorkey = 19}
        else{colorkey = 27}
        }else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 23}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 10}

    }

    // GetColour (for LV_SEC)1 -- Low voltage Connector line
    if ($feature.assetgroup == 928) {
        
        //read color from table
        if ($feature.ASSETTYPE != 883){
            if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
            else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 24}
        }else{colorkey = 24}

    }

    // GetColour (for HV_SEC)1 -- Medium voltage Connector line
    if ($feature.assetgroup == 929) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){
            if (DomainName($feature,'voltagelimitmaxoperating') == '22 kV' || $feature.voltagelimitmaxoperating == 22000){colorkey = 23}
            else{colorkey = 22}}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 22}

    }

    // GetColour (for TR_SEC)1 -- Transmission Connector line
    if ($feature.assetgroup == 931) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){
        if ($feature.voltagelimitmaxoperating == 33000 || $feature.voltagelimitmaxoperating == 66000){colorkey = 10}
        else if ($feature.voltagelimitmaxoperating == 132000){colorkey = 19}
        else{colorkey = 27}
        }else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 23}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 10}
        
    }



    var sql = 'OBJECTID = ' + colorkey
    var result = First(Filter(colourTable,sql))


    return result.Colour
}