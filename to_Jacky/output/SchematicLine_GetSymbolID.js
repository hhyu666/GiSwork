// SymbolID (for HV Sch Cable) -- Medium voltage Conductor
if ($feature.assetgroup == 921) {
    if($originalFeature.lifecyclestatus!=$feature.lifecyclestatus){
        var symid = 1
            
            //read color from table
            if (DomainName($feature,"circuittype") == "Interconnector"){
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 683}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 684}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 685}
            }else{
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 686}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 687}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 688}
            }
            
            return symid
    }
    
   }
   
   // SymbolID (for LV Sch Cable) -- Low voltage Conductor
   if ($feature.assetgroup == 920) {
    if($originalFeature.lifecyclestatus!=$feature.lifecyclestatus){
        var symid = 7
            if ($feature.ASSETTYPE == 0){ //UNKNOWN
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 689}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 690}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 691}
            }else if ($feature.ASSETTYPE == 880){ //UNDERGROUND
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 692}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 693}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 694}
            }else if ($feature.ASSETTYPE == 881){ //OVERHEAD
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 695}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 696}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 697}
            }else if ($feature.ASSETTYPE == 886){ // SUBMARINE
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 698}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 699}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 700}
            }else if ($feature.namefeaturetype == 573){ // Interconnector
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 683}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 684}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 685}
            }else{
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 701}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 702}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 703}
            }
            return symid
    }
    
   }
   
   // SymbolID (for HV busbar) -- Medium voltage Busbar
   if ($feature.assetgroup == 925) {
    if ($originalFeature.symbolfid!=682) {
        return 682
    } 
   }
   
   // SymbolID (for LV busbar) -- Low voltage Busbar
   if ($feature.assetgroup == 924) {
    if ($originalFeature.symbolfid!=682) {
        return 682
    } 
   }
   
   // SymbolID (for LV Sch Cable/Connector) -- Low voltage Connector line
   if ($feature.assetgroup == 928) {
    if($originalFeature.lifecyclestatus!=$feature.lifecyclestatus){
        var symid = 7
            if ($feature.ASSETTYPE == 0){ //UNKNOWN
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 689}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 690}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 691}
            }else if ($feature.ASSETTYPE == 880){ //UNDERGROUND
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 692}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 693}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 694}
            }else if ($feature.ASSETTYPE == 881){ //OVERHEAD
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 695}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 696}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 697}
            }else if ($feature.ASSETTYPE == 886){ // SUBMARINE
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 698}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 699}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 700}
            }else{
                if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 701}
                else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 702}
                else if (DomainName($feature, 'lifecyclestatus') == "PPR"){symid = 703}
            }
            return symid
    }
    
   }