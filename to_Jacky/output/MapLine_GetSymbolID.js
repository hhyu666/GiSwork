// SymbolID (HV_SEC) -- Medium voltage Conductor
if ($feature.assetgroup == 921) {
    if ($originalFeature.lifecyclestatus!=$feature.lifecyclestatus) {
        var symid = 1
        
        //read color from table
        if ($feature.Assettype == 900 ){ //Submarine
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 601}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 602}
            else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 603}
        }else if ($feature.Assettype == 901 || $feature.Assettype == 906){ //Underground
            if (DomainName($feature,'nametype') == "Unknown Route"){
                if (DomainName($feature,'shortlengthpilc') == "Show"){
                    if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 604}
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 605}
                    else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 606}
                }else if (DomainName($feature, 'watertree') == 'Yes'){
                    if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 607}
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 608}
                    else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 609}
                }else if (DomainName($feature, 'wateringress') == 'Yes'){
                    if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 610}
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 611}
                    else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 612}
                }else{
                    if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 613}
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 614}
                    else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 615}
                }
            }else{
                if (DomainName($feature,'voltagelimitmaxrating') == '22 kV'){
                    if (DomainName($feature,'shortlengthpilc') == "Show"){
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 616}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 617}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 618}
                    }else if (DomainName($feature, 'watertree') == 'Yes'){
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 619}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 620}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 621}
                    }else if (DomainName($feature, 'wateringress') == 'Yes'){
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 622}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 623}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 624}
                    }else{
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 625}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 626}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 627}
                }
                }else if (DomainName($feature,'voltagelimitmaxrating') == '33 kV'){
                    if (DomainName($feature,'shortlengthpilc') == "Show"){
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 628}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 629}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 630}
                    }else if (DomainName($feature, 'watertree') == 'Yes'){
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 631}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 632}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 633}
                    }else if (DomainName($feature, 'wateringress') == 'Yes'){
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 634}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 635}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 636}
                    }else{
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 637}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 638}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 639}
                }
                }else{
                    if (DomainName($feature,'shortlengthpilc') == "Show"){
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 640}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 641}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 642}
                    }else if (DomainName($feature, 'watertree') == 'Yes'){
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 643}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 644}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 645}
                    }else if (DomainName($feature, 'wateringress') == 'Yes'){
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 646}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 647}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 648}
                    }else{
                        if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 649}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 650}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 651}
                    }
                }
            }
        }else{
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 652}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 653}
            else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 654}
        }
        return symid
    }
}
   
   // SymbolID (for HV_BUS) -- Medium voltage Busbar
   if ($feature.assetgroup == 925) {
        if ($originalFeature.symbolfid!=682) {
            return 682
        }
   }
   
   // SymbolID (for LV_SEC) -- Low voltage Conductor
   if ($feature.assetgroup == 920) {
        if ($originalFeature.lifecyclestatus!=$feature.lifecyclestatus) {
            var symid = 1
            
            //read color from table
            if ($feature.Assettype == 886 ){ //Submarine
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 655}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 656}
            else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 657}
            }else if ($feature.Assettype == 883){symid = 670
            }else if ($feature.Assettype == 881){ //overhead
            if (DomainName($feature,'nametype') == "Aerial Bundled Cable"){
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 673}
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 674}
                    else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 675}
            }else{
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 676}
                    else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 677}
                    else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 678}
            } 
            }else{
            if (DomainName($feature,'nametype') == "Unknown Route"){
            if (DomainName($feature, 'watertree') == 'Yes'){
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 658}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 659}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 660}
            }else if (DomainName($feature, 'wateringress') == 'Yes'){
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 661}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 662}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 663}
            }else{
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 679}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 680}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 681}
            }
            }else{
            if (DomainName($feature, 'watertree') == 'Yes'){
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 664}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 665}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 666}
            }else if (DomainName($feature, 'wateringress') == 'Yes'){
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 667}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 668}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 669}
            }else{
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 670}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 671}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 672}
            }
            }
            }
            
            return symid
        }
   }
   
   // SymbolID (for LV_PAN) -- Low voltage Busbar
   if ($feature.assetgroup == 924) {
        if ($originalFeature.symbolfid!=682) {
            return 682
        } 
   }
   
   // SymbolID (for SK_SEC) -- Solkor Line segment
   if ($feature.assetgroup == 755) {
        if ($originalFeature.lifecyclestatus!=$feature.lifecyclestatus) {
            var symid = 1
            
            //read color from table
            if (DomainName($feature,'nametype') == "Submarine Cable" ){
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 655}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 656}
            else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 657}
            }else{
            if (DomainName($feature,'nametype') == "Unknown Route"){
            if (DomainName($feature, 'wateringress') == 'Yes'){
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 661}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 662}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 663}
            }else{
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 679}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 680}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 681}
            }
            }else{
            if (DomainName($feature, 'wateringress') == 'Yes'){
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 667}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 668}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 669}
            }else{
            if (DomainName($feature,'lifecyclestatus') == "INS"){symid = 670}
                        else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 671}
                        else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 672}
            }
            }
            }
            
            return symid
        }
   }
   
   // SymbolID (for TR_SEC) -- Transmission Conductor
   if ($feature.assetgroup == 923) {
    if ($originalFeature.lifecyclestatus!=$feature.lifecyclestatus) {
        var symid = 670  
        //read color from table
    
        if ($feature.assettype == 955){//submarine
            if (DomainName($feature,'lifecyclestatus') == "INS" || DomainName($feature,'lifecyclestatus') == "SP"){symid = 655}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 656}
            else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 657}
        }else if ($feature.assettype == 0){//unknown route
            if (DomainName($feature,'lifecyclestatus') == "INS" || DomainName($feature,'lifecyclestatus') == "SP"){symid = 679}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 680}
            else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 681}
        }else if ($feature.assettype == 957){//overhead
            if (DomainName($feature,'lifecyclestatus') == "INS" || DomainName($feature,'lifecyclestatus') == "SP"){symid = 704}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 6105}
            else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 706}
        }else{
            if (DomainName($feature,'lifecyclestatus') == "INS" || DomainName($feature,'lifecyclestatus') == "SP"){symid = 670}
            else if (DomainName($feature, 'lifecyclestatus') == "PPA" || DomainName($feature, 'lifecyclestatus') == "PPM" || DomainName($feature, 'lifecyclestatus') == "PPX"){symid = 671}
            else if (DomainName($feature, 'lifecyclestatus') == "RES"){symid = 672}
        }  
        return symid  
    }
   }
   
   // SymbolID (HV_SEC)1 -- Medium voltage Connector line
   if ($feature.assetgroup == 929) {
        if ($originalFeature.symbolfid!=670) {
            return 670
        }   
   }
   
   // SymbolID (for LV_SEC)1 -- Low voltage Connector line
   if ($feature.assetgroup == 928) {
        if ($originalFeature.symbolfid!=670) {
            return 670
        }  
   }
   
   // SymbolID (for TR_SEC)1 -- Transmission Connector line
   if ($feature.assetgroup == 931) {
        if ($originalFeature.symbolfid!=670) {
            return 670
        }  
   }