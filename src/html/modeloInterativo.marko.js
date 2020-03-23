// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sitepef$1.0.0/src/html/modeloInterativo.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><title>Página de PEF</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\"><link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\"><link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\" type=\"text/css\"><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script><link rel=\"stylesheet\" href=\"./src/css/estilo.css\"><link rel=\"stylesheet\" href=\"./src/css/jq.css\"><script src=\"./src/js/modeloScript.js\"></script><style>\n\n  </style></head><body id=\"myPage\" data-target=\".navbar\" data-offset=\"60\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-default navbar-fixed-top\"><div id=\"menu\" class=\"container\"><div id=\"links\"><a class=\"dp btn dropBut\">Home</a><div class=\"dropagem\"><a id=\"resumosBut\" class=\"dp btn dropBut\" href=\"http://pef3100-com.umbler.net/educacao\">Educação</a><div id=\"listaResumos\" class=\"dp droplist\"><a href=\"\">Conceitos</a><a href=\"\">Estruturas 2D</a><a href=\"\">Estruturas 3D </a></div></div><div class=\"dropagem\"><a id=\"educacaoBut\" class=\" btn dropBut\" href=\"http://pef3100-com.umbler.net/pratique\">Pratique</a></div><a href=\"http://pef3100-com.umbler.net/\" class=\"dp btn dropBut\">Modelo Interativo</a><a href=\"http://pef3100-com.umbler.net/notas\" class=\"dp btn dropBut\">Notas</a></div></div></nav><div id=\"title1\" class=\"jumbotron text-center\"><h3>Modelo Interativo</h3><p>Calculadora de reações de apoio em uma barra</p></div><div><div class=\"row\"><div class=\"col-sm-12 text-center\"><div id=\"conteudo\"><div class=\"Sforca\"><img src=\"./src/imagens/seta.png\" class=\"forca\" id=\"forca0\"><img src=\"./src/imagens/rotation.png\" class=\"rotation\"><div class=\"divInput\"><div style=\"float:left\" class=\"texto\">Força</div><div><input type=\"text\" name=\"quantiadeForca\" id=\"inputForca\" placeholder=\"N\"></div></div></div><div class=\"SapoioSimples\"><img src=\"./src/imagens/apoiosimples.png\" class=\"apoioSimples\" id=\"aS0\"></div><div class=\"divDistancia\"><div style=\"float:left\" class=\"textoDistancia\">Distancia</div><div> <p class=\"texto\" id=\"inputDistancia\">0.0m</p></div></div><div class=\"SDelete\"><img src=\"./src/imagens/delete.png\" class=\"Delete\"></div><div class=\"SapoioDuplo\"><img src=\"./src/imagens/apoioDuplo.png\" class=\"apoioDuplo\" id=\"aD0\"></div><div id=\"barra\"><img src=\"./src/imagens/Barra.png\"> </div><br><div id=\"solution\" style=\"margin-top: 20px;\"><button type=\"button\" class=\"btn btn-secondary\">Resolve</button><p class=\"ans\">Resposta</p><span id=\"ans1\"></span><br><span id=\"ans2\"></span><br><span id=\"ans3\"></span></div></div><h4 style=\"text-align: center;\"> Como utilizar calculo de apoios em uma barra</h4><div class=\"col-md-8\" id=\"explicacao\"><span>Passando o mouse sobre a barra é possível verificar em que ponto será aplicado uma força, apoio simples e apoio duplo.Para selecionar um elemento, a componente selecionada deve permanecer na cor verde claro. Após isso deverá clicar na barra no ponto que deseja aplicar aquele elemento. Lembrando que no caso da força é necessário selecionar uma intensidade.Após colocar os componentes necessárias, é possível clicar no botão solve que dirá 3 respostas possíveis: Estrutura hipostática é aquela em que o número de reações é inferior ao de equações da estática. As estruturas isostáticas são aquelas em que o número de reações de apoio é igual ao número de equações de equilíbrio disponíveis, ou seja, o sistema é determinado. O sistema hiperstático são aquelas em que o número de reações de apoio é maior que o número de equações de equilíbrio disponíveis, ou seja, o sistema é indeterminado. Para deletar algum elemento, selecione a caixa DELETE e clicar no elemento que deseja apagar.</span></div></div></div></div><div></div><div id=\"direitos\"><strong>Disciplina PEF3100</strong></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "70");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sitepef$1.0.0/src/html/modeloInterativo.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
