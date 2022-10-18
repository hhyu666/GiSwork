var colorkey = 26

// GetColour (for PR) -- Pilot Cable end
// GetColour (for PT_HUB) -- Pilot Network hub
// GetColour (for PT_DEPTH) -- Pilot Survey point
// GetColour (for PR_JNT) -- Pilot Cable joint
if ($feature.assetgroup == 764 || $feature.assetgroup == 766 || $feature.assetgroup == 767 || $feature.assetgroup == 763) {
    if ($feature.lifecyclestatus == 11) {
        colorkey = 12
    }
}

var sql = 'OBJECTID = ' + colorkey
var result = First(Filter(FeatureSetByName($datastore, 'NGISDD_Desktop_0926.NGISSD_SQLSERVICE.Colour', ['*'], false), sql))


if ($originalFeature.symbolcolor!=result.Colour) {
    return result.Colour
} 