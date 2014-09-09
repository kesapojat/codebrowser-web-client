this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["CoursesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students'>Students</a></li>\n                <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n                    <tr>\n\n                        <td class='index'>"
    + escapeExpression((helper = helpers.index || (depth0 && depth0.index),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index", (data == null || data === false ? data : data.index), options)))
    + "</td>\n\n                        ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.programWithDepth(8, program8, data, depth1),fn:self.programWithDepth(6, program6, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    </tr>\n\n                ";
  return buffer;
  }
function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                            <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = (depth2 && depth2.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/"
    + escapeExpression(((stack1 = (depth2 && depth2.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises'>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                        ";
  return buffer;
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                            <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = (depth2 && depth2.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises'>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                        ";
  return buffer;
  }

  buffer += "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Home</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            <li class='active'>Courses</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-8'>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Courses ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.courses)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n        </h2>\n\n        ";
  stack1 = self.invokePartial(partials.search, 'search', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data}
  if (helper = helpers.courses) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.courses); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.courses) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["EditorSettingsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<footer>\n\n    <a href='#editor-settings' data-toggle='modal' data-target='#editor-settings' class='pull-right'><span class='glyphicon glyphicon-wrench icon-gray'></span></a>\n\n    <div id='editor-settings' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='editor-settings-label' aria-hidden='true' data-backdrop='false'>\n\n        <div class='modal-dialog'>\n\n            <div class='modal-content'>\n\n                <div class='modal-header'>\n                    <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>\n                    <h4 class='modal-title' id='editor-settings-label'>Settings</h4>\n                </div>\n\n                <div class='modal-body'>\n\n                    <form class='form-horizontal' role='form'>\n\n                        <div class='form-group'>\n\n                            <div class='col-sm-offset-2 col-sm-10'>\n                                <div class='checkbox'>\n                                    <label>\n                                        <input type='checkbox' data-id='ignore-empty-lines' checked> Ignore empty lines (improves diff results)\n                                    </label>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class='form-group'>\n\n                            <label for='editor-settings-theme' class='col-sm-2 control-label'>Theme</label>\n\n                            <div class='col-sm-10'>\n\n                                <select id='editor-settings-theme' class='form-control' data-id='theme'>\n                                    <option value='ace/theme/light'>Light</option>\n                                    <option value='ace/theme/dark'>Dark</option>\n                                </select>\n\n                            </div>\n\n                        </div>\n\n                        <div class='form-group'>\n\n                            <label for='editor-settings-font-size' class='col-sm-2 control-label'>Font size</label>\n\n                            <div class='col-sm-10'>\n\n                                <select id='editor-settings-font-size' class='form-control' data-id='font-size'>\n                                    <option value='11'>Small</option>\n                                    <option value='12' selected>Normal</option>\n                                    <option value='13'>Larger</option>\n                                    <option value='14'>Large</option>\n                                    <option value='15'>Extra Large</option>\n                                </select>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </div>\n\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>\n                    <button type='button' class='btn btn-primary' data-action='save' data-dismiss='modal'>Save</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</footer>\n";
  });

this["Handlebars"]["templates"]["EditorTopContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "\n\n        <section class='split'>\n\n            <div class='previous'><span>Previous</span></div>\n            <div class='current'><span>Current</span></div>\n\n        </section>\n\n    ";
  }

  buffer += "<header>\n\n    <section>\n\n        <h1>"
    + escapeExpression((helper = helpers.filename || (depth0 && depth0.filename),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "filename", (depth0 && depth0.name), options)))
    + "</h1>\n\n        <span class='pull-right'>\n\n            + "
    + escapeExpression((helper = helpers.duration || (depth0 && depth0.duration),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options) : helperMissing.call(depth0, "duration", ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options)))
    + "\n\n            <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n               data-original-title='\n\n                    <time>"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options) : helperMissing.call(depth0, "date", ((stack1 = ((stack1 = (depth0 && depth0.previous)),stack1 == null || stack1 === false ? stack1 : stack1.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options)))
    + " –</time>\n                    <time>"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.snapshot)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options)))
    + "</time>\n\n               '\n\n               data-content='\n\n                <dl class=\"dl-horizontal pull-left\">\n\n                  <dt>Change</dt>\n                  <dd>";
  if (helper = helpers.percentageOfChange) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percentageOfChange); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " %</dd>\n\n                  <dt>Insert</dt>\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.insert)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.insert), "line", options)))
    + "</dd>\n\n                  <dt>Replace</dt>\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.replace)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1.replace), "line", options)))
    + "</dd>\n\n                  <dt>Delete</dt>\n                  <dd>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1['delete'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression((helper = helpers.pluralize || (depth0 && depth0.pluralize),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options) : helperMissing.call(depth0, "pluralize", ((stack1 = (depth0 && depth0.difference)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), "line", options)))
    + "</dd>\n\n                </dl>\n\n            '><span class='glyphicon glyphicon-info-sign icon-gray'></span></a>\n\n        </span>\n\n    </section>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.split), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</header>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["Error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class='alert ";
  if (helper = helpers['class']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['class']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["ExercisesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students'>Students</a></li>\n                <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n                    <tr>\n\n                        <td class='index'>"
    + escapeExpression((helper = helpers.index || (depth0 && depth0.index),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index", (data == null || data === false ? data : data.index), options)))
    + "</td>\n\n                        ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.programWithDepth(10, program10, data, depth1),fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    </tr>\n\n                ";
  return buffer;
  }
function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                            <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = (depth2 && depth2.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/"
    + escapeExpression(((stack1 = (depth2 && depth2.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = (depth2 && depth2.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/snapshots'>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                        ";
  return buffer;
  }

function program10(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                            <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = (depth2 && depth2.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = (depth2 && depth2.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students'>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                        ";
  return buffer;
  }

  buffer += "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Home</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "courses'>Courses</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li class='active'>Exercises</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-8'>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — Exercises ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercises)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n        </h2>\n\n        ";
  stack1 = self.invokePartial(partials.search, 'search', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data}
  if (helper = helpers.exercises) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.exercises); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.exercises) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["InstanceContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Home</a></li>\n            <li class='active'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instance)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2>\n            Instance — "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instance)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </h2>\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th>Navigate</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                <tr>\n                    <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instance)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students'>Students</a></td>\n                </tr>\n\n                <tr>\n                    <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instance)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses'>Courses</a></td>\n                </tr>\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["Loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='spinner'>\n    <div class='double-bounce1'></div>\n    <div class='double-bounce2'></div>\n</div>\n";
  });

this["Handlebars"]["templates"]["NavigationBarContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses'>Courses</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises'>Exercises</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises/";
  if (helper = helpers.exerciseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.exerciseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises/";
  if (helper = helpers.exerciseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.exerciseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students'>Students</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises/";
  if (helper = helpers.exerciseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.exerciseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students'>Students</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses'>Courses</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises'>Exercises</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises/";
  if (helper = helpers.exerciseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.exerciseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n\n        ";
  return buffer;
  }

  buffer += "<section>\n\n    <ol class='breadcrumb'>\n\n        <li><a href='./'>Home</a></li>\n        <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.courseRoute), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Snapshots</li>\n\n    </ol>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["RootContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n                    <tr>\n\n                        <td class='index'>"
    + escapeExpression((helper = helpers.index || (depth0 && depth0.index),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index", (data == null || data === false ? data : data.index), options)))
    + "</td>\n\n                        <td class='link'><a href='./#/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                    </tr>\n\n                ";
  return buffer;
  }

  buffer += "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li class='active'>Home</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-8'>\n            Instances ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instances)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n        </h2>\n\n        ";
  stack1 = self.invokePartial(partials.search, 'search', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.instances) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.instances); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.instances) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SearchContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='col-md-4'>\n\n    <div class='input-group'>\n\n        <input type='text' class='form-control' placeholder='Search' data-id='query-string' value='";
  if (helper = helpers.query) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.query); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' />\n\n        <span class='input-group-btn'>\n            <button class='btn btn-default' type='button' data-action='search' title='Search'>\n                <span class='glyphicon glyphicon-search'></span>\n            </button>\n        </span>\n\n    </div>\n\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotFilesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n\n            ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.key), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n                <li class='folder'><span class='glyphicon glyphicon-folder-open icon-gray'></span> "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n\n            ";
  return buffer;
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n\n                ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.courseRoute), {hash:{},inverse:self.programWithDepth(7, program7, data, depth2),fn:self.programWithDepth(5, program5, data, depth2),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  return buffer;
  }
function program5(depth0,data,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n                    <li data-id='";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'><a href='./#/"
    + escapeExpression(((stack1 = (depth3 && depth3.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = (depth3 && depth3.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = (depth3 && depth3.exerciseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/"
    + escapeExpression(((stack1 = (depth3 && depth3.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = (depth3 && depth3.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/files/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?level="
    + escapeExpression(((stack1 = (depth3 && depth3.level)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'><i class='icon-file icon-gray'></i> "
    + escapeExpression((helper = helpers.filename || (depth0 && depth0.filename),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "filename", (depth0 && depth0.name), options)))
    + "</a></li>\n\n                ";
  return buffer;
  }

function program7(depth0,data,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n                    <li data-id='";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'><a href='./#/"
    + escapeExpression(((stack1 = (depth3 && depth3.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/"
    + escapeExpression(((stack1 = (depth3 && depth3.studentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = (depth3 && depth3.courseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = (depth3 && depth3.exerciseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/snapshots/"
    + escapeExpression(((stack1 = (depth3 && depth3.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/files/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?level="
    + escapeExpression(((stack1 = (depth3 && depth3.level)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'><i class='icon-file icon-gray'></i> "
    + escapeExpression((helper = helpers.filename || (depth0 && depth0.filename),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name), options) : helperMissing.call(depth0, "filename", (depth0 && depth0.name), options)))
    + "</a></li>\n\n                ";
  return buffer;
  }

  buffer += "<header>\n\n    <h1><span class='glyphicon glyphicon-folder-close icon-gray'></span> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n\n</header>\n\n<ul class='list-unstyled'>\n\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.files), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotNavigationContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\n\n    <div class='col-md-6'>\n\n        <button id='toggleBrowser' type='button' class='btn btn-default' data-toggle='button'><span class='icon icon-folder icon-gray'></span></button>\n        <button id='split' type='button' class='btn btn-default' data-toggle='button'><span class='icon icon-split-editor icon-gray'></span></button>\n        <button id='diff' type='button' class='btn btn-default' data-toggle='button'><span class='icon icon-diff icon-gray'></span></button>\n        <button id='level' type='button' class='btn btn-default' data-toggle='button'><span class='icon icon-key-level icon-gray'></span></button>\n        <button id='play' type='button' class='btn btn-default' data-toggle='button'><span class='glyphicon glyphicon-play icon-gray'></span></button>\n\n    </div>\n\n    <div class='col-md-5 col-md-offset-1'>\n\n        <span class='current'>";
  if (helper = helpers.current) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (helper = helpers.total) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n\n        <div class='btn-group pull-right'>\n            <button type='button' id='first' class='btn btn-default'>First</button>\n            <button type='button' id='previous' class='btn btn-default'>Previous</button>\n            <button type='button' id='next' class='btn btn-default'>Next</button>\n            <button type='button' id='last' class='btn btn-default'>Last</button>\n        </div>\n\n    </div>\n\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotTagsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n    <ul>\n\n        ";
  options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}
  if (helper = helpers.tags) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.tags); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.tags) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </ul>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n            <li>";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <button type='button' data-action='delete' data-id='";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='delete'>×</button></li>\n\n        ";
  return buffer;
  }

  buffer += "<header>\n\n    <h1><i class='icon-tags icon-gray'></i> Tags</h1>\n\n</header>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tags), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class='input-append'>\n\n    <form>\n\n        <input type='text' data-id='tag' id='appendedInputButton' placeholder='New tag…'>\n        <button type='submit' data-action='create' class='btn'>+</button>\n\n    </form>\n\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotsTimelineBottomContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\n\n    <div class='col-md-2'>\n\n        <time>"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), false, options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), false, options)))
    + "</time>\n\n    </div>\n\n    <div class='center text-center'>. . .</div>\n\n    <div class='col-md-3 pull-right'>\n\n        <time class='pull-right'>"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), false, options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), false, options)))
    + " (+ "
    + escapeExpression((helper = helpers.duration || (depth0 && depth0.duration),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options) : helperMissing.call(depth0, "duration", ((stack1 = (depth0 && depth0.last)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options)))
    + ")</time>\n\n    </div>\n\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["StudentsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses'>Courses</a></li>\n                <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n                <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises'>Exercises</a></li>\n                <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — ";
  return buffer;
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n                    <tr>\n\n                        <td class='index'>"
    + escapeExpression((helper = helpers.index || (depth0 && depth0.index),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index", (data == null || data === false ? data : data.index), options)))
    + "</td>\n\n                        ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.course), {hash:{},inverse:self.programWithDepth(8, program8, data, depth1),fn:self.programWithDepth(6, program6, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    </tr>\n\n                ";
  return buffer;
  }
function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                            <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = (depth2 && depth2.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth2 && depth2.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/snapshots'>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                        ";
  return buffer;
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                            <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = (depth2 && depth2.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses'>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                        ";
  return buffer;
  }

  buffer += "<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Home</a></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            <li class='active'>Students</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-8'>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Students ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n        </h2>\n\n        ";
  stack1 = self.invokePartial(partials.search, 'search', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n\n                    <th>#</th>\n                    <th>Name</th>\n\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data}
  if (helper = helpers.students) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.students); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.students) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n";
  return buffer;
  });