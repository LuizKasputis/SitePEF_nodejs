// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sitepef$1.0.0/notas.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><title>Página de PEF</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\"><link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\"><link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\" type=\"text/css\"><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script><script src=\"buscador-notas.js\"></script><link rel=\"stylesheet\" href=\"estilo.css\"><link rel=\"stylesheet\" href=\"jq.css\"><link rel=\"stylesheet\" href=\"notas.css\"><script src=\"modeloScript.js\"></script><style>\n\n  </style></head><body id=\"myPage\" data-target=\".navbar\" data-offset=\"60\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-default navbar-fixed-top\"><div id=\"menu\" class=\"container\"><div id=\"links\"><a class=\"dp btn dropBut\" href=\"{% url 'home' %}\">Home</a><div class=\"dropagem\"><a id=\"resumosBut\" class=\"dp btn dropBut\">Educação</a><div id=\"listaResumos\" class=\"dp droplist\"><a href=\"{% url 'lorem1' %}\">Conceitos</a><a href=\"{% url 'lorem1' %}\">Estruturas 2D</a><a href=\"{% url 'lorem1' %}\">Estruturas 3D </a></div></div><div class=\"dropagem\"><a id=\"educacaoBut\" class=\" btn dropBut\" href=\"{% url 'pratique' %}\">Pratique</a></div><a href=\"#\" class=\"dp btn dropBut\">Modelo Interativo</a></div></div></nav><div id=\"title1\" class=\"jumbotron text-center\"></div><div><div class=\"form-group pull-right\"><input type=\"text\" class=\"search form-control\" id=\"digitacao\" placeholder=\"Digite seu número USP\"></div><span class=\"counter pull-right\"></span><table class=\"table table-hover table-bordered results\" id=\"tabela-cor\"><thead><tr><th class=\"col-md-5 col-xs-5\">Número USP</th><th class=\"col-md-4 col-xs-4\">Nome</th><th class=\"col-md-3 col-xs-3\">Curso</th></tr><tr class=\"warning no-result\"><td colspan=\"4\"><i class=\"fa fa-warning\"></i> No result</td></tr></thead><tbody id=\"busca\">");

  var for__45 = 0;

  marko_forEach(data.alunos, function(aluno) {
    var keyscope__46 = "[" + ((for__45++) + "]");

    out.w("<tr><td class=\"numeroUSP\">" +
      marko_escapeXml(aluno.nUSP) +
      "</td><td>" +
      marko_escapeXml(aluno.name) +
      "</td><td>" +
      marko_escapeXml(aluno.curso) +
      "</td></tr>");
  });

  out.w("</tbody></table><footer id=\"direitos\"><strong>Todos os direitos Reservados Grupo de PEF</strong></footer></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "53");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sitepef$1.0.0/notas.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };