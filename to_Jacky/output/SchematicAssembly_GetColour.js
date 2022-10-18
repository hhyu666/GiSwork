if ($originalFeature.lifecyclestatus != $feature.lifecyclestatus) {
    // GetColour (For HV_SUB) -- Electric substation Medium voltage
    if ($feature.assetgroup == 904) {
        var colorkey = 14

        //read color from table
        if (DomainName($feature, 'lifecyclestatus') == "INS") { colorkey = 22 }
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX") { colorkey = 28 }

        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))


        return result.Colour
    }

    // GetColour (For LV_DP) -- Electric switching substation Low voltage
    if ($feature.assetgroup == 911) {
        var colorkey = 14

        //read color from table
        if (DomainName($feature, 'lifecyclestatus') == "INS") { colorkey = 24 }
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX") { colorkey = 28 }

        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))


        return result.Colour
    }
}



