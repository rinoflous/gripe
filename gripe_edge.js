/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'reproducao_animado',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'virus_animado',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'abertura',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'espirrandoabertura_animado3',
            type:'rect',
            rect:['-713px','0px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'virus_animado',
            symbolName:'virus_animado'
         },
         {
            id:'reproducao_animado',
            symbolName:'reproducao_animado'
         },
         {
            id:'abertura',
            symbolName:'abertura'
         },
         {
            id:'espirrandoabertura_animado3',
            symbolName:'espirrandoabertura_animado'
         }
         ]
      },
   states: {
      "Base State": {
         "${_espirrandoabertura_animado3}": [
            ["style", "left", '-713px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '917px'],
            ["style", "height", '571px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"abertura": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['290px','117px','337px','337px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(160,82,82,1.00)']
   },
   {
      rect: ['0px','0px','917px','571px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'virusbackground_animado',
      type: 'rect',
      rect: ['758','496','auto','auto','auto','auto']
   },
   {
      rect: ['0px','0px','917px','571px','auto','auto'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'fundocinza',
      opacity: 0.90625,
      type: 'rect',
      fill: ['rgba(91,91,91,1.00)']
   },
   {
      rect: ['438px','259px','43px','42px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      id: 'transmissao_animado',
      type: 'rect',
      clip: ['rect(0px 957px 571px 0px)'],
      rect: ['-335px','0','auto','auto','auto','auto']
   },
   {
      rect: ['47px','-124px','827px','820px','auto','auto'],
      transform: [[],[],[],['0.65','0.65']],
      id: 'virus_completo',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/virus_completo.png','0px','0px']
   },
   {
      id: 'texto_introducao',
      type: 'image',
      rect: ['43px','203px','160px','124px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_introducao.png','0px','0px']
   },
   {
      id: 'info',
      type: 'image',
      rect: ['479px','110px','34px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/info.png','0px','0px']
   },
   {
      id: 'infoCopy',
      type: 'image',
      rect: ['674px','108px','34px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/info.png','0px','0px']
   },
   {
      id: 'infoCopy2',
      type: 'image',
      rect: ['621px','373px','34px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/info.png','0px','0px']
   },
   {
      id: 'infoCopy3',
      type: 'image',
      rect: ['443px','376px','34px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/info.png','0px','0px']
   },
   {
      id: 'textoproteina_animado',
      type: 'rect',
      clip: ['rect(0px 312px 94px 0px)'],
      rect: ['472px','13px','auto','auto','auto','auto']
   },
   {
      id: 'textoreceptor_animado',
      type: 'rect',
      clip: ['rect(0px 280px 125px 58px)'],
      rect: ['626px','137px','auto','auto','auto','auto']
   },
   {
      id: 'textosaida_animado',
      type: 'rect',
      clip: ['rect(0px 280px 119px 20px)'],
      rect: ['616px','340px','auto','auto','auto','auto']
   },
   {
      id: 'textorna_animado',
      type: 'rect',
      clip: ['rect(34px 268px 207px 0px)'],
      rect: ['497px','358px','auto','auto','auto','auto']
   },
   {
      id: 'avanca_animado',
      type: 'rect',
      rect: ['853px','513px','auto','auto','auto','auto']
   },
   {
      id: 'alerta_animado',
      type: 'rect',
      rect: ['460px','94px','auto','auto','auto','auto']
   },
   {
      id: 'alerta_animado3',
      type: 'rect',
      rect: ['655px','92px','auto','auto','auto','auto']
   },
   {
      id: 'alerta_animado2',
      type: 'rect',
      rect: ['602px','357px','auto','auto','auto','auto']
   },
   {
      id: 'alerta_animado4',
      type: 'rect',
      rect: ['423px','360px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'textoreceptor_animado',
      symbolName: 'textoreceptor_animado'
   },
   {
      id: 'textoproteina_animado',
      symbolName: 'textoproteina_animado'
   },
   {
      id: 'textosaida_animado',
      symbolName: 'textosaida_animado'
   },
   {
      id: 'alerta_animado4',
      symbolName: 'alerta_animado'
   },
   {
      id: 'alerta_animado2',
      symbolName: 'alerta_animado'
   },
   {
      id: 'alerta_animado',
      symbolName: 'alerta_animado'
   },
   {
      id: 'transmissao_animado',
      symbolName: 'transmissao_animado'
   },
   {
      id: 'textorna_animado',
      symbolName: 'textorna_animado'
   },
   {
      id: 'alerta_animado3',
      symbolName: 'alerta_animado'
   },
   {
      id: 'avanca_animado',
      symbolName: 'avanca_animado'
   },
   {
      id: 'virusbackground_animado',
      symbolName: 'virusbackground_animado'
   }   ]
   },
   states: {
      "Base State": {
         "${_fundocinza}": [
            ["color", "background-color", 'rgba(91,91,91,1.00)'],
            ["style", "opacity", '0']
         ],
         "${_alerta_animado}": [
            ["style", "left", '460px'],
            ["style", "top", '94px']
         ],
         "${_textorna_animado}": [
            ["style", "top", '358px'],
            ["style", "left", '497px'],
            ["style", "clip", [34,268,207,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_textoproteina_animado}": [
            ["style", "top", '13px'],
            ["style", "left", '472px'],
            ["style", "clip", [0,312,94,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_transmissao_animado}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,957,571,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-335px']
         ],
         "${_alerta_animado4}": [
            ["style", "left", '423px'],
            ["style", "top", '360px']
         ],
         "${symbolSelector}": [
            ["style", "height", '571px'],
            ["style", "width", '917px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)']
         ],
         "${_alerta_animado2}": [
            ["style", "left", '602px'],
            ["style", "top", '357px']
         ],
         "${_infoCopy2}": [
            ["style", "top", '373px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '621px']
         ],
         "${_virus_completo}": [
            ["style", "top", '-124px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '1'],
            ["style", "left", '47px']
         ],
         "${_info}": [
            ["style", "top", '110px'],
            ["style", "opacity", '0'],
            ["style", "left", '479px']
         ],
         "${_infoCopy3}": [
            ["style", "top", '376px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '443px']
         ],
         "${_textosaida_animado}": [
            ["style", "top", '340px'],
            ["style", "left", '616px'],
            ["style", "clip", [0,280,119,20], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Ellipse}": [
            ["style", "left", '290px'],
            ["style", "top", '117px']
         ],
         "${_texto_introducao}": [
            ["style", "top", '203px'],
            ["style", "opacity", '0'],
            ["style", "left", '43px']
         ],
         "${_textoreceptor_animado}": [
            ["style", "top", '137px'],
            ["style", "left", '626px'],
            ["style", "clip", [0,280,125,58], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Ellipse6}": [
            ["style", "top", '259px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "height", '42px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '438px'],
            ["style", "width", '43px']
         ],
         "${_avanca_animado}": [
            ["style", "left", '853px'],
            ["style", "top", '513px']
         ],
         "${_alerta_animado3}": [
            ["style", "left", '655px'],
            ["style", "top", '92px']
         ],
         "${_infoCopy}": [
            ["style", "top", '108px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '674px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8597,
         autoPlay: true,
         timeline: [
            { id: "eid169", tween: [ "style", "${_info}", "opacity", '1', { fromValue: '0.000000'}], position: 1575, duration: 601 },
            { id: "eid332", tween: [ "transform", "${_Ellipse6}", "scaleX", '1.3', { fromValue: '0'}], position: 5097, duration: 250 },
            { id: "eid334", tween: [ "transform", "${_Ellipse6}", "scaleX", '1', { fromValue: '1.3'}], position: 5347, duration: 250 },
            { id: "eid1681", tween: [ "transform", "${_virus_completo}", "scaleX", '0.65', { fromValue: '0'}], position: 500, duration: 579, easing: "swing" },
            { id: "eid1689", tween: [ "transform", "${_virus_completo}", "scaleX", '0', { fromValue: '0.65'}], position: 4597, duration: 500 },
            { id: "eid333", tween: [ "transform", "${_Ellipse6}", "scaleY", '1.3', { fromValue: '0'}], position: 5097, duration: 250 },
            { id: "eid335", tween: [ "transform", "${_Ellipse6}", "scaleY", '1', { fromValue: '1.3'}], position: 5347, duration: 250 },
            { id: "eid172", tween: [ "style", "${_infoCopy3}", "opacity", '1', { fromValue: '0.000000'}], position: 2212, duration: 601 },
            { id: "eid340", tween: [ "style", "${_Ellipse6}", "left", '971px', { fromValue: '438px'}], position: 5597, duration: 2067 },
            { id: "eid482", tween: [ "style", "${_transmissao_animado}", "left", '37px', { fromValue: '-335px'}], position: 7664, duration: 433, easing: "swing" },
            { id: "eid483", tween: [ "style", "${_transmissao_animado}", "left", '0px', { fromValue: '37px'}], position: 8097, duration: 500, easing: "swing" },
            { id: "eid481", tween: [ "style", "${_transmissao_animado}", "top", '0px', { fromValue: '0px'}], position: 7664, duration: 0 },
            { id: "eid170", tween: [ "style", "${_infoCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1750, duration: 601 },
            { id: "eid341", tween: [ "style", "${_Ellipse6}", "top", '346px', { fromValue: '259px'}], position: 5597, duration: 2067 },
            { id: "eid91", tween: [ "style", "${_texto_introducao}", "opacity", '1', { fromValue: '0.000000'}], position: 944, duration: 375 },
            { id: "eid171", tween: [ "style", "${_infoCopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 1952, duration: 601 },
            { id: "eid164", tween: [ "style", "${_fundocinza}", "opacity", '0.91', { fromValue: '0.000000'}], position: 0, duration: 444 },
            { id: "eid1682", tween: [ "transform", "${_virus_completo}", "scaleY", '0.65', { fromValue: '0'}], position: 500, duration: 579, easing: "swing" },
            { id: "eid1690", tween: [ "transform", "${_virus_completo}", "scaleY", '0', { fromValue: '0.65'}], position: 4597, duration: 500 },
            { id: "eid1676", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_virusbackground_animado}', [] ], ""], position: 10 },
            { id: "eid1716", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_alerta_animado}', [] ], ""], position: 1575 },
            { id: "eid1717", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_alerta_animado3}', [] ], ""], position: 1810.1039204516 },
            { id: "eid1718", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_alerta_animado2}', [] ], ""], position: 2050.8571634591 },
            { id: "eid1719", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_alerta_animado4}', [] ], ""], position: 2250 },
            { id: "eid2416", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_avanca_animado}', [] ], ""], position: 2500 },
            { id: "eid484", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_transmissao_animado}', [] ], ""], position: 8597 }         ]
      }
   }
},
"virus_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','917px','571px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'texto_introducao',
      type: 'image',
      rect: ['56px','197px','160px','124px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_introducao.png','0px','0px']
   },
   {
      id: 'virus',
      type: 'image',
      rect: ['221px','55px','471px','462px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus.png','0px','0px']
   },
   {
      id: 'avanca2',
      type: 'image',
      rect: ['106px','311px','46px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/avanca.png','0px','0px']
   },
   {
      id: 'info',
      type: 'image',
      rect: ['472px','128px','34px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/info.png','0px','0px']
   },
   {
      id: 'infoCopy',
      type: 'image',
      rect: ['647px','136px','34px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/info.png','0px','0px']
   },
   {
      id: 'infoCopy3',
      type: 'image',
      rect: ['439px','366px','34px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/info.png','0px','0px']
   },
   {
      id: 'textoproteina_animado',
      type: 'rect',
      rect: ['476','18','auto','auto','auto','auto']
   },
   {
      id: 'textoreceptor_animado',
      type: 'rect',
      rect: ['613','169','auto','auto','auto','auto']
   },
   {
      id: 'textosaida_animado',
      type: 'rect',
      rect: ['601','327','auto','auto','auto','auto']
   },
   {
      id: 'textorna_animado',
      type: 'rect',
      rect: ['497','351','auto','auto','auto','auto']
   },
   {
      id: 'infoCopy2',
      type: 'image',
      rect: ['601px','372px','34px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/info.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'textoreceptor_animado',
      symbolName: 'textoreceptor_animado'
   },
   {
      id: 'textoproteina_animado',
      symbolName: 'textoproteina_animado'
   },
   {
      id: 'textorna_animado',
      symbolName: 'textorna_animado'
   },
   {
      id: 'textosaida_animado',
      symbolName: 'textosaida_animado'
   }   ]
   },
   states: {
      "Base State": {
         "${_virus}": [
            ["transform", "scaleX", '0'],
            ["style", "left", '221px'],
            ["transform", "scaleY", '0'],
            ["style", "top", '55px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_info}": [
            ["style", "top", '128px'],
            ["style", "opacity", '0'],
            ["style", "left", '472px']
         ],
         "${_texto_introducao}": [
            ["style", "left", '56px'],
            ["style", "top", '197px']
         ],
         "${_infoCopy3}": [
            ["style", "top", '366px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '439px']
         ],
         "${_infoCopy}": [
            ["style", "top", '136px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '647px']
         ],
         "${symbolSelector}": [
            ["style", "height", '571px'],
            ["style", "width", '917px']
         ],
         "${_infoCopy2}": [
            ["style", "top", '372px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '601px']
         ],
         "${_avanca2}": [
            ["style", "left", '106px'],
            ["style", "top", '311px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2610,
         autoPlay: true,
         timeline: [
            { id: "eid19", tween: [ "style", "${_info}", "opacity", '1', { fromValue: '0.000000'}], position: 885, duration: 500 },
            { id: "eid20", tween: [ "style", "${_infoCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1290, duration: 500 },
            { id: "eid8", tween: [ "transform", "${_virus}", "scaleX", '1.4', { fromValue: '0'}], position: 385, duration: 183 },
            { id: "eid10", tween: [ "transform", "${_virus}", "scaleX", '1', { fromValue: '1.4'}], position: 568, duration: 183 },
            { id: "eid21", tween: [ "style", "${_infoCopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 1700, duration: 500 },
            { id: "eid22", tween: [ "style", "${_infoCopy3}", "opacity", '1', { fromValue: '0.000000'}], position: 2110, duration: 500 },
            { id: "eid9", tween: [ "transform", "${_virus}", "scaleY", '1.4', { fromValue: '0'}], position: 385, duration: 183 },
            { id: "eid11", tween: [ "transform", "${_virus}", "scaleY", '1', { fromValue: '1.4'}], position: 568, duration: 183 }         ]
      }
   }
},
"gripado_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','895px','617px','auto','auto'],
      id: 'sprite_gripado_maior',
      type: 'image',
      clip: ['rect(0px 507px 617px 0px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_gripado_maior.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sprite_gripado_maior}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,507,617,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '617px'],
            ["style", "width", '895px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid12", tween: [ "style", "${_sprite_gripado_maior}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_sprite_gripado_maior}", "background-position", [-376,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 },
            { id: "eid14", tween: [ "style", "${_sprite_gripado_maior}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-376,0]}], position: 1000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_sprite_gripado_maior}", "background-position", [-376,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1500, duration: 0 }         ]
      }
   }
},
"reproducao_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','917px','571px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '571px'],
            ["style", "width", '917px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"textoproteina_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'texto_proteina2',
      type: 'image',
      rect: ['0px','0px','312px','128px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_proteina.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_texto_proteina2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "overflow", 'visible']
         ],
         "${symbolSelector}": [
            ["style", "height", '128px'],
            ["style", "width", '312px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 375,
         autoPlay: true,
         timeline: [
            { id: "eid33", tween: [ "style", "${_texto_proteina2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 375 }         ]
      }
   }
},
"textoreceptor_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'texto_receptor',
      type: 'image',
      rect: ['0px','0px','280px','125px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_receptor.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_texto_receptor}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '125px'],
            ["style", "width", '280px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 375,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "style", "${_texto_receptor}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 375 }         ]
      }
   }
},
"textosaida_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'texto_saida',
      type: 'image',
      rect: ['0px','0px','280px','119px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_saida.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_texto_saida}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '119px'],
            ["style", "width", '280px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 375,
         autoPlay: true,
         timeline: [
            { id: "eid29", tween: [ "style", "${_texto_saida}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 375 }         ]
      }
   }
},
"textorna_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'texto_RNA',
      type: 'image',
      rect: ['0px','0px','268px','207px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_RNA.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '207px'],
            ["style", "width", '268px']
         ],
         "${_texto_RNA}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 375,
         autoPlay: true,
         timeline: [
            { id: "eid26", tween: [ "style", "${_texto_RNA}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 375 }         ]
      }
   }
},
"virusbase_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'virus_haste2',
      type: 'image',
      rect: ['1px','-13px','812px','808px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_haste.png','0px','0px']
   },
   {
      id: 'virus_base',
      type: 'image',
      rect: ['0px','0px','820px','825px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_base.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_virus_haste2}": [
            ["style", "top", '-13px'],
            ["style", "-webkit-transform-origin", [50.4,52.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.4,52.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.4,52.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.4,52.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.4,52.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_base}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '825px'],
            ["style", "width", '820px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid95", tween: [ "transform", "${_virus_haste2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 10000 }         ]
      }
   }
},
"virusbackground_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy7',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy13',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy12',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy8',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy6',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy5',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy14',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy9',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-868px','-451px','24px','24px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-862px','-411px','13px','13px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-862px','-411px','13px','13px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-862px','-411px','13px','13px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-862px','-411px','13px','13px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-862px','-411px','13px','13px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-862px','-411px','13px','13px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-862px','-411px','13px','13px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-934px','-483px','33px','33px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-934px','-483px','33px','33px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse4Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-934px','-483px','33px','33px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse4Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-934px','-483px','33px','33px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse4Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-934px','-483px','33px','33px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse4Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-934px','-483px','33px','33px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse4Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-934px','-483px','33px','33px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse4Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-934px','-483px','33px','33px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse4Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-1018px','-451px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-1018px','-451px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-1018px','-451px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-1018px','-451px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-1018px','-451px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse4Copy5}": [
            ["style", "top", '-31px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-854px']
         ],
         "${_Ellipse2Copy9}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-810px'],
            ["style", "top", '2px']
         ],
         "${_Ellipse3Copy3}": [
            ["style", "top", '44px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-762px']
         ],
         "${_Ellipse5Copy2}": [
            ["style", "top", '-166px'],
            ["style", "height", '46px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-809px'],
            ["style", "width", '46px']
         ],
         "${_Ellipse3}": [
            ["style", "top", '-202px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-762px']
         ],
         "${_Ellipse4Copy2}": [
            ["style", "top", '115px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-810px']
         ],
         "${_Ellipse3Copy9}": [
            ["style", "top", '-279px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-837px']
         ],
         "${_Ellipse4Copy}": [
            ["style", "top", '-264px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-796px']
         ],
         "${_Ellipse3Copy2}": [
            ["style", "top", '-100px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-837px']
         ],
         "${_Ellipse3Copy}": [
            ["style", "top", '-279px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-837px']
         ],
         "${_Ellipse2Copy13}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-889px'],
            ["style", "top", '-55px']
         ],
         "${_Ellipse5}": [
            ["style", "top", '-231px'],
            ["style", "height", '46px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-860px'],
            ["style", "width", '46px']
         ],
         "${_Ellipse2Copy2}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-798px'],
            ["style", "top", '-179px']
         ],
         "${_Ellipse5Copy4}": [
            ["style", "top", '-166px'],
            ["style", "height", '46px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-809px'],
            ["style", "width", '46px']
         ],
         "${symbolSelector}": [
            ["style", "height", '125px'],
            ["style", "width", '127px']
         ],
         "${_Ellipse2Copy7}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-842px'],
            ["style", "top", '-167px']
         ],
         "${_Ellipse2Copy14}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-878px'],
            ["style", "top", '-129px']
         ],
         "${_Ellipse4Copy7}": [
            ["style", "top", '-100px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-813px']
         ],
         "${_Ellipse2Copy12}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-798px'],
            ["style", "top", '-179px']
         ],
         "${_Ellipse4Copy4}": [
            ["style", "top", '-133px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-810px']
         ],
         "${_Ellipse3Copy7}": [
            ["style", "top", '-185px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-902px']
         ],
         "${_Ellipse3Copy8}": [
            ["style", "top", '25px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-870px']
         ],
         "${_Ellipse2Copy}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-762px'],
            ["style", "top", '-316px']
         ],
         "${_Ellipse4Copy3}": [
            ["style", "top", '-100px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-813px']
         ],
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-793px'],
            ["style", "top", '-357px']
         ],
         "${_Ellipse4Copy6}": [
            ["style", "top", '-264px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-796px']
         ],
         "${_Ellipse4}": [
            ["style", "top", '-272px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-893px']
         ],
         "${_Ellipse5Copy}": [
            ["style", "top", '-357px'],
            ["style", "height", '46px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-866px'],
            ["style", "width", '46px']
         ],
         "${_Ellipse5Copy3}": [
            ["style", "top", '50px'],
            ["style", "height", '46px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-843px'],
            ["style", "width", '46px']
         ],
         "${_Ellipse2Copy5}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-878px'],
            ["style", "top", '-129px']
         ],
         "${_Ellipse2Copy8}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-902px'],
            ["style", "top", '-316px']
         ],
         "${_Ellipse2Copy3}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-805px'],
            ["style", "top", '-36px']
         ],
         "${_Ellipse2Copy6}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-810px'],
            ["style", "top", '-316px']
         ],
         "${_Ellipse2Copy4}": [
            ["color", "background-color", 'rgba(70,196,102,1.00)'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-889px'],
            ["style", "top", '-55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 16000,
         autoPlay: false,
         timeline: [
            { id: "eid329", tween: [ "style", "${_Ellipse2Copy14}", "top", '-217px', { fromValue: '-129px'}], position: 8802, duration: 7198 },
            { id: "eid261", tween: [ "style", "${_Ellipse2Copy5}", "left", '478px', { fromValue: '-878px'}], position: 0, duration: 7198 },
            { id: "eid316", tween: [ "style", "${_Ellipse2Copy12}", "left", '204px', { fromValue: '-798px'}], position: 7198, duration: 7198 },
            { id: "eid206", tween: [ "style", "${_Ellipse4}", "left", '504px', { fromValue: '-893px'}], position: 1350, duration: 7198 },
            { id: "eid304", tween: [ "style", "${_Ellipse4Copy5}", "top", '-193px', { fromValue: '-31px'}], position: 6043, duration: 7198 },
            { id: "eid265", tween: [ "style", "${_Ellipse4Copy3}", "left", '419px', { fromValue: '-813px'}], position: 0, duration: 7198 },
            { id: "eid243", tween: [ "style", "${_Ellipse4Copy}", "top", '-339px', { fromValue: '-264px'}], position: 1175, duration: 7198 },
            { id: "eid249", tween: [ "style", "${_Ellipse5Copy2}", "top", '-483px', { fromValue: '-166px'}], position: 0, duration: 7198 },
            { id: "eid314", tween: [ "style", "${_Ellipse4Copy7}", "top", '-332px', { fromValue: '-100px'}], position: 8802, duration: 7198 },
            { id: "eid325", tween: [ "style", "${_Ellipse3Copy9}", "left", '465px', { fromValue: '-837px'}], position: 2249, duration: 7198 },
            { id: "eid305", tween: [ "style", "${_Ellipse4Copy5}", "left", '419px', { fromValue: '-854px'}], position: 6043, duration: 7198 },
            { id: "eid255", tween: [ "style", "${_Ellipse4Copy2}", "top", '82px', { fromValue: '115px'}], position: 0, duration: 7198 },
            { id: "eid252", tween: [ "style", "${_Ellipse3Copy2}", "top", '28px', { fromValue: '-100px'}], position: 4812, duration: 7198 },
            { id: "eid301", tween: [ "style", "${_Ellipse3Copy8}", "top", '-266px', { fromValue: '25px'}], position: 6043, duration: 7198 },
            { id: "eid298", tween: [ "style", "${_Ellipse3Copy3}", "left", '418px', { fromValue: '-762px'}], position: 0, duration: 7198 },
            { id: "eid291", tween: [ "style", "${_Ellipse2Copy8}", "top", '-356px', { fromValue: '-316px'}], position: 6043, duration: 7198 },
            { id: "eid322", tween: [ "style", "${_Ellipse5Copy4}", "top", '-143px', { fromValue: '-166px'}], position: 8098, duration: 7198 },
            { id: "eid315", tween: [ "style", "${_Ellipse4Copy7}", "left", '204px', { fromValue: '-813px'}], position: 8802, duration: 7198 },
            { id: "eid303", tween: [ "style", "${_Ellipse4Copy4}", "left", '416px', { fromValue: '-810px'}], position: 6043, duration: 7198 },
            { id: "eid300", tween: [ "style", "${_Ellipse3Copy8}", "left", '418px', { fromValue: '-870px'}], position: 6043, duration: 7198 },
            { id: "eid302", tween: [ "style", "${_Ellipse4Copy4}", "top", '82px', { fromValue: '-133px'}], position: 6043, duration: 7198 },
            { id: "eid253", tween: [ "style", "${_Ellipse3Copy2}", "left", '491px', { fromValue: '-837px'}], position: 4812, duration: 7198 },
            { id: "eid259", tween: [ "style", "${_Ellipse2Copy4}", "top", '-30px', { fromValue: '-55px'}], position: 900, duration: 7198 },
            { id: "eid251", tween: [ "style", "${_Ellipse2Copy2}", "top", '-217px', { fromValue: '-179px'}], position: 2249, duration: 7198 },
            { id: "eid292", tween: [ "style", "${_Ellipse2Copy9}", "left", '478px', { fromValue: '-810px'}], position: 6043, duration: 7198 },
            { id: "eid283", tween: [ "style", "${_Ellipse2}", "top", '-318px', { fromValue: '-357px'}], position: 0, duration: 7198 },
            { id: "eid196", tween: [ "style", "${_Ellipse3}", "left", '484px', { fromValue: '-762px'}], position: 0, duration: 7198 },
            { id: "eid321", tween: [ "style", "${_Ellipse2Copy13}", "top", '-97px', { fromValue: '-55px'}], position: 8802, duration: 7198 },
            { id: "eid269", tween: [ "style", "${_Ellipse2Copy6}", "top", '-165px', { fromValue: '-316px'}], position: 2928, duration: 7198 },
            { id: "eid264", tween: [ "style", "${_Ellipse4Copy3}", "top", '-193px', { fromValue: '-100px'}], position: 0, duration: 7198 },
            { id: "eid323", tween: [ "style", "${_Ellipse5Copy4}", "left", '255px', { fromValue: '-809px'}], position: 8098, duration: 7198 },
            { id: "eid293", tween: [ "style", "${_Ellipse2Copy9}", "top", '-266px', { fromValue: '2px'}], position: 6043, duration: 7198 },
            { id: "eid197", tween: [ "style", "${_Ellipse3}", "top", '-369px', { fromValue: '-202px'}], position: 0, duration: 7198 },
            { id: "eid250", tween: [ "style", "${_Ellipse2Copy2}", "left", '471px', { fromValue: '-798px'}], position: 2249, duration: 7198 },
            { id: "eid240", tween: [ "style", "${_Ellipse5Copy}", "top", '-415px', { fromValue: '-357px'}], position: 1603, duration: 7198 },
            { id: "eid297", tween: [ "style", "${_Ellipse3Copy7}", "top", '-369px', { fromValue: '-185px'}], position: 6043, duration: 7198 },
            { id: "eid248", tween: [ "style", "${_Ellipse5Copy2}", "left", '437px', { fromValue: '-809px'}], position: 0, duration: 7198 },
            { id: "eid242", tween: [ "style", "${_Ellipse4Copy}", "left", '449px', { fromValue: '-796px'}], position: 1175, duration: 7198 },
            { id: "eid317", tween: [ "style", "${_Ellipse2Copy12}", "top", '-265px', { fromValue: '-179px'}], position: 7198, duration: 7198 },
            { id: "eid244", tween: [ "style", "${_Ellipse2Copy}", "left", '411px', { fromValue: '-762px'}], position: 0, duration: 7198 },
            { id: "eid258", tween: [ "style", "${_Ellipse2Copy4}", "left", '473px', { fromValue: '-889px'}], position: 900, duration: 7198 },
            { id: "eid320", tween: [ "style", "${_Ellipse2Copy13}", "left", '197px', { fromValue: '-889px'}], position: 8802, duration: 7198 },
            { id: "eid245", tween: [ "style", "${_Ellipse2Copy}", "top", '-356px', { fromValue: '-316px'}], position: 0, duration: 7198 },
            { id: "eid313", tween: [ "style", "${_Ellipse4Copy6}", "left", '227px', { fromValue: '-796px'}], position: 8098, duration: 7198 },
            { id: "eid328", tween: [ "style", "${_Ellipse2Copy14}", "left", '192px', { fromValue: '-878px'}], position: 8802, duration: 7198 },
            { id: "eid284", tween: [ "style", "${_Ellipse2Copy7}", "left", '492px', { fromValue: '-842px'}], position: 6043, duration: 7198 },
            { id: "eid213", tween: [ "style", "${_Ellipse5}", "top", '0px', { fromValue: '-231px'}], position: 2249, duration: 7198 },
            { id: "eid241", tween: [ "style", "${_Ellipse5Copy}", "left", '437px', { fromValue: '-866px'}], position: 1603, duration: 7198 },
            { id: "eid282", tween: [ "style", "${_Ellipse2}", "left", '492px', { fromValue: '-793px'}], position: 0, duration: 7198 },
            { id: "eid246", tween: [ "style", "${_Ellipse3Copy}", "left", '465px', { fromValue: '-837px'}], position: 1800, duration: 7198 },
            { id: "eid254", tween: [ "style", "${_Ellipse4Copy2}", "left", '416px', { fromValue: '-810px'}], position: 0, duration: 7198 },
            { id: "eid207", tween: [ "style", "${_Ellipse4}", "top", '-72px', { fromValue: '-272px'}], position: 1350, duration: 7198 },
            { id: "eid267", tween: [ "style", "${_Ellipse5Copy3}", "left", '419px', { fromValue: '-843px'}], position: 3358, duration: 7198 },
            { id: "eid212", tween: [ "style", "${_Ellipse5}", "left", '419px', { fromValue: '-860px'}], position: 2249, duration: 7198 },
            { id: "eid247", tween: [ "style", "${_Ellipse3Copy}", "top", '-122px', { fromValue: '-279px'}], position: 1800, duration: 7198 },
            { id: "eid312", tween: [ "style", "${_Ellipse4Copy6}", "top", '-56px', { fromValue: '-264px'}], position: 8098, duration: 7198 },
            { id: "eid324", tween: [ "style", "${_Ellipse3Copy9}", "top", '-122px', { fromValue: '-279px'}], position: 2249, duration: 7198 },
            { id: "eid299", tween: [ "style", "${_Ellipse3Copy3}", "top", '-266px', { fromValue: '44px'}], position: 0, duration: 7198 },
            { id: "eid256", tween: [ "style", "${_Ellipse2Copy3}", "top", '-528px', { fromValue: '-36px'}], position: 4499, duration: 7198 },
            { id: "eid285", tween: [ "style", "${_Ellipse2Copy7}", "top", '-318px', { fromValue: '-167px'}], position: 6043, duration: 7198 },
            { id: "eid266", tween: [ "style", "${_Ellipse5Copy3}", "top", '-85px', { fromValue: '50px'}], position: 3358, duration: 7198 },
            { id: "eid257", tween: [ "style", "${_Ellipse2Copy3}", "left", '440px', { fromValue: '-805px'}], position: 4499, duration: 7198 },
            { id: "eid290", tween: [ "style", "${_Ellipse2Copy8}", "left", '411px', { fromValue: '-902px'}], position: 6043, duration: 7198 },
            { id: "eid296", tween: [ "style", "${_Ellipse3Copy7}", "left", '484px', { fromValue: '-902px'}], position: 6043, duration: 7198 },
            { id: "eid260", tween: [ "style", "${_Ellipse2Copy5}", "top", '-266px', { fromValue: '-129px'}], position: 0, duration: 7198 },
            { id: "eid268", tween: [ "style", "${_Ellipse2Copy6}", "left", '480px', { fromValue: '-810px'}], position: 2928, duration: 7198 }         ]
      }
   }
},
"avanca_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'avanca',
      type: 'image',
      rect: ['0px','0px','46px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/avanca.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '46px']
         ],
         "${_avanca}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid175", tween: [ "style", "${_avanca}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1000 }         ]
      }
   }
},
"resfriado_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'sprite_inalando',
      type: 'image',
      rect: ['858px','11px','565px','586px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sprite_inalando.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sprite_inalando}": [
            ["style", "left", '858px'],
            ["style", "top", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '617px'],
            ["style", "width", '895px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"transmissao_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','917px','571px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,0)']
   },
   {
      id: 'perdigotos2',
      type: 'rect',
      rect: ['157','155','auto','auto','auto','auto']
   },
   {
      id: 'espirrando_animado4',
      type: 'rect',
      rect: ['-181','72','auto','auto','auto','auto']
   },
   {
      id: 'inalando_animado',
      type: 'rect',
      rect: ['948px','62','auto','auto','auto','auto']
   },
   {
      rect: ['157px','75px','181px','122px','auto','auto'],
      id: 'texto_dentrodocorpo',
      type: 'image',
      clip: ['rect(0px 29px 122px 0px)'],
      fill: ['rgba(0,0,0,0)','images/texto_dentrodocorpo.png','0px','0px']
   },
   {
      id: 'texto_transmissor',
      type: 'image',
      rect: ['317px','403px','165px','140px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_transmissor.png','0px','0px']
   },
   {
      rect: ['75px','229px','115px','62px','auto','auto'],
      id: 'zoom',
      type: 'image',
      clip: ['rect(0px 115pxpx 62pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/zoom.png','0px','0px']
   },
   {
      id: 'virus_celula1',
      type: 'image',
      rect: ['351px','9px','408px','554px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_celula1.png','0px','0px']
   },
   {
      id: 'virus_celula2',
      type: 'image',
      rect: ['354px','9px','397px','554px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_celula2.png','0px','0px']
   },
   {
      id: 'virus_celula',
      type: 'image',
      rect: ['137px','180px','173px','163px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_celula.png','0px','0px']
   },
   {
      rect: ['281px','-343px','812px','808px','auto','auto'],
      id: 'virus_haste3',
      transform: [[],[],[],['0.18','0.18']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/virus_haste.png','0px','0px']
   },
   {
      id: 'virus_ponte',
      type: 'image',
      rect: ['348px','387px','63px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_ponte.png','0px','0px']
   },
   {
      rect: ['234px','-301px','820px','825px','auto','auto'],
      transform: [[],[],[],['0.18','0.18']],
      id: 'virus_base3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/virus_base.png','0px','0px']
   },
   {
      rect: ['219px','-179px','812px','808px','auto','auto'],
      id: 'virus_haste4',
      transform: [[],[],[],['0.18','0.18']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/virus_haste.png','0px','0px']
   },
   {
      rect: ['310px','-50px','812px','808px','auto','auto'],
      id: 'virus_haste5',
      transform: [[],[],[],['0.18','0.18']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/virus_haste.png','0px','0px']
   },
   {
      id: 'virus_base4',
      type: 'image',
      rect: ['232px','-240px','820px','825px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_base.png','0px','0px']
   },
   {
      rect: ['232px','-119px','820px','825px','auto','auto'],
      id: 'virus_base5',
      transform: [[],[],[],['0.18','0.18']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/virus_base.png','0px','0px']
   },
   {
      id: 'producao_animado',
      type: 'rect',
      rect: ['583','29','auto','auto','auto','auto']
   },
   {
      id: 'virus_celula3',
      type: 'image',
      rect: ['378px','24px','354px','525px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_celula3.png','0px','0px']
   },
   {
      id: 'virus_nucleo',
      type: 'image',
      rect: ['400px','201px','156px','155px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_nucleo.png','0px','0px']
   },
   {
      rect: ['181px','252px','82px','27px','auto','auto'],
      id: 'rna',
      transform: [[],[],[],['0.74','0.74']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rna.png','0px','0px']
   },
   {
      rect: ['439px','266px','82px','27px','auto','auto'],
      id: 'rna2',
      transform: [[],[],[],['0.74','0.74']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rna.png','0px','0px']
   },
   {
      rect: ['439px','266px','82px','27px','auto','auto'],
      id: 'rna3',
      transform: [[],[],[],['0.74','0.74']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rna.png','0px','0px']
   },
   {
      rect: ['439px','266px','82px','27px','auto','auto'],
      id: 'rna4',
      transform: [[],[],[],['0.74','0.74']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rna.png','0px','0px']
   },
   {
      rect: ['439px','264px','82px','27px','auto','auto'],
      id: 'rna5',
      transform: [[],[],[],['0.74','0.74']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rna.png','0px','0px']
   },
   {
      rect: ['439px','266px','82px','27px','auto','auto'],
      id: 'rna6',
      transform: [[],[],[],['0.74','0.74']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/rna.png','0px','0px']
   },
   {
      rect: ['408px','435px','301px','90px','auto','auto'],
      id: 'texto_dentrodacelula',
      type: 'image',
      clip: ['rect(0px 29px 90px 0px)'],
      fill: ['rgba(0,0,0,0)','images/texto_dentrodacelula.png','0px','0px']
   },
   {
      id: 'alerta_animado6',
      type: 'rect',
      rect: ['388px','53px','auto','auto','auto','auto']
   },
   {
      rect: ['409px','62px','183px','152px','auto','auto'],
      id: 'texto_fabrica',
      type: 'image',
      clip: ['rect(0px 29px 152px 0px)'],
      fill: ['rgba(0,0,0,0)','images/texto_fabrica.png','0px','0px']
   },
   {
      id: 'alerta_animado7',
      type: 'rect',
      rect: ['387px','359px','auto','auto','auto','auto']
   },
   {
      rect: ['581px','406px','149px','121px','auto','auto'],
      id: 'texto_respiracao',
      type: 'image',
      clip: ['rect(0px 149px 28px 0px)'],
      fill: ['rgba(0,0,0,0)','images/texto_respiracao.png','0px','0px']
   },
   {
      id: 'alerta_animado5',
      type: 'rect',
      rect: ['566px','386px','auto','auto','auto','auto']
   },
   {
      id: 'virus_receptor',
      type: 'image',
      rect: ['451px','258px','53px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_receptor.png','0px','0px']
   },
   {
      id: 'virus_receptor6',
      type: 'image',
      rect: ['451','258','53px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_receptor.png','0px','0px']
   },
   {
      id: 'virus_receptor7',
      type: 'image',
      rect: ['451','258','53px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_receptor.png','0px','0px']
   },
   {
      id: 'virus_receptor8',
      type: 'image',
      rect: ['451','258','53px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_receptor.png','0px','0px']
   },
   {
      id: 'virus_receptor2',
      type: 'image',
      rect: ['451','258','53px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_receptor.png','0px','0px']
   },
   {
      id: 'virus_receptor3',
      type: 'image',
      rect: ['451','258','53px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_receptor.png','0px','0px']
   },
   {
      id: 'virus_receptor4',
      type: 'image',
      rect: ['451','258','53px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_receptor.png','0px','0px']
   },
   {
      id: 'virus_receptor5',
      type: 'image',
      rect: ['451','258','53px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_receptor.png','0px','0px']
   },
   {
      id: 'virus_saida',
      type: 'image',
      rect: ['459','260','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      id: 'virus_saida9',
      type: 'image',
      rect: ['459','258','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      id: 'virus_saida10',
      type: 'image',
      rect: ['459','258','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      id: 'virus_saida2',
      type: 'image',
      rect: ['459','258','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      id: 'virus_saida3',
      type: 'image',
      rect: ['466','265','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      id: 'virus_saida4',
      type: 'image',
      rect: ['466','260','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      id: 'virus_saida5',
      type: 'image',
      rect: ['466','258','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      id: 'virus_saida6',
      type: 'image',
      rect: ['466','258','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      id: 'virus_saida7',
      type: 'image',
      rect: ['459','258','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      id: 'virus_saida8',
      type: 'image',
      rect: ['459','260','32px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_saida.png','0px','0px']
   },
   {
      rect: ['750px','411px','157px','110px','auto','auto'],
      id: 'texto_producaoserie3',
      type: 'image',
      clip: ['rect(0px 157px 28px 0px)'],
      fill: ['rgba(0,0,0,0)','images/texto_producaoserie.png','0px','0px']
   },
   {
      id: 'alerta_animado8',
      type: 'rect',
      rect: ['730px','391px','auto','auto','auto','auto']
   },
   {
      rect: ['916px','0px','917px','571px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'texto_transmissao',
      type: 'image',
      rect: ['6px','12px','302px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_transmissao.png','0px','0px']
   },
   {
      id: 'texto_transmissores3',
      type: 'image',
      rect: ['422px','461px','234px','81px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_transmissores.png','0px','0px']
   },
   {
      id: 'texto_item8',
      type: 'image',
      rect: ['61px','426px','259px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_item8.png','0px','0px']
   },
   {
      id: 'espirroinvertido_animado',
      type: 'rect',
      rect: ['1507','53','auto','auto','auto','auto']
   },
   {
      id: 'espirrandoinvertidomaior_animado',
      type: 'rect',
      rect: ['798','28','auto','auto','auto','auto']
   },
   {
      rect: ['-98px','518px','46px','45px','auto','auto'],
      id: 'avanca2',
      transform: [[],['-180']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/avanca.png','0px','0px']
   },
   {
      id: 'avanca',
      type: 'image',
      rect: ['853px','513px','46px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/avanca.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'alerta_animado7',
      symbolName: 'alerta_animado'
   },
   {
      id: 'espirrando_animado4',
      symbolName: 'espirrando_animado'
   },
   {
      id: 'producao_animado',
      symbolName: 'producao_animado'
   },
   {
      id: 'alerta_animado6',
      symbolName: 'alerta_animado'
   },
   {
      id: 'perdigotos2',
      symbolName: 'perdigotos2'
   },
   {
      id: 'alerta_animado8',
      symbolName: 'alerta_animado'
   },
   {
      id: 'inalando_animado',
      symbolName: 'inalando_animado'
   },
   {
      id: 'espirrandoinvertidomaior_animado',
      symbolName: 'espirrandoinvertidomaior_animado'
   },
   {
      id: 'alerta_animado5',
      symbolName: 'alerta_animado'
   },
   {
      id: 'espirroinvertido_animado',
      symbolName: 'espirroinvertido_animado'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '977px'],
            ["style", "top", '0px']
         ],
         "${_virus_celula2}": [
            ["style", "top", '9px'],
            ["style", "opacity", '0'],
            ["style", "left", '354px']
         ],
         "${_virus_ponte}": [
            ["style", "top", '236px'],
            ["style", "opacity", '0'],
            ["style", "left", '349px']
         ],
         "${_virus_saida10}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '473px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_receptor5}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '465px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_receptor8}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '465px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_receptor6}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '465px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_haste5}": [
            ["style", "top", '-50px'],
            ["transform", "scaleY", '0.18'],
            ["transform", "scaleX", '0.18'],
            ["style", "opacity", '0'],
            ["style", "left", '210px']
         ],
         "${_rna}": [
            ["style", "top", '252px'],
            ["transform", "scaleY", '0.74'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.74'],
            ["style", "opacity", '0'],
            ["style", "left", '181px']
         ],
         "${_virus_receptor4}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '465px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_inalando_animado}": [
            ["style", "left", '948px'],
            ["style", "top", '62px']
         ],
         "${_rna3}": [
            ["style", "top", '302px'],
            ["transform", "scaleY", '0.74'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.74'],
            ["style", "opacity", '0'],
            ["style", "left", '453px']
         ],
         "${_texto_respiracao}": [
            ["style", "top", '406px'],
            ["style", "opacity", '0'],
            ["style", "left", '581px'],
            ["style", "clip", [0,149,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_alerta_animado8}": [
            ["style", "left", '730px'],
            ["style", "top", '391px']
         ],
         "${_virus_haste3}": [
            ["style", "top", '-275px'],
            ["transform", "scaleY", '0.18'],
            ["transform", "scaleX", '0.18'],
            ["style", "opacity", '0'],
            ["style", "left", '214px']
         ],
         "${_rna2}": [
            ["style", "top", '302px'],
            ["transform", "scaleY", '0.74'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.74'],
            ["style", "opacity", '0'],
            ["style", "left", '453px']
         ],
         "${_zoom}": [
            ["style", "top", '229px'],
            ["style", "left", '75px'],
            ["style", "clip", [0,13,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_virus_haste4}": [
            ["style", "top", '-179px'],
            ["transform", "scaleY", '0.18'],
            ["transform", "scaleX", '0.18'],
            ["style", "opacity", '0'],
            ["style", "left", '219px']
         ],
         "${_texto_dentrodocorpo}": [
            ["style", "top", '75px'],
            ["style", "opacity", '0'],
            ["style", "left", '157px'],
            ["style", "clip", [0,30,122,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_texto_transmissores3}": [
            ["style", "top", '461px'],
            ["style", "opacity", '0'],
            ["style", "left", '422px']
         ],
         "${_virus_saida5}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '480px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Rectangle3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_virus_saida6}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '480px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_rna5}": [
            ["style", "top", '300px'],
            ["transform", "scaleY", '0.74'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.74'],
            ["style", "opacity", '0'],
            ["style", "left", '453px']
         ],
         "${_rna6}": [
            ["style", "top", '302px'],
            ["transform", "scaleY", '0.74'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.74'],
            ["style", "opacity", '0'],
            ["style", "left", '453px']
         ],
         "${_rna4}": [
            ["style", "top", '302px'],
            ["transform", "scaleY", '0.74'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.74'],
            ["style", "opacity", '0'],
            ["style", "left", '453px']
         ],
         "${_virus_receptor3}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '465px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_texto_transmissao}": [
            ["style", "top", '12px'],
            ["style", "opacity", '0'],
            ["style", "left", '6px']
         ],
         "${_virus_receptor2}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '465px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_saida3}": [
            ["style", "top", '301px'],
            ["style", "opacity", '0'],
            ["style", "left", '480px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_texto_producaoserie3}": [
            ["style", "top", '411px'],
            ["style", "opacity", '0'],
            ["style", "left", '750px'],
            ["style", "clip", [0,157,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_texto_dentrodacelula}": [
            ["style", "top", '70px'],
            ["style", "opacity", '0'],
            ["style", "left", '407px'],
            ["style", "clip", [0,28,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_virus_base4}": [
            ["style", "top", '-183px'],
            ["transform", "scaleY", '0.18'],
            ["transform", "scaleX", '0.18'],
            ["style", "opacity", '0'],
            ["style", "left", '232px']
         ],
         "${_alerta_animado6}": [
            ["style", "left", '388px'],
            ["style", "top", '53px']
         ],
         "${_virus_receptor}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '465px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_celula}": [
            ["style", "top", '180px'],
            ["style", "opacity", '0'],
            ["style", "left", '137px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_alerta_animado7}": [
            ["style", "left", '387px'],
            ["style", "top", '359px']
         ],
         "${_producao_animado}": [
            ["style", "left", '584px'],
            ["style", "top", '29px']
         ],
         "${_texto_transmissor}": [
            ["style", "top", '403px'],
            ["style", "opacity", '0'],
            ["style", "left", '317px']
         ],
         "${symbolSelector}": [
            ["style", "height", '571px'],
            ["style", "width", '917px']
         ],
         "${_alerta_animado5}": [
            ["style", "left", '566px'],
            ["style", "top", '386px']
         ],
         "${_texto_item8}": [
            ["style", "top", '426px'],
            ["style", "opacity", '0'],
            ["style", "left", '61px']
         ],
         "${_virus_saida2}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '473px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_texto_fabrica}": [
            ["style", "top", '369px'],
            ["style", "opacity", '0'],
            ["style", "left", '407px'],
            ["style", "clip", [0,27,152,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_espirroinvertido_animado}": [
            ["style", "top", '53px'],
            ["style", "left", '1508px']
         ],
         "${_virus_saida8}": [
            ["style", "top", '296px'],
            ["style", "opacity", '0'],
            ["style", "left", '473px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_avanca2}": [
            ["style", "top", '518px'],
            ["style", "left", '-98px'],
            ["transform", "rotateZ", '-180deg']
         ],
         "${_virus_nucleo}": [
            ["style", "top", '234px'],
            ["style", "opacity", '0'],
            ["style", "left", '410px']
         ],
         "${_virus_celula1}": [
            ["style", "top", '9px'],
            ["style", "opacity", '0'],
            ["style", "left", '351px']
         ],
         "${_espirrandoinvertidomaior_animado}": [
            ["style", "left", '1420px'],
            ["style", "top", '29px']
         ],
         "${_virus_saida4}": [
            ["style", "top", '296px'],
            ["style", "opacity", '0'],
            ["style", "left", '480px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_base3}": [
            ["style", "top", '-311px'],
            ["transform", "scaleY", '0.18'],
            ["transform", "scaleX", '0.18'],
            ["style", "opacity", '0'],
            ["style", "left", '234px']
         ],
         "${_virus_saida}": [
            ["style", "top", '296px'],
            ["style", "opacity", '0'],
            ["style", "left", '473px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_base5}": [
            ["style", "top", '-55px'],
            ["transform", "scaleY", '0.18'],
            ["transform", "scaleX", '0.18'],
            ["style", "opacity", '0'],
            ["style", "left", '232px']
         ],
         "${_virus_celula3}": [
            ["style", "top", '24px'],
            ["style", "opacity", '0'],
            ["style", "left", '378px']
         ],
         "${_virus_receptor7}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '465px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_virus_saida7}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '473px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_avanca}": [
            ["style", "top", '513px'],
            ["style", "opacity", '0'],
            ["style", "left", '853px']
         ],
         "${_virus_saida9}": [
            ["style", "top", '294px'],
            ["style", "opacity", '0'],
            ["style", "left", '473px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_espirrando_animado4}": [
            ["style", "left", '-181px'],
            ["style", "top", '72px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 22155,
         autoPlay: false,
         timeline: [
            { id: "eid514", tween: [ "style", "${_espirrando_animado4}", "left", '-906px', { fromValue: '-181px'}], position: 1902, duration: 500, easing: "swing" },
            { id: "eid838", tween: [ "style", "${_virus_base5}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 250, easing: "swing" },
            { id: "eid1244", tween: [ "style", "${_virus_base5}", "opacity", '0', { fromValue: '1'}], position: 19955, duration: 0, easing: "swing" },
            { id: "eid1212", tween: [ "style", "${_virus_celula3}", "left", '-550px', { fromValue: '378px'}], position: 20250, duration: 750 },
            { id: "eid500", tween: [ "style", "${_avanca}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500, easing: "swing" },
            { id: "eid492", tween: [ "style", "${_texto_transmissor}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500, easing: "swing" },
            { id: "eid707", tween: [ "style", "${_virus_receptor6}", "left", '651px', { fromValue: '465px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid872", tween: [ "style", "${_virus_receptor6}", "left", '685px', { fromValue: '651px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1214", tween: [ "style", "${_virus_receptor6}", "left", '-243px', { fromValue: '685px'}], position: 20250, duration: 750 },
            { id: "eid790", tween: [ "transform", "${_virus_saida4}", "rotateZ", '76deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid1175", tween: [ "style", "${_virus_ponte}", "top", '236px', { fromValue: '236px'}], position: 20250, duration: 0 },
            { id: "eid768", tween: [ "style", "${_virus_saida7}", "left", '416px', { fromValue: '473px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2437", tween: [ "style", "${_virus_saida7}", "left", '-519px', { fromValue: '416px'}], position: 20250, duration: 750 },
            { id: "eid812", tween: [ "transform", "${_virus_saida9}", "rotateZ", '157deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid635", tween: [ "style", "${_rna2}", "top", '286px', { fromValue: '302px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid928", tween: [ "style", "${_rna2}", "top", '220px', { fromValue: '286px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1016", tween: [ "style", "${_rna2}", "top", '217px', { fromValue: '220px'}], position: 17139, duration: 861, easing: "swing" },
            { id: "eid1044", tween: [ "style", "${_rna2}", "top", '217px', { fromValue: '217px'}], position: 18865, duration: 0, easing: "swing" },
            { id: "eid1165", tween: [ "style", "${_rna2}", "top", '217px', { fromValue: '217px'}], position: 20250, duration: 0 },
            { id: "eid763", tween: [ "style", "${_virus_saida4}", "top", '324px', { fromValue: '296px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid926", tween: [ "style", "${_virus_saida4}", "top", '211px', { fromValue: '324px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1145", tween: [ "style", "${_virus_saida4}", "top", '211px', { fromValue: '211px'}], position: 20250, duration: 0 },
            { id: "eid628", tween: [ "style", "${_rna5}", "left", '616px', { fromValue: '453px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid979", tween: [ "style", "${_rna5}", "left", '666px', { fromValue: '616px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1011", tween: [ "style", "${_rna5}", "left", '764px', { fromValue: '666px'}], position: 17593, duration: 907, easing: "swing" },
            { id: "eid1058", tween: [ "style", "${_rna5}", "left", '970px', { fromValue: '764px'}], position: 19356, duration: 894, easing: "swing" },
            { id: "eid1209", tween: [ "style", "${_rna5}", "left", '42px', { fromValue: '970px'}], position: 20250, duration: 750 },
            { id: "eid778", tween: [ "style", "${_virus_saida8}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid1341", tween: [ "style", "${_texto_transmissores3}", "opacity", '1', { fromValue: '0'}], position: 20968, duration: 468 },
            { id: "eid761", tween: [ "style", "${_virus_saida5}", "top", '312px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid922", tween: [ "style", "${_virus_saida5}", "top", '211px', { fromValue: '312px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1144", tween: [ "style", "${_virus_saida5}", "top", '211px', { fromValue: '211px'}], position: 20250, duration: 0 },
            { id: "eid1179", tween: [ "style", "${_virus_celula1}", "top", '9px', { fromValue: '9px'}], position: 20250, duration: 0 },
            { id: "eid644", tween: [ "style", "${_rna4}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid1261", tween: [ "style", "${_rna4}", "opacity", '0', { fromValue: '1'}], position: 18976, duration: 0, easing: "swing" },
            { id: "eid478", tween: [ "style", "${_inalando_animado}", "left", '594px', { fromValue: '948px'}], position: 0, duration: 500, easing: "swing" },
            { id: "eid479", tween: [ "style", "${_inalando_animado}", "left", '658px', { fromValue: '594px'}], position: 500, duration: 500, easing: "swing" },
            { id: "eid513", tween: [ "style", "${_inalando_animado}", "left", '-27px', { fromValue: '658px'}], position: 1902, duration: 500, easing: "swing" },
            { id: "eid1189", tween: [ "style", "${_inalando_animado}", "left", '-955px', { fromValue: '-27px'}], position: 20250, duration: 750 },
            { id: "eid945", tween: [ "style", "${_virus_haste4}", "top", '-179px', { fromValue: '-179px'}], position: 14750, duration: 0, easing: "swing" },
            { id: "eid1046", tween: [ "style", "${_virus_haste4}", "top", '-179px', { fromValue: '-179px'}], position: 18865, duration: 0, easing: "swing" },
            { id: "eid1173", tween: [ "style", "${_virus_haste4}", "top", '-179px', { fromValue: '-179px'}], position: 20250, duration: 0 },
            { id: "eid646", tween: [ "transform", "${_rna6}", "rotateZ", '-41deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid694", tween: [ "transform", "${_virus_receptor2}", "rotateZ", '158deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid712", tween: [ "style", "${_virus_receptor8}", "top", '218px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2462", tween: [ "style", "${_virus_receptor8}", "top", '219px', { fromValue: '218px'}], position: 20250, duration: 750 },
            { id: "eid785", tween: [ "style", "${_virus_saida7}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid835", tween: [ "style", "${_virus_base5}", "top", '-55px', { fromValue: '-55px'}], position: 12250, duration: 0, easing: "swing" },
            { id: "eid1056", tween: [ "style", "${_virus_base5}", "top", '-55px', { fromValue: '-55px'}], position: 19356, duration: 0, easing: "swing" },
            { id: "eid1170", tween: [ "style", "${_virus_base5}", "top", '-55px', { fromValue: '-55px'}], position: 20250, duration: 0 },
            { id: "eid994", tween: [ "style", "${_virus_haste5}", "left", '330px', { fromValue: '210px'}], position: 15250, duration: 750, easing: "swing" },
            { id: "eid995", tween: [ "style", "${_virus_haste5}", "left", '310px', { fromValue: '330px'}], position: 16000, duration: 750, easing: "swing" },
            { id: "eid1012", tween: [ "style", "${_virus_haste5}", "left", '400px', { fromValue: '310px'}], position: 17593, duration: 907, easing: "swing" },
            { id: "eid1057", tween: [ "style", "${_virus_haste5}", "left", '606px', { fromValue: '400px'}], position: 19356, duration: 894, easing: "swing" },
            { id: "eid1207", tween: [ "style", "${_virus_haste5}", "left", '-322px', { fromValue: '606px'}], position: 20250, duration: 750 },
            { id: "eid525", tween: [ "style", "${_zoom}", "clip", [0,129,62,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,13,62,0]}], position: 2402, duration: 750, easing: "swing" },
            { id: "eid565", tween: [ "style", "${_zoom}", "clip", [0,13,62,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,129,62,0]}], position: 4750, duration: 500, easing: "swing" },
            { id: "eid799", tween: [ "style", "${_virus_saida10}", "top", '445px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid984", tween: [ "style", "${_virus_saida10}", "top", '339px', { fromValue: '445px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1148", tween: [ "style", "${_virus_saida10}", "top", '339px', { fromValue: '339px'}], position: 20250, duration: 0 },
            { id: "eid2418", tween: [ "style", "${_avanca2}", "left", '11px', { fromValue: '-98px'}], position: 1902, duration: 500, easing: "swing" },
            { id: "eid547", tween: [ "style", "${_virus_celula3}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500, easing: "swing" },
            { id: "eid1167", tween: [ "style", "${_virus_nucleo}", "top", '234px', { fromValue: '234px'}], position: 20250, duration: 0 },
            { id: "eid633", tween: [ "style", "${_rna4}", "top", '215px', { fromValue: '302px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid1019", tween: [ "style", "${_rna4}", "top", '84px', { fromValue: '215px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1023", tween: [ "style", "${_rna4}", "top", '88px', { fromValue: '84px'}], position: 16750, duration: 750, easing: "swing" },
            { id: "eid1040", tween: [ "style", "${_rna4}", "top", '89px', { fromValue: '88px'}], position: 18500, duration: 750, easing: "swing" },
            { id: "eid1163", tween: [ "style", "${_rna4}", "top", '89px', { fromValue: '89px'}], position: 20250, duration: 0 },
            { id: "eid554", tween: [ "style", "${_rna}", "top", '249px', { fromValue: '252px'}], position: 4932, duration: 818, easing: "swing" },
            { id: "eid2433", tween: [ "style", "${_rna}", "top", '198px', { fromValue: '249px'}], position: 6500, duration: 748, easing: "swing" },
            { id: "eid581", tween: [ "style", "${_rna}", "top", '300px', { fromValue: '198px'}], position: 8000, duration: 1000, easing: "swing" },
            { id: "eid596", tween: [ "style", "${_rna}", "top", '186px', { fromValue: '300px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2456", tween: [ "style", "${_rna}", "top", '187px', { fromValue: '186px'}], position: 20250, duration: 750 },
            { id: "eid546", tween: [ "style", "${_virus_celula2}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500, easing: "swing" },
            { id: "eid839", tween: [ "style", "${_virus_base4}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 250, easing: "swing" },
            { id: "eid1254", tween: [ "style", "${_virus_base4}", "opacity", '0', { fromValue: '1'}], position: 19356, duration: 0, easing: "swing" },
            { id: "eid642", tween: [ "style", "${_rna5}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid989", tween: [ "style", "${_rna5}", "opacity", '1', { fromValue: '1'}], position: 14250, duration: 0, easing: "swing" },
            { id: "eid1245", tween: [ "style", "${_rna5}", "opacity", '0', { fromValue: '1'}], position: 19955, duration: 0, easing: "swing" },
            { id: "eid769", tween: [ "style", "${_virus_saida7}", "top", '213px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2438", tween: [ "style", "${_virus_saida7}", "top", '215px', { fromValue: '213px'}], position: 20250, duration: 750 },
            { id: "eid680", tween: [ "style", "${_virus_receptor}", "top", '234px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid865", tween: [ "style", "${_virus_receptor}", "top", '80px', { fromValue: '234px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1158", tween: [ "style", "${_virus_receptor}", "top", '80px', { fromValue: '80px'}], position: 20250, duration: 0 },
            { id: "eid556", tween: [ "style", "${_virus_celula}", "top", '186px', { fromValue: '180px'}], position: 4932, duration: 818, easing: "swing" },
            { id: "eid1177", tween: [ "style", "${_virus_celula}", "top", '186px', { fromValue: '186px'}], position: 20250, duration: 0 },
            { id: "eid767", tween: [ "style", "${_virus_saida6}", "top", '350px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid930", tween: [ "style", "${_virus_saida6}", "top", '214px', { fromValue: '350px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1143", tween: [ "style", "${_virus_saida6}", "top", '214px', { fromValue: '214px'}], position: 20250, duration: 0 },
            { id: "eid1198", tween: [ "style", "${_virus_ponte}", "left", '-580px', { fromValue: '349px'}], position: 20250, duration: 750 },
            { id: "eid531", tween: [ "style", "${_rna}", "opacity", '1', { fromValue: '0.000000'}], position: 2750, duration: 250, easing: "swing" },
            { id: "eid583", tween: [ "style", "${_rna}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 1000, easing: "swing" },
            { id: "eid599", tween: [ "style", "${_rna}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid721", tween: [ "transform", "${_virus_receptor6}", "rotateZ", '64deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid477", tween: [ "style", "${_inalando_animado}", "top", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
            { id: "eid508", tween: [ "style", "${_inalando_animado}", "top", '62px', { fromValue: '62px'}], position: 1902, duration: 0, easing: "swing" },
            { id: "eid1182", tween: [ "style", "${_inalando_animado}", "top", '62px', { fromValue: '62px'}], position: 20250, duration: 0 },
            { id: "eid691", tween: [ "transform", "${_virus_receptor5}", "rotateZ", '40deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid489", tween: [ "style", "${_texto_transmissao}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500, easing: "swing" },
            { id: "eid2492", tween: [ "style", "${_texto_transmissores3}", "left", '-609px', { fromValue: '422px'}], position: 21436, duration: 719 },
            { id: "eid692", tween: [ "transform", "${_virus_receptor4}", "rotateZ", '123deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid708", tween: [ "style", "${_virus_receptor6}", "top", '170px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid873", tween: [ "style", "${_virus_receptor6}", "top", '82px', { fromValue: '170px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1157", tween: [ "style", "${_virus_receptor6}", "top", '82px', { fromValue: '82px'}], position: 20250, duration: 0 },
            { id: "eid678", tween: [ "style", "${_virus_receptor2}", "top", '309px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid932", tween: [ "style", "${_virus_receptor2}", "top", '211px', { fromValue: '309px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1154", tween: [ "style", "${_virus_receptor2}", "top", '211px', { fromValue: '211px'}], position: 20250, duration: 0 },
            { id: "eid686", tween: [ "style", "${_virus_receptor4}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid987", tween: [ "style", "${_virus_receptor4}", "opacity", '0', { fromValue: '1'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid840", tween: [ "style", "${_virus_base5}", "left", '331px', { fromValue: '232px'}], position: 12250, duration: 250, easing: "swing" },
            { id: "eid842", tween: [ "style", "${_virus_base5}", "left", '305px', { fromValue: '331px'}], position: 12500, duration: 250, easing: "swing" },
            { id: "eid1010", tween: [ "style", "${_virus_base5}", "left", '395px', { fromValue: '305px'}], position: 17593, duration: 907, easing: "swing" },
            { id: "eid1059", tween: [ "style", "${_virus_base5}", "left", '601px', { fromValue: '395px'}], position: 19356, duration: 894, easing: "swing" },
            { id: "eid1185", tween: [ "style", "${_virus_base5}", "left", '-327px', { fromValue: '601px'}], position: 20250, duration: 750 },
            { id: "eid992", tween: [ "style", "${_virus_haste5}", "top", '-50px', { fromValue: '-50px'}], position: 15250, duration: 0, easing: "swing" },
            { id: "eid1055", tween: [ "style", "${_virus_haste5}", "top", '-50px', { fromValue: '-50px'}], position: 19356, duration: 0, easing: "swing" },
            { id: "eid1172", tween: [ "style", "${_virus_haste5}", "top", '-50px', { fromValue: '-50px'}], position: 20250, duration: 0 },
            { id: "eid561", tween: [ "style", "${_virus_ponte}", "opacity", '1', { fromValue: '0.000000'}], position: 5750, duration: 500, easing: "swing" },
            { id: "eid677", tween: [ "style", "${_virus_receptor2}", "left", '635px', { fromValue: '465px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid931", tween: [ "style", "${_virus_receptor2}", "left", '692px', { fromValue: '635px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1195", tween: [ "style", "${_virus_receptor2}", "left", '-236px', { fromValue: '692px'}], position: 20250, duration: 750 },
            { id: "eid510", tween: [ "style", "${_texto_transmissao}", "top", '12px', { fromValue: '12px'}], position: 1500, duration: 0, easing: "swing" },
            { id: "eid801", tween: [ "style", "${_virus_saida9}", "top", '418px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid982", tween: [ "style", "${_virus_saida9}", "top", '335px', { fromValue: '418px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1149", tween: [ "style", "${_virus_saida9}", "top", '335px', { fromValue: '335px'}], position: 20250, duration: 0 },
            { id: "eid1199", tween: [ "style", "${_zoom}", "left", '-853px', { fromValue: '75px'}], position: 20250, duration: 750 },
            { id: "eid710", tween: [ "style", "${_virus_receptor7}", "top", '401px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid978", tween: [ "style", "${_virus_receptor7}", "top", '335px', { fromValue: '401px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1156", tween: [ "style", "${_virus_receptor7}", "top", '335px', { fromValue: '335px'}], position: 20250, duration: 0 },
            { id: "eid2428", tween: [ "style", "${_texto_respiracao}", "clip", [0,149,132,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,149,28,0]}], position: 1500, duration: 402, easing: "swing" },
            { id: "eid674", tween: [ "style", "${_virus_receptor5}", "top", '170px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2458", tween: [ "style", "${_virus_receptor5}", "top", '171px', { fromValue: '170px'}], position: 20250, duration: 750 },
            { id: "eid650", tween: [ "transform", "${_rna2}", "rotateZ", '-29deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid1192", tween: [ "style", "${_producao_animado}", "left", '-345px', { fromValue: '584px'}], position: 20250, duration: 750 },
            { id: "eid889", tween: [ "style", "${_virus_haste3}", "left", '312px', { fromValue: '214px'}], position: 14250, duration: 750, easing: "swing" },
            { id: "eid892", tween: [ "style", "${_virus_haste3}", "left", '301px', { fromValue: '312px'}], position: 15000, duration: 750, easing: "swing" },
            { id: "eid998", tween: [ "style", "${_virus_haste3}", "left", '401px', { fromValue: '301px'}], position: 16750, duration: 750, easing: "swing" },
            { id: "eid1037", tween: [ "style", "${_virus_haste3}", "left", '611px', { fromValue: '401px'}], position: 18500, duration: 750, easing: "swing" },
            { id: "eid1202", tween: [ "style", "${_virus_haste3}", "left", '-317px', { fromValue: '611px'}], position: 20250, duration: 750 },
            { id: "eid509", tween: [ "style", "${_espirrando_animado4}", "top", '72px', { fromValue: '72px'}], position: 1902, duration: 0, easing: "swing" },
            { id: "eid690", tween: [ "style", "${_virus_receptor}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid881", tween: [ "style", "${_virus_receptor}", "opacity", '0', { fromValue: '1'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid535", tween: [ "transform", "${_virus_celula}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 3000, duration: 2750, easing: "swing" },
            { id: "eid649", tween: [ "transform", "${_rna3}", "rotateZ", '-66deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid949", tween: [ "style", "${_virus_haste4}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 750, easing: "swing" },
            { id: "eid1255", tween: [ "style", "${_virus_haste4}", "opacity", '0', { fromValue: '1'}], position: 19356, duration: 0, easing: "swing" },
            { id: "eid569", tween: [ "style", "${_texto_dentrodacelula}", "clip", [0,301,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,28,90,0]}], position: 7248, duration: 603, easing: "swing" },
            { id: "eid1217", tween: [ "style", "${_texto_fabrica}", "left", '-519px', { fromValue: '407px'}], position: 20250, duration: 750 },
            { id: "eid800", tween: [ "style", "${_virus_saida9}", "left", '670px', { fromValue: '473px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid981", tween: [ "style", "${_virus_saida9}", "left", '703px', { fromValue: '670px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1220", tween: [ "style", "${_virus_saida9}", "left", '-225px', { fromValue: '703px'}], position: 20250, duration: 750 },
            { id: "eid671", tween: [ "style", "${_virus_receptor4}", "left", '636px', { fromValue: '465px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid975", tween: [ "style", "${_virus_receptor4}", "left", '690px', { fromValue: '636px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1194", tween: [ "style", "${_virus_receptor4}", "left", '-238px', { fromValue: '690px'}], position: 20250, duration: 750 },
            { id: "eid2425", tween: [ "style", "${_avanca}", "top", '517px', { fromValue: '513px'}], position: 21436, duration: 719 },
            { id: "eid1140", tween: [ "style", "${_texto_producaoserie3}", "top", '411px', { fromValue: '411px'}], position: 20250, duration: 0 },
            { id: "eid782", tween: [ "style", "${_virus_saida4}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid938", tween: [ "style", "${_virus_saida4}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid627", tween: [ "style", "${_rna6}", "top", '223px', { fromValue: '302px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2460", tween: [ "style", "${_rna6}", "top", '224px', { fromValue: '223px'}], position: 20250, duration: 750 },
            { id: "eid693", tween: [ "transform", "${_virus_receptor3}", "rotateZ", '133deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid553", tween: [ "style", "${_rna}", "left", '292px', { fromValue: '181px'}], position: 4932, duration: 818, easing: "swing" },
            { id: "eid2431", tween: [ "style", "${_rna}", "left", '427px', { fromValue: '292px'}], position: 6500, duration: 748, easing: "swing" },
            { id: "eid580", tween: [ "style", "${_rna}", "left", '461px', { fromValue: '427px'}], position: 8000, duration: 1000, easing: "swing" },
            { id: "eid595", tween: [ "style", "${_rna}", "left", '485px', { fromValue: '461px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2455", tween: [ "style", "${_rna}", "left", '-452px', { fromValue: '485px'}], position: 20250, duration: 750 },
            { id: "eid1191", tween: [ "style", "${_texto_dentrodocorpo}", "left", '-771px', { fromValue: '157px'}], position: 20250, duration: 750 },
            { id: "eid781", tween: [ "style", "${_virus_saida5}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid936", tween: [ "style", "${_virus_saida5}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1181", tween: [ "style", "${_texto_dentrodocorpo}", "top", '75px', { fromValue: '75px'}], position: 20250, duration: 0 },
            { id: "eid676", tween: [ "style", "${_virus_receptor3}", "top", '401px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid924", tween: [ "style", "${_virus_receptor3}", "top", '214px', { fromValue: '401px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1153", tween: [ "style", "${_virus_receptor3}", "top", '214px', { fromValue: '214px'}], position: 20250, duration: 0 },
            { id: "eid587", tween: [ "style", "${_texto_fabrica}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 398, easing: "swing" },
            { id: "eid811", tween: [ "transform", "${_virus_saida10}", "rotateZ", '219deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid629", tween: [ "style", "${_rna5}", "top", '367px', { fromValue: '300px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid980", tween: [ "style", "${_rna5}", "top", '339px', { fromValue: '367px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1015", tween: [ "style", "${_rna5}", "top", '346px', { fromValue: '339px'}], position: 17593, duration: 907, easing: "swing" },
            { id: "eid1054", tween: [ "style", "${_rna5}", "top", '346px', { fromValue: '346px'}], position: 19356, duration: 0, easing: "swing" },
            { id: "eid1162", tween: [ "style", "${_rna5}", "top", '346px', { fromValue: '346px'}], position: 20250, duration: 0 },
            { id: "eid2497", tween: [ "style", "${_espirrandoinvertidomaior_animado}", "top", '29px', { fromValue: '29px'}], position: 21436, duration: 0 },
            { id: "eid1025", tween: [ "style", "${_texto_producaoserie3}", "clip", [0,157,106,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,157,28,0]}], position: 16750, duration: 1000 },
            { id: "eid645", tween: [ "style", "${_rna2}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid908", tween: [ "style", "${_rna2}", "opacity", '1', { fromValue: '1'}], position: 13750, duration: 0, easing: "swing" },
            { id: "eid1253", tween: [ "style", "${_rna2}", "opacity", '0', { fromValue: '1'}], position: 19356, duration: 0, easing: "swing" },
            { id: "eid1180", tween: [ "style", "${_zoom}", "top", '229px', { fromValue: '229px'}], position: 20250, duration: 0 },
            { id: "eid634", tween: [ "style", "${_rna2}", "left", '574px', { fromValue: '453px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid927", tween: [ "style", "${_rna2}", "left", '667px', { fromValue: '574px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1002", tween: [ "style", "${_rna2}", "left", '792px', { fromValue: '667px'}], position: 17139, duration: 861, easing: "swing" },
            { id: "eid1047", tween: [ "style", "${_rna2}", "left", '982px', { fromValue: '792px'}], position: 18865, duration: 885, easing: "swing" },
            { id: "eid1219", tween: [ "style", "${_rna2}", "left", '54px', { fromValue: '982px'}], position: 20250, duration: 750 },
            { id: "eid779", tween: [ "style", "${_virus_saida2}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid884", tween: [ "style", "${_virus_saida2}", "opacity", '0', { fromValue: '1'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid530", tween: [ "style", "${_virus_celula}", "opacity", '1', { fromValue: '0.000000'}], position: 2750, duration: 250, easing: "swing" },
            { id: "eid719", tween: [ "transform", "${_virus_receptor8}", "rotateZ", '188deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid786", tween: [ "transform", "${_virus_saida8}", "rotateZ", '-38deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid1168", tween: [ "style", "${_virus_celula3}", "top", '24px', { fromValue: '24px'}], position: 20250, duration: 0 },
            { id: "eid1196", tween: [ "style", "${_virus_nucleo}", "left", '-528px', { fromValue: '410px'}], position: 20250, duration: 750 },
            { id: "eid946", tween: [ "style", "${_virus_haste4}", "left", '329px', { fromValue: '219px'}], position: 14750, duration: 750, easing: "swing" },
            { id: "eid947", tween: [ "style", "${_virus_haste4}", "left", '309px', { fromValue: '329px'}], position: 15500, duration: 750, easing: "swing" },
            { id: "eid1003", tween: [ "style", "${_virus_haste4}", "left", '426px', { fromValue: '309px'}], position: 17139, duration: 861, easing: "swing" },
            { id: "eid1049", tween: [ "style", "${_virus_haste4}", "left", '616px', { fromValue: '426px'}], position: 18865, duration: 885, easing: "swing" },
            { id: "eid1197", tween: [ "style", "${_virus_haste4}", "left", '-312px', { fromValue: '616px'}], position: 20250, duration: 750 },
            { id: "eid1203", tween: [ "style", "${_virus_celula2}", "left", '-574px', { fromValue: '354px'}], position: 20250, duration: 750 },
            { id: "eid545", tween: [ "style", "${_virus_nucleo}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500, easing: "swing" },
            { id: "eid793", tween: [ "transform", "${_virus_saida}", "rotateZ", '-159deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid548", tween: [ "style", "${_virus_celula1}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500, easing: "swing" },
            { id: "eid2498", tween: [ "style", "${_espirrandoinvertidomaior_animado}", "left", '373px', { fromValue: '1420px'}], position: 21436, duration: 719 },
            { id: "eid756", tween: [ "style", "${_virus_saida2}", "left", '608px', { fromValue: '473px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid870", tween: [ "style", "${_virus_saida2}", "left", '694px', { fromValue: '608px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1222", tween: [ "style", "${_virus_saida2}", "left", '-234px', { fromValue: '694px'}], position: 20250, duration: 750 },
            { id: "eid631", tween: [ "style", "${_rna3}", "top", '215px', { fromValue: '302px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2452", tween: [ "style", "${_rna3}", "top", '216px', { fromValue: '215px'}], position: 20250, duration: 750 },
            { id: "eid841", tween: [ "style", "${_virus_base4}", "left", '331px', { fromValue: '232px'}], position: 12000, duration: 250, easing: "swing" },
            { id: "eid843", tween: [ "style", "${_virus_base4}", "left", '305px', { fromValue: '331px'}], position: 12250, duration: 250, easing: "swing" },
            { id: "eid1001", tween: [ "style", "${_virus_base4}", "left", '422px', { fromValue: '305px'}], position: 17139, duration: 861, easing: "swing" },
            { id: "eid1048", tween: [ "style", "${_virus_base4}", "left", '612px', { fromValue: '422px'}], position: 18865, duration: 885, easing: "swing" },
            { id: "eid1224", tween: [ "style", "${_virus_base4}", "left", '-316px', { fromValue: '612px'}], position: 20250, duration: 750 },
            { id: "eid717", tween: [ "style", "${_virus_receptor7}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid988", tween: [ "style", "${_virus_receptor7}", "opacity", '0', { fromValue: '1'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid688", tween: [ "style", "${_virus_receptor3}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid940", tween: [ "style", "${_virus_receptor3}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid590", tween: [ "style", "${_texto_fabrica}", "clip", [0,174,152,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,27,152,0]}], position: 9398, duration: 750, easing: "swing" },
            { id: "eid2490", tween: [ "style", "${_texto_transmissores3}", "top", '461px', { fromValue: '461px'}], position: 21436, duration: 0, easing: "swing" },
            { id: "eid780", tween: [ "style", "${_virus_saida}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid880", tween: [ "style", "${_virus_saida}", "opacity", '0', { fromValue: '1'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid568", tween: [ "style", "${_texto_dentrodacelula}", "opacity", '1', { fromValue: '0.000000'}], position: 6851, duration: 397, easing: "swing" },
            { id: "eid718", tween: [ "style", "${_virus_receptor8}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid689", tween: [ "style", "${_virus_receptor2}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid942", tween: [ "style", "${_virus_receptor2}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid511", tween: [ "style", "${_texto_transmissor}", "left", '-368px', { fromValue: '317px'}], position: 1902, duration: 500, easing: "swing" },
            { id: "eid515", tween: [ "style", "${_texto_respiracao}", "top", '403px', { fromValue: '406px'}], position: 1902, duration: 500, easing: "swing" },
            { id: "eid1028", tween: [ "style", "${_texto_producaoserie3}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 750 },
            { id: "eid1160", tween: [ "style", "${_texto_dentrodacelula}", "top", '70px', { fromValue: '70px'}], position: 20250, duration: 0 },
            { id: "eid791", tween: [ "transform", "${_virus_saida3}", "rotateZ", '-46deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid512", tween: [ "style", "${_texto_respiracao}", "left", '-166px', { fromValue: '581px'}], position: 1902, duration: 500, easing: "swing" },
            { id: "eid626", tween: [ "style", "${_rna6}", "left", '428px', { fromValue: '453px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2459", tween: [ "style", "${_rna6}", "left", '-509px', { fromValue: '428px'}], position: 20250, duration: 750 },
            { id: "eid643", tween: [ "style", "${_rna3}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid784", tween: [ "style", "${_virus_saida6}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid934", tween: [ "style", "${_virus_saida6}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid716", tween: [ "style", "${_virus_receptor6}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid885", tween: [ "style", "${_virus_receptor6}", "opacity", '0', { fromValue: '1'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid641", tween: [ "style", "${_rna6}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid687", tween: [ "style", "${_virus_receptor5}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid788", tween: [ "transform", "${_virus_saida6}", "rotateZ", '126deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid672", tween: [ "style", "${_virus_receptor4}", "top", '466px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid976", tween: [ "style", "${_virus_receptor4}", "top", '341px', { fromValue: '466px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1152", tween: [ "style", "${_virus_receptor4}", "top", '341px', { fromValue: '341px'}], position: 20250, duration: 0 },
            { id: "eid754", tween: [ "style", "${_virus_saida8}", "left", '429px', { fromValue: '473px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2453", tween: [ "style", "${_virus_saida8}", "left", '-508px', { fromValue: '429px'}], position: 20250, duration: 750 },
            { id: "eid720", tween: [ "transform", "${_virus_receptor7}", "rotateZ", '82deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid523", tween: [ "style", "${_texto_dentrodocorpo}", "clip", [0,176,122,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,122,0]}], position: 2402, duration: 750, easing: "swing" },
            { id: "eid899", tween: [ "style", "${_virus_base3}", "left", '324px', { fromValue: '234px'}], position: 11750, duration: 250, easing: "swing" },
            { id: "eid902", tween: [ "style", "${_virus_base3}", "left", '298px', { fromValue: '324px'}], position: 12000, duration: 250, easing: "swing" },
            { id: "eid999", tween: [ "style", "${_virus_base3}", "left", '398px', { fromValue: '298px'}], position: 16750, duration: 750, easing: "swing" },
            { id: "eid1035", tween: [ "style", "${_virus_base3}", "left", '608px', { fromValue: '398px'}], position: 18500, duration: 750, easing: "swing" },
            { id: "eid1206", tween: [ "style", "${_virus_base3}", "left", '-320px', { fromValue: '608px'}], position: 20250, duration: 750 },
            { id: "eid520", tween: [ "style", "${_texto_dentrodocorpo}", "opacity", '1', { fromValue: '0.000000'}], position: 2402, duration: 250, easing: "swing" },
            { id: "eid647", tween: [ "transform", "${_rna5}", "rotateZ", '30deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid555", tween: [ "style", "${_virus_celula}", "left", '247px', { fromValue: '137px'}], position: 4932, duration: 818, easing: "swing" },
            { id: "eid1188", tween: [ "style", "${_virus_celula}", "left", '-680px', { fromValue: '247px'}], position: 20250, duration: 750 },
            { id: "eid783", tween: [ "style", "${_virus_saida3}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid882", tween: [ "style", "${_virus_saida3}", "opacity", '0', { fromValue: '1'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid711", tween: [ "style", "${_virus_receptor8}", "left", '497px', { fromValue: '465px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2461", tween: [ "style", "${_virus_receptor8}", "left", '-440px', { fromValue: '497px'}], position: 20250, duration: 750 },
            { id: "eid1264", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '977px'}], position: 20250, duration: 750 },
            { id: "eid1183", tween: [ "style", "${_texto_dentrodacelula}", "left", '-520px', { fromValue: '407px'}], position: 20250, duration: 750 },
            { id: "eid2424", tween: [ "style", "${_avanca}", "left", '944px', { fromValue: '853px'}], position: 21436, duration: 719 },
            { id: "eid901", tween: [ "style", "${_virus_base3}", "opacity", '1', { fromValue: '0'}], position: 11750, duration: 250, easing: "swing" },
            { id: "eid1259", tween: [ "style", "${_virus_base3}", "opacity", '0', { fromValue: '1'}], position: 18976, duration: 0, easing: "swing" },
            { id: "eid2039", tween: [ "style", "${_espirroinvertido_animado}", "left", '549px', { fromValue: '1508px'}], position: 20250, duration: 718 },
            { id: "eid2491", tween: [ "style", "${_espirroinvertido_animado}", "left", '-482px', { fromValue: '549px'}], position: 21436, duration: 719 },
            { id: "eid673", tween: [ "style", "${_virus_receptor5}", "left", '451px', { fromValue: '465px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2457", tween: [ "style", "${_virus_receptor5}", "left", '-486px', { fromValue: '451px'}], position: 20250, duration: 750 },
            { id: "eid757", tween: [ "style", "${_virus_saida2}", "top", '194px', { fromValue: '294px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid871", tween: [ "style", "${_virus_saida2}", "top", '81px', { fromValue: '194px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1147", tween: [ "style", "${_virus_saida2}", "top", '81px', { fromValue: '81px'}], position: 20250, duration: 0 },
            { id: "eid679", tween: [ "style", "${_virus_receptor}", "left", '590px', { fromValue: '465px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid864", tween: [ "style", "${_virus_receptor}", "left", '678px', { fromValue: '590px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1211", tween: [ "style", "${_virus_receptor}", "left", '-250px', { fromValue: '678px'}], position: 20250, duration: 750 },
            { id: "eid810", tween: [ "style", "${_virus_saida9}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid986", tween: [ "style", "${_virus_saida9}", "opacity", '0', { fromValue: '1'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid997", tween: [ "style", "${_virus_haste5}", "opacity", '1', { fromValue: '0'}], position: 15250, duration: 750, easing: "swing" },
            { id: "eid1246", tween: [ "style", "${_virus_haste5}", "opacity", '0', { fromValue: '1'}], position: 19955, duration: 0, easing: "swing" },
            { id: "eid506", tween: [ "style", "${_texto_transmissao}", "left", '6px', { fromValue: '6px'}], position: 1500, duration: 0, easing: "swing" },
            { id: "eid675", tween: [ "style", "${_virus_receptor3}", "left", '581px', { fromValue: '465px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid923", tween: [ "style", "${_virus_receptor3}", "left", '698px', { fromValue: '581px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1225", tween: [ "style", "${_virus_receptor3}", "left", '-230px', { fromValue: '698px'}], position: 20250, duration: 750 },
            { id: "eid1169", tween: [ "style", "${_producao_animado}", "top", '29px', { fromValue: '29px'}], position: 20250, duration: 0 },
            { id: "eid834", tween: [ "style", "${_virus_base4}", "top", '-183px', { fromValue: '-183px'}], position: 12000, duration: 0, easing: "swing" },
            { id: "eid1045", tween: [ "style", "${_virus_base4}", "top", '-183px', { fromValue: '-183px'}], position: 18865, duration: 0, easing: "swing" },
            { id: "eid1171", tween: [ "style", "${_virus_base4}", "top", '-183px', { fromValue: '-183px'}], position: 20250, duration: 0 },
            { id: "eid898", tween: [ "style", "${_virus_base3}", "top", '-311px', { fromValue: '-311px'}], position: 11750, duration: 0, easing: "swing" },
            { id: "eid1036", tween: [ "style", "${_virus_base3}", "top", '-310px', { fromValue: '-311px'}], position: 18500, duration: 750, easing: "swing" },
            { id: "eid1174", tween: [ "style", "${_virus_base3}", "top", '-310px', { fromValue: '-310px'}], position: 20250, duration: 0 },
            { id: "eid1178", tween: [ "style", "${_virus_celula2}", "top", '9px', { fromValue: '9px'}], position: 20250, duration: 0 },
            { id: "eid1159", tween: [ "style", "${_texto_fabrica}", "top", '369px', { fromValue: '369px'}], position: 20250, duration: 0 },
            { id: "eid759", tween: [ "style", "${_virus_saida}", "top", '242px', { fromValue: '296px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid863", tween: [ "style", "${_virus_saida}", "top", '80px', { fromValue: '242px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1150", tween: [ "style", "${_virus_saida}", "top", '80px', { fromValue: '80px'}], position: 20250, duration: 0 },
            { id: "eid1200", tween: [ "style", "${_virus_celula1}", "left", '-577px', { fromValue: '351px'}], position: 20250, duration: 750 },
            { id: "eid1215", tween: [ "style", "${_texto_producaoserie3}", "left", '-178px', { fromValue: '750px'}], position: 20250, duration: 750 },
            { id: "eid507", tween: [ "style", "${_texto_transmissor}", "top", '403px', { fromValue: '403px'}], position: 1500, duration: 0, easing: "swing" },
            { id: "eid762", tween: [ "style", "${_virus_saida4}", "left", '670px', { fromValue: '480px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid925", tween: [ "style", "${_virus_saida4}", "left", '703px', { fromValue: '670px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1216", tween: [ "style", "${_virus_saida4}", "left", '-225px', { fromValue: '703px'}], position: 20250, duration: 750 },
            { id: "eid789", tween: [ "transform", "${_virus_saida5}", "rotateZ", '57deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid809", tween: [ "style", "${_virus_saida10}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid985", tween: [ "style", "${_virus_saida10}", "opacity", '0', { fromValue: '1'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid890", tween: [ "style", "${_virus_haste3}", "top", '-311px', { fromValue: '-275px'}], position: 14250, duration: 750, easing: "swing" },
            { id: "eid891", tween: [ "style", "${_virus_haste3}", "top", '-306px', { fromValue: '-311px'}], position: 15000, duration: 750, easing: "swing" },
            { id: "eid1038", tween: [ "style", "${_virus_haste3}", "top", '-305px', { fromValue: '-306px'}], position: 18500, duration: 750, easing: "swing" },
            { id: "eid1176", tween: [ "style", "${_virus_haste3}", "top", '-305px', { fromValue: '-305px'}], position: 20250, duration: 0 },
            { id: "eid632", tween: [ "style", "${_rna4}", "left", '630px', { fromValue: '453px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid1018", tween: [ "style", "${_rna4}", "left", '669px', { fromValue: '630px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1022", tween: [ "style", "${_rna4}", "left", '767px', { fromValue: '669px'}], position: 16750, duration: 750, easing: "swing" },
            { id: "eid1039", tween: [ "style", "${_rna4}", "left", '977px', { fromValue: '767px'}], position: 18500, duration: 750, easing: "swing" },
            { id: "eid1186", tween: [ "style", "${_rna4}", "left", '49px', { fromValue: '977px'}], position: 20250, duration: 750 },
            { id: "eid2489", tween: [ "style", "${_espirroinvertido_animado}", "top", '53px', { fromValue: '53px'}], position: 21436, duration: 0, easing: "swing" },
            { id: "eid495", tween: [ "style", "${_texto_respiracao}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500, easing: "swing" },
            { id: "eid766", tween: [ "style", "${_virus_saida6}", "left", '581px', { fromValue: '480px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid929", tween: [ "style", "${_virus_saida6}", "left", '703px', { fromValue: '581px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1187", tween: [ "style", "${_virus_saida6}", "left", '-225px', { fromValue: '703px'}], position: 20250, duration: 750 },
            { id: "eid648", tween: [ "transform", "${_rna4}", "rotateZ", '33deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid755", tween: [ "style", "${_virus_saida8}", "top", '185px', { fromValue: '296px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2454", tween: [ "style", "${_virus_saida8}", "top", '186px', { fromValue: '185px'}], position: 20250, duration: 750 },
            { id: "eid765", tween: [ "style", "${_virus_saida3}", "top", '273px', { fromValue: '301px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid867", tween: [ "style", "${_virus_saida3}", "top", '79px', { fromValue: '273px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1146", tween: [ "style", "${_virus_saida3}", "top", '79px', { fromValue: '79px'}], position: 20250, duration: 0 },
            { id: "eid709", tween: [ "style", "${_virus_receptor7}", "left", '622px', { fromValue: '465px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid977", tween: [ "style", "${_virus_receptor7}", "left", '692px', { fromValue: '622px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1213", tween: [ "style", "${_virus_receptor7}", "left", '-236px', { fromValue: '692px'}], position: 20250, duration: 750 },
            { id: "eid798", tween: [ "style", "${_virus_saida10}", "left", '614px', { fromValue: '473px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid983", tween: [ "style", "${_virus_saida10}", "left", '703px', { fromValue: '614px'}], position: 14250, duration: 1000, easing: "swing" },
            { id: "eid1193", tween: [ "style", "${_virus_saida10}", "left", '-225px', { fromValue: '703px'}], position: 20250, duration: 750 },
            { id: "eid894", tween: [ "style", "${_virus_haste3}", "opacity", '1', { fromValue: '0'}], position: 14250, duration: 750, easing: "swing" },
            { id: "eid1260", tween: [ "style", "${_virus_haste3}", "opacity", '0', { fromValue: '1'}], position: 18976, duration: 0, easing: "swing" },
            { id: "eid764", tween: [ "style", "${_virus_saida3}", "left", '672px', { fromValue: '480px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid866", tween: [ "style", "${_virus_saida3}", "left", '700px', { fromValue: '672px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1218", tween: [ "style", "${_virus_saida3}", "left", '-228px', { fromValue: '700px'}], position: 20250, duration: 750 },
            { id: "eid630", tween: [ "style", "${_rna3}", "left", '527px', { fromValue: '453px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid2451", tween: [ "style", "${_rna3}", "left", '-410px', { fromValue: '527px'}], position: 20250, duration: 750 },
            { id: "eid787", tween: [ "transform", "${_virus_saida7}", "rotateZ", '54deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid758", tween: [ "style", "${_virus_saida}", "left", '646px', { fromValue: '473px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid862", tween: [ "style", "${_virus_saida}", "left", '697px', { fromValue: '646px'}], position: 13250, duration: 1000, easing: "swing" },
            { id: "eid1210", tween: [ "style", "${_virus_saida}", "left", '-231px', { fromValue: '697px'}], position: 20250, duration: 750 },
            { id: "eid3113", tween: [ "style", "${_texto_item8}", "opacity", '1', { fromValue: '0.000000'}], position: 21436, duration: 719 },
            { id: "eid534", tween: [ "transform", "${_rna}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 3000, duration: 2750, easing: "swing" },
            { id: "eid585", tween: [ "transform", "${_rna}", "rotateZ", '91deg', { fromValue: '180deg'}], position: 8000, duration: 1000, easing: "swing" },
            { id: "eid600", tween: [ "transform", "${_rna}", "rotateZ", '48deg', { fromValue: '91deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid760", tween: [ "style", "${_virus_saida5}", "left", '599px', { fromValue: '480px'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid921", tween: [ "style", "${_virus_saida5}", "left", '703px', { fromValue: '599px'}], position: 13750, duration: 1000, easing: "swing" },
            { id: "eid1208", tween: [ "style", "${_virus_saida5}", "left", '-225px', { fromValue: '703px'}], position: 20250, duration: 750 },
            { id: "eid666", tween: [ "transform", "${_virus_receptor}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 11000, duration: 0, easing: "swing" },
            { id: "eid792", tween: [ "transform", "${_virus_saida2}", "rotateZ", '56deg', { fromValue: '0deg'}], position: 11000, duration: 750, easing: "swing" },
            { id: "eid485", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_espirrando_animado4}', [] ], ""], position: 0 },
            { id: "eid486", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_inalando_animado}', [] ], ""], position: 0 },
            { id: "eid1745", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_perdigotos2}', [] ], ""], position: 500 },
            { id: "eid3017", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_alerta_animado5}', [] ], ""], position: 1486.1745312382 },
            { id: "eid517", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_espirrando_animado4}', [] ], ""], position: 2401.7556867357 },
            { id: "eid1842", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_perdigotos2}', [] ], ""], position: 2401.7556867357 },
            { id: "eid516", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_inalando_animado}', [] ], ""], position: 2401.7556867357 },
            { id: "eid3018", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_alerta_animado6}', [] ], ""], position: 7242 },
            { id: "eid3019", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_alerta_animado7}', [] ], ""], position: 9390 },
            { id: "eid3020", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_alerta_animado8}', [] ], ""], position: 16705.647005721 },
            { id: "eid1098", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_producao_animado}', [] ], ""], position: 18865 },
            { id: "eid1226", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_producao_animado}', [] ], ""], position: 20967.599578675 },
            { id: "eid2063", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_espirroinvertido_animado}', [] ], ""], position: 21428 },
            { id: "eid2507", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_espirrandoinvertidomaior_animado}', [] ], ""], position: 22155 }         ]
      }
   }
},
"inalando_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','825px','586px','auto','auto'],
      id: 'sprite_inalando2',
      type: 'image',
      clip: ['rect(0px 256px 586px 0px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_inalando.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '586px'],
            ["style", "width", '825px']
         ],
         "${_sprite_inalando2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,256,586,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4884,
         autoPlay: false,
         timeline: [
            { id: "eid413", tween: [ "style", "${_sprite_inalando2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid414", tween: [ "style", "${_sprite_inalando2}", "background-position", [-279,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 },
            { id: "eid445", tween: [ "style", "${_sprite_inalando2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-281,0]}], position: 1000, duration: 0 },
            { id: "eid446", tween: [ "style", "${_sprite_inalando2}", "background-position", [-279,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1500, duration: 0 },
            { id: "eid447", tween: [ "style", "${_sprite_inalando2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-281,0]}], position: 2000, duration: 0 },
            { id: "eid448", tween: [ "style", "${_sprite_inalando2}", "background-position", [-552,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 3000, duration: 0 },
            { id: "eid449", tween: [ "style", "${_sprite_inalando2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-552,0]}], position: 4000, duration: 0 },
            { id: "eid474", tween: [ "style", "${_sprite_inalando2}", "background-position", [-552,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4250, duration: 0 },
            { id: "eid475", tween: [ "style", "${_sprite_inalando2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-552,0]}], position: 4884, duration: 0 }         ]
      }
   }
},
"espirrando_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','0px','895px','617px','auto','auto'],
      id: 'sprite_gripado_maior',
      type: 'image',
      clip: ['rect(0px 505px 617px 0px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_gripado_maior.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sprite_gripado_maior}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,505,617,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Ellipse7}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '316px']
         ],
         "${_Ellipse5}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '310px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '326px']
         ],
         "${_Ellipse7Copy}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '316px']
         ],
         "${_Ellipse3Copy2}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '327px']
         ],
         "${symbolSelector}": [
            ["style", "height", '617px'],
            ["style", "width", '895px']
         ],
         "${_Ellipse2}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '326px']
         ],
         "${_Ellipse5Copy}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '310px']
         ],
         "${_Ellipse3Copy}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '327px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4884,
         autoPlay: false,
         timeline: [
            { id: "eid462", tween: [ "style", "${_Ellipse5Copy}", "left", '499px', { fromValue: '310px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid463", tween: [ "style", "${_Ellipse5Copy}", "left", '740px', { fromValue: '499px'}], position: 1750, duration: 2250 },
            { id: "eid464", tween: [ "style", "${_Ellipse5Copy}", "left", '926px', { fromValue: '740px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid450", tween: [ "style", "${_Ellipse2Copy}", "top", '280px', { fromValue: '132px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid451", tween: [ "style", "${_Ellipse2Copy}", "top", '168px', { fromValue: '280px'}], position: 1750, duration: 2250 },
            { id: "eid452", tween: [ "style", "${_Ellipse2Copy}", "top", '124px', { fromValue: '168px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid436", tween: [ "style", "${_Ellipse3Copy}", "top", '275px', { fromValue: '136px'}], position: 500, duration: 250 },
            { id: "eid437", tween: [ "style", "${_Ellipse3Copy}", "top", '181px', { fromValue: '275px'}], position: 750, duration: 2250 },
            { id: "eid438", tween: [ "style", "${_Ellipse3Copy}", "top", '122px', { fromValue: '181px'}], position: 3000, duration: 884 },
            { id: "eid424", tween: [ "style", "${_Ellipse5}", "top", '248px', { fromValue: '68px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid425", tween: [ "style", "${_Ellipse5}", "top", '140px', { fromValue: '248px'}], position: 750, duration: 2250 },
            { id: "eid426", tween: [ "style", "${_Ellipse5}", "top", '110px', { fromValue: '140px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid442", tween: [ "style", "${_Ellipse2}", "left", '530px', { fromValue: '326px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid443", tween: [ "style", "${_Ellipse2}", "left", '779px', { fromValue: '530px'}], position: 750, duration: 2250 },
            { id: "eid444", tween: [ "style", "${_Ellipse2}", "left", '931px', { fromValue: '779px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid433", tween: [ "style", "${_Ellipse3Copy}", "left", '492px', { fromValue: '327px'}], position: 500, duration: 250 },
            { id: "eid434", tween: [ "style", "${_Ellipse3Copy}", "left", '728px', { fromValue: '492px'}], position: 750, duration: 2250 },
            { id: "eid435", tween: [ "style", "${_Ellipse3Copy}", "left", '933px', { fromValue: '728px'}], position: 3000, duration: 884 },
            { id: "eid415", tween: [ "style", "${_Ellipse7}", "top", '286px', { fromValue: '126px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid416", tween: [ "style", "${_Ellipse7}", "top", '127px', { fromValue: '286px'}], position: 750, duration: 2250 },
            { id: "eid417", tween: [ "style", "${_Ellipse7}", "top", '118px', { fromValue: '127px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid421", tween: [ "style", "${_Ellipse5}", "left", '499px', { fromValue: '310px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid422", tween: [ "style", "${_Ellipse5}", "left", '740px', { fromValue: '499px'}], position: 750, duration: 2250 },
            { id: "eid423", tween: [ "style", "${_Ellipse5}", "left", '926px', { fromValue: '740px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid408", tween: [ "style", "${_sprite_gripado_maior}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_sprite_gripado_maior}", "background-position", [-380,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 },
            { id: "eid410", tween: [ "style", "${_sprite_gripado_maior}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-380,0]}], position: 1000, duration: 0 },
            { id: "eid411", tween: [ "style", "${_sprite_gripado_maior}", "background-position", [-380,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1500, duration: 0 },
            { id: "eid412", tween: [ "style", "${_sprite_gripado_maior}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-380,0]}], position: 2000, duration: 0 },
            { id: "eid465", tween: [ "style", "${_Ellipse5Copy}", "top", '248px', { fromValue: '68px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid466", tween: [ "style", "${_Ellipse5Copy}", "top", '140px', { fromValue: '248px'}], position: 1750, duration: 2250 },
            { id: "eid467", tween: [ "style", "${_Ellipse5Copy}", "top", '110px', { fromValue: '140px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid468", tween: [ "style", "${_Ellipse7Copy}", "top", '286px', { fromValue: '126px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid469", tween: [ "style", "${_Ellipse7Copy}", "top", '127px', { fromValue: '286px'}], position: 1750, duration: 2250 },
            { id: "eid470", tween: [ "style", "${_Ellipse7Copy}", "top", '118px', { fromValue: '127px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid418", tween: [ "style", "${_Ellipse7}", "left", '502px', { fromValue: '316px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid419", tween: [ "style", "${_Ellipse7}", "left", '766px', { fromValue: '502px'}], position: 750, duration: 2250 },
            { id: "eid420", tween: [ "style", "${_Ellipse7}", "left", '916px', { fromValue: '766px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid439", tween: [ "style", "${_Ellipse2}", "top", '280px', { fromValue: '132px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid440", tween: [ "style", "${_Ellipse2}", "top", '168px', { fromValue: '280px'}], position: 750, duration: 2250 },
            { id: "eid441", tween: [ "style", "${_Ellipse2}", "top", '124px', { fromValue: '168px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid471", tween: [ "style", "${_Ellipse7Copy}", "left", '502px', { fromValue: '316px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid472", tween: [ "style", "${_Ellipse7Copy}", "left", '766px', { fromValue: '502px'}], position: 1750, duration: 2250 },
            { id: "eid473", tween: [ "style", "${_Ellipse7Copy}", "left", '916px', { fromValue: '766px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid456", tween: [ "style", "${_Ellipse3Copy2}", "top", '275px', { fromValue: '136px'}], position: 1500, duration: 250 },
            { id: "eid457", tween: [ "style", "${_Ellipse3Copy2}", "top", '181px', { fromValue: '275px'}], position: 1750, duration: 2250 },
            { id: "eid458", tween: [ "style", "${_Ellipse3Copy2}", "top", '122px', { fromValue: '181px'}], position: 4000, duration: 884 },
            { id: "eid459", tween: [ "style", "${_Ellipse3Copy2}", "left", '492px', { fromValue: '327px'}], position: 1500, duration: 250 },
            { id: "eid460", tween: [ "style", "${_Ellipse3Copy2}", "left", '728px', { fromValue: '492px'}], position: 1750, duration: 2250 },
            { id: "eid461", tween: [ "style", "${_Ellipse3Copy2}", "left", '933px', { fromValue: '728px'}], position: 4000, duration: 884 },
            { id: "eid453", tween: [ "style", "${_Ellipse2Copy}", "left", '530px', { fromValue: '326px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid454", tween: [ "style", "${_Ellipse2Copy}", "left", '779px', { fromValue: '530px'}], position: 1750, duration: 2250 },
            { id: "eid455", tween: [ "style", "${_Ellipse2Copy}", "left", '931px', { fromValue: '779px'}], position: 4000, duration: 884, easing: "swing" }         ]
      }
   }
},
"producao_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'virus_celulacompleta',
      type: 'image',
      rect: ['0px','0px','140px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_celulacompleta.png','0px','0px']
   },
   {
      id: 'virus_celulacompletaCopy',
      type: 'image',
      rect: ['0px','0px','140px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_celulacompleta.png','0px','0px']
   },
   {
      id: 'virus_celulacompletaCopy2',
      type: 'image',
      rect: ['0px','0px','140px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/virus_celulacompleta.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '395px'],
            ["style", "width", '140px']
         ],
         "${_virus_celulacompletaCopy}": [
            ["style", "top", '125px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_virus_celulacompletaCopy2}": [
            ["style", "top", '256px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_virus_celulacompleta}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5309,
         autoPlay: false,
         timeline: [
            { id: "eid1061", tween: [ "style", "${_virus_celulacompleta}", "top", '0px', { fromValue: '0px'}], position: 16, duration: 0, easing: "swing" },
            { id: "eid1084", tween: [ "style", "${_virus_celulacompleta}", "top", '0px', { fromValue: '0px'}], position: 1828, duration: 0, easing: "swing" },
            { id: "eid1092", tween: [ "style", "${_virus_celulacompleta}", "top", '0px', { fromValue: '0px'}], position: 3908, duration: 0, easing: "swing" },
            { id: "eid1062", tween: [ "style", "${_virus_celulacompleta}", "left", '110px', { fromValue: '0px'}], position: 16, duration: 406, easing: "swing" },
            { id: "eid1065", tween: [ "style", "${_virus_celulacompleta}", "left", '93px', { fromValue: '110px'}], position: 422, duration: 500, easing: "swing" },
            { id: "eid1085", tween: [ "style", "${_virus_celulacompleta}", "left", '168px', { fromValue: '93px'}], position: 1828, duration: 844, easing: "swing" },
            { id: "eid1093", tween: [ "style", "${_virus_celulacompleta}", "left", '362px', { fromValue: '168px'}], position: 3672, duration: 750, easing: "swing" },
            { id: "eid1070", tween: [ "style", "${_virus_celulacompletaCopy2}", "left", '110px', { fromValue: '0px'}], position: 360, duration: 406, easing: "swing" },
            { id: "eid1071", tween: [ "style", "${_virus_celulacompletaCopy2}", "left", '88px', { fromValue: '110px'}], position: 766, duration: 500, easing: "swing" },
            { id: "eid1090", tween: [ "style", "${_virus_celulacompletaCopy2}", "left", '179px', { fromValue: '88px'}], position: 2741, duration: 931, easing: "swing" },
            { id: "eid1097", tween: [ "style", "${_virus_celulacompletaCopy2}", "left", '362px', { fromValue: '179px'}], position: 4422, duration: 887, easing: "swing" },
            { id: "eid1079", tween: [ "style", "${_virus_celulacompletaCopy}", "opacity", '1', { fromValue: '0'}], position: 156, duration: 16, easing: "swing" },
            { id: "eid1231", tween: [ "style", "${_virus_celulacompletaCopy}", "opacity", '0', { fromValue: '1'}], position: 4456, duration: 0, easing: "swing" },
            { id: "eid1069", tween: [ "style", "${_virus_celulacompletaCopy2}", "top", '256px', { fromValue: '256px'}], position: 922, duration: 0, easing: "swing" },
            { id: "eid1074", tween: [ "style", "${_virus_celulacompleta}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 16, easing: "swing" },
            { id: "eid1228", tween: [ "style", "${_virus_celulacompleta}", "opacity", '0', { fromValue: '1'}], position: 4091, duration: 0, easing: "swing" },
            { id: "eid1067", tween: [ "style", "${_virus_celulacompletaCopy}", "left", '110px', { fromValue: '0px'}], position: 172, duration: 406, easing: "swing" },
            { id: "eid1068", tween: [ "style", "${_virus_celulacompletaCopy}", "left", '88px', { fromValue: '110px'}], position: 578, duration: 500, easing: "swing" },
            { id: "eid1088", tween: [ "style", "${_virus_celulacompletaCopy}", "left", '181px', { fromValue: '88px'}], position: 2261, duration: 911, easing: "swing" },
            { id: "eid1099", tween: [ "style", "${_virus_celulacompletaCopy}", "left", '366px', { fromValue: '181px'}], position: 4044, duration: 731, easing: "swing" },
            { id: "eid1082", tween: [ "style", "${_virus_celulacompletaCopy2}", "opacity", '1', { fromValue: '0'}], position: 344, duration: 16, easing: "swing" },
            { id: "eid1239", tween: [ "style", "${_virus_celulacompletaCopy2}", "opacity", '0', { fromValue: '1'}], position: 4957, duration: 0, easing: "swing" },
            { id: "eid1066", tween: [ "style", "${_virus_celulacompletaCopy}", "top", '125px', { fromValue: '125px'}], position: 172, duration: 0, easing: "swing" },
            { id: "eid1089", tween: [ "style", "${_virus_celulacompletaCopy}", "top", '128px', { fromValue: '125px'}], position: 2261, duration: 911, easing: "swing" }         ]
      }
   }
},
"espirrando2_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.41','0.41']],
      rect: ['307px','129px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.2','0.2']],
      rect: ['317px','121px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['324px','133px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['322px','135px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,4,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.41','0.41']],
      rect: ['307px','129px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.2','0.2']],
      rect: ['317px','121px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['324px','133px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['322px','135px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,4,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','0px','895px','621px','auto','auto'],
      id: 'sprite_vitima_maior',
      type: 'image',
      clip: ['rect(0px 510px 621px 0px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_vitima_maior.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sprite_vitima_maior}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,510,621,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Ellipse7}": [
            ["style", "top", '129px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '307px']
         ],
         "${_Ellipse5}": [
            ["style", "top", '121px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '317px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '135px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '4px'],
            ["style", "left", '322px']
         ],
         "${_Ellipse7Copy}": [
            ["style", "top", '129px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '307px']
         ],
         "${_Ellipse3}": [
            ["style", "top", '133px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '324px']
         ],
         "${_Ellipse5Copy}": [
            ["style", "top", '121px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '317px']
         ],
         "${_Ellipse2}": [
            ["style", "top", '135px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '4px'],
            ["style", "left", '322px']
         ],
         "${symbolSelector}": [
            ["style", "height", '621px'],
            ["style", "width", '895px']
         ],
         "${_Ellipse3Copy}": [
            ["style", "top", '133px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '324px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: false,
         timeline: [
            { id: "eid1288", tween: [ "style", "${_Ellipse3}", "left", '504px', { fromValue: '324px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1311", tween: [ "style", "${_Ellipse3}", "left", '624px', { fromValue: '504px'}], position: 750, duration: 1000 },
            { id: "eid1320", tween: [ "style", "${_Ellipse3}", "left", '842px', { fromValue: '624px'}], position: 1750, duration: 500 },
            { id: "eid1301", tween: [ "style", "${_Ellipse2Copy}", "top", '295px', { fromValue: '135px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1309", tween: [ "style", "${_Ellipse2Copy}", "top", '158px', { fromValue: '295px'}], position: 750, duration: 1000 },
            { id: "eid1333", tween: [ "style", "${_Ellipse2Copy}", "top", '109px', { fromValue: '158px'}], position: 1750, duration: 500 },
            { id: "eid1299", tween: [ "style", "${_Ellipse3Copy}", "top", '293px', { fromValue: '133px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1308", tween: [ "style", "${_Ellipse3Copy}", "top", '156px', { fromValue: '293px'}], position: 750, duration: 1000, easing: "swing" },
            { id: "eid1331", tween: [ "style", "${_Ellipse3Copy}", "top", '107px', { fromValue: '156px'}], position: 1750, duration: 500 },
            { id: "eid1265", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid1266", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [-377,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 },
            { id: "eid1267", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-377,0]}], position: 1000, duration: 0 },
            { id: "eid1268", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [-377,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1500, duration: 0 },
            { id: "eid1269", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-377,0]}], position: 2000, duration: 0 },
            { id: "eid1295", tween: [ "style", "${_Ellipse5}", "top", '281px', { fromValue: '121px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1306", tween: [ "style", "${_Ellipse5}", "top", '144px', { fromValue: '281px'}], position: 750, duration: 1000 },
            { id: "eid1327", tween: [ "style", "${_Ellipse5}", "top", '95px', { fromValue: '144px'}], position: 1750, duration: 500 },
            { id: "eid1286", tween: [ "style", "${_Ellipse2}", "left", '502px', { fromValue: '322px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1310", tween: [ "style", "${_Ellipse2}", "left", '622px', { fromValue: '502px'}], position: 750, duration: 1000 },
            { id: "eid1318", tween: [ "style", "${_Ellipse2}", "left", '840px', { fromValue: '622px'}], position: 1750, duration: 500 },
            { id: "eid1298", tween: [ "style", "${_Ellipse3Copy}", "left", '504px', { fromValue: '324px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1316", tween: [ "style", "${_Ellipse3Copy}", "left", '624px', { fromValue: '504px'}], position: 750, duration: 1000 },
            { id: "eid1330", tween: [ "style", "${_Ellipse3Copy}", "left", '842px', { fromValue: '624px'}], position: 1750, duration: 500 },
            { id: "eid1297", tween: [ "style", "${_Ellipse7}", "top", '289px', { fromValue: '129px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1307", tween: [ "style", "${_Ellipse7}", "top", '152px', { fromValue: '289px'}], position: 750, duration: 1000 },
            { id: "eid1329", tween: [ "style", "${_Ellipse7}", "top", '103px', { fromValue: '152px'}], position: 1750, duration: 500 },
            { id: "eid1294", tween: [ "style", "${_Ellipse5}", "left", '497px', { fromValue: '317px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1314", tween: [ "style", "${_Ellipse5}", "left", '617px', { fromValue: '497px'}], position: 750, duration: 1000, easing: "swing" },
            { id: "eid1326", tween: [ "style", "${_Ellipse5}", "left", '835px', { fromValue: '617px'}], position: 1750, duration: 500 },
            { id: "eid1289", tween: [ "style", "${_Ellipse3}", "top", '293px', { fromValue: '133px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1303", tween: [ "style", "${_Ellipse3}", "top", '156px', { fromValue: '293px'}], position: 750, duration: 1000 },
            { id: "eid1321", tween: [ "style", "${_Ellipse3}", "top", '107px', { fromValue: '156px'}], position: 1750, duration: 500 },
            { id: "eid1293", tween: [ "style", "${_Ellipse5Copy}", "top", '281px', { fromValue: '121px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1305", tween: [ "style", "${_Ellipse5Copy}", "top", '144px', { fromValue: '281px'}], position: 750, duration: 1000 },
            { id: "eid1325", tween: [ "style", "${_Ellipse5Copy}", "top", '95px', { fromValue: '144px'}], position: 1750, duration: 500 },
            { id: "eid1291", tween: [ "style", "${_Ellipse7Copy}", "top", '289px', { fromValue: '129px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1304", tween: [ "style", "${_Ellipse7Copy}", "top", '152px', { fromValue: '289px'}], position: 750, duration: 1000 },
            { id: "eid1323", tween: [ "style", "${_Ellipse7Copy}", "top", '103px', { fromValue: '152px'}], position: 1750, duration: 500 },
            { id: "eid1296", tween: [ "style", "${_Ellipse7}", "left", '487px', { fromValue: '307px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1315", tween: [ "style", "${_Ellipse7}", "left", '607px', { fromValue: '487px'}], position: 750, duration: 1000 },
            { id: "eid1328", tween: [ "style", "${_Ellipse7}", "left", '825px', { fromValue: '607px'}], position: 1750, duration: 500 },
            { id: "eid1290", tween: [ "style", "${_Ellipse7Copy}", "left", '487px', { fromValue: '307px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1312", tween: [ "style", "${_Ellipse7Copy}", "left", '607px', { fromValue: '487px'}], position: 750, duration: 1000 },
            { id: "eid1322", tween: [ "style", "${_Ellipse7Copy}", "left", '825px', { fromValue: '607px'}], position: 1750, duration: 500 },
            { id: "eid1287", tween: [ "style", "${_Ellipse2}", "top", '295px', { fromValue: '135px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1302", tween: [ "style", "${_Ellipse2}", "top", '158px', { fromValue: '295px'}], position: 750, duration: 1000 },
            { id: "eid1319", tween: [ "style", "${_Ellipse2}", "top", '109px', { fromValue: '158px'}], position: 1750, duration: 500 },
            { id: "eid1292", tween: [ "style", "${_Ellipse5Copy}", "left", '497px', { fromValue: '317px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1313", tween: [ "style", "${_Ellipse5Copy}", "left", '617px', { fromValue: '497px'}], position: 750, duration: 1000 },
            { id: "eid1324", tween: [ "style", "${_Ellipse5Copy}", "left", '835px', { fromValue: '617px'}], position: 1750, duration: 500 },
            { id: "eid1300", tween: [ "style", "${_Ellipse2Copy}", "left", '502px', { fromValue: '322px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1317", tween: [ "style", "${_Ellipse2Copy}", "left", '622px', { fromValue: '502px'}], position: 750, duration: 1000 },
            { id: "eid1332", tween: [ "style", "${_Ellipse2Copy}", "left", '840px', { fromValue: '622px'}], position: 1750, duration: 500 }         ]
      }
   }
},
"espirrandoinvertido_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,4,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,4,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,4,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,4,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,4,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,2,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[0,0],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,4,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '4px'],
            ["style", "left", '813px']
         ],
         "${_Ellipse7}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '803px']
         ],
         "${_Ellipse5}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '797px']
         ],
         "${_Ellipse7Copy}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '803px']
         ],
         "${_Ellipse7Copy4}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '803px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '4px'],
            ["style", "left", '813px']
         ],
         "${_Ellipse3Copy3}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '814px']
         ],
         "${_Ellipse5Copy2}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '797px']
         ],
         "${_Ellipse7Copy5}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '803px']
         ],
         "${_Ellipse2Copy4}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '4px'],
            ["style", "left", '813px']
         ],
         "${_Ellipse3Copy4}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '814px']
         ],
         "${_Ellipse5Copy5}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '797px']
         ],
         "${symbolSelector}": [
            ["style", "height", '649px'],
            ["style", "width", '1012px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '4px'],
            ["style", "left", '813px']
         ],
         "${_Ellipse3}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '814px']
         ],
         "${_Ellipse5Copy3}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '797px']
         ],
         "${_Ellipse7Copy3}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '803px']
         ],
         "${_Ellipse3Copy5}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '814px']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '4px'],
            ["style", "left", '813px']
         ],
         "${_Ellipse3Copy2}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '814px']
         ],
         "${_Ellipse5Copy}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '797px']
         ],
         "${_Ellipse5Copy4}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '797px']
         ],
         "${_Ellipse2Copy5}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '4px'],
            ["style", "left", '813px']
         ],
         "${_Ellipse7Copy2}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '803px']
         ],
         "${_Ellipse3Copy}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '814px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4884,
         autoPlay: false,
         timeline: [
            { id: "eid1892", tween: [ "style", "${_Ellipse5Copy}", "left", '615px', { fromValue: '797px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1893", tween: [ "style", "${_Ellipse5Copy}", "left", '406px', { fromValue: '615px'}], position: 750, duration: 2250 },
            { id: "eid1894", tween: [ "style", "${_Ellipse5Copy}", "left", '292px', { fromValue: '406px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1955", tween: [ "style", "${_Ellipse3Copy5}", "top", '275px', { fromValue: '136px'}], position: 1500, duration: 250 },
            { id: "eid1956", tween: [ "style", "${_Ellipse3Copy5}", "top", '259px', { fromValue: '275px'}], position: 1750, duration: 2250 },
            { id: "eid1957", tween: [ "style", "${_Ellipse3Copy5}", "top", '150px', { fromValue: '259px'}], position: 4000, duration: 884 },
            { id: "eid1949", tween: [ "style", "${_Ellipse2Copy5}", "left", '686px', { fromValue: '813px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1950", tween: [ "style", "${_Ellipse2Copy5}", "left", '445px', { fromValue: '686px'}], position: 1750, duration: 2250 },
            { id: "eid1951", tween: [ "style", "${_Ellipse2Copy5}", "left", '297px', { fromValue: '445px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1886", tween: [ "style", "${_Ellipse3Copy}", "top", '261px', { fromValue: '136px'}], position: 500, duration: 250 },
            { id: "eid1887", tween: [ "style", "${_Ellipse3Copy}", "top", '259px', { fromValue: '261px'}], position: 750, duration: 2250 },
            { id: "eid1888", tween: [ "style", "${_Ellipse3Copy}", "top", '150px', { fromValue: '259px'}], position: 3000, duration: 884 },
            { id: "eid1967", tween: [ "style", "${_Ellipse7Copy5}", "top", '286px', { fromValue: '126px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1968", tween: [ "style", "${_Ellipse7Copy5}", "top", '205px', { fromValue: '286px'}], position: 1750, duration: 2250 },
            { id: "eid1969", tween: [ "style", "${_Ellipse7Copy5}", "top", '146px', { fromValue: '205px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1381", tween: [ "style", "${_Ellipse3Copy3}", "top", '275px', { fromValue: '136px'}], position: 500, duration: 250 },
            { id: "eid1382", tween: [ "style", "${_Ellipse3Copy3}", "top", '259px', { fromValue: '275px'}], position: 750, duration: 2250 },
            { id: "eid1383", tween: [ "style", "${_Ellipse3Copy3}", "top", '150px', { fromValue: '259px'}], position: 3000, duration: 884 },
            { id: "eid1970", tween: [ "style", "${_Ellipse7Copy5}", "left", '658px', { fromValue: '803px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1971", tween: [ "style", "${_Ellipse7Copy5}", "left", '432px', { fromValue: '658px'}], position: 1750, duration: 2250 },
            { id: "eid1972", tween: [ "style", "${_Ellipse7Copy5}", "left", '282px', { fromValue: '432px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1940", tween: [ "style", "${_Ellipse5Copy4}", "left", '614px', { fromValue: '797px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1941", tween: [ "style", "${_Ellipse5Copy4}", "left", '406px', { fromValue: '614px'}], position: 1750, duration: 2250 },
            { id: "eid1942", tween: [ "style", "${_Ellipse5Copy4}", "left", '292px', { fromValue: '406px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1396", tween: [ "style", "${_Ellipse7Copy3}", "left", '658px', { fromValue: '803px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1397", tween: [ "style", "${_Ellipse7Copy3}", "left", '432px', { fromValue: '658px'}], position: 750, duration: 2250 },
            { id: "eid1398", tween: [ "style", "${_Ellipse7Copy3}", "left", '282px', { fromValue: '432px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1871", tween: [ "style", "${_Ellipse7}", "top", '233px', { fromValue: '126px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1872", tween: [ "style", "${_Ellipse7}", "top", '205px', { fromValue: '233px'}], position: 750, duration: 2250 },
            { id: "eid1873", tween: [ "style", "${_Ellipse7}", "top", '146px', { fromValue: '205px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1862", tween: [ "style", "${_Ellipse3}", "top", '331px', { fromValue: '136px'}], position: 500, duration: 250 },
            { id: "eid1863", tween: [ "style", "${_Ellipse3}", "top", '259px', { fromValue: '331px'}], position: 750, duration: 2250 },
            { id: "eid1864", tween: [ "style", "${_Ellipse3}", "top", '150px', { fromValue: '259px'}], position: 3000, duration: 884 },
            { id: "eid1943", tween: [ "style", "${_Ellipse7Copy4}", "left", '668px', { fromValue: '803px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1944", tween: [ "style", "${_Ellipse7Copy4}", "left", '432px', { fromValue: '668px'}], position: 1750, duration: 2250 },
            { id: "eid1945", tween: [ "style", "${_Ellipse7Copy4}", "left", '282px', { fromValue: '432px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1901", tween: [ "style", "${_Ellipse2Copy2}", "left", '620px', { fromValue: '813px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1902", tween: [ "style", "${_Ellipse2Copy2}", "left", '445px', { fromValue: '620px'}], position: 1750, duration: 2250 },
            { id: "eid1903", tween: [ "style", "${_Ellipse2Copy2}", "left", '297px', { fromValue: '445px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1889", tween: [ "style", "${_Ellipse5Copy}", "top", '338px', { fromValue: '68px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1890", tween: [ "style", "${_Ellipse5Copy}", "top", '218px', { fromValue: '338px'}], position: 750, duration: 2250 },
            { id: "eid1891", tween: [ "style", "${_Ellipse5Copy}", "top", '138px', { fromValue: '218px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1946", tween: [ "style", "${_Ellipse7Copy4}", "top", '233px', { fromValue: '126px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1947", tween: [ "style", "${_Ellipse7Copy4}", "top", '205px', { fromValue: '233px'}], position: 1750, duration: 2250 },
            { id: "eid1948", tween: [ "style", "${_Ellipse7Copy4}", "top", '146px', { fromValue: '205px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1913", tween: [ "style", "${_Ellipse5Copy2}", "left", '615px', { fromValue: '797px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1914", tween: [ "style", "${_Ellipse5Copy2}", "left", '406px', { fromValue: '615px'}], position: 1750, duration: 2250 },
            { id: "eid1915", tween: [ "style", "${_Ellipse5Copy2}", "left", '292px', { fromValue: '406px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1907", tween: [ "style", "${_Ellipse3Copy2}", "top", '261px', { fromValue: '136px'}], position: 1500, duration: 250 },
            { id: "eid1908", tween: [ "style", "${_Ellipse3Copy2}", "top", '259px', { fromValue: '261px'}], position: 1750, duration: 2250 },
            { id: "eid1909", tween: [ "style", "${_Ellipse3Copy2}", "top", '150px', { fromValue: '259px'}], position: 4000, duration: 884 },
            { id: "eid1880", tween: [ "style", "${_Ellipse2Copy}", "left", '620px', { fromValue: '813px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1881", tween: [ "style", "${_Ellipse2Copy}", "left", '445px', { fromValue: '620px'}], position: 750, duration: 2250 },
            { id: "eid1882", tween: [ "style", "${_Ellipse2Copy}", "left", '297px', { fromValue: '445px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1384", tween: [ "style", "${_Ellipse3Copy3}", "left", '648px', { fromValue: '814px'}], position: 500, duration: 250 },
            { id: "eid1385", tween: [ "style", "${_Ellipse3Copy3}", "left", '394px', { fromValue: '648px'}], position: 750, duration: 2250 },
            { id: "eid1386", tween: [ "style", "${_Ellipse3Copy3}", "left", '299px', { fromValue: '394px'}], position: 3000, duration: 884 },
            { id: "eid1925", tween: [ "style", "${_Ellipse2Copy4}", "left", '647px', { fromValue: '813px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1926", tween: [ "style", "${_Ellipse2Copy4}", "left", '445px', { fromValue: '647px'}], position: 1750, duration: 2250 },
            { id: "eid1927", tween: [ "style", "${_Ellipse2Copy4}", "left", '297px', { fromValue: '445px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1937", tween: [ "style", "${_Ellipse5Copy4}", "top", '281px', { fromValue: '68px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1938", tween: [ "style", "${_Ellipse5Copy4}", "top", '218px', { fromValue: '281px'}], position: 1750, duration: 2250 },
            { id: "eid1939", tween: [ "style", "${_Ellipse5Copy4}", "top", '138px', { fromValue: '218px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1877", tween: [ "style", "${_Ellipse2Copy}", "top", '323px', { fromValue: '132px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1878", tween: [ "style", "${_Ellipse2Copy}", "top", '246px', { fromValue: '323px'}], position: 750, duration: 2250 },
            { id: "eid1879", tween: [ "style", "${_Ellipse2Copy}", "top", '152px', { fromValue: '246px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1931", tween: [ "style", "${_Ellipse3Copy4}", "top", '331px', { fromValue: '136px'}], position: 1500, duration: 250 },
            { id: "eid1932", tween: [ "style", "${_Ellipse3Copy4}", "top", '259px', { fromValue: '331px'}], position: 1750, duration: 2250 },
            { id: "eid1933", tween: [ "style", "${_Ellipse3Copy4}", "top", '150px', { fromValue: '259px'}], position: 4000, duration: 884 },
            { id: "eid1934", tween: [ "style", "${_Ellipse3Copy4}", "left", '651px', { fromValue: '814px'}], position: 1500, duration: 250 },
            { id: "eid1935", tween: [ "style", "${_Ellipse3Copy4}", "left", '394px', { fromValue: '651px'}], position: 1750, duration: 2250 },
            { id: "eid1936", tween: [ "style", "${_Ellipse3Copy4}", "left", '299px', { fromValue: '394px'}], position: 4000, duration: 884 },
            { id: "eid1883", tween: [ "style", "${_Ellipse3Copy}", "left", '624px', { fromValue: '814px'}], position: 500, duration: 250 },
            { id: "eid1884", tween: [ "style", "${_Ellipse3Copy}", "left", '394px', { fromValue: '624px'}], position: 750, duration: 2250 },
            { id: "eid1885", tween: [ "style", "${_Ellipse3Copy}", "left", '299px', { fromValue: '394px'}], position: 3000, duration: 884 },
            { id: "eid1919", tween: [ "style", "${_Ellipse7Copy2}", "left", '577px', { fromValue: '803px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1920", tween: [ "style", "${_Ellipse7Copy2}", "left", '432px', { fromValue: '577px'}], position: 1750, duration: 2250 },
            { id: "eid1921", tween: [ "style", "${_Ellipse7Copy2}", "left", '282px', { fromValue: '432px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1964", tween: [ "style", "${_Ellipse5Copy5}", "top", '248px', { fromValue: '68px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1965", tween: [ "style", "${_Ellipse5Copy5}", "top", '218px', { fromValue: '248px'}], position: 1750, duration: 2250 },
            { id: "eid1966", tween: [ "style", "${_Ellipse5Copy5}", "top", '138px', { fromValue: '218px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1853", tween: [ "style", "${_Ellipse2}", "top", '241px', { fromValue: '132px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1854", tween: [ "style", "${_Ellipse2}", "top", '246px', { fromValue: '241px'}], position: 750, duration: 2250 },
            { id: "eid1855", tween: [ "style", "${_Ellipse2}", "top", '152px', { fromValue: '246px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1865", tween: [ "style", "${_Ellipse5}", "top", '281px', { fromValue: '68px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1866", tween: [ "style", "${_Ellipse5}", "top", '218px', { fromValue: '281px'}], position: 750, duration: 2250 },
            { id: "eid1867", tween: [ "style", "${_Ellipse5}", "top", '138px', { fromValue: '218px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1874", tween: [ "style", "${_Ellipse7}", "left", '668px', { fromValue: '803px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1875", tween: [ "style", "${_Ellipse7}", "left", '432px', { fromValue: '668px'}], position: 750, duration: 2250 },
            { id: "eid1876", tween: [ "style", "${_Ellipse7}", "left", '282px', { fromValue: '432px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1856", tween: [ "style", "${_Ellipse2}", "left", '647px', { fromValue: '813px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1857", tween: [ "style", "${_Ellipse2}", "left", '445px', { fromValue: '647px'}], position: 750, duration: 2250 },
            { id: "eid1858", tween: [ "style", "${_Ellipse2}", "left", '297px', { fromValue: '445px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1952", tween: [ "style", "${_Ellipse2Copy5}", "top", '280px', { fromValue: '132px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1953", tween: [ "style", "${_Ellipse2Copy5}", "top", '246px', { fromValue: '280px'}], position: 1750, duration: 2250 },
            { id: "eid1954", tween: [ "style", "${_Ellipse2Copy5}", "top", '152px', { fromValue: '246px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1922", tween: [ "style", "${_Ellipse7Copy2}", "top", '261px', { fromValue: '126px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1923", tween: [ "style", "${_Ellipse7Copy2}", "top", '205px', { fromValue: '261px'}], position: 1750, duration: 2250 },
            { id: "eid1924", tween: [ "style", "${_Ellipse7Copy2}", "top", '146px', { fromValue: '205px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1375", tween: [ "style", "${_Ellipse2Copy3}", "left", '686px', { fromValue: '813px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1376", tween: [ "style", "${_Ellipse2Copy3}", "left", '445px', { fromValue: '686px'}], position: 750, duration: 2250 },
            { id: "eid1377", tween: [ "style", "${_Ellipse2Copy3}", "left", '297px', { fromValue: '445px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1895", tween: [ "style", "${_Ellipse7Copy}", "top", '261px', { fromValue: '126px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1896", tween: [ "style", "${_Ellipse7Copy}", "top", '205px', { fromValue: '261px'}], position: 750, duration: 2250 },
            { id: "eid1897", tween: [ "style", "${_Ellipse7Copy}", "top", '146px', { fromValue: '205px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1868", tween: [ "style", "${_Ellipse5}", "left", '614px', { fromValue: '797px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1869", tween: [ "style", "${_Ellipse5}", "left", '406px', { fromValue: '614px'}], position: 750, duration: 2250 },
            { id: "eid1870", tween: [ "style", "${_Ellipse5}", "left", '292px', { fromValue: '406px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1378", tween: [ "style", "${_Ellipse2Copy3}", "top", '280px', { fromValue: '132px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1379", tween: [ "style", "${_Ellipse2Copy3}", "top", '246px', { fromValue: '280px'}], position: 750, duration: 2250 },
            { id: "eid1380", tween: [ "style", "${_Ellipse2Copy3}", "top", '152px', { fromValue: '246px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1859", tween: [ "style", "${_Ellipse3}", "left", '651px', { fromValue: '814px'}], position: 500, duration: 250 },
            { id: "eid1860", tween: [ "style", "${_Ellipse3}", "left", '394px', { fromValue: '651px'}], position: 750, duration: 2250 },
            { id: "eid1861", tween: [ "style", "${_Ellipse3}", "left", '299px', { fromValue: '394px'}], position: 3000, duration: 884 },
            { id: "eid1393", tween: [ "style", "${_Ellipse7Copy3}", "top", '286px', { fromValue: '126px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1394", tween: [ "style", "${_Ellipse7Copy3}", "top", '205px', { fromValue: '286px'}], position: 750, duration: 2250 },
            { id: "eid1395", tween: [ "style", "${_Ellipse7Copy3}", "top", '146px', { fromValue: '205px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1910", tween: [ "style", "${_Ellipse3Copy2}", "left", '624px', { fromValue: '814px'}], position: 1500, duration: 250 },
            { id: "eid1911", tween: [ "style", "${_Ellipse3Copy2}", "left", '394px', { fromValue: '624px'}], position: 1750, duration: 2250 },
            { id: "eid1912", tween: [ "style", "${_Ellipse3Copy2}", "left", '299px', { fromValue: '394px'}], position: 4000, duration: 884 },
            { id: "eid1928", tween: [ "style", "${_Ellipse2Copy4}", "top", '241px', { fromValue: '132px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1929", tween: [ "style", "${_Ellipse2Copy4}", "top", '246px', { fromValue: '241px'}], position: 1750, duration: 2250 },
            { id: "eid1930", tween: [ "style", "${_Ellipse2Copy4}", "top", '152px', { fromValue: '246px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1904", tween: [ "style", "${_Ellipse2Copy2}", "top", '323px', { fromValue: '132px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1905", tween: [ "style", "${_Ellipse2Copy2}", "top", '246px', { fromValue: '323px'}], position: 1750, duration: 2250 },
            { id: "eid1906", tween: [ "style", "${_Ellipse2Copy2}", "top", '152px', { fromValue: '246px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1961", tween: [ "style", "${_Ellipse5Copy5}", "left", '655px', { fromValue: '797px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1962", tween: [ "style", "${_Ellipse5Copy5}", "left", '406px', { fromValue: '655px'}], position: 1750, duration: 2250 },
            { id: "eid1963", tween: [ "style", "${_Ellipse5Copy5}", "left", '292px', { fromValue: '406px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1387", tween: [ "style", "${_Ellipse5Copy3}", "top", '248px', { fromValue: '68px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1388", tween: [ "style", "${_Ellipse5Copy3}", "top", '218px', { fromValue: '248px'}], position: 750, duration: 2250 },
            { id: "eid1389", tween: [ "style", "${_Ellipse5Copy3}", "top", '138px', { fromValue: '218px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1898", tween: [ "style", "${_Ellipse7Copy}", "left", '577px', { fromValue: '803px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1899", tween: [ "style", "${_Ellipse7Copy}", "left", '432px', { fromValue: '577px'}], position: 750, duration: 2250 },
            { id: "eid1900", tween: [ "style", "${_Ellipse7Copy}", "left", '282px', { fromValue: '432px'}], position: 3000, duration: 884, easing: "swing" },
            { id: "eid1916", tween: [ "style", "${_Ellipse5Copy2}", "top", '338px', { fromValue: '68px'}], position: 1500, duration: 250, easing: "swing" },
            { id: "eid1917", tween: [ "style", "${_Ellipse5Copy2}", "top", '218px', { fromValue: '338px'}], position: 1750, duration: 2250 },
            { id: "eid1918", tween: [ "style", "${_Ellipse5Copy2}", "top", '138px', { fromValue: '218px'}], position: 4000, duration: 884, easing: "swing" },
            { id: "eid1958", tween: [ "style", "${_Ellipse3Copy5}", "left", '648px', { fromValue: '814px'}], position: 1500, duration: 250 },
            { id: "eid1959", tween: [ "style", "${_Ellipse3Copy5}", "left", '394px', { fromValue: '648px'}], position: 1750, duration: 2250 },
            { id: "eid1960", tween: [ "style", "${_Ellipse3Copy5}", "left", '299px', { fromValue: '394px'}], position: 4000, duration: 884 },
            { id: "eid1390", tween: [ "style", "${_Ellipse5Copy3}", "left", '655px', { fromValue: '797px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid1391", tween: [ "style", "${_Ellipse5Copy3}", "left", '406px', { fromValue: '655px'}], position: 750, duration: 2250 },
            { id: "eid1392", tween: [ "style", "${_Ellipse5Copy3}", "left", '292px', { fromValue: '406px'}], position: 3000, duration: 884, easing: "swing" }         ]
      }
   }
},
"espirrandoabertura_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['711px','0px','923px','584px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'perdigotos',
      type: 'rect',
      rect: ['904px','229','auto','auto','auto','auto']
   },
   {
      id: 'perdigotos2',
      type: 'rect',
      rect: ['904px','229','auto','auto','auto','auto']
   },
   {
      id: 'perdigotos3',
      type: 'rect',
      rect: ['904px','229','auto','auto','auto','auto']
   },
   {
      rect: ['1126px','112px','372px','372px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1)']
   },
   {
      rect: ['1248px','400px','157px','57px','auto','auto'],
      id: 'texto_comecar',
      transform: [[],[],[],['0.9','0.9']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/texto_comecar.png','0px','0px']
   },
   {
      id: 'texto_aberturabranco',
      type: 'image',
      rect: ['1133px','172px','372px','222px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/texto_aberturabranco.png','0px','0px']
   },
   {
      rect: ['-175px','0px','2053px','711px','auto','auto'],
      id: 'sprite_espirrandoabertura',
      type: 'image',
      clip: ['rect(0px 1357px 711px 792px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_espirrandoabertura.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'perdigotos3',
      symbolName: 'perdigotos'
   },
   {
      id: 'perdigotos',
      symbolName: 'perdigotos'
   },
   {
      id: 'perdigotos2',
      symbolName: 'perdigotos'
   }   ]
   },
   states: {
      "Base State": {
         "${_texto_aberturabranco}": [
            ["style", "top", '172px'],
            ["style", "opacity", '0'],
            ["style", "left", '1133px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "height", '584px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '711px'],
            ["style", "width", '923px']
         ],
         "${_texto_comecar}": [
            ["style", "top", '400px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0'],
            ["style", "left", '1248px']
         ],
         "${_perdigotos3}": [
            ["style", "left", '904px']
         ],
         "${_Ellipse}": [
            ["style", "top", '112px'],
            ["style", "height", '372px'],
            ["style", "opacity", '0'],
            ["style", "left", '1126px'],
            ["style", "width", '372px']
         ],
         "${symbolSelector}": [
            ["style", "height", '711px'],
            ["style", "width", '1924px']
         ],
         "${_sprite_espirrandoabertura}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,1357,711,792], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-175px']
         ],
         "${_perdigotos2}": [
            ["style", "left", '904px']
         ],
         "${_perdigotos}": [
            ["style", "left", '904px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23500,
         autoPlay: true,
         timeline: [
            { id: "eid1615", tween: [ "style", "${_texto_comecar}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 619 },
            { id: "eid1619", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid1620", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [-683,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 750, duration: 0 },
            { id: "eid1621", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-683,0]}], position: 1250, duration: 0 },
            { id: "eid1622", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [-683,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid1623", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-683,0]}], position: 2750, duration: 0 },
            { id: "eid1624", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4000, duration: 0 },
            { id: "eid1625", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [558,0]}], position: 4250, duration: 0 },
            { id: "eid1626", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4750, duration: 0 },
            { id: "eid1627", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [558,0]}], position: 5000, duration: 0 },
            { id: "eid1628", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 6750, duration: 0 },
            { id: "eid1629", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 7000, duration: 0 },
            { id: "eid1630", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 8000, duration: 0 },
            { id: "eid1631", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 8250, duration: 0 },
            { id: "eid1632", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 9250, duration: 0 },
            { id: "eid1633", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 9500, duration: 0 },
            { id: "eid1634", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 11000, duration: 0 },
            { id: "eid1635", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 11250, duration: 0 },
            { id: "eid1636", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 12750, duration: 0 },
            { id: "eid1637", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 13000, duration: 0 },
            { id: "eid1638", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 15000, duration: 0 },
            { id: "eid1639", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 15250, duration: 0 },
            { id: "eid1640", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 16500, duration: 0 },
            { id: "eid1641", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 16750, duration: 0 },
            { id: "eid1642", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 18500, duration: 0 },
            { id: "eid1643", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 18750, duration: 0 },
            { id: "eid1644", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 20000, duration: 0 },
            { id: "eid1645", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 20250, duration: 0 },
            { id: "eid1646", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 22000, duration: 0 },
            { id: "eid1647", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 22250, duration: 0 },
            { id: "eid1648", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [559,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [1,0]}], position: 23250, duration: 0 },
            { id: "eid1649", tween: [ "style", "${_sprite_espirrandoabertura}", "background-position", [1,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [559,0]}], position: 23500, duration: 0 },
            { id: "eid1692", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 619 },
            { id: "eid1614", tween: [ "style", "${_texto_aberturabranco}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 619 },
            { id: "eid1601", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_perdigotos}', [] ], ""], position: 0 }         ]
      }
   }
},
"perdigotos": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','6px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','6px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','6px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','6px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy13',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy12',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','6px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy24',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy23',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','6px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy22',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy21',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','6px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy20',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy19',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','6px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy18',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy17',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy16',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy15',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','17px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy14',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse7Copy7}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3Copy6}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse7Copy6}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy21}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy11}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3Copy3}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse5Copy2}": [
            ["style", "top", '6px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse3}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse7Copy15}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy20}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3Copy9}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse3Copy2}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse7Copy22}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy8}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse5}": [
            ["style", "top", '6px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse5Copy9}": [
            ["style", "top", '6px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse7Copy4}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy17}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy9}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy5}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse5Copy6}": [
            ["style", "top", '6px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse5Copy8}": [
            ["style", "top", '6px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse7Copy13}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy14}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse5Copy7}": [
            ["style", "top", '6px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse7Copy24}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3Copy7}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse3Copy8}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse7Copy16}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3Copy11}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse7Copy19}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy23}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse3Copy5}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse3Copy10}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '5px']
         ],
         "${_Ellipse5Copy3}": [
            ["style", "top", '6px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse5Copy10}": [
            ["style", "top", '6px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse7}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy12}": [
            ["style", "top", '17px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy18}": [
            ["style", "top", '6px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '4px'],
            ["style", "width", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '28px'],
            ["style", "width", '22px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 24000,
         autoPlay: false,
         timeline: [
            { id: "eid1497", tween: [ "style", "${_Ellipse3Copy5}", "top", '154px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1498", tween: [ "style", "${_Ellipse3Copy5}", "top", '-274px', { fromValue: '154px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1547", tween: [ "style", "${_Ellipse7Copy19}", "left", '212px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1548", tween: [ "style", "${_Ellipse7Copy19}", "left", '748px', { fromValue: '212px'}], position: 2402, duration: 21598, easing: "swing" },
            { id: "eid1471", tween: [ "style", "${_Ellipse7Copy9}", "left", '224px', { fromValue: '4px'}], position: 750, duration: 157 },
            { id: "eid1472", tween: [ "style", "${_Ellipse7Copy9}", "left", '751px', { fromValue: '224px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1503", tween: [ "style", "${_Ellipse7Copy13}", "left", '226px', { fromValue: '4px'}], position: 750, duration: 157 },
            { id: "eid1504", tween: [ "style", "${_Ellipse7Copy13}", "left", '760px', { fromValue: '226px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1441", tween: [ "style", "${_Ellipse7Copy5}", "top", '179px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1442", tween: [ "style", "${_Ellipse7Copy5}", "top", '-251px', { fromValue: '179px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1463", tween: [ "style", "${_Ellipse3Copy3}", "top", '198px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1464", tween: [ "style", "${_Ellipse3Copy3}", "top", '-257px', { fromValue: '198px'}], position: 907, duration: 10093, easing: "swing" },
            { id: "eid1559", tween: [ "style", "${_Ellipse3Copy9}", "top", '198px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1560", tween: [ "style", "${_Ellipse3Copy9}", "top", '151px', { fromValue: '198px'}], position: 2402, duration: 21598, easing: "swing" },
            { id: "eid1555", tween: [ "style", "${_Ellipse5Copy8}", "left", '213px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1556", tween: [ "style", "${_Ellipse5Copy8}", "left", '364px', { fromValue: '213px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1445", tween: [ "style", "${_Ellipse5Copy2}", "top", '234px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1446", tween: [ "style", "${_Ellipse5Copy2}", "top", '-90px', { fromValue: '234px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1521", tween: [ "style", "${_Ellipse7Copy15}", "top", '160px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1522", tween: [ "style", "${_Ellipse7Copy15}", "top", '72px', { fromValue: '160px'}], position: 2402, duration: 7598, easing: "swing" },
            { id: "eid1561", tween: [ "style", "${_Ellipse3Copy9}", "left", '262px', { fromValue: '5px'}], position: 2250, duration: 152 },
            { id: "eid1562", tween: [ "style", "${_Ellipse3Copy9}", "left", '740px', { fromValue: '262px'}], position: 2402, duration: 21598, easing: "swing" },
            { id: "eid1437", tween: [ "style", "${_Ellipse7Copy4}", "left", '160px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1438", tween: [ "style", "${_Ellipse7Copy4}", "left", '744px', { fromValue: '160px'}], position: 907, duration: 9093, easing: "swing" },
            { id: "eid1453", tween: [ "style", "${_Ellipse7Copy6}", "left", '212px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1454", tween: [ "style", "${_Ellipse7Copy6}", "left", '544px', { fromValue: '212px'}], position: 907, duration: 10093, easing: "swing" },
            { id: "eid1589", tween: [ "style", "${_Ellipse5Copy10}", "left", '257px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1590", tween: [ "style", "${_Ellipse5Copy10}", "left", '526px', { fromValue: '257px'}], position: 2402, duration: 17598, easing: "swing" },
            { id: "eid1435", tween: [ "style", "${_Ellipse7Copy4}", "top", '122px', { fromValue: '17px'}], position: 750, duration: 157 },
            { id: "eid1436", tween: [ "style", "${_Ellipse7Copy4}", "top", '-50px', { fromValue: '122px'}], position: 907, duration: 9093, easing: "swing" },
            { id: "eid1447", tween: [ "style", "${_Ellipse3Copy2}", "top", '124px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1448", tween: [ "style", "${_Ellipse3Copy2}", "top", '-257px', { fromValue: '124px'}], position: 907, duration: 9093, easing: "swing" },
            { id: "eid1545", tween: [ "style", "${_Ellipse3Copy8}", "top", '68px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1546", tween: [ "style", "${_Ellipse3Copy8}", "top", '-289px', { fromValue: '68px'}], position: 2402, duration: 7598, easing: "swing" },
            { id: "eid1465", tween: [ "style", "${_Ellipse3Copy3}", "left", '262px', { fromValue: '5px'}], position: 750, duration: 157 },
            { id: "eid1466", tween: [ "style", "${_Ellipse3Copy3}", "left", '447px', { fromValue: '262px'}], position: 907, duration: 10093, easing: "swing" },
            { id: "eid1593", tween: [ "style", "${_Ellipse3Copy11}", "top", '84px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1594", tween: [ "style", "${_Ellipse3Copy11}", "top", '-259px', { fromValue: '84px'}], position: 2402, duration: 17598, easing: "swing" },
            { id: "eid1583", tween: [ "style", "${_Ellipse7Copy24}", "top", '143px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1584", tween: [ "style", "${_Ellipse7Copy24}", "top", '-15px', { fromValue: '143px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1543", tween: [ "style", "${_Ellipse3Copy8}", "left", '156px', { fromValue: '5px'}], position: 2250, duration: 152 },
            { id: "eid1544", tween: [ "style", "${_Ellipse3Copy8}", "left", '386px', { fromValue: '156px'}], position: 2402, duration: 7598, easing: "swing" },
            { id: "eid1412", tween: [ "style", "${_Ellipse7Copy}", "top", '92px', { fromValue: '17px'}], position: 750, duration: 157 },
            { id: "eid1414", tween: [ "style", "${_Ellipse7Copy}", "top", '-249px', { fromValue: '92px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1449", tween: [ "style", "${_Ellipse3Copy2}", "left", '189px', { fromValue: '5px'}], position: 750, duration: 157 },
            { id: "eid1450", tween: [ "style", "${_Ellipse3Copy2}", "left", '585px', { fromValue: '189px'}], position: 907, duration: 9093, easing: "swing" },
            { id: "eid1457", tween: [ "style", "${_Ellipse7Copy7}", "top", '170px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1458", tween: [ "style", "${_Ellipse7Copy7}", "top", '-157px', { fromValue: '170px'}], position: 907, duration: 8093, easing: "swing" },
            { id: "eid1587", tween: [ "style", "${_Ellipse5Copy10}", "top", '128px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1588", tween: [ "style", "${_Ellipse5Copy10}", "top", '-279px', { fromValue: '128px'}], position: 2402, duration: 17598, easing: "swing" },
            { id: "eid1569", tween: [ "style", "${_Ellipse7Copy22}", "left", '175px', { fromValue: '4px'}], position: 2250, duration: 152 },
            { id: "eid1570", tween: [ "style", "${_Ellipse7Copy22}", "left", '769px', { fromValue: '175px'}], position: 2402, duration: 16598, easing: "swing" },
            { id: "eid1563", tween: [ "style", "${_Ellipse7Copy21}", "left", '160px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1564", tween: [ "style", "${_Ellipse7Copy21}", "left", '620px', { fromValue: '160px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1565", tween: [ "style", "${_Ellipse7Copy21}", "top", '122px', { fromValue: '17px'}], position: 2250, duration: 152 },
            { id: "eid1566", tween: [ "style", "${_Ellipse7Copy21}", "top", '-264px', { fromValue: '122px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1519", tween: [ "style", "${_Ellipse7Copy15}", "left", '224px', { fromValue: '4px'}], position: 2250, duration: 152 },
            { id: "eid1520", tween: [ "style", "${_Ellipse7Copy15}", "left", '772px', { fromValue: '224px'}], position: 2402, duration: 7598, easing: "swing" },
            { id: "eid1529", tween: [ "style", "${_Ellipse3Copy7}", "left", '189px', { fromValue: '5px'}], position: 2250, duration: 152 },
            { id: "eid1530", tween: [ "style", "${_Ellipse3Copy7}", "left", '770px', { fromValue: '189px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1495", tween: [ "style", "${_Ellipse3Copy5}", "left", '189px', { fromValue: '5px'}], position: 750, duration: 157 },
            { id: "eid1496", tween: [ "style", "${_Ellipse3Copy5}", "left", '481px', { fromValue: '189px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1427", tween: [ "style", "${_Ellipse3}", "left", '198px', { fromValue: '5px'}], position: 750, duration: 157 },
            { id: "eid1434", tween: [ "style", "${_Ellipse3}", "left", '673px', { fromValue: '198px'}], position: 907, duration: 10093, easing: "swing" },
            { id: "eid1535", tween: [ "style", "${_Ellipse7Copy18}", "left", '226px', { fromValue: '4px'}], position: 2250, duration: 152 },
            { id: "eid1536", tween: [ "style", "${_Ellipse7Copy18}", "left", '655px', { fromValue: '226px'}], position: 2402, duration: 16598, easing: "swing" },
            { id: "eid1439", tween: [ "style", "${_Ellipse7Copy5}", "left", '175px', { fromValue: '4px'}], position: 750, duration: 157 },
            { id: "eid1440", tween: [ "style", "${_Ellipse7Copy5}", "left", '480px', { fromValue: '175px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1467", tween: [ "style", "${_Ellipse7Copy8}", "top", '169px', { fromValue: '17px'}], position: 750, duration: 157 },
            { id: "eid1468", tween: [ "style", "${_Ellipse7Copy8}", "top", '-119px', { fromValue: '169px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1571", tween: [ "style", "${_Ellipse5Copy9}", "top", '234px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1572", tween: [ "style", "${_Ellipse5Copy9}", "top", '37px', { fromValue: '234px'}], position: 2402, duration: 21598, easing: "swing" },
            { id: "eid1426", tween: [ "style", "${_Ellipse7}", "top", '143px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1431", tween: [ "style", "${_Ellipse7}", "top", '-190px', { fromValue: '143px'}], position: 907, duration: 10093, easing: "swing" },
            { id: "eid1541", tween: [ "style", "${_Ellipse5Copy7}", "top", '93px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1542", tween: [ "style", "${_Ellipse5Copy7}", "top", '183px', { fromValue: '93px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1511", tween: [ "style", "${_Ellipse3Copy6}", "top", '68px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1512", tween: [ "style", "${_Ellipse3Copy6}", "top", '-249px', { fromValue: '68px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1411", tween: [ "style", "${_Ellipse7Copy}", "left", '175px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1413", tween: [ "style", "${_Ellipse7Copy}", "left", '516px', { fromValue: '175px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1513", tween: [ "style", "${_Ellipse3Copy6}", "left", '156px', { fromValue: '5px'}], position: 750, duration: 157 },
            { id: "eid1514", tween: [ "style", "${_Ellipse3Copy6}", "left", '741px', { fromValue: '156px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1473", tween: [ "style", "${_Ellipse7Copy9}", "top", '160px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1474", tween: [ "style", "${_Ellipse7Copy9}", "top", '106px', { fromValue: '160px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1585", tween: [ "style", "${_Ellipse7Copy24}", "left", '147px', { fromValue: '4px'}], position: 2250, duration: 152 },
            { id: "eid1586", tween: [ "style", "${_Ellipse7Copy24}", "left", '730px', { fromValue: '147px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1443", tween: [ "style", "${_Ellipse5Copy2}", "left", '251px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1444", tween: [ "style", "${_Ellipse5Copy2}", "left", '740px', { fromValue: '251px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1517", tween: [ "style", "${_Ellipse7Copy14}", "left", '257px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1518", tween: [ "style", "${_Ellipse7Copy14}", "left", '751px', { fromValue: '257px'}], position: 2402, duration: 21598, easing: "swing" },
            { id: "eid1515", tween: [ "style", "${_Ellipse7Copy14}", "top", '169px', { fromValue: '17px'}], position: 2250, duration: 152 },
            { id: "eid1516", tween: [ "style", "${_Ellipse7Copy14}", "top", '-271px', { fromValue: '169px'}], position: 2402, duration: 21598, easing: "swing" },
            { id: "eid1489", tween: [ "style", "${_Ellipse7Copy11}", "left", '217px', { fromValue: '4px'}], position: 750, duration: 157 },
            { id: "eid1490", tween: [ "style", "${_Ellipse7Copy11}", "left", '745px', { fromValue: '217px'}], position: 907, duration: 8093, easing: "swing" },
            { id: "eid1573", tween: [ "style", "${_Ellipse5Copy9}", "left", '251px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1574", tween: [ "style", "${_Ellipse5Copy9}", "left", '730px', { fromValue: '251px'}], position: 2402, duration: 21598, easing: "swing" },
            { id: "eid1459", tween: [ "style", "${_Ellipse5Copy3}", "left", '213px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1460", tween: [ "style", "${_Ellipse5Copy3}", "left", '703px', { fromValue: '213px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1523", tween: [ "style", "${_Ellipse7Copy16}", "left", '217px', { fromValue: '4px'}], position: 2250, duration: 152 },
            { id: "eid1524", tween: [ "style", "${_Ellipse7Copy16}", "left", '329px', { fromValue: '217px'}], position: 2402, duration: 16598, easing: "swing" },
            { id: "eid1553", tween: [ "style", "${_Ellipse7Copy20}", "top", '170px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1554", tween: [ "style", "${_Ellipse7Copy20}", "top", '97px', { fromValue: '170px'}], position: 2402, duration: 16598, easing: "swing" },
            { id: "eid1428", tween: [ "style", "${_Ellipse3}", "top", '84px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1433", tween: [ "style", "${_Ellipse3}", "top", '-244px', { fromValue: '84px'}], position: 907, duration: 10093, easing: "swing" },
            { id: "eid1455", tween: [ "style", "${_Ellipse7Copy7}", "left", '275px', { fromValue: '4px'}], position: 750, duration: 157 },
            { id: "eid1456", tween: [ "style", "${_Ellipse7Copy7}", "left", '745px', { fromValue: '275px'}], position: 907, duration: 8093, easing: "swing" },
            { id: "eid1469", tween: [ "style", "${_Ellipse7Copy8}", "left", '257px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1470", tween: [ "style", "${_Ellipse7Copy8}", "left", '735px', { fromValue: '257px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1575", tween: [ "style", "${_Ellipse3Copy10}", "left", '189px', { fromValue: '5px'}], position: 2250, duration: 152 },
            { id: "eid1576", tween: [ "style", "${_Ellipse3Copy10}", "left", '766px', { fromValue: '189px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1557", tween: [ "style", "${_Ellipse5Copy8}", "top", '113px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1558", tween: [ "style", "${_Ellipse5Copy8}", "top", '-256px', { fromValue: '113px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1539", tween: [ "style", "${_Ellipse5Copy7}", "left", '131px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1540", tween: [ "style", "${_Ellipse5Copy7}", "left", '736px', { fromValue: '131px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1577", tween: [ "style", "${_Ellipse3Copy10}", "top", '124px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1578", tween: [ "style", "${_Ellipse3Copy10}", "top", '-148px', { fromValue: '124px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1531", tween: [ "style", "${_Ellipse7Copy17}", "top", '48px', { fromValue: '17px'}], position: 2250, duration: 152 },
            { id: "eid1532", tween: [ "style", "${_Ellipse7Copy17}", "top", '-273px', { fromValue: '48px'}], position: 2402, duration: 21598, easing: "swing" },
            { id: "eid1581", tween: [ "style", "${_Ellipse7Copy23}", "top", '92px', { fromValue: '17px'}], position: 2250, duration: 152 },
            { id: "eid1582", tween: [ "style", "${_Ellipse7Copy23}", "top", '-255px', { fromValue: '92px'}], position: 2402, duration: 7598, easing: "swing" },
            { id: "eid1424", tween: [ "style", "${_Ellipse5}", "top", '128px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1429", tween: [ "style", "${_Ellipse5}", "top", '-227px', { fromValue: '128px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1537", tween: [ "style", "${_Ellipse7Copy18}", "top", '83px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1538", tween: [ "style", "${_Ellipse7Copy18}", "top", '-282px', { fromValue: '83px'}], position: 2402, duration: 16598, easing: "swing" },
            { id: "eid1507", tween: [ "style", "${_Ellipse5Copy6}", "left", '131px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1508", tween: [ "style", "${_Ellipse5Copy6}", "left", '758px', { fromValue: '131px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1425", tween: [ "style", "${_Ellipse7}", "left", '147px', { fromValue: '4px'}], position: 750, duration: 157 },
            { id: "eid1432", tween: [ "style", "${_Ellipse7}", "left", '740px', { fromValue: '147px'}], position: 907, duration: 10093, easing: "swing" },
            { id: "eid1461", tween: [ "style", "${_Ellipse5Copy3}", "top", '113px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1462", tween: [ "style", "${_Ellipse5Copy3}", "top", '-266px', { fromValue: '113px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1551", tween: [ "style", "${_Ellipse7Copy20}", "left", '275px', { fromValue: '4px'}], position: 2250, duration: 152 },
            { id: "eid1552", tween: [ "style", "${_Ellipse7Copy20}", "left", '730px', { fromValue: '275px'}], position: 2402, duration: 16598, easing: "swing" },
            { id: "eid1525", tween: [ "style", "${_Ellipse7Copy16}", "top", '196px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1526", tween: [ "style", "${_Ellipse7Copy16}", "top", '-263px', { fromValue: '196px'}], position: 2402, duration: 16598, easing: "swing" },
            { id: "eid1423", tween: [ "style", "${_Ellipse5}", "left", '257px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1430", tween: [ "style", "${_Ellipse5}", "left", '740px', { fromValue: '257px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1487", tween: [ "style", "${_Ellipse7Copy11}", "top", '196px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1488", tween: [ "style", "${_Ellipse7Copy11}", "top", '63px', { fromValue: '196px'}], position: 907, duration: 8093, easing: "swing" },
            { id: "eid1505", tween: [ "style", "${_Ellipse7Copy13}", "top", '83px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1506", tween: [ "style", "${_Ellipse7Copy13}", "top", '-24px', { fromValue: '83px'}], position: 907, duration: 6093, easing: "swing" },
            { id: "eid1499", tween: [ "style", "${_Ellipse7Copy12}", "top", '48px', { fromValue: '17px'}], position: 750, duration: 157 },
            { id: "eid1500", tween: [ "style", "${_Ellipse7Copy12}", "top", '-124px', { fromValue: '48px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1509", tween: [ "style", "${_Ellipse5Copy6}", "top", '93px', { fromValue: '6px'}], position: 750, duration: 157 },
            { id: "eid1510", tween: [ "style", "${_Ellipse5Copy6}", "top", '26px', { fromValue: '93px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1579", tween: [ "style", "${_Ellipse7Copy23}", "left", '175px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1580", tween: [ "style", "${_Ellipse7Copy23}", "left", '630px', { fromValue: '175px'}], position: 2402, duration: 7598, easing: "swing" },
            { id: "eid1501", tween: [ "style", "${_Ellipse7Copy12}", "left", '185px', { fromValue: '0px'}], position: 750, duration: 157 },
            { id: "eid1502", tween: [ "style", "${_Ellipse7Copy12}", "left", '764px', { fromValue: '185px'}], position: 907, duration: 13093, easing: "swing" },
            { id: "eid1591", tween: [ "style", "${_Ellipse3Copy11}", "left", '198px', { fromValue: '5px'}], position: 2250, duration: 152 },
            { id: "eid1592", tween: [ "style", "${_Ellipse3Copy11}", "left", '412px', { fromValue: '198px'}], position: 2402, duration: 17598, easing: "swing" },
            { id: "eid1533", tween: [ "style", "${_Ellipse7Copy17}", "left", '185px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1534", tween: [ "style", "${_Ellipse7Copy17}", "left", '364px', { fromValue: '185px'}], position: 2402, duration: 21598, easing: "swing" },
            { id: "eid1527", tween: [ "style", "${_Ellipse3Copy7}", "top", '154px', { fromValue: '0px'}], position: 2250, duration: 152 },
            { id: "eid1528", tween: [ "style", "${_Ellipse3Copy7}", "top", '-216px', { fromValue: '154px'}], position: 2402, duration: 13598, easing: "swing" },
            { id: "eid1567", tween: [ "style", "${_Ellipse7Copy22}", "top", '179px', { fromValue: '6px'}], position: 2250, duration: 152 },
            { id: "eid1568", tween: [ "style", "${_Ellipse7Copy22}", "top", '-115px', { fromValue: '179px'}], position: 2402, duration: 16598, easing: "swing" },
            { id: "eid1451", tween: [ "style", "${_Ellipse7Copy6}", "top", '56px', { fromValue: '17px'}], position: 750, duration: 157 },
            { id: "eid1452", tween: [ "style", "${_Ellipse7Copy6}", "top", '-249px', { fromValue: '56px'}], position: 907, duration: 10093, easing: "swing" },
            { id: "eid1549", tween: [ "style", "${_Ellipse7Copy19}", "top", '56px', { fromValue: '17px'}], position: 2250, duration: 152 },
            { id: "eid1550", tween: [ "style", "${_Ellipse7Copy19}", "top", '16px', { fromValue: '56px'}], position: 2402, duration: 21598, easing: "swing" }         ]
      }
   }
},
"alerta_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','66px','66px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse3',
      stroke: [4,'rgb(255, 207, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse3}": [
            ["style", "top", '0px'],
            ["style", "height", '66px'],
            ["transform", "scaleY", '0'],
            ["style", "border-width", '4px'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '66px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '72px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid1713", tween: [ "style", "${_Ellipse3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
            { id: "eid1715", tween: [ "style", "${_Ellipse3}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 750 },
            { id: "eid1709", tween: [ "transform", "${_Ellipse3}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid1708", tween: [ "transform", "${_Ellipse3}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1500 }         ]
      }
   }
},
"perdigotos2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['139px','-150px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['346px','-115px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['363px','-98px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['362px','-102px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['139px','-150px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['346px','-115px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['363px','-98px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['362px','-102px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['139px','-150px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['346px','-115px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['363px','-98px','18px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['362px','-102px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['139px','-150px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['346px','-115px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['363px','-98px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['362px','-102px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['139px','-150px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['346px','-115px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['363px','-98px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['362px','-102px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['139px','-150px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['346px','-115px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['363px','-98px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['362px','-102px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '43px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-1px']
         ],
         "${_Ellipse7}": [
            ["style", "top", '37px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-11px']
         ],
         "${_Ellipse5}": [
            ["style", "top", '30px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-17px']
         ],
         "${_Ellipse7Copy}": [
            ["style", "top", '37px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-11px']
         ],
         "${_Ellipse7Copy4}": [
            ["style", "top", '37px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-11px']
         ],
         "${_Ellipse2Copy5}": [
            ["style", "top", '43px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-1px']
         ],
         "${_Ellipse3Copy3}": [
            ["style", "top", '47px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px']
         ],
         "${_Ellipse5Copy2}": [
            ["style", "top", '30px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-17px']
         ],
         "${symbolSelector}": [
            ["style", "height", '65px'],
            ["style", "width", '21px']
         ],
         "${_Ellipse2Copy4}": [
            ["style", "top", '43px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-1px']
         ],
         "${_Ellipse3Copy4}": [
            ["style", "top", '47px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px']
         ],
         "${_Ellipse5Copy5}": [
            ["style", "top", '30px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-17px']
         ],
         "${_Ellipse3}": [
            ["style", "top", '47px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '43px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-1px']
         ],
         "${_Ellipse7Copy5}": [
            ["style", "top", '37px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-11px']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "top", '43px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-1px']
         ],
         "${_Ellipse7Copy3}": [
            ["style", "top", '37px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-11px']
         ],
         "${_Ellipse3Copy5}": [
            ["style", "top", '47px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px']
         ],
         "${_Ellipse5Copy}": [
            ["style", "top", '30px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-17px']
         ],
         "${_Ellipse3Copy2}": [
            ["style", "top", '47px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '15px']
         ],
         "${_Ellipse7Copy2}": [
            ["style", "top", '37px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-11px']
         ],
         "${_Ellipse5Copy4}": [
            ["style", "top", '30px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-17px']
         ],
         "${_Ellipse5Copy3}": [
            ["style", "top", '30px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-17px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '43px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-1px']
         ],
         "${_Ellipse3Copy}": [
            ["style", "top", '47px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 14652,
         autoPlay: false,
         timeline: [
            { id: "eid1730", tween: [ "style", "${_Ellipse3}", "left", '174px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid1731", tween: [ "style", "${_Ellipse3}", "left", '685px', { fromValue: '174px'}], position: 250, duration: 8416 },
            { id: "eid1832", tween: [ "style", "${_Ellipse3Copy5}", "top", '154px', { fromValue: '47px'}], position: 9768, duration: 250 },
            { id: "eid1833", tween: [ "style", "${_Ellipse3Copy5}", "top", '-222px', { fromValue: '154px'}], position: 10018, duration: 3134 },
            { id: "eid1826", tween: [ "style", "${_Ellipse2Copy5}", "left", '193px', { fromValue: '-1px'}], position: 9768, duration: 250, easing: "swing" },
            { id: "eid1827", tween: [ "style", "${_Ellipse2Copy5}", "left", '765px', { fromValue: '193px'}], position: 10018, duration: 3134 },
            { id: "eid1792", tween: [ "style", "${_Ellipse7Copy2}", "top", '98px', { fromValue: '37px'}], position: 4884, duration: 250, easing: "swing" },
            { id: "eid1793", tween: [ "style", "${_Ellipse7Copy2}", "top", '-195px', { fromValue: '98px'}], position: 5134, duration: 7069 },
            { id: "eid1840", tween: [ "style", "${_Ellipse7Copy5}", "top", '159px', { fromValue: '37px'}], position: 9768, duration: 250, easing: "swing" },
            { id: "eid1841", tween: [ "style", "${_Ellipse7Copy5}", "top", '-235px', { fromValue: '159px'}], position: 10018, duration: 3134 },
            { id: "eid1800", tween: [ "style", "${_Ellipse3Copy3}", "top", '154px', { fromValue: '47px'}], position: 5884, duration: 250 },
            { id: "eid1801", tween: [ "style", "${_Ellipse3Copy3}", "top", '-186px', { fromValue: '154px'}], position: 6134, duration: 7616 },
            { id: "eid1808", tween: [ "style", "${_Ellipse7Copy3}", "top", '159px', { fromValue: '37px'}], position: 5884, duration: 250, easing: "swing" },
            { id: "eid1809", tween: [ "style", "${_Ellipse7Copy3}", "top", '-235px', { fromValue: '159px'}], position: 6134, duration: 7616 },
            { id: "eid1818", tween: [ "style", "${_Ellipse5Copy4}", "left", '130px', { fromValue: '-17px'}], position: 10768, duration: 250, easing: "swing" },
            { id: "eid1819", tween: [ "style", "${_Ellipse5Copy4}", "left", '536px', { fromValue: '130px'}], position: 11018, duration: 3134 },
            { id: "eid1788", tween: [ "style", "${_Ellipse5Copy2}", "top", '149px', { fromValue: '30px'}], position: 4884, duration: 250, easing: "swing" },
            { id: "eid1789", tween: [ "style", "${_Ellipse5Copy2}", "top", '-228px', { fromValue: '149px'}], position: 5134, duration: 7069 },
            { id: "eid1742", tween: [ "style", "${_Ellipse7}", "top", '159px', { fromValue: '37px'}], position: 0, duration: 250, easing: "swing" },
            { id: "eid1743", tween: [ "style", "${_Ellipse7}", "top", '-195px', { fromValue: '159px'}], position: 250, duration: 8416 },
            { id: "eid1727", tween: [ "style", "${_Ellipse3}", "top", '154px', { fromValue: '47px'}], position: 0, duration: 250 },
            { id: "eid1728", tween: [ "style", "${_Ellipse3}", "top", '-182px', { fromValue: '154px'}], position: 250, duration: 8416 },
            { id: "eid1824", tween: [ "style", "${_Ellipse7Copy4}", "left", '190px', { fromValue: '-11px'}], position: 10768, duration: 250, easing: "swing" },
            { id: "eid1825", tween: [ "style", "${_Ellipse7Copy4}", "left", '646px', { fromValue: '190px'}], position: 11018, duration: 3134 },
            { id: "eid1780", tween: [ "style", "${_Ellipse2Copy2}", "left", '232px', { fromValue: '-1px'}], position: 4884, duration: 250, easing: "swing" },
            { id: "eid1781", tween: [ "style", "${_Ellipse2Copy2}", "left", '594px', { fromValue: '232px'}], position: 5134, duration: 7069 },
            { id: "eid1756", tween: [ "style", "${_Ellipse5Copy}", "top", '189px', { fromValue: '30px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid1757", tween: [ "style", "${_Ellipse5Copy}", "top", '-206px', { fromValue: '189px'}], position: 1250, duration: 9250 },
            { id: "eid1822", tween: [ "style", "${_Ellipse7Copy4}", "top", '159px', { fromValue: '37px'}], position: 10768, duration: 250, easing: "swing" },
            { id: "eid1823", tween: [ "style", "${_Ellipse7Copy4}", "top", '-208px', { fromValue: '159px'}], position: 11018, duration: 3134 },
            { id: "eid1786", tween: [ "style", "${_Ellipse5Copy2}", "left", '80px', { fromValue: '-17px'}], position: 4884, duration: 250, easing: "swing" },
            { id: "eid1787", tween: [ "style", "${_Ellipse5Copy2}", "left", '676px', { fromValue: '80px'}], position: 5134, duration: 7069 },
            { id: "eid1784", tween: [ "style", "${_Ellipse3Copy2}", "top", '151px', { fromValue: '47px'}], position: 4884, duration: 250 },
            { id: "eid1785", tween: [ "style", "${_Ellipse3Copy2}", "top", '-218px', { fromValue: '151px'}], position: 5134, duration: 7069 },
            { id: "eid1748", tween: [ "style", "${_Ellipse2Copy}", "left", '193px', { fromValue: '-1px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid1749", tween: [ "style", "${_Ellipse2Copy}", "left", '623px', { fromValue: '193px'}], position: 1250, duration: 9250 },
            { id: "eid1798", tween: [ "style", "${_Ellipse3Copy3}", "left", '174px', { fromValue: '0px'}], position: 5884, duration: 250 },
            { id: "eid1799", tween: [ "style", "${_Ellipse3Copy3}", "left", '777px', { fromValue: '174px'}], position: 6134, duration: 7616 },
            { id: "eid1812", tween: [ "style", "${_Ellipse2Copy4}", "left", '193px', { fromValue: '-1px'}], position: 10768, duration: 250, easing: "swing" },
            { id: "eid1813", tween: [ "style", "${_Ellipse2Copy4}", "left", '479px', { fromValue: '193px'}], position: 11018, duration: 3134 },
            { id: "eid1838", tween: [ "style", "${_Ellipse7Copy5}", "left", '190px', { fromValue: '-11px'}], position: 9768, duration: 250, easing: "swing" },
            { id: "eid1839", tween: [ "style", "${_Ellipse7Copy5}", "left", '556px', { fromValue: '190px'}], position: 10018, duration: 3134 },
            { id: "eid1746", tween: [ "style", "${_Ellipse2Copy}", "top", '229px', { fromValue: '43px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid1747", tween: [ "style", "${_Ellipse2Copy}", "top", '-190px', { fromValue: '229px'}], position: 1250, duration: 9250 },
            { id: "eid1816", tween: [ "style", "${_Ellipse3Copy4}", "top", '154px', { fromValue: '47px'}], position: 10768, duration: 250 },
            { id: "eid1817", tween: [ "style", "${_Ellipse3Copy4}", "top", '-182px', { fromValue: '154px'}], position: 11018, duration: 3134 },
            { id: "eid1834", tween: [ "style", "${_Ellipse5Copy5}", "top", '189px', { fromValue: '30px'}], position: 9768, duration: 250, easing: "swing" },
            { id: "eid1835", tween: [ "style", "${_Ellipse5Copy5}", "top", '-238px', { fromValue: '189px'}], position: 10018, duration: 3134 },
            { id: "eid1796", tween: [ "style", "${_Ellipse2Copy3}", "left", '193px', { fromValue: '-1px'}], position: 5884, duration: 250, easing: "swing" },
            { id: "eid1797", tween: [ "style", "${_Ellipse2Copy3}", "left", '690px', { fromValue: '193px'}], position: 6134, duration: 7616 },
            { id: "eid1790", tween: [ "style", "${_Ellipse7Copy2}", "left", '175px', { fromValue: '-11px'}], position: 4884, duration: 250, easing: "swing" },
            { id: "eid1791", tween: [ "style", "${_Ellipse7Copy2}", "left", '476px', { fromValue: '175px'}], position: 5134, duration: 7069 },
            { id: "eid1804", tween: [ "style", "${_Ellipse5Copy3}", "top", '189px', { fromValue: '30px'}], position: 5884, duration: 250, easing: "swing" },
            { id: "eid1805", tween: [ "style", "${_Ellipse5Copy3}", "top", '-238px', { fromValue: '189px'}], position: 6134, duration: 7616 },
            { id: "eid1724", tween: [ "style", "${_Ellipse2}", "top", '229px', { fromValue: '43px'}], position: 0, duration: 250, easing: "swing" },
            { id: "eid1725", tween: [ "style", "${_Ellipse2}", "top", '-201px', { fromValue: '229px'}], position: 250, duration: 8416 },
            { id: "eid1733", tween: [ "style", "${_Ellipse5}", "top", '189px', { fromValue: '30px'}], position: 0, duration: 250, easing: "swing" },
            { id: "eid1734", tween: [ "style", "${_Ellipse5}", "top", '-198px', { fromValue: '189px'}], position: 250, duration: 8416 },
            { id: "eid1754", tween: [ "style", "${_Ellipse5Copy}", "left", '130px', { fromValue: '-17px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid1755", tween: [ "style", "${_Ellipse5Copy}", "left", '558px', { fromValue: '130px'}], position: 1250, duration: 9250 },
            { id: "eid1721", tween: [ "style", "${_Ellipse2}", "left", '193px', { fromValue: '-1px'}], position: 0, duration: 250, easing: "swing" },
            { id: "eid1722", tween: [ "style", "${_Ellipse2}", "left", '718px', { fromValue: '193px'}], position: 250, duration: 8416 },
            { id: "eid1828", tween: [ "style", "${_Ellipse2Copy5}", "top", '229px', { fromValue: '43px'}], position: 9768, duration: 250, easing: "swing" },
            { id: "eid1829", tween: [ "style", "${_Ellipse2Copy5}", "top", '-196px', { fromValue: '229px'}], position: 10018, duration: 3134 },
            { id: "eid1820", tween: [ "style", "${_Ellipse5Copy4}", "top", '189px', { fromValue: '30px'}], position: 10768, duration: 250, easing: "swing" },
            { id: "eid1821", tween: [ "style", "${_Ellipse5Copy4}", "top", '-225px', { fromValue: '189px'}], position: 11018, duration: 3134 },
            { id: "eid1814", tween: [ "style", "${_Ellipse3Copy4}", "left", '174px', { fromValue: '0px'}], position: 10768, duration: 250 },
            { id: "eid1815", tween: [ "style", "${_Ellipse3Copy4}", "left", '745px', { fromValue: '174px'}], position: 11018, duration: 3134 },
            { id: "eid1802", tween: [ "style", "${_Ellipse5Copy3}", "left", '130px', { fromValue: '-17px'}], position: 5884, duration: 250, easing: "swing" },
            { id: "eid1803", tween: [ "style", "${_Ellipse5Copy3}", "left", '606px', { fromValue: '130px'}], position: 6134, duration: 7616 },
            { id: "eid1736", tween: [ "style", "${_Ellipse5}", "left", '130px', { fromValue: '-17px'}], position: 0, duration: 250, easing: "swing" },
            { id: "eid1737", tween: [ "style", "${_Ellipse5}", "left", '646px', { fromValue: '130px'}], position: 250, duration: 8416 },
            { id: "eid1752", tween: [ "style", "${_Ellipse3Copy}", "top", '154px', { fromValue: '47px'}], position: 1000, duration: 250 },
            { id: "eid1753", tween: [ "style", "${_Ellipse3Copy}", "top", '-186px', { fromValue: '154px'}], position: 1250, duration: 9250 },
            { id: "eid1806", tween: [ "style", "${_Ellipse7Copy3}", "left", '190px', { fromValue: '-11px'}], position: 5884, duration: 250, easing: "swing" },
            { id: "eid1807", tween: [ "style", "${_Ellipse7Copy3}", "left", '736px', { fromValue: '190px'}], position: 6134, duration: 7616 },
            { id: "eid1794", tween: [ "style", "${_Ellipse2Copy3}", "top", '229px', { fromValue: '43px'}], position: 5884, duration: 250, easing: "swing" },
            { id: "eid1795", tween: [ "style", "${_Ellipse2Copy3}", "top", '-243px', { fromValue: '229px'}], position: 6134, duration: 7616 },
            { id: "eid1739", tween: [ "style", "${_Ellipse7}", "left", '190px', { fromValue: '-11px'}], position: 0, duration: 250, easing: "swing" },
            { id: "eid1740", tween: [ "style", "${_Ellipse7}", "left", '506px', { fromValue: '190px'}], position: 250, duration: 8416 },
            { id: "eid1810", tween: [ "style", "${_Ellipse2Copy4}", "top", '229px', { fromValue: '43px'}], position: 10768, duration: 250, easing: "swing" },
            { id: "eid1811", tween: [ "style", "${_Ellipse2Copy4}", "top", '-221px', { fromValue: '229px'}], position: 11018, duration: 3134 },
            { id: "eid1778", tween: [ "style", "${_Ellipse2Copy2}", "top", '181px', { fromValue: '43px'}], position: 4884, duration: 250, easing: "swing" },
            { id: "eid1779", tween: [ "style", "${_Ellipse2Copy2}", "top", '-219px', { fromValue: '181px'}], position: 5134, duration: 7069 },
            { id: "eid1836", tween: [ "style", "${_Ellipse5Copy5}", "left", '130px', { fromValue: '-17px'}], position: 9768, duration: 250, easing: "swing" },
            { id: "eid1837", tween: [ "style", "${_Ellipse5Copy5}", "left", '726px', { fromValue: '130px'}], position: 10018, duration: 3134 },
            { id: "eid1750", tween: [ "style", "${_Ellipse3Copy}", "left", '174px', { fromValue: '0px'}], position: 1000, duration: 250 },
            { id: "eid1751", tween: [ "style", "${_Ellipse3Copy}", "left", '547px', { fromValue: '174px'}], position: 1250, duration: 9250 },
            { id: "eid1758", tween: [ "style", "${_Ellipse7Copy}", "left", '190px', { fromValue: '-11px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid1759", tween: [ "style", "${_Ellipse7Copy}", "left", '506px', { fromValue: '190px'}], position: 1250, duration: 9250 },
            { id: "eid1782", tween: [ "style", "${_Ellipse3Copy2}", "left", '154px', { fromValue: '0px'}], position: 4884, duration: 250 },
            { id: "eid1783", tween: [ "style", "${_Ellipse3Copy2}", "left", '663px', { fromValue: '154px'}], position: 5134, duration: 7069 },
            { id: "eid1830", tween: [ "style", "${_Ellipse3Copy5}", "left", '174px', { fromValue: '0px'}], position: 9768, duration: 250 },
            { id: "eid1831", tween: [ "style", "${_Ellipse3Copy5}", "left", '633px', { fromValue: '174px'}], position: 10018, duration: 3134 },
            { id: "eid1760", tween: [ "style", "${_Ellipse7Copy}", "top", '159px', { fromValue: '37px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid1761", tween: [ "style", "${_Ellipse7Copy}", "top", '-195px', { fromValue: '159px'}], position: 1250, duration: 9250 }         ]
      }
   }
},
"espirrandotambem_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','895px','621px','auto','auto'],
      id: 'sprite_vitima_maior',
      type: 'image',
      clip: ['rect(0px 522px 621px 117px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_vitima_maior.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sprite_vitima_maior}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,522,621,117], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [55,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '621px'],
            ["style", "width", '895px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5134,
         autoPlay: false,
         timeline: [
            { id: "eid1973", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [55,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [55,0]}], position: 0, duration: 0 },
            { id: "eid1974", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [-363,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [55,0]}], position: 750, duration: 0 },
            { id: "eid1975", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [55,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-363,0]}], position: 1250, duration: 0 },
            { id: "eid1976", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [-363,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1750, duration: 0 },
            { id: "eid1977", tween: [ "style", "${_sprite_vitima_maior}", "background-position", [55,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-363,0]}], position: 2250, duration: 0 }         ]
      }
   }
},
"espirroinvertido_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy12',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy13',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy14',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy15',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy17',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['-869px','14px','1211px','621px','auto','auto'],
      id: 'sprite_gripado_blink',
      type: 'image',
      clip: ['rect(0px 784px 621px 451px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_gripado_blink.png','0px','0px']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.41','0.41']],
      rect: ['296px','5px','37px','37px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.2','0.2']],
      rect: ['503px','40px','54px','54px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['520px','57px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      transform: [[],[],[],['0.7','0.7']],
      rect: ['519px','53px','26px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['0px','0px','1908px','649px','auto','auto'],
      id: 'sprite_gripado_invertido_',
      type: 'image',
      clip: ['rect(0px 419px 649px 18px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_gripado_invertido_.png','-776px','0px']
   },
   {
      rect: ['-1089px','18px','1211px','617px','auto','auto'],
      id: 'sprite_gripado_blink2',
      type: 'image',
      clip: ['rect(0px 819px 617px 542px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_gripado_blink2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-444px']
         ],
         "${_Ellipse7}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-454px']
         ],
         "${_Ellipse7Copy6}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-447px']
         ],
         "${_Ellipse7Copy}": [
            ["style", "top", '126px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-454px']
         ],
         "${_Ellipse2Copy9}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-284px']
         ],
         "${_Ellipse7Copy11}": [
            ["style", "top", '141px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '213px']
         ],
         "${_Ellipse3Copy3}": [
            ["style", "top", '146px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-283px']
         ],
         "${_Ellipse2Copy6}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-437px']
         ],
         "${_Ellipse5Copy11}": [
            ["style", "top", '83px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '207px']
         ],
         "${_Ellipse7Copy2}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-294px']
         ],
         "${_Ellipse2Copy12}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-284px']
         ],
         "${_Ellipse3Copy9}": [
            ["style", "top", '146px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-283px']
         ],
         "${_Ellipse3Copy11}": [
            ["style", "top", '151px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '224px']
         ],
         "${_Ellipse5Copy10}": [
            ["style", "top", '83px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '207px']
         ],
         "${_Ellipse3}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-443px']
         ],
         "${_Ellipse5Copy2}": [
            ["style", "top", '78px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-300px']
         ],
         "${_Ellipse7Copy3}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-294px']
         ],
         "${_Ellipse2Copy10}": [
            ["style", "top", '147px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '223px']
         ],
         "${_sprite_gripado_invertido_}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,419,649,18], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [-776,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px']
         ],
         "${_Ellipse3Copy2}": [
            ["style", "top", '146px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-283px']
         ],
         "${_Ellipse5Copy}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-460px']
         ],
         "${_Ellipse2Copy15}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-284px']
         ],
         "${_Ellipse3Copy6}": [
            ["style", "top", '146px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-436px']
         ],
         "${_Ellipse2Copy14}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-284px']
         ],
         "${_Ellipse3Copy}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-443px']
         ],
         "${_Ellipse5Copy8}": [
            ["style", "top", '78px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-300px']
         ],
         "${_Ellipse2Copy13}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-284px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '132px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-444px']
         ],
         "${_Ellipse5}": [
            ["style", "top", '68px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-460px']
         ],
         "${_Ellipse7Copy9}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-294px']
         ],
         "${_Ellipse5Copy9}": [
            ["style", "top", '78px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-300px']
         ],
         "${_sprite_gripado_blink2}": [
            ["style", "top", '18px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-1089px'],
            ["style", "clip", [0,819,617,542], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Ellipse7Copy4}": [
            ["style", "top", '141px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '213px']
         ],
         "${_Ellipse2Copy5}": [
            ["style", "top", '147px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '223px']
         ],
         "${_Ellipse2Copy4}": [
            ["style", "top", '147px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '223px']
         ],
         "${_Ellipse5Copy4}": [
            ["style", "top", '83px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '207px']
         ],
         "${symbolSelector}": [
            ["style", "height", '649px'],
            ["style", "width", '1908px']
         ],
         "${_Ellipse5Copy6}": [
            ["style", "top", '78px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-453px']
         ],
         "${_Ellipse2Copy7}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-437px']
         ],
         "${_Ellipse7Copy7}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-447px']
         ],
         "${_Ellipse3Copy4}": [
            ["style", "top", '151px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '224px']
         ],
         "${_Ellipse5Copy5}": [
            ["style", "top", '83px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '207px']
         ],
         "${_sprite_gripado_blink}": [
            ["style", "top", '14px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-869px'],
            ["style", "clip", [0,784,621,451], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Ellipse3Copy7}": [
            ["style", "top", '146px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-436px']
         ],
         "${_Ellipse3Copy8}": [
            ["style", "top", '146px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-283px']
         ],
         "${_Ellipse5Copy7}": [
            ["style", "top", '78px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-453px']
         ],
         "${_Ellipse3Copy10}": [
            ["style", "top", '151px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '224px']
         ],
         "${_Ellipse7Copy5}": [
            ["style", "top", '141px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '213px']
         ],
         "${_Ellipse7Copy8}": [
            ["style", "top", '136px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-294px']
         ],
         "${_Ellipse3Copy5}": [
            ["style", "top", '151px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '224px']
         ],
         "${_Ellipse5Copy3}": [
            ["style", "top", '78px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-300px']
         ],
         "${_Ellipse7Copy10}": [
            ["style", "top", '141px'],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '213px']
         ],
         "${_Ellipse2Copy11}": [
            ["style", "top", '147px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '223px']
         ],
         "${_Ellipse2Copy8}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-284px']
         ],
         "${_Ellipse2Copy17}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-284px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-284px']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "top", '142px'],
            ["transform", "scaleY", '0.7'],
            ["transform", "scaleX", '0.7'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-284px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15134,
         autoPlay: false,
         timeline: [
            { id: "eid2245", tween: [ "style", "${_Ellipse3Copy5}", "top", '290px', { fromValue: '151px'}], position: 6145, duration: 250 },
            { id: "eid2246", tween: [ "style", "${_Ellipse3Copy5}", "top", '-86px', { fromValue: '290px'}], position: 6395, duration: 3605 },
            { id: "eid2485", tween: [ "style", "${_Ellipse2Copy17}", "left", '-150px', { fromValue: '-284px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2486", tween: [ "style", "${_Ellipse2Copy17}", "left", '346px', { fromValue: '-150px'}], position: 1250, duration: 3895 },
            { id: "eid2471", tween: [ "style", "${_Ellipse2Copy14}", "top", '370px', { fromValue: '142px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2472", tween: [ "style", "${_Ellipse2Copy14}", "top", '-117px', { fromValue: '370px'}], position: 1250, duration: 3895 },
            { id: "eid2404", tween: [ "style", "${_Ellipse5Copy11}", "left", '-22px', { fromValue: '207px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2405", tween: [ "style", "${_Ellipse5Copy11}", "left", '-4px', { fromValue: '-22px'}], position: 9250, duration: 3418 },
            { id: "eid2465", tween: [ "style", "${_Ellipse2Copy12}", "left", '-113px', { fromValue: '-284px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2466", tween: [ "style", "${_Ellipse2Copy12}", "left", '236px', { fromValue: '-113px'}], position: 1250, duration: 3895 },
            { id: "eid2257", tween: [ "style", "${_Ellipse7Copy5}", "top", '344px', { fromValue: '141px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2258", tween: [ "style", "${_Ellipse7Copy5}", "top", '-109px', { fromValue: '344px'}], position: 6395, duration: 3605 },
            { id: "eid2192", tween: [ "style", "${_Ellipse3Copy3}", "top", '278px', { fromValue: '146px'}], position: 1000, duration: 250 },
            { id: "eid2193", tween: [ "style", "${_Ellipse3Copy3}", "top", '-89px', { fromValue: '278px'}], position: 1250, duration: 3895 },
            { id: "eid2204", tween: [ "style", "${_Ellipse7Copy3}", "top", '267px', { fromValue: '136px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2205", tween: [ "style", "${_Ellipse7Copy3}", "top", '-112px', { fromValue: '267px'}], position: 1250, duration: 3895 },
            { id: "eid2055", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid2057", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [-430,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 0 },
            { id: "eid2058", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-423,0]}], position: 1500, duration: 0 },
            { id: "eid2059", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [335,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1750, duration: 0 },
            { id: "eid2060", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [334,0]}], position: 2000, duration: 0 },
            { id: "eid2061", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [335,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2500, duration: 0 },
            { id: "eid2062", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [334,0]}], position: 2750, duration: 0 },
            { id: "eid2279", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [335,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4142, duration: 0 },
            { id: "eid2280", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [335,0]}], position: 4395, duration: 0 },
            { id: "eid2287", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [335,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6250, duration: 0 },
            { id: "eid2288", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [335,0]}], position: 6500, duration: 0 },
            { id: "eid2333", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [-430,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8000, duration: 0 },
            { id: "eid2334", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-430,0]}], position: 8500, duration: 0 },
            { id: "eid2293", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [335,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 10000, duration: 0 },
            { id: "eid2294", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [335,0]}], position: 10250, duration: 0 },
            { id: "eid2373", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [335,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 12000, duration: 0 },
            { id: "eid2374", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [335,0]}], position: 12346, duration: 0 },
            { id: "eid2375", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [335,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 14750, duration: 0 },
            { id: "eid2376", tween: [ "style", "${_sprite_gripado_blink}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [335,0]}], position: 15134, duration: 0 },
            { id: "eid2345", tween: [ "style", "${_Ellipse5Copy8}", "left", '-114px', { fromValue: '-300px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2346", tween: [ "style", "${_Ellipse5Copy8}", "left", '293px', { fromValue: '-114px'}], position: 8250, duration: 4418 },
            { id: "eid2396", tween: [ "style", "${_Ellipse2Copy11}", "left", '5px', { fromValue: '223px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2397", tween: [ "style", "${_Ellipse2Copy11}", "left", '-13px', { fromValue: '5px'}], position: 9250, duration: 3418 },
            { id: "eid2357", tween: [ "style", "${_Ellipse3Copy9}", "left", '-96px', { fromValue: '-283px'}], position: 8000, duration: 250 },
            { id: "eid2358", tween: [ "style", "${_Ellipse3Copy9}", "left", '226px', { fromValue: '-96px'}], position: 8250, duration: 4418 },
            { id: "eid2236", tween: [ "style", "${_Ellipse7Copy4}", "left", '-26px', { fromValue: '213px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2237", tween: [ "style", "${_Ellipse7Copy4}", "left", '34px', { fromValue: '-26px'}], position: 6395, duration: 3605 },
            { id: "eid2315", tween: [ "style", "${_Ellipse7Copy6}", "left", '-219px', { fromValue: '-447px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2316", tween: [ "style", "${_Ellipse7Copy6}", "left", '301px', { fromValue: '-219px'}], position: 7750, duration: 4918 },
            { id: "eid2201", tween: [ "style", "${_Ellipse5Copy3}", "left", '-150px', { fromValue: '-300px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2202", tween: [ "style", "${_Ellipse5Copy3}", "left", '263px', { fromValue: '-150px'}], position: 1250, duration: 3895 },
            { id: "eid2402", tween: [ "style", "${_Ellipse3Copy11}", "left", '15px', { fromValue: '224px'}], position: 9000, duration: 250 },
            { id: "eid2403", tween: [ "style", "${_Ellipse3Copy11}", "left", '-41px', { fromValue: '15px'}], position: 9250, duration: 3418 },
            { id: "eid2168", tween: [ "style", "${_Ellipse3Copy2}", "top", '324px', { fromValue: '146px'}], position: 1000, duration: 250 },
            { id: "eid2169", tween: [ "style", "${_Ellipse3Copy2}", "top", '-128px', { fromValue: '324px'}], position: 1250, duration: 3895 },
            { id: "eid2339", tween: [ "style", "${_Ellipse3Copy8}", "top", '324px', { fromValue: '146px'}], position: 8000, duration: 250 },
            { id: "eid2340", tween: [ "style", "${_Ellipse3Copy8}", "top", '-128px', { fromValue: '324px'}], position: 8250, duration: 4418 },
            { id: "eid2186", tween: [ "style", "${_Ellipse2Copy3}", "top", '343px', { fromValue: '142px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2187", tween: [ "style", "${_Ellipse2Copy3}", "top", '-86px', { fromValue: '343px'}], position: 1250, duration: 3895 },
            { id: "eid2335", tween: [ "style", "${_Ellipse2Copy8}", "top", '317px', { fromValue: '142px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2336", tween: [ "style", "${_Ellipse2Copy8}", "top", '-118px', { fromValue: '317px'}], position: 8250, duration: 4418 },
            { id: "eid2483", tween: [ "style", "${_Ellipse2Copy17}", "top", '273px', { fromValue: '142px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2484", tween: [ "style", "${_Ellipse2Copy17}", "top", '-139px', { fromValue: '273px'}], position: 1250, duration: 3895 },
            { id: "eid2475", tween: [ "style", "${_Ellipse2Copy15}", "top", '289px', { fromValue: '142px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2476", tween: [ "style", "${_Ellipse2Copy15}", "top", '-126px', { fromValue: '289px'}], position: 1250, duration: 3895 },
            { id: "eid2227", tween: [ "style", "${_Ellipse5Copy4}", "top", '299px', { fromValue: '83px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2228", tween: [ "style", "${_Ellipse5Copy4}", "top", '-171px', { fromValue: '299px'}], position: 6395, duration: 3605 },
            { id: "eid2319", tween: [ "style", "${_Ellipse2Copy7}", "left", '-214px', { fromValue: '-437px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2320", tween: [ "style", "${_Ellipse2Copy7}", "left", '254px', { fromValue: '-214px'}], position: 7750, duration: 4918 },
            { id: "eid2473", tween: [ "style", "${_Ellipse2Copy14}", "left", '-83px', { fromValue: '-284px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2474", tween: [ "style", "${_Ellipse2Copy14}", "left", '186px', { fromValue: '-83px'}], position: 1250, duration: 3895 },
            { id: "eid2198", tween: [ "style", "${_Ellipse5Copy3}", "top", '287px', { fromValue: '78px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2199", tween: [ "style", "${_Ellipse5Copy3}", "top", '-143px', { fromValue: '287px'}], position: 1250, duration: 3895 },
            { id: "eid2030", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 0, duration: 0 },
            { id: "eid2032", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1127,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 500, duration: 0 },
            { id: "eid2033", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1128,0]}], position: 1000, duration: 0 },
            { id: "eid2064", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1127,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 1500, duration: 0 },
            { id: "eid2065", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1128,0]}], position: 2000, duration: 0 },
            { id: "eid2034", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1466,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 3109, duration: 0 },
            { id: "eid2035", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1465,0]}], position: 3556, duration: 0 },
            { id: "eid2210", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1127,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 4395, duration: 0 },
            { id: "eid2211", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1127,0]}], position: 4645, duration: 0 },
            { id: "eid2212", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1127,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 4895, duration: 0 },
            { id: "eid2213", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1127,0]}], position: 5145, duration: 0 },
            { id: "eid2036", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-415,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 5645, duration: 0 },
            { id: "eid2037", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [9,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-415,0]}], position: 6145, duration: 0 },
            { id: "eid2214", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [9,0]}], position: 6645, duration: 0 },
            { id: "eid2295", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1127,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 7500, duration: 0 },
            { id: "eid2296", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1127,0]}], position: 7898, duration: 0 },
            { id: "eid2377", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-415,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 8500, duration: 0 },
            { id: "eid2378", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [9,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-415,0]}], position: 9000, duration: 0 },
            { id: "eid2379", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [9,0]}], position: 9500, duration: 0 },
            { id: "eid2297", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1127,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 9895, duration: 0 },
            { id: "eid2298", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1127,0]}], position: 10250, duration: 0 },
            { id: "eid2412", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1127,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 11250, duration: 0 },
            { id: "eid2413", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1127,0]}], position: 11657, duration: 0 },
            { id: "eid2414", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1127,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-776,0]}], position: 12750, duration: 0 },
            { id: "eid2415", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-776,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1127,0]}], position: 13155, duration: 0 },
            { id: "eid2313", tween: [ "style", "${_Ellipse7Copy6}", "top", '354px', { fromValue: '136px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2314", tween: [ "style", "${_Ellipse7Copy6}", "top", '-136px', { fromValue: '354px'}], position: 7750, duration: 4918 },
            { id: "eid2171", tween: [ "style", "${_Ellipse3Copy2}", "left", '-85px', { fromValue: '-283px'}], position: 1000, duration: 250 },
            { id: "eid2172", tween: [ "style", "${_Ellipse3Copy2}", "left", '220px', { fromValue: '-85px'}], position: 1250, duration: 3895 },
            { id: "eid2047", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid2048", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [-368,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 },
            { id: "eid2049", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-368,0]}], position: 1000, duration: 0 },
            { id: "eid2051", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [359,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1500, duration: 0 },
            { id: "eid2052", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [359,0]}], position: 1750, duration: 0 },
            { id: "eid2053", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [359,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid2054", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [359,0]}], position: 2500, duration: 0 },
            { id: "eid2267", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [359,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 3641, duration: 0 },
            { id: "eid2268", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [359,0]}], position: 3891, duration: 0 },
            { id: "eid2271", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [359,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5395, duration: 0 },
            { id: "eid2272", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [359,0]}], position: 5645, duration: 0 },
            { id: "eid2275", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [359,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 7000, duration: 0 },
            { id: "eid2276", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [359,0]}], position: 7250, duration: 0 },
            { id: "eid2299", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [-368,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 7500, duration: 0 },
            { id: "eid2300", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-368,0]}], position: 8000, duration: 0 },
            { id: "eid2277", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [359,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 9000, duration: 0 },
            { id: "eid2278", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [359,0]}], position: 9250, duration: 0 },
            { id: "eid2367", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [359,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 10500, duration: 0 },
            { id: "eid2368", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [359,0]}], position: 10864, duration: 0 },
            { id: "eid2369", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [359,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 12346, duration: 0 },
            { id: "eid2370", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [359,0]}], position: 12668, duration: 0 },
            { id: "eid2371", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [359,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 14750, duration: 0 },
            { id: "eid2372", tween: [ "style", "${_sprite_gripado_blink2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [359,0]}], position: 15134, duration: 0 },
            { id: "eid2477", tween: [ "style", "${_Ellipse2Copy15}", "left", '-76px', { fromValue: '-284px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2478", tween: [ "style", "${_Ellipse2Copy15}", "left", '308px', { fromValue: '-76px'}], position: 1250, duration: 3895 },
            { id: "eid2388", tween: [ "style", "${_Ellipse5Copy10}", "top", '299px', { fromValue: '83px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2389", tween: [ "style", "${_Ellipse5Copy10}", "top", '-171px', { fromValue: '299px'}], position: 9250, duration: 3418 },
            { id: "eid2218", tween: [ "style", "${_Ellipse2Copy4}", "top", '303px', { fromValue: '147px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2219", tween: [ "style", "${_Ellipse2Copy4}", "top", '-121px', { fromValue: '303px'}], position: 6395, duration: 3605 },
            { id: "eid2329", tween: [ "style", "${_Ellipse7Copy7}", "top", '361px', { fromValue: '136px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2330", tween: [ "style", "${_Ellipse7Copy7}", "top", '-112px', { fromValue: '361px'}], position: 7750, duration: 4918 },
            { id: "eid2251", tween: [ "style", "${_Ellipse5Copy5}", "top", '261px', { fromValue: '83px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2252", tween: [ "style", "${_Ellipse5Copy5}", "top", '-140px', { fromValue: '261px'}], position: 6395, duration: 3605 },
            { id: "eid2400", tween: [ "style", "${_Ellipse3Copy11}", "top", '290px', { fromValue: '151px'}], position: 9000, duration: 250 },
            { id: "eid2401", tween: [ "style", "${_Ellipse3Copy11}", "top", '-86px', { fromValue: '290px'}], position: 9250, duration: 3418 },
            { id: "eid2195", tween: [ "style", "${_Ellipse3Copy3}", "left", '-96px', { fromValue: '-283px'}], position: 1000, duration: 250 },
            { id: "eid2196", tween: [ "style", "${_Ellipse3Copy3}", "left", '226px', { fromValue: '-96px'}], position: 1250, duration: 3895 },
            { id: "eid2398", tween: [ "style", "${_Ellipse2Copy11}", "top", '333px', { fromValue: '147px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2399", tween: [ "style", "${_Ellipse2Copy11}", "top", '-95px', { fromValue: '333px'}], position: 9250, duration: 3418 },
            { id: "eid2165", tween: [ "style", "${_Ellipse2Copy2}", "top", '317px', { fromValue: '142px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2166", tween: [ "style", "${_Ellipse2Copy2}", "top", '-118px', { fromValue: '317px'}], position: 1250, duration: 3895 },
            { id: "eid2254", tween: [ "style", "${_Ellipse5Copy5}", "left", '-22px', { fromValue: '207px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2255", tween: [ "style", "${_Ellipse5Copy5}", "left", '-4px', { fromValue: '-22px'}], position: 6395, duration: 3605 },
            { id: "eid2353", tween: [ "style", "${_Ellipse2Copy9}", "left", '-67px', { fromValue: '-284px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2354", tween: [ "style", "${_Ellipse2Copy9}", "left", '254px', { fromValue: '-67px'}], position: 8250, duration: 4418 },
            { id: "eid2108", tween: [ "style", "${_Ellipse7Copy}", "left", '-288px', { fromValue: '-454px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2109", tween: [ "style", "${_Ellipse7Copy}", "left", '5px', { fromValue: '-288px'}], position: 750, duration: 2250 },
            { id: "eid2110", tween: [ "style", "${_Ellipse7Copy}", "left", '210px', { fromValue: '5px'}], position: 3000, duration: 750 },
            { id: "eid2096", tween: [ "style", "${_Ellipse3Copy}", "top", '310px', { fromValue: '136px'}], position: 500, duration: 250 },
            { id: "eid2097", tween: [ "style", "${_Ellipse3Copy}", "top", '194px', { fromValue: '310px'}], position: 750, duration: 2250 },
            { id: "eid2098", tween: [ "style", "${_Ellipse3Copy}", "top", '141px', { fromValue: '194px'}], position: 3000, duration: 641 },
            { id: "eid2248", tween: [ "style", "${_Ellipse3Copy5}", "left", '15px', { fromValue: '224px'}], position: 6145, duration: 250 },
            { id: "eid2249", tween: [ "style", "${_Ellipse3Copy5}", "left", '-41px', { fromValue: '15px'}], position: 6395, duration: 3605 },
            { id: "eid2233", tween: [ "style", "${_Ellipse7Copy4}", "top", '345px', { fromValue: '141px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2234", tween: [ "style", "${_Ellipse7Copy4}", "top", '-132px', { fromValue: '345px'}], position: 6395, duration: 3605 },
            { id: "eid2075", tween: [ "style", "${_Ellipse3}", "left", '-289px', { fromValue: '-443px'}], position: 500, duration: 250 },
            { id: "eid2076", tween: [ "style", "${_Ellipse3}", "left", '-47px', { fromValue: '-289px'}], position: 750, duration: 2250 },
            { id: "eid2077", tween: [ "style", "${_Ellipse3}", "left", '219px', { fromValue: '-47px'}], position: 3000, duration: 444 },
            { id: "eid2072", tween: [ "style", "${_Ellipse3}", "top", '304px', { fromValue: '136px'}], position: 500, duration: 250 },
            { id: "eid2073", tween: [ "style", "${_Ellipse3}", "top", '233px', { fromValue: '304px'}], position: 750, duration: 2250 },
            { id: "eid2074", tween: [ "style", "${_Ellipse3}", "top", '139px', { fromValue: '233px'}], position: 3000, duration: 444 },
            { id: "eid2384", tween: [ "style", "${_Ellipse3Copy10}", "left", '-24px', { fromValue: '224px'}], position: 9000, duration: 250 },
            { id: "eid2385", tween: [ "style", "${_Ellipse3Copy10}", "left", '-47px', { fromValue: '-24px'}], position: 9250, duration: 3418 },
            { id: "eid2207", tween: [ "style", "${_Ellipse7Copy3}", "left", '-129px', { fromValue: '-294px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2208", tween: [ "style", "${_Ellipse7Copy3}", "left", '272px', { fromValue: '-129px'}], position: 1250, duration: 3895 },
            { id: "eid2408", tween: [ "style", "${_Ellipse7Copy11}", "top", '344px', { fromValue: '141px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2409", tween: [ "style", "${_Ellipse7Copy11}", "top", '-109px', { fromValue: '344px'}], position: 9250, duration: 3418 },
            { id: "eid2327", tween: [ "style", "${_Ellipse5Copy7}", "left", '-249px', { fromValue: '-453px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2328", tween: [ "style", "${_Ellipse5Copy7}", "left", '263px', { fromValue: '-249px'}], position: 7750, duration: 4918 },
            { id: "eid2183", tween: [ "style", "${_Ellipse7Copy2}", "top", '338px', { fromValue: '136px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2184", tween: [ "style", "${_Ellipse7Copy2}", "top", '-178px', { fromValue: '338px'}], position: 1250, duration: 3895 },
            { id: "eid2467", tween: [ "style", "${_Ellipse2Copy13}", "top", '325px', { fromValue: '142px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2468", tween: [ "style", "${_Ellipse2Copy13}", "top", '-84px', { fromValue: '325px'}], position: 1250, duration: 3895 },
            { id: "eid2303", tween: [ "style", "${_Ellipse2Copy6}", "top", '389px', { fromValue: '142px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2304", tween: [ "style", "${_Ellipse2Copy6}", "top", '-118px', { fromValue: '389px'}], position: 7750, duration: 4918 },
            { id: "eid2365", tween: [ "style", "${_Ellipse7Copy9}", "left", '-129px', { fromValue: '-294px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2366", tween: [ "style", "${_Ellipse7Copy9}", "left", '272px', { fromValue: '-129px'}], position: 8250, duration: 4418 },
            { id: "eid2174", tween: [ "style", "${_Ellipse5Copy2}", "top", '284px', { fromValue: '78px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2175", tween: [ "style", "${_Ellipse5Copy2}", "top", '-174px', { fromValue: '284px'}], position: 1250, duration: 3895 },
            { id: "eid2382", tween: [ "style", "${_Ellipse2Copy10}", "left", '-13px', { fromValue: '223px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2383", tween: [ "style", "${_Ellipse2Copy10}", "left", '-22px', { fromValue: '-13px'}], position: 9250, duration: 3418 },
            { id: "eid2260", tween: [ "style", "${_Ellipse7Copy5}", "left", '-47px', { fromValue: '213px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2261", tween: [ "style", "${_Ellipse7Copy5}", "left", '5px', { fromValue: '-47px'}], position: 6395, duration: 3605 },
            { id: "eid2099", tween: [ "style", "${_Ellipse3Copy}", "left", '-264px', { fromValue: '-443px'}], position: 500, duration: 250 },
            { id: "eid2100", tween: [ "style", "${_Ellipse3Copy}", "left", '-41px', { fromValue: '-264px'}], position: 750, duration: 2250 },
            { id: "eid2101", tween: [ "style", "${_Ellipse3Copy}", "left", '222px', { fromValue: '-41px'}], position: 3000, duration: 641 },
            { id: "eid2349", tween: [ "style", "${_Ellipse7Copy8}", "top", '338px', { fromValue: '136px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2350", tween: [ "style", "${_Ellipse7Copy8}", "top", '-136px', { fromValue: '338px'}], position: 8250, duration: 4418 },
            { id: "eid2230", tween: [ "style", "${_Ellipse5Copy4}", "left", '-3px', { fromValue: '207px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2231", tween: [ "style", "${_Ellipse5Copy4}", "left", '26px', { fromValue: '-3px'}], position: 6395, duration: 3605 },
            { id: "eid2361", tween: [ "style", "${_Ellipse5Copy9}", "top", '287px', { fromValue: '78px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2362", tween: [ "style", "${_Ellipse5Copy9}", "top", '-143px', { fromValue: '287px'}], position: 8250, duration: 4418 },
            { id: "eid2087", tween: [ "style", "${_Ellipse7}", "top", '344px', { fromValue: '126px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2088", tween: [ "style", "${_Ellipse7}", "top", '222px', { fromValue: '344px'}], position: 750, duration: 2250 },
            { id: "eid2089", tween: [ "style", "${_Ellipse7}", "top", '131px', { fromValue: '222px'}], position: 3000, duration: 500 },
            { id: "eid2066", tween: [ "style", "${_Ellipse2}", "left", '-262px', { fromValue: '-444px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2067", tween: [ "style", "${_Ellipse2}", "left", '5px', { fromValue: '-262px'}], position: 750, duration: 2250 },
            { id: "eid2068", tween: [ "style", "${_Ellipse2}", "left", '212px', { fromValue: '5px'}], position: 3000, duration: 444 },
            { id: "eid2102", tween: [ "style", "${_Ellipse5Copy}", "top", '335px', { fromValue: '68px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2103", tween: [ "style", "${_Ellipse5Copy}", "top", '226px', { fromValue: '335px'}], position: 750, duration: 2250 },
            { id: "eid2104", tween: [ "style", "${_Ellipse5Copy}", "top", '120px', { fromValue: '226px'}], position: 3000, duration: 698 },
            { id: "eid2386", tween: [ "style", "${_Ellipse3Copy10}", "top", '328px', { fromValue: '151px'}], position: 9000, duration: 250 },
            { id: "eid2387", tween: [ "style", "${_Ellipse3Copy10}", "top", '-124px', { fromValue: '328px'}], position: 9250, duration: 3418 },
            { id: "eid2410", tween: [ "style", "${_Ellipse7Copy11}", "left", '-47px', { fromValue: '213px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2411", tween: [ "style", "${_Ellipse7Copy11}", "left", '5px', { fromValue: '-47px'}], position: 9250, duration: 3418 },
            { id: "eid2162", tween: [ "style", "${_Ellipse2Copy2}", "left", '-114px', { fromValue: '-284px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2163", tween: [ "style", "${_Ellipse2Copy2}", "left", '245px', { fromValue: '-114px'}], position: 1250, duration: 3895 },
            { id: "eid2394", tween: [ "style", "${_Ellipse7Copy10}", "top", '345px', { fromValue: '141px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2395", tween: [ "style", "${_Ellipse7Copy10}", "top", '-132px', { fromValue: '345px'}], position: 9250, duration: 3418 },
            { id: "eid2307", tween: [ "style", "${_Ellipse3Copy6}", "left", '-202px', { fromValue: '-436px'}], position: 7500, duration: 250 },
            { id: "eid2308", tween: [ "style", "${_Ellipse3Copy6}", "left", '220px', { fromValue: '-202px'}], position: 7750, duration: 4918 },
            { id: "eid2380", tween: [ "style", "${_Ellipse2Copy10}", "top", '303px', { fromValue: '147px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2381", tween: [ "style", "${_Ellipse2Copy10}", "top", '-121px', { fromValue: '303px'}], position: 9250, duration: 3418 },
            { id: "eid2321", tween: [ "style", "${_Ellipse3Copy7}", "top", '384px', { fromValue: '146px'}], position: 7500, duration: 250 },
            { id: "eid2322", tween: [ "style", "${_Ellipse3Copy7}", "top", '-89px', { fromValue: '384px'}], position: 7750, duration: 4918 },
            { id: "eid2177", tween: [ "style", "${_Ellipse5Copy2}", "left", '-114px', { fromValue: '-300px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2178", tween: [ "style", "${_Ellipse5Copy2}", "left", '293px', { fromValue: '-114px'}], position: 1250, duration: 3895 },
            { id: "eid2406", tween: [ "style", "${_Ellipse5Copy11}", "top", '261px', { fromValue: '83px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2407", tween: [ "style", "${_Ellipse5Copy11}", "top", '-140px', { fromValue: '261px'}], position: 9250, duration: 3418 },
            { id: "eid2463", tween: [ "style", "${_Ellipse2Copy12}", "top", '251px', { fromValue: '142px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2464", tween: [ "style", "${_Ellipse2Copy12}", "top", '-160px', { fromValue: '251px'}], position: 1250, duration: 3895 },
            { id: "eid2392", tween: [ "style", "${_Ellipse7Copy10}", "left", '-26px', { fromValue: '213px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2393", tween: [ "style", "${_Ellipse7Copy10}", "left", '34px', { fromValue: '-26px'}], position: 9250, duration: 3418 },
            { id: "eid2093", tween: [ "style", "${_Ellipse2Copy}", "left", '-253px', { fromValue: '-444px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2094", tween: [ "style", "${_Ellipse2Copy}", "left", '-13px', { fromValue: '-253px'}], position: 750, duration: 2250 },
            { id: "eid2095", tween: [ "style", "${_Ellipse2Copy}", "left", '214px', { fromValue: '-13px'}], position: 3000, duration: 556 },
            { id: "eid2347", tween: [ "style", "${_Ellipse7Copy8}", "left", '-101px', { fromValue: '-294px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2348", tween: [ "style", "${_Ellipse7Copy8}", "left", '301px', { fromValue: '-101px'}], position: 8250, duration: 4418 },
            { id: "eid2351", tween: [ "style", "${_Ellipse2Copy9}", "top", '343px', { fromValue: '142px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2352", tween: [ "style", "${_Ellipse2Copy9}", "top", '-98px', { fromValue: '343px'}], position: 8250, duration: 4418 },
            { id: "eid2305", tween: [ "style", "${_Ellipse3Copy6}", "top", '417px', { fromValue: '146px'}], position: 7500, duration: 250 },
            { id: "eid2306", tween: [ "style", "${_Ellipse3Copy6}", "top", '-128px', { fromValue: '417px'}], position: 7750, duration: 4918 },
            { id: "eid2317", tween: [ "style", "${_Ellipse2Copy7}", "top", '436px', { fromValue: '142px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2318", tween: [ "style", "${_Ellipse2Copy7}", "top", '-98px', { fromValue: '436px'}], position: 7750, duration: 4918 },
            { id: "eid2469", tween: [ "style", "${_Ellipse2Copy13}", "left", '-150px', { fromValue: '-284px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2470", tween: [ "style", "${_Ellipse2Copy13}", "left", '328px', { fromValue: '-150px'}], position: 1250, duration: 3895 },
            { id: "eid2090", tween: [ "style", "${_Ellipse2Copy}", "top", '330px', { fromValue: '132px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2091", tween: [ "style", "${_Ellipse2Copy}", "top", '185px', { fromValue: '330px'}], position: 750, duration: 2250 },
            { id: "eid2092", tween: [ "style", "${_Ellipse2Copy}", "top", '135px', { fromValue: '185px'}], position: 3000, duration: 556 },
            { id: "eid2221", tween: [ "style", "${_Ellipse3Copy4}", "top", '328px', { fromValue: '151px'}], position: 6145, duration: 250 },
            { id: "eid2222", tween: [ "style", "${_Ellipse3Copy4}", "top", '-124px', { fromValue: '328px'}], position: 6395, duration: 3605 },
            { id: "eid2215", tween: [ "style", "${_Ellipse2Copy4}", "left", '-13px', { fromValue: '223px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2216", tween: [ "style", "${_Ellipse2Copy4}", "left", '-22px', { fromValue: '-13px'}], position: 6395, duration: 3605 },
            { id: "eid2331", tween: [ "style", "${_Ellipse7Copy7}", "left", '-245px', { fromValue: '-447px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2332", tween: [ "style", "${_Ellipse7Copy7}", "left", '272px', { fromValue: '-245px'}], position: 7750, duration: 4918 },
            { id: "eid2180", tween: [ "style", "${_Ellipse7Copy2}", "left", '-101px', { fromValue: '-294px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2181", tween: [ "style", "${_Ellipse7Copy2}", "left", '279px', { fromValue: '-101px'}], position: 1250, duration: 3895 },
            { id: "eid2242", tween: [ "style", "${_Ellipse2Copy5}", "left", '5px', { fromValue: '223px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2243", tween: [ "style", "${_Ellipse2Copy5}", "left", '-13px', { fromValue: '5px'}], position: 6395, duration: 3605 },
            { id: "eid2355", tween: [ "style", "${_Ellipse3Copy9}", "top", '278px', { fromValue: '146px'}], position: 8000, duration: 250 },
            { id: "eid2356", tween: [ "style", "${_Ellipse3Copy9}", "top", '-89px', { fromValue: '278px'}], position: 8250, duration: 4418 },
            { id: "eid2078", tween: [ "style", "${_Ellipse5}", "top", '345px', { fromValue: '68px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2079", tween: [ "style", "${_Ellipse5}", "top", '180px', { fromValue: '345px'}], position: 750, duration: 2250 },
            { id: "eid2080", tween: [ "style", "${_Ellipse5}", "top", '121px', { fromValue: '180px'}], position: 3000, duration: 444 },
            { id: "eid2359", tween: [ "style", "${_Ellipse5Copy9}", "left", '-150px', { fromValue: '-300px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2360", tween: [ "style", "${_Ellipse5Copy9}", "left", '263px', { fromValue: '-150px'}], position: 8250, duration: 4418 },
            { id: "eid2311", tween: [ "style", "${_Ellipse5Copy6}", "left", '-241px', { fromValue: '-453px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2312", tween: [ "style", "${_Ellipse5Copy6}", "left", '293px', { fromValue: '-241px'}], position: 7750, duration: 4918 },
            { id: "eid2239", tween: [ "style", "${_Ellipse2Copy5}", "top", '333px', { fromValue: '147px'}], position: 6145, duration: 250, easing: "swing" },
            { id: "eid2240", tween: [ "style", "${_Ellipse2Copy5}", "top", '-95px', { fromValue: '333px'}], position: 6395, duration: 3605 },
            { id: "eid2325", tween: [ "style", "${_Ellipse5Copy7}", "top", '375px', { fromValue: '78px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2326", tween: [ "style", "${_Ellipse5Copy7}", "top", '-143px', { fromValue: '375px'}], position: 7750, duration: 4918 },
            { id: "eid2084", tween: [ "style", "${_Ellipse7}", "left", '-292px', { fromValue: '-454px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2085", tween: [ "style", "${_Ellipse7}", "left", '-79px', { fromValue: '-292px'}], position: 750, duration: 2250 },
            { id: "eid2086", tween: [ "style", "${_Ellipse7}", "left", '209px', { fromValue: '-79px'}], position: 3000, duration: 500 },
            { id: "eid2390", tween: [ "style", "${_Ellipse5Copy10}", "left", '-3px', { fromValue: '207px'}], position: 9000, duration: 250, easing: "swing" },
            { id: "eid2391", tween: [ "style", "${_Ellipse5Copy10}", "left", '26px', { fromValue: '-3px'}], position: 9250, duration: 3418 },
            { id: "eid2081", tween: [ "style", "${_Ellipse5}", "left", '-258px', { fromValue: '-460px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2082", tween: [ "style", "${_Ellipse5}", "left", '18px', { fromValue: '-258px'}], position: 750, duration: 2250 },
            { id: "eid2083", tween: [ "style", "${_Ellipse5}", "left", '201px', { fromValue: '18px'}], position: 3000, duration: 444 },
            { id: "eid2343", tween: [ "style", "${_Ellipse5Copy8}", "top", '284px', { fromValue: '78px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2344", tween: [ "style", "${_Ellipse5Copy8}", "top", '-174px', { fromValue: '284px'}], position: 8250, duration: 4418 },
            { id: "eid2301", tween: [ "style", "${_Ellipse2Copy6}", "left", '-256px', { fromValue: '-437px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2302", tween: [ "style", "${_Ellipse2Copy6}", "left", '245px', { fromValue: '-256px'}], position: 7750, duration: 4918 },
            { id: "eid2224", tween: [ "style", "${_Ellipse3Copy4}", "left", '-24px', { fromValue: '224px'}], position: 6145, duration: 250 },
            { id: "eid2225", tween: [ "style", "${_Ellipse3Copy4}", "left", '-47px', { fromValue: '-24px'}], position: 6395, duration: 3605 },
            { id: "eid2309", tween: [ "style", "${_Ellipse5Copy6}", "top", '399px', { fromValue: '78px'}], position: 7500, duration: 250, easing: "swing" },
            { id: "eid2310", tween: [ "style", "${_Ellipse5Copy6}", "top", '-174px', { fromValue: '399px'}], position: 7750, duration: 4918 },
            { id: "eid2105", tween: [ "style", "${_Ellipse5Copy}", "left", '-281px', { fromValue: '-460px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2106", tween: [ "style", "${_Ellipse5Copy}", "left", '-48px', { fromValue: '-281px'}], position: 750, duration: 2250 },
            { id: "eid2107", tween: [ "style", "${_Ellipse5Copy}", "left", '202px', { fromValue: '-48px'}], position: 3000, duration: 698 },
            { id: "eid2337", tween: [ "style", "${_Ellipse2Copy8}", "left", '-114px', { fromValue: '-284px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2338", tween: [ "style", "${_Ellipse2Copy8}", "left", '245px', { fromValue: '-114px'}], position: 8250, duration: 4418 },
            { id: "eid2341", tween: [ "style", "${_Ellipse3Copy8}", "left", '-85px', { fromValue: '-283px'}], position: 8000, duration: 250 },
            { id: "eid2342", tween: [ "style", "${_Ellipse3Copy8}", "left", '220px', { fromValue: '-85px'}], position: 8250, duration: 4418 },
            { id: "eid2363", tween: [ "style", "${_Ellipse7Copy9}", "top", '267px', { fromValue: '136px'}], position: 8000, duration: 250, easing: "swing" },
            { id: "eid2364", tween: [ "style", "${_Ellipse7Copy9}", "top", '-112px', { fromValue: '267px'}], position: 8250, duration: 4418 },
            { id: "eid2111", tween: [ "style", "${_Ellipse7Copy}", "top", '321px', { fromValue: '126px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2112", tween: [ "style", "${_Ellipse7Copy}", "top", '171px', { fromValue: '321px'}], position: 750, duration: 2250 },
            { id: "eid2113", tween: [ "style", "${_Ellipse7Copy}", "top", '128px', { fromValue: '171px'}], position: 3000, duration: 750 },
            { id: "eid2189", tween: [ "style", "${_Ellipse2Copy3}", "left", '-67px', { fromValue: '-284px'}], position: 1000, duration: 250, easing: "swing" },
            { id: "eid2190", tween: [ "style", "${_Ellipse2Copy3}", "left", '259px', { fromValue: '-67px'}], position: 1250, duration: 3895 },
            { id: "eid2069", tween: [ "style", "${_Ellipse2}", "top", '378px', { fromValue: '132px'}], position: 500, duration: 250, easing: "swing" },
            { id: "eid2070", tween: [ "style", "${_Ellipse2}", "top", '220px', { fromValue: '378px'}], position: 750, duration: 2250 },
            { id: "eid2071", tween: [ "style", "${_Ellipse2}", "top", '140px', { fromValue: '220px'}], position: 3000, duration: 444 },
            { id: "eid2323", tween: [ "style", "${_Ellipse3Copy7}", "left", '-204px', { fromValue: '-436px'}], position: 7500, duration: 250 },
            { id: "eid2324", tween: [ "style", "${_Ellipse3Copy7}", "left", '226px', { fromValue: '-204px'}], position: 7750, duration: 4918 }         ]
      }
   }
},
"espirrandoinvertidomaior_animado": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['328px','183px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy14',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['374px','168px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['366px','169px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy32',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['370px','176px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy31',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy13',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['368px','168px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['370px','175px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy30',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['369px','199px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy29',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['367px','177px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy12',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['368px','182px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['361px','195px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy28',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['374px','185px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy27',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['368px','178px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['368px','184px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy26',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['341px','185px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy25',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['346px','201px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['343px','172px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy24',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['343px','190px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy23',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['333px','172px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy22',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['328px','183px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['374px','168px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['366px','169px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['370px','176px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['5px','0px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['368px','168px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['370px','175px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['369px','199px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['367px','177px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['368px','182px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['361px','195px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['374px','185px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['368px','178px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['368px','184px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['4px','6px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['341px','185px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['346px','201px','15px','15px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['343px','172px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['343px','190px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['333px','172px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(70,196,102,1)']
   },
   {
      rect: ['238px','81px','1908px','649px','auto','auto'],
      transform: [[],[],[],['1.25','1.25']],
      id: 'sprite_gripado_invertido_',
      type: 'image',
      clip: ['rect(0px 473px 649px 49px)'],
      fill: ['rgba(0,0,0,0)','images/sprite_gripado_invertido_.png','-732px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse7Copy7}": [
            ["style", "top", '199px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '369px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7}": [
            ["style", "top", '172px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '333px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy6}": [
            ["style", "top", '195px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '361px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy}": [
            ["style", "top", '190px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '343px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy32}": [
            ["style", "top", '169px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '366px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy2}": [
            ["style", "top", '172px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '343px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy31}": [
            ["style", "top", '176px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '370px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse5Copy2}": [
            ["style", "top", '168px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '368px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse3}": [
            ["style", "top", '201px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '346px']
         ],
         "${_Ellipse7Copy3}": [
            ["style", "top", '185px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '341px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy30}": [
            ["style", "top", '175px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '370px'],
            ["style", "width", '18px']
         ],
         "${_sprite_gripado_invertido_}": [
            ["style", "top", '81px'],
            ["transform", "scaleY", '1.25'],
            ["transform", "scaleX", '1.25'],
            ["style", "clip", [0,473,649,49], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [-732,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '238px']
         ],
         "${_Ellipse3Copy11}": [
            ["style", "top", '178px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '368px']
         ],
         "${_Ellipse7Copy22}": [
            ["style", "top", '172px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '333px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse3Copy}": [
            ["style", "top", '178px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '368px']
         ],
         "${_Ellipse7Copy24}": [
            ["style", "top", '172px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '343px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse5}": [
            ["style", "top", '184px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '368px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse5Copy9}": [
            ["style", "top", '182px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '368px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse7Copy4}": [
            ["style", "top", '186px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '361px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3Copy10}": [
            ["style", "top", '201px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '346px']
         ],
         "${_Ellipse7Copy9}": [
            ["style", "top", '176px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '370px'],
            ["style", "width", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '811px'],
            ["style", "width", '2385px']
         ],
         "${_Ellipse7Copy25}": [
            ["style", "top", '185px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '341px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse7Copy27}": [
            ["style", "top", '185px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '374px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse5Copy8}": [
            ["style", "top", '184px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '368px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse3Copy4}": [
            ["style", "top", '183px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '328px']
         ],
         "${_Ellipse7Copy29}": [
            ["style", "top", '199px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '369px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse5Copy}": [
            ["style", "top", '182px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '368px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse5Copy11}": [
            ["style", "top", '168px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '374px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse7Copy5}": [
            ["style", "top", '185px'],
            ["style", "height", '10px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '374px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse5Copy10}": [
            ["style", "top", '168px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '368px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse7Copy26}": [
            ["style", "top", '186px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '361px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3Copy14}": [
            ["style", "top", '183px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '328px']
         ],
         "${_Ellipse7Copy23}": [
            ["style", "top", '190px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '343px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3Copy13}": [
            ["style", "top", '192px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '367px']
         ],
         "${_Ellipse3Copy12}": [
            ["style", "top", '177px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '367px']
         ],
         "${_Ellipse7Copy10}": [
            ["style", "top", '169px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '366px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse3Copy3}": [
            ["style", "top", '192px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '367px']
         ],
         "${_Ellipse3Copy2}": [
            ["style", "top", '177px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '367px']
         ],
         "${_Ellipse7Copy8}": [
            ["style", "top", '175px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '370px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse7Copy28}": [
            ["style", "top", '195px'],
            ["style", "height", '18px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '361px'],
            ["style", "width", '18px']
         ],
         "${_Ellipse5Copy3}": [
            ["style", "top", '168px'],
            ["style", "height", '22px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '374px'],
            ["style", "width", '22px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13000,
         autoPlay: false,
         timeline: [
            { id: "eid3093", tween: [ "style", "${_Ellipse7Copy9}", "left", '142px', { fromValue: '370px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3094", tween: [ "style", "${_Ellipse7Copy9}", "left", '-255px', { fromValue: '142px'}], position: 3856, duration: 7632, easing: "swing" },
            { id: "eid2971", tween: [ "style", "${_Ellipse5Copy11}", "left", '95px', { fromValue: '374px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3013", tween: [ "style", "${_Ellipse5Copy11}", "left", '-305px', { fromValue: '95px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3059", tween: [ "style", "${_Ellipse7Copy5}", "top", '480px', { fromValue: '185px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3060", tween: [ "style", "${_Ellipse7Copy5}", "top", '-71px', { fromValue: '480px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid3089", tween: [ "style", "${_Ellipse3Copy3}", "top", '355px', { fromValue: '192px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3090", tween: [ "style", "${_Ellipse3Copy3}", "top", '142px', { fromValue: '355px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid3045", tween: [ "style", "${_Ellipse7Copy3}", "top", '419px', { fromValue: '185px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3046", tween: [ "style", "${_Ellipse7Copy3}", "top", '3px', { fromValue: '419px'}], position: 3856, duration: 7632, easing: "swing" },
            { id: "eid2952", tween: [ "style", "${_Ellipse7Copy30}", "top", '473px', { fromValue: '175px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3004", tween: [ "style", "${_Ellipse7Copy30}", "top", '112px', { fromValue: '473px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid2923", tween: [ "style", "${_Ellipse5Copy8}", "left", '142px', { fromValue: '368px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2989", tween: [ "style", "${_Ellipse5Copy8}", "left", '-405px', { fromValue: '142px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3085", tween: [ "style", "${_Ellipse5Copy2}", "top", '370px', { fromValue: '168px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3086", tween: [ "style", "${_Ellipse5Copy2}", "top", '-56px', { fromValue: '370px'}], position: 3856, duration: 8136, easing: "swing" },
            { id: "eid2960", tween: [ "style", "${_Ellipse3Copy13}", "top", '355px', { fromValue: '192px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3008", tween: [ "style", "${_Ellipse3Copy13}", "top", '142px', { fromValue: '355px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3047", tween: [ "style", "${_Ellipse7Copy4}", "left", '99px', { fromValue: '361px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3048", tween: [ "style", "${_Ellipse7Copy4}", "left", '-174px', { fromValue: '99px'}], position: 3856, duration: 8136, easing: "swing" },
            { id: "eid3065", tween: [ "style", "${_Ellipse7Copy6}", "left", '178px', { fromValue: '361px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3066", tween: [ "style", "${_Ellipse7Copy6}", "left", '-283px', { fromValue: '178px'}], position: 3856, duration: 7632, easing: "swing" },
            { id: "eid2955", tween: [ "style", "${_Ellipse5Copy10}", "left", '197px', { fromValue: '368px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3005", tween: [ "style", "${_Ellipse5Copy10}", "left", '-195px', { fromValue: '197px'}], position: 2464, duration: 8029, easing: "swing" },
            { id: "eid3049", tween: [ "style", "${_Ellipse7Copy4}", "top", '413px', { fromValue: '186px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3050", tween: [ "style", "${_Ellipse7Copy4}", "top", '-73px', { fromValue: '413px'}], position: 3856, duration: 8136, easing: "swing" },
            { id: "eid3073", tween: [ "style", "${_Ellipse3Copy2}", "top", '356px', { fromValue: '177px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3074", tween: [ "style", "${_Ellipse3Copy2}", "top", '-53px', { fromValue: '356px'}], position: 3856, duration: 8136, easing: "swing" },
            { id: "eid2948", tween: [ "style", "${_Ellipse7Copy29}", "top", '378px', { fromValue: '199px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3002", tween: [ "style", "${_Ellipse7Copy29}", "top", '-48px', { fromValue: '378px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid3087", tween: [ "style", "${_Ellipse3Copy3}", "left", '179px', { fromValue: '367px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3088", tween: [ "style", "${_Ellipse3Copy3}", "left", '-401px', { fromValue: '179px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid2928", tween: [ "style", "${_Ellipse3Copy11}", "top", '424px', { fromValue: '178px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2992", tween: [ "style", "${_Ellipse3Copy11}", "top", '-56px', { fromValue: '424px'}], position: 2464, duration: 8029, easing: "swing" },
            { id: "eid2896", tween: [ "style", "${_Ellipse7Copy24}", "top", '442px', { fromValue: '172px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2982", tween: [ "style", "${_Ellipse7Copy24}", "top", '52px', { fromValue: '442px'}], position: 2464, duration: 7532, easing: "swing" },
            { id: "eid3091", tween: [ "style", "${_Ellipse7Copy9}", "top", '325px', { fromValue: '176px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3092", tween: [ "style", "${_Ellipse7Copy9}", "top", '-69px', { fromValue: '325px'}], position: 3856, duration: 7632, easing: "swing" },
            { id: "eid2499", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-732,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-732,0]}], position: 0, duration: 0 },
            { id: "eid2500", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1083,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-732,0]}], position: 299, duration: 0 },
            { id: "eid2501", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-732,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1084,0]}], position: 500, duration: 0 },
            { id: "eid2508", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1083,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-732,0]}], position: 1000, duration: 0 },
            { id: "eid2509", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-732,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1083,0]}], position: 1197, duration: 0 },
            { id: "eid2502", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-371,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-732,0]}], position: 1896, duration: 0 },
            { id: "eid2503", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [65,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-372,0]}], position: 2307, duration: 0 },
            { id: "eid2504", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-732,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [65,0]}], position: 2694, duration: 0 },
            { id: "eid3024", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-371,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-732,0]}], position: 3317, duration: 0 },
            { id: "eid3025", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [65,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-371,0]}], position: 3699, duration: 0 },
            { id: "eid3026", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-732,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [65,0]}], position: 4070, duration: 0 },
            { id: "eid2505", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1083,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-732,0]}], position: 5000, duration: 0 },
            { id: "eid2506", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-732,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1084,0]}], position: 5205, duration: 0 },
            { id: "eid3107", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1083,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-732,0]}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid3108", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-732,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1083,0]}], position: 7204, duration: 0, easing: "swing" },
            { id: "eid3109", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-1083,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-732,0]}], position: 9500, duration: 0, easing: "swing" },
            { id: "eid3110", tween: [ "style", "${_sprite_gripado_invertido_}", "background-position", [-732,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1083,0]}], position: 9750, duration: 0, easing: "swing" },
            { id: "eid3031", tween: [ "style", "${_Ellipse7Copy}", "top", '451px', { fromValue: '190px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3032", tween: [ "style", "${_Ellipse7Copy}", "top", '-79px', { fromValue: '451px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid3071", tween: [ "style", "${_Ellipse3Copy2}", "left", '127px', { fromValue: '367px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3072", tween: [ "style", "${_Ellipse3Copy2}", "left", '-252px', { fromValue: '127px'}], position: 3856, duration: 8136, easing: "swing" },
            { id: "eid3077", tween: [ "style", "${_Ellipse7Copy7}", "top", '378px', { fromValue: '199px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3078", tween: [ "style", "${_Ellipse7Copy7}", "top", '-48px', { fromValue: '378px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid2956", tween: [ "style", "${_Ellipse5Copy10}", "top", '370px', { fromValue: '168px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3006", tween: [ "style", "${_Ellipse5Copy10}", "top", '-56px', { fromValue: '370px'}], position: 2464, duration: 8029, easing: "swing" },
            { id: "eid2899", tween: [ "style", "${_Ellipse7Copy22}", "left", '85px', { fromValue: '333px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2977", tween: [ "style", "${_Ellipse7Copy22}", "left", '-399px', { fromValue: '85px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid2931", tween: [ "style", "${_Ellipse7Copy27}", "left", '62px', { fromValue: '374px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2993", tween: [ "style", "${_Ellipse7Copy27}", "left", '-209px', { fromValue: '62px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid3033", tween: [ "style", "${_Ellipse7Copy}", "left", '72px', { fromValue: '343px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3034", tween: [ "style", "${_Ellipse7Copy}", "left", '-384px', { fromValue: '72px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid2963", tween: [ "style", "${_Ellipse7Copy31}", "left", '142px', { fromValue: '370px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3009", tween: [ "style", "${_Ellipse7Copy31}", "left", '-255px', { fromValue: '142px'}], position: 2464, duration: 7532, easing: "swing" },
            { id: "eid3029", tween: [ "style", "${_Ellipse7}", "left", '85px', { fromValue: '333px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3030", tween: [ "style", "${_Ellipse7}", "left", '-391px', { fromValue: '85px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid2911", tween: [ "style", "${_Ellipse7Copy25}", "left", '158px', { fromValue: '341px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2985", tween: [ "style", "${_Ellipse7Copy25}", "left", '-394px', { fromValue: '158px'}], position: 2464, duration: 7532, easing: "swing" },
            { id: "eid2936", tween: [ "style", "${_Ellipse7Copy28}", "top", '396px', { fromValue: '195px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2996", tween: [ "style", "${_Ellipse7Copy28}", "top", '-54px', { fromValue: '396px'}], position: 2464, duration: 7532, easing: "swing" },
            { id: "eid3035", tween: [ "style", "${_Ellipse7Copy2}", "top", '442px', { fromValue: '172px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3036", tween: [ "style", "${_Ellipse7Copy2}", "top", '-82px', { fromValue: '442px'}], position: 3856, duration: 7632, easing: "swing" },
            { id: "eid2959", tween: [ "style", "${_Ellipse3Copy13}", "left", '179px', { fromValue: '367px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3007", tween: [ "style", "${_Ellipse3Copy13}", "left", '-401px', { fromValue: '179px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3061", tween: [ "style", "${_Ellipse7Copy5}", "left", '62px', { fromValue: '374px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3062", tween: [ "style", "${_Ellipse7Copy5}", "left", '-209px', { fromValue: '62px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid3079", tween: [ "style", "${_Ellipse7Copy8}", "top", '473px', { fromValue: '175px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3080", tween: [ "style", "${_Ellipse7Copy8}", "top", '112px', { fromValue: '473px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid2940", tween: [ "style", "${_Ellipse5Copy9}", "top", '451px', { fromValue: '182px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2998", tween: [ "style", "${_Ellipse5Copy9}", "top", '-66px', { fromValue: '451px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3027", tween: [ "style", "${_Ellipse7}", "top", '485px', { fromValue: '172px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3028", tween: [ "style", "${_Ellipse7}", "top", '194px', { fromValue: '485px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid3041", tween: [ "style", "${_Ellipse3}", "top", '417px', { fromValue: '201px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3042", tween: [ "style", "${_Ellipse3}", "top", '-55px', { fromValue: '417px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid2951", tween: [ "style", "${_Ellipse7Copy30}", "left", '106px', { fromValue: '370px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3003", tween: [ "style", "${_Ellipse7Copy30}", "left", '-401px', { fromValue: '106px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3075", tween: [ "style", "${_Ellipse7Copy7}", "left", '173px', { fromValue: '369px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3076", tween: [ "style", "${_Ellipse7Copy7}", "left", '-219px', { fromValue: '173px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid3095", tween: [ "style", "${_Ellipse7Copy10}", "top", '312px', { fromValue: '169px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3096", tween: [ "style", "${_Ellipse7Copy10}", "top", '165px', { fromValue: '312px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid3101", tween: [ "style", "${_Ellipse5Copy3}", "top", '374px', { fromValue: '168px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3102", tween: [ "style", "${_Ellipse5Copy3}", "top", '-73px', { fromValue: '374px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid2939", tween: [ "style", "${_Ellipse5Copy9}", "left", '40px', { fromValue: '368px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2997", tween: [ "style", "${_Ellipse5Copy9}", "left", '-352px', { fromValue: '40px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid2895", tween: [ "style", "${_Ellipse7Copy24}", "left", '103px', { fromValue: '343px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2981", tween: [ "style", "${_Ellipse7Copy24}", "left", '-407px', { fromValue: '103px'}], position: 2464, duration: 7532, easing: "swing" },
            { id: "eid3083", tween: [ "style", "${_Ellipse5Copy2}", "left", '197px', { fromValue: '368px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3084", tween: [ "style", "${_Ellipse5Copy2}", "left", '-195px', { fromValue: '197px'}], position: 3856, duration: 8136, easing: "swing" },
            { id: "eid2908", tween: [ "style", "${_Ellipse3Copy10}", "top", '417px', { fromValue: '201px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2984", tween: [ "style", "${_Ellipse3Copy10}", "top", '-54px', { fromValue: '417px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3081", tween: [ "style", "${_Ellipse7Copy8}", "left", '106px', { fromValue: '370px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3082", tween: [ "style", "${_Ellipse7Copy8}", "left", '-401px', { fromValue: '106px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid3097", tween: [ "style", "${_Ellipse7Copy10}", "left", '112px', { fromValue: '366px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3098", tween: [ "style", "${_Ellipse7Copy10}", "left", '-410px', { fromValue: '112px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid2944", tween: [ "style", "${_Ellipse3Copy12}", "top", '356px', { fromValue: '177px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3000", tween: [ "style", "${_Ellipse3Copy12}", "top", '-53px', { fromValue: '356px'}], position: 2464, duration: 8029, easing: "swing" },
            { id: "eid2947", tween: [ "style", "${_Ellipse7Copy29}", "left", '173px', { fromValue: '369px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3001", tween: [ "style", "${_Ellipse7Copy29}", "left", '-219px', { fromValue: '173px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid2967", tween: [ "style", "${_Ellipse7Copy32}", "left", '112px', { fromValue: '366px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3011", tween: [ "style", "${_Ellipse7Copy32}", "left", '-410px', { fromValue: '112px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid2907", tween: [ "style", "${_Ellipse3Copy10}", "left", '127px', { fromValue: '346px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2983", tween: [ "style", "${_Ellipse3Copy10}", "left", '-401px', { fromValue: '127px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid2920", tween: [ "style", "${_Ellipse7Copy26}", "top", '413px', { fromValue: '186px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2988", tween: [ "style", "${_Ellipse7Copy26}", "top", '-57px', { fromValue: '413px'}], position: 2464, duration: 8029, easing: "swing" },
            { id: "eid2975", tween: [ "style", "${_Ellipse3Copy14}", "left", '163px', { fromValue: '328px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3015", tween: [ "style", "${_Ellipse3Copy14}", "left", '-409px', { fromValue: '163px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid2964", tween: [ "style", "${_Ellipse7Copy31}", "top", '325px', { fromValue: '176px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3010", tween: [ "style", "${_Ellipse7Copy31}", "top", '-69px', { fromValue: '325px'}], position: 2464, duration: 7532, easing: "swing" },
            { id: "eid2932", tween: [ "style", "${_Ellipse7Copy27}", "top", '480px', { fromValue: '185px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2994", tween: [ "style", "${_Ellipse7Copy27}", "top", '-71px', { fromValue: '480px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid3063", tween: [ "style", "${_Ellipse7Copy6}", "top", '396px', { fromValue: '195px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3064", tween: [ "style", "${_Ellipse7Copy6}", "top", '-54px', { fromValue: '396px'}], position: 3856, duration: 7632, easing: "swing" },
            { id: "eid2972", tween: [ "style", "${_Ellipse5Copy11}", "top", '374px', { fromValue: '168px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3014", tween: [ "style", "${_Ellipse5Copy11}", "top", '-73px', { fromValue: '374px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3037", tween: [ "style", "${_Ellipse7Copy2}", "left", '103px', { fromValue: '343px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3038", tween: [ "style", "${_Ellipse7Copy2}", "left", '-191px', { fromValue: '103px'}], position: 3856, duration: 7632, easing: "swing" },
            { id: "eid2904", tween: [ "style", "${_Ellipse7Copy23}", "top", '451px', { fromValue: '190px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2980", tween: [ "style", "${_Ellipse7Copy23}", "top", '-73px', { fromValue: '451px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid2976", tween: [ "style", "${_Ellipse3Copy14}", "top", '330px', { fromValue: '183px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3016", tween: [ "style", "${_Ellipse3Copy14}", "top", '30px', { fromValue: '330px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid3053", tween: [ "style", "${_Ellipse5}", "top", '383px', { fromValue: '184px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3054", tween: [ "style", "${_Ellipse5}", "top", '-22px', { fromValue: '383px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid3039", tween: [ "style", "${_Ellipse3}", "left", '127px', { fromValue: '346px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3040", tween: [ "style", "${_Ellipse3}", "left", '-158px', { fromValue: '127px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid2927", tween: [ "style", "${_Ellipse3Copy11}", "left", '72px', { fromValue: '368px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2991", tween: [ "style", "${_Ellipse3Copy11}", "left", '-320px', { fromValue: '72px'}], position: 2464, duration: 8029, easing: "swing" },
            { id: "eid3055", tween: [ "style", "${_Ellipse3Copy}", "left", '72px', { fromValue: '368px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3056", tween: [ "style", "${_Ellipse3Copy}", "left", '-320px', { fromValue: '72px'}], position: 3856, duration: 8136, easing: "swing" },
            { id: "eid2935", tween: [ "style", "${_Ellipse7Copy28}", "left", '178px', { fromValue: '361px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2995", tween: [ "style", "${_Ellipse7Copy28}", "left", '-283px', { fromValue: '178px'}], position: 2464, duration: 7532, easing: "swing" },
            { id: "eid2919", tween: [ "style", "${_Ellipse7Copy26}", "left", '99px', { fromValue: '361px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2987", tween: [ "style", "${_Ellipse7Copy26}", "left", '-370px', { fromValue: '99px'}], position: 2464, duration: 8029, easing: "swing" },
            { id: "eid3067", tween: [ "style", "${_Ellipse5Copy}", "left", '40px', { fromValue: '368px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3068", tween: [ "style", "${_Ellipse5Copy}", "left", '-352px', { fromValue: '40px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid3051", tween: [ "style", "${_Ellipse5}", "left", '142px', { fromValue: '368px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3052", tween: [ "style", "${_Ellipse5}", "left", '-405px', { fromValue: '142px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid2924", tween: [ "style", "${_Ellipse5Copy8}", "top", '383px', { fromValue: '184px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2990", tween: [ "style", "${_Ellipse5Copy8}", "top", '-22px', { fromValue: '383px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3057", tween: [ "style", "${_Ellipse3Copy}", "top", '424px', { fromValue: '178px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3058", tween: [ "style", "${_Ellipse3Copy}", "top", '-56px', { fromValue: '424px'}], position: 3856, duration: 8136, easing: "swing" },
            { id: "eid2968", tween: [ "style", "${_Ellipse7Copy32}", "top", '312px', { fromValue: '169px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid3012", tween: [ "style", "${_Ellipse7Copy32}", "top", '165px', { fromValue: '312px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid2943", tween: [ "style", "${_Ellipse3Copy12}", "left", '127px', { fromValue: '367px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2999", tween: [ "style", "${_Ellipse3Copy12}", "left", '-252px', { fromValue: '127px'}], position: 2464, duration: 8029, easing: "swing" },
            { id: "eid2903", tween: [ "style", "${_Ellipse7Copy23}", "left", '72px', { fromValue: '343px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2979", tween: [ "style", "${_Ellipse7Copy23}", "left", '-237px', { fromValue: '72px'}], position: 2464, duration: 8527, easing: "swing" },
            { id: "eid2912", tween: [ "style", "${_Ellipse7Copy25}", "top", '419px', { fromValue: '185px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2986", tween: [ "style", "${_Ellipse7Copy25}", "top", '85px', { fromValue: '419px'}], position: 2464, duration: 7532, easing: "swing" },
            { id: "eid3103", tween: [ "style", "${_Ellipse3Copy4}", "left", '163px', { fromValue: '328px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3104", tween: [ "style", "${_Ellipse3Copy4}", "left", '-409px', { fromValue: '163px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid3099", tween: [ "style", "${_Ellipse5Copy3}", "left", '95px', { fromValue: '374px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3100", tween: [ "style", "${_Ellipse5Copy3}", "left", '-305px', { fromValue: '95px'}], position: 3856, duration: 9144, easing: "swing" },
            { id: "eid3105", tween: [ "style", "${_Ellipse3Copy4}", "top", '330px', { fromValue: '183px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3106", tween: [ "style", "${_Ellipse3Copy4}", "top", '30px', { fromValue: '330px'}], position: 3856, duration: 8640, easing: "swing" },
            { id: "eid2900", tween: [ "style", "${_Ellipse7Copy22}", "top", '485px', { fromValue: '172px'}], position: 2307, duration: 157, easing: "swing" },
            { id: "eid2978", tween: [ "style", "${_Ellipse7Copy22}", "top", '8px', { fromValue: '485px'}], position: 2464, duration: 9024, easing: "swing" },
            { id: "eid3043", tween: [ "style", "${_Ellipse7Copy3}", "left", '158px', { fromValue: '341px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3044", tween: [ "style", "${_Ellipse7Copy3}", "left", '-415px', { fromValue: '158px'}], position: 3856, duration: 7632, easing: "swing" },
            { id: "eid3069", tween: [ "style", "${_Ellipse5Copy}", "top", '451px', { fromValue: '182px'}], position: 3699, duration: 157, easing: "swing" },
            { id: "eid3070", tween: [ "style", "${_Ellipse5Copy}", "top", '-66px', { fromValue: '451px'}], position: 3856, duration: 9144, easing: "swing" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-25693401");
