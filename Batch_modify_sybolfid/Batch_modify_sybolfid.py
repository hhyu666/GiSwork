from ast import main
from doctest import _Out, OutputChecker
from importlib import machinery
import os
import sys
from threading import main_thread
import time



class Logger(object):
    logName = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime()) + ".log"

    def __init__(self, filename=logName, stream=sys.stdout, encoding='utf8'):
        self.terminal = stream
        self.log = open(filename, 'a')
        self.encoding = 'utf8'

    def write(self, message):
        self.terminal.write(message)
        self.log.write(message)
        

    def flush(self):
        pass


sys.stdout = Logger(stream=sys.stdout)


def generate_names(name):
    """
    生成      "name" :??? ,的句子

    :param name: 中间的name具体值
    :return: 生成      "name" :??? ,的句子
    """
    left = '''      "name" : "'''
    right = '''",'''
    newname = left + name + right
    return newname


def generate_values(values):
    """
    生成      "???"      的句子

    :param values: 中间的values具体值
    :return: 生成      "???"      的句子
    """
    left = '''                      "'''
    right = '''"'''
    new_values = left + values + right
    return new_values


def changer_values(file, name, numbers):
    f = open(file, 'r')
    f2 = open("%s.bak" % file, "w")
    line = f.readline()
    i = 1
    while line:
        notchangeline = line
        # print(line)
        # print(k)
        name = generate_names(name)
        line = line.split(",")[0] + ","

        if line == name:

            print(name + " begin at:" + i.__str__())
            progress = 0

            while line != '''    },''':
                values = '''                "values" : ['''
                line = line.split("[")[0] + "["
                if values == line:
                    print("------------------------")
                    print("Old symbol ID is on:" + (i + 4).__str__())
                    f2.write(notchangeline)
                    line = f.readline()
                    f2.write(line)
                    line = f.readline()
                    f2.write(line)
                    line = f.readline()
                    f2.write(line)
                    # ----------------
                    line = f.readline()
                    i = i + 4
                    ok = line.split('''"''')

                    # print(len(numbers))

                    ValuesInNumbers = False

                    num = int(len(numbers) / 2)

                    for j in range(0, len(numbers), 2):
                        if numbers[j] == ok[1]:
                            # print(generate_values(numbers[j + 1]))
                            f2.writelines(generate_values(numbers[j + 1]) + "\n")
                            progress = progress + 1
                            print("[" + num.__str__() + "/" + progress.__str__() + "]")

                            print(ok[1] + " is changed to " + numbers[j + 1])

                            ValuesInNumbers = True
                            break

                    if not ValuesInNumbers:
                        f2.writelines(line)
                        print("The ID does not need to be changed.")

                    # ----------------
                else:
                    f2.write(notchangeline)
                line = f.readline()
                notchangeline = line
                line = line.split(",")[0] + ","
                i = i + 1

        # print (line.strip())

        f2.write(notchangeline)
        line = f.readline()
        i = i + 1

    f.close()
    f2.close()
    os.remove(file)
    os.rename("%s.bak" % file, file)


def alter(mapxfile, testfile):
    f3 = open(testfile, "r")
    line = f3.readline()
    numbers = []
    name = ''
    while line:

        line2 = line.split()
        line1 = line2[0]

        if line1.isdigit():
            numbers.append(line2[0])
            numbers.append(line2[1])
            print("Old symbol ID:" + line2[0] + " is changed to " + "New symbol ID:" + line2[1])

        else:
            if line1 == '<Null>':
                print("Old symbol ID:" + line2[0] + " is changed to " + "New symbol ID:" + line2[1])
                numbers.append(line2[0])
                numbers.append(line2[1])
            else:
                if numbers:
                    # print(name)
                    # print(numbers)
                    changer_values(mapxfile, name, numbers)
                    numbers = []
                print("-------------------------------------------------------------")
                print("name:" + line.strip())
                name = line.strip()

        line = f3.readline()
    changer_values(mapxfile, name, numbers)


if __name__ == '__main__':
    alter("temp_show.mapx", "data.txt")
