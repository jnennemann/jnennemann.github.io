// Created by iWeb 3.0.4 local-build-20151208

function createMediaStream_id4()
{return IWCreatePhotocast("file://localhost/Users/JamesN/Google%20Drive/Organizations/MVP/www/MVonPeiffer.com/Ad_Work_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('file://localhost/Users/JamesN/Google%20Drive/Organizations/MVP/www/MVonPeiffer.com',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('file://localhost/Users/JamesN/Google%20Drive/Organizations/MVP/www/MVonPeiffer.com',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(182,182),new IWSize(182,37),new IWSize(218,234),27,27,0,new IWSize(24,26)),new IWPhotoFrame([IWCreateImage('Ad_Work_files/Modern_C_TL.png'),IWCreateImage('Ad_Work_files/Modern_S_T.png'),IWCreateImage('Ad_Work_files/Modern_C_TR.png'),IWCreateImage('Ad_Work_files/Modern_S_R.png'),IWCreateImage('Ad_Work_files/Modern_C_BR.png'),IWCreateImage('Ad_Work_files/Modern_S_B.png'),IWCreateImage('Ad_Work_files/Modern_C_BL.png'),IWCreateImage('Ad_Work_files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,929),url:'Ad_Work_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Ad_Work_files/stroke_1.png'},{rect:new IWRect(2,-2,659,4),url:'Ad_Work_files/stroke_2.png'},{rect:new IWRect(661,-2,4,4),url:'Ad_Work_files/stroke_3.png'},{rect:new IWRect(661,2,4,929),url:'Ad_Work_files/stroke_4.png'},{rect:new IWRect(661,931,4,4),url:'Ad_Work_files/stroke_5.png'},{rect:new IWRect(2,931,659,4),url:'Ad_Work_files/stroke_6.png'},{rect:new IWRect(-2,931,4,4),url:'Ad_Work_files/stroke_7.png'}],new IWSize(663,933))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Ad_Work_files/Ad_WorkMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}
