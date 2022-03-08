# Python 踩坑树
- Application architecture
  - [理解Flask大型应用结构](https://www.dreamer.im/2019/04/01/flask/%E7%90%86%E8%A7%A3Flask%E5%A4%A7%E5%9E%8B%E5%BA%94%E7%94%A8%E7%BB%93%E6%9E%84/)
- Flask
  - `pip install flask - raise ValueError("check_hostname requires server_hostname")`
    - Proxy Problem
- Pip
  - `pip install virtualenv` takes forever
    - `pip install --default-timeout=\{forever\} virtualenv`, then wait forever
      - It really takes forever
    - [Virtualenv and Pip hanging forever](https://stackoverflow.com/questions/40093814/virtualenv-and-pip-hanging-forever)
    - [python利用国内源解决pip install 安装超时问题](https://blog.csdn.net/ezreal_tao/article/details/102142789)
ValueError: check_hostname requires server_hostname`
- Jupyter Notebook
  - Scipy
  - Numpy