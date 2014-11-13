function createShortcutKey(){
  return {
    title: "sublime text3 快捷键(mac 版)",
    shortcutKey: [
      {
        'c N': "新建文件",
        'c O': "打开文件",
        'c W': "关闭文件",
        'c s T': "打开最近关闭文件",
        'c S': "保存",
        'c s S': "另存为",
        'c a S': "全保存",
        'c a S': "全保存",
        's c N': "打开新窗口",
        's c W': "关闭窗口",
        'na': "恢复到上一次保存时状态"
      },
      {
        'c Z': "撤销",
        'c Y ,, c s Z': "反撤销",
        'c U': "软撤销",
        's c U': "反软撤销", 
        'c s V': "保持缩进粘贴",
        'a c V': "从剪切板中粘贴",
        'c ]': "缩进",
        'c [': "取消缩进",
        't c ↑': "行上移",
        't c ↓': "行下移",
        's c D': "行复制",
        's t K': "行删除",
        'c J': "合并下一行",
        'c /': "行注释",
        'a c /': "块注释",
        's c e': "行前插入一行",
        'c e': "行后插入一行",
        'c d': "删除本行光标前面的内容",
        't D': "向后删除",
        't K': "删除本行光标后面的内容",
        't T': "和后一个字符调换",
        'a c .': "补全标签",
        'c s W': "用 p 标签包裹文字",
        's c A': "逐层选中父级标签包含的内容",
        'c K , c p': "设置标记",
        'c K , c A': "选择当前光标到标记处的内容",
        'c K , c W': "删除当前光标到标记处的内容",
        'c K , c G': "清除标记",
        'c Y': "在光标当前位置粘贴最近一次剪切的内容",
        'a c ]': "逐层折叠代码",
        'a c [': "展开代码",
        'c K , c Y': "展开所有代码",
        'c K , c 1': "一级折叠代码",
        'c K , c num': "{num}级折叠代码",
        'c K , c T': "折叠标签属性",
        'c K , c U': "大写转换",
        'c K , c L': "小写转化",
        'a c Q': "指定一行长度，然后将文本重新排序",
        'a c Q': "指定一行长度，然后将文本重新排序",
        'c p': "显示补全",
        'F5': "对选中(或所有)行进行排序",
        'c F5': "对选中(或所有)行进行排序，区分大小写",
        'a c T': "特殊字符选择",
        'na': "选中(或所有)行的打乱、反转、去重 多重选择的排序、排序(区分大小写)、反转、去重和打乱"
      },
      {
        'c s L': "将选中的块变成为多个光标选中每一行",
        't s ↑': "选中上一行同一位置(冲突！改为 Alt + ↑)",
        't s ↓': "选中下一行同一位置(冲突！改为 Alt + ↓)",
        'ESC': "恢复当个光标",
        'c A': "全选",
        'c L': "选中光标所在行",
        'c D': "选中光标所在单词",
        'c s p': "逐层向上选择块内容",
        's t M': "逐层向上选中括号内的内容",
        'c s J': "逐层向上选中相同缩进的内容",
        'c s A': "逐层向上选中便签内容",
        'na': "反向选择 选中整段"
      },
      {
        'c F': "查找",
        'c G': "查找下一个",
        'c s G': "查找上一个",
        'c I': "增量查找",
        'a c F': "替换",
        'a c E': "替换下一个",
        'a c G': "快速查找",
        't c G': "快速查找并选中全部",
        'c D': "同时选中下一个匹配项",
        'c E': "将选中的内容用于查找",
        's c E': "将选中的内容用于替换",
        's c F': "在文件夹中查找",
        'F4': "(文件夹查找)查找下一个",
        's F4': "(文件夹查找)查找上一个"
      },
      {
        'c K , c B': "显示（隐藏）侧边栏",
        't `': "打开控制台",
        'c t F': "全屏模式",
        'c s t F': "无扰模式",
        'a c 1': "单一布局",
        'a c 2': "两列布局",
        'a c 3': "三列布局",
        'a c 4': "四列布局",
        'a c 4': "四列布局",
        'a s c 2': "两行布局",
        'a s c 3': "三行布局",
        'a c 5': "田形布局",
        'c K , c ↑': "移动文件到新的一组",
        'c K , c s ↑': "新建一组视图",
        'c K , c ↓': "关闭一组视图",
        'c K , c →': "光标移动到下一组视图",
        'c K , c ←': "光标移动到上一组视图",
        'c K , c s →': "文件移动到下一组视图",
        'c K , c s ←': "文件移动到上一组视图",
        'F6': "拼写检查"
      },
      {
        'c P': "文件跳转",
        'c R': "函数（符号）跳转",
        'c s R': "在工程文件夹中函数（符号）跳转",
        'a c ↓': "跳转到文件中定义改函数的地方",
        't G': "行跳转",
        't -': "光标位置后退",
        't s -': "光标位置前进",
        'a c →': "下一个文件",
        'a c ←': "上一个文件",
        't b': "（按访问顺序）上一个文件",
        't s b': "（按访问顺序）下一个文件",
        'a c ↑': "switch header/implementation",
        't L': "滚动到光标所在位置",
        't a ↑': "向上滚动一行",
        't a ↓': "向下滚动一行",
        't a ↑': "向下滚动",
        'c F2': "添加或者删除标签",
        'F2': "移动下一个标签",
        's F2': "移动到上一个标签",
        's c F2': "清除所有标签",
        't M': "在匹配的括号之间跳转",
        'na': "选中所有标签"
      },
      {
        'c s P': "命令窗口",
        'c B': "编译",
        'c C': "取消编译",
        't Q': "开始(结束)录制宏",
        't s Q': "执行宏"
      },
      {
        'c t P': "项目之间切换"
      }
    ]
  };
}