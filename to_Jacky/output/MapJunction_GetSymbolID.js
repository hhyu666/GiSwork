// SymbolID (For LV_TER) -- Low voltage Line end
if ($feature.assetgroup == 962) {
    if ($originalFeature.symbolfid!=10) {
        return 10
    } 
}
   
   // SymbolID (For HV_TER) -- Medium voltage Line end
   if ($feature.assetgroup == 963) {
    if ($originalFeature.symbolfid!=68) {
        return 68
    } 
    
   }
   
   // SymbolID (for HV_DIRS) -- Medium voltage Customer service point
   if ($feature.assetgroup == 967) {
    if($originalFeature.statusinterconnection!=$feature.statusinterconnection){
        var symid = 0
            
            if (DomainName($feature,"statusinterconnection") == "Yes"){symid = 2}
            else{symid = 1}
            
            return symid
    }
    
   }
   
   // SymbolID (for HV_JNT) -- Medium voltage Cable joint
   if ($feature.assetgroup == 955) {
    if ($originalFeature.transitionjointtype!=$feature.transitionjointtype||$originalFeature.weakjointtype!=$feature.weakjointtype){
        var symid=21
            
            if ($feature.transitionjointtype == "1"){
            if ($feature.weakjointtype == 1){symid =21}
            else if($feature.weakjointtype ==2){symid =22}
            else if($feature.weakjointtype ==3){symid =23}
            else if($feature.weakjointtype ==4){symid =24}
            else{symid =25}
            }else{
            if ($feature.weakjointtype == 1){symid =26}
            else if($feature.weakjointtype ==2){symid =27}
            else if($feature.weakjointtype ==3){symid =28}
            else if($feature.weakjointtype ==4){symid =29}
            else{symid =30}}
            
            return symid
    }  
   }
   
   // SymbolID (for LV_JNT) -- Low voltage Cable joint
   if ($feature.assetgroup == 954) {
    if($originalFeature.weakjointtype!=$feature.weakjointtype){
        var symid=31
            
            if ($feature.weakjointtype == 1){symid =31}
            else if($feature.weakjointtype ==2){symid =32}
            else if($feature.weakjointtype ==3){symid =33}
            else if($feature.weakjointtype ==4){symid =34}
            else{symid =35}
            
            return symid
    }
    
   }
   
   // SymbolID (for LV_DIRS) -- Low voltage Customer service point
   if ($feature.assetgroup == 966) {
    if($originalFeature.supplytype!=$feature.supplytype){
        var symid = 0
            
            if (DomainName($feature,"supplytype") == "Single-Core Cable"){symid = 5}
            else if (DomainName($feature,"supplytype") == "Transit Block"){symid = 4}
            else{symid = 3}
            
            return symid
    }

    
   }
   
   // SymbolID (For SK_TER) -- Solkor Line end
   if ($feature.assetgroup == 756) {
    if ($originalFeature.symbolfid!=69) {
        return 69
    }  
   }
   
   // SymbolID (For SK_JNT) -- Solkor Cable joint
   if ($feature.assetgroup == 754) {
    if ($originalFeature.symbolfid!=71) {
        return 71
    } 
   }
   
   if (DomainName($feature, 'assetgroup') == 'Medium voltage Survey point') {
        if ($originalFeature.symbolfid!=43) {
            return 43
        } 
   } else if (DomainName($feature, 'assetgroup') == 'Low voltage Survey point') {
    if ($originalFeature.symbolfid!=44) {
        return 44
    } 
   } else if (DomainName($feature, 'assetgroup') == 'Solkor Survey point') {
    if ($originalFeature.symbolfid!=45) {
        return 45
    } 
   } else if (DomainName($feature, 'assetgroup') == 'Transmission Survey point') {
    if ($originalFeature.symbolfid!=46) {
        return 46
    } 
   } 


   // SymbolID (For SK_HUB) -- Solkor Network hub
   if ($feature.assetgroup == 772) {
    if ($originalFeature.symbolfid!=47) {
        return 47
    } 
   }
   
   // SymbolID (For TR_TER) -- Transmission Line end
   if ($feature.assetgroup == 965) {
    if ($originalFeature.symbolfid!=70) {
        return 70
    } 
   }
   
   // SymbolID (for TR_JNT) - m -- Transmission Cable joint
   if ($feature.assetgroup == 957) {
    if($originalFeature.assettype!=$feature.assettype){
        var symid = 30
            
            if ($feature.assettype == 850 || $feature.assettype == 851) {
            symid = 57
            }
            
            return symid
    }
   }