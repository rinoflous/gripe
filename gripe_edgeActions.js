/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'abertura'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         //sym.getComposition().getStage().$("abertura").fadeOut(750);
         //sym.getComposition().getStage().getSymbol("virus_animado").play();

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_avanca_animado}", "click", function(sym, e) {
         //sym.$("texto_introducao").fadeOut(750);
         //sym.$("info").fadeOut(750);
         //sym.$("infoCopy").fadeOut(750);
         //sym.$("infoCopy3").fadeOut(750);
         //sym.$("infoCopy2").fadeOut(750);
         //sym.$("fundocinza").fadeOut(750);
         //sym.$("textorna_animado").fadeOut(750);
         //sym.$("textosaida_animado").fadeOut(750);
         //sym.$("textoreceptor_animado").fadeOut(750);
         //sym.$("textoproteina_animado").fadeOut(750);
         //sym.$("avanca_animado").fadeOut(750);
         //sym.$("alerta_animado").fadeOut(750);
         //sym.$("alerta_animado2").fadeOut(750);
         //sym.$("alerta_animado3").fadeOut(750);
         //sym.$("alerta_animado4").fadeOut(750);
         
         sym.play();
         
         
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7664, function(sym, e) {
         
         //sym.getSymbol("virusbackground_animado").setVariable("repeat",1);
         //sym.getSymbol("resfriado_animado").play();
         sym.$("virusbackground_animado").fadeOut(750);
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_alerta_animado}", "click", function(sym, e) {
         
         sym.getSymbol("textoproteina_animado").play();
         sym.$("alerta_animado").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alerta_animado3}", "click", function(sym, e) {
         sym.getSymbol("textoreceptor_animado").play();
         sym.$("alerta_animado3").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alerta_animado2}", "click", function(sym, e) {
         sym.getSymbol("textosaida_animado").play();
         sym.$("alerta_animado2").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alerta_animado4}", "click", function(sym, e) {
         sym.getSymbol("textorna_animado").play();
         sym.$("alerta_animado4").fadeOut(750);
         //sym.$("virusbackground_animado").setVariable("repeat",1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4597, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4604, function(sym, e) {
         sym.$("texto_introducao").fadeOut(750);
         sym.$("info").fadeOut(750);
         sym.$("infoCopy").fadeOut(750);
         sym.$("infoCopy3").fadeOut(750);
         sym.$("infoCopy2").fadeOut(750);
         sym.$("fundocinza").fadeOut(750);
         sym.$("textorna_animado").fadeOut(750);
         sym.$("textosaida_animado").fadeOut(750);
         sym.$("textoreceptor_animado").fadeOut(750);
         sym.$("textoproteina_animado").fadeOut(750);
         sym.$("avanca_animado").fadeOut(750);
         sym.$("alerta_animado").fadeOut(750);
         sym.$("alerta_animado2").fadeOut(750);
         sym.$("alerta_animado3").fadeOut(750);
         sym.$("alerta_animado4").fadeOut(750);

      });
      //Edge binding end

   })("abertura");
   //Edge symbol end:'abertura'

   //=========================================================
   
   //Edge symbol: 'virus_animado'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_avanca2}", "click", function(sym, e) {
         sym.getComposition().getStage().$("virus_animado").fadeOut(750);
         sym.getComposition().getStage().getSymbol("transmissao_animado").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_info}", "click", function(sym, e) {
         
         sym.getSymbol("textoproteina_animado").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_infoCopy}", "click", function(sym, e) {
         sym.getSymbol("textoreceptor_animado").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_infoCopy2}", "click", function(sym, e) {
         sym.getSymbol("textosaida_animado").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_infoCopy3}", "click", function(sym, e) {
         sym.getSymbol("textorna_animado").play();

      });
      //Edge binding end

   })("virus_animado");
   //Edge symbol end:'virus_animado'

   //=========================================================
   
   //Edge symbol: 'gripado_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         
         sym.play(0);

      });
      //Edge binding end

   })("gripado_animado");
   //Edge symbol end:'gripado_animado'

   //=========================================================
   
   //Edge symbol: 'reproducao_animado'
   (function(symbolName) {   
   
   })("reproducao_animado");
   //Edge symbol end:'reproducao_animado'

   //=========================================================
   
   //Edge symbol: 'textoproteina_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("textoproteina_animado");
   //Edge symbol end:'textoproteina_animado'

   //=========================================================
   
   //Edge symbol: 'textoreceptor_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("textoreceptor_animado");
   //Edge symbol end:'textoreceptor_animado'

   //=========================================================
   
   //Edge symbol: 'textosaida_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("textosaida_animado");
   //Edge symbol end:'textosaida_animado'

   //=========================================================
   
   //Edge symbol: 'textorna_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("textorna_animado");
   //Edge symbol end:'textorna_animado'

   //=========================================================
   
   //Edge symbol: 'virusbase_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("virusbase_animado");
   //Edge symbol end:'virusbase_animado'

   //=========================================================
   
   //Edge symbol: 'virusbackground_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         
         var repeat = sym.getVariable("repeat");
         if(repeat > 0){
             sym.setVariable("repeat", repeat - 1);
             
         }else{
             sym.play();
         }

      });
      //Edge binding end

   })("virusbackground_animado");
   //Edge symbol end:'virusbackground_animado'

   //=========================================================
   
   //Edge symbol: 'avanca_animado'
   (function(symbolName) {   
   
      

   })("avanca_animado");
   //Edge symbol end:'avanca_animado'

   //=========================================================
   
   //Edge symbol: 'resfriado_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.getSymbol("espirrando_animado").play();
         

      });
      //Edge binding end

   })("resfriado_animado");
   //Edge symbol end:'resfriado_animado'

   //=========================================================
   
   //Edge symbol: 'transmissao_animado'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         sym.$("alerta_animado5").fadeIn(750);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_avanca}", "click", function(sym, e) {
         sym.play();
         sym.$("avanca3").hide();
         sym.$("alerta_animado5").fadeOut(750);
         sym.$("alerta_animado6").fadeOut(750);
         sym.$("alerta_animado7").fadeOut(750);
         sym.$("alerta_animado8").fadeOut(750);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_texto_dentrodocorpo}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_avanca2}", "click", function(sym, e) {
         sym.play(0000);
         sym.$("producao_animado").hide();
         
         
         
         //sym.getComposition().getStage().getSymbol("abertura").play(0010);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1902, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7248, function(sym, e) {
         sym.stop();
         sym.$("alerta_animado6").fadeIn(750);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9398, function(sym, e) {
         sym.stop();
         sym.$("alerta_animado7").fadeIn(750);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16750, function(sym, e) {
         sym.stop();
         sym.$("alerta_animado8").fadeIn(750);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21436, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alerta_animado5}", "click", function(sym, e) {
         sym.play();
         sym.$("alerta_animado5").fadeOut(750)

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alerta_animado6}", "click", function(sym, e) {
         sym.play();
         sym.$("alerta_animado6").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alerta_animado7}", "click", function(sym, e) {
         sym.play();
         sym.$("alerta_animado7").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alerta_animado8}", "click", function(sym, e) {
         sym.play();
         sym.$("alerta_animado8").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1910, function(sym, e) {
         sym.$("perdigotos2").hide();

      });
      //Edge binding end

   })("transmissao_animado");
   //Edge symbol end:'transmissao_animado'

   //=========================================================
   
   //Edge symbol: 'inalando_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4884, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("inalando_animado");
   //Edge symbol end:'inalando_animado'

   //=========================================================
   
   //Edge symbol: 'espirrando_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4884, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("espirrando_animado");
   //Edge symbol end:'espirrando_animado'

   //=========================================================
   
   //Edge symbol: 'producao_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5309, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("producao_animado");
   //Edge symbol end:'producao_animado'

   //=========================================================
   
   //Edge symbol: 'espirrando2_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("espirrando2_animado");
   //Edge symbol end:'espirrando2_animado'

   //=========================================================
   
   //Edge symbol: 'espirrandoinvertido_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4884, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("espirrandoinvertido_animado");
   //Edge symbol end:'espirrandoinvertido_animado'

   //=========================================================
   
   //Edge symbol: 'espirrandoabertura_animado'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_texto_comecar}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("espirrandoabertura_animado3").fadeOut(750);
         sym.getComposition().getStage().getSymbol("abertura").play();
         
         //sym.$("texto_comecar").fadeOut(150);
         //sym.$("texto_aberturabranco").fadeOut(150);
         //sym.$("perdigotos3").fadeOut(150);
         //sym.$("perdigotos2").fadeOut(150);
         //sym.$("perdigotos").fadeOut(150);
         //sym.$("sprite_espirrandoabertura").fadeOut(150);
         //sym.$("Rectangle2").hide();
         
         
         
         //sym.play();
         
         
         
         

      });
      //Edge binding end

   })("espirrandoabertura_animado");
   //Edge symbol end:'espirrandoabertura_animado'

   //=========================================================
   
   //Edge symbol: 'perdigotos'
   (function(symbolName) {   
   
   })("perdigotos");
   //Edge symbol end:'perdigotos'

   //=========================================================
   
   //Edge symbol: 'alerta_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("alerta_animado");
   //Edge symbol end:'alerta_animado'

   //=========================================================
   
   //Edge symbol: 'perdigotos2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14652, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("perdigotos2");
   //Edge symbol end:'perdigotos2'

   //=========================================================
   
   //Edge symbol: 'espirrandotambem_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5134, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("espirrandotambem_animado");
   //Edge symbol end:'espirrandotambem_animado'

   //=========================================================
   
   //Edge symbol: 'espirroinvertido_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5145, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("espirroinvertido_animado");
   //Edge symbol end:'espirroinvertido_animado'

   //=========================================================
   
   //Edge symbol: 'espirrandoinvertidomaior_animado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("espirrandoinvertidomaior_animado");
   //Edge symbol end:'espirrandoinvertidomaior_animado'

})(jQuery, AdobeEdge, "EDGE-25693401");