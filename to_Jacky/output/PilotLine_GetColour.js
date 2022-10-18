// GetColour (PT_SEC) -- Pilot Cable segment
if ($feature.assetgroup == 762) {
    var colorkey = 26

    var sql = 'OBJECTID = ' + colorkey
    var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))

    if ($originalFeature.symbolfid != result.Colour) {
        return result.Colour
    }
}