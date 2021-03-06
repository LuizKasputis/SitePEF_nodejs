// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sitepef$1.0.0/src/html/educacao.marko",
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

  out.w("<!DOCTYPE html><html lang=\"en\"><head><title>Página de PEF</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\"><link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\"><link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\" type=\"text/css\"><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script><link rel=\"stylesheet\" href=\"./src/css/estilo.css\"><style>\n\n  </style></head><body id=\"myPage\" data-target=\".navbar\" data-offset=\"60\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-default navbar-fixed-top\"><div id=\"menu\" class=\"container\"><div id=\"links\"><div class=\"dropagem\"><a id=\"resumosBut\" class=\"dp btn dropBut\" href=\"http://pef3100-wiki.umbler.net/\">Home</a><div id=\"listaResumos\" class=\"dp droplist\"><a href=\"\">Conceitos</a><a href=\"\">Estruturas 2D</a><a href=\"\">Estruturas 3D </a></div></div><div class=\"dropagem\"><a id=\"educacaoBut\" class=\" btn dropBut\" href=\"http://pef3100-wiki.umbler.net/pratique\">Pratique</a></div><a href=\"http://pef3100-wiki.umbler.net/modelointerativo\" class=\"dp btn dropBut\">Modelo Interativo</a><a href=\"http://pef3100-wiki.umbler.net/notas\" class=\"dp btn dropBut\">Notas</a></div></div></nav><div id=\"title1\" class=\"jumbotron text-center\"><h3>Site Disciplina PEF3100</h3></div><div class=\"container-fluid bg-grey\"><div class=\"row\"><div id=\"primeiro-texto\" class=\"col-sm-8\"><h4>&emsp;Aquisição de conhecimentos básicos de Mecânica das Estruturas para dialogar com engenheiros de outras habilitações, apresentando-se os conceitos de esforços solicitantes, tensões, deformações e deslocamentos através de exemplos qualitativos. Desenvolvimento das habilidades de identificação de problemas no cotidiano da Engenharia Elétrica, de trabalho em equipe e de comunicação. Valorização da postura ética, das atitudes responsáveis e reconhecimento da importância da Resistência dos materiais na formação geral do engenheiro.</h4><br></div> <div id=\"panel1\" class=\"col-sm-3 meupanel\"><a href=\"#\"><div class=\"panel-heading\">Avaliação da Disciplina</div></a><div style=\"text-align: center;\" class=\"panel-body\">Se A = (P1 + P2 + T) / 3 for maior ou igual a 5 então, com uma frequência superior a 70%, está aprovado. P1 e P2 são as notas das provas e T é a nota do trabalho em grupo considerado somente se a média das provas for igual ou superior a 4. Se T não for considerado, A = (P1 + P2) / 2. Todas as notas variam de 0 a 10.</div></div></div></div><div id=\"about\" class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-12 text-center\"><h1> AVISOS</h1><h4 style=\"text-align: justify;\">&emsp;As notas da primeira prova estão disponíveis. A revisão da será no dia 1/5, das 13:30 às 14:30, na sala do Prof. Guilherme (sala dos professores número 39 - prédio da Eng. Civil).</h4><h4 style=\"text-align: justify;\">&emsp;As notas do professor Nakao provisórias da P1 da turma 2 estão divulgadas no site.A revisão será feita na aula do dia 25/4.</h4><br></div></div></div><div class=\"container-fluid bg-grey\"><div class=\"row\"><div id=\"segundo-texto\" class=\"col-sm-8\"><h4>&emsp;Esforços solicitantes: mecânica das estruturas, objetivos da Resistência dos Materiai, classificação das estruturas classificação das ações: esforços, variações de temperatura e recalques de apoio, estruturas isostáticas, determinação dos esforços reativos e solicitantes, linhas de estado, vigas retas, vigas poligonais, treliças planas isostáticas; cálculo de treliças pelo equilíbrio dos nós. Tensões e deformações: resultados experimentais, lei de Hooke, coeficientes de segurança; tensões admissíveis, tração e compressão simples, corte puro, características geométricas das figuras planas, tensões normais e de cisalhamento na flexão simples normal; equação diferencial da linha elástica, flambagem: casos fundamentais de Euler, torção: barras de seção circular e anular. .</h4><br></div> <div id=\"panel1\" class=\"col-sm-2 meupanel\"><a href=\"#\"><div class=\"panel-heading\">Programa da Disciplina</div></a><div class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus lectus ante. Nullam aliquam diam sit amet arcu bibendum, at sodales neque volutpat. Pellentesque placerat diam a ante condimentum ornare.</div></div></div></div><div id=\"direitos\"><strong>Disciplina PEF3100</strong></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "55");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sitepef$1.0.0/src/html/educacao.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
