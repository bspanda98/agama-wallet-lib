/*
  Bitcoinjs-lib network params file
*/

// TODO: runtime extend for kmd assets
// wifAlt can be used for different coin versions that underwent major code base changes
// this is an experimental option that can lead to key pair derivation errors
const bitcoin = require('bitcoinjs-lib');

const networks = {
  btc: bitcoin.networks.bitcoin,
  ltc: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
    dustThreshold: 0, // https://github.com/litecoin-project/litecoin/blob/v0.8.7.2/src/main.cpp#L360-L365
  },
  dnr: {
    messagePrefix: '\x19Denarius Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x5a,
    wif: 0x9e,
    dustThreshold: 1000,
    isPoS: true,
  },
  doge: {
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32: {
      public: 0x02facafd,
      private: 0x02fac398,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e,
    dustThreshold: 0, // https://github.com/dogecoin/dogecoin/blob/v1.7.1/src/core.h#L155-L160
  },
  // https://github.com/monacoinproject/monacoin/blob/master-0.10/src/chainparams.cpp#L161
  mona: {
    messagePrefix: '\x19Monacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x05,
    wif: 0xB2,
    dustThreshold: 546, // https://github.com/bitcoin/bitcoin/blob/v0.9.2/src/core.h#L151-L162
  },
  game: {
    messagePrefix: '\x19GameCredits Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x5,
    wif: 0xA6,
    dustThreshold: 546,
  },
  // https://github.com/dashpay/dash/blob/master/src/chainparams.cpp#L171
  dash: {
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      public: 0x02fe52f8,
      private: 0x02fe52cc,
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc,
    dustThreshold: 5460, // https://github.com/dashpay/dash/blob/v0.12.0.x/src/primitives/transaction.h#L144-L155
  },
  // https://github.com/zcoinofficial/zcoin/blob/c93eccb39b07a6132cb3d787ac18be406b24c3fa/src/base58.h#L275
  xzc: {
    messagePrefix: '\x19ZCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x52,
    scriptHash: 0x07,
    wif: 0x52 + 128,
    dustThreshold: 1000, // https://github.com/zcoinofficial/zcoin/blob/f755f95a036eedfef7c96bcfb6769cb79278939f/src/main.h#L59,
    isZcash: true,
  },
  // https://raw.githubusercontent.com/jl777/komodo/beta/src/chainparams.cpp
  kmd: {
    messagePrefix: '\x19Komodo Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc,
    dustThreshold: 1000,
    isZcash: true,
    kmdInterest: true,
  },
  via: {
    messagePrefix: '\x19Viacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x21,
    wif: 0xc7,
    dustThreshold: 1000,
  },
  vtc: {
    messagePrefix: '\x19Vertcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x5,
    wif: 0x80,
    dustThreshold: 1000,
  },
  nmc: {
    messagePrefix: '\x19Namecoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x34,
    scriptHash: 0xd,
    wif: 0xb4,
    dustThreshold: 1000,
  },
  fair: {
    messagePrefix: '\x19Faircoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x5f,
    scriptHash: 0x24,
    wif: 0xdf,
    dustThreshold: 1000,
  },
  dgb: {
    messagePrefix: '\x19Digibyte Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x5,
    wif: 0x80,
    dustThreshold: 1000,
  },
  crw: {
    messagePrefix: '\x19Crown Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x0,
    scriptHash: 0x1c,
    wif: 0x80,
    dustThreshold: 1000,
  },
  arg: {
    messagePrefix: '\x19Argentum Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x5,
    wif: 0x97,
    dustThreshold: 1000,
  },
  chips: {
    messagePrefix: '\x19Chips Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc,
    dustThreshold: 1000,
  },
  btg: {
    messagePrefix: '\x19BitcoinGold Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x17,
    wif: 0x80,
    dustThreshold: 1000,
    forkName: 'btg',
    isBtcFork: true,
  },
  bch: {
    messagePrefix: '\x19BitcoinCash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x0,
    scriptHash: 0x5,
    wif: 0x80,
    dustThreshold: 1000,
    forkName: 'bch',
    isBtcFork: true,
  },
  blk: {
    messagePrefix: '\x19BlackCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x55,
    wif: 0x99,
    dustThreshold: 1000,
    isPoS: true,
  },
  sib: {
    messagePrefix: '\x19SibCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x28,
    wif: 0x80,
    dustThreshold: 1000,
  },
  zec: {
    messagePrefix: '\x19Zcash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x05358394,
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true,
  },
  hush: {
    messagePrefix: '\x19Hush Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true,
  },
  zcl: {
    messagePrefix: '\x19Zclassic Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true,
  },
  sng: {
    messagePrefix: '\x19Snowgem Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x05358394,
    },
    pubKeyHash: 0x1c28,
    scriptHash: 0x1c2D,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true,
  },
  xmy: {
    messagePrefix: '\x19Myriad Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x9,
    wif: 0xB2,
    dustThreshold: 1000,
  },
  hodlc: {
    messagePrefix: '\x19Hodlc Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x28,
    scriptHash: 0x5,
    wif: 0x28 + 128,
    dustThreshold: 1000,
  },
  qtum: {
    messagePrefix: '\x19Qtum Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3A,
    scriptHash: 0x32,
    wif: 0x80,
    dustThreshold: 1000,
  },
  btx: {
    messagePrefix: '\x19Bitcore Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x0,
    scriptHash: 0x5,
    wif: 0x80,
    dustThreshold: 1000,
  },
  btcz: {
    messagePrefix: '\x19BitcoinZ Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true,
  },
  grs: { // fails to gen a proper addr
    messagePrefix: '\x19Groestlcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x24,
    scriptHash: 0x5,
    wif: 0x80,
    dustThreshold: 1000,
  },
  aby: {
    messagePrefix: '\x19ArtByte Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x5,
    wif: 0x97,
    dustThreshold: 1000,
  },
  mac: {
    messagePrefix: '\x19Machinecoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x5,
    wif: 0xB2,
    dustThreshold: 1000,
  },
  vot: {
    messagePrefix: '\x19VoteCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x05358394,
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true,
  },
  iop: {
    messagePrefix: '\x19IOP Signed Message:\n',
    bip32: {
      public: 0x2780915F,
      private: 0xAE3416F6,
    },
    pubKeyHash: 0x75,
    scriptHash: 0xAE,
    wif: 0x31,
    dustThreshold: 1000,
  },
  bdl: {
    messagePrefix: '\x19Bitdeal Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x5,
    wif: 0xB0,
    dustThreshold: 1000,
  },
  btcp: {
    messagePrefix: '\x18BitcoinPrivate Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1325,
    scriptHash: 0x13AF,
    wif: 0x80,
    dustThreshold: 1000,
    // isZcash: true,
  },
  // https://github.com/zencashio/zen/blob/master/src/chainparams.cpp#L118
  zen: { // new address type
    messagePrefix: '\x19Zencas Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x2089,
    scriptHash: 0x2086,
    wif: 0x80,
    dustThreshold: 1000,
    isZcash: true,
  },
  sys: { // zec based
    messagePrefix: '\x19Syscoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3F,
    scriptHash: 0x5,
    wif: 0xbf,
    wifAlt: [0x80],
    dustThreshold: 1000,
    isZcash: true,
  },
  emc2: {
    messagePrefix: '\x18Einsteinium Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x05,
    wif: 0xa1,
    wifAlt: [0xB0],
  },
  // https://github.com/BTA-BATA/BATA-SOURCE/blob/master/src/chainparams.cpp#L156
  bta: {
    messagePrefix: '\x19Bata Signed Message:\n',
    bip32: {
      public: 0xA40C86FA,
      private: 0xA40B91BD,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x5,
    wif: 0x55,
    dustThreshold: 1000,
  },
  // https://github.com/lbryio/lbrycrd/blob/master/src/chainparams.cpp#L176
  lbc: {
    messagePrefix: '\x18LBRYcrd Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x55,
    scriptHash: 0x7a,
    wif: 0x1c,
  },
  // https://github.com/LIMXTEC/BitSend/blob/master/src/chainparams.cpp#L136
  bsd: {
    messagePrefix: '\x19Bitsend Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x66,
    scriptHash: 0x5,
    wif: 0xCC,
    dustThreshold: 1000,
  },
  // https://github.com/gobytecoin/gobyte/blob/master/src/chainparams.cpp#L127
  gbx: {
    messagePrefix: '\x19GoByte Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0xA,
    wif: 0xC6,
    dustThreshold: 1000,
  },
  // https://github.com/Electronic-Gulden-Foundation/egulden/blob/master/src/chainparams.cpp#L139
  efl: {
    messagePrefix: '\x19E-Gulden Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x5,
    wif: 0xB0,
    dustThreshold: 1000,
  },
  wc: { // xwc
    messagePrefix: '\x18Whitecoin Signed Message:\n',
    bip32: {
      public: 0x04887F1E,
      private: 0x048894ED,
    },
    pubKeyHash: 0x49,
    scriptHash: 0x57,
    wif: 0xc9,
    dustThreshold: 1000,
  },
  // https://github.com/vivocoin/vivo/blob/master/src/chainparams.cpp#L133
  vivo: {
    messagePrefix: '\x19Vivo Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x46,
    scriptHash: 0xA,
    wif: 0xC6,
    dustThreshold: 1000,
  },
  xvg: {
    messagePrefix: '\x18VERGE Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x21,
    wif: 0x9e,
    dustThreshold: 1000,
  },
  smart: { // wrong address generated
    messagePrefix: '\x19Smartcash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3F,
    scriptHash: 0x12,
    wif: 0xBF,
    dustThreshold: 1000,
    isZcash: true,
  },
  // https://github.com/reddcoin-project/reddcoin/blob/master/src/chainparams.cpp#L79
  rdd: {
    messagePrefix: '\x19Reddcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3D,
    scriptHash: 0x5,
    wif: 0xBD,
    dustThreshold: 1000,
  },
  // https://github.com/PIVX-Project/PIVX/blob/master/src/chainparams.cpp#L180
  pivx: {
    messagePrefix: '\x19Pivx Signed Message:\n',
    bip32: {
      public: 0x022D2533,
      private: 0x0221312B,
    },
    pubKeyHash: 0x1E,
    scriptHash: 0xD,
    wif: 0xD4,
    dustThreshold: 1000,
  },
  // https://github.com/OmniLayer/omnicore/blob/master/src/chainparams.cpp#L128
  omni: {
    messagePrefix: '\x19OmniLayer Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x0,
    scriptHash: 0x5,
    wif: 0x80,
    dustThreshold: 1000,
  },
  ok: {
    messagePrefix: '\x19OKCash Signed Message:\n',
    bip32: {
      public: 0x03CC23D7,
      private: 0x03CC1C73,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x1C,
    wif: 0x03,
    wifAlt: [0xB7],
    dustThreshold: 1000,
  },
  neos: {
    messagePrefix: '\x19Neoscoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x5,
    wif: 0xB1,
    dustThreshold: 1000,
  },
  // https://github.com/NAVCoin/navcoin-core/blob/master/src/chainparams.cpp#L160
  nav: {
    messagePrefix: '\x19Navcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x55,
    wif: 0x96,
    dustThreshold: 1000,
  },
  // https://github.com/minexcoin/minexcoin/blob/master/src/chainparams.cpp#L259
  mnx: {
    messagePrefix: '\x19Minexcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x4B,
    scriptHash: 0x5,
    wif: 0x80,
    dustThreshold: 1000,
  },
  lcc: {
    messagePrefix: '\x18Litecoin Cash Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0xb0,
    dustThreshold: 1000,
  },
  // https://github.com/Gulden/gulden-official/blob/master/src/chainparams.cpp#L128
  nlg: {
    messagePrefix: '\x19Gulden Cash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x62,
    wif: 0x26 + 128,
    wifAlt: [0x62],
    dustThreshold: 1000,
  },
  // https://github.com/fujicoin/fujicoin/blob/master/src/chainparams.cpp#L132
  fjc: {
    messagePrefix: '\x19Fujicoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x24,
    scriptHash: 0x10,
    wif: 0xA4,
    dustThreshold: 1000,
  },
  // https://github.com/flash-coin/bitcore-lib/commit/97d72267f3577173ee90d46b43553af801b214f2#diff-014a66be6f0ee0e90f9357d497267195R144
  flash: {
    messagePrefix: '\x19Flash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x44,
    scriptHash: 0x82,
    wif: 0xc4,
    dustThreshold: 1000,
  },
  // https://github.com/FeatherCoin/Feathercoin/blob/master-0.13/src/chainparams.cpp#L132
  ftc: {
    messagePrefix: '\x19FeatherCoin Signed Message:\n',
    bip32: {
      public: 0x048BC26,
      private: 0x0488DAEE,
    },
    pubKeyHash: 0xE,
    // pubKeyHash: 0x0e,
    scriptHash: 0x5,
    wif: 0x8E,
    dustThreshold: 1000,
  },
  // https://github.com/exclfork/ExclusiveCoin/blob/master/src/chainparams.cpp#L82
  excl: {
    messagePrefix: '\x19ExclusiveCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x89,
    wif: 0xA1,
    dustThreshold: 1000,
  },
  // https://github.com/DMDcoin/Diamond/blob/master/src/chainparams.cpp#L166
  dmd: {
    messagePrefix: '\x19Diamond Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x5A,
    scriptHash: 0x8,
    wif: 0xDA,
    dustThreshold: 1000,
  },
  // https://github.com/CooleRRSA/crave/blob/master/src/chainparams.cpp#L99
  crave: {
    messagePrefix: '\x19Crave Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x46,
    scriptHash: 0x55,
    wif: 0x99,
    dustThreshold: 1000,
  },
  // https://github.com/BitClubDev/ClubCoin/blob/master/src/chainparams.cpp#L114
  club: {
    messagePrefix: '\x19ClubCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1C,
    scriptHash: 0x55,
    wif: 0x99,
    dustThreshold: 1000,
  },
  // https://github.com/nochowderforyou/clams/blob/master/src/chainparams.cpp#L93
  clam: {
    messagePrefix: '\x19Clams Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x89,
    scriptHash: 0xD,
    wif: 0x85,
    dustThreshold: 1000,
  },
  // https://github.com/bitcoin-atom/bitcoin-atom/blob/master/src/chainparams.cpp#L168
  bca: {
    messagePrefix: '\x19Bitcoin Atom Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0xA,
    wif: 0x80,
    dustThreshold: 1000,
  },
  // https://github.com/aurarad/Auroracoin/blob/master/src/chainparams.cpp#L77
  aur: {
    messagePrefix: '\x19Auroracoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0xA,
    wif: 0xB0,
    dustThreshold: 1000,
  },
  // https://github.com/adcoin-project/AdCoin/blob/master/src/chainparams.cpp#L129
  acc: {
    messagePrefix: '\x19AdCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x5,
    wif: 0xB0,
    dustThreshold: 1000,
  },
  bcbc: {
    messagePrefix: '\x19Bitcoin CBC Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x0,
    scriptHash: 0x5,
    wif: 0x80,
    dustThreshold: 1000,
  },
  // https://raw.githubusercontent.com/iancoleman/bip39/master/src/js/bitcoinjs-extensions.js
  sdc: {
    messagePrefix: '\x18ShadowCash Signed Message:\n',
    bip32: {
      public: 0xEE80286A,
      private: 0xEE8031E8
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0xbf,
  },
  mzc: {
    messagePrefix: '\x18Mazacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x32,
    scriptHash: 0x09,
    wif: 0xe0,
  },
  ppc: {
    messagePrefix: '\x18Peercoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x37,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0xb7,
  },
  axe: {
    messagePrefix: '\x18AXE Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x37,
    scriptHash: 0x10, // TODO set this correctly
    wif: 0xcc,
  },
  slm: {
    messagePrefix: '\x18Slimcoin Signed Message:\n',
    bip32: {
      public: 0xef6adf10,
      private: 0xef69ea80
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0x46,
  },
  nebl: {
    messagePrefix: '\x18Neblio Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x35,
    scriptHash: 0x70,
    wif: 0xb5,
  },
  jbs: {
    messagePrefix: '\x19Jumbucks Signed Message:\n',
    bip32: {
      public: 0x037a689a,
      private: 0x037a6460
    },
    pubKeyHash: 0x2b,
    scriptHash: 0x05,
    wif: 0xab,
  },
  zet: {
    messagePrefix: '\x18Zetacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x50,
    scriptHash: 0x09,
    wif: 0xe0,
  },
  onx: {
    messagePrefix: '\x18Onixcoin Signed Message:\n',
    bip32: {
      public: 0x049d7cb2,
      private: 0x049d7878
    },
    pubKeyHash: 0x4B,
    scriptHash: 0x05,
    wif: 0x80,
  },
  usnbt: {
    messagePrefix: '\x18Nu Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x19,
    scriptHash: 0x1a,
    wif: 0x96,
  },
  beet: {
    messagePrefix: '\x19Beetlecoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1A,
    scriptHash: 0x55,
    wif: 0x99,
  },
  ac: {
    messagePrefix: '\x18AsiaCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x08,
    wif: 0x97,
  },
  bela: {
    messagePrefix: '\x18BelaCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0x99,
  },
  xbc: {
    messagePrefix: '\x18BitcoinPlus Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x08,
    wif: 0x99,
  },
  brit: {
    messagePrefix: '\x18BritCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x55,
    wif: 0x99,
  },
  cdn: {
    messagePrefix: '\x18Canada eCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0x9c,
  },
  ccn: {
    messagePrefix: '\x18Cannacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0x9c,
  },
  cmp: {
    messagePrefix: '\x18CompCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x55,
    wif: 0x9c,
  },
  defc: { // get servers
    messagePrefix: '\x18Defcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x05,
    wif: 0x9e,
  },
  dgc: {
    messagePrefix: '\x18Digitalcoin Signed Message:\n',
    bip32: {
      public: 0x9e0488B2,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x05,
    wif: 0x9e,
  },
  ecn: {
    messagePrefix: '\x18eCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x5c,
    scriptHash: 0x14,
    wif: 0xdc,
  },
  edrc: {
    messagePrefix: '\x18EDRcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x5d,
    scriptHash: 0x1c,
    wif: 0xdd,
  },
  erc: {
    messagePrefix: '\x18Europecoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x05,
    wif: 0xa8,
  },
  frst: {
    messagePrefix: '\x18FirstCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x23,
    scriptHash: 0x05,
    wif: 0xa3,
  },
  gcr: {
    messagePrefix: '\x18GCR Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x61,
    wif: 0x9a,
  },
  grc: {
    messagePrefix: '\x18Gridcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3e,
    scriptHash: 0x55,
    wif: 0xbe,
  },
  hnc: {
    messagePrefix: '\x18helleniccoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x05,
    wif: 0xb0,
  },
  thc: {
    messagePrefix: '\x18Hempcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x28,
    scriptHash: 0x08,
    wif: 0xa8,
  },
  insn: {
    messagePrefix: '\x18INSaNe Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x66,
    scriptHash: 0x39,
    wif: 0x37,
  },
  ixc: {
    messagePrefix: '\x18Ixcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x8a,
    scriptHash: 0x05,
    wif: 0x80,
  },
  kobo: {
    messagePrefix: '\x18Kobocoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x23,
    scriptHash: 0x1c,
    wif: 0xa3,
  },
  ldcn: {
    messagePrefix: '\x18Landcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x7a,
    wif: 0xb0,
  },
  linx: {
    messagePrefix: '\x18LinX Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x05,
    wif: 0xcb,
  },
  lynx: {
    messagePrefix: '\x18Lynx Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x2d,
    scriptHash: 0x32,
    wif: 0xad,
  },
  nro: {
    messagePrefix: '\x18PPCoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x75,
    wif: 0xb5,
  },
  nyc: {
    messagePrefix: '\x18Newyorkc Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x16,
    wif: 0xbc,
  },
  nvc: {
    messagePrefix: '\x18NovaCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x08,
    scriptHash: 0x14,
    wif: 0x88,
  },
  nsr: {
    messagePrefix: '\x18Nu Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x40,
    wif: 0x95,
  },
  psb: {
    messagePrefix: '\x18Pesobit Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x55,
    wif: 0xb7,
  },
  pink: {
    messagePrefix: '\x18Pinkcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x03,
    scriptHash: 0x1c,
    wif: 0x83,
  },
  posw: {
    messagePrefix: '\x18Poswcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x55,
    wif: 0xb7,
  },
  pot: {
    messagePrefix: '\x18Potcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x05,
    wif: 0xb7,
  },
  put: {
    messagePrefix: '\x18PutinCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x14,
    wif: 0xb7,
  },
  vox: { // rvr
    messagePrefix: '\x18Voxels Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x46,
    scriptHash: 0x05,
    wif: 0xc6,
  },
  rby: {
    messagePrefix: '\x18Rubycoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc,
  },
  smly: {
    messagePrefix: '\x18Smileycoin Signed Message:\n',
    bip32: {
      public: 0x1E562D9A,
      private: 0x1E5631BC,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0x05,
  },
  slr: {
    messagePrefix: '\x18SolarCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x12,
    scriptHash: 0x05,
    wif: 0x92,
  },
  strat: {
    messagePrefix: '\x18Stratis Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0xbf,
  },
  toa: {
    messagePrefix: '\x18TOA Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x41,
    scriptHash: 0x17,
    wif: 0xc1,
  },
  usc: {
    messagePrefix: '\x18UltimateSecureCash Signed Message:\n',
    bip32: {
      public: 0xEE80286A,
      private: 0xEE8031E8,
    },
    pubKeyHash: 0x44,
    scriptHash: 0x7d,
    wif: 0xbf,
  },
  uno: {
    messagePrefix: '\x18Unobtanium Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x82,
    scriptHash: 0x1e,
    wif: 0xe0,
  },
  xvc: {
    messagePrefix: '\x18Vcash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x08,
    wif: 0xc7,
  },
  vpn: {
    messagePrefix: '\x18VpnCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x05,
    wif: 0xc7,
  },
  wc: {
    messagePrefix: '\x18WinCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x49,
    scriptHash: 0x1c,
    wif: 0xc9,
  },
  xuez: {
    messagePrefix: '\x18Xuez Signed Message:\n',
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x12,
    wif: 0xd4
  },
  nrg: { // etk?
    messagePrefix: '\x18Energicoin Signed Message:\n',
    bip32: {
      public: 0x03B8C856,
      private: 0xD7DC6E9F,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x35,
    wif: 0x6a,
  },
  excc: {
    messagePrefix: 'ExchangeCoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x21B9,
    scriptHash: 0x34AF,
    wif: 0x80,
  },
  xax: {
    messagePrefix: '\x18Artax Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x1CBD,
    wif: 0x97,
  },
  stt: {
    messagePrefix: '\x18Stash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc,
  },
  sls: {
    messagePrefix: '\x18Salus Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0xc4,
    wif: 0xbf,
  },
  mec: {
    messagePrefix: '\x18Megacoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x05,
    wif: 0xB2,
  },
  cesc: {
    messagePrefix: '\x18Cryptoescudo Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0x9c,
  },
  btdx: {
    messagePrefix: '\x18BitCloud Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0x99,
  },
  // coins missing bip32 info
  // src: https://github.com/priestc/altcore-lib/blob/altcore/lib/network_list.js
  '1337': {
    messagePrefix: '\u0018Elite Signed Message:\n',
    pubKeyHash: 0x30,
    scriptHash: 0x1c,
    wif: 0xb0,
  },
  bun: {
    messagePrefix: '\u0018BunnyCoin Signed Message:\n',
    pubKeyHash: 0x1a,
    scriptHash: 0x16,
    wif: 0x9a,
    headerHashAlgo: 'scrypt',
  },
  cat: {
    messagePrefix: '\u0018Catcoin Signed Message:\n',
    pubKeyHash: 0x15,
    scriptHash: 0x5,
    wif: 0x95,
  },
  cloak: {
    messagePrefix: '\u0018CloakCoin Signed Message:\n',
    pubKeyHash: 0x1b,
    scriptHash: 0x55,
    wif: 0x9b,
  },
  xcp: {
    messagePrefix: '\u0018CounterParty Signed Message:\n',
    pubKeyHash: 0x0,
    scriptHash: 0x5,
    wif: 0x80,
  },
  cj: {
    messagePrefix: '\u0018CryptoJacks Signed Message:\n',
    pubKeyHash: 0x1c,
    scriptHash: 0x5,
    wif: 0x9c,
  },
  note: {
    messagePrefix: '\u0018DNotes Signed Message:\n',
    pubKeyHash: 0x1f,
    scriptHash: 0x5,
    wif: 0x9f,
  },
  dime: {
    messagePrefix: '\u0018Dimecoin Signed Message:\n',
    pubKeyHash: 0xf,
    scriptHash: 0x9,
    wif: 0x8f,
  },
  dope: {
    messagePrefix: '\u0018Dopecoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1e,
    pubKeyHashAlt: 0x8,
    scriptHash: 0x5,
    wif: 0x9e,
  },
  emc: {
    messagePrefix: '\u0018Emercoin Signed Message:\n',
    pubKeyHash: 0x21,
    scriptHash: 0x5,
    wif: 0x80,
  },
  flap: {
    messagePrefix: '\u0018FlappyCoin Signed Message:\n',
    pubKeyHash: 0x23,
    scriptHash: 0x5,
    wif: 0xa3,
  },
  geert: {
    messagePrefix: '\u0018Geertcoin Signed Message:\n',
    pubKeyHash: 0x26,
    scriptHash: 0x5,
    wif: 0xb0,
  },
  huc: {
    messagePrefix: '\u0018HunterCoin Signed Message:\n',
    pubKeyHash: 0x28,
    scriptHash: 0x5,
    wif: 0xa8,
  },
  leo: {
    messagePrefix: '\u0018LEOcoin Signed Message:\n',
    pubKeyHash: 0x12,
    scriptHash: 0x58,
    wif: 0x90,
  },
  lemon: {
    messagePrefix: '\u0018LemonCoin Signed Message:\n',
    pubKeyHash: 0x30,
    scriptHash: 0x5,
    wif: 0xb0,
  },
  mars: {
    messagePrefix: '\u0018MarsCoin Signed Message:\n',
    pubKeyHash: 0x32,
    scriptHash: 0x5,
    wif: 0xb2,
    headerHashAlgo: 'scrypt',
  },
  mgc: {
    messagePrefix: '\u0018MergeCoin Signed Message:\n',
    pubKeyHash: 0x32,
    scriptHash: 0x5,
    wif: 0xb2,
    transactionForm: 'ppc-timestamp',
    isPoS: true, // ?
  },
  moon: {
    messagePrefix: '\u0018Mooncoin Signed Message:\n',
    pubKeyHash: 0x3,
    scriptHash: 0x5,
    wif: 0x83,
  },
  nlc2: {
    messagePrefix: '\u0018NoLimitCoin Signed Message:\n',
    pubKeyHash: 0x35,
    scriptHash: 0x5c,
    wif: 0xb5,
  },
  pnd: {
    messagePrefix: '\u0018PandaCoin Signed Message:\n',
    pubKeyHash: 0x37,
    scriptHash: 0x5,
    wif: 0xb7,
  },
  part: {
    messagePrefix: '\u0018Particl Signed Message:\n',
    pubKeyHash: 0x38,
    scriptHash: 0x3c,
    wif: 0x6c,
  },
  ptc: {
    messagePrefix: '\u0018Pesetacoin Signed Message:\n',
    pubKeyHash: 0x2f,
    scriptHash: 0x5,
    wif: 0xaf,
  },
  xpm: {
    messagePrefix: '\u0018Primecoin Signed Message:\n',
    pubKeyHash: 0x17,
    scriptHash: 0x5,
    wif: 0x97,
  },
  qrk: {
    messagePrefix: '\u0018Quark Signed Message:\n',
    pubKeyHash: 0x3a,
    scriptHash: 0x5,
    wif: 0xba,
  },
  song: {
    messagePrefix: '\u0018SongCoin Signed Message:\n',
    pubKeyHash: 0x3f,
    scriptHash: 0x5,
    wif: 0xbf,
  },
  trc: {
    messagePrefix: '\u0018TerraCoin Signed Message:\n',
    pubKeyHash: 0x0,
    scriptHash: 0x5,
    wif: 0x80,
  },
  tes: {
    messagePrefix: '\u0018TeslaCoin Signed Message:\n',
    pubKeyHash: 0xb,
    scriptHash: 0x5,
    wif: 0x8b,
  },
  tx: {
    messagePrefix: '\u0018TransferCoin Signed Message:\n',
    pubKeyHash: 0x42,
    scriptHash: 0x5,
    wif: 0x99,
  },
  unify: {
    messagePrefix: '\u0018Unify Signed Message:\n',
    pubKeyHash: 0x44,
    scriptHash: 0x5,
    wif: 0xc4,
  },
  bvc: {
    messagePrefix: '\u0018BeaverCoin Signed Message:\n',
    pubKeyHash: 0x19,
    scriptHash: 0x5,
    wif: 0xb0,
  },
  arco: {
    messagePrefix: '\u0018Aquariuscoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x5,
    wif: 0x97,
  },
  taj: {
    messagePrefix: '\u0018Tajcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x41,
    scriptHash: 0x5,
    wif: 0x6f,
  },
  lana: {
    messagePrefix: '\u0018Lanacoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x5,
    wif: 0xb0,
  },
  neva: {
    messagePrefix: '\u0018Nevacoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x5,
    wif: 0xb1,
  },
  netko: {
    messagePrefix: '\u0018Netkocoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x5,
    wif: 0xB1,
  },
  // coins missing scriptHash info and a proper ticker symbol
  // needs a fix to be able to use multisig txs
  // src: https://github.com/walletgeneratornet/WalletGenerator.net/blob/master/src/janin.currency.js#L89
  '2give': {
    messagePrefix: '\u00182GIVE Signed Message:\n',
    pubKeyHash: 0x27,
    wif: 0xa7,
  },
  '42coin': {
    messagePrefix: '\u0018242coin Signed Message:\n',
    pubKeyHash: 0x08,
    wif: 0x88,
  },
  acoin: {
    messagePrefix: '\u0018Acoin Signed Message:\n',
    pubKeyHash: 0x17,
    wif: 0xe6,
  },
  agacoin: {
    messagePrefix: '\u0018AGAcoin Signed Message:\n',
    pubKeyHash: 0x53,
    wif: 0xd3,
  },
  alphacoin: {
    messagePrefix: '\u0018Alphacoin Signed Message:\n',
    pubKeyHash: 0x52,
    wif: 0xd2,
  },
  alqo: {
    messagePrefix: '\u0018Alqo Signed Message:\n',
    pubKeyHash: 0x17,
    wif: 0xc1,
  },
  animecoin: {
    messagePrefix: '\u0018Animecoin Signed Message:\n',
    pubKeyHash: 0x17,
    wif: 0x97,
  },
  anoncoin: {
    messagePrefix: '\u0018Anoncoin Signed Message:\n',
    pubKeyHash: 0x17,
    wif: 0x97,
  },
  apexcoin: {
    messagePrefix: '\u0018Apexcoin Signed Message:\n',
    pubKeyHash: 0x17,
    wif: 0x97,
  },
  bbqcoin: {
    messagePrefix: '\u0018BBQcoin Signed Message:\n',
    pubKeyHash: 0x55,
    wif: 0xd5,
  },
  biblepay: {
    messagePrefix: '\u0018Biblepay Signed Message:\n',
    pubKeyHash: 0x19,
    wif: 0xb6,
  },
  birdcoin: {
    messagePrefix: '\u0018Birdcoin Signed Message:\n',
    pubKeyHash: 0x2f,
    wif: 0xaf,
  },
  bitsynq: {
    messagePrefix: '\u0018BitSynq Signed Message:\n',
    pubKeyHash: 0x3f,
    wif: 0xbf,
  },
  bitzeny: {
    messagePrefix: '\u0018BitZeny Signed Message:\n',
    pubKeyHash: 0x51,
    wif: 0x80,
  },
  blackjack: {
    messagePrefix: '\u0018BlackJack Signed Message:\n',
    pubKeyHash: 0x15,
    wif: 0x95,
  },
  blocknet: {
    messagePrefix: '\u0018BlockNet Signed Message:\n',
    pubKeyHash: 0x1a,
    wif: 0x9a,
  },
  bolivarcoin: {
    messagePrefix: '\u0018BolivarCoin Signed Message:\n',
    pubKeyHash: 0x55,
    wif: 0xd5,
  },
  boxycoin: {
    messagePrefix: '\u0018BoxyCoin Signed Message:\n',
    pubKeyHash: 0x4b,
    wif: 0xcb,
  },
  cagecoin: {
    messagePrefix: '\u0018Cagecoin Signed Message:\n',
    pubKeyHash: 0x1f,
    wif: 0x9f,
  },
  campuscoin: {
    messagePrefix: '\u0018CampusCoin Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x9c,
  },
  canadaecoin: {
    messagePrefix: '\u0018CanadaeCoin Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x9c,
  },
  cannabiscoin: {
    messagePrefix: '\u0018CannabisCoin Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x9c,
  },
  capricoin: {
    messagePrefix: '\u0018Capricoin Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x9c,
  },
  cassubiandetk: {
    messagePrefix: '\u0018CassubianDetk Signed Message:\n',
    pubKeyHash: 0x1e,
    wif: 0x9e,
  },
  cashcoin: {
    messagePrefix: '\u0018CashCoin Signed Message:\n',
    pubKeyHash: 0x22,
    wif: 0xa2,
  },
  chaincoin: {
    messagePrefix: '\u0018ChainCoin Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x9c,
  },
  colossuscoinxt: {
    messagePrefix: '\u0018ColossusCoinXT Signed Message:\n',
    pubKeyHash: 0x1e,
    wif: 0xd4,
  },
  condensate: {
    messagePrefix: '\u0018Condensate Signed Message:\n',
    pubKeyHash: 0x3c,
    wif: 0xbc,
  },
  copico: {
    messagePrefix: '\u0018Copico Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x90,
  },
  coppercoin: {
    messagePrefix: '\u0018CopperCoin Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x9c,
  },
  corgicoin: {
    messagePrefix: '\u0018Corgicoin Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x9c,
  },
  cryptobullion: {
    messagePrefix: '\u0018CryptoBullion Signed Message:\n',
    pubKeyHash: 0x0b,
    wif: 0x8b,
  },
  cryptoclub: {
    messagePrefix: '\u0018CryptoClub Signed Message:\n',
    pubKeyHash: 0x23,
    wif: 0xa3,
  },
  cryptoescudo: {
    messagePrefix: '\u0018Cryptoescudo Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x9c,
  },
  cryptonite: {
    messagePrefix: '\u0018Cryptonite Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x80,
  },
  cryptowisdomcoin: {
    messagePrefix: '\u0018CryptoWisdomCoin Signed Message:\n',
    pubKeyHash: 0x49,
    wif: 0x87,
  },
  c2coin: {
    messagePrefix: '\u0018C2coin Signed Message:\n',
    pubKeyHash: 0x1c,
    wif: 0x9c,
  },
  deafdollars: {
    messagePrefix: '\u0018DeafDollars Signed Message:\n',
    pubKeyHash: 0x30,
    wif: 0xb0,
  },
  deeponion: {
    messagePrefix: '\u0018DeepOnion Signed Message:\n',
    pubKeyHash: 0x1f,
    wif: 0x9f,
  },
  deutsche_emark: {
    messagePrefix: '\u0018Deutsche eMark Signed Message:\n',
    pubKeyHash: 0x35,
    wif: 0xb5,
  },
  devcoin: {
    messagePrefix: '\u0018Devcoin Signed Message:\n',
    pubKeyHash: 0x00,
    wif: 0x80,
  },
  dogecoindark: {
    messagePrefix: '\u0018DogecoinDark Signed Message:\n',
    pubKeyHash: 0x1e,
    wif: 0x9e,
  },
  ekrona: {
    messagePrefix: '\u0018eKrona Signed Message:\n',
    pubKeyHash: 0x2d,
    wif: 0xad,
  },
  electra: {
    messagePrefix: '\u0018Electra Signed Message:\n',
    pubKeyHash: 0x21,
    wif: 0xa1,
  },
  ember: {
    messagePrefix: '\u0018Ember Signed Message:\n',
    pubKeyHash: 0x5c,
    wif: 0x32,
  },
  emerald: {
    messagePrefix: '\u0018Emerald Signed Message:\n',
    pubKeyHash: 0x22,
    wif: 0xa2,
  },
  energycoin: {
    messagePrefix: '\u0018EnergyCoin Signed Message:\n',
    pubKeyHash: 0x5c,
    wif: 0xdc,
  },
  espers: {
    messagePrefix: '\u0018Espers Signed Message:\n',
    pubKeyHash: 0x21,
    wif: 0x90,
  },
  fastcoin: {
    messagePrefix: '\u0018Fastcoin Signed Message:\n',
    pubKeyHash: 0x60,
    wif: 0xe0,
  },
  fibre: {
    messagePrefix: '\u0018Fibre Signed Message:\n',
    pubKeyHash: 0x23,
    wif: 0xa3,
  },
  florincoin: {
    messagePrefix: '\u0018Florincoin Signed Message:\n',
    pubKeyHash: 0x23,
    wif: 0xb0,
  },
  flurbo: {
    messagePrefix: '\u0018Flurbo Signed Message:\n',
    pubKeyHash: 0x23,
    wif: 0x30,
  },
  fluttercoin: {
    messagePrefix: '\u0018Fluttercoin Signed Message:\n',
    pubKeyHash: 0x23,
    wif: 0xa3,
  },
  frazcoin: {
    messagePrefix: '\u0018FrazCoin Signed Message:\n',
    pubKeyHash: 0x23,
    wif: 0xA3,
  },
  freicoin: {
    messagePrefix: '\u0018Freicoin Signed Message:\n',
    pubKeyHash: 0x00,
    wif: 0x80,
  },
  fudcoin: {
    messagePrefix: '\u0018FUDcoin Signed Message:\n',
    pubKeyHash: 0x23,
    wif: 0xa3,
  },
  fuelcoin: {
    messagePrefix: '\u0018Fuelcoin Signed Message:\n',
    pubKeyHash: 0x24,
    wif: 0x80,
  },
  gabencoin: {
    messagePrefix: '\u0018GabenCoin Signed Message:\n',
    pubKeyHash: 0x10,
    wif: 0x90,
  },
  garlicoin: {
    messagePrefix: '\u0018Garlicoin Signed Message:\n',
    pubKeyHash: 0x26,
    wif: 0xb0,
  },
  globalboost: {
    messagePrefix: '\u0018GlobalBoost Signed Message:\n',
    pubKeyHash: 0x26,
    wif: 0xa6,
  },
  goodcoin: {
    messagePrefix: '\u0018Goodcoin Signed Message:\n',
    pubKeyHash: 0x26,
    wif: 0xa6,
  },
  gridcoinresearch: {
    messagePrefix: '\u0018GridcoinResearch Signed Message:\n',
    pubKeyHash: 0x3e,
    wif: 0xbe,
  },
  guncoin: {
    messagePrefix: '\u0018Guncoin Signed Message:\n',
    pubKeyHash: 0x27,
    wif: 0xa7,
  },
  hamradiocoin: {
    messagePrefix: '\u0018HamRadioCoin Signed Message:\n',
    pubKeyHash: 0x00,
    wif: 0x80,
  },
  hfrcoin: {
    messagePrefix: '\u0018HFRcoin Signed Message:\n',
    pubKeyHash: 0x10,
    wif: 0x90,
  },
  htmlcoin: {
    messagePrefix: '\u0018HTMLCoin Signed Message:\n',
    pubKeyHash: 0x29,
    wif: 0xa9,
  },
  hyperstake: {
    messagePrefix: '\u0018HyperStake Signed Message:\n',
    pubKeyHash: 0x75,
    wif: 0xf5,
  },
  imperiumcoin: {
    messagePrefix: '\u0018ImperiumCoin Signed Message:\n',
    pubKeyHash: 0x30,
    wif: 0xb0,
  },
  incakoin: {
    messagePrefix: '\u0018IncaKoin Signed Message:\n',
    pubKeyHash: 0x35,
    wif: 0xb5,
  },
  incognitocoin: {
    messagePrefix: '\u0018IncognitoCoin Signed Message:\n',
    pubKeyHash: 0x00,
    wif: 0x80,
  },
  influxcoin: {
    messagePrefix: '\u0018Influxcoin Signed Message:\n',
    pubKeyHash: 0x66,
    wif: 0xe6,
  },
  Innox: {
    messagePrefix: '\u0018Innox Signed Message:\n',
    pubKeyHash: 0x4b,
    wif: 0xcb,
  },
  iridiumcoin: {
    messagePrefix: '\u0018IridiumCoin Signed Message:\n',
    pubKeyHash: 0x30,
    wif: 0xb0,
  },
  icash: {
    messagePrefix: '\u0018iCash Signed Message:\n',
    pubKeyHash: 0x66,
    wif: 0xcc,
  },
  judgecoin: {
    messagePrefix: '\u0018Judgecoin Signed Message:\n',
    pubKeyHash: 0x2b,
    wif: 0xab,
  },
  jumbucks: {
    messagePrefix: '\u0018Jumbucks Signed Message:\n',
    pubKeyHash: 0x2b,
    wif: 0xab,
  },
  khcoin: {
    messagePrefix: '\u0018KHcoin Signed Message:\n',
    pubKeyHash: 0x30,
    wif: 0xb0,
  },
  kittehcoin: {
    messagePrefix: '\u0018KittehCoin Signed Message:\n',
    pubKeyHash: 0x2d,
    wif: 0xad,
  },
  latium: {
    messagePrefix: '\u0018Latium Signed Message:\n',
    pubKeyHash: 0x17,
    wif: 0x80,
  },
  litedoge: {
    messagePrefix: '\u0018LiteDoge Signed Message:\n',
    pubKeyHash: 0x5a,
    wif: 0xab,
  },
  lomocoin: {
    messagePrefix: '\u0018LoMoCoin Signed Message:\n',
    pubKeyHash: 0x30,
    wif: 0xb0,
  },
  madbytecoin: {
    messagePrefix: '\u0018MadbyteCoin Signed Message:\n',
    pubKeyHash: 0x32,
    wif: 0x6e,
  },
  magicinternetmoney: {
    messagePrefix: '\u0018MagicInternetMoney Signed Message:\n',
    pubKeyHash: 0x30,
    wif: 0xb0,
  },
  magicoin: {
    messagePrefix: '\u0018Magicoin Signed Message:\n',
    pubKeyHash: 0x14,
    wif: 0x94,
  },
  martexcoin: {
    messagePrefix: '\u0018MarteXcoin Signed Message:\n',
    pubKeyHash: 0x32,
    wif: 0xb2,
  },
  masterdoge: {
    messagePrefix: '\u0018MasterDoge Signed Message:\n',
    pubKeyHash: 0x33,
    wif: 0x8b,
  },
  mintcoin: {
    messagePrefix: '\u0018MintCoin Signed Message:\n',
    pubKeyHash: 0x33,
    wif: 0xb3,
  },
  mobiuscoin: {
    messagePrefix: '\u0018MobiusCoin Signed Message:\n',
    pubKeyHash: 0x00,
    wif: 0x80,
  },
  monetaryunit: {
    messagePrefix: '\u0018MonetaryUnit Signed Message:\n',
    pubKeyHash: 0x10,
    wif: 0x7e,
  },
  monocle: {
    messagePrefix: '\u0018Monocle Signed Message:\n',
    pubKeyHash: 0x32,
    wif: 0xb2,
  },
  mooncoin: {
    messagePrefix: '\u0018Monocle Signed Message:\n',
    pubKeyHash: 0x03,
    wif: 0x83,
  },
  needlecoin: {
    messagePrefix: '\u0018NeedleCoin Signed Message:\n',
    pubKeyHash: 0x35,
    wif: 0xb5,
  },
  neetcoin: {
    messagePrefix: '\u0018NeetCoin Signed Message:\n',
    pubKeyHash: 0x35,
    wif: 0xb5,
  },
  nubits: {
    messagePrefix: '\u0018Nubits Signed Message:\n',
    pubKeyHash: 0x19,
    wif: 0xbf,
  },
  nyancoin: {
    messagePrefix: '\u0018Nyancoin Signed Message:\n',
    pubKeyHash: 0x2d,
    wif: 0xad,
  },
  ocupy: {
    messagePrefix: '\u0018Ocupy Signed Message:\n',
    pubKeyHash: 0x73,
    wif: 0xf3,
  },
  omnicoin: {
    messagePrefix: '\u0018Omnicoin Signed Message:\n',
    pubKeyHash: 0x73,
    wif: 0xf3,
  },
  onyxcoin: {
    messagePrefix: '\u0018Onyxcoin Signed Message:\n',
    pubKeyHash: 0x73,
    wif: 0xf3,
  },
  paccoin: {
    messagePrefix: '\u0018PacCoin Signed Message:\n',
    pubKeyHash: 0x18,
    wif: 0x98,
  },
  paycoin: {
    messagePrefix: '\u0018Paycoin Signed Message:\n',
    pubKeyHash: 0x37,
    wif: 0xb7,
  },
  parkbyte: {
    messagePrefix: '\u0018ParkByte Signed Message:\n',
    pubKeyHash: 0x37,
    wif: 0xb7,
  },
  phcoin: {
    messagePrefix: '\u0018PHCoin Signed Message:\n',
    pubKeyHash: 0x37,
    wif: 0xb7,
  },
  phoenixcoin: {
    messagePrefix: '\u0018PhoenixCoin Signed Message:\n',
    pubKeyHash: 0x38,
    wif: 0xb8,
  },
  piggycoin: {
    messagePrefix: '\u0018PiggyCoin Signed Message:\n',
    pubKeyHash: 0x76,
    wif: 0xf6,
  },
  prospercoinclassic: {
    messagePrefix: '\u0018ProsperCoinClassic Signed Message:\n',
    pubKeyHash: 0x3a,
    wif: 0xba,
  },
  qubitcoin: {
    messagePrefix: '\u0018Qubitcoin Signed Message:\n',
    pubKeyHash: 0x26,
    wif: 0xe0,
  },
  riecoin: {
    messagePrefix: '\u0018Riecoin Signed Message:\n',
    pubKeyHash: 0x3c,
    wif: 0x80,
  },
  rimbit: {
    messagePrefix: '\u0018Rimbit Signed Message:\n',
    pubKeyHash: 0x3c,
    wif: 0xbc,
  },
  roicoin: {
    messagePrefix: '\u0018ROIcoin Signed Message:\n',
    pubKeyHash: 0x3c,
    wif: 0x80,
  },
  rupaya: {
    messagePrefix: '\u0018Rupaya Signed Message:\n',
    pubKeyHash: 0x3c,
    wif: 0xbc,
  },
  sambacoin: {
    messagePrefix: '\u0018Sambacoin Signed Message:\n',
    pubKeyHash: 0x3e,
    wif: 0xbe,
  },
  seckcoin: {
    messagePrefix: '\u0018SecKCoin Signed Message:\n',
    pubKeyHash: 0x3f,
    wif: 0xbf,
  },
  sixeleven: {
    messagePrefix: '\u0018SixEleven Signed Message:\n',
    pubKeyHash: 0x34,
    wif: 0x80,
  },
  spreadcoin: {
    messagePrefix: '\u0018SpreadCoin Signed Message:\n',
    pubKeyHash: 0x3f,
    wif: 0xbf,
  },
  stealthcoin: {
    messagePrefix: '\u0018StealthCoin Signed Message:\n',
    pubKeyHash: 0x3e,
    wif: 0xbe,
  },
  swagbucks: {
    messagePrefix: '\u0018SwagBucks Signed Message:\n',
    pubKeyHash: 0x3f,
    wif: 0x99,
  },
  titcoin: {
    messagePrefix: '\u0018Titcoin Signed Message:\n',
    pubKeyHash: 0x00,
    wif: 0x80,
  },
  tittiecoin: {
    messagePrefix: '\u0018TittieCoin Signed Message:\n',
    pubKeyHash: 0x41,
    wif: 0xc1,
  },
  topcoin: {
    messagePrefix: '\u0018Topcoin Signed Message:\n',
    pubKeyHash: 0x42,
    wif: 0xc2,
  },
  treasurehuntcoin: {
    messagePrefix: '\u0018TreasureHuntCoin Signed Message:\n',
    pubKeyHash: 0x32,
    wif: 0xb2,
  },
  trezarcoin: {
    messagePrefix: '\u0018TrezarCoin Signed Message:\n',
    pubKeyHash: 0x42,
    wif: 0xC2,
  },
  usde: {
    messagePrefix: '\u0018USDe Signed Message:\n',
    pubKeyHash: 0x26,
    wif: 0xa6,
  },
  versioncoin: {
    messagePrefix: '\u0018Versioncoin Signed Message:\n',
    pubKeyHash: 0x46,
    wif: 0xc6,
  },
  vikingcoin: {
    messagePrefix: '\u0018VikingCoin Signed Message:\n',
    pubKeyHash: 0x46,
    wif: 0x56,
  },
  w2coin: {
    messagePrefix: '\u0018W2Coin Signed Message:\n',
    pubKeyHash: 0x49,
    wif: 0xc9,
  },
  wacoins: {
    messagePrefix: '\u0018WACoins Signed Message:\n',
    pubKeyHash: 0x49,
    wif: 0xc9,
  },
  wankcoin: {
    messagePrefix: '\u0018WankCoin Signed Message:\n',
    pubKeyHash: 0x00,
    wif: 0x80,
  },
  wearesatoshicoin: {
    messagePrefix: '\u0018WeAreSatoshiCoin Signed Message:\n',
    pubKeyHash: 0x87,
    wif: 0x97,
  },
  worldcoin: {
    messagePrefix: '\u0018WorldCoin Signed Message:\n',
    pubKeyHash: 0x49,
    wif: 0xc9,
  },
  xp: {
    messagePrefix: '\u0018XP Signed Message:\n',
    pubKeyHash: 0x4b,
    wif: 0xcb,
  },
  yenten: {
    messagePrefix: '\u0018Yenten Signed Message:\n',
    pubKeyHash: 0x4e,
    wif: 0x7b,
  },
};

module.exports = networks;
