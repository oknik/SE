const playUrl = 'https://pic.imgdb.cn/item/67389e2fd29ded1a8cbe6fc9.png';
const clearUrl = 'https://pic.imgdb.cn/item/673cc329d29ded1a8c322f63.png';

const imageData = [
  {
    name: "zero",
    imageUrl: 'https://pic.imgdb.cn/item/67384037d29ded1a8c6fd15e.png',
    picUrl: 'https://pic.imgdb.cn/item/673cb78fd29ded1a8c2293b3.jpg',
    textUrl: 'https://pic.imgdb.cn/item/673cb8b5d29ded1a8c243a05.png',
    writeUrl: 'https://pic.imgdb.cn/item/6738a670d29ded1a8cc6fb11.png'
  },
  {
    name: "one",
    imageUrl: "https://pic.imgdb.cn/item/6736ef7fd29ded1a8c5e0874.png",
    picUrl: 'https://pic.imgdb.cn/item/673c17b5d29ded1a8c4fbd0c.png',
    textUrl: 'https://pic.imgdb.cn/item/673cbb1ad29ded1a8c27bf7f.png',
    writeUrl: 'https://pic.imgdb.cn/item/673cbc74d29ded1a8c29cca5.png'
  },
  {
    name: "two",
    imageUrl: "https://pic.imgdb.cn/item/6736efc7d29ded1a8c5e3d05.png",
    picUrl: 'https://pic.imgdb.cn/item/673c1864d29ded1a8c504410.png',
    textUrl: 'https://pic.imgdb.cn/item/673cbb39d29ded1a8c27f1b0.png',
    writeUrl: 'https://pic.imgdb.cn/item/673cbcb0d29ded1a8c2a2698.png'
  },
  {
    name: "three",
    imageUrl: "https://pic.imgdb.cn/item/6736f1dbd29ded1a8c5fee27.png",
    picUrl: 'https://pic.imgdb.cn/item/673c193ed29ded1a8c50d8cf.png',
    textUrl: 'https://pic.imgdb.cn/item/673cbb49d29ded1a8c280c41.png',
    writeUrl: 'https://pic.imgdb.cn/item/673cbcfdd29ded1a8c2a983b.png'
  },
  {
    name: "four",
    imageUrl: "https://pic.imgdb.cn/item/6736f106d29ded1a8c5f09a8.png",
    picUrl: 'https://pic.imgdb.cn/item/673c19f8d29ded1a8c516ad0.png',
    textUrl: 'https://pic.imgdb.cn/item/673cbb64d29ded1a8c283165.png',
    writeUrl: 'https://pic.imgdb.cn/item/673cc436d29ded1a8c332c74.png'
  },
  {
    name: "five",
    imageUrl: "https://pic.imgdb.cn/item/6736f19cd29ded1a8c5fb35b.png",
    picUrl: 'https://pic.imgdb.cn/item/673cb1c9d29ded1a8c19c795.png',
    textUrl: 'https://pic.imgdb.cn/item/673cbb79d29ded1a8c284d39.png',
    writeUrl: 'https://pic.imgdb.cn/item/673cc46ad29ded1a8c33895a.png'
  },
  {
    name: "six",
    imageUrl: "https://pic.imgdb.cn/item/6738404fd29ded1a8c6fe931.png",
    picUrl: 'https://pic.imgdb.cn/item/673cb751d29ded1a8c225223.png',
    textUrl: 'https://pic.imgdb.cn/item/673cbb8ed29ded1a8c286c55.png',
    writeUrl: 'https://pic.imgdb.cn/item/673cc482d29ded1a8c33b408.png'
  },
  {
    name: "seven",
    imageUrl: "https://pic.imgdb.cn/item/67384063d29ded1a8c6ffa46.png",
    picUrl: 'https://pic.imgdb.cn/item/673cb219d29ded1a8c1a4aea.png',
    textUrl: 'https://pic.imgdb.cn/item/673cbba1d29ded1a8c2888a5.png',
    writeUrl: 'https://pic.imgdb.cn/item/673cc491d29ded1a8c33c351.png'
  },
  {
    name: "eight",
    imageUrl: "https://pic.imgdb.cn/item/67384072d29ded1a8c7005c2.png",
    picUrl: 'https://pic.imgdb.cn/item/673cb24dd29ded1a8c1a9824.png',
    textUrl: 'https://pic.imgdb.cn/item/673cbbadd29ded1a8c289a38.png',
    writeUrl: 'https://pic.imgdb.cn/item/673cc49fd29ded1a8c33cf29.png'
  },
  {
    name: "nine",
    imageUrl: "https://pic.imgdb.cn/item/6738407dd29ded1a8c700f7d.png",
    picUrl: 'https://pic.imgdb.cn/item/673cb271d29ded1a8c1ad5aa.png',
    textUrl: 'https://pic.imgdb.cn/item/673cbbc2d29ded1a8c28ba94.png',
    writeUrl: 'https://pic.imgdb.cn/item/673cc4b3d29ded1a8c33dfc0.png'
  }
];

Page({
  data: {
    name: '',
    imageUrl: '',
    picUrl: '',
    text: '',
    textUrl: '',
    writeUrl: '',
    playUrl,
    clearUrl,
  },
  canvas: null, // 保存 canvas 对象到类实例
  ctx: null,    // 保存绘图上下文到类实例
  isDrawing: false, // 绘图状态保存到类实例
  isErasing: false, // 橡皮擦状态
  startX: 0,    // 开始绘制的 X 坐标
  startY: 0,    // 开始绘制的 Y 坐标
  backgroundImage: null, // 保存背景图片对象

  onLoad(options) {
    const name = options.name ? decodeURIComponent(options.name) : '';
    const matchedItem = imageData.find(item => item.name === name);
    if (matchedItem) {
      this.setData({
        name: matchedItem.name,
        imageUrl: matchedItem.imageUrl,
        picUrl: matchedItem.picUrl,
        textUrl: matchedItem.textUrl,
        writeUrl: matchedItem.writeUrl
      });
    }

    wx.createSelectorQuery()
      .select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        this.canvas = res[0].node;
        this.ctx = this.canvas.getContext('2d');

        const dpr = wx.getWindowInfo().pixelRatio;
        const width = res[0].width;
        const height = res[0].height;

        this.canvas.width = width * dpr;
        this.canvas.height = height * dpr;
        this.ctx.scale(dpr, dpr);

        // 初始化背景图片
        this.loadBackgroundImage(width, height, matchedItem.writeUrl);

        // 设置画笔参数
        this.ctx.strokeStyle = '#000000'; // 黑色线条
        this.ctx.lineWidth = 8;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
      });
  },

  // 加载背景图片函数
  loadBackgroundImage(width, height, url) {
    const backgroundImage = this.canvas.createImage();
    backgroundImage.onload = () => {
      this.backgroundImage = backgroundImage; // 保存背景图片对象
      this.ctx.drawImage(backgroundImage, 0, 0, width, height);
    };
    backgroundImage.src = url;
  },

  // 用户触摸开始
  handleTouchStart(event) {
    const touch = event.touches[0];
    this.isDrawing = true;
    this.startX = touch.x;
    this.startY = touch.y;

    // 开始新的绘制路径
    this.ctx.beginPath();
    this.ctx.moveTo(touch.x, touch.y);
  },

  // 用户触摸移动
  handleTouchMove(event) {
    if (!this.isDrawing) return;

    const touch = event.touches[0];

    if (this.isErasing) {
      // 橡皮擦模式 - 擦除部分背景
      this.erase(touch.x, touch.y);
    } else {
      // 正常绘制模式
      this.ctx.lineTo(touch.x, touch.y);
      this.ctx.stroke();
    }
  },

  // 用户触摸结束
  handleTouchEnd() {
    this.isDrawing = false;
  },

  // 橡皮擦功能
  erase(x, y) {
    const eraseSize = 20; // 逻辑上的橡皮擦大小
    const dpr = wx.getWindowInfo().pixelRatio;
    
    // 从逻辑坐标转换为画布坐标
    const canvasX = x * dpr;
    const canvasY = y * dpr;
  
    // 计算适应 DPR 的擦除区域大小
    const adjustedEraseSize = eraseSize * dpr;
  
    // 清除擦除区域的背景图像
    this.ctx.clearRect(canvasX - adjustedEraseSize / 2, canvasY - adjustedEraseSize / 2, adjustedEraseSize, adjustedEraseSize);
  
    // 恢复背景图像，按照初始化时的比例绘制
    const bgWidth = this.backgroundImageWidth * dpr; // 根据 DPI 计算背景图的实际宽度
    const bgHeight = this.backgroundImageHeight * dpr; // 根据 DPI 计算背景图的实际高度
  
    // 绘制背景图像的一部分覆盖当前擦除位置
    this.ctx.drawImage(
      this.backgroundImage, // 源图像
      0, 0, this.backgroundImageWidth, this.backgroundImageHeight, // 源图像区域
      0, 0, bgWidth, bgHeight // 目标区域，保持相同的比例
    );
  },
  
  
  
  // 切换橡皮擦模式
  toggleEraser() {
    this.isErasing = !this.isErasing;
    if (this.isErasing) {
      this.ctx.strokeStyle = 'rgba(0,0,0,0)'; // 设置透明颜色，确保擦除
    } else {
      this.ctx.strokeStyle = '#000000'; // 恢复为黑色画笔
    }
  },

  // 清除整个画布并重新加载背景图片
  clearCanvas() {
    const dpr = wx.getWindowInfo().pixelRatio;
    const width = this.canvas.width / dpr;  // 恢复原始逻辑宽度
    const height = this.canvas.height / dpr; // 恢复原始逻辑高度

    // 清除整个画布并重新加载背景图片
    this.ctx.clearRect(0, 0, width * dpr, height * dpr);
    const writeUrl = this.data.writeUrl
    if (writeUrl) {
      this.loadBackgroundImage(width, height, writeUrl);
    }
  }
});