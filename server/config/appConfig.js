const appConfig = {
  port: process.env.PORT || 3000,
  hostUrl: process.env.HOST_URL || `http://paytmchecksum7.herokuapp.com`
};

const logConfig = {
  level: process.env.LOG_LEVEL || 'debug'
};

var paytmConfig = {
	mid: process.env.PAYTM_MERCH_ID || 'qCGeng20200603598739',
//   UpNKDA70368281575842
	key: process.env.PAYTM_MERCH_KEY || 'W_ipsL9Yhqq8!x@z',
//   CONALvaAM4vMejWB
  website: process.env.PAYTM_MERCH_WEBSITE || 'WEBSTAGING',
  transactionUrl: process.env.PAYTM_TXN_URL || 'https://securegw.paytm.in/order/process',
  hostName: process.env.PAYTM_HOST || 'securegw-stage.paytm.in'
  //https://securegw.paytm.in
};

module.exports = {
  appConfig,
  logConfig,
  paytmConfig
}
