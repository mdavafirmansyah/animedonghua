'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "c780beb89ae089c5e3b18d5f39e85926",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "390a0d09410158b73fcccefbca74750d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9c9f7ff26e90f78399652128220b9a5d",
".git/logs/refs/heads/main": "e1a796b06727f7c7ff922496f78634e3",
".git/logs/refs/remotes/origin/main": "450a832a9976f6102eba8d43a7be6c71",
".git/objects/00/34336a99d670f9cad9d392ffb039c2f2fb55c0": "55511a29c9c6f17d81980bc21c61a465",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/08/44d184318dfd9f087d0a22bc083287757c159b": "b52b5a92b1a235a30873bef98f1bb678",
".git/objects/0a/66e953aa7c01f2dbb632f3faac9b456052f94f": "93d79b1df1bce27845b3afd5f75598d4",
".git/objects/0a/d29803b2092f87edb899db8f8fe50928347d13": "8836764bdbc3d840cb21af6339413e12",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0e/6cd671ba7efe4f5e1ffd1ba9313f285a927819": "c091b05cb0e646f91d5c46d2670934d7",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/18/467c6c178669a06f6c2b483d7d847e6106074d": "eb5fd7864c24a6bc6ae8833965231938",
".git/objects/20/298f8f4aa6f8b60ad9f0093690bade717d8cd4": "e1a5d01b214e7dad0c7f6c07623af19c",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/ee77a0fd1a449a1c23d248246849dff191ef97": "8bdd4bc96dd75324b34bc4590085260f",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/30db4d87dd1eeeff57d6d6283679bf56a933b1": "1c5424d4508d19fb77398f52964a00a0",
".git/objects/2f/90a75cb82d61a384f274323d73136acd076b54": "56f80569a756fc9ee59d25d9e365336e",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/34/e69380c2e7eb0b8b6ac07971b02b78bed38a82": "a44b3879c677900d4eba1e10036516dd",
".git/objects/35/355fba610a1f86f9b72e55df59335b8a9979fb": "c0844a715d17dec6c756d15b960f584f",
".git/objects/35/45b4d09a6c9ba0e0c40a3aaed286a5714fe19d": "338572b4639fc5814b3b0e52d5e1df6f",
".git/objects/37/64fe9dff30ba5db2abe93cbc9937467a7eaaa8": "a7e4538cf0bc9f8dc569abb08de0b80f",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3e/cc74b5598bdc3ea0e88e67d35b3bcbcc8d89b5": "0c6c803fa12412dcff898b08cda52d9a",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/3f/db6f6b962678cc20eba27f33e7157201e2f50e": "de7133834f8e579a2b14ff97bc8c8d1f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/96843457116c555cf113e8e108887e84dc1e19": "39976401fc0a6ab73bcd5f993758a368",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/4a9d0399c873a1b352b21f8bc6018b8d3e1ec5": "d18d29820fb46900e21b367ed2025ea7",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/4174458ac7a3c977402a247af0293c38736199": "76155705a621b6b7e255469240a04f30",
".git/objects/55/cf95ee3a7d7be33c1960688538ef16b967541c": "6438fa1afa57962e4ae57ab962c0ef79",
".git/objects/58/251aa6905ddba3c501f4dbc76f16b1c0314339": "3ae4e4605dbe3646cc78a4e22b3a0273",
".git/objects/58/b3571d7aa0d0aed69de81c9dbde7376bc344df": "33cc38aa151e87a3f52eee0f8ecc0461",
".git/objects/5a/114b48ef2461a65d63e3a21188153f208e3d6d": "9b769aeada186a87d19e742f907c41c3",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/66/943442898ac5af0d54217feba80acdc57a64a4": "589fb99c829bb3b9674294077d6dd105",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/71/188ce53272f5dd14d0c0038c1b88984ed4f5bf": "35e158675f6540a5c201602931da3a27",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/81/0869b614e3c15ee884afd7078ff52552edaa9e": "6a1a258434baf27b39a77ed7371673a5",
".git/objects/84/865fceaee637e55be6f6ebeab67d0dbe7e3b4f": "2f63dca6e146a45a557f8add671406b1",
".git/objects/85/97997320e3820e0e824ee086557168ce82e855": "29d64760567d812136cbcd8236eb6c00",
".git/objects/85/fe4d42b9d7d5d6c22590877309cd49323a1ccc": "0226bf67a69f9f808b64f88c67314980",
".git/objects/86/505af0f042c080b5e738c1d43c05b02c19b3d3": "a3497f7e6c68af27ed6de847c0936a0b",
".git/objects/87/81967c98ad67040d10a471fb181e1799460ebd": "6bb9dffb647fd34dd7ffadb8c34423c6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a61806dcba768011f30632d1179abc4b6b844c": "02c1c450456b99ab21cdffb1afaec724",
".git/objects/8e/44350f485ab54b41eadc2e8c659c4c263e9357": "9ad4c2dadf5279112b0eb97a684b2c32",
".git/objects/91/1cab5f791a4961f8caf8b48c7ce2380c72e7dc": "e12a7b82942a145724a48f4f1ef41860",
".git/objects/93/0887a1d316b28ddf4789ee8476953537c79273": "b64a7bae978846b4b22f4076c2b475f9",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/31c47f4d37d1769844b9e9e83155fa4499aa51": "6cbb08ad90038d560d2593d2fc0d0086",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/031b95ed52df1a0a04682803c35ee74369d164": "d2d9a7c32fc4d07e3f938b165ead105a",
".git/objects/a3/b6a64f0b691f0377359101259b353dd570163d": "5d3df8ba7e4af5867566550f1f323ae6",
".git/objects/a7/77f6071877a2efdbdfa68d0c443d54cb312c6f": "3e54f46952e86696f3f203d5ec040d56",
".git/objects/ab/ce069a8e388a4b394e4bd29377e3659986e8fc": "a7dba36061c434ebeda3f3590111a9bd",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/b3/7579d062f4486222ec8ae38adfc2b27f2a7d9d": "c64724faa9bd942a1264c9b578833a6d",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/da6e452821ce192dc71b064ba11a69af36834e": "8c636db5fe1e7248bbe452ad57f17792",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/4e97890cb04252990e2129f636bf318aac73ad": "52f6029203fc639ad23684ceded80ddb",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/8e63e16135b4c836c8999943263405c0b1b82b": "ad8d30a243d91e247097ef36e6ac2a66",
".git/objects/c4/e78840c901d44b6afdff5fdc84f8e91c9d710d": "23dc85e1b0cddc605c928ca79d875e3c",
".git/objects/c5/be00ac00662df5aa3ec4bc9c7b4d09bdec23c3": "f106b11535493899d0b04934c9fd97fa",
".git/objects/c7/0e94946b448da5581809857d48624d88a253f9": "8ff94faa43bb969f8dc1dc2ffb06932d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/9f570dee877a0fd32709ff11abfe9f715529c1": "35652104d99225274ef861d037bafe81",
".git/objects/d0/8689f2fca5e6b6cc374f1954e16b57d7e69624": "6408e8905619cb61533466a6a39dcac2",
".git/objects/d3/3d3893a6dbc05dfcb578648f44ec8667b4ef32": "0b7de027acd9880713d92a3d3f3e4b59",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/07f8ce506edcab27b4ba960383784d06bbf021": "98ccc9d3e77df87bb78aa6074687363a",
".git/objects/d7/9234d7d42a3b196bd17f3a610a10a74f1af816": "fe9d68dbd9d60dc04b8b02df3549cf44",
".git/objects/db/7e06c29472ec61399f36aef121612a152a6f3a": "1eaf79b1d49949bea8a02ecf1c8d9ea4",
".git/objects/e0/259308bc70a2e08a3ce3630078e6e701e2c839": "4e55338b31eb2e6ecfe2321f4e4cd44f",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e8/9f2a17bbaef902eda053ee59dfb6541b384678": "b4ec7b90bf0f86d45ca4c9b6fae79103",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/e5f7a5a8eba9e3a2610a2b3cb8318385679e7c": "b6916aded95a0b9cc5b73c402cf17134",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f2/db2a93e363e266da588459bc797b855786a907": "f204746207121d210ba5fe7a8080c9f0",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/4ff51f3ee15cdf718cd8d995c2ea1fa580f42b": "2511c7622ab0e524bdb2312bfd741089",
".git/objects/f8/73bca8acc418bc415eedbb0187e5db28922d2a": "97276777ceaa0f5c841972e66b115407",
".git/objects/fa/7fd57fcb2f2f335dc5faeb65d26e03817d5a8f": "3fe9fafb942e4c4110744a9ff2ff6f35",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "3a432079d9f128bb5173dc96b5b49acf",
".git/refs/remotes/origin/main": "3a432079d9f128bb5173dc96b5b49acf",
"assets/AssetManifest.bin": "ca51c76d735deb5d92f29695e9df0e91",
"assets/AssetManifest.bin.json": "9f137cca64a244883c35d28d9d19c9c3",
"assets/AssetManifest.json": "0bda2cb6069dc14cec0ab437f217ac4b",
"assets/assets/images/attack_on_titan.jpg": "d2dd35c54e61a4efa649af114af8bbcc",
"assets/assets/images/beauty_blogger.jpg": "36ac7d642d062ae8c3826e5da898bb27",
"assets/assets/images/bemywife.jpg": "fb4599af32ca8ae50944ad56039665ad",
"assets/assets/images/BTTH.webp": "356b81cc3831ebc1b2c4c8886bbc6708",
"assets/assets/images/demon_slayer.jpg": "2e61a0259a7a6b57f30571b8433bb4ad",
"assets/assets/images/eclipse_illusion.jpg": "47bf8822dab5d28a0b1b2aefbe7dbf32",
"assets/assets/images/fairy_devil.jpg": "d4e9752c9b2da053406ef939237d6355",
"assets/assets/images/fog_hills.jpg": "affc71c9b8c39ccc31cfcba20c598a12",
"assets/assets/images/fox.webp": "344ce09f0e101c1e758dcca8c97d9b1b",
"assets/assets/images/frieren.jpg": "91b0058b26c3d20fbaec4f21f225c0e5",
"assets/assets/images/jujutsu_kaisen.jpg": "c61a34a2d4dc2382c6951490310c51b7",
"assets/assets/images/kings.webp": "b4f1b3ab83b6cc7751b8684b89e49371",
"assets/assets/images/login_ui.png": "8cd3dd557f97d49c32158c0265bb6532",
"assets/assets/images/lord_mysteries.jpeg": "71f763b68b4fc600c26380cbc5bd6319",
"assets/assets/images/martial_universe.webp": "11398b3335120d3e4cf6f3ec05cc9b13",
"assets/assets/images/naruto.jpg": "a84e79ad5d11991ee4a827ebd3284d70",
"assets/assets/images/one_piece.jpg": "c2fe8942f0426ab2499cf7305a689aef",
"assets/assets/images/perfect_world.jpg": "0816c98a00178d28283daaf3144b939b",
"assets/assets/images/record_immortal.webp": "9add06e8da062b5477dd979337145d36",
"assets/assets/images/renegade_immortal.webp": "48b804cd28425754be9514d7157156f0",
"assets/assets/images/shrouding_heavens.jpg": "5120dbbd5625c5a93fbfbb0e5061bdef",
"assets/assets/images/slay_god.jpg": "cc256afdf13b2526ad5ee6721c617789",
"assets/assets/images/SoulLand.webp": "de3f2c80c5812f61cc4c1239b286e2ec",
"assets/assets/images/spicy_girl.jpg": "e66a67347263ee34719201499665e97f",
"assets/assets/images/splashscreen.png": "8af18d2d2334fe90fb7750f728d9f44a",
"assets/assets/images/spy_family.jpg": "8a28219abc65bc32b328b121ec71ecaf",
"assets/assets/images/star.webp": "d0b942790169366fcfcf47eabf1ec2d0",
"assets/assets/images/swallowed.webp": "d406fb567e10639be0df95613ee6d841",
"assets/assets/images/sword.jpg": "64745c0752c2586da7613117a3782299",
"assets/assets/images/tales_hearding.webp": "3ea48791304aa0aa0e39d81b0dcfbc1e",
"assets/assets/images/the_outcast.jpg": "b744d6f683426d46fb7dc2d80d5ba924",
"assets/assets/images/white_cat.jpg": "d1abfd1a9f4f69ae888adbb76d0fbec9",
"assets/assets/images/yuru_camp.jpg": "056a66c8d003073fba104b1a9962643b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3e512d262892bb1ab45b21a78614297b",
"assets/NOTICES": "a1525aa12fe655bf44d9394da66da67d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "daef0b79dd845843145a3772b5bebd6b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f1c6eda84ffa40742aa9f76fb73d16df",
"/": "f1c6eda84ffa40742aa9f76fb73d16df",
"main.dart.js": "7e0c056dc14eb43d3c00cb0357e95601",
"manifest.json": "ebf312e0ddf2070ac11082fba2ac8920",
"version.json": "e0f01185025df5ae543f19dca72325db"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
