// GetColour (LV_POL) -- Pole
if ($feature.assetgroup == 102) {
    if ($originalFeature.lifecyclestatus != $feature.lifecyclestatus) {
        var colorkey = 14

        //read color from table
        if (DomainName($feature, 'lifecyclestatus') == "INS") { colorkey = 24 }
        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPR" || DomainName($feature, 'lifecyclestatus') == "PPX") { colorkey = 28 }
        else if (DomainName($feature, 'lifecyclestatus') == "RES") { colorkey = 12 }

        var sql = 'OBJECTID = ' + colorkey
        var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))


        return result.Colour
    }
}

// GetColour (ID_BALL) -- Marker
if ($feature.assetgroup == 118) {
    var colorkey = 14

    var attach = FeatureSetByAssociation($feature, 'attached')
    if (Count(attach) > 0) {
        var attach_o = First(attach)
        var fs_list = FeatureSetByName($datastore, "NGISDD_Desktop_0926.NGISSD_SQLSERVICE.MapJunction")
        var target_gid = attach_o['globalid']
        var fs = Filter(fs_list, "globalid = @target_gid");
        if (Count(fs) > 0) {
            fs = First(fs)
            var attach_ag = DomainName(fs, 'assetgroup')
            if (attach_ag == 'Medium voltage Line end' || attach_ag == 'Low voltage Line end') {
                return fs.symbolcolor
            }
        }
    }

    var sql = 'OBJECTID = ' + colorkey
    var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))


    if ($originalFeature.symbolcolor != result.Colour) {
        return result.Colour
    }
}