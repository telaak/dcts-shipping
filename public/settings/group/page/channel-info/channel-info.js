var a0_0x3f83e5=a0_0x1a23;(function(_0x3e7f5d,_0x5b4de2){var _0x5d8fc6=a0_0x1a23,_0x251a18=_0x3e7f5d();while(!![]){try{var _0x592e4f=parseInt(_0x5d8fc6(0x18f))/0x1*(parseInt(_0x5d8fc6(0x183))/0x2)+parseInt(_0x5d8fc6(0x188))/0x3*(parseInt(_0x5d8fc6(0x199))/0x4)+parseInt(_0x5d8fc6(0x192))/0x5*(-parseInt(_0x5d8fc6(0x184))/0x6)+parseInt(_0x5d8fc6(0x196))/0x7*(-parseInt(_0x5d8fc6(0x17b))/0x8)+-parseInt(_0x5d8fc6(0x18d))/0x9*(-parseInt(_0x5d8fc6(0x18e))/0xa)+-parseInt(_0x5d8fc6(0x17c))/0xb*(parseInt(_0x5d8fc6(0x18b))/0xc)+parseInt(_0x5d8fc6(0x17e))/0xd;if(_0x592e4f===_0x5b4de2)break;else _0x251a18['push'](_0x251a18['shift']());}catch(_0x157f91){_0x251a18['push'](_0x251a18['shift']());}}}(a0_0x4f65,0xaf374));var channelname=document[a0_0x3f83e5(0x19a)]('channel_name'),saveButton=document[a0_0x3f83e5(0x19a)](a0_0x3f83e5(0x17d)),serverconfigName,editChannel={};function a0_0x4f65(){var _0x344e07=['592dvSVHF','Unable\x20to\x20get\x20channel\x20info.\x20Please\x20try\x20to\x20reload\x20slowly\x20until\x20it\x20works.\x20Known\x20bug!','block','5gkTVvZ','style','NOt\x20same','none','27979nbZBRi','log','display','1916vSKgKg','getElementById','same','emit','userConnected','912XeMFLc','619201THyKby','settings_channel_save','8467355qDqZRB','getChannelInfo','updateChannelName','token','name','1866qpFoMP','1597002QxEBiy','value','channel_name','length','2409IxgLyY','msg','data','132bjgGoJ','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','342fqcpJy','123790jNJoaE'];a0_0x4f65=function(){return _0x344e07;};return a0_0x4f65();}socket[a0_0x3f83e5(0x19c)](a0_0x3f83e5(0x19d),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket['emit'](a0_0x3f83e5(0x17f),{'id':getID(),'token':getToken(),'channel':getUrlParams('id')},function(_0x167563){var _0x4fb636=a0_0x3f83e5;try{channelname=document['getElementById'](_0x4fb636(0x186)),saveButton=document[_0x4fb636(0x19a)](_0x4fb636(0x17d)),serverconfigName=_0x167563[_0x4fb636(0x18a)][_0x4fb636(0x182)],channelname[_0x4fb636(0x185)]=serverconfigName,editChannel=_0x167563,console[_0x4fb636(0x197)](_0x167563);}catch(_0x50c8af){console[_0x4fb636(0x197)]('Unable\x20to\x20get\x20Channel\x20Information'),console[_0x4fb636(0x197)](_0x50c8af),alert(_0x4fb636(0x190));}});function getToken(){var _0x17d58b=a0_0x3f83e5,_0x584dd4=getCookie(_0x17d58b(0x181));return _0x584dd4==null||_0x584dd4[_0x17d58b(0x187)]<=0x0?null:_0x584dd4;}function a0_0x1a23(_0x481102,_0x23f922){var _0x4f65fc=a0_0x4f65();return a0_0x1a23=function(_0x1a23e3,_0x3bb8fe){_0x1a23e3=_0x1a23e3-0x17b;var _0x1fc50e=_0x4f65fc[_0x1a23e3];return _0x1fc50e;},a0_0x1a23(_0x481102,_0x23f922);}function getID(){var _0x214a91=a0_0x3f83e5,_0x720231=getCookie('id');return _0x720231==null||_0x720231[_0x214a91(0x187)]!=0xc?(_0x720231=generateId(0xc),setCookie('id',_0x720231,0x168),_0x720231):_0x720231;}function updatePreview(){var _0x1bb370=a0_0x3f83e5;try{channel_name[_0x1bb370(0x185)]!=serverconfigName?(console['log'](_0x1bb370(0x194)),saveButton[_0x1bb370(0x193)][_0x1bb370(0x198)]=_0x1bb370(0x191)):(console[_0x1bb370(0x197)](_0x1bb370(0x19b)),saveButton['style'][_0x1bb370(0x198)]=_0x1bb370(0x195));}catch(_0x29256e){console[_0x1bb370(0x197)](_0x29256e);}}function saveSettings(){var _0x1ffd73=a0_0x3f83e5;try{channelname['value']!=null&&channelname['value'][_0x1ffd73(0x187)]>0x0&&channelname[_0x1ffd73(0x185)]!=serverconfigName&&socket[_0x1ffd73(0x19c)](_0x1ffd73(0x180),{'id':getID(),'token':getToken(),'channel':getUrlParams('id'),'name':channelname[_0x1ffd73(0x185)]},function(_0x1daee2){var _0x556378=_0x1ffd73;console[_0x556378(0x197)](_0x1daee2),alert(_0x1daee2[_0x556378(0x189)]);}),saveButton[_0x1ffd73(0x193)][_0x1ffd73(0x198)]=_0x1ffd73(0x195);}catch(_0x1f78b5){alert(_0x1ffd73(0x18c)+_0x1f78b5);return;}}