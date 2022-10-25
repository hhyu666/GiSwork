
if __name__ == '__main__':
    f = open("data.txt", 'r')
    FinalFile = open("%s.bak" % "data.txt", "w")

    # st r ="""      "name" : "Misc__Text__Point___ToBe_converted_to_Anno___Anno","""
    str="""      "name" : "LV Misc. Cubicle","""
    # line = f.readline()
    # line2=line
    # while line2:
    #     line2=f.readline()
    #     line=line+line2
    #
    # FinalFile.write(line)
    str=  str.rstrip()
    str=  str.split("\"")[3]

    print(str)
    print("gogogo")
