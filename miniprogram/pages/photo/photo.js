Page({
  data: {
    dataSet: [
      {
        id: '01',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/01.jpg']
      },
      {
        id: '02',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/02.jpg']
      },
      {
        id: '03',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/03.jpg']
      },
      {
        id: '04',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/04.jpg']
      },
      {
        id: '05',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/05.jpg']
      },
      {
        id: '06',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/06.jpg']
      },
      {
        id: '07',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/07.jpg']
      },
      {
        id: '08',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/08.jpg']
      },
      {
        id: '09',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/09.jpg']
      },
      {
        id: '10',
        // backgroundColor: '#ffffff',
        likedCount: 19,
        liked: true,
        images: ['https://phdluffy.com/photo/images/gallery/10.jpg']
      },
    ],
    brick_option: {
      //showFullContent: false,
      // backgroundColor:"#16A085",
      // forceRepaint: true,
         defaultExpandStatus: true,
      // imageFillMode:'aspectFill'
      // columns: 3
      // icon: {
      //   fill: 'https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg',
      //   default:'https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg',
      // },
      // fontColor:'black'
    }
  },

  // 改变卡片展开状态事件的回调
  handleExpand: function(event) {
    console.log(event.detail)
    console.log('expand call back')
  },

  // 点击卡片
  tapCard: function(event) {
    console.log(event.detail)
    console.log('tap card!')
  },

  // 点赞
  handleLike: function(event) {
    console.log(event.detail)
    console.log('like!')
  },

  // 点击用户头像区域
  handleUserEvent: function(event) {
    console.log(event.detail)
    console.log('user!')
  },

  onReachBottom: function() {
    console.log('reach bottom')

    this.setData({
      dataSet: [
        {
          id: '01',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/01.jpg']
        },
        {
          id: '02',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/02.jpg']
        },
        {
          id: '03',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/03.jpg']
        },
        {
          id: '04',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/04.jpg']
        },
        {
          id: '05',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/05.jpg']
        },
        {
          id: '06',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/06.jpg']
        },
        {
          id: '07',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/07.jpg']
        },
        {
          id: '08',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/08.jpg']
        },
        {
          id: '09',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/09.jpg']
        },
        {
          id: '10',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/10.jpg']
        },
        {
          id: '11',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/11.jpg']
        },
        {
          id: '12',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/12.jpg']
        },
        {
          id: '13',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/13.jpg']
        },
        {
          id: '14',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/14.jpg']
        },
        {
          id: '15',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/15.jpg']
        },
        {
          id: '16',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/16.jpg']
        },
        {
          id: '17',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/17.jpg']
        },
        {
          id: '18',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/18.jpg']
        },
        {
          id: '19',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/19.jpg']
        },
        {
          id: '20',
          // backgroundColor: '#ffffff',
          likedCount: 19,
          liked: true,
          images: ['https://phdluffy.com/photo/images/gallery/20.jpg']
        },
      ]
    })
  }
})
