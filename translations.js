function getInterfaceTranslations() {
    return {
        "en": {
            "sengo1.name": "Sengo1 Vision Sensor",
            "sengo1.description": "Entry-level AI vision module, supports QR code and face recognition, with block shell"
        },
        "zh-cn": {
            "sengo1.name": "Sengo1 视觉传感器",
            "sengo1.description": "入门级AI视觉模块，支持二维码与人脸识别，积木外壳"
        },
        "zh-tw": {
            "sengo1.name": "Sengo1 視覺傳感器",
            "sengo1.description": "入門級AI視覺模塊，支持二維碼與人臉識別，積木外殼"
        }
    };
}

function registerBlocksMessages(Blockly) {
    // 英文翻译
    Object.assign(Blockly.ScratchMsgs.locales["en"], {
        "SENGO1_CATEGORY": "Sengo1 Vision",
        "SENGO1_SETUP": "Setup Module",
        "SENGO1_RUN": "Run Module",
        "SENGO1_NAME": "  Sengo1  ",
        "SENGO1_BEGIN": "Initialize   Sengo1   port %1 addr %2",
        "SENGO1_SET_DEFAULT": "Restore default parameters",
        "SENGO1_VISION_SET_STATUS": "Set   Sengo1   %1 algo %2",
        "SENGO1_VISION_SET_PARAM_NUM": "Set   Sengo1   algo %1 parameter groups number %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "Set   Sengo1   algo Blob Detection min-width %1 min-height %2 color %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "Set   Sengo1   algo Color Recognition x-coord %1 y-coord %2 width %3 height %4",
        "SENGO1_VISION_FACE_SET_PARAM": "Set   Sengo1   algo Face Recognition %1 ID %2",
        "SENGO1_ENABLE": "run",
        "SENGO1_DISABLE": "stop",
        "SENGO1_LED_SET_COLOR": "Set   Sengo1   LEDs' color %1 when targets were detected otherwise %2 luma(1-15) %3",
        "SENGO1_CAMERA_SET_AWB": "Set   Sengo1   white balance mode %1",
        "SENGO1_VISION_DETECTED": "Detected",
        "SENGO1_VISION_DETECTED_1": "Detected",
        "SENGO1_DETECTED_NUMBER": "result count",
        "SENGO1_VISION_RETURN": "return",
        "SENGO1_VISION_RESULT": "result",
        "SENGO1_GET_QRCODEVALUE": "result string",
        "SENGO1_COLOR": "color",
        "SENGO1_VISION_BLOCK": "block",
        "SENGO1_SAVE_DATA": "save data and",
        "SENGO1_DEL_DATA": "delete data",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "Color",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "Ball",
        "SENGO1_VISION_VISIONLINE": "Line",
        "SENGO1_VISION_VISIONCARD": "Card",
        "SENGO1_VISION_VISIONBODY": "Body",
        "SENGO1_VISION_VISIONFACE": "Face",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",

        // Color
        "SENGO1_COLOR_BLACK": "Black",
        "SENGO1_COLOR_WHITE": "White",
        "SENGO1_COLOR_RED": "Red",
        "SENGO1_COLOR_GREEN": "Green",
        "SENGO1_COLOR_BLUE": "Blue",
        "SENGO1_COLOR_YELLOW": "Yellow",
        "SENGO1_COLOR_CYAN": "Cyan",
        "SENGO1_COLOR_PURPLE": "Purple",

        // State Values
        "SENGO1_STATE_VALUE_X": "x-coord",
        "SENGO1_STATE_VALUE_Y": "y-coord",
        "SENGO1_STATE_VALUE_WIDTH": "width",
        "SENGO1_STATE_VALUE_HEIGHT": "height",
        "SENGO1_STATE_VALUE_LABEL": "label",

        // Color Values
        "SENGO1_STATE_VALUE_R": "red CH value",
        "SENGO1_STATE_VALUE_G": "green CH value",
        "SENGO1_STATE_VALUE_B": "blue CH value",

        // Line Values
        "SENGO1_STATE_LINE_EX": "x-coord of ending point",
        "SENGO1_STATE_LINE_EY": "y-coord of ending point",
        "SENGO1_STATE_LINE_SX": "x-coord of starting point",
        "SENGO1_STATE_LINE_SY": "y-coord of starting point",
        "SENGO1_STATE_LINE_A": "inclination angle",

        // Ball Types
        "SENGO1_BALLTABLETENNIS": "Table Tennis",
        "SENGO1_BALLTENNIS": "Tennis",

        // Card Types
        "SENGO1_CARD_FORWARD": "Forward",
        "SENGO1_CARD_LEFT": "Left",
        "SENGO1_CARD_RIGHT": "Right",
        "SENGO1_CARD_TURN_AROUND": "Turn Around",
        "SENGO1_CARD_PARK": "Park",

        // White Balance
        "SENGO1_AUTO": "Auto",
        "SENGO1_LOCK_AWB": "Lock",
        "SENGO1_WHITE_LIGHT": "White light",
        "SENGO1_YELLOW_LIGHT": "Yellow light",

        // 检测块完整消息
        "SENGO1_VISION_DETECTED_COUNT": "  Sengo1   algo %1   num of result",
        "SENGO1_VISION_GET_QR_VALUE": "  Sengo1   algo QrCode   string of decoding result",
        "SENGO1_VISION_OBJ": "  Sengo1   algo %1   %2 ",
        "SENGO1_VISION_OBJ_COLOR": "  Sengo1   algo Color   %1 ",
        "SENGO1_VISION_OBJ_LINE": "  Sengo1   algo Line   %1 ",
        "SENGO1_VISION_OBJ_QR": "  Sengo1   algo QrCode   %1 ",
        "SENGO1_VISION_COLOR_DETECT": "  Sengo1   algo Color   recognized %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "  Sengo1   algo Blob   detected %1 blob",
        "SENGO1_VISION_CARD_DETECT": "  Sengo1   algo Card   recognized %1",
        "SENGO1_VISION_BALL_DETECT": "  Sengo1   algo Ball   recognized %1"
    });

    // 中文简体翻译
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"], {
        "SENGO1_CATEGORY": "Sengo1 视觉",
        "SENGO1_SETUP": "设置模块",
        "SENGO1_RUN": "运行模块",
        "SENGO1_NAME": "  Sengo1  ",
        "SENGO1_BEGIN": "初始化   Sengo1   端口 %1 地址 %2",
        "SENGO1_SET_DEFAULT": "恢复默认参数",
        "SENGO1_VISION_SET_STATUS": "设置   Sengo1   %1 算法 %2",
        "SENGO1_VISION_SET_PARAM_NUM": "设置   Sengo1   算法 %1 参数组数量 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "设置   Sengo1   色块检测   最小宽度 %1 最小高度 %2 颜色 %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "设置   Sengo1   颜色识别   中心横坐标 %1 中心纵坐标 %2 宽度 %3 高度 %4",
        "SENGO1_VISION_FACE_SET_PARAM": "设置   Sengo1   人脸识别   %1 编号 %2",
        "SENGO1_ENABLE": "开启",
        "SENGO1_DISABLE": "关闭",
        "SENGO1_LED_SET_COLOR": "设置   Sengo1   检测到目标时LED显示 %1 否则 %2 亮度(1~15) %3",
        "SENGO1_CAMERA_SET_AWB": "设置   Sengo1   白平衡模式 %1",
        "SENGO1_VISION_DETECTED": "检测到",
        "SENGO1_VISION_DETECTED_1": "识别到",
        "SENGO1_DETECTED_NUMBER": "返回的结果数量",
        "SENGO1_VISION_RETURN": "返回的",
        "SENGO1_VISION_RESULT": "结果",
        "SENGO1_GET_QRCODEVALUE": "返回的结果字符串",
        "SENGO1_COLOR": "颜色",
        "SENGO1_VISION_BLOCK": "色块",
        "SENGO1_SAVE_DATA": "保存数据并",
        "SENGO1_DEL_DATA": "删除数据",
        
        // 检测块完整消息
        "SENGO1_VISION_DETECTED_COUNT": "   Sengo1   %1 返回的结果数量",
        "SENGO1_VISION_GET_QR_VALUE": "   Sengo1   二维码   返回的结果字符串",
        "SENGO1_VISION_OBJ": "   Sengo1   %1 返回的 %2 ",
        "SENGO1_VISION_OBJ_COLOR": "   Sengo1   颜色识别   返回的 %1 ",
        "SENGO1_VISION_OBJ_LINE": "   Sengo1   线条检测   返回的 %1 ",
        "SENGO1_VISION_OBJ_QR": "   Sengo1   二维码   返回的 %1 ",
        "SENGO1_VISION_COLOR_DETECT": "   Sengo1   颜色识别   识别到 %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "   Sengo1   色块检测   检测到 %1 块",
        "SENGO1_VISION_CARD_DETECT": "   Sengo1   卡片识别   识别到 %1",
        "SENGO1_VISION_BALL_DETECT": "   Sengo1   球体识别   识别到 %1",
        
        // 视觉类型
        "SENGO1_VISION_VISIONCOLOR": "颜色识别",
        "SENGO1_VISION_VISIONBLOB": "色块检测",
        "SENGO1_VISION_VISIONBALL": "球体识别",
        "SENGO1_VISION_VISIONLINE": "线条检测",
        "SENGO1_VISION_VISIONCARD": "卡片识别",
        "SENGO1_VISION_VISIONBODY": "人体检测",
        "SENGO1_VISION_VISIONFACE": "人脸识别",
        "SENGO1_VISION_VISIONQRCODE": "二维码",

        // 颜色
        "SENGO1_COLOR_BLACK": "黑色",
        "SENGO1_COLOR_WHITE": "白色",
        "SENGO1_COLOR_RED": "红色",
        "SENGO1_COLOR_GREEN": "绿色",
        "SENGO1_COLOR_BLUE": "蓝色",
        "SENGO1_COLOR_YELLOW": "黄色",
        "SENGO1_COLOR_CYAN": "青色",
        "SENGO1_COLOR_PURPLE": "紫色",

        // 状态值
        "SENGO1_STATE_VALUE_X": "横坐标",
        "SENGO1_STATE_VALUE_Y": "纵坐标",
        "SENGO1_STATE_VALUE_WIDTH": "宽度",
        "SENGO1_STATE_VALUE_HEIGHT": "高度",
        "SENGO1_STATE_VALUE_LABEL": "标签",

        // 颜色值
        "SENGO1_STATE_VALUE_R": "红色分量值",
        "SENGO1_STATE_VALUE_G": "绿色分量值",
        "SENGO1_STATE_VALUE_B": "蓝色分量值",

        // 线条值
        "SENGO1_STATE_LINE_EX": "终点横坐标",
        "SENGO1_STATE_LINE_EY": "终点纵坐标",
        "SENGO1_STATE_LINE_SX": "起点横坐标",
        "SENGO1_STATE_LINE_SY": "起点纵坐标",
        "SENGO1_STATE_LINE_A": "倾斜角度",

        // 球类型
        "SENGO1_BALLTABLETENNIS": "乒乓球",
        "SENGO1_BALLTENNIS": "网球",

        // 卡片类型
        "SENGO1_CARD_FORWARD": "前进",
        "SENGO1_CARD_LEFT": "左转",
        "SENGO1_CARD_RIGHT": "右转",
        "SENGO1_CARD_TURN_AROUND": "掉头",
        "SENGO1_CARD_PARK": "停车",

        // 白平衡
        "SENGO1_AUTO": "自动",
        "SENGO1_LOCK_AWB": "锁定",
        "SENGO1_WHITE_LIGHT": "白光",
        "SENGO1_YELLOW_LIGHT": "黄光"
    });

    // 中文繁体翻译
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        "SENGO1_CATEGORY": "Sengo1 視覺",
        "SENGO1_SETUP": "設置模塊",
        "SENGO1_RUN": "運行模塊",
        "SENGO1_NAME": "  Sengo1  ",
        "SENGO1_BEGIN": "初始化   Sengo1   端口 %1 地址 %2",
        "SENGO1_SET_DEFAULT": "恢復默認參數",
        "SENGO1_VISION_SET_STATUS": "設置   Sengo1   %1 算法 %2",
        "SENGO1_VISION_SET_PARAM_NUM": "設置   Sengo1   算法 %1 參數組數量 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "設置   Sengo1   色塊檢測   最小寬度 %1 最小高度 %2 顏色 %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "設置   Sengo1   顏色識別   中心橫坐標 %1 中心縱坐標 %2 寬度 %3 高度 %4",
        "SENGO1_VISION_FACE_SET_PARAM": "設置   Sengo1   人臉識別   %1 編號 %2",
        "SENGO1_ENABLE": "開啟",
        "SENGO1_DISABLE": "關閉",
        "SENGO1_LED_SET_COLOR": "設置   Sengo1   檢測到目標時LED顯示 %1 否則 %2 亮度(1~15) %3",
        "SENGO1_CAMERA_SET_AWB": "設置   Sengo1   白平衡模式 %1",
        "SENGO1_VISION_DETECTED": "檢測到",
        "SENGO1_VISION_DETECTED_1": "識別到",
        "SENGO1_DETECTED_NUMBER": "返回的結果數量",
        "SENGO1_VISION_RETURN": "返回的",
        "SENGO1_VISION_RESULT": "結果",
        "SENGO1_GET_QRCODEVALUE": "返回的結果字符串",
        "SENGO1_COLOR": "顏色",
        "SENGO1_VISION_BLOCK": "色塊",
        "SENGO1_SAVE_DATA": "保存數據並",
        "SENGO1_DEL_DATA": "刪除數據",
        
        // 檢測塊完整消息
        "SENGO1_VISION_DETECTED_COUNT": "   Sengo1   %1 返回的結果數量",
        "SENGO1_VISION_GET_QR_VALUE": "   Sengo1   二維碼   返回的結果字符串",
        "SENGO1_VISION_OBJ": "   Sengo1   %1 返回的 %2 ",
        "SENGO1_VISION_OBJ_COLOR": "   Sengo1   顏色識別   返回的 %1 ",
        "SENGO1_VISION_OBJ_LINE": "   Sengo1   線條檢測   返回的 %1 ",
        "SENGO1_VISION_OBJ_QR": "   Sengo1   二維碼   返回的 %1 ",
        "SENGO1_VISION_COLOR_DETECT": "   Sengo1   顏色識別   識別到 %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "   Sengo1   色塊檢測   檢測到 %1 塊",
        "SENGO1_VISION_CARD_DETECT": "   Sengo1   卡片識別   識別到 %1",
        "SENGO1_VISION_BALL_DETECT": "   Sengo1   球體識別   識別到 %1",
        
        // 視覺類型
        "SENGO1_VISION_VISIONCOLOR": "顏色識別",
        "SENGO1_VISION_VISIONBLOB": "色塊檢測",
        "SENGO1_VISION_VISIONBALL": "球體識別",
        "SENGO1_VISION_VISIONLINE": "線條檢測",
        "SENGO1_VISION_VISIONCARD": "卡片識別",
        "SENGO1_VISION_VISIONBODY": "人體檢測",
        "SENGO1_VISION_VISIONFACE": "人臉識別",
        "SENGO1_VISION_VISIONQRCODE": "二維碼",

        // 顏色
        "SENGO1_COLOR_BLACK": "黑色",
        "SENGO1_COLOR_WHITE": "白色",
        "SENGO1_COLOR_RED": "紅色",
        "SENGO1_COLOR_GREEN": "綠色",
        "SENGO1_COLOR_BLUE": "藍色",
        "SENGO1_COLOR_YELLOW": "黃色",
        "SENGO1_COLOR_CYAN": "青色",
        "SENGO1_COLOR_PURPLE": "紫色",

        // 狀態值
        "SENGO1_STATE_VALUE_X": "橫坐標",
        "SENGO1_STATE_VALUE_Y": "縱坐標",
        "SENGO1_STATE_VALUE_WIDTH": "寬度",
        "SENGO1_STATE_VALUE_HEIGHT": "高度",
        "SENGO1_STATE_VALUE_LABEL": "標籤",

        // 顏色值
        "SENGO1_STATE_VALUE_R": "紅色分量值",
        "SENGO1_STATE_VALUE_G": "綠色分量值",
        "SENGO1_STATE_VALUE_B": "藍色分量值",

        // 線條值
        "SENGO1_STATE_LINE_EX": "終點橫坐標",
        "SENGO1_STATE_LINE_EY": "終點縱坐標",
        "SENGO1_STATE_LINE_SX": "起點橫坐標",
        "SENGO1_STATE_LINE_SY": "起點縱坐標",
        "SENGO1_STATE_LINE_A": "傾斜角度",

        // 球類型
        "SENGO1_BALLTABLETENNIS": "乒乓球",
        "SENGO1_BALLTENNIS": "網球",

        // 卡片類型
        "SENGO1_CARD_FORWARD": "前進",
        "SENGO1_CARD_LEFT": "左轉",
        "SENGO1_CARD_RIGHT": "右轉",
        "SENGO1_CARD_TURN_AROUND": "掉頭",
        "SENGO1_CARD_PARK": "停車",

        // 白平衡
        "SENGO1_AUTO": "自動",
        "SENGO1_LOCK_AWB": "鎖定",
        "SENGO1_WHITE_LIGHT": "白光",
        "SENGO1_YELLOW_LIGHT": "黃光"
    });

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerBlocksMessages; 