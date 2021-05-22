/**
 * 打赏二维码
 */
var moneyUrl ="https://cdn.jsdelivr.net/gh/PhDLuffy/PicGo@master/img/20210521212652.jpg"

/**
 * 公众号二维码
 */
var wechatUrl ="https://tva1.sinaimg.cn/large/0082zybpgy1gcb65ef5sgj30u00u0tcq.jpg"

/**
 * 云开发环境
 */
var env ="phdluffy-blog"
//var env ="test-91f3af"
/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

var subcributeTemplateId = "WTRithwRH6kd1WYwgbL8j_Lj_H40F55e39qlcUeo_gA" //更改订阅消息ID，可以更换通知模板

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env,
    subcributeTemplateId:subcributeTemplateId
}