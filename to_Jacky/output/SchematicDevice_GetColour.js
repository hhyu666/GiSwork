if ($originalFeature.lifecyclestatus!=$feature.lifecyclestatus){
    // GetColour (HV_SWG) -- Medium voltage Switchgear
    if ($feature.assetgroup == 775) {
        var colorkey = 14
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        return result.Colour
    }
    
    // GetColour (HV_BKR) -- Medium voltage Circuit breaker primary
    if ($feature.assetgroup == 771) {
        var colorkey = 14
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        return result.Colour
    }
    
    // GetColour (HV_TRF) -- Medium voltage 2 winding power transformer
    if ($feature.assetgroup == 801) {
        var colorkey = 14
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        return result.Colour
    }
    
    // GetColour (LV_TRF) -- Low voltage Transformer end
    if ($feature.assetgroup == 808) {
        var colorkey = 14
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        return result.Colour
    }
    
    // GetColour (HV_SWG)1 -- Medium voltage Meter point
    if ($feature.assetgroup == 819) {
        var colorkey = 14
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        return result.Colour
    }
    
    // GetColour (LV_SWG) -- Low voltage Switchgear
    if ($feature.assetgroup == 774) {
        var colorkey = 14
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        return result.Colour
    }
    
    // GetColour (LV_ISO) -- Low voltage Disconnector
    if ($feature.assetgroup == 850) {
        var colorkey = 14
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        return result.Colour
    }
    
    // GetColour (LV_IO) -- Low voltage Cutout
    if ($feature.assetgroup == 773) {
        var colorkey = 14
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        return result.Colour
    }
}