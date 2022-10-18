
// SymbolID (for HV_DIRS) -- Medium voltage Customer service point
if ($feature.assetgroup == 967) {
    if($originalFeature.statusinterconnection!=$feature.statusinterconnection){
        var symid = 500
            
            if (DomainName($feature,"statusinterconnection") == "Yes"){symid = 502}
            else{symid = 501}
            
            return symid
    }
    
   }
   
   // SymbolID (for LV_DIRS) -- Low voltage Customer service point
   if ($feature.assetgroup == 966) {

    if($originalFeature.supplytype!=$feature.supplytype){
        var symid = 500
            
        if (DomainName($feature,"supplytype") == "Single-Core Cable"){symid = 505}
        else if (DomainName($feature,"supplytype") == "Transit Block"){symid = 504}
        else{symid = 503}
        
        return symid
    }
    
   }
   
   // SymbolID (For LV_SCH) -- Low voltage Cable joint
   if ($feature.assetgroup == 954) {
        if ($originalFeature.symbolfid!=506) {
            return 506
        }    
   }
   
   // SymbolID (For HV_JNT) -- Medium voltage Cable joint
   if ($feature.assetgroup == 955) {
        if ($originalFeature.symbolfid!=573) {
            return 573
        } 
   }
   
   // SymbolID (For off page ref) -- Medium voltage Off-page Conductor reference
   if ($feature.assetgroup == 751) {
        if ($originalFeature.symbolfid!=511) {
            return 511
        }    
   }
   
   // SymbolID (For HV_TER) -- Medium voltage Line end
   if ($feature.assetgroup == 963) {
    if ($originalFeature.symbolfid!=510) {
        return 510
    } 
   }