export type TextId = keyof typeof TEXT.zh_hant

export const TEXT = {
  zh_hant: {
    about: 'Matters 長什麼樣',
    accountArchived: '已註銷用戶',
    accountBanned: '已禁言用戶',
    accountFrozen: '已凍結用戶',
    ACTION_FAILED: '操作失敗，請稍候重試',
    ACTION_LIMIT_EXCEEDED: '操作過於頻繁，請稍候重試',
    addArticleTag: '添加作品',
    addedArticleCircle: '作品已添加至圍爐',
    addedArticleTag: '作品已添加標籤',
    addTag: '添加標籤',
    agree: '同意',
    agreeAndContinue: '同意並繼續',
    allAuthors: '全部作者',
    allIcymi: '不要錯過',
    allTags: '全部標籤',
    allTopics: '熱議廣場',
    appreciationsReceived: '讚賞我的',
    appreciationsSent: '我讚賞的',
    archived: '隱藏',
    ARTICLE_NOT_FOUND: '作品不存在',
    article: '作品',
    articleArchived: '該作品已從站內隱藏',
    articleBanned: '作品因違反社區約章被隱藏',
    articleFingerprint: '作品指紋',
    articleManagement: '作品管理',
    ASSET_NOT_FOUND: '資源不存在',
    back: '返回',
    backToDiscover: '返回發現',
    BAD_USER_INPUT: '出錯了，請檢查你輸入的內容',
    basicProfile: '基本資料',
    block: '封鎖',
    blockUser: '封鎖用戶',
    bookmark: '收藏',
    callbackClose: '請回到原頁面繼續操作',
    cancel: '取消',
    change: '修改',
    changeEmail: '修改電子信箱',
    changePassword: '修改密碼',
    changeUserName: '修改 Matters ID',
    CIRCLE_NOT_FOUND: '圍爐不存在',
    circleAddArticles: '添加作品',
    circleCreated: '圍爐創建成功',
    circleCreation: '創建圍爐',
    circleEdited: '圍爐已更新',
    circleDiscussion: '衆聊',
    circleBroadcast: '廣播',
    clear: '清空',
    close: '關閉',
    CODE_EXPIRED: '驗證碼已過期',
    CODE_INVALID: '驗證碼不正確',
    collapseComment: '闔上評論',
    collectedOnly: '只看衍生作品',
    COMMENT_NOT_FOUND: '評論不存在',
    comment: '評論',
    commentBlocked: '你封鎖了該用戶',
    commentCollapsed: '評論被創作者闔上',
    commentDeleted: '評論被原作者刪除',
    commentPlaceholder: '發布你的評論…',
    community: '社區共建基地',
    confirm: '確認',
    confirmPush: '確認開啟',
    confirmSubscribe: '立即訂閱',
    connectStripeAccount: '創建 Stripe 帳戶',
    continue: '繼續',
    copy: '複製',
    cover: '封面',
    create: '創建',
    createTag: '新增標籤',
    delete: '刪除',
    deleteArticleTag: '作品已移除標籤',
    deleteComment: '刪除評論',
    deleteDraft: '刪除草稿',
    disagree: '我不同意',
    discover: '發現',
    DISPLAYNAME_INVALID: '名稱不正確',
    displayName: '姓名',
    donation: '支持作者',
    done: '完成',
    downloadApp: '下載應用',
    DRAFT_NOT_FOUND: '草稿不存在',
    draft: '草稿',
    DUPLICATE_CIRCLE: '圍爐名稱已被使用',
    DUPLICATE_TAG: '標籤名稱已被使用',
    edit: '編輯',
    editArticle: '修訂作品',
    editCircle: '編輯圍爐',
    editComment: '編輯評論',
    editTag: '編輯標籤',
    editUserProfile: '編輯資料',
    email: '電子信箱',
    emptySearchResults: '不好意思，什麼都沒搜到',
    enterDisplayName: '請輸入姓名',
    enterEmail: '請輸入電子信箱',
    enterNewEmail: '請輸入新電子信箱',
    enterNewPassword: '請輸入新密碼',
    enterNewPasswordAgain: '請再次輸入新密碼',
    enterPassword: '請輸入密碼',
    enterPasswordAgain: '請再次輸入密碼',
    enterPaymentPasswordAgain: '请再次输入交易密码',
    enterPaymentPointer: '請輸入地址',
    enterRegisteredEmail: '請輸入你的註冊電子信箱',
    enterUserDescription: '請輸入個人簡介',
    enterUserName: '請輸入 Matters ID',
    enterUserNameAgain: '請再次輸入 Matters ID',
    enterVerificationCode: '請輸入驗證碼',
    ENTITY_NOT_FOUND: '實體不存在',
    expand: '展開',
    extend: '關聯',
    extendArticle: '關聯作品',
    failureChange: '修改失敗，請稍候重試',
    failureCommentBlocked: '因爲作者設置，你無法參與該作品下的討論。',
    failureCommentOnboarding:
      '當你獲得 15 次讚賞或積極閱讀作品，即可獲得評論相關權限',
    failureCopy: '複製失敗',
    failureLogout: '登出失敗，請重試',
    failurePublish: '發布失敗',
    failureUploadImage: '圖片上傳失敗',
    featured: '精選',
    featuredComments: '社區精選',
    follow: '追蹤',
    followAuthor: '追蹤創作者',
    followed: '已追蹤',
    follower: '追蹤者',
    following: '追蹤中',
    followingMe: '追蹤我的',
    followingYou: '追蹤了你',
    FORBIDDEN_BY_STATE: '你無權限進行該操作',
    FORBIDDEN_BY_TARGET_STATE: '你無法對此對象進行該操作',
    FORBIDDEN: '你尚無權限進行該操作',
    forgetPassword: '忘記密碼',
    frequentSearch: '熱門搜尋',
    guide: '玩轉 Matters 實用指南',
    helpCenter: '幫助中心',
    hide: '站內隱藏',
    hintAddTag:
      '通過添加標籤幫助讀者更好地找到你的作品。如果沒有合適的標籤，你可以創建新的。',
    hintCircleAddArticles: '將公開作品加入圍爐，成為永久收費作品。',
    hintCircleDisplayName: '2-12 個字元',
    hintCircleName: '2-20 個字元，僅支持英文、數字或下劃線',
    hintDescription: '建議 50 字以內，最長 200 字',
    hintDisplayName: '2-20 個字元',
    hintEditCollection: '關聯自己或他人的作品，幫助讀者更好地發現內容。',
    hintPassword: '至少 8 個字元，支持英文大小寫字母、數字和特殊符號',
    hintPaymentPassword: '輸入六位數字交易密碼',
    hintPaymentPointer: '錢包地址以“$”開頭',
    hintTerm: '我們的用戶協議和隱私政策發生了更改，請閱讀並同意後繼續使用。',
    hintUserName: '4-15 個字元，僅支持英文、數字或下劃線',
    history: '足跡',
    hkd: '港幣',
    hottestArticles: '熱門作品',
    INTERNAL_SERVER_ERROR: '伺服器錯誤，請稍候重試',
    invalidEmail: '電子信箱格式有誤',
    invalidUserName: 'Matters ID 不一致',
    IPFSEntrance: '分佈式入口',
    joinCivicLiker: '成為讚賞公民，每月贊助創作者',
    latest: '最新',
    latestArticles: '最新作品',
    latestResponses: '最新回應',
    LIKER_EMAIL_EXISTS: 'Liker ID 電子信箱已被其他人使用',
    LIKER_NOT_FOUND: 'Liker ID 不存在',
    LIKER_USER_ID_EXISTS: 'Liker ID 已被其他人使用',
    limitedFree: '限免',
    login: '登入',
    loginPassword: '登入密碼',
    logout: '登出',
    members: '成員',
    MIGRATION_REACH_LIMIT: '導入作品累計超過 1 MB',
    migration: '搬家到 Matters',
    migrationSideBar: '一鍵搬家',
    month: '月',
    moreActions: '更多操作',
    mutualFollowing: '互相追蹤',
    myAppreciations: '我的讚賞',
    myBookmarks: '我的收藏',
    myDrafts: '我的草稿',
    myFollowees: '我追蹤的',
    myProfile: '個人主頁',
    myWallet: '我的錢包',
    NAME_EXISTS: '該名稱已被其他使用者使用',
    NAME_INVALID: '名稱不正確',
    NETWORK_ERROR: '網路錯誤，請用力刷新',
    newPassword: '新密碼',
    nextStep: '下一步',
    NOT_ALLOW_ADD_TAG: '無法添加',
    NOT_ENOUGH_MAT: '沒有足夠的 MAT 以讚賞',
    NOTICE_NOT_FOUND: '通知不存在',
    notification: '通知',
    OAUTH_TOKEN_INVALID: '授權信息已失效，請重新登入',
    oauthAuthorize: '應用授權',
    openCommunity: '開放社區',
    password: '密碼',
    passwordAgain: '再次輸入密碼',
    passwordHint: '至少 8 個字元，支持英文大小寫字母、數字和特殊符號',
    passwordNotMatch: '密碼不一致',
    pay: '支付',
    PAYMENT_AMOUNT_INVALID: '支付金額無效，請重新輸入',
    PAYMENT_AMOUNT_TOO_SMALL: '支付金額太少，請重新輸入',
    PAYMENT_PASSWORD_NOT_SET: '請先設定交易密碼',
    PAYMENT_PAYOUT_TRANSACTION_EXISTS: '已有一筆提現交易進行中',
    PAYMENT_REACH_MAXIMUM_LIMIT: '已達到單日支付上限',
    PAYMENT_BALANCE_INSUFFICIENT: '錢包餘額不足',
    PAYMENT_PAYOUT_ACCOUNT_EXISTS: '已有提現帳戶',
    paymentPassword: '交易密碼',
    paymentPayout: '提現',
    paymentPayoutComplete: '提現流程已啟動',
    paymentPointer: '跨鏈收款地址',
    paymentTransactions: '交易記錄',
    pin: '喜歡回應',
    previousStep: '上一步',
    publish: '發布',
    publishing: '正在發布，馬上就好',
    pushDescription: '別錯過精彩討論和最新消息，快點開啓推送吧！',
    putComment: '發布評論',
    QUERY_FIELD_NOT_FOUND: '要查詢的數據不存在',
    RATE_LIMIT_EXCEEDED: '操作過於頻繁，請稍候重試',
    readHistory: '瀏覽記錄',
    refund: '退款',
    refuse: '拒絕',
    register: '註冊',
    reply: '回覆',
    replyComment: '回覆評論',
    report: '檢舉',
    required: '必填欄位',
    resend: '重新發送',
    resetPassword: '重置密碼',
    resetPaymentPassword: '重置交易密碼',
    response: '回應',
    retry: '重試',
    revoke: '撤銷',
    save: '儲存',
    search: '搜尋',
    searchHistory: '搜尋歷史',
    searchTag: '搜尋你想創建的標籤…',
    sendVerificationCode: '發送驗證碼',
    setCover: '設置封面',
    settings: '設定',
    settingsAccount: '帳戶設定',
    settingsBlock: '封鎖用戶',
    settingsLanguage: '介面語言',
    settingsNotification: '通知設定',
    settingsUI: '介面設定',
    settingsWallet: '錢包設定',
    setup: '設置',
    setupLikeCoin: '設置 Liker ID',
    share: '分享',
    shuffle: '換一批',
    stickyArticle: '置頂作品',
    subscriptions: '訂閱',
    subscribeCircle: '訂閱圍爐',
    successBlock: '已封鎖。該用戶無法評論你的作品，他的評論對你闔上。',
    successChangeEmail: '電子信箱修改成功',
    successChangePassword: '密碼修改成功，請不要告訴別人',
    successChangeUserName: 'Matters ID 修改成功',
    successCollapseComment: '評論已被你成功闔上',
    successCopy: '複製成功',
    successDonation: '支持送達',
    successEditUserProfile: '資料已保存',
    successLogin: '登入成功',
    successLogout: '登出成功',
    successRegister: '註冊成功',
    successResetPassword: '密碼重置成功',
    successResetPaymentPassword: '交易密碼重置成功',
    successTopUp: '儲值成功',
    successSubscribeCircle: '訂閱成功！🎉',
    successUnblock: '已取消封鎖。該用戶現在可以評論你的作品。',
    successUploadImage: '圖片上傳成功',
    switchViewMode: '切換瀏覽視圖',
    TAG_EDITORS_REACH_LIMIT: '一個標籤最多僅可有 4 名協作者共同管理',
    TAG_NOT_FOUND: '標籤不存在',
    tag: '標籤',
    tagAddArticle: '添加我的作品',
    tagAddEditor: '添加協作者',
    tagAddSelectedArticle: '添加精選',
    tagCreated: '標籤已創建',
    tagDescription: '標籤描述',
    tagDescriptionPlaceholder: '輸入一段標籤描述…',
    tagEdited: '標籤已更新',
    tagManageEditor: '管理社群',
    tagName: '標籤名稱',
    term: '用戶協議',
    termAndPrivacy: '用戶協議與隱私政策',
    termHint: '我們的用戶協議和隱私政策發生了更改，請閱讀並同意後繼續使用。',
    thinkAboutIt: '考慮一下',
    TOKEN_INVALID: '登入信息已失效，請重新登入',
    topic: '話題',
    topUp: '儲值',
    UNABLE_TO_UPLOAD_FROM_URL:
      '檔案上傳失敗，請確認檔案連結是否有效，或手動下載後再上傳',
    UNAUTHENTICATED: '請先登入再進行操作',
    unblockUser: '取消封鎖',
    uncollapseComment: '取消闔上',
    understood: '我知道了',
    unfollow: '取消追蹤',
    UNKNOWN_ERROR: '不知道哪裏出錯了，過幾分鐘看看',
    unpin: '取消精選',
    unstickyArticle: '取消置頂',
    unsubscribeCircle: '離開圍爐',
    unsubscribed: '退訂成功',
    untitle: '未命名',
    uploadCover: '上傳封面',
    useNewPassword: '請使用新的密碼重新登入',
    USER_EMAIL_EXISTS: '電子信箱被其他人用了，換一個吧',
    USER_EMAIL_INVALID: '電子信箱不正確',
    USER_EMAIL_NOT_FOUND: '帳戶不正確',
    USER_NOT_FOUND: '用戶不存在',
    USER_PASSWORD_INVALID: '密碼不正確',
    user: '用戶',
    userDescription: '個人簡介',
    verificationCode: '驗證碼',
    viewAll: '查看全部',
    viewAppreciators: '查看讚賞',
    viewDonators: '查看支持者',
    viewMode: '瀏覽視圖',
    viewModeComfortable: '標準（小圖）',
    viewModeCompact: '緊湊（無圖）',
    viewModeDefault: '默認（大圖）',
    waitingForPublish: '正在等待發布，星際通道有點擁擠',
    walletBalance: '錢包餘額',
    walletBalanceInsufficient: '錢包餘額不足',
    write: '創作',
    year: '年',
    yourEmail: '你的電子信箱',
  },
  zh_hans: {
    about: 'Matters 长什么样',
    accountArchived: '已注销用户',
    accountBanned: '已禁言用户',
    accountFrozen: '已冻结用户',
    ACTION_FAILED: '操作失败，请稍候重试',
    ACTION_LIMIT_EXCEEDED: '操作过于频繁，请稍候重试',
    addArticleTag: '添加作品',
    addedArticleCircle: '作品已添加至围炉',
    addedArticleTag: '作品已添加标签',
    addTag: '添加标签',
    agree: '同意',
    agreeAndContinue: '同意并继续',
    allAuthors: '全部作者',
    allIcymi: '不要错过',
    allTags: '全部标签',
    allTopics: '热议广场',
    appreciationsReceived: '赞赏我的',
    appreciationsSent: '我赞赏的',
    archived: '隐藏',
    ARTICLE_NOT_FOUND: '作品不存在',
    article: '作品',
    articleArchived: '该作品已从站内隐藏',
    articleBanned: '作品因违反社区约章被隐藏',
    articleFingerprint: '作品指纹',
    articleManagement: '作品管理',
    ASSET_NOT_FOUND: '资源不存在',
    back: '返回',
    backToDiscover: '返回发现',
    BAD_USER_INPUT: '出错了，请检查你输入的内容',
    basicProfile: '基本资料',
    block: '屏蔽',
    blockUser: '屏蔽用户',
    bookmark: '收藏',
    callbackClose: '请回到原页面继续操作',
    cancel: '取消',
    change: '修改',
    changeEmail: '修改邮箱',
    changePassword: '修改密码',
    changeUserName: '修改 Matters ID',
    CIRCLE_NOT_FOUND: '围炉不存在',
    circleAddArticles: '添加作品',
    circleCreated: '围炉创建成功',
    circleCreation: '创建围炉',
    circleEdited: '围炉已更新',
    circleDiscussion: '众聊',
    circleBroadcast: '广播',
    clear: '清空',
    close: '关闭',
    CODE_EXPIRED: '验证码已过期',
    CODE_INVALID: '验证码不正确',
    collapseComment: '折叠评论',
    collectedOnly: '只看衍生作品',
    COMMENT_NOT_FOUND: '评论不存在',
    comment: '评论',
    commentBlocked: '你屏蔽了该用户',
    commentCollapsed: '评论被创作者折叠',
    commentDeleted: '评论被原作者删除',
    commentPlaceholder: '发布你的评论…',
    community: '社区共建基地',
    confirm: '确认',
    confirmPush: '确认开启',
    confirmSubscribe: '立即订阅',
    connectStripeAccount: '创建 Stripe 帐户',
    continue: '继续',
    copy: '复制',
    cover: '封面',
    create: '创建',
    createTag: '新建标签',
    delete: '删除',
    deleteArticleTag: '作品已移除标签',
    deleteComment: '删除评论',
    deleteDraft: '刪除草稿',
    disagree: '我不同意',
    discover: '发现',
    DISPLAYNAME_INVALID: '名称不正确',
    displayName: '姓名',
    donation: '支持作者',
    done: '完成',
    downloadApp: '下载应用',
    DRAFT_NOT_FOUND: '草稿不存在',
    draft: '草稿',
    DUPLICATE_CIRCLE: '围炉名称已被使用',
    DUPLICATE_TAG: '标签名称已被使用',
    edit: '编辑',
    editArticle: '修订作品',
    editCircle: '编辑围炉',
    editComment: '编辑评论',
    editTag: '编辑标签',
    editUserProfile: '编辑资料',
    email: '邮箱',
    emptySearchResults: '不好意思，什么都没搜到',
    enterDisplayName: '请输入姓名',
    enterEmail: '请输入邮箱',
    enterNewEmail: '请输入新邮箱',
    enterNewPassword: '请输入新密码',
    enterNewPasswordAgain: '请再次输入新密码',
    enterPassword: '请输入密码',
    enterPasswordAgain: '请再次输入密码',
    enterPaymentPasswordAgain: '請再次輸入交易密碼',
    enterPaymentPointer: '请输入地址',
    enterRegisteredEmail: '请输入你的注册邮箱',
    enterUserDescription: '请输入个人简介',
    enterUserName: '请输入新 Matters ID',
    enterUserNameAgain: '请再次输入新 Matters ID',
    enterVerificationCode: '请输入验证码',
    ENTITY_NOT_FOUND: '实体不存在',
    expand: '展开',
    extend: '关联',
    extendArticle: '关联作品',
    failureChange: '修改失败，请稍候重试',
    failureCommentBlocked: '因为作者设置，你无法参与该作品下的讨论。',
    failureCommentOnboarding:
      '当你获得 15 次赞赏或积极阅读作品，即可获得评论相关权限',
    failureCopy: '复制失败',
    failureLogout: '登出失败，再来一次',
    failurePublish: '发布失败',
    failureUploadImage: '图片上传失败',
    featured: '精选',
    featuredComments: '社区精选',
    follow: '追踪',
    followAuthor: '追踪创作者',
    followed: '已追踪',
    follower: '追踪者',
    following: '追踪中',
    followingMe: '追踪我的',
    followingYou: '追踪了你',
    FORBIDDEN_BY_STATE: '你无权限进行该操作',
    FORBIDDEN_BY_TARGET_STATE: '你无法对此对象进行该操作',
    FORBIDDEN: '你尚无权限进行该操作',
    forgetPassword: '忘记密码',
    frequentSearch: '热门搜索',
    guide: '玩转 Matters 实用指南',
    helpCenter: '帮助中心',
    hide: '站内隐藏',
    hintAddTag:
      '通过添加标签帮助读者更好地找到你的作品。如果没有合适的标签，你可以创建新的。',
    hintCircleAddArticles: '将公开作品加入围炉，成为永久收费作品。',
    hintCircleDisplayName: '2-12 个字符',
    hintCircleName: '2-20 个字符，仅支持英文、数字或下划线',
    hintDescription: '建议 50 字以内，最长 200 字',
    hintDisplayName: '2-20 个字符',
    hintEditCollection: '关联自己或他人的作品，帮助读者更好地发现内容。',
    hintPassword: '至少 8 个字符，支持英文大小写字母、数字和特殊符号',
    hintPaymentPassword: '输入六位数字交易密码',
    hintPaymentPointer: '钱包地址以“$”开头',
    hintTerm: '我们的用户协议和隐私政策发生了更改，请阅读并同意后继续使用。',
    hintUserName: '4-15 个字符，仅支持英文、数字或下划线',
    history: '足迹',
    hkd: '港币',
    hottestArticles: '热门作品',
    INTERNAL_SERVER_ERROR: '服务器错误，请稍候重试',
    invalidEmail: '邮箱格式有误',
    invalidUserName: 'Matters ID 不一致',
    IPFSEntrance: '分布式入口',
    joinCivicLiker: '成为赞赏公民，每月赞助创作者',
    latest: '最新',
    latestArticles: '最新作品',
    latestResponses: '最新回应',
    LIKER_EMAIL_EXISTS: 'Liker ID 邮箱已被其他人使用',
    LIKER_NOT_FOUND: 'Liker ID 不存在',
    LIKER_USER_ID_EXISTS: 'Liker ID 已被其他人使用',
    limitedFree: '限免',
    login: '登录',
    loginPassword: '登录密码',
    logout: '登出',
    members: '成员',
    MIGRATION_REACH_LIMIT: '导入作品累計超过 1 MB',
    migration: '搬家到 Matters',
    migrationSideBar: '一鍵搬家',
    month: '月',
    moreActions: '更多操作',
    mutualFollowing: '互相追踪',
    myAppreciations: '我的赞赏',
    myBookmarks: '我的收藏',
    myDrafts: '我的草稿',
    myFollowees: '我追踪的',
    myProfile: '个人主页',
    myWallet: '我的钱包',
    NAME_EXISTS: '该名称已被其他用户使用',
    NAME_INVALID: '名称不正确',
    NETWORK_ERROR: '网络不给力，请用力刷新',
    newPassword: '新密码',
    nextStep: '下一步',
    NOT_ALLOW_ADD_TAG: '无法添加',
    NOT_ENOUGH_MAT: '没有足够的 MAT 以赞赏',
    NOTICE_NOT_FOUND: '通知不存在',
    notification: '通知',
    OAUTH_TOKEN_INVALID: '授权信息已失效，请重新登入',
    oauthAuthorize: '应用授权',
    openCommunity: '开放社区',
    password: '密码',
    passwordAgain: '再次输入密码',
    passwordHint: '至少 8 位，支持英文大小写字母、数字和特殊符号',
    passwordNotMatch: '密码不一致',
    pay: '支付',
    PAYMENT_AMOUNT_INVALID: '支付金额无效，请重新输入',
    PAYMENT_AMOUNT_TOO_SMALL: '支付金额太少，请重新输入',
    PAYMENT_PASSWORD_NOT_SET: '请先设定交易密码',
    PAYMENT_PAYOUT_TRANSACTION_EXISTS: '已有一笔提现交易进行中',
    PAYMENT_REACH_MAXIMUM_LIMIT: '已达到单日支付上限',
    PAYMENT_BALANCE_INSUFFICIENT: '钱包余额不足',
    PAYMENT_PAYOUT_ACCOUNT_EXISTS: '已有提现帐户',
    paymentPassword: '交易密码',
    paymentPayout: '提现',
    paymentPayoutComplete: '提现流程已启动',
    paymentPointer: '跨链收款地址',
    paymentTransactions: '交易记录',
    pin: '喜欢回应',
    previousStep: '上一步',
    publish: '发布',
    publishing: '正在发布，马上就好',
    pushDescription: '别错过精彩讨论和最新消息，快点开启推送吧！',
    putComment: '发布评论',
    QUERY_FIELD_NOT_FOUND: '要查询的数据不存在',
    RATE_LIMIT_EXCEEDED: '操作过于频繁，请稍候重试',
    readHistory: '浏览记录',
    refund: '退款',
    refuse: '拒绝',
    register: '注册',
    reply: '回复',
    replyComment: '回复评论',
    report: '检举',
    required: '必填栏位',
    resend: '重新发送',
    resetPassword: '重置密码',
    resetPaymentPassword: '重置交易密码',
    response: '回应',
    retry: '重试',
    revoke: '撤销',
    save: '保存',
    search: '搜索',
    searchHistory: '搜索历史',
    searchTag: '搜索你想创建的标签…',
    sendVerificationCode: '发送验证码',
    setCover: '设置封面',
    settings: '设定',
    settingsAccount: '帳戶设定',
    settingsBlock: '屏蔽用户',
    settingsLanguage: '界面语言',
    settingsNotification: '通知设定',
    settingsUI: '界面设定',
    settingsWallet: '钱包设定',
    setup: '设置',
    setupLikeCoin: '设置 Liker ID',
    share: '分享',
    shuffle: '换一批',
    stickyArticle: '置顶作品',
    subscriptions: '订阅',
    subscribeCircle: '订阅围炉',
    successBlock: '已屏蔽。该用户无法评论你的作品，他的评论对你折叠。',
    successChangeEmail: '邮箱修改成功',
    successChangePassword: '密码修改成功，请不要告诉别人',
    successChangeUserName: 'Matters ID 修改成功',
    successCollapseComment: '评论已被你成功折叠',
    successCopy: '复制成功',
    successDonation: '支持送达',
    successEditUserProfile: '资料已保存',
    successLogin: '上站成功',
    successLogout: '登出成功',
    successRegister: '注册成功',
    successResetPassword: '密码重置成功',
    successResetPaymentPassword: '交易密码重置成功',
    successTopUp: '储值成功',
    successSubscribeCircle: '订阅成功！🎉',
    successUnblock: '已取消屏蔽。该用户现在可以评论你的作品。',
    successUpdateUserProfile: '',
    successUploadImage: '图片上传成功',
    switchViewMode: '切换浏览视图',
    TAG_EDITORS_REACH_LIMIT: '一个标签最多仅可有 4 名协作者共同管理',
    TAG_NOT_FOUND: '标签不存在',
    tag: '标签',
    tagAddArticle: '添加我的作品',
    tagAddEditor: '添加协作者',
    tagAddSelectedArticle: '添加精选',
    tagCreated: '标签已创建',
    tagDescription: '标签描述',
    tagDescriptionPlaceholder: '输入一段话题描述…',
    tagEdited: '标签已更新',
    tagManageEditor: '管理社群',
    tagName: '标签名称',
    term: '用户协议',
    termAndPrivacy: '用户协议与隐私政策',
    termHint: '我们的用户协议和隐私政策发生了更改，请阅读并同意后继续使用。',
    thinkAboutIt: '考虑一下',
    TOKEN_INVALID: '登录信息已失效，请重新登录',
    topic: '话题',
    topUp: '储值',
    UNABLE_TO_UPLOAD_FROM_URL:
      '文件上传失败，请确认文件链接是否有效，或手动下载后再上传',
    UNAUTHENTICATED: '请先登录再进行操作',
    unblockSuccess: '已取消屏蔽。该用户现在可以评论你的作品。',
    unblockUser: '取消屏蔽',
    uncollapseComment: '取消折叠',
    understood: '我知道了',
    unfollow: '取消追踪',
    UNKNOWN_ERROR: '不知道哪里出错了，过几分钟看看',
    unpin: '取消精选',
    unstickyArticle: '取消置顶',
    unsubscribeCircle: '离开围炉',
    unsubscribed: '退订成功',
    untitle: '未命名',
    uploadCover: '上传封面',
    useNewPassword: '请使用新的密码重新登录',
    USER_EMAIL_EXISTS: '邮箱被其他人用了，换一个吧',
    USER_EMAIL_INVALID: '邮箱不正确',
    USER_EMAIL_NOT_FOUND: '帐户不正确',
    USER_NOT_FOUND: '用户不存在',
    USER_PASSWORD_INVALID: '密码不正确',
    user: '用户',
    userDescription: '个人简介',
    verificationCode: '验证码',
    viewAll: '查看全部',
    viewAppreciators: '查看赞赏',
    viewDonators: '查看支持者',
    viewMode: '浏览视图',
    viewModeComfortable: '标准（小图）',
    viewModeCompact: '紧凑（无图）',
    viewModeDefault: '默认（大图）',
    waitingForPublish: '正在等待发布，星际通道有点拥挤',
    walletBalance: '钱包余额',
    walletBalanceInsufficient: '钱包余额不足',
    write: '创作',
    year: '年',
    yourEmail: '你的邮箱',
  },
}
