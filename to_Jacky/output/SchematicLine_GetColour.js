if($originalFeature.lifecyclestatus!=$feature.lifecyclestatus){
    // GetColour (for HV Sch Busbar) -- Medium voltage Busbar
    if ($feature.assetgroup == 925) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for HV Sch Cable) -- Medium voltage Conductor
    if ($feature.assetgroup == 921) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for HV Sch Connector) -- Medium voltage Connector line
    if ($feature.assetgroup == 929) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for LV Sch Cable) -- Low voltage Conductor
    if ($feature.assetgroup == 920) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for LV Sch Busbar) -- Low voltage Busbar
    if ($feature.assetgroup == 924) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
    
    // GetColour (for LV Sch Connector) -- Low voltage Connector line
    if ($feature.assetgroup == 928) {
        var colorkey = 14
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        
        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
        
        
        return result.Colour
    }
}
