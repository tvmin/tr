const _0x34a7f4=_0x5b2d;(function(_0x1f50ff,_0x1c66ea){const _0x2a1abb=_0x5b2d,_0x29faff=_0x1f50ff();while(!![]){try{const _0x35a00a=parseInt(_0x2a1abb(0xca))/0x1+parseInt(_0x2a1abb(0xfe))/0x2*(parseInt(_0x2a1abb(0xe1))/0x3)+-parseInt(_0x2a1abb(0xfc))/0x4+-parseInt(_0x2a1abb(0xd4))/0x5*(-parseInt(_0x2a1abb(0xf5))/0x6)+parseInt(_0x2a1abb(0xe4))/0x7+parseInt(_0x2a1abb(0xe6))/0x8+parseInt(_0x2a1abb(0xd7))/0x9*(-parseInt(_0x2a1abb(0xd9))/0xa);if(_0x35a00a===_0x1c66ea)break;else _0x29faff['push'](_0x29faff['shift']());}catch(_0x4002ed){_0x29faff['push'](_0x29faff['shift']());}}}(_0x1424,0xc9a44),document[_0x34a7f4(0xdc)](_0x34a7f4(0xd2))['addEventListener']('click',function(){const _0xbb2d7a=_0x34a7f4,_0x3692d3=document[_0xbb2d7a(0xdc)](_0xbb2d7a(0xfd));if(_0x3692d3[_0xbb2d7a(0xe5)]['length']===0x0){alert('Please\x20select\x20a\x20CSV\x20file.');return;}const _0x3fa561=_0x3692d3['files'][0x0],_0x47dd9c=new FileReader();_0x47dd9c['onload']=function(_0x48653b){const _0x476f56=_0xbb2d7a,_0x30150b=_0x48653b[_0x476f56(0xd8)][_0x476f56(0xde)],_0x18fb76=convertCsvToDxf(_0x30150b);downloadDxf(_0x18fb76);},_0x47dd9c[_0xbb2d7a(0xdd)](_0x3fa561);}));function _0x1424(){const _0xebe4c6=['please\x20save\x20the\x20DXF\x20file\x20which\x20is\x20sent\x20to\x20your\x20downloads\x20section!','5890899ObPeRT','files','508880SHdqre','createObjectURL','substring','click','SECTION','TABLES','block','display','.dxf','HEADER','style','\x0a30\x0a0.0','push','message','0\x0aTEXT\x0a8\x0a0\x0a10\x0a','6VlbUkp','EOF','split','trim','application/dxf','textContent','\x0a30\x0a0.0\x0a11\x0a','904072wHyaWN','csvFile','1073588DqmdkG','ENDTAB','ENDSEC','329305VKEWTe','\x0a31\x0a0.0','\x0a21\x0a','innerText','download','\x0a30\x0a0.0\x0a1\x0a','0\x0aLINE\x0a8\x0a0\x0a10\x0a','appendChild','convertButton','ENTITIES','1689455NRTuSe','length','Download\x20DXF','3171645JPwEqk','target','30jBfUhq','BLOCKS','name','getElementById','readAsText','result','removeChild','ENDBLK','3IRBPVq','\x0a40\x0a1.0'];_0x1424=function(){return _0xebe4c6;};return _0x1424();}function _0x5b2d(_0x5e2933,_0x132a5e){const _0x14247f=_0x1424();return _0x5b2d=function(_0x5b2d3c,_0x3cd8c2){_0x5b2d3c=_0x5b2d3c-0xc9;let _0x5a174f=_0x14247f[_0x5b2d3c];return _0x5a174f;},_0x5b2d(_0x5e2933,_0x132a5e);}function convertCsvToDxf(_0x473434){const _0x3d09c1=_0x34a7f4,_0x1b392c=_0x473434[_0x3d09c1(0xf8)]()['split']('\x0a'),_0x1d7caa=['0','SECTION','2',_0x3d09c1(0xef),'0',_0x3d09c1(0xc9),'0',_0x3d09c1(0xeb),'0',_0x3d09c1(0xff),'0',_0x3d09c1(0xda),'0',_0x3d09c1(0xe0),'0',_0x3d09c1(0xea),'2',_0x3d09c1(0xd3)];let _0x1945c2=[];const _0x18b3fd=[];for(let _0x56edc3 of _0x1b392c['slice'](0x0)){const [_0x240e75,_0x3a9524,_0x1990de]=_0x56edc3[_0x3d09c1(0xf7)](',')['map'](_0x14ff41=>_0x14ff41[_0x3d09c1(0xf8)]());if(_0x240e75&&!isNaN(_0x3a9524)&&!isNaN(_0x1990de)){const _0x59c12a=parseFloat(_0x3a9524),_0x5f21f4=parseFloat(_0x1990de);_0x18b3fd[_0x3d09c1(0xf2)]({'id':_0x240e75,'x':_0x59c12a,'y':_0x5f21f4}),_0x1945c2[_0x3d09c1(0xf2)]('0\x0aPOINT\x0a8\x0a0\x0a10\x0a'+_0x59c12a+'\x0a20\x0a'+_0x5f21f4+_0x3d09c1(0xf1)),_0x1945c2[_0x3d09c1(0xf2)](_0x3d09c1(0xf4)+_0x59c12a+'\x0a20\x0a'+_0x5f21f4+_0x3d09c1(0xcf)+_0x240e75+_0x3d09c1(0xe2));}}for(let _0x484975=0x0;_0x484975<_0x18b3fd[_0x3d09c1(0xd5)];_0x484975++){const _0x18b7ee=_0x18b3fd[_0x484975],_0x5494fe=_0x18b3fd[(_0x484975+0x1)%_0x18b3fd[_0x3d09c1(0xd5)]];_0x1945c2[_0x3d09c1(0xf2)](_0x3d09c1(0xd0)+_0x18b7ee['x']+'\x0a20\x0a'+_0x18b7ee['y']+_0x3d09c1(0xfb)+_0x5494fe['x']+_0x3d09c1(0xcc)+_0x5494fe['y']+_0x3d09c1(0xcb));}_0x1945c2[_0x3d09c1(0xf2)]('0\x0aENDSEC');const _0x43f511=['0',_0x3d09c1(0xf6)],_0x4a8c6a=[..._0x1d7caa,..._0x1945c2,..._0x43f511]['join']('\x0a');return _0x4a8c6a;}function downloadDxf(_0x204dd1){const _0x2c5caa=_0x34a7f4,_0x345ee4=document['getElementById'](_0x2c5caa(0xfd)),_0x8ccd4d=_0x345ee4[_0x2c5caa(0xe5)][0x0][_0x2c5caa(0xdb)],_0x3d94eb=_0x8ccd4d[_0x2c5caa(0xe8)](0x0,_0x8ccd4d[_0x2c5caa(0xd5)]-0x4),_0x5d2425=new Blob([_0x204dd1],{'type':_0x2c5caa(0xf9)}),_0x236576=URL[_0x2c5caa(0xe7)](_0x5d2425),_0x3798c0=document['createElement']('a');_0x3798c0['href']=_0x236576,_0x3798c0[_0x2c5caa(0xce)]=_0x3d94eb+_0x2c5caa(0xee),_0x3798c0[_0x2c5caa(0xf0)][_0x2c5caa(0xed)]=_0x2c5caa(0xec),_0x3798c0[_0x2c5caa(0xcd)]=_0x2c5caa(0xd6),document['body'][_0x2c5caa(0xd1)](_0x3798c0),_0x3798c0[_0x2c5caa(0xe9)](),URL['revokeObjectURL'](_0x236576),document['body'][_0x2c5caa(0xdf)](_0x3798c0),document[_0x2c5caa(0xdc)](_0x2c5caa(0xf3))[_0x2c5caa(0xfa)]=_0x2c5caa(0xe3);}