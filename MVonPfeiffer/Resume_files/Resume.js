// Created by iWeb 3.0.4 local-build-20120709

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,897),url:'Resume_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Resume_files/stroke_1.png'},{rect:new IWRect(2,-2,692,4),url:'Resume_files/stroke_2.png'},{rect:new IWRect(694,-2,5,4),url:'Resume_files/stroke_3.png'},{rect:new IWRect(694,2,5,897),url:'Resume_files/stroke_4.png'},{rect:new IWRect(694,899,5,4),url:'Resume_files/stroke_5.png'},{rect:new IWRect(2,899,692,4),url:'Resume_files/stroke_6.png'},{rect:new IWRect(-2,899,4,4),url:'Resume_files/stroke_7.png'}],new IWSize(696,901))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Resume_files/ResumeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
