import arcpy
import os
DB_path = r"C:\Users\DNC011\Documents\temp_use\temp_use\Desktop_0926.sde"
arcpy.env.workspace = DB_path

domains = arcpy.da.ListDomains()

domain_name_dict = {x.name: x for x in domains}


subtypes = arcpy.da.ListSubtypes('PilotJunction')

keyField = 'referenceobjectparentid'
#keyField = 'nameproductvariant'

ROPID_domain_dict = {}
for stcode, stdict in list(subtypes.items()):
    print('Code: {0}'.format(stcode))
    for stkey in list(stdict.keys()):
        if stkey == 'FieldValues':
            print('Fields:')
            fields = stdict[stkey]
            for field, fieldvals in list(fields.items()):
                # print((field), field == 'referenceobjectparentid')
                if field == keyField:
                    print(' --Field name: {0}'.format(field))
                    print(' --Field default value: {0}'.format(fieldvals[0]))
                    if not fieldvals[1] is None:
                        print(' --Domain name: {0}'.format(fieldvals[1].name))
                        ROPID_domain_dict[stcode] = fieldvals[1].name
        else:                    
            print('{0}: {1}'.format(stkey, stdict[stkey]))
    print("\n\n\n")


_string = """
CREATE FUNCTION %s(@code INT) 
RETURNS nvarchar(128) AS 
BEGIN
%s
    RETURN ''
END
"""

def genDomainFunction(domain, func_name):
    temp_line = "    IF (@code = %s) RETURN '%s'"
    temp_line_list = []
    if domain.domainType == 'CodedValue':
        coded_values = domain.codedValues
        for val, desc in coded_values.items():
            # print('{0} : {1}'.format(val, desc))
            temp_line_list.append(temp_line % (str(val), desc))
    print(_string % (func_name, "\n".join(temp_line_list)))


def getDomainCode(domain):
    if domain.domainType == 'CodedValue':
        coded_values = domain.codedValues
        for val, desc in coded_values.items():
            print('{0} : {1}'.format(val, desc))
    elif domain.domainType == 'Range':
        print('Min: {0}'.format(domain.range[0]))
        print('Max: {0}'.format(domain.range[1]))

