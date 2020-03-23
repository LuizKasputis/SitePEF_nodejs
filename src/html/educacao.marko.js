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

  out.w("<!DOCTYPE html><html lang=\"en\"><head><title>Página de PEF</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\"><link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\"><link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\" type=\"text/css\"><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script><link rel=\"stylesheet\" href=\"./src/css/estilo.css\"><script src=\"homeScript.js\"></script> <style>\n\n  </style></head><body id=\"myPage\" data-target=\".navbar\" data-offset=\"60\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-default navbar-fixed-top\"><div id=\"menu\" class=\"container\"><div id=\"links\"><a class=\"dp btn dropBut\">Home</a><div class=\"dropagem\"><a id=\"resumosBut\" class=\"dp btn dropBut\">Educação</a><div id=\"listaResumos\" class=\"dp droplist\"><a href=\"\">Conceitos</a><a href=\"\">Estruturas 2D</a><a href=\"\">Estruturas 3D </a></div></div><div class=\"dropagem\"><a id=\"educacaoBut\" class=\" btn dropBut\" href=\"{% url 'pratique' %}\">Pratique</a></div><a href=\"http://pef3100-com.umbler.net/\" class=\"dp btn dropBut\">Modelo Interativo</a><a href=\"http://pef3100-com.umbler.net/notas\" class=\"dp btn dropBut\">Notas</a></div></div></nav><div id=\"title1\" class=\"jumbotron text-center\"><h3>Algum topico</h3> <p>descricao do topico</p> </div><div id=\"about\" class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-12 text-center\"><h2>Algum titulo</h2><br><h4 style=\"text-align: justify;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br></div></div></div><div class=\"container-fluid bg-grey\"><div class=\"row\"><div class=\"col-sm-8\"><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus lectus ante. Nullam aliquam diam sit amet arcu bibendum, at sodales neque volutpat. Pellentesque placerat diam a ante condimentum ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus lectus ante. Nullam aliquam diam sit amet arcu bibendum, at sodales neque volutpat. Pellentesque placerat diam a ante condimentum ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus lectus ante. Nullam aliquam diam sit amet arcu bibendum, at sodales neque volutpat. Pellentesque placerat diam a ante condimentum ornare.</h4><br></div> <div id=\"panel1\" class=\"col-sm-4 meupanel\"><a href=\"#\"><div class=\"panel-heading\">Se quiser colocar alguma nota</div></a><div class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus lectus ante. Nullam aliquam diam sit amet arcu bibendum, at sodales neque volutpat. Pellentesque placerat diam a ante condimentum ornare.</div></div></div></div><div id=\"about\" class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-12 text-center\"><h4 style=\"text-align: justify;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br></div></div></div><div class=\"container-fluid bg-grey\"><div class=\"row\"><div class=\"col-sm-8\"><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus lectus ante. Nullam aliquam diam sit amet arcu bibendum, at sodales neque volutpat. Pellentesque placerat diam a ante condimentum ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus lectus ante. Nullam aliquam diam sit amet arcu bibendum, at sodales neque volutpat. Pellentesque placerat diam a ante condimentum ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus lectus ante. Nullam aliquam diam sit amet arcu bibendum, at sodales neque volutpat. Pellentesque placerat diam a ante condimentum ornare.</h4><br></div> <div id=\"panel1\" class=\"col-sm-4 meupanel\"><a href=\"#\"><div class=\"panel-heading\">Se quiser colocar alguma nota</div></a><div class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus lectus ante. Nullam aliquam diam sit amet arcu bibendum, at sodales neque volutpat. Pellentesque placerat diam a ante condimentum ornare.</div></div></div></div><div id=\"direitos\"><strong>Disciplina PEF3100</strong></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "63");

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
