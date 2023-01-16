import os
import sys

import pandas as pd
def csv_to_xlsx(data_path):
    print('Start!'+data_path)
    for dirpath,dirname,filenames in os.walk(data_path): #os.walk()遍历文件
        print(dirpath)
        for fname in filenames:
            file_name=os.path.join(dirpath,fname)  #os.path.join()合并路径
            print(file_name)
            if file_name.endswith('.csv'):
                df=pd.read_csv(file_name) 
                floder,name=os.path.splitext(file_name) #分割后缀
                df.to_excel(f"{floder}.xlsx",index=False)
                print(f'{file_name}'+'finished.') 
                print('-----------')
                # os.remove(file_name)
    print('Finished...')



if __name__ == '__main__':
    data_path = sys.argv[1]
    csv_to_xlsx(data_path)




