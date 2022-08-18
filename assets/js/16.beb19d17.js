(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{284:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"命令行常用指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行常用指令"}},[a._v("#")]),a._v(" 命令行常用指令")]),a._v(" "),t("h2",{attrs:{id:"一、文件夹命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、文件夹命令"}},[a._v("#")]),a._v(" 一、文件夹命令")]),a._v(" "),t("p",[t("strong",[a._v("进入文件夹")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd D:\\typora\\file\n")])])]),t("p",[t("strong",[a._v("返回上一级")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd..\n")])])]),t("p",[a._v("跳转到根目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd \\\n")])])]),t("p",[a._v("跳转指定路径(假设现在在D:\\typora跳转到D:\\网页下载)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd D:\\网页下载\n")])])]),t("p",[a._v("打开文件夹或文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("start 文件名字\n")])])]),t("p",[t("strong",[a._v("新建文件夹")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("md d:\\typora\\flie\nmkdir newtest 进入根目录后使用\n")])])]),t("p",[a._v("新建空文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd.>flie.txt\ncd.>flie.docx\ncd.>flie.ppt\n\ntype nul> newtest.txt \ntype nul>.txt\n123456\n")])])]),t("p",[a._v("新建非空文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("echo 文件中的内容>new.txt\n")])])]),t("p",[t("strong",[a._v("删除文件")]),a._v("(如果是"),t("code",[a._v("del 文件夹A")]),a._v("是删除文件夹A内的所有带后缀的文件，若文件夹A中有文件夹B，文件夹B不会被修改)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("del flie.txt\n")])])]),t("p",[a._v("删除指定后缀的文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("del *.txt\ndel *.docx\n")])])]),t("p",[a._v("删除名为flie的空文件夹")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rd flie\n")])])]),t("p",[a._v("删除名为flie的文件夹")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rd /s D:\\flie\n")])])]),t("p",[a._v("删除flie文件夹下的所有文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rd flie /s\n")])])]),t("p",[a._v("生成目录树,在文件少一些的路径尝试。要不会运行好久，ctrl+c可以停掉")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tree\n")])])]),t("p",[t("strong",[a._v("遍历当前路径下所有文件")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dir\n")])])]),t("p",[a._v("显示当前目录及子文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dir /s\n")])])]),t("p",[a._v("显示文件以及文件大小、个数")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dir /d\n")])])]),t("p",[a._v("显示文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dir /b\n")])])]),t("p",[a._v("对dir的组合使用：")]),a._v(" "),t("p",[a._v("查找文件。只需要输入路径即可，无需cd返回到某个路径再执行命令(eg：D:\\JAVA\\eclipse\\flie和D:\\eclipse效果相同)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dir/s/b d:\\flie\n")])])]),t("p",[a._v("查找文件以及文件大小、个数")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dir/s/d d:\\flie\n")])])]),t("p",[a._v("查看隐藏文件夹")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dir /?\n")])])]),t("p",[t("strong",[a._v("复制文件")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("copy 路径\\文件名 路径\\文件名\n")])])]),t("p",[t("strong",[a._v("移动文件")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("move 路径\\文件名 路径\\文件名\n")])])]),t("h2",{attrs:{id:"二、网络相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、网络相关"}},[a._v("#")]),a._v(" 二、网络相关")]),a._v(" "),t("p",[a._v("查看ip地址")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ipconfig\n")])])]),t("p",[a._v("查询ip地址")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ping www.csdn.net\n")])])]),t("p",[a._v("netstat 查看网络连接状态")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("netstat -help 获取命令行使用帮助信息\n\nnetstat -ano  //查看网络连接、状态以及对应的进程id\n")])])]),t("h2",{attrs:{id:"三、其他常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、其他常用命令"}},[a._v("#")]),a._v(" 三、其他常用命令")]),a._v(" "),t("p",[a._v("关机")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("shutdown -s\n")])])]),t("p",[a._v("关闭本地计算机，没有超时或警告")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("shutdown -p\n")])])]),t("p",[a._v("强制关闭正在运行的应用程序而不提前警告用户,可搭配"),t("code",[a._v("-p")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("shutdown -f\n")])])]),t("p",[a._v("定时关机，定时60s,时间自定")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("shutdown "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("s "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t 60\n")])])]),t("p",[a._v("关机并重启")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("　shutdown -r\n")])])]),t("p",[a._v("一段时间后重启")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("　shutdown -r -t 秒数\n")])])]),t("p",[a._v("注销当前用户")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("shutdown -l　\n")])])]),t("p",[a._v("休眠，可以搭配-f,"),t("code",[a._v("shut down -h -f")]),a._v("。不可以搭配"),t("code",[a._v("-t")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("shutdown -h \n")])])]),t("p",[a._v("解除命令")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("shutdown "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a\n")])])]),t("p",[t("strong",[a._v("清除屏幕")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cls\n")])])]),t("p",[a._v("使用help命令查看帮助")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("命令 -help    //第1种形式的使用帮助\n命令  /?       //第2种形式的使用帮助\n")])])]),t("p",[a._v("终止命令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ctrl+c\n")])])]),t("p",[a._v("退出cmd")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("exit\n")])])]),t("p",[a._v("其他比较实用的，但使用频率不高的命令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("notepad+路径\t打开记事本\ndxdiag\t检查DirectX信息\nwinver\t检查Windows版本\nwmimgmt.msc\t\t打开windows管理体系结构（WMI）\nwupdmgr\t\t\twindows\t更新程序\nwscript\t\t\twindows脚本设置\nwrite\t\t写字板\nwinmsd\t\t系统信息\nwiaacmgr\t扫描仪和相机\ncalc\t\t计算器\nmplayer2\t打开windows media player\nmspaint\t\t画图板\nmstsc\t\t远程桌面连接\nmmc\t\t\t打开控制台\ndxdiag\t\t检查Directx信息\ndrwtsn32\t系统医生\ndevmgmt.msc\t设备管理器\nnotepad\t\t记事本\nntbackup\t系统备份和还原\nsndrec32\t录音机\nSndovl32\t音量控制程序\ntsshutdn\t60秒倒计时关机\ntaskmgr\t\t任务管理器\nexplorer\t资源管理器\nprogman\t\t程序管理器\nregedit.exe\t注册表\nperfmon.msc\t计算机性能监测\neventvwr\t事件查看器\nnet user  \t查看用户\nwhoami\t\t查看当前用户\nnet user %username% 123456 \t\t将电脑用户密码修改为123456\n")])])]),t("h2",{attrs:{id:"四、cmd快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、cmd快捷键"}},[a._v("#")]),a._v(" 四、cmd快捷键")]),a._v(" "),t("p",[a._v("快速查看历史记录↑ ↓\n查看完整记录F7")]),a._v(" "),t("p",[a._v("切换当前路径下文件Tab\n反向选择文件和文件夹Shift+Tab")]),a._v(" "),t("p",[a._v("拖拽文件到窗口可以直接显示路径")]),a._v(" "),t("p",[a._v("ESC 清除当前命令行\nF1 单字符输出上次输入的命令，如果已经是最后的一条的命令，则不进行任何切换操作。 （例：输入“dir”，按F1一次后自动输入d，按两次自动输入i,三次自动输入r）\nF2 可复制字符数量 , 输入上次命令中含有的字符,系统自动删除此字符后的内容. （例：输入 cd test ，按下F2 输入 e 后,系统自动输入 cd t 命令）\nF3 重新输入前一次输入的命令 或者按向上键\nF4 可删除字符数量,同于F2的功能 （例： 输入 cd test 将光标移动到d下面，按下F4 输入e后,系统自动删除t以后(包括d) e(不包括e)以前的字符 命令变为 cest）\nF5 自动切换到已经执行过的命令字符。可按下多次选择命令\nF6 相当按键盘上的Ctrl＋z 键\nF7 显示命令历史记录，按下后可用方向键上下选择之前输入过的命令\nF8 搜索命令的历史记录，循环显示所有曾经输入的命令，直到按下回车键为止\nF9 与F7配合使用。F7中选择的命令是有编号的，按下F9再输入命令的编号，就能快速执行命令\nCtrl+Break 查看统计信息并按回车继续操作\nCtrl+C 强行中止命令执行\nCtrl+H 删除光标左边的一个字符\nCtrl+M 表示回车确认键\nAlt+F7 清除所有曾经输入的命令历史记录\nAlt+PrintScreen 截取当前命令窗内容\nTab 自动输入当前文件夹的子文件夹名。可按下多次选择文件夹，与cmd命令配合使用可快速进入子文件夹")])])}),[],!1,null,null,null);t.default=r.exports}}]);