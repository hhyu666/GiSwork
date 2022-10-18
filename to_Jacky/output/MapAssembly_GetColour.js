if ($originalFeature.lifecyclestatus!=$feature.lifecyclestatus||$originalFeature.voltagelimitmaxoperating!=$feature.voltagelimitmaxoperating){
    // GetColour (for TR_SUB) -- Electric substation Transmission
        if ($feature.assetgroup == 902) {
            var colorkey = 14
            
            //read color from table
            if (DomainName($feature,'lifecyclestatus') == "INS"){
                if(DomainName($feature,'voltagelimitmaxoperating') == '33 kV' || DomainName($feature,'voltagelimitmaxoperating') == '66 kV'){colorkey = 10}
                else if (DomainName($feature,'voltagelimitmaxoperating') == '132 kV'){colorkey = 430}
                else{colorkey = 27}}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 431}
            else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}
            
            var sql = 'OBJECTID = ' + colorkey
            var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
            
            
            return result.Colour
        }
        
        // GetColour (for HV_SUBM) -- Electric substation Medium voltage
        if ($feature.assetgroup == 904) {
            var colorkey = 14
            
            //read color from table
            if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
            else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}
            
            var sql = 'OBJECTID = ' + colorkey
            var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
            
            
            return result.Colour
        }
        
        // GetColour (for LV_DPM) -- Electric switching location Low voltage
        if ($feature.assetgroup == 911) {
            var colorkey = 14
            
            //read color from table
            
            if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
            else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}
            
            
            var sql = 'OBJECTID = ' + colorkey
            var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
            
            
            return result.Colour
        }
        
        // GetColour (for LV_IO) -- Controls assembly Low voltage
        if ($feature.assetgroup == 915) {
            var colorkey = 14
            
            //read color from table
            
            if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
            else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}
            
            
            var sql = 'OBJECTID = ' + colorkey
            var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
            
            
            return result.Colour
        }
        
        // GetColour (for HV_SUBM) -M -- Controls assembly Medium voltage
        if ($feature.assetgroup == 914) {
            var colorkey = 14
            
            //read color from table
            if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
            else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 22}
            
            var sql = 'OBJECTID = ' + colorkey
            var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))
            
            
            return result.Colour
        }
}
    