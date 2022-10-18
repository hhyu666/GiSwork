// GetColour (For LV_DPM) -- Cabinet boundary
if ($feature.assetgroup == 171) {
    if ($originalFeature.lifecyclestatus != $feature.lifecyclestatus) {
        var colorkey = 14

        //read color from table

        if (DomainName($feature, 'lifecyclestatus') == "INS") { colorkey = 24 }
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX") { colorkey = 28 }
        else if (DomainName($feature, 'lifecyclestatus') == "RES") { colorkey = 24 }


        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))


        return result.Colour
    }

}

// GetColour (For DT_SEG) -- Duct boundary
if ($feature.assetgroup == 180) {

    if ($originalFeature.lifecyclestatus != $feature.lifecyclestatus) {
        var colorkey = 14

        //read color from table

        if (DomainName($feature, 'lifecyclestatus') == "INS") { colorkey = 13 }
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX") { colorkey = 28 }



        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))


        return result.Colour
    }


}

// GetColour (For DT_PIT) -- Underground structure boundary
if ($feature.assetgroup == 174) {
    if ($originalFeature.lifecyclestatus != $feature.lifecyclestatus || $originalFeature.assettype != $feature.assettype) {
        var colorkey = 14

        //read color from table

        if (DomainName($feature, 'lifecyclestatus') == "INS") { colorkey = 13 }
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX") { colorkey = 28 }

        if ($feature.assettype == 190) {
            colorkey = 27
        }

        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))


        return result.Colour
    }

}

// GetColour (For ADM_ADR) -- Building boundary
if ($feature.assetgroup == 176) {

    if ($originalFeature.lifecyclestatus != $feature.lifecyclestatus) {
        var colorkey = 2

        //read color from table

        if (DomainName($feature, 'lifecyclestatus') == "INS") { colorkey = 2 }
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX") { colorkey = 28 }
        else if (DomainName($feature, 'lifecyclestatus') == "RES") { colorkey = 12 }

        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))

        return result.Colour
    }
}