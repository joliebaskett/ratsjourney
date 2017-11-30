(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"pfAnimation_atlas_", frames: [[0,405,374,367],[0,0,760,403],[376,405,130,127]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bigWheel = function() {
	this.spriteSheet = ss["pfAnimation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pennyFarthing = function() {
	this.spriteSheet = ss["pfAnimation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.smallWheel = function() {
	this.spriteSheet = ss["pfAnimation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smallWheel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.279,0.291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,36.3,37), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bigWheel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.347,0.347);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,129.9,127.5), null);


(lib.pf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pennyFarthing();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pf, new cjs.Rectangle(0,0,273.3,144.9), null);


// stage content:
(lib.pfAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// large
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-216,314.7,0.999,0.999,-113.3,0,0,64.9,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:63.7,scaleX:1,scaleY:1,rotation:-109.4,x:-204.4,y:314.6},0).wait(1).to({rotation:-105.5,x:-193.1},0).wait(1).to({rotation:-101.6,x:-181.8},0).wait(1).to({rotation:-97.7,x:-170.5},0).wait(1).to({rotation:-93.8,x:-159.2},0).wait(1).to({rotation:-89.9,x:-147.9},0).wait(1).to({rotation:-86,x:-136.6},0).wait(1).to({rotation:-82.1,x:-125.2,y:314.5},0).wait(1).to({rotation:-78.2,x:-113.9,y:314.6},0).wait(1).to({rotation:-74.3,x:-102.6},0).wait(1).to({rotation:-70.4,x:-91.3},0).wait(1).to({rotation:-66.5,x:-80},0).wait(1).to({rotation:-62.6,x:-68.7},0).wait(1).to({rotation:-58.7,x:-57.4,y:314.5},0).wait(1).to({rotation:-54.8,x:-46.1,y:314.6},0).wait(1).to({rotation:-50.9,x:-34.8,y:314.5},0).wait(1).to({rotation:-47,x:-23.5},0).wait(1).to({rotation:-43.1,x:-12.2,y:314.6},0).wait(1).to({rotation:-39.2,x:-0.9,y:314.5},0).wait(1).to({rotation:-35.3,x:10.4},0).wait(1).to({rotation:-31.4,x:21.7},0).wait(1).to({rotation:-27.5,x:33,y:314.4},0).wait(1).to({rotation:-23.6,x:44.3,y:314.5},0).wait(1).to({rotation:-19.7,x:55.6},0).wait(1).to({rotation:-15.8,x:66.9},0).wait(1).to({rotation:-11.9,x:78.1,y:314.4},0).wait(1).to({rotation:-8,x:89.4},0).wait(1).to({rotation:-4,x:100.7},0).wait(1).to({rotation:-0.1,x:112},0).wait(1).to({rotation:3.8,x:123.3,y:314.3},0).wait(1).to({rotation:7.7,x:134.6,y:314.4},0).wait(1).to({rotation:11.6,x:145.9,y:314.3},0).wait(1).to({rotation:15.5,x:157.2},0).wait(1).to({rotation:19.4,x:168.5},0).wait(1).to({rotation:23.3,x:179.8,y:314.2},0).wait(1).to({rotation:27.2,x:191.1},0).wait(1).to({rotation:31.1,x:202.4},0).wait(1).to({rotation:35,x:213.7},0).wait(1).to({rotation:38.9,x:225},0).wait(1).to({rotation:42.8,x:236.3,y:314.1},0).wait(1).to({rotation:46.7,x:247.6,y:314},0).wait(1).to({rotation:50.6,x:258.9,y:314.1},0).wait(1).to({rotation:54.5,x:270.2,y:314},0).wait(1).to({rotation:58.4,x:281.5},0).wait(1).to({rotation:62.3,x:292.8,y:313.9},0).wait(1).to({rotation:66.2,x:304.1},0).wait(1).to({rotation:70.1,x:315.4},0).wait(1).to({rotation:74,x:326.7,y:313.8},0).wait(1).to({rotation:77.9,x:338},0).wait(1).to({rotation:81.8,x:349.3},0).wait(1).to({rotation:85.7,x:360.7,y:313.7},0).wait(1).to({rotation:89.6,x:372},0).wait(1).to({rotation:93.5,x:383.3},0).wait(1).to({rotation:97.4,x:394.6,y:313.6},0).wait(1).to({rotation:101.3,x:406},0).wait(1).to({rotation:105.2,x:417.3},0).wait(1).to({rotation:109.1,x:428.5,y:313.5},0).wait(1).to({rotation:113,x:439.9},0).wait(1).to({rotation:116.9,x:451.2,y:313.4},0).wait(1).to({rotation:120.8,x:462.5},0).wait(1).to({rotation:124.7,x:473.9,y:313.3},0).wait(1).to({rotation:128.6,x:485.2},0).wait(1).to({rotation:132.5,x:496.5},0).wait(1).to({rotation:136.4,x:507.8},0).wait(1).to({rotation:140.3,x:519.2,y:313.2},0).wait(1).to({rotation:144.2,x:530.5},0).wait(1).to({rotation:148.1,x:541.8},0).wait(1).to({rotation:152,x:553.2},0).wait(1).to({rotation:155.9,x:564.4,y:313.1},0).wait(1).to({rotation:159.8,x:575.8},0).wait(1).to({rotation:163.7,x:587.1,y:313},0).wait(1).to({rotation:167.6,x:598.4,y:313.1},0).wait(1).to({rotation:171.5,x:609.8,y:313},0).wait(1).to({rotation:175.4,x:621.1},0).wait(1));

	// rat
	this.instance_1 = new lib.pf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-144.4,303.5,1,1,0,0,0,136.6,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-133},0).wait(1).to({x:-121.7},0).wait(1).to({x:-110.4},0).wait(1).to({x:-99.1},0).wait(1).to({x:-87.8},0).wait(1).to({x:-76.5},0).wait(1).to({x:-65.2},0).wait(1).to({x:-53.8},0).wait(1).to({x:-42.5},0).wait(1).to({x:-31.2},0).wait(1).to({x:-19.9},0).wait(1).to({x:-8.6},0).wait(1).to({x:2.7},0).wait(1).to({x:14},0).wait(1).to({x:25.4},0).wait(1).to({x:36.7},0).wait(1).to({x:48},0).wait(1).to({x:59.3},0).wait(1).to({x:70.6},0).wait(1).to({x:81.9},0).wait(1).to({x:93.2},0).wait(1).to({x:104.5},0).wait(1).to({x:115.9},0).wait(1).to({x:127.2},0).wait(1).to({x:138.4},0).wait(1).to({x:149.8},0).wait(1).to({x:161.1},0).wait(1).to({x:172.4},0).wait(1).to({x:183.7},0).wait(1).to({x:195},0).wait(1).to({x:206.3},0).wait(1).to({x:217.6},0).wait(1).to({x:228.9},0).wait(1).to({x:240.3},0).wait(1).to({x:251.6},0).wait(1).to({x:262.9},0).wait(1).to({x:274.2},0).wait(1).to({x:285.5},0).wait(1).to({x:296.8},0).wait(1).to({x:308.1},0).wait(1).to({x:319.5},0).wait(1).to({x:330.8},0).wait(1).to({x:342.1},0).wait(1).to({x:353.4},0).wait(1).to({x:364.7},0).wait(1).to({x:376},0).wait(1).to({x:387.3},0).wait(1).to({x:398.6},0).wait(1).to({x:410},0).wait(1).to({x:421.3},0).wait(1).to({x:432.6},0).wait(1).to({x:443.9},0).wait(1).to({x:455.2},0).wait(1).to({x:466.5},0).wait(1).to({x:477.8},0).wait(1).to({x:489.2},0).wait(1).to({x:500.5},0).wait(1).to({x:511.8},0).wait(1).to({x:523.1},0).wait(1).to({x:534.4},0).wait(1).to({x:545.7},0).wait(1).to({x:557},0).wait(1).to({x:568.4},0).wait(1).to({x:579.7},0).wait(1).to({x:591},0).wait(1).to({x:602.3},0).wait(1).to({x:613.6},0).wait(1).to({x:624.9},0).wait(1).to({x:636.2},0).wait(1).to({x:647.5},0).wait(1).to({x:658.9},0).wait(1).to({x:670.2},0).wait(1).to({x:681.5},0).wait(1).to({x:692.8},0).wait(1));

	// small
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62.9,358.5,0.999,0.999,-9,0,0,18,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:18.1,regY:18.5,scaleX:1,scaleY:1,rotation:12.3,x:-51.4,y:358.8},0).wait(1).to({rotation:33.8,x:-40.2},0).wait(1).to({rotation:55.2,x:-29,y:358.7},0).wait(1).to({rotation:76.7,x:-17.7},0).wait(1).to({rotation:98.2,x:-6.5,y:358.6},0).wait(1).to({rotation:119.7,x:4.8,y:358.5},0).wait(1).to({rotation:141.1,x:16.2,y:358.4},0).wait(1).to({rotation:162.6,x:27.6,y:358.3},0).wait(1).to({rotation:184.1,x:39},0).wait(1).to({rotation:205.6,x:50.4},0).wait(1).to({rotation:227,x:61.8},0).wait(1).to({rotation:248.5,x:73.2},0).wait(1).to({rotation:270,x:84.6,y:358.4},0).wait(1).to({rotation:291.4,x:95.9,y:358.5},0).wait(1).to({rotation:312.9,x:107.3,y:358.6},0).wait(1).to({rotation:334.4,x:118.5,y:358.8},0).wait(1).to({rotation:355.9,x:129.8},0).wait(1).to({rotation:377.3,x:141.1},0).wait(1).to({rotation:398.8,x:152.3},0).wait(1).to({rotation:420.3,x:163.5,y:358.7},0).wait(1).to({rotation:441.8,x:174.8},0).wait(1).to({rotation:463.2,x:186.1,y:358.5},0).wait(1).to({rotation:484.7,x:197.4},0).wait(1).to({rotation:506.2,x:208.7,y:358.4},0).wait(1).to({rotation:527.7,x:220.1,y:358.3},0).wait(1).to({rotation:549.1,x:231.6},0).wait(1).to({rotation:570.6,x:243},0).wait(1).to({rotation:592.1,x:254.4},0).wait(1).to({rotation:613.5,x:265.8,y:358.4},0).wait(1).to({rotation:635,x:277.2},0).wait(1).to({rotation:656.5,x:288.5,y:358.6},0).wait(1).to({rotation:678,x:299.9,y:358.7},0).wait(1).to({rotation:699.4,x:311.1},0).wait(1).to({rotation:720.9,x:322.3,y:358.8},0).wait(1).to({rotation:742.4,x:333.6},0).wait(1).to({rotation:763.9,x:344.8},0).wait(1).to({rotation:785.3,x:356.1,y:358.7},0).wait(1).to({rotation:806.8,x:367.3,y:358.6},0).wait(1).to({rotation:828.3,x:378.6},0).wait(1).to({rotation:849.7,x:390,y:358.4},0).wait(1).to({rotation:871.2,x:401.4},0).wait(1).to({rotation:892.7,x:412.7,y:358.3},0).wait(1).to({rotation:914.2,x:424.2,y:358.2},0).wait(1).to({rotation:935.6,x:435.6,y:358.3},0).wait(1).to({rotation:957.1,x:447},0).wait(1).to({rotation:978.6,x:458.4,y:358.4},0).wait(1).to({rotation:1000.1,x:469.7,y:358.5},0).wait(1).to({rotation:1021.5,x:481.1},0).wait(1).to({rotation:1043,x:492.4,y:358.7},0).wait(1).to({rotation:1064.5,x:503.7,y:358.8},0).wait(1).to({rotation:1086,x:514.9},0).wait(1).to({rotation:1107.4,x:526.1},0).wait(1).to({rotation:1128.9,x:537.3},0).wait(1).to({rotation:1150.4,x:548.6,y:358.7},0).wait(1).to({rotation:1171.8,x:559.8,y:358.6},0).wait(1).to({rotation:1193.3,x:571.2,y:358.5},0).wait(1).to({rotation:1214.8,x:582.5,y:358.4},0).wait(1).to({rotation:1236.3,x:593.9,y:358.3},0).wait(1).to({rotation:1257.7,x:605.3},0).wait(1).to({rotation:1279.2,x:616.8},0).wait(1).to({rotation:1300.7,x:628.1},0).wait(1).to({rotation:1322.2,x:639.6},0).wait(1).to({rotation:1343.6,x:651,y:358.4},0).wait(1).to({rotation:1365.1,x:662.3,y:358.5},0).wait(1).to({rotation:1386.6,x:673.7,y:358.6},0).wait(1).to({rotation:1408,x:684.9,y:358.7},0).wait(1).to({rotation:1429.5,x:696.2,y:358.8},0).wait(1).to({rotation:1451,x:707.4},0).wait(1).to({rotation:1472.5,x:718.6},0).wait(1).to({rotation:1493.9,x:729.9},0).wait(1).to({rotation:1515.4,x:741.1,y:358.7},0).wait(1).to({rotation:1536.9,x:752.5,y:358.6},0).wait(1).to({rotation:1558.4,x:763.7,y:358.5},0).wait(1).to({rotation:1579.8,x:775.1,y:358.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,429.9,292.3,169.5);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/pfAnimation_atlas_.png", id:"pfAnimation_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;