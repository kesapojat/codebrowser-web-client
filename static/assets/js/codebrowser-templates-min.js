this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.CoursesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"'>"+p((d=a&&a.student,d=null==d||d===!1?d:d.name,typeof d===o?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n        "}function g(a){var b,c="";return c+=" "+p((b=a&&a.student,b=null==b||b===!1?b:b.name,typeof b===o?b.apply(a):b))+" — "}function h(a,b,d){var e,f,g,h="";return h+="\n\n                <tr>\n\n                    <td class='index'>"+p((f=c.index||a&&a.index,g={hash:{},data:b},f?f.call(a,null==b||b===!1?b:b.index,g):q.call(a,"index",null==b||b===!1?b:b.index,g)))+"</td>\n\n                    ",e=c["if"].call(a,d&&d.studentId,{hash:{},inverse:r.program(8,j,b),fn:r.programWithDepth(6,i,b,d),data:b}),(e||0===e)&&(h+=e),h+="\n\n                    <td>"+p((e=a&&a.exercises,e=null==e||e===!1?e:e.length,typeof e===o?e.apply(a):e))+"</td>\n\n                </tr>\n\n            "}function i(a,b,d){var e,f,g="";return g+="\n\n                        <td class='link'><a href='./#/students/"+p((e=d&&d.studentId,typeof e===o?e.apply(a):e))+"/courses/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"/exercises'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"</a></td>\n\n                    "}function j(a,b){var d,e,f="";return f+="\n\n                        <td class='link'><a href='./#/courses/",(e=c.id)?d=e.call(a,{hash:{},data:b}):(e=a&&a.id,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"/exercises'>",(e=c.name)?d=e.call(a,{hash:{},data:b}):(e=a&&a.name,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"</a></td>\n\n                    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var k,l,m,n="",o="function",p=this.escapeExpression,q=c.helperMissing,r=this,s=c.blockHelperMissing;return n+="<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ",k=c["if"].call(b,b&&b.studentId,{hash:{},inverse:r.noop,fn:r.program(1,f,e),data:e}),(k||0===k)&&(n+=k),n+="\n\n        <li class='active'>Courses</li>\n\n    </ul>\n\n    <h2>\n        ",k=c["if"].call(b,b&&b.studentId,{hash:{},inverse:r.noop,fn:r.program(3,g,e),data:e}),(k||0===k)&&(n+=k),n+=" Courses ("+p((k=b&&b.courses,k=null==k||k===!1?k:k.length,typeof k===o?k.apply(b):k))+')\n\n        <span class="pull-right">\n            <div class="input-append">\n\n                <input type="text" class="span2" placeholder="Search" data-id="query-string" />\n                <button class="btn" data-action="search" title="Search for courses">\n                    <i class="icon-search"></i>\n                </button>\n\n            </div>\n        </span>\n    </h2>\n\n    <table class=\'table table-hover\'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n                <th>Exercises</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ',m={hash:{},inverse:r.noop,fn:r.programWithDepth(5,h,e,b),data:e},(l=c.courses)?k=l.call(b,m):(l=b&&b.courses,k=typeof l===o?l.call(b,m):l),c.courses||(k=s.call(b,k,{hash:{},inverse:r.noop,fn:r.programWithDepth(5,h,e,b),data:e})),(k||0===k)&&(n+=k),n+="\n\n        </tbody>\n\n    </table>\n\n</section>\n"}),this.Handlebars.templates.EditorSettingsContainer=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<footer>\n\n    <a href='#editor-settings' data-toggle='modal' class='pull-right'><i class='icon-wrench icon-gray'></i></a>\n\n    <div id='editor-settings' class='modal hide fade' tabindex='-1' data-backdrop='false'>\n\n        <div class='modal-header'>\n\n            <header>\n\n                <button type='button' class='close' data-dismiss='modal'>×</button>\n\n                <h1>Settings</h1>\n\n            </header>\n\n        </div>\n\n        <div class='modal-body'>\n\n            <form class='form-horizontal'>\n\n                <fieldset>\n\n                    <div class='control-group'>\n\n                        <label class='checkbox'>\n                            <input type='checkbox' data-id='ignore-empty-lines' checked> Ignore empty lines (improves diff results)\n                        </label>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='theme'>Theme</label>\n\n                        <div class='controls'>\n\n                            <select data-id='theme'>\n                                <option value='ace/theme/light'>Light</option>\n                                <option value='ace/theme/dark'>Dark</option>\n                            </select>\n\n                        </div>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='font-size'>Font size</label>\n\n                        <div class='controls'>\n\n                            <select data-id='font-size'>\n                                <option value='11'>Small</option>\n                                <option value='12' selected>Normal</option>\n                                <option value='13'>Larger</option>\n                                <option value='14'>Large</option>\n                                <option value='15'>Extra Large</option>\n                            </select>\n\n                        </div>\n\n                </fieldset>\n\n            </form>\n\n        </div>\n\n        <div class='modal-footer'>\n\n            <button class='btn' data-dismiss='modal'>Cancel</button>\n            <button data-action='save' class='btn btn-primary' data-dismiss='modal'>Save</button>\n\n        </div>\n\n</footer>\n"}),this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){function f(){return"\n\n        <section class='split'>\n\n            <div class='previous'><span>Previous</span></div>\n            <div class='current'><span>Current</span></div>\n\n        </section>\n\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k=c.helperMissing,l=this.escapeExpression,m="function",n=this;return j+="<header>\n\n    <section>\n\n        <h1>"+l((h=c.filename||b&&b.filename,i={hash:{},data:e},h?h.call(b,b&&b.name,i):k.call(b,"filename",b&&b.name,i)))+"</h1>\n\n        <span class='pull-right'>\n\n            + "+l((h=c.duration||b&&b.duration,i={hash:{},data:e},h?h.call(b,(g=b&&b.snapshot,null==g||g===!1?g:g.timestamp),(g=b&&b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.timestamp),i):k.call(b,"duration",(g=b&&b.snapshot,null==g||g===!1?g:g.timestamp),(g=b&&b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.timestamp),i)))+"\n\n            <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n               data-original-title='\n\n                    <time>"+l((h=c.date||b&&b.date,i={hash:{},data:e},h?h.call(b,(g=b&&b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.timestamp),i):k.call(b,"date",(g=b&&b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.timestamp),i)))+" –</time>\n                    <time>"+l((h=c.date||b&&b.date,i={hash:{},data:e},h?h.call(b,(g=b&&b.snapshot,null==g||g===!1?g:g.timestamp),i):k.call(b,"date",(g=b&&b.snapshot,null==g||g===!1?g:g.timestamp),i)))+"</time>\n\n               '\n\n               data-content='\n\n                <dl class=\"dl-horizontal pull-left\">\n\n                  <dt>Change</dt>\n                  <dd>",(h=c.percentageOfChange)?g=h.call(b,{hash:{},data:e}):(h=b&&b.percentageOfChange,g=typeof h===m?h.call(b,{hash:{},data:e}):h),j+=l(g)+" %</dd>\n\n                  <dt>Insert</dt>\n                  <dd>"+l((g=b&&b.difference,g=null==g||g===!1?g:g.insert,typeof g===m?g.apply(b):g))+" "+l((h=c.pluralize||b&&b.pluralize,i={hash:{},data:e},h?h.call(b,(g=b&&b.difference,null==g||g===!1?g:g.insert),"line",i):k.call(b,"pluralize",(g=b&&b.difference,null==g||g===!1?g:g.insert),"line",i)))+"</dd>\n\n                  <dt>Replace</dt>\n                  <dd>"+l((g=b&&b.difference,g=null==g||g===!1?g:g.replace,typeof g===m?g.apply(b):g))+" "+l((h=c.pluralize||b&&b.pluralize,i={hash:{},data:e},h?h.call(b,(g=b&&b.difference,null==g||g===!1?g:g.replace),"line",i):k.call(b,"pluralize",(g=b&&b.difference,null==g||g===!1?g:g.replace),"line",i)))+"</dd>\n\n                  <dt>Delete</dt>\n                  <dd>"+l((g=b&&b.difference,g=null==g||g===!1?g:g["delete"],typeof g===m?g.apply(b):g))+" "+l((h=c.pluralize||b&&b.pluralize,i={hash:{},data:e},h?h.call(b,(g=b&&b.difference,null==g||g===!1?g:g["delete"]),"line",i):k.call(b,"pluralize",(g=b&&b.difference,null==g||g===!1?g:g["delete"]),"line",i)))+"</dd>\n\n                </dl>\n\n            '><i class='icon-info-sign icon-gray'></i></a>\n\n        </span>\n\n    </section>\n\n    ",g=c["if"].call(b,b&&b.split,{hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e}),(g||0===g)&&(j+=g),j+="\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+="<p class='alert ",(g=c["class"])?f=g.call(b,{hash:{},data:e}):(g=b&&b["class"],f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"'>",(g=c.message)?f=g.call(b,{hash:{},data:e}):(g=b&&b.message,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"</p>\n"}),this.Handlebars.templates.ExercisesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===p?e.call(a,{hash:{},data:b}):e),f+=q(d)+"'>"+q((d=a&&a.student,d=null==d||d===!1?d:d.name,typeof d===p?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n        "}function g(a,b){var d,e,f="";return f+="students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===p?e.call(a,{hash:{},data:b}):e),f+=q(d)+"/"}function h(a){var b,c="";return c+=" "+q((b=a&&a.student,b=null==b||b===!1?b:b.name,typeof b===p?b.apply(a):b))+" — "}function i(a,b,d){var e,f,g,h="";return h+="\n\n                <tr>\n\n                    <td class='index'>"+q((f=c.index||a&&a.index,g={hash:{},data:b},f?f.call(a,null==b||b===!1?b:b.index,g):r.call(a,"index",null==b||b===!1?b:b.index,g)))+"</td>\n\n                    ",e=c["if"].call(a,d&&d.studentId,{hash:{},inverse:s.programWithDepth(10,k,b,d),fn:s.programWithDepth(8,j,b,d),data:b}),(e||0===e)&&(h+=e),h+="\n\n                </tr>\n\n            "}function j(a,b,d){var e,f,g="";return g+="\n\n                        <td class='link'><a href='./#/students/"+q((e=d&&d.studentId,typeof e===p?e.apply(a):e))+"/courses/"+q((e=d&&d.courseId,typeof e===p?e.apply(a):e))+"/exercises/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===p?f.call(a,{hash:{},data:b}):f),g+=q(e)+"/snapshots'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===p?f.call(a,{hash:{},data:b}):f),g+=q(e)+"</a></td>\n\n                    "}function k(a,b,d){var e,f,g="";return g+="\n\n                        <td class='link'><a href='./#/courses/"+q((e=d&&d.courseId,typeof e===p?e.apply(a):e))+"/exercises/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===p?f.call(a,{hash:{},data:b}):f),g+=q(e)+"/students'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===p?f.call(a,{hash:{},data:b}):f),g+=q(e)+"</a></td>\n\n                    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var l,m,n,o="",p="function",q=this.escapeExpression,r=c.helperMissing,s=this,t=c.blockHelperMissing;return o+="<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ",l=c["if"].call(b,b&&b.studentId,{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(l||0===l)&&(o+=l),o+="\n\n        <li><a href='./#/",l=c["if"].call(b,b&&b.studentId,{hash:{},inverse:s.noop,fn:s.program(3,g,e),data:e}),(l||0===l)&&(o+=l),o+="courses'>Courses</a> <span class='divider'>/</span></li>\n        <li><a href='./#/",l=c["if"].call(b,b&&b.studentId,{hash:{},inverse:s.noop,fn:s.program(3,g,e),data:e}),(l||0===l)&&(o+=l),o+="courses/",(m=c.courseId)?l=m.call(b,{hash:{},data:e}):(m=b&&b.courseId,l=typeof m===p?m.call(b,{hash:{},data:e}):m),o+=q(l)+"'>"+q((l=b&&b.course,l=null==l||l===!1?l:l.name,typeof l===p?l.apply(b):l))+"</a> <span class='divider'>/</span></li>\n        <li class='active'>Exercises</li>\n\n    </ul>\n\n    <h2>\n        ",l=c["if"].call(b,b&&b.studentId,{hash:{},inverse:s.noop,fn:s.program(5,h,e),data:e}),(l||0===l)&&(o+=l),o+=" "+q((l=b&&b.course,l=null==l||l===!1?l:l.name,typeof l===p?l.apply(b):l))+" — Exercises ("+q((l=b&&b.exercises,l=null==l||l===!1?l:l.length,typeof l===p?l.apply(b):l))+')\n\n        <span class="pull-right">\n            <div class="input-append">\n\n                <input type="text" class="span2" placeholder="Search" data-id="query-string" />\n                <button class="btn" data-action="search" title="Search for exercises">\n                    <i class="icon-search"></i>\n                </button>\n\n            </div>\n        </span>\n    </h2>\n\n    <table class=\'table table-hover\'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ',n={hash:{},inverse:s.noop,fn:s.programWithDepth(7,i,e,b),data:e},(m=c.exercises)?l=m.call(b,n):(m=b&&b.exercises,l=typeof m===p?m.call(b,n):m),c.exercises||(l=t.call(b,l,{hash:{},inverse:s.noop,fn:s.programWithDepth(7,i,e,b),data:e})),(l||0===l)&&(o+=l),o+="\n\n        </tbody>\n\n    </table>\n\n</section>\n"}),this.Handlebars.templates.NavigationBarContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n\n            <li><a href='./#/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"'>"+k((d=a&&a.course,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/exercises/",(e=c.exerciseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.exerciseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"'>"+k((d=a&&a.exercise,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/exercises/",(e=c.exerciseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.exerciseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/exercises/",(e=c.exerciseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.exerciseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"'>"+k((d=a&&a.student,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n\n        "}function g(a,b){var d,e,f="";return f+="\n\n            <li><a href='./#/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"'>"+k((d=a&&a.student,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"'>"+k((d=a&&a.course,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='./#/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"/exercises/",(e=c.exerciseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.exerciseId,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"'>"+k((d=a&&a.exercise,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this;return i+="<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ",h=c["if"].call(b,b&&b.courseRoute,{hash:{},inverse:l.program(3,g,e),fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+="\n\n        <li class='active'>Snapshots</li>\n\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.RootContainer=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<section>\n\n    <ul class='breadcrumb'>\n        <li class='active'>Home</li>\n    </ul>\n\n    <ul class='nav nav-tabs nav-stacked selection'>\n        <li><a href='./#/students'>Students</a></li>\n        <li><a href='./#/courses'>Courses</a></li>\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.SnapshotFilesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f="";return f+="\n\n            ",e=c["if"].call(a,null==b||b===!1?b:b.key,{hash:{},inverse:p.noop,fn:p.program(2,g,b),data:b}),(e||0===e)&&(f+=e),f+="\n\n            ",e=c.each.call(a,a,{hash:{},inverse:p.noop,fn:p.programWithDepth(4,h,b,d),data:b}),(e||0===e)&&(f+=e),f+="\n\n        "}function g(a,b){var c,d="";return d+="\n\n                <li class='folder'><i class='icon-folder-open icon-gray'></i>"+n((c=null==b||b===!1?b:b.key,typeof c===m?c.apply(a):c))+"</li>\n\n            "}function h(a,b,d){var e,f="";return f+="\n\n                ",e=c["if"].call(a,d&&d.courseRoute,{hash:{},inverse:p.programWithDepth(7,j,b,d),fn:p.programWithDepth(5,i,b,d),data:b}),(e||0===e)&&(f+=e),f+="\n\n            "}function i(a,b,d){var e,f,g,h="";return h+="\n\n                    <li data-id='",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===m?f.call(a,{hash:{},data:b}):f),h+=n(e)+"'><a href='./#/courses/"+n((e=d&&d.courseId,typeof e===m?e.apply(a):e))+"/exercises/"+n((e=d&&d.exerciseId,typeof e===m?e.apply(a):e))+"/students/"+n((e=d&&d.studentId,typeof e===m?e.apply(a):e))+"/snapshots/"+n((e=d&&d.id,typeof e===m?e.apply(a):e))+"/files/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===m?f.call(a,{hash:{},data:b}):f),h+=n(e)+"'><i class='icon-file icon-gray'></i> "+n((f=c.filename||a&&a.filename,g={hash:{},data:b},f?f.call(a,a&&a.name,g):o.call(a,"filename",a&&a.name,g)))+"</a></li>\n\n                "}function j(a,b,d){var e,f,g,h="";return h+="\n\n                    <li data-id='",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===m?f.call(a,{hash:{},data:b}):f),h+=n(e)+"'><a href='./#/students/"+n((e=d&&d.studentId,typeof e===m?e.apply(a):e))+"/courses/"+n((e=d&&d.courseId,typeof e===m?e.apply(a):e))+"/exercises/"+n((e=d&&d.exerciseId,typeof e===m?e.apply(a):e))+"/snapshots/"+n((e=d&&d.id,typeof e===m?e.apply(a):e))+"/files/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===m?f.call(a,{hash:{},data:b}):f),h+=n(e)+"'><i class='icon-file icon-gray'></i> "+n((f=c.filename||a&&a.filename,g={hash:{},data:b},f?f.call(a,a&&a.name,g):o.call(a,"filename",a&&a.name,g)))+"</a></li>\n\n                "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var k,l="",m="function",n=this.escapeExpression,o=c.helperMissing,p=this;return l+="<header>\n\n    <h1><i class='icon-folder-close icon-gray'></i> "+n((k=b&&b.exercise,k=null==k||k===!1?k:k.name,typeof k===m?k.apply(b):k))+"</h1>\n\n</header>\n\n<ul>\n\n        ",k=c.each.call(b,b&&b.files,{hash:{},inverse:p.noop,fn:p.programWithDepth(1,f,e,b),data:e}),(k||0===k)&&(l+=k),l+="\n\n</ul>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+="<div class='row'>\n\n    <div class='span2'>\n\n        <button id='toggleBrowser' type='button' class='btn' data-toggle='button'><i class='icon-folder icon-gray'></i></button>\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>",(g=c.current)?f=g.call(b,{hash:{},data:e}):(g=b&&b.current,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+" / ",(g=c.total)?f=g.call(b,{hash:{},data:e}):(g=b&&b.total,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.SnapshotTagsContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h="";return h+="\n\n    <ul>\n\n        ",f={hash:{},inverse:l.noop,fn:l.program(2,g,b),data:b},(e=c.tags)?d=e.call(a,f):(e=a&&a.tags,d=typeof e===j?e.call(a,f):e),c.tags||(d=m.call(a,d,{hash:{},inverse:l.noop,fn:l.program(2,g,b),data:b})),(d||0===d)&&(h+=d),h+="\n\n    </ul>\n\n"}function g(a,b){var d,e,f="";return f+="\n\n            <li>",(e=c.text)?d=e.call(a,{hash:{},data:b}):(e=a&&a.text,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+" <button type='button' data-action='delete' data-id='",(e=c.id)?d=e.call(a,{hash:{},data:b}):(e=a&&a.id,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"' class='delete'>×</button></li>\n\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<header>\n\n    <h1><i class='icon-tags icon-gray'></i> Tags</h1>\n\n</header>\n\n",h=c["if"].call(b,b&&b.tags,{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+="\n\n<div class='input-append'>\n\n    <form>\n\n        <input type='text' data-id='tag' id='appendedInputButton' placeholder='New tag…'>\n        <button type='submit' data-action='create' class='btn'>+</button>\n\n    </form>\n\n</div>\n"}),this.Handlebars.templates.SnapshotsTimelineBottomContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h,i="",j=c.helperMissing,k=this.escapeExpression;return i+="<div class='row'>\n\n    <div class='span2'>\n\n        <time>"+k((g=c.date||b&&b.date,h={hash:{},data:e},g?g.call(b,(f=b&&b.first,null==f||f===!1?f:f.timestamp),!1,h):j.call(b,"date",(f=b&&b.first,null==f||f===!1?f:f.timestamp),!1,h)))+"</time>\n\n    </div>\n\n    <div class='center text-center'>. . .</div>\n\n    <div class='span3 pull-right'>\n\n        <time class='pull-right'>"+k((g=c.date||b&&b.date,h={hash:{},data:e},g?g.call(b,(f=b&&b.last,null==f||f===!1?f:f.timestamp),!1,h):j.call(b,"date",(f=b&&b.last,null==f||f===!1?f:f.timestamp),!1,h)))+" (+ "+k((g=c.duration||b&&b.duration,h={hash:{},data:e},g?g.call(b,(f=b&&b.last,null==f||f===!1?f:f.timestamp),(f=b&&b.first,null==f||f===!1?f:f.timestamp),h):j.call(b,"duration",(f=b&&b.last,null==f||f===!1?f:f.timestamp),(f=b&&b.first,null==f||f===!1?f:f.timestamp),h)))+")</time>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.StudentsContainer=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="\n            <li><a href='./#/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/"+p((b=a&&a.course,b=null==b||b===!1?b:b.id,typeof b===o?b.apply(a):b))+"'>"+p((b=a&&a.course,b=null==b||b===!1?b:b.name,typeof b===o?b.apply(a):b))+"</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/"+p((b=a&&a.course,b=null==b||b===!1?b:b.id,typeof b===o?b.apply(a):b))+"/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='./#/courses/"+p((b=a&&a.course,b=null==b||b===!1?b:b.id,typeof b===o?b.apply(a):b))+"/exercises/"+p((b=a&&a.exercise,b=null==b||b===!1?b:b.id,typeof b===o?b.apply(a):b))+"'>"+p((b=a&&a.exercise,b=null==b||b===!1?b:b.name,typeof b===o?b.apply(a):b))+"</a> <span class='divider'>/</span></li>\n        "}function g(a){var b,c="";return c+=" "+p((b=a&&a.course,b=null==b||b===!1?b:b.name,typeof b===o?b.apply(a):b))+" — "+p((b=a&&a.exercise,b=null==b||b===!1?b:b.name,typeof b===o?b.apply(a):b))+" — "}function h(a,b,d){var e,f,g,h="";return h+="\n\n                <tr>\n\n                    <td class='index'>"+p((f=c.index||a&&a.index,g={hash:{},data:b},f?f.call(a,null==b||b===!1?b:b.index,g):q.call(a,"index",null==b||b===!1?b:b.index,g)))+"</td>\n\n                    ",e=c["if"].call(a,d&&d.course,{hash:{},inverse:r.program(8,j,b),fn:r.programWithDepth(6,i,b,d),data:b}),(e||0===e)&&(h+=e),h+="\n\n                </tr>\n\n            "}function i(a,b,d){var e,f,g="";return g+="\n\n                        <td class='link'><a href='./#/courses/"+p((e=d&&d.course,e=null==e||e===!1?e:e.id,typeof e===o?e.apply(a):e))+"/exercises/"+p((e=d&&d.exercise,e=null==e||e===!1?e:e.id,typeof e===o?e.apply(a):e))+"/students/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"/snapshots'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"</a></td>\n\n                    "}function j(a,b){var d,e,f="";return f+="\n\n                        <td class='link'><a href='./#/students/",(e=c.id)?d=e.call(a,{hash:{},data:b}):(e=a&&a.id,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"/courses'>",(e=c.name)?d=e.call(a,{hash:{},data:b}):(e=a&&a.name,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"</a></td>\n\n                    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var k,l,m,n="",o="function",p=this.escapeExpression,q=c.helperMissing,r=this,s=c.blockHelperMissing;return n+="<section>\n\n    <ul class='breadcrumb'>\n        <li><a href='./'>Home</a> <span class='divider'>/</span></li>\n\n        ",k=c["if"].call(b,b&&b.course,{hash:{},inverse:r.noop,fn:r.program(1,f,e),data:e}),(k||0===k)&&(n+=k),n+="\n\n        <li class='active'>Students</li>\n    </ul>\n\n    <h2>\n        ",k=c["if"].call(b,b&&b.course,{hash:{},inverse:r.noop,fn:r.program(3,g,e),data:e}),(k||0===k)&&(n+=k),n+=" Students ("+p((k=b&&b.students,k=null==k||k===!1?k:k.length,typeof k===o?k.apply(b):k))+')\n\n        <span class="pull-right">\n            <div class="input-append">\n\n                <input type="text" class="span2" placeholder="Search" data-id="query-string" />\n                <button class="btn" data-action="search" title="Search for students">\n                    <i class="icon-search"></i>\n                </button>\n\n            </div>\n        </span>\n    </h2>\n\n    <table class=\'table table-hover\'>\n\n        <thead>\n            <tr>\n\n                <th>#</th>\n                <th>Name</th>\n\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ',m={hash:{},inverse:r.noop,fn:r.programWithDepth(5,h,e,b),data:e},(l=c.students)?k=l.call(b,m):(l=b&&b.students,k=typeof l===o?l.call(b,m):l),c.students||(k=s.call(b,k,{hash:{},inverse:r.noop,fn:r.programWithDepth(5,h,e,b),data:e})),(k||0===k)&&(n+=k),n+="\n\n        </tbody>\n\n    </table>\n\n</section>\n"});