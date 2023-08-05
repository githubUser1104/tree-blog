(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{292:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[s._v("#")]),s._v(" 命令行")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("简易的linux和shell教程"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("https://www.linuxcool.com/")]),s._v(" "),a("li",[s._v("https://github.com/jaywcjlove/linux-command")])]),s._v(" "),a("h2",{attrs:{id:"linux目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux目录结构"}},[s._v("#")]),s._v(" linux目录结构")]),s._v(" "),a("p",[s._v("从根目录"),a("code",[s._v("/")]),s._v("开始")]),s._v(" "),a("ul",[a("li",[s._v("bin 存放二进制可执行文件(ls,cat,mkdir等)")]),s._v(" "),a("li",[s._v("boot 存放用于系统引导时使用的文件")]),s._v(" "),a("li",[s._v("dev 存放设备文件")]),s._v(" "),a("li",[s._v("etc 存放系统配置文件")]),s._v(" "),a("li",[s._v("home 存放用户文件，通常以用户名作为目录名再区分，例如"),a("code",[s._v("/home/zhangsan")])]),s._v(" "),a("li",[s._v("lib 存放跟文件系统中程序运行所需要的共享库及内核模块")]),s._v(" "),a("li",[s._v("mnt 系统管理员安装临时文件系统的安装点，例如可以将U盘挂载到该目录")]),s._v(" "),a("li",[s._v("opt 额外安装的可选应用程序包所放置的位置")]),s._v(" "),a("li",[s._v("proc 虚拟文件系统，存放当前内存的映射")]),s._v(" "),a("li",[s._v("root 超级用户目录")]),s._v(" "),a("li",[s._v("sbin 存放二进制可执行文件，只有root才能访问")]),s._v(" "),a("li",[s._v("tmp 存放各种临时文件")]),s._v(" "),a("li",[s._v("usr 存放系统应用程序，其中"),a("code",[s._v("/usr/local")]),s._v("为本地管理员软件安装目录")]),s._v(" "),a("li",[s._v("var 存放运行时需要改变数据的文件")])]),s._v(" "),a("p",[s._v("用户目录"),a("code",[s._v("~")]),s._v("，默认是root目录")]),s._v(" "),a("h2",{attrs:{id:"命令基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令基础"}},[s._v("#")]),s._v(" 命令基础")]),s._v(" "),a("p",[a("code",[s._v("cmd [options] [arguments]")])]),s._v(" "),a("ul",[a("li",[s._v("命令区分大小写")]),s._v(" "),a("li",[s._v("tab提示补全")]),s._v(" "),a("li",[s._v("上下箭头查看历史命令")]),s._v(" "),a("li",[s._v("别名alias（例如rm默认使用-rf参数） "),a("code",[s._v("alias rm='rm -rf'")])]),s._v(" "),a("li",[s._v("空格间隔（例如同时删除多个指定的目录和文件） "),a("code",[s._v("rm -rf test index.bak index.html")])]),s._v(" "),a("li",[s._v("支持正则")])]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("h3",{attrs:{id:"系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统"}},[s._v("#")]),s._v(" 系统")]),s._v(" "),a("ul",[a("li",[s._v("重启 "),a("code",[s._v("reboot")])]),s._v(" "),a("li",[s._v("关闭系统 "),a("code",[s._v("halt")])]),s._v(" "),a("li",[s._v("查看centos版本 "),a("code",[s._v("cat /etc/redhat-release")])]),s._v(" "),a("li",[s._v("查看历史命令 "),a("code",[s._v("history")])])]),s._v(" "),a("h3",{attrs:{id:"文件与目录管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件与目录管理"}},[s._v("#")]),s._v(" 文件与目录管理")]),s._v(" "),a("ul",[a("li",[s._v("查看当前目录 "),a("code",[s._v("pwd")])]),s._v(" "),a("li",[s._v("切换目录 "),a("code",[s._v("cd /usr/local")]),s._v(" "),a("ul",[a("li",[s._v("切换到上一级目录 "),a("code",[s._v("cd ..")])]),s._v(" "),a("li",[s._v("切换到当前目录下的local目录 "),a("code",[s._v("cd ./local")]),s._v(" 或 "),a("code",[s._v("cd loacl")])]),s._v(" "),a("li",[s._v("切换到cd跳转目录前所在的目录"),a("code",[s._v("cd -")])])])]),s._v(" "),a("li",[s._v("显示当前目录下文件信息\n"),a("ul",[a("li",[s._v("只显示文件名 "),a("code",[s._v("ls")])]),s._v(" "),a("li",[s._v("详细信息 "),a("code",[s._v("ls -l")])]),s._v(" "),a("li",[s._v("列出指定目录下的所有以w开头的文件或目录 "),a("code",[s._v("ls /usr/bin/w*")])])])]),s._v(" "),a("li",[s._v("修改文件所属和权限(读写执行)\n"),a("ul",[a("li",[s._v("利用数字 "),a("code",[s._v("chmod 777 ./test.sh")])]),s._v(" "),a("li",[s._v("利用字母 "),a("code",[s._v("chmod u=rwx,g=rx,o=r ./test.sh")])])])]),s._v(" "),a("li",[s._v("查看文件详细信息 "),a("code",[s._v("stat test.md")])]),s._v(" "),a("li",[s._v("新建\n"),a("ul",[a("li",[s._v("新建文件夹 "),a("code",[s._v("mkdir -p /tmp/a/b/c")])]),s._v(" "),a("li",[s._v("新建文件 "),a("code",[s._v("touch test.html")])])])]),s._v(" "),a("li",[s._v("删除指定文件或文件夹 "),a("code",[s._v("rm -rf xxx")]),s._v(" "),a("ul",[a("li",[s._v("删除该目录下所有文件 "),a("code",[s._v("rm -rf *")])])])]),s._v(" "),a("li",[s._v("剪切文件\n"),a("ul",[a("li",[s._v("把该目录下所有文件放到上一级目录 "),a("code",[s._v("mv * ../")])]),s._v(" "),a("li",[s._v("改名文件 "),a("code",[s._v("mv index.html index.bak")])])])]),s._v(" "),a("li",[s._v("复制文件 "),a("code",[s._v("cp /root/index.html /usr/test/index.bak")]),s._v(" "),a("ul",[a("li",[s._v("通常加上-a来支持复制文件夹和权限 "),a("code",[s._v("cp -a /root/public/* .")])]),s._v(" "),a("li",[s._v("强制复制不询问是否覆盖(cp前面加上了\\是因为在某些服务器 cp 被 alias命令 设置成 cp -i) "),a("code",[s._v("\\cp -rf * /etc/www/")])])])]),s._v(" "),a("li",[s._v("在当前目录下查找文件 "),a("code",[s._v("find -name xxx")]),s._v(" "),a("ul",[a("li",[s._v("在指定目录下查找文件 "),a("code",[s._v("find /tmp/test -name xxx")])])])]),s._v(" "),a("li",[s._v("查看文件 "),a("code",[s._v("cat index.html")]),s._v(" "),a("ul",[a("li",[s._v("查看文件头10行 "),a("code",[s._v("head -10 test.html")])]),s._v(" "),a("li",[s._v("查看文件尾10行 "),a("code",[s._v("tail -10 test.html")])])])])]),s._v(" "),a("h3",{attrs:{id:"磁盘管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理"}},[s._v("#")]),s._v(" 磁盘管理")]),s._v(" "),a("ul",[a("li",[s._v("查看所有磁盘使用情况 "),a("code",[s._v("df -h")]),s._v(" "),a("ul",[a("li",[s._v("查看当前目录所在磁盘的使用情况 "),a("code",[s._v("df -h ./")])])])]),s._v(" "),a("li",[s._v("查看目录或文件的占用空间大小\n"),a("ul",[a("li",[s._v("当前目录的大小 "),a("code",[s._v("du -sh")])]),s._v(" "),a("li",[s._v("当前目录以及子目录的大小 "),a("code",[s._v("du -lh | sort -n")])]),s._v(" "),a("li",[s._v("指定文件的大小 "),a("code",[s._v("du -sh xxx.html")])])])])]),s._v(" "),a("h3",{attrs:{id:"yum包管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yum包管理器"}},[s._v("#")]),s._v(" yum包管理器")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.runoob.com/linux/linux-yum.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装、删除和更换源等"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("注意：\n"),a("ul",[a("li",[s._v("yum 是一个在 Fedora 和 RedHat 以及 SUSE 中的 Shell 前端软件包管理器，例如centos。")]),s._v(" "),a("li",[s._v("apt 是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器。")])])])]),s._v(" "),a("h3",{attrs:{id:"未分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未分类"}},[s._v("#")]),s._v(" 未分类")]),s._v(" "),a("ul",[a("li",[s._v("重定向\n"),a("ul",[a("li",[s._v("把左边的输出放到右边的文件（有则覆盖，无则创建）里去 "),a("code",[s._v('echo "my content" > test.txt')])]),s._v(" "),a("li",[s._v("把左边的输出追加到右边的文件（有则追加，无则创建）里去 "),a("code",[s._v('echo "my content" >> test.txt')])])])]),s._v(" "),a("li",[s._v("管道\n"),a("ul",[a("li",[s._v("将前面命令的结果给后面的命令（将ll的结果加入wc统计字数） "),a("code",[s._v("ll | wc")])]),s._v(" "),a("li",[s._v("通过管道和grep命令搜索输出的结果中的关键字，例如搜索网络信息中的ip "),a("code",[s._v("ifconfig | grep inet")])])])]),s._v(" "),a("li",[s._v("linux自带解压（将nginx源码包解压到当前目录，v代表输出过程） "),a("code",[s._v("tar -xvf nginx-1.20.1.tar.gz")])]),s._v(" "),a("li",[s._v("linux自带压缩（将当前目录的文件压缩成public.tar.gz） "),a("code",[s._v("tar -cvf public.tar.gz *")])]),s._v(" "),a("li",[s._v("centos自带包管理 "),a("code",[s._v("yum -y install xxx")])]),s._v(" "),a("li",[s._v("检测网络连通性 "),a("code",[s._v("ping ip或www.baidu.com")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/xyy1028/article/details/104787061",target:"_blank",rel:"noopener noreferrer"}},[s._v("防火墙"),a("OutboundLink")],1),s._v(" "),a("ul",[a("li",[s._v("防火墙状态 "),a("code",[s._v("systemctl status firewalld.service")])]),s._v(" "),a("li",[s._v("关闭防火墙 "),a("code",[s._v("systemctl stop firewalld.service")])]),s._v(" "),a("li",[s._v("禁用防火墙 "),a("code",[s._v("systemctl disable firewalld.service")])])])]),s._v(" "),a("li",[s._v("进程（例如nginx）\n"),a("ul",[a("li",[s._v("查看nginx进程号 "),a("code",[s._v("ps -ef | grep nginx")])]),s._v(" "),a("li",[s._v("查看xxxx端口的进程 "),a("code",[s._v("lsof -i :xxxx")])]),s._v(" "),a("li",[s._v("结束进程 "),a("code",[s._v("kill -9 进程号pid")])])])]),s._v(" "),a("li",[s._v("查看端口占用："),a("code",[s._v("netstat -ntulp | grep 3306")])]),s._v(" "),a("li",[s._v("查看网络信息：ip "),a("code",[s._v("ifconfig")])]),s._v(" "),a("li",[s._v("shell环境变量：略")])]),s._v(" "),a("h3",{attrs:{id:"vim编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim编辑器"}},[s._v("#")]),s._v(" vim编辑器")]),s._v(" "),a("ul",[a("li",[s._v("进入 "),a("code",[s._v("vim filename")])]),s._v(" "),a("li",[s._v("默认模式：\n"),a("ul",[a("li",[s._v("其他模式下按esc或ctrl c可以返回默认模式")]),s._v(" "),a("li",[s._v("x 删除光标所在的字符")])])]),s._v(" "),a("li",[s._v("插入模式：按下insert\n"),a("ul",[a("li",[s._v("HOME/END，移动光标到行首/行尾")]),s._v(" "),a("li",[s._v("Page Up/Page Down，上/下翻页")])])]),s._v(" "),a("li",[s._v("命令模式：按下冒号:")]),s._v(" "),a("li",[s._v("wq 保存退出")]),s._v(" "),a("li",[s._v("q! 不保存退出")]),s._v(" "),a("li",[s._v("如果改动量大的话，推荐本地修改再上传")])]),s._v(" "),a("h2",{attrs:{id:"常用工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用工具"}},[s._v("#")]),s._v(" 常用工具")]),s._v(" "),a("h3",{attrs:{id:"ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" ssh")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac自带ssh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程连接ip，然后输入密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" username@ip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出ssh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传下载：目标服务器要开启写入权限。 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从服务器下载文件 scp username@servername:/path/filename /Users/mac/Desktop（本地目录）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从服务器下载目录 scp -r username@servername:/root/（远程目录） /Users/mac/Desktop/（本地目录）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传文件到服务器 scp /Users/zeng/Desktop/sourceMap.html root@47.106.170.60:/root/mytest")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传目录到服务器 scp -r /Users/mac/Desktop/ username@servername:/root/（远程目录）")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"压缩与解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩与解压"}},[s._v("#")]),s._v(" 压缩与解压")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装 "),a("code",[s._v("yum install zip unzip")])])]),s._v(" "),a("li",[a("p",[s._v("解压 "),a("code",[s._v("unzip test.zip")])]),s._v(" "),a("ul",[a("li",[s._v("将dist.zip解压到指定路径，编码支持中文 "),a("code",[s._v("unzip -O cp936 dist.zip -d .")])]),s._v(" "),a("li",[s._v("把dist文件夹里面的内容放到上一级目录 "),a("code",[s._v("cd dist && mv * ../ && cd .. && rm -rf dist")])])])]),s._v(" "),a("li",[a("p",[s._v("压缩")]),s._v(" "),a("ul",[a("li",[s._v("压缩 img 文件夹的内容 "),a("code",[s._v("zip -vr img.zip ./img/")])])])]),s._v(" "),a("li",[a("p",[s._v("对于mac，自带tar 和 unzip")])])]),s._v(" "),a("h3",{attrs:{id:"ftp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftp"}},[s._v("#")]),s._v(" ftp")]),s._v(" "),a("ul",[a("li",[s._v("安装\n"),a("ul",[a("li",[s._v("linux "),a("code",[s._v("yum install ftp")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/10c4e46c77f1",target:"_blank",rel:"noopener noreferrer"}},[s._v("mac"),a("OutboundLink")],1)])])]),s._v(" "),a("li",[s._v("ftp连接文件服务器ip "),a("code",[s._v("open x.x.x.x")])]),s._v(" "),a("li",[s._v("输入文件服务器用户名和密码")]),s._v(" "),a("li",[a("code",[s._v("cd yourfilepath")]),s._v(" 跳转到所需文件所在路径")]),s._v(" "),a("li",[a("code",[s._v("get xxx.zip")]),s._v(" 获取所需文件，并下载到本地服务器的当前路径")]),s._v(" "),a("li",[a("code",[s._v("quit")]),s._v(" 退出")])]),s._v(" "),a("h2",{attrs:{id:"shell脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本"}},[s._v("#")]),s._v(" shell脚本")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"基础使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[s._v("#")]),s._v(" 基础使用")]),s._v(" "),a("ul",[a("li",[s._v("新建test.sh，写上符合语法规范的命令逻辑")]),s._v(" "),a("li",[s._v("赋予执行权限 "),a("code",[s._v("chmod +x ./test.sh")]),s._v(" 然后执行 "),a("code",[s._v("./test.sh")])]),s._v(" "),a("li",[s._v("或者直接指定解释器 "),a("code",[s._v("/bin/sh ./test.sh")])])]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("ul",[a("li",[s._v("特性\n"),a("ul",[a("li",[s._v("文件测试运算符")]),s._v(" "),a("li")])]),s._v(" "),a("li",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义变量，注意等号左右不能有空格")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I am '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字符串，单引号原样输出，双引号可以使用变量和转义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("str1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is a string'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("str2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, I know you are '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name}")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("! "),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${str2}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 如果是反引号则显示命令执行结果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 算数运算")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("val")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2+2为 : '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$val")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a+b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a+b 为： '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 条件语句 if then (else) fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-gt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a小于100且b大于100"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"返回 false"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择语句 右括号和双分号是特性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("site")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$site")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"菜鸟教程"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"google"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Google 搜索"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"taobao"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"淘宝网"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 循环语句 for in do done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("loop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The value is: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$loop")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("funWithReturn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果需要获得第10个及以后的参数，要用花括号 ${10}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a+b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-----函数开始执行-----"')]),s._v("\nfunWithReturn "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最近的返回值通过 $? 获取")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"输入的两个数字之和为 '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$rs")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-----函数执行完毕-----"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 待补充")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])]),a("h3",{attrs:{id:"except-工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#except-工具"}},[s._v("#")]),s._v(" except 工具")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/70556b1ce932",target:"_blank",rel:"noopener noreferrer"}},[s._v("简介"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("brew install expect")]),s._v(" "),a("li",[s._v("实现自动输入密码")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/expect -f")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" password MYSQLmysql123456?\nspawn mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Enter password:"')]),s._v("\nsend "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),s._v("\ninteract\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);