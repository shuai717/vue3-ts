module.exports = {
    plugins: {
        // flexible配置
        "postcss-pxtorem": {
            rootValue: 192, // 结果为：设计稿元素尺寸/100，比如元素宽1920px,最终页面会换算成 19.2rem
            propList: ['*'],
          }
    }
}