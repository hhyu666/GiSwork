if ($originalFeature.lifecyclestatus!=$feature.lifecyclestatus||$originalFeature.voltagelimitmaxoperating!=$feature.voltagelimitmaxoperating){
    var colorkey = 14

        // GetColour (For HV_TER) -- Medium voltage Line end
        // GetColour (For HV_JNT) -- Medium voltage Cable joint
        // GetColour  -- Medium Votlage Customer Installation
        if ($feature.assetgroup == 963 || $feature.assetgroup == 955 || $feature.assetgroup == 972) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){
            if (DomainName($feature,'voltagelimitmaxoperating') == '22 kV'){colorkey = 23}
            else{colorkey = 22}}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}

        }

        // GetColour (for HV_DIRS) -- Medium voltage Customer service point
        if ($feature.assetgroup == 967) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}

        }

        // GetColour (for LV_JNT) -- Low voltage Cable joint
        // GetColour (for LV_DIR) -- Low voltage Customer service point
        // GetColour (for LV_TER) -- Low voltage Line end
        // GetColour (for LV_TER) -- Low Votlage Customer Installation
        // GetColour (for LV_TER) -- Low voltage Busbar Tap
        // GetColour (for LV_TER) -- Low voltage Tap-off
        if ($feature.assetgroup == 954 || $feature.assetgroup == 966 || $feature.assetgroup == 962 || $feature.assetgroup == 971 || $feature.assetgroup == 977 || $feature.assetgroup == 958) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}
        
        }

        // GetColour (For SK_TER) -- Solkor Line end
        // GetColour (For SK_JNT) -- Solkor Cable joint
        if ($feature.assetgroup == 756 || $feature.assetgroup == 754) {
        
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){
        colorkey = 23}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 23}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 23}
        
        }

        if (DomainName($feature, 'assetgroup') == 'Medium voltage Cable joint' || DomainName($feature, 'assetgroup') == 'Medium voltage Tap-off'){

        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){
            if (DomainName($feature,'voltagelimitmaxoperating') == '22 kV'){colorkey = 23}
            else{colorkey = 22}}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}


        }
        if (DomainName($feature, "assetgroup") == "Low voltage Cable joint" || DomainName($feature, "assetgroup") == "Low voltage Tap-off"){


        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}

        }

        // GetColour (For SK_JNT)1 -- Transmission Cable joint
        // GetColour (For TR_TER) -- Transmission Line end
        // GetColour -- Tranmission Cable defect
        if ($feature.assetgroup == 957 || $feature.assetgroup == 965 || $feature.assetgroup == 784) { 
        //read color from table
        if (DomainName($feature,'lifecyclestatus') == "INS"){
        if ($feature.voltagelimitmaxoperating == 33000 || $feature.voltagelimitmaxoperating == 66000){colorkey = 10}
        else if ($feature.voltagelimitmaxoperating == 132000){colorkey = 19}
        else{colorkey = 27}
        }else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 23}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 10}
        
        }

        if (DomainName($feature, 'assetgroup') == 'Medium voltage Survey point') {

        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 22}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}


        } 
        else if (DomainName($feature, 'assetgroup') == 'Low voltage Survey point') {

        if (DomainName($feature,'lifecyclestatus') == "INS"){colorkey = 24}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 28}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 12}


        } 
        else if (DomainName($feature, 'assetgroup') == 'Solkor Survey point') {

        if (DomainName($feature,'lifecyclestatus') == "INS"){
        colorkey = 23}
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 23}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 23}


        } 
        else if (DomainName($feature, 'assetgroup') == 'Transmission Survey point') {

        if (DomainName($feature,'lifecyclestatus') == "INS"){
        if ($feature.voltagelimitmaxoperating == 33000 || $feature.voltagelimitmaxoperating == 66000){colorkey = 10}
        else if ($feature.voltagelimitmaxoperating == 132000){colorkey = 19}
        else{colorkey = 27}
        }else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX"){colorkey = 23}
        else if (DomainName($feature,'lifecyclestatus') == "RES"){colorkey = 10}

        }


        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore,'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour',['*'],false),sql))

        return result.Colour
}
    