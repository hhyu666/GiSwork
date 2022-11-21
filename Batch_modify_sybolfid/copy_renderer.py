import os
import sys
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


def copy_renderer(copyfile, copiedfile):
    """
    从copyfile复制renderer到copiedfile。
    :param copyfile: 复制的文件
    :param copiedfile: 被复制的文件
    :return:
    """
    # f = open(copyfile, 'r')
    f = open(copiedfile, 'r')
    FinalFile = open("%s.bak" % copiedfile, "w")

    line = f.readline()
    line2 = line.rstrip()
    i = 1
    while line:


        if line2 == """  "layerDefinitions" : [""":
            while line2 != '''  ],''':
                print("Find layerDefinitions!")

                if line2.split(":")[0] == """      "name" """:
                    name = line2.split("\"")[3]
                elif line2 == """      "renderer" : {""":
                    renderer = find_renderer(copyfile, name)
                    FinalFile.write(renderer)

                    while line2 != """      },""":
                        line = f.readline()
                        line2 = line.rstrip()

                    line = f.readline()
                    line2 = line.rstrip()



                FinalFile.write(line)
                line = f.readline()
                line2 = line.rstrip()

        FinalFile.write(line)
        line = f.readline()
        line2 = line.rstrip()
        i = i + 1

    f.close()
    FinalFile.close()
    # 需要删掉激活
    # os.remove(copiedfile)
    # os.rename("%s.bak" % copiedfile, copiedfile)

#目前存在大问题，有的地方name是一模一样的，name不是唯一的，要找到其他唯一的标识
#现在name不会重复了
def find_renderer(copyfile, name):
    """
    从copyfile找到要name对应的renderer
    :param copyfile: 复制的文件
    :param name: 要找的名字
    :return:
    """
    f = open(copyfile, 'r')
    line = f.readline()
    line2 = line.rstrip()
    i=1

    while line2:
        findline = """      "name" : \"""" + name + "\","
        if line2 == findline:
            while line2 != '''    },''':
                if line2 == """      "renderer" : {""":
                    print(i)
                    renderer = line
                    while line2 != """      },""":
                        line = f.readline()
                        line2 = line.rstrip()
                        i+=1

                        renderer = renderer + line;
                    # renderer = renderer + line;

                    return renderer

                line = f.readline()
                line2 = line.rstrip()
                i += 1




        line = f.readline()
        line2 = line.rstrip()
        i += 1
    return ""

if __name__ == '__main__':
    renderer = find_renderer("temp_show.mapx", "Analysis Zone")
    print(renderer)
    # copy_renderer("temp_show2.mapx","temp_show.mapx")