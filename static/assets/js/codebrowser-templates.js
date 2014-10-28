this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["Authentication"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <div class='alert alert-danger' role='alert'><b>Oops!</b> "
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id='authentication-modal' class='modal' tabindex='-1' role='dialog' aria-labelledby='authentication-label' aria-hidden='true' data-backdrop='false' data-keyboard='false'>\n\n    <div class='modal-dialog'>\n\n        <div class='modal-content'>\n\n            <div class='modal-header'>\n                <h4 class='modal-title' id='authentication-label'>Sign In</h4>\n            </div>\n\n            <div class='modal-body'>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.message : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                <form class='form-horizontal' role='form'>\n\n                    <div class='form-group'>\n\n                        <label for='authentication-username' class='col-sm-2 control-label'>Username</label>\n\n                        <div class='col-sm-10'>\n                          <input type='text' class='form-control' id='authentication-username' data-id='username' placeholder='Username'>\n                        </div>\n\n                    </div>\n\n                    <div class='form-group'>\n\n                        <label for='authentication-password' class='col-sm-2 control-label'>Password</label>\n\n                        <div class='col-sm-10'>\n                          <input type='password' class='form-control' id='authentication-password' data-id='password' placeholder='Password'>\n                        </div>\n\n                    </div>\n\n                </form>\n\n            </div>\n\n            <div class='modal-footer'>\n                <button type='button' class='btn btn-primary' data-action='authenticate'>Sign In</button>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["CoursesContainer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "                <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students'>Students</a></li>\n                <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"studentId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.username : stack1), depth0))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.username : stack1), depth0))
    + " — ";
},"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n                    <tr>\n\n                        <td class='col-md-1 index'>"
    + escapeExpression(((helpers.index || (depth0 && depth0.index) || helperMissing).call(depth0, (data && data.index), {"name":"index","hash":{},"data":data})))
    + "</td>\n\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].studentId : depths[1]), {"name":"if","hash":{},"fn":this.program(6, data, depths),"inverse":this.program(8, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </tr>\n\n";
},"6":function(depth0,helpers,partials,data,depths) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "\n                            <td class='col-md-11 link'><a href='./#/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].instanceId : depths[2]), depth0))
    + "/students/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].studentId : depths[2]), depth0))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "/exercises'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></td>\n\n";
},"8":function(depth0,helpers,partials,data,depths) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "\n                            <td class='col-md-11 link'><a href='./#/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].instanceId : depths[2]), depth0))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "/exercises'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></td>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, blockHelperMissing=helpers.blockHelperMissing, buffer = "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Instances</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "</a></li>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.studentId : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            <li class='active'>Courses</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-9'>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.studentId : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " Courses ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.courses : depth0)) != null ? stack1.length : stack1), depth0))
    + ")\n        </h2>\n\n";
  stack1 = this.invokePartial(partials.search, '        ', 'search', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th class='index'>#</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n";
  stack1 = ((helper = (helper = helpers.courses || (depth0 != null ? depth0.courses : depth0)) != null ? helper : helperMissing),(options={"name":"courses","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.courses) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["EditorSettingsContainer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<footer>\n\n    <a href='#editor-settings' data-toggle='modal' data-target='#editor-settings' class='pull-right'><span class='glyphicon glyphicon-wrench icon-gray'></span></a>\n\n    <div id='editor-settings' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='editor-settings-label' aria-hidden='true' data-backdrop='false'>\n\n        <div class='modal-dialog'>\n\n            <div class='modal-content'>\n\n                <div class='modal-header'>\n                    <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>\n                    <h4 class='modal-title' id='editor-settings-label'>Settings</h4>\n                </div>\n\n                <div class='modal-body'>\n\n                    <form class='form-horizontal' role='form'>\n\n                        <div class='form-group'>\n\n                            <div class='col-sm-offset-2 col-sm-10'>\n                                <div class='checkbox'>\n                                    <label>\n                                        <input type='checkbox' data-id='ignore-empty-lines' checked> Ignore empty lines (improves diff results)\n                                    </label>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class='form-group'>\n\n                            <label for='editor-settings-theme' class='col-sm-2 control-label'>Theme</label>\n\n                            <div class='col-sm-10'>\n\n                                <select id='editor-settings-theme' class='form-control' data-id='theme'>\n                                    <option value='ace/theme/light'>Light</option>\n                                    <option value='ace/theme/dark'>Dark</option>\n                                </select>\n\n                            </div>\n\n                        </div>\n\n                        <div class='form-group'>\n\n                            <label for='editor-settings-font-size' class='col-sm-2 control-label'>Font size</label>\n\n                            <div class='col-sm-10'>\n\n                                <select id='editor-settings-font-size' class='form-control' data-id='font-size'>\n                                    <option value='11'>Small</option>\n                                    <option value='12' selected>Normal</option>\n                                    <option value='13'>Larger</option>\n                                    <option value='14'>Large</option>\n                                    <option value='15'>Extra Large</option>\n                                </select>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </div>\n\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>\n                    <button type='button' class='btn btn-primary' data-action='save' data-dismiss='modal'>Save</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</footer>\n";
  },"useData":true});

this["Handlebars"]["templates"]["EditorTopContainer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <span class='label label-default'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\n";
},"3":function(depth0,helpers,partials,data) {
  return "\n        <section class='split'>\n\n            <div class='previous'><span>Previous</span></div>\n            <div class='current'><span>Current</span></div>\n\n        </section>\n\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", lambda=this.lambda, buffer = "<header>\n\n    <section>\n\n        <h1>\n            "
    + escapeExpression(((helpers.filename || (depth0 && depth0.filename) || helperMissing).call(depth0, (depth0 != null ? depth0.name : depth0), {"name":"filename","hash":{},"data":data})))
    + "\n        </h1>\n\n        <span class='pull-right'>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.event : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            + "
    + escapeExpression(((helpers.duration || (depth0 && depth0.duration) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.snapshot : depth0)) != null ? stack1.timestamp : stack1), ((stack1 = ((stack1 = (depth0 != null ? depth0.previous : depth0)) != null ? stack1.snapshot : stack1)) != null ? stack1.timestamp : stack1), {"name":"duration","hash":{},"data":data})))
    + "\n\n            <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n               data-original-title='\n\n                    <time>"
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.previous : depth0)) != null ? stack1.snapshot : stack1)) != null ? stack1.timestamp : stack1), {"name":"date","hash":{},"data":data})))
    + " –</time>\n                    <time>"
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.snapshot : depth0)) != null ? stack1.timestamp : stack1), {"name":"date","hash":{},"data":data})))
    + "</time>\n\n               '\n\n               data-content='\n\n                <dl class=\"dl-horizontal pull-left\">\n\n                  <dt>Change</dt>\n                  <dd>"
    + escapeExpression(((helper = (helper = helpers.percentageOfChange || (depth0 != null ? depth0.percentageOfChange : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"percentageOfChange","hash":{},"data":data}) : helper)))
    + " %</dd>\n\n                  <dt>Insert</dt>\n                  <dd>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.difference : depth0)) != null ? stack1.insert : stack1), depth0))
    + " "
    + escapeExpression(((helpers.pluralise || (depth0 && depth0.pluralise) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.difference : depth0)) != null ? stack1.insert : stack1), "line", {"name":"pluralise","hash":{},"data":data})))
    + "</dd>\n\n                  <dt>Replace</dt>\n                  <dd>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.difference : depth0)) != null ? stack1.replace : stack1), depth0))
    + " "
    + escapeExpression(((helpers.pluralise || (depth0 && depth0.pluralise) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.difference : depth0)) != null ? stack1.replace : stack1), "line", {"name":"pluralise","hash":{},"data":data})))
    + "</dd>\n\n                  <dt>Delete</dt>\n                  <dd>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.difference : depth0)) != null ? stack1['delete'] : stack1), depth0))
    + " "
    + escapeExpression(((helpers.pluralise || (depth0 && depth0.pluralise) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.difference : depth0)) != null ? stack1['delete'] : stack1), "line", {"name":"pluralise","hash":{},"data":data})))
    + "</dd>\n\n                </dl>\n\n            '><span class='glyphicon glyphicon-info-sign icon-gray'></span></a>\n\n        </span>\n\n    </section>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.split : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</header>\n";
},"useData":true});

this["Handlebars"]["templates"]["Error"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<p class='alert "
    + escapeExpression(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"class","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});

this["Handlebars"]["templates"]["ExercisesContainer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "                <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students'>Students</a></li>\n                <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"studentId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.username : stack1), depth0))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "students/"
    + escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"studentId","hash":{},"data":data}) : helper)))
    + "/";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.username : stack1), depth0))
    + " — ";
},"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n                    <tr>\n\n                        <td class='col-md-1 index'>"
    + escapeExpression(((helpers.index || (depth0 && depth0.index) || helperMissing).call(depth0, (data && data.index), {"name":"index","hash":{},"data":data})))
    + "</td>\n\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].studentId : depths[1]), {"name":"if","hash":{},"fn":this.program(8, data, depths),"inverse":this.program(10, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </tr>\n\n";
},"8":function(depth0,helpers,partials,data,depths) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "\n                            <td class='col-md-11 link'><a href='./#/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].instanceId : depths[2]), depth0))
    + "/students/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].studentId : depths[2]), depth0))
    + "/courses/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].courseId : depths[2]), depth0))
    + "/exercises/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "/snapshots'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></td>\n\n";
},"10":function(depth0,helpers,partials,data,depths) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "\n                            <td class='col-md-11 link'><a href='./#/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].instanceId : depths[2]), depth0))
    + "/courses/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].courseId : depths[2]), depth0))
    + "/exercises/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "/students'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></td>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, blockHelperMissing=helpers.blockHelperMissing, buffer = "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Instances</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "</a></li>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.studentId : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.studentId : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "courses'>Courses</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.studentId : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "courses/"
    + escapeExpression(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></li>\n            <li class='active'>Exercises</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-9'>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.studentId : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.name : stack1), depth0))
    + " — Exercises ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exercises : depth0)) != null ? stack1.length : stack1), depth0))
    + ")\n        </h2>\n\n";
  stack1 = this.invokePartial(partials.search, '        ', 'search', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th class='index'>#</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n";
  stack1 = ((helper = (helper = helpers.exercises || (depth0 != null ? depth0.exercises : depth0)) != null ? helper : helperMissing),(options={"name":"exercises","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.exercises) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["InstanceContainer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Instances</a></li>\n            <li class='active'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.instance : depth0)) != null ? stack1.name : stack1), depth0))
    + "</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2>\n            Instance — "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.instance : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n        </h2>\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th>Navigate to</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                <tr>\n                    <td class='link'><a href='./#/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.instance : depth0)) != null ? stack1.id : stack1), depth0))
    + "/students'>Students</a></td>\n                </tr>\n\n                <tr>\n                    <td class='link'><a href='./#/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.instance : depth0)) != null ? stack1.id : stack1), depth0))
    + "/courses'>Courses</a></td>\n                </tr>\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
},"useData":true});

this["Handlebars"]["templates"]["Loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='spinner'>\n    <div class='double-bounce1'></div>\n    <div class='double-bounce2'></div>\n</div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["NavigationBarContainer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses'>Courses</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseId","hash":{},"data":data}) : helper)))
    + "/exercises'>Exercises</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseId","hash":{},"data":data}) : helper)))
    + "/exercises/"
    + escapeExpression(((helper = (helper = helpers.exerciseId || (depth0 != null ? depth0.exerciseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"exerciseId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exercise : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseId","hash":{},"data":data}) : helper)))
    + "/exercises/"
    + escapeExpression(((helper = (helper = helpers.exerciseId || (depth0 != null ? depth0.exerciseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"exerciseId","hash":{},"data":data}) : helper)))
    + "/students'>Students</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseId","hash":{},"data":data}) : helper)))
    + "/exercises/"
    + escapeExpression(((helper = (helper = helpers.exerciseId || (depth0 != null ? depth0.exerciseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"exerciseId","hash":{},"data":data}) : helper)))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"studentId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.username : stack1), depth0))
    + "</a></li>\n\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students'>Students</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"studentId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.student : depth0)) != null ? stack1.username : stack1), depth0))
    + "</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"studentId","hash":{},"data":data}) : helper)))
    + "/courses'>Courses</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"studentId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"studentId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseId","hash":{},"data":data}) : helper)))
    + "/exercises'>Exercises</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"studentId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(((helper = (helper = helpers.courseId || (depth0 != null ? depth0.courseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseId","hash":{},"data":data}) : helper)))
    + "/exercises/"
    + escapeExpression(((helper = (helper = helpers.exerciseId || (depth0 != null ? depth0.exerciseId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"exerciseId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exercise : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<section>\n\n    <ol class='breadcrumb'>\n\n        <li><a href='./'>Instances</a></li>\n        <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "</a></li>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.courseRoute : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        <li class='active'>Snapshots</li>\n\n    </ol>\n\n</section>\n";
},"useData":true});

this["Handlebars"]["templates"]["RootContainer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "\n                    <tr>\n\n                        <td class='col-md-1 index'>"
    + escapeExpression(((helpers.index || (depth0 && depth0.index) || helperMissing).call(depth0, (data && data.index), {"name":"index","hash":{},"data":data})))
    + "</td>\n                        <td class='col-md-11 link'><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "</a></td>\n\n                    </tr>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li class='active'>Instances</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-9'>\n            Instances ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.instances : depth0)) != null ? stack1.length : stack1), depth0))
    + ")\n        </h2>\n\n";
  stack1 = this.invokePartial(partials.search, '        ', 'search', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th class='index'>#</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n";
  stack1 = ((helper = (helper = helpers.instances || (depth0 != null ? depth0.instances : depth0)) != null ? helper : helperMissing),(options={"name":"instances","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.instances) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["SearchContainer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class='col-md-3'>\n\n    <div class='input-group'>\n\n        <input type='text' class='form-control' placeholder='Search' data-id='query-string' value='"
    + escapeExpression(((helper = (helper = helpers.query || (depth0 != null ? depth0.query : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"query","hash":{},"data":data}) : helper)))
    + "' />\n\n        <span class='input-group-btn'>\n            <button class='btn btn-default' type='button' data-action='search' title='Search'>\n                <span class='glyphicon glyphicon-search'></span>\n            </button>\n        </span>\n\n    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["SnapshotActionsContainer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "\n            <button id='rewind' type='button' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-backward icon-gray'></span></button>\n            <button id='play' type='button' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-play icon-gray'></span></button>\n\n            <select id='speed' class='form-control input-sm'>\n                <option selected>1x</option>\n                <option>2x</option>\n                <option>4x</option>\n                <option>8x</option>\n                <option>16x</option>\n                <option>32x</option>\n            </select>\n\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class='row'>\n\n    <div class='col-md-6'>\n\n        <button id='toggleBrowser' type='button' class='btn btn-default btn-sm' data-toggle='button'><span class='icon icon-folder icon-gray'></span></button>\n        <button id='split' type='button' class='btn btn-default btn-sm' data-toggle='button'><span class='icon icon-split-editor icon-gray'></span></button>\n        <button id='diff' type='button' class='btn btn-default btn-sm' data-toggle='button'><span class='icon icon-diff icon-gray'></span></button>\n        <button id='level' type='button' class='btn btn-default btn-sm' data-toggle='button'><span class='icon icon-key-level icon-gray'></span></button>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.playback : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    </div>\n\n";
  stack1 = this.invokePartial(partials.snapshotNavigation, '    ', 'snapshotNavigation', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["SnapshotFilesContainer"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (data && data.key), {"name":"if","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "\n                <li class='folder'><span class='glyphicon glyphicon-folder-open icon-gray'></span> "
    + escapeExpression(lambda((data && data.key), depth0))
    + "</li>\n\n";
},"4":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depths[2] != null ? depths[2].courseRoute : depths[2]), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.program(7, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"5":function(depth0,helpers,partials,data,depths) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "\n                    <li data-id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'><a href='./#/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].instanceId : depths[3]), depth0))
    + "/courses/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].courseId : depths[3]), depth0))
    + "/exercises/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].exerciseId : depths[3]), depth0))
    + "/students/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].studentId : depths[3]), depth0))
    + "/snapshots/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].id : depths[3]), depth0))
    + "/files/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "?level="
    + escapeExpression(lambda((depths[3] != null ? depths[3].level : depths[3]), depth0))
    + "'><i class='icon-file icon-gray'></i> "
    + escapeExpression(((helpers.filename || (depth0 && depth0.filename) || helperMissing).call(depth0, (depth0 != null ? depth0.name : depth0), {"name":"filename","hash":{},"data":data})))
    + "</a></li>\n\n";
},"7":function(depth0,helpers,partials,data,depths) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "\n                    <li data-id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'><a href='./#/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].instanceId : depths[3]), depth0))
    + "/students/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].studentId : depths[3]), depth0))
    + "/courses/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].courseId : depths[3]), depth0))
    + "/exercises/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].exerciseId : depths[3]), depth0))
    + "/snapshots/"
    + escapeExpression(lambda((depths[3] != null ? depths[3].id : depths[3]), depth0))
    + "/files/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "?level="
    + escapeExpression(lambda((depths[3] != null ? depths[3].level : depths[3]), depth0))
    + "'><i class='icon-file icon-gray'></i> "
    + escapeExpression(((helpers.filename || (depth0 && depth0.filename) || helperMissing).call(depth0, (depth0 != null ? depth0.name : depth0), {"name":"filename","hash":{},"data":data})))
    + "</a></li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<header>\n\n    <h1><span class='glyphicon glyphicon-folder-close icon-gray'></span> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exercise : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n\n</header>\n\n<ul class='list-unstyled'>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.files : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</ul>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["SnapshotNavigationContainer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div id='snapshot-navigation' class='col-md-5 col-md-offset-1'>\n\n    <div class='pull-right'>\n\n        <div class='current-index'>"
    + escapeExpression(((helper = (helper = helpers.current || (depth0 != null ? depth0.current : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"current","hash":{},"data":data}) : helper)))
    + " / "
    + escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + "</div>\n\n        <div class='btn-group btn-group-sm'>\n            <button type='button' id='first' class='btn btn-default'>First</button>\n            <button type='button' id='previous' class='btn btn-default'>Previous</button>\n            <button type='button' id='next' class='btn btn-default'>Next</button>\n            <button type='button' id='last' class='btn btn-default'>Last</button>\n        </div>\n\n    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["SnapshotTagsContainer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "\n    <ul class='list-unstyled'>\n\n";
  stack1 = ((helper = (helper = helpers.tags || (depth0 != null ? depth0.tags : depth0)) != null ? helper : helperMissing),(options={"name":"tags","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.tags) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    </ul>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n            <li>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " <button type='button' data-action='delete' data-id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' class='delete'>×</button></li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<header>\n\n    <h1><span class='glyphicon glyphicon-tags icon-gray'></span> Tags</h1>\n\n</header>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<div class='input-group'>\n\n    <form>\n        <input type='text' id='appendedInputButton' class='form-control' data-id='tag' placeholder='New tag…'>\n\n        <span class='input-group-btn'>\n            <button class='btn btn-default' type='submit' data-action='create'>+</button>\n        </span>\n    </form>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["SnapshotsTimelineBottomContainer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class='row'>\n\n    <div class='col-md-2'>\n\n        <time>"
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.first : depth0)) != null ? stack1.timestamp : stack1), false, {"name":"date","hash":{},"data":data})))
    + "</time>\n\n    </div>\n\n    <div class='center text-center'>. . .</div>\n\n    <div class='col-md-3 pull-right'>\n\n        <time class='pull-right'>"
    + escapeExpression(((helpers.date || (depth0 && depth0.date) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.last : depth0)) != null ? stack1.timestamp : stack1), false, {"name":"date","hash":{},"data":data})))
    + " (+ "
    + escapeExpression(((helpers.duration || (depth0 && depth0.duration) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.last : depth0)) != null ? stack1.timestamp : stack1), ((stack1 = (depth0 != null ? depth0.first : depth0)) != null ? stack1.timestamp : stack1), {"name":"duration","hash":{},"data":data})))
    + ")</time>\n\n    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["StudentsContainer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "                <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses'>Courses</a></li>\n                <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></li>\n                <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "/exercises'>Exercises</a></li>\n                <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "/courses/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.id : stack1), depth0))
    + "/exercises/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exercise : depth0)) != null ? stack1.id : stack1), depth0))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exercise : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.course : depth0)) != null ? stack1.name : stack1), depth0))
    + " — "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exercise : depth0)) != null ? stack1.name : stack1), depth0))
    + " — ";
},"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n                    <tr>\n\n                        <td class='col-md-1 index'>"
    + escapeExpression(((helpers.index || (depth0 && depth0.index) || helperMissing).call(depth0, (data && data.index), {"name":"index","hash":{},"data":data})))
    + "</td>\n\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].course : depths[1]), {"name":"if","hash":{},"fn":this.program(6, data, depths),"inverse":this.program(8, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </tr>\n\n";
},"6":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "\n                            <td class='col-md-2 link'><a href='./#/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].instanceId : depths[2]), depth0))
    + "/courses/"
    + escapeExpression(lambda(((stack1 = (depths[2] != null ? depths[2].course : depths[2])) != null ? stack1.id : stack1), depth0))
    + "/exercises/"
    + escapeExpression(lambda(((stack1 = (depths[2] != null ? depths[2].exercise : depths[2])) != null ? stack1.id : stack1), depth0))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "/snapshots'>"
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "</a></td>\n                            <td class='col-md-9'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n\n";
},"8":function(depth0,helpers,partials,data,depths) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "\n                            <td class='col-md-2 link'><a href='./#/"
    + escapeExpression(lambda((depths[2] != null ? depths[2].instanceId : depths[2]), depth0))
    + "/students/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "/courses'>"
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "</a></td>\n                            <td class='col-md-9'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, blockHelperMissing=helpers.blockHelperMissing, buffer = "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Instances</a></li>\n            <li><a href='./#/"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.instanceId || (depth0 != null ? depth0.instanceId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"instanceId","hash":{},"data":data}) : helper)))
    + "</a></li>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.course : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            <li class='active'>Students</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-9'>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.course : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " Students ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.students : depth0)) != null ? stack1.length : stack1), depth0))
    + ")\n        </h2>\n\n";
  stack1 = this.invokePartial(partials.search, '        ', 'search', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n\n                    <th class='index'>#</th>\n                    <th>Username</th>\n                    <th>Name</th>\n\n                </tr>\n            </thead>\n\n            <tbody>\n\n";
  stack1 = ((helper = (helper = helpers.students || (depth0 != null ? depth0.students : depth0)) != null ? helper : helperMissing),(options={"name":"students","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.students) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
},"usePartial":true,"useData":true,"useDepths":true});