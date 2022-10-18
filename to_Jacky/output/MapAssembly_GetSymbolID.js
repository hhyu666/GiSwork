// SymbolID (for LV_DPM) -- Electric switching location Low voltage
if ($feature.assetgroup == 911) {
    if ($originalFeature.symbolfid!=6) {
        return 6
} 

    
   }
   
   // SymbolID (for HV_SUBM) -- Electric substation Medium voltage
   if ($feature.assetgroup == 904) {
    if ($originalFeature.symbolfid!=64) {
        return 64
    } 
   return 64
   }
   
   // SymbolID (for LV_IO) -- Controls assembly Low voltage
   if ($feature.assetgroup == 915) {

    if($originalFeature.isratingverified!=$feature.isratingverified){
        var symid = 0
            if (DomainName($feature,"isratingverified") == "Yes"){symid = 36}
            else {symid = 37}
            
            return symid
    }
    
   }
   
   // SymbolID (for MV_IO) -- Controls assembly Medium voltage
   if ($feature.assetgroup == 914) {
    if ($originalFeature.symbolfid!=64) {
        return 64
} 
   }