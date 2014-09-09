this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["CoursesContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n        ";
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
  buffer += "\n\n                <tr>\n\n                    <td class='index'>"
    + escapeExpression((helper = helpers.index || (depth0 && depth0.index),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index", (data == null || data === false ? data : data.index), options)))
    + "</td>\n\n                    ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.programWithDepth(8, program8, data, depth1),fn:self.programWithDepth(6, program6, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                </tr>\n\n            ";
  return buffer;
  }
function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                        <td class='link'><a href='./#/"
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
    + "</a></td>\n\n                    ";
  return buffer;
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                        <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = (depth2 && depth2.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises'>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                    ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n        <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Courses</li>\n\n    </ul>\n\n    <h2>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Courses ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.courses)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n\n        ";
  stack1 = self.invokePartial(partials.search, 'search', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data}
  if (helper = helpers.courses) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.courses); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.courses) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["EditorSettingsContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<footer>\n\n    <a href='#editor-settings' data-toggle='modal' class='pull-right'><i class='icon-wrench icon-gray'></i></a>\n\n    <div id='editor-settings' class='modal hide fade' tabindex='-1' data-backdrop='false'>\n\n        <div class='modal-header'>\n\n            <header>\n\n                <button type='button' class='close' data-dismiss='modal'>×</button>\n\n                <h1>Settings</h1>\n\n            </header>\n\n        </div>\n\n        <div class='modal-body'>\n\n            <form class='form-horizontal'>\n\n                <fieldset>\n\n                    <div class='control-group'>\n\n                        <label class='checkbox'>\n                            <input type='checkbox' data-id='ignore-empty-lines' checked> Ignore empty lines (improves diff results)\n                        </label>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='theme'>Theme</label>\n\n                        <div class='controls'>\n\n                            <select data-id='theme'>\n                                <option value='ace/theme/light'>Light</option>\n                                <option value='ace/theme/dark'>Dark</option>\n                            </select>\n\n                        </div>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='font-size'>Font size</label>\n\n                        <div class='controls'>\n\n                            <select data-id='font-size'>\n                                <option value='11'>Small</option>\n                                <option value='12' selected>Normal</option>\n                                <option value='13'>Larger</option>\n                                <option value='14'>Large</option>\n                                <option value='15'>Extra Large</option>\n                            </select>\n\n                        </div>\n\n                </fieldset>\n\n            </form>\n\n        </div>\n\n        <div class='modal-footer'>\n\n            <button class='btn' data-dismiss='modal'>Cancel</button>\n            <button data-action='save' class='btn btn-primary' data-dismiss='modal'>Save</button>\n\n        </div>\n\n</footer>\n";
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
    + "</dd>\n\n                </dl>\n\n            '><i class='icon-info-sign icon-gray'></i></a>\n\n        </span>\n\n    </section>\n\n    ";
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
  buffer += "\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n        ";
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
  buffer += "\n\n                <tr>\n\n                    <td class='index'>"
    + escapeExpression((helper = helpers.index || (depth0 && depth0.index),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index", (data == null || data === false ? data : data.index), options)))
    + "</td>\n\n                    ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.studentId), {hash:{},inverse:self.programWithDepth(10, program10, data, depth1),fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                </tr>\n\n            ";
  return buffer;
  }
function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                        <td class='link'><a href='./#/"
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
    + "</a></td>\n\n                    ";
  return buffer;
  }

function program10(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                        <td class='link'><a href='./#/"
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
    + "</a></td>\n\n                    ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n        <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "courses'>Courses</a> <span class='divider'>/</span></li>\n        <li><a href='./#/";
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
    + "</a> <span class='divider'>/</span></li>\n        <li class='active'>Exercises</li>\n\n    </ul>\n\n    <h2>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.studentId), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " — Exercises ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercises)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n\n        ";
  stack1 = self.invokePartial(partials.search, 'search', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data}
  if (helper = helpers.exercises) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.exercises); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.exercises) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["InstanceContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n        <li class='active'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instance)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n\n    </ul>\n\n    <h2>\n        Instance — "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instance)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    </h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>Navigate</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            <tr>\n                <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instance)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students'>Students</a></td>\n            </tr>\n\n            <tr>\n                <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instance)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/courses'>Courses</a></td>\n            </tr>\n\n        </tbody>\n\n    </table>\n\n</section>\n";
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
    + "/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/";
  if (helper = helpers.courseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.courseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
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
    + "</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
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
    + "/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
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
    + "</a> <span class='divider'>/</span></li>\n\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/students/";
  if (helper = helpers.studentId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.studentId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
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
    + "</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
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
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
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
    + "</a> <span class='divider'>/</span></li>\n\n        ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n        <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.courseRoute), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Snapshots</li>\n\n    </ul>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["RootContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n                <tr>\n\n                    <td class='index'>"
    + escapeExpression((helper = helpers.index || (depth0 && depth0.index),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index", (data == null || data === false ? data : data.index), options)))
    + "</td>\n\n                    <td class='link'><a href='./#/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                </tr>\n\n            ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n\n        <li class='active'>Home</li>\n\n    </ul>\n\n    <h2>\n        Instances ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.instances)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n\n        ";
  stack1 = self.invokePartial(partials.search, 'search', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.instances) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.instances); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.instances) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SearchContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='pull-right'>\n\n    <div class='input-append'>\n\n        <input type='text' class='span2' placeholder='Search' data-id='query-string' value='";
  if (helper = helpers.query) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.query); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' />\n\n        <button class='btn' data-action='search' title='Search'>\n            <i class='icon-search'></i>\n        </button>\n\n    </div>\n\n</div>\n";
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
  buffer += "\n\n                <li class='folder'><i class='icon-folder-open icon-gray'></i>"
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

  buffer += "<header>\n\n    <h1><i class='icon-folder-close icon-gray'></i> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n\n</header>\n\n<ul>\n\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.files), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["SnapshotNavigationContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='row'>\n\n    <div class='span3'>\n\n        <button id='toggleBrowser' type='button' class='btn' data-toggle='button'><i class='icon-folder icon-gray'></i></button>\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\n        <button id='level' type='button' class='btn' data-toggle='button'><i class='icon-key-level icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>";
  if (helper = helpers.current) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (helper = helpers.total) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n";
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


  buffer += "<div class='row'>\n\n    <div class='span2'>\n\n        <time>"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), false, options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.first)),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), false, options)))
    + "</time>\n\n    </div>\n\n    <div class='center text-center'>. . .</div>\n\n    <div class='span3 pull-right'>\n\n        <time class='pull-right'>"
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
  buffer += "\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/exercises/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.exercise)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class='divider'>/</span></li>\n        ";
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
  buffer += "\n\n                <tr>\n\n                    <td class='index'>"
    + escapeExpression((helper = helpers.index || (depth0 && depth0.index),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "index", (data == null || data === false ? data : data.index), options)))
    + "</td>\n\n                    ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.course), {hash:{},inverse:self.programWithDepth(8, program8, data, depth1),fn:self.programWithDepth(6, program6, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                </tr>\n\n            ";
  return buffer;
  }
function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                        <td class='link'><a href='./#/"
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
    + "</a></td>\n\n                    ";
  return buffer;
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n\n                        <td class='link'><a href='./#/"
    + escapeExpression(((stack1 = (depth2 && depth2.instanceId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/students/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/courses'>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n\n                    ";
  return buffer;
  }

  buffer += "<section>\n\n    <ul class='breadcrumb'>\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n        <li><a href='./#/";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.instanceId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instanceId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> <span class='divider'>/</span></li>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <li class='active'>Students</li>\n    </ul>\n\n    <h2>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Students ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.students)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\n\n        ";
  stack1 = self.invokePartial(partials.search, 'search', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n\n                <th>#</th>\n                <th>Name</th>\n\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data}
  if (helper = helpers.students) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.students); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.students) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </tbody>\n\n    </table>\n\n</section>\n";
  return buffer;
  });;

/* exported config */

/* Global configuration */

var config = {

    /* Storage keys */

    storage: {

        cache: {

            files: {

                url: 'codebrowser.cache.files.url'

            },

            snapshot: {

                level: 'codebrowser.cache.snapshots.level'

            }
        },

        setting: {

            editor: {

                ignoreEmptyLines: 'codebrowser.setting.editor.ignoreEmptyLines',
                theme:            'codebrowser.setting.editor.theme',
                fontSize:         'codebrowser.setting.editor.fontSize'

            }
        },

        view: {

            SnapshotView: {

                browser: 'codebrowser.view.SnapshotView.browser'

            },

            EditorView: {

                split: 'codebrowser.view.EditorView.split',
                diff: 'codebrowser.view.EditorView.diff'

            }
        }
    },

    /* API */

    api: {

        main: {

            root: 'http://localhost:8090/'

        }
    },

    /* Cache */

    cache: {

        expires: 3600

    },

    /* View */

    view: {

        container: '#container'

    },

    /* Ace editor */

    editor: {

        configure: function (editor) {

            // Editor
            editor.setReadOnly(true);
            editor.setPrintMarginColumn(false);
            editor.setDisplayIndentGuides(false);
            editor.getSession().setFoldStyle('markbeginend');

            // Text
            editor.setTheme(localStorage.getItem(config.storage.setting.editor.theme) || 'ace/theme/light');
            editor.setFontSize(parseInt(localStorage.getItem(config.storage.setting.editor.fontSize), 10) || 12);
            editor.getSession().setTabSize(4);
            editor.getSession().setUseWrapMode(true);
            editor.getSession().setWrapLimitRange(120, 120);
        }
    }
}
;

/* exported codebrowser */

/* DOM ready */

$(document).ready(function () {

    codebrowser.initialize();
});

/* App */

var codebrowser = {

    app: {},
    cache: {},
    helper: {},
    model: {},
    collection: {},
    view: {},
    controller: {},
    router: {},

    initialize: function () {

        // Oops! Catch all global unhandled errors
        window.onerror = function (error) {

            var errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-error', message: 'Oops! ' + error } });
            codebrowser.controller.ViewController.push(errorView, true);
        }

        // Initialise routers
        codebrowser.app.base = new codebrowser.router.BaseRouter();
        codebrowser.app.instance = new codebrowser.router.InstanceRouter();
        codebrowser.app.student = new codebrowser.router.StudentRouter();
        codebrowser.app.course = new codebrowser.router.CourseRouter();
        codebrowser.app.exercise = new codebrowser.router.ExerciseRouter();
        codebrowser.app.snapshot = new codebrowser.router.SnapshotRouter();

        // Register Handlebars partials
        Handlebars.registerPartial('search', Handlebars.templates.SearchContainer);

        // History
        Backbone.history.start();
    }
}
;

codebrowser.helper.AceMode = {

    mode: {

        'c':    'c_cpp',
        'css':  'css',
        'h':    'c_cpp',
        'htm':  'html',
        'html': 'html',
        'java': 'java',
        'js':   'javascript',
        'json': 'json',
        'rb':   'ruby',
        'xml':  'xml',
        'yml':  'yaml'

    },

    getModeForFilename: function (filename) {

        // Fallback to text
        var mode = 'text';

        // Can determine filename extension
        if (filename.indexOf('.') !== -1 && filename.indexOf('.') !== 0) {

            var split = filename.split('.'),
                filenameExtension = split[split.length - 1];

            // Set mode or fallback to text if no mode is specified for the filename extension
            mode = this.mode[filenameExtension] || mode;
        }

        return 'ace/mode/' + mode;
    }
}
;

Handlebars.registerHelper('date', function (date, precise) {

    if (precise) {
        return moment(new Date(date)).format('D.M.YYYY HH.mm.ss');
    }

    return moment(new Date(date)).format('D.M.YYYY HH.mm');
});
;

codebrowser.helper.Duration = {

    calculate: function (time, previousTime, simplify) {

        var difference = time - previousTime,
            value,
            timeUnit,
            seconds = Math.round(difference / 1000);

        if (seconds > 60) {

            var minutes = Math.round(seconds / 60);

            if (minutes > 60) {

                var hours = Math.round(minutes / 60);

                if (hours > 24) {

                    var days = Math.round(hours / 24);

                    value = days;
                    timeUnit = 'day';

                } else {

                    value = hours;
                    timeUnit = 'hour';
                }

            } else {

                value = minutes;
                timeUnit = 'minute';
            }

        } else {

            value = seconds;
            timeUnit = 'second';
        }

        if (value !== 1) {
            timeUnit += 's';
        }

        if (simplify) {
            timeUnit = timeUnit.slice(0, 1);
        }

        return value + ' ' + timeUnit;
    }
}

Handlebars.registerHelper('duration', function (time, previousTime) {

    return codebrowser.helper.Duration.calculate(time, previousTime);
});
;

Handlebars.registerHelper('filename', function (name) {

    return _.last(name.split('/'));
});
;

Handlebars.registerHelper('index', function (index) {

    return index + 1;
});
;

codebrowser.helper.ListViewFilter = function (options, collection) {

    var _module = {},
        _containerSelector = 'body',
        _searchInputSelector = 'input[data-id="query-string"]',
        _filteredCollection = _.extend(new Backbone.Collection(), collection);

    var initialise = function (options) {

        if (options) {

            _searchInputSelector = options.searchInputSelector || _searchInputSelector;
            _containerSelector = options.containerSelector || _containerSelector;
        }
    }

    /* Module */

    _module.filter = function () {

        var query = $(_containerSelector).find(_searchInputSelector)
                                         .val()
                                         .trim()
                                         .toLowerCase();

        // Filter collection
        var results = collection.filter(function (item) {

            var name = item.get('name').toLowerCase();
            return name.indexOf(query) !== -1;
        });

        // Set filtered results to filtered collection
        _filteredCollection.reset(results);

        return {

            filteredCollection: _filteredCollection,
            query: query

        }
    }

    initialise(options);
    return _module;
}
;

Handlebars.registerHelper('pluralize', function (value, string) {

    if (value === 1) {
        return string;
    }

    return string + 's';
});
;

codebrowser.model.Course = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.api.main.root + this.get('instanceId') + '/courses';
    },

    relations: [

        {
            type: Backbone.HasMany,
            key: 'exercises',
            relatedModel: 'codebrowser.model.Exercise',
            collectionType: 'codebrowser.collection.ExerciseCollection',
            reverseRelation: {

                key: 'course'

            }
        }
    ],

    initialize: function (options) {

        if (options) {
            this.instanceId = options.instanceId;
        }
    }
});
;

codebrowser.model.Diff = function (previousContent, content) {

    /* Lines */

    var count = {

        replace:  0,
        insert:   0,
        'delete': 0,

        total: function () {

            return this.replace + this.insert + this['delete'];
        }
    }

    /* Differences */

    var differences = {

        insert:   [],
        replace:  [],
        'delete': [],
        all: []

    }

    this.createOperation = function (type, fromRowStart, fromRowEnd, toRowStart, toRowEnd) {

        var newOperation = [];
        newOperation.push(type);
        newOperation.push(fromRowStart);
        newOperation.push(fromRowEnd);
        newOperation.push(toRowStart);
        newOperation.push(toRowEnd);

        return newOperation;
    }

    /* Initialise */

    var from = difflib.stringAsLines(previousContent),
        to = difflib.stringAsLines(content);

    // Create diff
    var sequenceMatcher = new difflib.SequenceMatcher(from, to);

    /* jshint camelcase: false */

    // Diff operations
    var operations = sequenceMatcher.get_opcodes();

    /* jshint camelcase: true */

    // Offset
    var offset = 0;

    for (var i = 0; i < operations.length; i++) {

        var operation = operations[i],

            difference = {

            type:      operation[0],
            rowStart:  operation[3],
            rowEnd:    operation[4] - 1,
            offset:    offset,
            overwrite: false

        }

        // Ignore equal
        if (difference.type === 'equal') {
            continue;
        }

        // Replace
        if (difference.type === 'replace') {

            var originalDifference = _.clone(difference),
                fromChange = operation[2] - operation[1] - 1,
                toChange = operation[4] - operation[3] - 1;

            // Delta
            var lines = difference.rowEnd - difference.rowStart + 1,
                changed = operation[2] - operation[1];

            // Replaced something to nothing
            if (to.slice(operation[3], operation[4]).join('').length === 0) {

                // Should overwrite previous line
                difference.overwrite = true;

                difference.type = 'delete';

                // New delete
                if (fromChange - toChange > 0) {

                    var change = fromChange - toChange;

                    operation[2] -= change;

                    var operationChange = operation[2] - operation[1],
                        newDelete = this.createOperation('delete',
                                                         operation[1] + operationChange,
                                                         operation[2] + change,
                                                         (operation[3] + operationChange),
                                                         operation[4]);

                    // Insert new delete
                    operations.splice(i + 1, 0, newDelete);
                }
            }

            // Replaced nothing to something
            if (from.slice(operation[1], operation[2]).join('').length === 0) {
                difference.type = 'insert';
            }

            // Replace contains deleted lines
            if (fromChange > toChange && difference.type !== 'delete') {

                differences.replace.push(difference);
                differences.all.push(difference);

                // Increase replaced lines
                count[difference.type] += difference.rowEnd - difference.rowStart + 1;

                // Delete
                difference = originalDifference;

                difference.type = 'delete';

                // Move index
                operation[1] += lines;
                operation[3] += lines;
            }

            // Replace contains inserted lines
            if (toChange > fromChange && difference.type !== 'insert') {

                // Replace
                difference.rowEnd = difference.rowStart + changed - 1;

                if (to.slice(difference.rowStart, difference.rowEnd + 1).join('').length === 0) {

                    difference.type = 'delete';
                    difference.overwrite = true;

                    var newInsert = this.createOperation('insert',
                                                         operation[1],
                                                         operation[2],
                                                         (operation[3] + (difference.rowEnd - difference.rowStart + 1)),
                                                         operation[4]);

                    operations.splice(i + 1, 0, newInsert);

                } else {

                    differences.replace.push(difference);
                    differences.all.push(difference);

                    // Increase replaced lines
                    count[difference.type] += difference.rowEnd - difference.rowStart + 1;

                    var insertRowStart = difference.rowEnd + 1;

                    // Insert
                    difference = originalDifference;

                    difference.type = 'insert';

                    // Insert should start from where replace ended
                    difference.rowStart = insertRowStart;
                }
            }
        }

        // Delete
        if (difference.type === 'delete') {

            // Deleted lines
            var deletedAsLines = from.slice(operation[1], operation[2]),
                deleted = deletedAsLines.join('\n');

            // Add line ending if we don't overwrite
            if (!difference.overwrite) {
                deleted += '\n';
            }

            difference.rowStart = operation[3];
            difference.rowEnd = difference.rowStart + (operation[2] - operation[1] - 1);

            difference = _.extend(difference, { fromRowStart: operation[1],
                                                fromRowEnd: operation[2] - 1,
                                                lines: deleted });

            // Delete increases offsets if we don't overwrite
            if (!difference.overwrite) {

                var increase = difference.rowEnd - difference.rowStart + 1;
                offset += increase;
            }
        }

        // Increase lines
        count[difference.type] += difference.rowEnd - difference.rowStart + 1;

        differences[difference.type].push(difference);
        differences.all.push(difference);
    }

    this.getCount = function () {

        return count;
    }

    this.getDifferences = function () {

        return differences;
    }
}
;

/*
 * An exercise is resolved through a course.
 */

codebrowser.model.Exercise = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('course')) {
            return codebrowser.model.Course.findOrCreate({ id: this.courseId }).url() +  '/exercises';
        }

        return this.get('course').url() + '/exercises';
    },

    initialize: function (options) {

        if (options) {
            this.id = options.id;
            this.courseId = options.courseId;
        }
    }
});
;

/*
 * A file is resolved through a snapshot.
 */

codebrowser.model.File = Backbone.RelationalModel.extend({

    content: '',

    urlRoot: function () {

        return config.api.main.root +
               'students/' +
               this.get('snapshot').get('studentId') +
               '/courses/' +
               this.get('snapshot').get('courseId') +
               '/exercises/' +
               this.get('snapshot').get('exerciseId') +
               '/snapshots/' +
               this.get('snapshot') +
               '/files';
    },

    getContent: function () {

        var zip = codebrowser.cache.files,
            content = this.content,
            ignoreEmptyLines = localStorage.getItem(config.storage.setting.editor.ignoreEmptyLines);

        // Files.zip
        if (zip) {

            var file = zip.folder(this.get('snapshot').id).file(this.id);

            // File is present
            if (file) {
                content = file.asText();
            }
        }

        // Standardise line endings
        content = content.replace(/\r\n|\r/g, '\n');

        // Convert tabs to 4 spaces
        content = content.replace(/\t/g, '    ');

        // Trim empty lines
        if (ignoreEmptyLines && ignoreEmptyLines === 'true') {
            content = content.replace(/^ +$/gm, '');
        }

        return content;
    },

    lines: function () {

        return this.getContent().split('\n').length;
    },

    getFolder: function () {

        return this.get('path').substring(0, this.get('path').lastIndexOf('/'));
    }
});
;

codebrowser.model.Instance = Backbone.RelationalModel.extend({

    urlRoot: config.api.main.root

});
;

/*
 * Fetch a snapshot by passing a studentId, courseId and exerciseId as attributes for the model:
 *
 * var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
 */

codebrowser.model.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('studentId') || !this.get('courseId') || !this.get('exerciseId')) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a snapshot.');
        }

        return config.api.main.root +
               this.get('instanceId') +
               '/students/' +
               this.get('studentId') +
               '/courses/' +
               this.get('courseId') +
               '/exercises/' +
               this.get('exerciseId') +
               '/snapshots';
    },

    relations: [

        {
            type: Backbone.HasMany,
            key: 'files',
            relatedModel: 'codebrowser.model.File',
            collectionType: 'codebrowser.collection.FileCollection',
            reverseRelation: {

                key: 'snapshot'

            }
        }
    ],

    initialize: function () {

        // If fetched through a collection, get IDs from the collection
        if (this.collection) {
            this.set('instanceId', this.collection.instanceId);
            this.set('studentId', this.collection.studentId);
            this.set('courseId', this.collection.courseId);
            this.set('exerciseId', this.collection.exerciseId);
        }
    },

    getFiles: function () {

        var files = {};

        this.get('files').each(function (file) {

            var folder = file.getFolder();

            if (!files[folder]) {
                files[folder] = [];
            }

            files[folder].push(file.toJSON());
        });

        return files;
    }
});
;

codebrowser.model.Student = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.api.main.root + this.get('instanceId') + '/students'
    },

    initialize: function (options) {

        if (options) {
            this.instanceId = options.instanceId;
        }
    }
});
;

/*
 * Fetch a tag by passing a studentId, courseId and exerciseId as options for the model:
 *
 * var tag = codebrowser.model.Tag.findOrCreate({ id: 4 }, { studentId: 1, courseId: 2, exerciseId: 3 });
 *
 * Create a new tag the same way:
 *
 * var tag = new codebrowser.model.Tag({ text: 'Tag' }, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.model.Tag = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a tag.');
        }

        return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/tags';
    },

    initialize: function (attributes, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }

        // If fetched through a collection, get IDs from the collection
        if (this.collection) {
            this.studentId = this.collection.studentId;
            this.courseId = this.collection.courseId;
            this.exerciseId = this.collection.exerciseId;
        }
    }
});
;

/*
 * Fetch all courses:
 *
 * var courses = new codebrowser.collection.CourseCollection();
 *
 * Fetch courses related to a student by passing a studentId as an option for the collection:
 *
 * var courses = new codebrowser.collection.CourseCollection(null, { studentId: 1 });
 */

codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,

    url: function () {

        /* Fetch courses related to a student */
        if (this.studentId) {
            return config.api.main.root + this.instanceId + '/students/' + this.studentId + '/courses';
        }

        /* Fetch all courses */
        return config.api.main.root + this.instanceId + '/courses';
    },

    initialize: function (models, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.studentId = options.studentId;
        }
    }
});
;

/*
 * Fetch all exercises related to a course:
 *
 * var course = codebrowser.model.Course.findOrCreate({ id: 1 });
 * var exercises = new codebrowser.collection.ExerciseCollection();
 * exercises.course = course;
 *
 * Fetch exercises related to a student and course by passing a studentId and courseId as options for the collection:
 *
 * var courses = new codebrowser.collection.ExerciesCollection(null, { studentId: 1, courseId: 2 });
 */

codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        if (!this.courseId) {
            throw new Error('Option courseId is required to fetch exercises.');
        }

        /* Fetch exercises related to a course */
        if (!this.studentId) {
            return config.api.main.root + this.instanceId + '/courses/' + this.courseId + '/exercises';
        }

        /* Fetch exercises related to a student and course */
        return config.api.main.root + this.instanceId + '/students/' + this.studentId + '/courses/' + this.courseId + '/exercises';
    },

    initialize: function (models, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.studentId = options.studentId;
            this.courseId = options.courseId;
        }
    }
});
;

/*
 * FileCollection is resolved through a snapshot.
 */

codebrowser.collection.FileCollection = Backbone.Collection.extend({

    model: codebrowser.model.File,

    url: function () {

        return config.api.main.root +
               'students/' +
               this.snapshot.get('studentId') +
               '/courses/' +
               this.snapshot.get('courseId') +
               '/exercises/' +
               this.snapshot.get('exerciseId') +
               '/snapshots/' +
               this.snapshot.id +
               '/files';
    }
});
;

codebrowser.collection.InstanceCollection = Backbone.Collection.extend({

    model: codebrowser.model.Instance,

    url: function () {

        return config.api.main.root;
    }
});
;

/*
 * Fetch snapshots by passing a studentId, courseId and exerciseId as options for the collection:
 *
 * var snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.collection.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.model.Snapshot,
    level: 'code',

    /* Differences */

    differencesDone: false,
    differences: [],

    url: function () {

        if (!this.instanceId || !this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options instanceId, studentId, courseId and exerciseId are required to fetch snapshots.');
        }

        return config.api.main.root +
               this.instanceId +
               '/students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots';
    },

    initialize: function (models, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    },

    isCodeLevel: function () {

        return this.level === 'code';
    },

    isKeyLevel: function () {

        return this.level === 'key';
    },

    fetchFiles: function (callback) {

        var self = this,
            parameter = this.level ? '?level=' + this.level : '';

        // Files in cache
        if (codebrowser.cache.files && localStorage.getItem(config.storage.cache.files.url) === this.url() + parameter) {
            callback();
            return;
        }

        // Fetch new ZIP, need to calculate differences again
        this.differences = [];

        JSZipUtils.getBinaryContent(this.url() + '/files.zip' + parameter, function (error, data) {

            if (error) {
                callback(error);
                return;
            }

            var zip = new JSZip(data);

            // Cache URL
            localStorage.setItem(config.storage.cache.files.url, self.url() + parameter);
            localStorage.setItem(config.storage.cache.snapshot.level, self.level);

            // Save ZIP
            codebrowser.cache.files = zip;

            callback();
        });
    },

    getDuration: function (fromIndex, toIndex) {

        return this.at(fromIndex).get('timestamp') - this.at(toIndex).get('timestamp');
    },

    getMinDuration: function () {

        var self = this,
            min = Number.MAX_VALUE;

        // Find min duration
        this.each(function (snapshot, index) {

            if (index === 0) {
                return;
            }

            var duration = self.getDuration(index, index - 1);

            // Found new min
            if (duration < min) {
                min = duration;
            }
        });

        return min;
    },

    getMaxDuration: function () {

        var self = this,
            max = Number.MIN_VALUE;

        // Find max duration
        this.each(function (snapshot, index) {

            if (index === 0) {
                return;
            }

            var duration = self.getDuration(index, index - 1);

            // Found new max
            if (duration > max) {
                max = duration;
            }
        });

        return max;
    },

    getDifference: function (index, filename) {

        var difference = this.differences[index];

        if (!difference) {
            return null;
        }

        if (!difference[filename]) {
            return null;
        }

        return difference[filename];
    },

    getDifferences: function () {

        if (this.differences.length !== 0) {
            return this.differences;
        }

        this.differences = [];

        var self = this;

        this.each(function (snapshot, index) {

            var previousSnapshot = self.at(index - 1);

            // Divide diffs by snapshot indexes
            if (!self.differences[index]) {

                self.differences[index] = {

                    total: 0,
                    lines: 0

                }
            }

            var files = snapshot.get('files');

            // Calculate differences for every file of each snapshot
            files.each(function (file) {

                var filename = file.get('name');

                // Create namespace for every file name
                if (!self.differences[index].filename) {
                    self.differences[index][filename] = null;
                }

                var currentFile = file,
                    previousFile = null;

                // If previous snapshot doesn't exist, current file doesn't have earlier version of it
                if (!previousSnapshot) {

                    // Set previous file to current file
                    previousFile = currentFile;

                } else {

                    // Get previous version of the current file from the previous snapshot
                    previousFile = previousSnapshot.get('files').findWhere({ name: filename });
                }

                // Couldn't find file from previous snapshot, set previous file to current file
                if (!previousFile) {
                    previousFile = currentFile;
                }

                var previousContent = previousFile.getContent();

                // New file
                if (previousFile === currentFile) {
                    previousContent = '';
                }

                // Create difference
                var difference = new codebrowser.model.Diff(previousContent, currentFile.getContent());

                // Count how many lines were in snapshot's files overall and how many lines of them changed
                self.differences[index].total += difference.getCount().total();
                self.differences[index].lines += currentFile.lines();

                self.differences[index][currentFile.get('name')] = difference;
            });
        });

        return this.differences;
    }
});
;

codebrowser.collection.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Student,

    url: function () {

        if (this.instanceId && this.courseId && this.exerciseId) {
            return config.api.main.root + this.instanceId + '/courses/' + this.courseId + '/exercises/' + this.exerciseId + '/students';
        }

        return config.api.main.root + this.instanceId + '/students';
    },

    initialize: function (models, options) {

        if (options) {
            this.instanceId = options.instanceId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }
});
;

/*
 * Fetch tags by passing a studentId, courseId and exerciseId as options for the collection:
 *
 * var tags = new codebrowser.collection.TagCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.collection.TagCollection = Backbone.Collection.extend({

    model: codebrowser.model.Tag,

    url: function () {

        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options studentId, courseId and exerciseId are required to fetch tags.');
        }

        return config.api.main.root +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/tags';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }
});
;

codebrowser.view.ListBaseView = Backbone.View.extend({

    events: {

        'click [data-action="search"]': 'filterListByName',
        'keyup [data-id="query-string"]': 'filterListByName'

    },

    /* Render */

    render: function () {

        // Template
        var output = this.renderTemplate();

        this.$el.html(output);

        // Bind events also on re-render
        this.delegateEvents();
    },

    update: function () {

        var output = this.renderTemplate(),
            filteredList = $(output).find('table');

        this.$el.find('table').replaceWith(filteredList);
    },

    /* Filter */

    filterListByName: function () {

        if (!this.filterHelper) {
            this.filterHelper = new codebrowser.helper.ListViewFilter({ 'containerSelector': '#' + this.id }, this.collection);
        }

        var result = this.filterHelper.filter();

        this.collection = result.filteredCollection;
        this.query = result.query;

        this.update();
    }
});
;

codebrowser.view.CoursesView = codebrowser.view.ListBaseView.extend({

    id: 'courses-container',
    template: Handlebars.templates.CoursesContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            query: this.query,
            instanceId: this.collection.instanceId,
            studentId: this.collection.studentId,
            courses: this.collection.toJSON()

        }

        if (this.collection.studentId) {
            attributes = _.extend(attributes, { student: this.student.toJSON() });
        }

        // Template
        return this.template(attributes);
    }
});
;

codebrowser.view.EditorSettingsView = Backbone.View.extend({

    id: 'editor-settings-container',
    template: Handlebars.templates.EditorSettingsContainer,

    events: {

        'click [data-action="save"]': 'save'

    },

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        this.render();
    },

    /* Render */

    render: function () {

        var ignoreEmptyLines = localStorage.getItem(config.storage.setting.editor.ignoreEmptyLines),
            fontSize = parseInt(localStorage.getItem(config.storage.setting.editor.fontSize), 10),
            theme = localStorage.getItem(config.storage.setting.editor.theme);

        // Template
        var output = $(this.template());

        // Restore ignore empty lines
        if (ignoreEmptyLines) {
            $('[data-id="ignore-empty-lines"]', output).prop('checked', ignoreEmptyLines === 'true');
        }

        // Restore theme
        if (theme) {
            $('[data-id="theme"] option[value="' + theme + '"]', output).prop('selected', true);
        }

        // Restore font size
        if (fontSize) {
            $('[data-id="font-size"] option[value="' + fontSize + '"]', output).prop('selected', true);
        }

        this.$el.html(output);
    },

    /* Actions */

    save: function () {

        // Ignore empty lines
        localStorage.setItem(config.storage.setting.editor.ignoreEmptyLines, $('[data-id="ignore-empty-lines"]').prop('checked'));

        // Set theme
        localStorage.setItem(config.storage.setting.editor.theme, $('[data-id="theme"] option:selected', this.$el).val());

        // Set font size
        localStorage.setItem(config.storage.setting.editor.fontSize, $('[data-id="font-size"] option:selected', this.$el).val());

        // Configure
        this.parentView.configure();

        // Update
        this.parentView.update(this.parentView.previousModel, this.parentView.model);
    }
});
;

codebrowser.view.EditorView = Backbone.View.extend({

    id: 'editor-container',

    template: {

        topContainer: Handlebars.templates.EditorTopContainer

    },

    /* Decorations */

    decorations: {

        'main-editor': [],
        'side-editor': []

    },

    /* Markers */

    markers: {

        'main-editor': [],
        'side-editor': []

    },

    /* Inserted lines */

    insertedLines: {

        'main-editor': []

    },

    /* Replaced lines */

    replacedLines: {

        'main-editor': []

    },

    events: {

        'click #editor-inspector': 'toggleInspector'

    },

    /* Split */

    split: false,

    canSplit: function () {

        return this.model !== this.previousModel;
    },

    /* Diff */

    diff: false,

    differences: new codebrowser.model.Diff('', ''),

    /* Inspector */

    inspector: false,

    /* Initialise */

    initialize: function () {

        // Hide view until needed
        this.$el.hide();

        // Elements
        this.topContainer = $('<div>', { id: 'editor-top-container' });
        this.editorElement = $('<div>', { id: 'editor' });
        this.settingsView = new codebrowser.view.EditorSettingsView({ parentView: this });

        // Elements for editors
        this.sideEditorElement = $('<div>', { id: 'side-editor' }).hide();
        this.mainEditorElement = $('<div>', { id: 'main-editor' });

        // Append editor elements to parent
        this.editorElement.append(this.sideEditorElement);
        this.editorElement.append(this.mainEditorElement);

        // Append elements to parent
        this.$el.append(this.topContainer);
        this.$el.append(this.editorElement);
        this.$el.append(this.settingsView.el);

        // Create Ace editor
        this.sideEditor = ace.edit(this.sideEditorElement.get(0));
        this.mainEditor = ace.edit(this.mainEditorElement.get(0));

        // Configure editor
        this.configure();
    },

    /* Remove */

    remove: function () {

        // Remove settings
        this.settingsView.remove();

        Backbone.View.prototype.remove.call(this);
    },

    /* Reset */

    configure: function () {

        // Configure editors
        config.editor.configure(this.mainEditor);
        config.editor.configure(this.sideEditor);
    },

    removeDecorations: function (editor) {

        // Remove decorations from editor
        while (this.decorations[editor.container.id].length > 0) {

            var decoration = this.decorations[editor.container.id].pop();

            editor.getSession().removeGutterDecoration(decoration.row, decoration.style);
        }
    },

    removeMarkers: function (editor) {

        // Remove markers from editor
        while (this.markers[editor.container.id].length > 0) {
            editor.getSession().removeMarker(this.markers[editor.container.id].pop());
        }
    },

    removeInsertedLines: function (editor) {

        var Range = ace.require('ace/range').Range;

        // Remove inserted lines from editor
        while (this.insertedLines[editor.container.id].length > 0) {

            var difference = this.insertedLines[editor.container.id].pop();

            editor.getSession()
                  .remove(new Range(difference.rowStart,
                                    0,
                                    difference.rowEnd + 1,
                                    0));
        }
    },

    resetReplacedLines: function (editor) {

        var Range = ace.require('ace/range').Range;

        // Reset replaced lines from editor
        while (this.replacedLines[editor.container.id].length > 0) {

            var difference = this.replacedLines[editor.container.id].pop();

            editor.getSession()
                  .replace(new Range(difference.rowStart,
                                     0,
                                     difference.rowEnd,
                                     editor.getSession().getLine(difference.rowEnd).length),
                           difference.lines);
        }
    },

    clearDiff: function () {

        // Remove decorations
        this.removeDecorations(this.mainEditor);
        this.removeDecorations(this.sideEditor);

        // Reset replaced lines
        this.resetReplacedLines(this.mainEditor);

        // Remove inserted lines
        this.removeInsertedLines(this.mainEditor);

        // Remove markers
        this.removeMarkers(this.mainEditor);
        this.removeMarkers(this.sideEditor);
    },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            split: this.split,
            previous: this.previousModel.toJSON(),
            difference: this.differences.getCount(),
            percentageOfChange: Math.round((this.differences.getCount().total() / this.model.lines()) * 100)

        }

        // Template
        var topContainerOutput = $(this.template.topContainer(_.extend(this.model.toJSON(), attributes)));

        // Editor inspector
        $('#editor-inspector', topContainerOutput).popover({ animation: false, html: true, trigger: 'click' });

        // Update top container
        this.topContainer.html(topContainerOutput);

        // Restore inspector state
        if (this.inspector) {
            $('#editor-inspector').popover('toggle');
        }
    },

    fold: function (editor, folds) {

        _.each(folds, function (fold) {

            editor.getSession().foldAll(fold.start.row, fold.end.row, 0);
        });
    },

    decorateGutter: function (editor, rowStart, rowEnd, style) {

        // Decorate gutter for lines
        for (var row = rowStart; row <= rowEnd; row++) {

            this.decorations[editor.container.id].push({ row: row, style: 'decoration gutter-' + style });

            editor.getSession().addGutterDecoration(row, 'decoration gutter-' + style);
        }
    },

    /* Update */

    setContent: function (editor, content, mode) {

        // Remember folds
        var folds = _.clone(editor.getSession().getAllFolds());

        // Remember cursor position
        var position = editor.getSelection().getSelectionAnchor();

        // Remember scroll position
        var scrollPosition = editor.getSession().getScrollTop();

        // Remove decorations
        this.removeDecorations(editor);

        // Remove markers
        this.removeMarkers(editor);

        // Set content for editor
        editor.setValue(content);

        // Set folds for editor
        this.fold(editor, folds);

        // Set cursor and scroll position
        editor.moveCursorToPosition(position);
        editor.getSelection().clearSelection();
        editor.getSession().setScrollTop(scrollPosition);

        // Set syntax mode
        editor.getSession().setMode(mode);
    },

    update: function (previousFile, file) {

        this.model = file;
        this.previousModel = previousFile;

        // Syntax mode
        var mode = codebrowser.helper.AceMode.getModeForFilename(this.model.get('name'));

        // Both models are the same
        if (this.previousModel === this.model) {

            // Disable split
            this.toggleSplit(false);

        } else {

            // Restore split state if necessary
            if (!this.split) {
                this.toggleSplit(localStorage.getItem(config.storage.view.EditorView.split) === 'true');
            }
        }

        // Restore or clear diff state
        if (!this.diff) {
            this.toggleDiff(localStorage.getItem(config.storage.view.EditorView.diff) === 'true');
        } else {
            this.clearDiff();
        }

        // Set content
        this.setContent(this.sideEditor, this.previousModel !== this.model ? previousFile.getContent() : null, mode);
        this.setContent(this.mainEditor, this.model.getContent(), mode);

        // Create difference
        this.differences = new codebrowser.model.Diff(this.sideEditor.getValue(), this.mainEditor.getValue());

        // Re-render diff
        this.toggleDiff(this.diff);

        // Show view if necessary
        this.$el.show();

        this.render();
    },

    /* Events */

    didResize: function () {

        // Relocate inspector
        if (this.inspector) {
            $('#editor-inspector').popover('toggle');
            $('#editor-inspector').popover('toggle');
        }

        // Editors can get confused after a resize
        this.mainEditor.resize();
        this.sideEditor.resize();
    },

    didSplit: function () {

        if (this.diff) {

            // Re-render diff
            this.clearDiff();
            this.toggleDiff(this.diff);
        }

        // Editors can get confused after a split
        this.mainEditor.resize();
        this.sideEditor.resize();
        this.mainEditor.renderer.updateFull();
        this.sideEditor.renderer.updateFull();

        // Render
        this.render();
    },

    /* Actions */

    toggleSplit: function (split) {

        // Use parameter if given, otherwise toggle internal split state
        if (split !== undefined) {

            this.split = split;

        } else {

            this.split = !this.split;

            // Store split state
            localStorage.setItem(config.storage.view.EditorView.split, this.split);
        }

        // Enable split
        if (this.split) {

            // Split side editor to left
            this.sideEditorElement.css({ float: 'left', width: '50%' });
            this.sideEditorElement.show();

            // Split main editor to right
            this.mainEditorElement.css({ float: 'right', width: '50%' });

            this.didSplit();

            return;
        }

        this.sideEditorElement.hide();
        this.mainEditorElement.css({ float: '', width: '' });

        this.didSplit();
    },

    toggleDiff: function (diff) {

        var Range = ace.require('ace/range').Range;

        // Use parameter if given, otherwise toggle internal diff state
        if (diff !== undefined) {

            this.diff = diff;

        } else {

            this.diff = !this.diff;

            // Store diff state
            localStorage.setItem(config.storage.view.EditorView.diff, this.diff);
        }

        // Enable diff
        if (this.diff) {

            // Show differences
            for (var i = 0; i < this.differences.getDifferences().all.length; i++) {

                var difference = this.differences.getDifferences().all[i],
                    marker;

                // Delete
                if (difference.type === 'delete') {

                    // If not in split view, show removed lines within the main editor
                    if (!this.split) {

                        // Add removed lines to main editor
                        if (!difference.overwrite) {

                            this.mainEditor.getSession()
                                           .insert({ row: difference.rowStart + difference.offset, column: 0 },
                                                   difference.lines);

                            // Remember removed lines
                            this.insertedLines['main-editor'].push({

                                rowStart: difference.rowStart + difference.offset,
                                rowEnd: difference.rowEnd + difference.offset

                            });

                        // Overwrite previous lines
                        } else {

                            // Remember replaced lines
                            this.replacedLines['main-editor'].push({

                                rowStart: difference.rowStart + difference.offset,
                                rowEnd: difference.rowEnd + difference.offset,
                                lines: this.mainEditor.getSession().getLines(difference.rowStart + difference.offset,
                                                                             difference.rowEnd + difference.offset).join('\n')

                            });

                            this.mainEditor.getSession()
                                           .replace(new Range(difference.rowStart + difference.offset,
                                                              0,
                                                              difference.rowEnd + difference.offset,
                                                              this.mainEditor.getSession().getLine(difference.rowEnd).length),
                                                    difference.lines);
                        }

                        // Decorate gutter
                        this.decorateGutter(this.mainEditor,
                                            difference.rowStart + difference.offset,
                                            difference.rowEnd + difference.offset,
                                            'delete');

                    // If split view is enabled, show removed lines in side editor
                    } else {

                        // Add marker for removed line in side editor
                        marker = this.sideEditor
                                     .getSession()
                                     .addMarker(new Range(difference.fromRowStart,
                                                          0,
                                                          difference.fromRowEnd,
                                                          1),
                                                difference.type,
                                                'fullLine');

                        // Decorate
                        this.decorateGutter(this.sideEditor, difference.fromRowStart, difference.fromRowEnd, 'delete');

                        // Remember marker
                        this.markers['side-editor'].push(marker);

                        continue;
                    }
                }

                var offset = 0;

                // Offset in single mode by removed lines
                if (!this.split) {
                    offset = difference.offset;
                }

                // Add marker to main editor
                marker = this.mainEditor
                             .getSession()
                             .addMarker(new Range(difference.rowStart + offset,
                                                  0,
                                                  difference.rowEnd + offset,
                                                  1),
                                        difference.type,
                                        'fullLine');

                // Decorate
                this.decorateGutter(this.mainEditor,
                                    difference.rowStart + offset,
                                    difference.rowEnd + offset,
                                    difference.type);

                // Remember marker
                this.markers['main-editor'].push(marker);
            }

            return;
        }

        // Disable diff
        this.clearDiff();
    },

    toggleInspector: function (event) {

        event.preventDefault();

        this.inspector = !this.inspector;
    }
});
;

codebrowser.view.ErrorView = Backbone.View.extend({

    id: 'error-container',
    template: Handlebars.templates.Error,

    /* Render */

    render: function () {

        // Template
        var output = this.template(this.model);

        this.$el.html(output);
    }
});
;

codebrowser.view.ExercisesView = codebrowser.view.ListBaseView.extend({

    id: 'exercises-container',
    template: Handlebars.templates.ExercisesContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            instanceId: this.collection.instanceId,
            studentId: this.collection.studentId,
            courseId: this.collection.courseId,
            course: this.course.toJSON(),
            exercises: this.collection.toJSON()

        }

        if (this.student) {
            attributes = _.extend(attributes, { student: this.student.toJSON() });
        }

        // Template
        return this.template(attributes);
    }
});
;

codebrowser.view.InstanceView = codebrowser.view.ListBaseView.extend({

    id: 'instance-container',
    template: Handlebars.templates.InstanceContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            instance: this.instance.toJSON()

        }

        // Template
        return this.template(attributes);
    }
});
;

codebrowser.view.LoadingView = Backbone.View.extend({

    id: 'loading-container',
    template: Handlebars.templates.Loading,

    /* Render */

    render: function () {

        this.$el.html(this.template());
    }
});
;

codebrowser.view.NotFoundErrorView = codebrowser.view.ErrorView.extend({

    model: {

        class: 'alert-warning',
        message: 'Not Found.'

    }
});
;

codebrowser.view.RootView = codebrowser.view.ListBaseView.extend({

    id: 'root-container',
    template: Handlebars.templates.RootContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            query: this.query,
            instances: this.collection.toJSON()

        }

        // Template
        return this.template(attributes);
    }
});
;

codebrowser.view.SnapshotBrowserView = Backbone.View.extend({

    id: 'snapshot-browser-container',

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        // Files
        this.snapshotFilesView = new codebrowser.view.SnapshotFilesView({ parentView: this });
        this.$el.append(this.snapshotFilesView.el);

        // Tags
//        this.snapshotTagsView = new codebrowser.view.SnapshotTagsView();
//        this.$el.append(this.snapshotTagsView.el);
    },

    /* Remove */

    remove: function () {

        // Remove files view
        this.snapshotFilesView.remove();

        // Remove tags view
//        this.snapshotTagsView.remove();

        Backbone.View.prototype.remove.call(this);
    },

    /* Update */

    update: function (snapshot, file, courseRoute) {

        // Update files view
        this.snapshotFilesView.update(snapshot, file, courseRoute);

        // Update tags view
//        this.snapshotTagsView.update(snapshot);
    }
});
;

codebrowser.view.SnapshotFilesView = Backbone.View.extend({

    id: 'snapshot-files-container',
    template: Handlebars.templates.SnapshotFilesContainer,

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView.parentView;
    },

    /* Render */

    renderDifferences: function (output) {

        var differences = this.parentView.collection.getDifferences(),
            index = this.parentView.collection.indexOf(this.model),
            difference = differences[index],
            files = this.model.get('files');

        files.each(function(file) {

            var fileDifference = difference[file.get('name')],
                fileElement = $('[data-id="' + file.id + '"]', output),
                lines = file.lines(),
                changed = fileDifference.getCount().total();

            // New file
            if (changed === lines) {
                fileElement.addClass('new');
            }

            // Modified file
            if (changed > 0 && changed !== lines) {
                fileElement.addClass('modified');
            }
        });
    },

    render: function () {

        // View attributes
        var attributes = {

            level: this.model.collection.level,
            instanceId: this.model.get('instanceId'),
            exercise: this.model.get('exercise').toJSON(),
            courseRoute: this.courseRoute,
            files: this.model.getFiles()

        }

        // Template
        var output = $(this.template(_.extend(this.model.toJSON(), attributes)));

        if (this.parentView.editorView.diff) {

            // Render new and modified files
            this.renderDifferences(output);
        }

        // Active file
        var activeFileElement = $('[data-id="' + this.file.id + '"]', output);
        activeFileElement.addClass('active');

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot, file, courseRoute) {

        this.model = snapshot;
        this.file = file;
        this.courseRoute = courseRoute;

        this.render();
    }
});
;

codebrowser.view.SnapshotTagsView = Backbone.View.extend({

    id: 'snapshot-tags-container',
    template: Handlebars.templates.SnapshotTagsContainer,

    events: {

        'click [data-action="create"]': 'create',
        'click [data-action="delete"]': 'delete'

    },

    collection: new codebrowser.collection.TagCollection(),

    /* Initialise */

    initialize: function () {

        this.render();
    },

    /* Render */

    render: function () {

        // Template
        var output = $(this.template({ tags: this.collection.toJSON() }));

        this.$el.html(output);
    },

    /* Update */

    update: function (snapshot) {

        this.snapshot = snapshot;

        this.collection = new codebrowser.collection.TagCollection(null, { studentId: this.snapshot.get('studentId'),
                                                                           courseId: this.snapshot.get('courseId'),
                                                                           exerciseId: this.snapshot.get('exerciseId') });

        // Render on add and remove
        this.collection.on('add', $.proxy(this.render, this));
        this.collection.on('remove', $.proxy(this.render, this));

        var self = this;

        // Fetch tags
        this.collection.fetch({

            cache: true,
            expires: 120,

            success: function () {

                self.render();
            },

            error: function () {

                throw new Error('Failed tags fetch.');
            }
        });
    },

    /* Actions */

    create: function (event) {

        var self = this;

        event.preventDefault();

        var text = $('[data-id="tag"]', this.$el).val().trim();

        if (!text) {
            return;
        }

        // New tag
        var tag = new codebrowser.model.Tag(null, { studentId: this.snapshot.get('studentId'),
                                                    courseId: this.snapshot.get('courseId'),
                                                    exerciseId: this.snapshot.get('exerciseId') });

        // Save tag
        tag.save({ text: text }, {

            success: function () {

                // Add to collection
                self.collection.add(tag, { at: 0 });
            },

            error: function () {

                throw new Error('Failed tag save.');
            }
        });
    },

    'delete': function (event) {

        var self = this,
            id = $(event.target).data('id'),
            tag = this.collection.get(id);

        // Destroy tag
        tag.destroy({

            success: function () {

                // Remove from collection
                self.collection.remove(tag);
            },

            error: function () {

                throw new Error('Failed tag delete.')
            }
        });
    }
});
;

codebrowser.view.SnapshotView = Backbone.View.extend({

    id: 'snapshot-container',

    template: {

        navigationbarContainer: Handlebars.templates.NavigationBarContainer,
        navigationContainer:    Handlebars.templates.SnapshotNavigationContainer

    },

    events: {

        'click #toggleBrowser': 'toggleBrowser',
        'click #split':         'split',
        'click #diff':          'diff',
        'click #level':         'level',
        'click #first':         'first',
        'click #previous':      'previous',
        'click #next':          'next',
        'click #last':          'last'

    },

    /* Routing */

    courseRoute: false,

    /* Browser */

    browser: true,

    /* Initialise */

    initialize: function () {

        // Hide view until needed
        this.$el.hide();

        // Navigation bar
        this.navigationbarContainer = $('<div>', { id: 'navigation-bar-container' });
        this.$el.append(this.navigationbarContainer);

        // Timeline
        this.snapshotsTimelineView = new codebrowser.view.SnapshotsTimelineView({ parentView: this });
        this.$el.append(this.snapshotsTimelineView.el);

        // Navigation
        this.navigationContainer = $('<div>', { id: 'snapshot-navigation-container' });
        this.$el.append(this.navigationContainer);

        // Content container
        var contentContainer = $('<div>', { id: 'snapshot-content-container' });

        // Browser
        this.snapshotBrowserView = new codebrowser.view.SnapshotBrowserView({ parentView: this });
        contentContainer.append(this.snapshotBrowserView.el);

        // Editor
        this.editorView = new codebrowser.view.EditorView();
        contentContainer.append(this.editorView.el);

        this.$el.append(contentContainer);

        // Bind resize
        $(window).resize($.proxy(this.resize, this));

        // Bind keydown
        $(document).keydown($.proxy(this.keydown, this));
    },

    /* Remove */

    remove: function () {

        // Unbind resize
        $(window).off('resize', this.resize);

        // Unbind keydown
        $(document).off('keydown', this.keydown);

        // Remove timeline
        this.snapshotsTimelineView.remove();

        // Remove browser view
        this.snapshotBrowserView.remove();

        // Remove editor
        this.editorView.remove();

        Backbone.View.prototype.remove.call(this);
    },

    /* Render */

    render: function () {

        // Index of the current model
        var index = this.collection.indexOf(this.model);

        // View attributes
        var attributes = {

            current: index + 1,
            total: this.collection.length

        }

        // Template for navigation bar container
        var navigationbarContainerOutput = $(this.template.navigationbarContainer(_.extend(this.model.toJSON(),
                                            { student:  this.student.toJSON(),
                                              course: this.model.get('course').toJSON(),
                                              exercise: this.model.get('exercise').toJSON(),
                                              courseRoute: this.courseRoute })));

        // Template for navigation container
        var navigationContainerOutput = $(this.template.navigationContainer(attributes));

        // Browser is enabled, set toggleBrowser button as active
        if (this.browser) {
            $('#toggleBrowser', navigationContainerOutput).addClass('active');
        }

        // Split view is enabled, set split button as active
        if (this.editorView.split) {
            $('#split', navigationContainerOutput).addClass('active');
        }

        // Disable split button if editor can not be split
        if (!this.editorView.canSplit()) {
            $('#split', navigationContainerOutput).attr('disabled', true);
        }

        // Diff is enabled, set diff button as active
        if (this.editorView.diff) {
            $('#diff', navigationContainerOutput).addClass('active');
        }

        // Key-level, set button as active
        if (this.collection.isKeyLevel()) {
            $('#level', navigationContainerOutput).addClass('active');
        }

        // First snapshot, disable the buttons for first and previous
        if (index === 0) {
            $('#first', navigationContainerOutput).attr('disabled', true);
            $('#previous', navigationContainerOutput).attr('disabled', true);
        }

        // Last snapshot, disable the buttons for next and last
        if (index === this.collection.length - 1) {
            $('#next', navigationContainerOutput).attr('disabled', true);
            $('#last', navigationContainerOutput).attr('disabled', true);
        }

        // Update navigation bar container
        this.navigationbarContainer.html(navigationbarContainerOutput);

        // Update navigation container
        this.navigationContainer.html(navigationContainerOutput);
    },

    /* Update */

    update: function (snapshot, fileId) {

        this.model = snapshot;

        // Restore browser state if necessary
        if (this.browser) {
            this.toggleBrowser(null, localStorage.getItem(config.storage.view.SnapshotView.browser) === 'true');
        }

        // Previous snapshot
        var index = this.collection.indexOf(snapshot),
            previousSnapshot = this.collection.at(index - 1);

        // First snapshot
        if (!previousSnapshot) {

            // Use the current snapshot as the previous
            previousSnapshot = this.model;
        }

        // Determine current file
        this.file = this.model.get('files').get(fileId);
        var filename = this.file.get('name');

        // Determine previous file if it exists
        var previousFile = previousSnapshot.get('files').findWhere({ name: filename });

        // Show view if necessary
        this.$el.show();

        // Update timeline
        this.snapshotsTimelineView.update(this.collection, index, filename, this.courseRoute);

        // Update editor
        this.editorView.update(previousFile || this.file, this.file);

        // Update browser
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);

        this.render();
    },

    /* Events */

    resize: function () {

        this.didResize();
    },

    didResize: function () {

        this.snapshotsTimelineView.didResize();
        this.editorView.didResize();
    },

    keydown: function (event) {

        // Left
        if (event.keyCode === 37) {
            this.previous();
        }

        // Right
        if (event.keyCode === 39) {
            this.next();
        }
    },

    /* Actions */

    toggleBrowser: function (event, browser) {

        // Use parameter if given, otherwise toggle internal browser state
        if (browser !== undefined) {

            this.browser = browser;

        } else {

            this.browser = !this.browser;

            // Store browser state
            localStorage.setItem(config.storage.view.SnapshotView.browser, this.browser);
        }

        // Enable browser
        if (this.browser) {

            // Move editor view
            this.editorView.$el.css('margin-left', this.snapshotBrowserView.$el.width() + 30);
            this.editorView.didResize();

            this.snapshotBrowserView.$el.show();

            return;
        }

        // Disable browser
        this.snapshotBrowserView.$el.hide();

        // Move editor view
        this.editorView.$el.css('margin-left', 0);
        this.editorView.didResize();
    },

    split: function () {

        this.editorView.toggleSplit();
    },

    diff: function () {

        this.editorView.toggleDiff();
        this.snapshotBrowserView.update(this.model, this.file, this.courseRoute);
    },

    level: function () {

        this.collection.level = this.collection.isCodeLevel() ? 'key' : 'code';
        this.navigate();
    },

    /* Actions - Navigation */

    url: function () {

        return '#/' +
               this.collection.instanceId +
               (this.courseRoute ? '/courses/' : '/students/') +
               (this.courseRoute ? this.collection.courseId : this.collection.studentId) +
               (this.courseRoute ? '/exercises/' : '/courses/') +
               (this.courseRoute ? this.collection.exerciseId : this.collection.courseId) +
               (this.courseRoute ? '/students/' : '/exercises/') +
               (this.courseRoute ? this.collection.studentId : this.collection.exerciseId) +
               '/snapshots/';
    },

    navigate: function (snapshot, file, options) {

        if (!snapshot) {

            codebrowser.app.snapshot.navigate(this.url(), { replace: !options ? options : options.replace });

            return;
        }

        // Use first file if non specified
        if (!file) {
            file = snapshot.get('files').first();
        }

        codebrowser.app.snapshot.navigate(this.url() +
                                          snapshot.id +
                                         '/files/' +
                                         file.id +
                                         '?level=' +
                                         this.collection.level, { replace: !options ? options : options.replace });
    },

    first: function () {

        var first = this.collection.first(),
            file = first.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(first, file);
    },

    previous: function () {

        var index = this.collection.indexOf(this.model),
            previous = this.collection.at(index - 1);

        if (!previous) {
            return;
        }

        var file = previous.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(previous, file);
    },

    next: function () {

        var index = this.collection.indexOf(this.model),
            next = this.collection.at(index + 1);

        if (!next) {
            return;
        }

        var file = next.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(next, file);
    },

    last: function () {

        var last = this.collection.last(),
            file = last.get('files').findWhere({ name: this.file.get('name') });

        this.navigate(last, file);
    }
});
;

codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',

    template: {

        bottomContainer: Handlebars.templates.SnapshotsTimelineBottomContainer

    },

    /* Absolute width */

    width: 0,

    /* Snapshot elements */

    snapshotElements: [],

    /* Pointer */

    pointerSetOffsetX: 0,

    /* Scroll */

    scroll: null,

    /* Dragging */

    dragging: false,

    /* Initialise */

    initialize: function (options) {

        this.parentView = options.parentView;

        // Hide view until needed
        this.$el.hide();

        /* jshint newcap: false */

        this.paper = Raphael(this.el, '100%', 81);

        /* jshint newcap: true */

        // Bottom container
        this.bottomContainer = $('<div>');
        this.$el.append(this.bottomContainer);
    },

    getViewX: function () {

        var x = 0;

        // Current x of view
        if (this.paper._viewBox) {
            x = this.paper._viewBox[0];
        }

        return x;
    },

    isVisible: function (x) {

        var viewX = this.getViewX(),
            viewWidth = $(this.paper.canvas).width();

        return (x >= viewX && x <= viewX + viewWidth);
    },

    snapshotWeight: function (index) {

        var weight = 0.8;

        // Key-level snapshots have a static weight
        if (this.collection.isKeyLevel()) {
            return weight;
        }

        var difference = this.differences[index],
            percentage = Math.round((difference.total / difference.lines) * 100);

        if (percentage === 0) {
            return weight;
        }

        // Scale between 1 and 2
        weight = 2 * percentage / 100 + 1;

        // Round to nearest .5
        weight = Math.round(weight * 2) / 2;

        return Math.min(2, weight);
    },

    distanceWeight: function (index, min, max) {

        var weight = 0;

        // First snapshot has a static weight
        if (index === 0) {
            return 1;
        }

        // Duration between snapshots
        var duration = this.collection.getDuration(index, index - 1);

        // Scale between 1 and 6
        weight = 5 * (duration - min) / (max - min) + 1;

        // Round up to 2 decimals
        weight = Math.round(weight * 100) / 100;

        return Math.min(6, weight);
    },

    setViewBox: function (x) {

        var viewWidth = $(this.paper.canvas).width();

        // Set view box
        this.paper.setViewBox(x, 0, viewWidth, this.paper.height, false);
    },

    centerOn: function (x) {

        var viewWidth = $(this.paper.canvas).width(),
            center = x - (viewWidth / 2);

        // Don't go under 0
        if (center < 0) {

            this.setViewBox(0);

            return;
        }

        // Don't go over absolute width
        if (center > (this.width - viewWidth)) {

            this.setViewBox(this.width - viewWidth);

            return;
        }

        // Center
        this.setViewBox(center);
    },

    focus: function () {

        // Cx of the current snapshot element
        var cx = this.snapshotElements[this.currentSnapshotIndex].attr('cx');

        // Make previous snapshot element visible
        if (this.currentSnapshotIndex !== 0) {

            if (!this.isVisible(this.snapshotElements[this.currentSnapshotIndex - 1].attr('cx'))) {
                this.centerOn(cx);
            }
        }

        // Make next snapshot element visible
        if (this.currentSnapshotIndex !== this.snapshotElements.length - 1) {

            if (!this.isVisible(this.snapshotElements[this.currentSnapshotIndex + 1].attr('cx'))) {
                this.centerOn(cx);
            }
        }
    },

    moveTimeline: function (dx) {

        var viewX = this.getViewX(),
            viewWidth = $(this.paper.canvas).width();

        // Can't move dx to left
        if ((viewX + dx) < 0 && dx < 0) {

            // Move by remainder, but don't go under 0
            this.setViewBox(Math.max(0, 0 - viewX));

            return;
        }

        // Can't move dx to right
        if ((viewX + viewWidth + dx) >= this.width && dx > 0) {

            var remainder = this.width - viewX - viewWidth;

            // Move by remainder
            this.setViewBox(viewX + remainder);

            return;
        }

        // Move viewbox
        this.setViewBox(viewX + dx);

        // Move pointer set
        this.pointerSetOffsetX += dx;
        this.pointerSet.transform('...t ' + dx + ', 0');
    },

    /* Render */

    renderDuration: function (previousSnapshot, snapshot, x, y, radius, distance) {

        if (!previousSnapshot) {
            return;
        }

        // Duration label
        var duration = codebrowser.helper.Duration.calculate(snapshot.get('timestamp'),
                                                             previousSnapshot.get('timestamp'), true);

        if (duration === '0 s') {
            return;
        }

        // Duration element
        var durationElement = this.paper.text(x - radius - distance / 2, y + 30, duration);
        $(durationElement.node).attr('class', 'duration');
    },

    renderTimeline: function (leftOffset, y, x) {

        // Timeline element
        var timeline = this.paper.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    renderSnapshotIndex: function (index, x) {

        // Snapshot index element
        var snapshotIndex = this.paper.text(x, 5, index + 1);

        $(snapshotIndex.node).attr('class', 'snapshot-index');
    },

    renderSnapshotWeight: function (index, x, y) {

        // Key-level snapshots do not have a weight
        if (this.collection.isKeyLevel()) {
            return;
        }

        var difference = this.differences[index],
            percentage = (difference.total / difference.lines).toFixed(2);

        // Snapshot has no changes
        if (percentage === '0.00') {
            return;
        }

        if (percentage !== '1.00') {
            percentage = percentage.slice(1);
        } else {
            percentage = percentage.slice(0,1);
        }

        // Snapshot weight element
        var snapshotWeightElement = this.paper.text(x, y, percentage);

        // Adjust font size by weight
        var snapshotWeight = this.snapshotWeight(index),
            fontSize = 11;

        if (snapshotWeight > 1) {
            fontSize *= snapshotWeight;
        }

        snapshotWeightElement.attr({ 'font-size': fontSize });

        $(snapshotWeightElement.node).attr('class', 'snapshot-weight');
    },

    renderSnapshot: function (snapshot, index, x, y, radius) {

        // Render index of the snapshot
        this.renderSnapshotIndex(index, x);

        // Snapshot area element
        var snapshotArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(snapshotArea.node).attr('class', 'area');

        // Snapshot element
        var snapshotElement = this.paper.circle(x, y, radius);
        $(snapshotElement.node).attr('class', 'snapshot');

        // Render weight for the snapshot
        this.renderSnapshotWeight(index, x, y);

        // Snapshot click area
        var snapshotClickArea = this.paper.circle(x, y, radius);
        $(snapshotClickArea.node).attr('class', 'area snapshot');

        // Tooltip
        $(snapshotClickArea.node).attr({

            'data-toggle': 'tooltip',
            'title': moment(new Date(snapshot.get('timestamp'))).format('D.M.YYYY HH.mm'),
            'data-container': 'body'

        });

        // Set models for snapshot and snapshot area elements
        var file = snapshot.get('files').findWhere({ name: this.filename });

        snapshotArea.data('snapshot', snapshot);
        snapshotArea.data('file', file);

        snapshotClickArea.data('snapshot', snapshot);
        snapshotClickArea.data('file', file);

        var self = this;

        snapshotClickArea.click(function () {

            var snapshot = this.data('snapshot'),
                file = this.data('file');

            // Destroy tooltip
            $(snapshotClickArea.node).tooltip('destroy');

            // Navigate to snapshot and file
            self.parentView.navigate(snapshot, file, { course: this.courseRoute });
        });

        snapshotClickArea.mouseover(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1.1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1.1' }, 150);

            // Show tooltip
            if (!self.scroll) {
                $(snapshotClickArea.node).tooltip('show');
            }
        });

        snapshotClickArea.mouseout(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1' }, 150);

            // Hide tooltip
            $(snapshotClickArea.node).tooltip('hide');
        });

        return snapshotElement;
    },

    renderPointer: function (x, radius) {

        // Pointer set
        this.pointerSet = this.paper.set();

        var width = 7,
            pointerX = x - width / 2,
            pointerY = this.paper.height,
            pointerLineX = x,
            pointerLineY = pointerY - width / 2;

        // Pointer line element
        var pointerLine = this.paper.path('M' + pointerLineX + ' ' + pointerLineY + ', L' + pointerLineX + ' ' + 0);
        $(pointerLine.node).attr('class', 'pointer-line');

        pointerLine.toBack();

        this.pointerSet.push(pointerLine);

        // Pointer element
        var pointer = this.paper.path('M' +
                                      pointerX +
                                      ' ' +
                                      pointerY +
                                      ', L' +
                                      (pointerX + width / 2) +
                                      ' ' +
                                      (pointerY - width) +
                                      ', ' +
                                      (pointerX + width) +
                                      ' ' +
                                      pointerY +
                                      'Z');

        $(pointer.node).attr('class', 'pointer');

        this.pointerSet.push(pointer);

        // Pointer area element
        var pointerArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(pointerArea.node).attr('class', 'area pointer');

        this.pointerSet.push(pointerArea);

        // Bind drag and drag over
        this.pointerSet.drag(this.dragMove, this.dragStart, this.dragEnd, this, this, this)
                       .onDragOver($.proxy(this.dragOver, this));
    },

    render: function () {

        this.snapshotElements = [];

        // Limit minimum to 1 minute and maximum to 5 minutes
        var min = Math.min(60000, this.collection.getMinDuration()),
            max = Math.min(300000, this.collection.getMaxDuration());

        // Clear paper
        this.paper.clear();

        // Center point
        var y = this.paper.height / 2 + 3,
            leftOffset = 0,
            rightOffset = 0,
            x = 0,
            self = this;

        this.collection.each(function (snapshot, index) {

            var distanceWeight = self.distanceWeight(index, min, max),
                snapshotWeight = self.snapshotWeight(index);

            // Weight by duration between snapshots
            var distance = 45 * distanceWeight;

            // Weight by amount of differences between snapshots
            var radius = 12 * snapshotWeight;

            x += (radius * 2);

            if (index === 0) {

                // Left offset
                leftOffset = x;

            } else {

                // Move right by distance
                x += distance;
            }

            if (index === self.collection.length - 1) {

                // Right offset
                rightOffset = radius;
            }

            var previousSnapshot = self.collection.at(index - 1);

            // Render duration between snapshots
            self.renderDuration(previousSnapshot, snapshot, x, y, radius, distance);

            // Render snapshot
            var snapshotElement = self.renderSnapshot(snapshot, index, x, y, radius);
            self.snapshotElements.push(snapshotElement);

            // Current snapshot
            if (index === self.currentSnapshotIndex) {

                // Render pointer on current snapshot
                self.renderPointer(x, radius);
            }
        });

        // Render timeline
        this.renderTimeline(leftOffset, y, x);

        // Absolute width
        this.width = leftOffset + x + rightOffset;

        // Focus
        this.focus();

        // View attributes
        var attributes = {

            first: this.collection.first().toJSON(),
            last: this.collection.last().toJSON()

        }

        // Template for bottom container
        var bottomContainerOutput = this.template.bottomContainer(attributes);

        // Update bottom container
        this.bottomContainer.html(bottomContainerOutput, bottomContainerOutput);
    },

    /* Update */

    update: function (collection, currentSnapshotIndex, filename, courseRoute) {

        this.collection = collection;
        this.courseRoute = courseRoute;

        // No need to show timeline
        if (this.collection.length === 1) {
            return;
        }

        // Show view if necessary
        this.$el.show();

        // Calculate differences between snapshots before continuing
        this.differences = this.collection.getDifferences();

        this.currentSnapshotIndex = currentSnapshotIndex;
        this.filename = filename;

        // Render if user is not dragging
        if (!this.dragging) {
            this.render();
        }
    },

    /* Events */

    didResize: function () {

        // Rendering finished
        if (this.snapshotElements.length === this.collection.length) {

            // Cx of the current snapshot element
            var cx = this.snapshotElements[this.currentSnapshotIndex].attr('cx');

            this.render();
            this.centerOn(cx);
        }
    },

    dragStart: function () {

        this.dragging = true;
    },

    dragEnd: function () {

        this.dragging = false;
        this.pointerSetOffsetX = 0;

        this.stopScroll();
        this.render();
    },

    dragMove: function (dx, dy, x) {

        // Move pointer set
        this.pointerSet.transform('T ' + (this.pointerSetOffsetX + dx) + ', 0');

        var viewWidth = $(this.paper.canvas).width(),
            canvasOffset = $(this.paper.canvas).offset(),
            leftOffset = canvasOffset.left,
            rightOffset = canvasOffset.left + viewWidth;

        // Move timeline to left
        if (x < leftOffset + 50) {

            this.startScroll(-5);

            return;
        }

        // Move timeline to right
        if (x > rightOffset - 50) {

            this.startScroll(5);

            return;
        }

        this.stopScroll();
    },

    dragOver: function (element) {

        // Snapshot element
        if (element.data('snapshot')) {
            this.parentView.navigate(element.data('snapshot'), element.data('file'), { course: this.courseRoute });
        }
    },

    /* Actions */

    startScroll: function (dx) {

        if (this.scroll) {
            return;
        }

        var self = this;

        // Scroll dx 60 times a second
        this.scroll = setInterval(function () {

            self.moveTimeline(dx);

        }, 1000 / 60);
    },

    stopScroll: function () {

        if (this.scroll) {
            clearInterval(this.scroll);
            this.scroll = false;
        }
    }
});
;

codebrowser.view.StudentsView = codebrowser.view.ListBaseView.extend({

    id: 'students-container',
    template: Handlebars.templates.StudentsContainer,

    /* Render */

    renderTemplate: function () {

        // View attributes
        var attributes = {

            query: this.query,
            students: this.collection.toJSON(),
            instanceId: this.collection.instanceId

        }

        if (this.course && this.exercise) {
            attributes = _.extend(attributes, { course: this.course.toJSON(), exercise: this.exercise.toJSON() });
        }

        // Template
        return this.template(attributes);
    }
});
;

codebrowser.controller.ViewController = {

    view: null,

    isActive: function (view) {

        return this.view === view;
    },

    push: function (view, render) {

        // Already active
        if (this.isActive(view)) {
            return;
        }

        // Remove previous view
        if (this.view) {
            this.view.remove();
        }

        this.view = view;

        // Should render view
        if (render) {
            this.view.render();
        }

        // Set to container
        $(config.view.container).html(this.view.el);
    }
}
;

codebrowser.router.BaseRouter = Backbone.Router.extend({

    loadingView: new codebrowser.view.LoadingView(),

    routes: {

        '':          'root',
        '*notFound': 'notFound'

    },

    /* Initialise */

    initialize: function () {

        this.rootView = new codebrowser.view.RootView();
        this.errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-error', message: 'Oops!' } });
    },

    /* Actions */

    root: function () {

        var self = this;

        this.rootView.collection = new codebrowser.collection.InstanceCollection();

        this.fetchModel(this.rootView.collection, true, function () {

            self.rootView.render();
            codebrowser.controller.ViewController.push(self.rootView);
        });
    },

    notFound: function () {

        codebrowser.controller.ViewController.push(this.errorView, true);
    },

    fetchModel: function (model, useCache, onSuccess, options) {

        var self = this;

        model.on('request', function () {

            // Loading
            codebrowser.controller.ViewController.push(self.loadingView, true);
        });

        model.fetch({

            traditional: true,
            data: options ? options : '',
            cache: useCache,
            expires: useCache ? config.cache.expires : 0,

            success: function (model, response, options) {

                onSuccess(model, response, options);
            },

            error: function () {

                self.notFound();
            }
        });
    }
});
;

codebrowser.router.CourseRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId/courses(/)':                     'courses',
        ':instanceId/students/:studentId(/)':         'navigation',
        ':instanceId/students/:studentId/courses(/)': 'courses'

    },

    /* Initialise */

    initialize: function () {

        this.courseView = new codebrowser.view.CoursesView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigation: function (instanceId, studentId) {

        codebrowser.app.course.navigate('#/' +
                                        instanceId +
                                        '/students/' +
                                        studentId +
                                        '/courses', { replace: true });
    },

    courses: function (instanceId, studentId) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(studentId ? 2 : 1, function () {

            self.courseView.render();
            codebrowser.controller.ViewController.push(self.courseView);
        });

        if (studentId) {

            var student = codebrowser.model.Student.findOrCreate({ instanceId: instanceId, id: studentId });

            // Fetch student
            this.fetchModel(student, true, function () {

                self.courseView.student = student;
                fetchSynced();
            });
        }

        var courseCollection = new codebrowser.collection.CourseCollection(null, { instanceId: instanceId, studentId: studentId });

        this.courseView.collection = courseCollection;

        // Fetch course collection
        this.fetchModel(courseCollection, true, fetchSynced);
    }
});
;

codebrowser.router.ExerciseRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId/courses/:courseId(/)':                               'navigateToCourseExercises',
        ':instanceId/courses/:courseId/exercises(/)':                     'courseExercises',
        ':instanceId/students/:studentId/courses/:courseId(/)':           'navigation',
        ':instanceId/students/:studentId/courses/:courseId/exercises(/)': 'exercises'

    },

    /* Initialise */

    initialize: function () {

        this.exerciseView = new codebrowser.view.ExercisesView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigateToCourseExercises: function (instanceId, courseId) {

        codebrowser.app.exercise.navigate('#/' +
                                          instanceId +
                                          '/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });

    },

    navigation: function (instanceId, studentId, courseId) {

        codebrowser.app.exercise.navigate('#/' +
                                          instanceId +
                                          '/students/' +
                                          studentId +
                                          '/courses/' +
                                          courseId +
                                          '/exercises', { replace: true });
    },

    courseExercises: function (instanceId, courseId) {

        this.exercises(instanceId, null, courseId);
    },

    exercises: function (instanceId, studentId, courseId) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {

            self.exerciseView.render();
            codebrowser.controller.ViewController.push(self.exerciseView);
        });

        if (studentId) {

            var student = codebrowser.model.Student.findOrCreate({ instanceId: instanceId, id: studentId });

            // Fetch student
            this.fetchModel(student, true, function () {

                self.exerciseView.student = student;
                fetchSynced();
            });

        } else {

            fetchSynced();
        }

        var course = codebrowser.model.Course.findOrCreate({ instanceId: instanceId, id: courseId }),
            exerciseCollection = new codebrowser.collection.ExerciseCollection(null, { instanceId: instanceId,
                                                                                       studentId: studentId,
                                                                                       courseId: courseId });
        // Fetch course
        this.fetchModel(course, true, function () {

            self.exerciseView.course = course;
            fetchSynced();
        });

        this.exerciseView.collection = exerciseCollection;

        // Fetch exercise collection
        this.fetchModel(exerciseCollection, true, fetchSynced);
    }
});
;

codebrowser.router.InstanceRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId(/)': 'instance'

    },

    /* Initialise */

    initialize: function () {

        this.instanceView = new codebrowser.view.InstanceView();
    },

    /* Actions */

    instance: function (instanceId) {

        var self = this,
            instance = codebrowser.model.Instance.findOrCreate({ id: instanceId });

        // Wait for fetch to be in sync
        var fetchSynced = _.after(1, function () {

            self.instanceView.render();
            codebrowser.controller.ViewController.push(self.instanceView);
        });

        // Fetch instance
        this.fetchModel(instance, true, function () {

            self.instanceView.instance = instance;
            fetchSynced();
        });
    }
});
;

codebrowser.router.SnapshotRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId/students/:studentId/courses/:courseId/exercises/:exerciseId(/)':                                                  'snapshot',
        ':instanceId/students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots(/)':                                        'snapshot',
        ':instanceId/students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId(/)':                            'snapshot',
        ':instanceId/students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId?level=:level(/)': 'snapshot',

        ':instanceId/courses/:courseId/exercises/:exerciseId/students/:studentId(/)':                                                  'navigation',
        ':instanceId/courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots(/)':                                        'navigation',
        ':instanceId/courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId(/)':                            'navigation',
        ':instanceId/courses/:courseId/exercises/:exerciseId/students/:studentId/snapshots/:snapshotId/files/:fileId?level=:level(/)': 'navigation'

    },

    studentId: null,
    exerciseId: null,
    course: null,
    exercise: null,

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigation: function (instanceId, courseId, exerciseId, studentId, snapshotId, fileId, level) {

        this.snapshot(instanceId, studentId, courseId, exerciseId, snapshotId, fileId, level, { courseRoute: true });
    },

    snapshot: function (instanceId, studentId, courseId, exerciseId, snapshotId, fileId, level, options) {

        var self = this,
            snapshotCollection;

        // Snapshot View
        if (!codebrowser.controller.ViewController.isActive(this.snapshotView)) {
            this.snapshotView = new codebrowser.view.SnapshotView();
        }

        if (!this.snapshotView.collection || (this.studentId !== studentId || this.exerciseId !== exerciseId)) {

            snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { instanceId: instanceId,
                                                                                       studentId: studentId,
                                                                                       courseId: courseId,
                                                                                       exerciseId: exerciseId });

            // Set snapshot level
            snapshotCollection.level = level || localStorage.getItem(config.storage.cache.snapshot.level) || 'code';

            this.studentId = studentId;
            this.exerciseId = exerciseId;
            this.snapshotView.collection = snapshotCollection;

        } else {

            snapshotCollection = this.snapshotView.collection;
        }

        if (options && options.courseRoute) {
            this.snapshotView.courseRoute = true;
        }

        // Wait for fetches to be in sync
        var fetchSynced = _.after(5, function () {

            self.synced(snapshotId, fileId, snapshotCollection);
        });

        /* Fetch */

        var student = codebrowser.model.Student.findOrCreate({ instanceId: instanceId, id: studentId });

        // Fetch student
        this.fetchModel(student, true, function () {

            self.snapshotView.student = student;
            fetchSynced();
        });

        // Fetch course
        var course = codebrowser.model.Course.findOrCreate({ instanceId: instanceId, id: courseId });

        this.fetchModel(course, true, function () {

            self.course = course;
            fetchSynced();
        });

        var exercise = codebrowser.model.Exercise.findOrCreate({ id: exerciseId, courseId: courseId });

        // Fetch exercise
        this.fetchModel(exercise, true, function () {

            self.exercise = exercise;
            fetchSynced();
        });

        // Fetch snapshot collection
        this.fetchModel(snapshotCollection, true, function () {

            // Exercise has no snapshots
            if (snapshotCollection.length === 0) {
                self.notFound();
                return;
            }

            fetchSynced();

        }, { level: snapshotCollection.level });

        // Fetch all related files
        snapshotCollection.fetchFiles(function (error) {

            if (error) {
                self.notFound();
                return;
            }

            fetchSynced();
        });
    },

    synced: function (snapshotId, fileId, snapshotCollection) {

        var snapshot;

        // No snapshot ID specified, navigate to first snapshot
        if (!snapshotId) {

            snapshot = snapshotCollection.at(0);
            this.snapshotView.navigate(snapshot, null, { replace: true });

            return;
        }

        // Snapshot
        snapshot = snapshotCollection.get(snapshotId) || snapshotCollection.at(0);

        // Invalid snapshot ID
        if (!snapshot) {

            this.notFound();

            return;
        }

        // No file ID specified, navigate to first file
        if (!fileId) {

            this.snapshotView.navigate(snapshot, null);

            return;
        }

        // Invalid file ID
        if (!snapshot.get('files').get(fileId)) {

            if (!snapshot.get('files').at(0)) {
                this.notFound();
            } else {
                this.snapshotView.navigate(snapshot, null);
            }

            return;
        }

        snapshot.set('exercise', this.exercise);
        snapshot.set('course', this.course);

        codebrowser.controller.ViewController.push(this.snapshotView);
        this.snapshotView.update(snapshot, fileId);
    }
});
;

codebrowser.router.StudentRouter = codebrowser.router.BaseRouter.extend({

    routes: {

        ':instanceId/students(/)':                                                    'students',
        ':instanceId/courses/:courseId/exercises/:exerciseId(/)':                     'navigation',
        ':instanceId/courses/:courseId/exercises/:exerciseId/students(/)':            'exerciseStudents'

    },

    /* Initialise */

    initialize: function () {

        this.studentView = new codebrowser.view.StudentsView();
    },

    /* Actions */

    notFound: function () {

        var errorView = new codebrowser.view.NotFoundErrorView();
        codebrowser.controller.ViewController.push(errorView, true);
    },

    navigation: function (instanceId, courseId, exerciseId) {

        codebrowser.app.student.navigate('#/' +
                                         instanceId +
                                         '/courses/' +
                                         courseId +
                                         '/exercises/' +
                                         exerciseId +
                                         '/students', { replace: true });

    },

    exerciseStudents: function (instanceId, courseId, exerciseId) {

        this.students(instanceId, { courseId: courseId, exerciseId: exerciseId });

    },

    students: function (instanceId, options) {

        var self = this;

        // Wait for fetches to be in sync
        var fetchSynced = _.after(3, function () {

            self.studentView.render();
            codebrowser.controller.ViewController.push(self.studentView);
        });

        if (options) {

            options.instanceId = instanceId;

            var courseFetched = _.after(1, function () {

                var exercise = codebrowser.model.Exercise.findOrCreate({ id: options.exerciseId });

                // Fetch exercise
                self.fetchModel(exercise, true, function () {

                    self.studentView.exercise = exercise;
                    fetchSynced();
                });
            });

            var course = codebrowser.model.Course.findOrCreate({ instanceId: instanceId, id: options.courseId });

            // Fetch course
            this.fetchModel(course, true, function () {

                self.studentView.course = course;
                self.studentView.exercise = null;
                courseFetched();
                fetchSynced();
            });

        } else {

            options = { instanceId: instanceId };

            self.studentView.course = null;
            self.studentView.exercise = null;
            fetchSynced();
            fetchSynced();
        }

        var studentCollection = new codebrowser.collection.StudentCollection(null, options);

        this.studentView.collection = studentCollection;

        // Fetch student collection
        this.fetchModel(studentCollection, true, fetchSynced);
    }
});
