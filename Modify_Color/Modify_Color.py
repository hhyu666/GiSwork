from PIL import Image
import numpy as np
import os

folderpath = r"F:\work\line_symbol\media"

outpath = r"F:\work\line_symbol\out"


def GetFilesPath(path):
    filePaths = []  # 存储目录下的所有文件名，含路径
    for root, dirs, files in os.walk(path):
        files.sort(key=lambda x : int(x.split('.')[0]))
        for file in files:

            filePaths.append(file)
    return filePaths


# os.path.join(root,)
filePaths = GetFilesPath(folderpath)
print(filePaths)

f = open(r"rgb.txt", 'r')
line = f.readline()
rgb = []
while line:
    ok = line.split()
    rgb.append(ok)
    line = f.readline()

print(rgb)

go=0

for file in range(0, len(filePaths)):
    filepath = os.path.join(folderpath, filePaths[file])
    pil_im = Image.open(filepath).convert("RGB")
    # print(type(pil_im))

    rgbcolor=rgb[go]

    im_data = np.asarray(pil_im)


    new_img = np.zeros_like(im_data)
    for i in range(im_data.shape[0]):
        for j in range(im_data.shape[1]):
            # print(im_data[i,j])
            if (im_data[i, j][0] < 200):
                new_img[i, j] = [rgbcolor[0], rgbcolor[1], rgbcolor[2]]
            else:
                new_img[i, j] = im_data[i, j]

    print(filePaths[file])
    print(rgbcolor)
    print(go)

    imx = Image.fromarray(new_img)
    # imx.show()
    # print(im_data[0])
    # pil_im.save(outpath)#保存图片
    imx.save(os.path.join(outpath,filePaths[file]))
    go=go+1
