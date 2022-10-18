// SymbolID (for HV_TRF) -- Medium voltage 2 winding power transformer
if ($feature.assetgroup == 801) {
    if($originalFeature.nameproductvariant!=$feature.nameproductvariant){
        var symid = 13
        if (DomainName($feature, "nameproductvariant") == "Rectifier"){
        symid = 12}
        else{
        symid = 13}
        return symid
    }
}

   // SymbolID (for HV_SWG) -- Medium voltage Switchgear
   if ($feature.assetgroup == 775) {

    if($originalFeature.nameproductvariant!=$feature.nameproductvariant){
        var symid = 8
            if (DomainName($feature,"nameproductvariant") == "GVS - Gas Vacuum Switch" || DomainName($feature,"nameproductvariant") == "Breaker" || DomainName($feature,"nameproductvariant") == "Bus Breaker"){
            symid = 7}
            else if (DomainName($feature,'nameproductvariant') == "AVF - Air Vacuum Feeder"){
            symid = 9
            }else{
            symid = 8
            }
            return symid
    }   
   }

   // SymbolID (For HV_BKR) -- Medium voltage Circuit breaker primary
   if ($feature.assetgroup == 771) {
    if ($originalFeature.symbolfid!=7) {
        return 7
    } 
   }
   // SymbolID (for HV_SWG_4) -- Medium voltage Meter point
   if ($feature.assetgroup == 819) {
    if($originalFeature.nameproductvariant!=$feature.nameproductvariant){
        var symid = 15
            if (DomainName($feature,'nameproductvariant') == "AMP - Air Metering Panel" || DomainName($feature,'nameproductvariant') == "GMP - Gas Metering Panel"){symid = 15}
            else{symid = 17}
            return symid
    }
   }
   // SymbolID (for LV_IO) -- Low voltage Cutout
   if ($feature.assetgroup == 773) {
    if ($originalFeature.symbolfid!=30) {
        return 30
    } 
   }
   // SymbolID (for LV_SWG) -- Low voltage Switchgear
   if ($feature.assetgroup == 774) {

    if($originalFeature.statusswitchingnormal!=$feature.statusswitchingnormal){
        var symid = 0
            if (DomainName($feature,"statusswitchingnormal") == "Closed"){symid=15}
            else{symid=16}
            return symid
    }
   }

   // SymbolID (for LV_ISO) -- Low voltage Disconnector
   if ($feature.assetgroup == 850) {

    if ($originalFeature.symbolfid!=8) {
        return 8
    } 
   }
   // SymbolID (for LV_TRF) -- Low voltage Transformer end
   if ($feature.assetgroup == 808) {

    if ($originalFeature.symbolfid!=19) {
        return 19
    } 

   }
   // SymbolID (for TR_SWG) -- Transmission Circuit Breaker
   if ($feature.assetgroup == 781) {

    if ($originalFeature.symbolfid!=76) {
        return 76
    } 
   }
   // SymbolID (for TR_TRF) -- Transmission Transformer
   if ($feature.assetgroup == 803) {

    if ($originalFeature.symbolfid!=77) {
        return 77
    } 
    
   }
   // SymbolID (for TR) -- Transmission Regulator
   if ($feature.assetgroup == 825) {
    if ($originalFeature.symbolfid!=78) {
        return 78
    } 
   }
   // SymbolID (for TR) -- Transmission Source Point
   if ($feature.assetgroup == 817) {

    if ($originalFeature.symbolfid!=79) {
        return 79
    } 
   }