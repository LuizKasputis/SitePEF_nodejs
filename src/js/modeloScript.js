$(document).ready(() => {

			var forca = undefined;
			var fFLag1=0 , apoioS = 0, apoioD= 0, flagDelet = 0;
			var forcas = 1 , as = 1, ad = 1;
			var dirAtual = 0, angulo, objeto = 3, num;

			/*Classe que guarda todas as forças aplicadas na barra*/
			class conjForcas{
					constructor(){
						this.num = 0;
						this.hor = 0;
						this.ver = 0;
						this.int = new Array();
						this.pont = new Array();
						this.dire = new Array();
						this.index = new Array();
					}

					forca(inte, pont, dir, ind){

						this.int.push(inte);
						this.pont.push(pont);
						this.dire.push(dir);
						this.index.push(ind);

						if(this.dire[this.num] == 1 || this.dire[this.num] == 3){
							this.hor ++;
						}
						if(this.dire[this.num] == 0 || this.dire[this.num] == 2){
							this.ver ++;
						}

						this.num++;
					}

					vertical(){
						return +this.ver;
					}

					horizontal(){
						return +this.hor;
					}

					resuHo(){
						var soma = 0;

						for(var i=0; i<this.num; i++){
							var dir = +this.dire[i];

							if(dir == 1){
								soma += +this.int[i];
							}

							if(dir == 3){
								soma -= +this.int[i];
							}
						}
						return soma;
					}

					resuVe(){
						var soma = 0;

						for(var i=0; i<this.num; i++){
							var dir = +this.dire[i];
							if(dir == 0){
								soma += +this.int[i];
							}
							if(dir == 2){
								soma -= +this.int[i];
							}

						}
						return soma;
					}

                    remove(ind){
						for(var i = 0 ; i < this.num ; i++){
							if(this.index[i] == ind){
							    if(this.dire[i] == 1 || this.dire[i]== 3){
									this.hor--;
								}
								if(this.dire[i] == 0 || this.dire[i]== 2){
									this.ver--;
								}
								this.int[i] = -1;
								this.dire[i] = -1;
								this.pont[i] = -1;
								this.index[i] = -1;

								break;
							}
						}
					}

					numForca(){
						return +this.num;
					}

					direcao(i){
						return +this.dire[i];
					}

					inte(i){
						return +this.int[i];
					}

					ponto(i){
						return +this.pont[i];
					}

					printaTudo(){
						for(var i=0; i<this.num; i++){
							console.log(this.int[i], this.pont[i], this.dire[i]);
						}
					}
				}

				/*Classe que guarda todas oss apoios simples aplicados na barra*/
				class conApoioS{
					constructor(){
						this.num = 0;
						this.pont = new Array();
						this.index = new Array();
					}

					add(ponto, inde){
						this.pont.push(ponto);
						this.index.push(inde);
						this.num++;
					}

					numApoioS(){
						return +this.num;
					}

					ponto(i){
						return +this.pont[i];
					}

					remove(ind){
						var numero = this.num;
						for(var i=0; i<numero ; i++){
								if(this.index[i] == ind){
									this.index.splice(i, 1);
									this.pont.splice(i, 1);
									this.num--;
									break;
								}
						}
					}


					printaTudo(){
						for(var i=0; i<this.num; i++){
							console.log(this.pont[i]);
						}
					}
				}

				/*Classe que guarda todas oss apoios Duplo aplicados na barra*/
				class conApoioD{
					constructor(){
						this.num = 0;
						this.pont = new Array();
						this.index = new Array();
					}

					numApoioD(){
						return +this.num;
					}

					add(pont, inde){
						this.pont.push(pont);
						this.index.push(inde);
						this.num++;
					}

                    remove(ind){
						var numero = this.num;
						for(var i=0; i<numero ; i++){
								if(this.index[i] == ind){
									this.index.splice(i, 1);
									this.pont.splice(i, 1);
									this.num--;
									break;
								}
						}
					}

					ponto(i){
						return +this.pont[i];
					}

					printaTudo(){
						for(var i=0; i<this.num; i++){
							console.log(this.pont[i]);
						}
					}
				}

				var conjF = new conjForcas();
				var conAS = new conApoioS();
				var conAD = new conApoioD();

				/*Botão resolve*/
				function solve(){
					var fVer = conjF.vertical();
					var fHor = conjF.horizontal();
					var aSimples = conAS.numApoioS();
					var aDuplo = conAD.numApoioD();
					var aDVer=0, aDHor=0, aSVer =0, AsVer1=0 , AsVer2 = 0;

					/*Debuggar o botão Resolve*/
					console.log('AD'+aDuplo);
					console.log('AS'+aSimples);

					/*Essa porrada de if servem para verificar como o sistema se comporta, hipostático, hiperstático e isostático*/
					if((aDuplo == 1 && aSimples == 1) || (aDuplo == 1 && aSimples == 0) || aDuplo == 0 && aSimples == 1 || (aSimples == 2 && aDuplo == 0) ||(aDuplo == 2 && aSimples ==0)){

						if(( aDuplo == 0 && fHor >= 1) || ( aDuplo == 2 && fHor >= 1)){
							var ans = 'Sistema Hipostático'

							$('.ans').text(ans);
							$('.ans').css({
				         		'font-weight': 'bold',
				         		'font-size' : '16px',
				         		'color' : 'black'
				   			})

				   			$('#ans1').text('');
				   			$('#ans2').text('');
				   			$('#ans3').text('');

						}


						/*Tem que usar momento e resultante*/
						if(aDuplo == 1 && aSimples == 1){
							var as = conAS.ponto(0);
							var ad = conAD.ponto(0);

							aSVer = somam(ad)/(as-ad);
							aDVer = -(conjF.resuVe()) - (aSVer);
							aDHor = -conjF.resuHo();

							var ans ="Sistema Isostático"
							var ans1 = 'Reação do Apoio Duplo vertical = '+aDVer.toFixed(2)+'N';
							var ans2 = 'Reação do Apoio Duplo horizontal = '+aDHor.toFixed(2)+'N';
							var ans3 = 'Reação do Apoio Simples = '+aSVer.toFixed(2)+'N';

							$('.ans').text(ans);
							$('.ans').css({
				         		'font-weight': 'bold',
				         		'font-size' : '16px',
				         		'color' : 'black'
				   			})

							$('#ans1').text(ans1);
				   			$('#ans2').text(ans2);
				   			$('#ans3').text(ans3);


						}

						/*Somas das resultantes*/
						if(aDuplo == 1 && aSimples == 0){
							aDVer = -conjF.resuVe();
							aDHor = -conjF.resuHo();
                            var conf = somam(conAD.ponto(0));

                            if(conf == 0){
    							var ans ="Sistema Isostático"
    							var ans1 = 'Reação do ApoioDuplo vertical = '+aDVer+'N';
    							var ans2 = 'Reação do ApoioDuplo horizontal = '+aDHor+'N';

    							$('.ans').text(ans);
    							$('.ans').css({
    				         		'font-weight': 'bold',
    				         		'font-size' : '16px',
    				         		'color' : 'black'
    				   			})

    							$('#ans1').text(ans1);
    				   			$('#ans2').text(ans2);
        				   		$('#ans3').text('');
                            }else{
                                var ans = "Sistema Hipostático";

                                $('.ans').text(ans);
    							$('.ans').css({
    				         		'font-weight': 'bold',
    				         		'font-size' : '16px',
    				         		'color' : 'black'
    				   			})

                                $('#ans1').text('');
                                $('#ans2').text('');
                                $('#ans3').text('');
                            }

						}

						/*Somas das resultantes*/
						if(aDuplo == 0 && aSimples == 1 && fHor == 0){
							aSVer = -conjF.resuVe();
                            var conf = somam(conAS.ponto(0));

                            if(conf == 0){

    							var ans ="Sistema Isostático"
    							var ans1 = 'Reação do ApoioSimples = '+aSVer+'N';

    							$('.ans').text(ans);
    							$('.ans').css({
    				         		'font-weight': 'bold',
    				         		'font-size' : '16px',
    				         		'color' : 'black'
    				   			})

    							$('#ans1').text(ans1);
                            }else{
                                var ans ="Sistema Hipostático"
                                $('.ans').text(ans);
    							$('.ans').css({
    				         		'font-weight': 'bold',
    				         		'font-size' : '16px',
    				         		'color' : 'black'
    				   			})

    				   		    $('#ans1').text('');
    				   		    $('#ans2').text('');
    				   		    $('#ans3').text('');
                            }
						}

						/*Tem que usar momento e resultante*/
						if(aSimples == 2 && aDuplo == 0 && fHor == 0){
							var as1 = conAS.ponto(0);
							var as2 = conAS.ponto(1);

							asVer1 = somam(as2)/(as1-as2);
							asVer2 = -(conjF.resuVe()) - (asVer1);

							var ans ="Sistema Isostático"
							var ans1 = 'ApoioSimples ponto:'+as1+'m, Forca = '+asVer1.toFixed(2)+'N';
							var ans2 = 'ApoioSimples ponto:'+as2+'m, Forca='+asVer2.toFixed(2)+'N';

							$('.ans').text(ans);
							$('.ans').css({
				         		'font-weight': 'bold',
				         		'font-size' : '16px',
				         		'color' : 'black'
				   			})

							$('#ans1').text(ans1);
				   			$('#ans2').text(ans2);
				   			$('#ans3').text("");

						}

						if( aDuplo == 2 && fHor == 0){
						    var as1 = conAD.ponto(0);
							var as2 = conAD.ponto(1);

							asVer1 = somam(as2)/(as1-as2);
							asVer2 = -(conjF.resuVe()) - (asVer1);

							var ans ="Sistema Isostático"
							var ans1 = 'ApoioDuplo vertical ponto:'+as1+'m, Forca = '+asVer1.toFixed(2)+'N';
							var ans2 = 'ApoioDuplo vertical ponto:'+as2+'m, Forca='+asVer2.toFixed(2)+'N';

							$('.ans').text(ans);
							$('.ans').css({
				         		'font-weight': 'bold',
				         		'font-size' : '16px',
				         		'color' : 'black'
				   			})

							$('#ans1').text(ans1);
				   			$('#ans2').text(ans2);
				   			$('#ans3').text("");
						}

					}else{
                        if(aDuplo == 0 && aSimples == 0){
                            var ans = 'Sistema Hipostático'

							$('.ans').text(ans);
							$('.ans').css({
				         		'font-weight': 'bold',
				         		'font-size' : '16px',
				         		'color' : 'black'
				   			})

				   			$('#ans1').text('');
				   			$('#ans2').text('');
				   			$('#ans3').text('');

                        }else{
    						$('.ans').text('Sistema Hiperestático');
    						$('.ans').css({
    				         		'font-weight': 'bold',
    				         		'font-size' : '16px',
    				         		'color' : 'black'
    				   		})

    			   			$('#ans1').text('');
    			   			$('#ans2').text('');
    			   			$('#ans3').text('');
    					}
					}

				}
				/*Soma os polos vê a distancia onde cada força está sendo aplicada*/
				function somam(polo){
					var num = conjF.numForca();
					var soma = 0.0;

					for(var i =0; i<num ; i++){
						var dis = conjF.ponto(i) - polo;
						var int = conjF.inte(i);
						var dir = conjF.direcao(i);

						if(dir == 0){
							soma = soma + dis*int;
						}else if(dir == 2){
							soma = soma -(dis*int);
						}
					}

					return -soma;
				}

			function palavra (palavra, num){
				return '#' + palavra + num;
			}

			/*Retorna em graus a direção que está sendo aplicada*/
			function direcao(){

				if(dirAtual == 0){
					return 0
				}

				if(dirAtual == 1){
					return 90
				}

				if(dirAtual == 2){
					return 180
				}

				if(dirAtual == 3){
					return 270
				}
			}

			/*Girando a força*/
			function gira(){
				if(dirAtual < 3){
					dirAtual++
				}else if(dirAtual == 3){
					dirAtual = 0
				}
			}


			function atualiza(){
				angulo = direcao();
				$(palavra("forca", 0)).css({
		         		'-moz-transform':'rotate('+angulo+'deg)',
		          		'-webkit-transform':'rotate('+angulo+'deg)',
		        		'-o-transform':'rotate('+angulo+'deg)',
		  	 		    '-ms-transform':'rotate('+angulo+'deg)',
		       		    'transform': 'rotate('+angulo+'deg)'
		   			})
			}

			function eixoY(){
				if(dirAtual == 0)
					return 160
				if(dirAtual == 1)
					return 140
				if(dirAtual == 2)
					return 125
				if(dirAtual == 3)
					return 140
			}

			function clearBackGround(){

				$('.Delete').css({
	          			"background-color": "#f2f2f2"
	        		});
				flagDelet = 0

				$(palavra("aS", 0)).css({
	          			"background-color": "#f2f2f2"
	        		});
				apoioS = 0

				$( palavra("forca", 0)).css({
	          			"background-color": "#f2f2f2"
	        		});
				fFLag1 = 0
				
				$(palavra("aD", 0)).css({
	          			"background-color": "#f2f2f2"
	        		});
				apoioD = 0

			}

 			/*Posição do apoio*/
 			function addApoio(x, y, tipo, index){
 				var dis = (x)/550*5
 				if(dis <= 0){
                    dis = 0.00;
                }
 				if(+tipo == 0){
 					conAS.add(dis.toFixed(2), index);
 				}else{
 					conAD.add(dis.toFixed(2), index);
 				}
 				objeto++;
 				$('<p  class="add" id="'+objeto+'" style="font-weight: bold; position:absolute; font-size: 10px; color:black; ">('+dis.toFixed(2)+'m)</p>').appendTo('.Sforca').animate({
										'marginLeft' : x ,
								 		'marginTop' : y + 45
	  			}, 0);
	  			objeto++;
 			}

			/*Coloca força aplicada em uma determinada ponto da barra*/
			function addForca(x,y,forca, index){
				var dis = (x)/550*5;
                if(dis <= 0){
                    dis = 0.00;
                }
				conjF.forca(forca, dis, dirAtual, index);
				objeto++;

				if(dirAtual == 0){
					$('<p class="forcaS" id="'+objeto+'" style="font-weight: bold; position:absolute; font-size: 10px; color:black; ">('+forca+'N,'+dis.toFixed(2)+'m)</p>').appendTo('.Sforca').animate({
										'marginLeft' : x - 20,
								 		'marginTop' : y + 40
	  				}, 0);
				}
				if(dirAtual == 1){
					$('<p class="forcaS" id="'+objeto+'" style="font-weight: bold; position:absolute; font-size: 10px; color:black;">('+forca+'N,'+dis.toFixed(2)+'m)</p>').appendTo('.Sforca').animate({
										'marginLeft' : x - 33,
								 		'marginTop' : y + 35
	  				}, 0);
				}
				if(dirAtual == 2){
					$('<p class="forcaS" id="'+objeto+'" style="font-weight: bold; position:absolute; font-size: 9px; color:black;">('+forca+'N,'+dis.toFixed(2)+'m)</p>').appendTo('.Sforca').animate({
										'marginLeft' : x - 18,
								 		'marginTop' : y - 10
	  				}, 0);
				}
				if(dirAtual == 3){
					$('<p class="forcaS" id="'+objeto+'" style="font-weight: bold; position:absolute; font-size: 9px; color:black;">('+forca+'N,'+dis.toFixed(2)+'m)</p>').appendTo('.Sforca').animate({
										'marginLeft' : x + 2,
								 		'marginTop' : y + 35
	  				}, 0);
				}
				objeto++;
			}

			/*Checar input*/
			function checkInput(){
				if(forca >= 1){
					$('#inputForca').css({
						'background-color' : "#f2f2f2"
					})
					return true;
				}

				$('#inputForca').css({
						'background-color' : '#ff9999'
					})
				return false;
			}

			/*Botão solução*/
			$('#solution').click(function(){
  				solve();
			})

			/*input da força*/
			$('#inputForca').keyup(function() {
				/*undefined*/
				var value = $( this ).val();
				forca = value.replace(/\D/g, "");
				console.log(forca);
			})


			/*Movimento click do delete*/

			$('.Delete').mouseenter(function() {
			    $(this).css("background-color", "#99ff99");
			}).mouseleave(function() {
				if(flagDelet == 0)
			    	$(this).css("background", "#f2f2f2");
			});

			$('.Delete').click(function(){

				/*Isso garante que eu posso clicar pra tirar a seleção*/
				if(flagDelet == 0){
				
					clearBackGround();

					$('.Delete').css({
	          			"background-color": "#99ff99"
	        		});
					flagDelet = 1
				}else if(flagDelet == 1){

					$('.Delete').css({
	          			"background-color": "#f2f2f2"
	        		});
					flagDelet = 0

				}

					$(".forcaS").click(function(e){
						 if(flagDelet == 1){
    						 num = e.target.id;
    						 conjF.remove(num);
    						 $('#'+num+'').remove();
    						 num++;
    						 $('#'+num+'').remove();
    						 $('.Delete').attr('style', 'background-color:white;')
    					    flagDelet=0;
						 }
					})


					$(".apoioS").click(function(e){
					    if(flagDelet == 1){
    						num = e.target.id;
    						conAS.remove(num);
    						$('#'+num+'').remove();
    						num++;
    						$('#'+num+'').remove();
    						$('.Delete').attr('style', 'background-color:white;')
    					    flagDelet=0;
					    }
					})

					$(".apoioD").click(function(e){
					    if(flagDelet == 1){
    						num = e.target.id;
    						conAD.remove(num);
    						$('#'+num+'').remove();
    						num++;
    						$('#'+num+'').remove();
    						$('.Delete').attr('style', 'background-color:white;')
    						flagDelet=0;
					    }
					})

			})

			/*Rotacao*/
			$('.rotation').click(function(){
				gira();
				atualiza(angulo)
			})

			$(palavra("forca", 0)).mouseenter(function() {
			    $(this).css("background-color", "#99ff99");
			}).mouseleave(function() {
				if(fFLag1 == 0)
			    	$(this).css("background", "#f2f2f2");
			});

			/*Movimento de clique da força*/
			$(palavra("forca", 0)).click(function(){

				/*Isso garante que eu posso clicar pra tirar a seleção*/
				if(fFLag1 == 0){
					clearBackGround()

					$( palavra("forca", 0)).css({
	          			"background-color": "#99ff99"
	        		});
					fFLag1 = 1
				}else if(fFLag1 == 1){

					$( palavra("forca", 0)).css({
	          			"background-color": "#f2f2f2"
	        		});
					fFLag1 = 0

				}


					$('#barra').click(function(e){

						if(fFLag1 == 1 && checkInput()){
						
							var x;

							if(dirAtual == 1 ){
								x = e.offsetX - 10;
							}else if(dirAtual == 3){
								x = e.offsetX + 20;
							}else{
								x = e.offsetX + 6;
							}

							x = x - 115
							var y = eixoY() + 10;

							$('<img src="./src/imagens/seta.png" id="'+objeto+'" class="forca add forcaS" style="margin-left: -38px; background: transparent no-repeat; border: none ; transform: rotate('+angulo+'deg) ">').appendTo('.Sforca').animate({
									'marginLeft' : x,
							 		'marginTop' : y
  							}, 500);

							addForca(e.offsetX ,y, forca, objeto);


							$( palavra("forca", 0)).css({
          						"background-color": "#f2f2f2"
        					});

							forcas++;
							fFLag1 = 0
						}
					})
			})


			/*Apoio simples*/

			$(palavra("aS", 0)).mouseenter(function() {
			    $(this).css("background-color", "#99ff99");
			}).mouseleave(function() {
				
				if(apoioS == 0)
			    	$(this).css("background", "#f2f2f2");
			
			});

			$(palavra("aS", 0)).click(function(){

				/*Isso garante que eu posso clicar pra tirar a seleção*/
				if(apoioS == 0){

					clearBackGround()
					
					$(palavra("aS", 0)).css({
	          			"background-color": "#99ff99"
	        		});
					apoioS = 1
				}else if(apoioS == 1){

					$(palavra("aS", 0)).css({
	          			"background-color": "#f2f2f2"
	        		});
					apoioS = 0

				}


					$('#barra').click(function(e) {
						if(apoioS == 1){

							var x = e.offsetX;
							var y = 170;

							$('<img src="./src/imagens/apoiosimples.png" id="'+objeto+'" id="forca"'+forcas+' class="forca add apoioS" style="margin-left: 185px; background: transparent no-repeat; border: none ;">').appendTo('.Sforca').animate({
							 		'marginLeft' : x - 110,
							 		'marginTop' : y
  							}, 500);

                            addApoio(x,y,0, objeto);
                            forcas++;

							$( palavra("aS", 0)).attr('style', 'background: #f2f2f2;')
							apoioS = 0
						}
					})
			})


			/*Apoio duplo*/
			
			$(palavra("aD", 0)).mouseenter(function() {
			    $(this).css("background-color", "#99ff99");
			}).mouseleave(function() {

				if(apoioD == 0)
			     $(this).css("background", "#f2f2f2");
			
			});

			$(palavra("aD", 0)).click(function(){


				/*Isso garante que eu posso clicar pra tirar a seleção*/
				if(apoioD == 0){

					clearBackGround()
				
					$(palavra("aD", 0)).css({
	          			"background-color": "#99ff99"
	        		});
					apoioD = 1
				}else if(apoioD == 1){

					$(palavra("aD", 0)).css({
	          			"background-color": "#f2f2f2"
	        		});
					apoioD = 0

				}

					$('#barra').click(function(e) {
						if(apoioD == 1){

							var x = e.offsetX;
							var y = 170;

							 $('<img src="./src/imagens/apoioDuplo.png" id="'+objeto+'" class="forca add apoioD" id="forca"'+forcas+' style=" margin-left: 240px; background: transparent no-repeat; border: none ;">').appendTo('.Sforca').animate({
							 		'marginLeft' : x - 110 ,
							 		'marginTop' : y
 								}, 500);
                            addApoio(x,y,1, objeto);
                            forcas++;

							$( palavra("aD", 0)).attr('style', 'background: #f2f2f2;')
							apoioD = 0

						}
					})
			})

			/*Calcula distancia*/
			$('#barra').mouseenter(function(e) {
				$('#barra').mousemove(function( event ) {
					var x = event.offsetX;
					var dis = (x)/550*5;
				    $('#inputDistancia').text(dis.toFixed(2)+"m");
				});
			}).mouseleave(function() {
				$('#inputDistancia').text("0.0m");
			});
	})
