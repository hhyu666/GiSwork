if ($originalFeature.lifecyclestatus!=$feature.lifecyclestatus){
    // GetColour (for HV_TER) -- Medium voltage Line end
    if ($feature.assetgroup == 963) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for HV_JNT) -- Medium voltage Cable joint
    if ($feature.assetgroup == 955) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for LV_TER) -- Low voltage Line end
    if ($feature.assetgroup == 962) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for LV_JNT) -- Low voltage Cable joint
    if ($feature.assetgroup == 954) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for off page ref) -- Medium voltage Off-page Conductor reference
    if ($feature.assetgroup == 751) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for HV_DIRS) -- Medium voltage Customer service point
    if ($feature.assetgroup == 967) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for LV_DIRS) -- Low voltage Customer service point
    if ($feature.assetgroup == 966) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
}
    