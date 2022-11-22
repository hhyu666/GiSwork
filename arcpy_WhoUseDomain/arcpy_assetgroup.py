import arcpy
import os
import sys
DB_path = r"C:\Users\DNC011\Documents\temp_use\temp_use\Desktop_0926.sde"
arcpy.env.workspace = DB_path

savedstdout=sys.stdout
print_log= open("schdevice.txt","w")
sys.stdout=print_log

domains = arcpy.da.ListDomains()

domain_name_dict = {x.name: x for x in domains}

subtypesgroup=['SchematicsDevice']
for subtypesname in subtypesgroup:
    subtypes = arcpy.da.ListSubtypes(subtypesname)
    keyField = 'nameproductvariant'
    ROPID_domain_dict = {}
    for stcode, stdict in list(subtypes.items()):
        print('Code: {0}'.format(stcode))
        for stkey in list(stdict.keys()):
            if stkey == 'FieldValues':
                print('Fields:')
            else:                    
                print('{0}: {1}'.format(stkey, stdict[stkey]))
        print("\n")

subtypesgroup=['SchematicsDevice']

subtypes = arcpy.da.ListSubtypes('SchematicsDevice')
keyField = 'nameproductvariant'
ROPID_domain_dict = {}
for stcode, stdict in list(subtypes.items()):
    print('Code: {0}'.format(stcode))
    for stkey in list(stdict.keys()):
        if stkey == 'FieldValues':
            print('Fields:')
        else:                    
            print('{0}: {1}'.format(stkey, stdict[stkey]))
    print("\n")



sys.stdout=savedstdout
print_log.close()


