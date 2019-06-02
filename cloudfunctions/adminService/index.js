// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: process.env.Env })
const rp = require('request-promise');
const dateUtils = require('date-utils')
const db = cloud.database()
const _ = db.command
const RELEASE_LOG_KEY = 'releaseLogKey'

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  //admin服务都要验证一下权限
  if (event.action !== 'checkAuthor') {
    let result = await checkAuthor(event)
    if (!result) {
      return false;
    }
  }

  switch (event.action) {
    case 'checkAuthor': {
      return checkAuthor(event)
    }
    case 'addReleaseLog': {
      return addReleaseLog(event)
    }
    case 'updatePostsShowStatus': {
      return updatePostsShowStatus(event)
    }
    case 'updatePostsClassify': {
      return updatePostsClassify(event)
    }
    case 'updatePostsLabel': {
      return updatePostsLabel(event)
    }
    case 'upsertPosts': {
      return upsertPosts(event)
    }
    case 'addBaseLabel': {
      return addBaseLabel(event)
    }
    case 'addBaseClassify': {
      return addBaseClassify(event)
    }
    case 'deleteConfigById': {
      return deleteConfigById(event)
    }
    default: break
  }
}

/**
 * 验证
 * @param {} event 
 */
async function checkAuthor(event) {
  if (event.userInfo.openId == process.env.author) {
    return true;
  }
  return false;
}

/**
 * 新增版本日志
 * @param {*} event 
 */
async function addReleaseLog(event) {
  try {
    let collection = 'mini_logs'
    let data = {
      key: RELEASE_LOG_KEY,
      tag: '【' + event.log.releaseName + '版本更新】',
      content: event.log,
      title: event.title,
      icon: 'formfill',
      color: 'blue',
      path: '../release/release',
      timestamp: Date.now(),
      datetime: new Date(Date.now() + (8 * 60 * 60 * 1000)).toFormat("YYYY-MM-DD HH24:MI"),
      openId: '',//为空则为所有用户
      type: 'system'
    }
    await db.collection(collection).add({
      data: data
    })
    return true;
  }
  catch (e) {
    console.info(e)
    return false;
  }

}

/**
 * 更新文章展示状态
 * @param {*} event 
 */
async function updatePostsShowStatus(event) {
  try {
    await db.collection('mini_posts').doc(event.id).update({
      data: {
        isShow: event.isShow
      }
    })
    return true;
  } catch (e) {
    console.error(e)
    return false;
  }
}

/**
 * 更新文章专题名称
 * @param {*} event 
 */
async function updatePostsClassify(event) {
  try {
    await db.collection('mini_posts').doc(event.id).update({
      data: {
        classify: event.classify
      }
    })
    return true;
  } catch (e) {
    console.error(e)
    return false;
  }
}

/**
 * 更新文章专题名称
 * @param {*} event 
 */
async function updatePostsLabel(event) {
  try {
    await db.collection('mini_posts').doc(event.id).update({
      data: {
        label: event.label
      }
    })
    return true;
  } catch (e) {
    console.error(e)
    return false;
  }
}

/**
 * 新增or更新文章
 * @param {*} event 
 */
async function upsertPosts(event) {
  try {
    let collection = "mini_posts"
    if (event.id === "") {
      await db.collection(collection).add({
        data: event.post
      });
    }
    else {
      await db.collection(collection).doc(event.id).update({
        data: data
      });
    }
    return true;
  } catch (e) {
    console.error(e)
    return false;
  }
}

/**
 * 新增基础标签
 * @param {*} event 
 */
async function addBaseLabel(event) {
  let key = "basePostsLabels"
  let collection = "mini_config"
  let result = await db.collection.where({
    key: key,
    value: event.labelName
  }).get()
  if (result.data.length > 0) {
    return false
  }
  else {
    await db.collection(collection).add({
      data: {
        key: key,
        timestamp: Date.now(),
        value: event.labelName
      }
    });
    return true;
  }
}

/**
 * 新增基础专题
 * @param {} event 
 */
async function addBaseClassify(event) {
  let key = "basePostsClassify"
  let collection = "mini_config"
  let result = await db.collection.where({
    key: key,
    value: event.classify
  }).get()
  if (result.data.length > 0) {
    return false
  }
  else {
    await db.collection(collection).add({
      data: {
        key: key,
        timestamp: Date.now(),
        value: event.classify
      }
    });
    return true;
  }
}

/**
 * 根据id删除配置表数据
 * @param {*} event 
 */
async function deleteConfigById(event) {
  try {
    await db.collection('mini_config').doc(event.id).remove()
    return true;
  } catch (e) {
    console.error(e)
    return false;
  }
}