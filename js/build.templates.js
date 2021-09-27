this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.admin-button-group"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"group-buttons-label\">\r\n  <p class=\"title\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.adminButtonGroup.title",{"name":"T","hash":{},"data":data}))
    + "</p>\r\n</div>\r\n<div class=\"group-buttons-holder\">\r\n  <div class=\"btn btn-create-group\" data-group=\"all\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.adminButtonGroup.actions.all",{"name":"T","hash":{},"data":data}))
    + "</div>\r\n  <div class=\"btn btn-create-group\" data-group=\"speakers\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.adminButtonGroup.actions.speakers",{"name":"T","hash":{},"data":data}))
    + "</div>\r\n  <div class=\"btn btn-create-group\" data-group=\"admins\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.adminButtonGroup.actions.admins",{"name":"T","hash":{},"data":data}))
    + "</div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.chat-header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"profile-image-holder {{#if isGroup}}group{{/if}}\">\r\n  <div class=\"profile-image\" style=\"background-image: url('{{auth avatar}}')\"></div>\r\n  <i class=\"fa fa-user\"></i>\r\n  <i class=\"fa fa-users\"></i>\r\n</div>\r\n<div>\r\n  <div class=\"chat-user-name\">{{ name }}</div>\r\n  {{#unless definition.group.readOnly}}\r\n    {{#if isGroup}}\r\n    <div class=\"chat-participants-name\">{{ usersInConversation }}</div>\r\n    {{/if}}\r\n    {{#if isChannel}}\r\n    <div class=\"chat-participants-name\"><i class=\"fa fa-users\"></i> {{ nParticipants }}</div>\r\n    {{/if}}\r\n  {{/unless}}\r\n</div>\r\n<div class=\"chat-mute\">\r\n{{#if isMuted}}\r\n  <i class=\"fa fa-bell-slash\"></i>\r\n{{else}}\r\n  <i class=\"fa fa-bell\"></i>\r\n{{/if}}\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.contacts-list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\r\n  <div class=\"seperator\">{{ @key }}</div>\r\n  {{#each this}}\r\n  <div class=\"contact-card\" data-contact-id=\"{{ id }}\">\r\n    <div class=\"profile-image-holder {{#if isChannel}}channel{{/if}}\">\r\n      {{#if image}}\r\n        <div class=\"profile-image\" style=\"background-image: url('{{auth image }}')\"></div>\r\n      {{/if}}\r\n      {{#if isChannel}}\r\n      <i class=\"fa fa-users\"></i>\r\n      {{else}}\r\n      <i class=\"fa fa-user\"></i>\r\n      {{/if}}\r\n    </div>\r\n    <div class=\"contact-info\">\r\n      <div class=\"contact-user-name\">{{ fullName }}</div>\r\n      <div class=\"contact-user-preview-holder\">\r\n        <div class=\"contact-user-preview\">{{{ title }}}</div>\r\n      </div>\r\n    </div>\r\n    {{#if isPinned}}\r\n    <div class=\"icon icon-static icon-rotate-45\"><i class=\"fa fa-thumb-tack\"></i></div>\r\n    {{/if}}\r\n  </div>\r\n  {{/each}}\r\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.conversation-content"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"offline-note\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.conversation.offline",{"name":"T","hash":{},"data":data}))
    + "</div>\r\n<div class=\"empty-area\"></div>\r\n<div class=\"msg-holder\">\r\n  <div class=\"profile-header\">\r\n    <div class=\"back-btn\">\r\n      <i class=\"fa fa-angle-left\"></i>\r\n    </div>\r\n    <div data-user-profile=\"{{ name }}\">\r\n      <div class=\"msg-user-avatar\">\r\n        <div class=\"image-holder\" style=\"background-image: url({{ auth avatar }})\"></div>\r\n        <i class=\"fa fa-user\"></i>\r\n      </div>\r\n      <span class=\"user-name\">{{ name }}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"msg-chats\" ontouchstart=\"\">\r\n    <button type=\"button\" class=\"btn btn-default load-more\" data-load-more>"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.conversation.actions.more",{"name":"T","hash":{},"data":data}))
    + "</button>\r\n    <div class=\"chats\" data-conversation-messages></div>\r\n  </div>\r\n\r\n  <div class=\"input-holder\" data-new-message ontouchstart=\"\">\r\n    <div class=\"error-send\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.conversation.errors.sendFailed",{"name":"T","hash":{},"data":data}))
    + "</div>\r\n    <div class=\"sending-to\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.conversation.sendTo",{"name":"T","hash":{},"data":data}))
    + ": <strong>{{ name }}</strong></div>\r\n    <div class=\"message-input\">\r\n      <textarea class=\"form-control\" rows=\"1\" data-message-body></textarea>\r\n    </div>\r\n    <button class=\"message-input-btn btn btn-primary\" type=\"button\">\r\n      <span>"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.conversation.actions.send",{"name":"T","hash":{},"data":data}))
    + " <i class=\"fa fa-paper-plane\"></i></span>\r\n      <div class=\"loader\"><i class=\"fa fa-spinner\"></i></div>\r\n    </button>\r\n  </div>\r\n<div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.conversation-item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"chat-card\" data-conversation-id=\"{{ id }}\">\r\n  <div class=\"chat-card-holder {{#if unreadMessages}}unread{{/if}} {{#if isChannel}}channel{{/if}} {{#if isGroup}}group{{/if}} {{#if isMuted}}muted{{/if}}\" id=\"chat-{{ id }}\" data-conversation-id=\"{{ id }}\">\r\n    <div class=\"profile-image-holder\">\r\n      <div class=\"profile-image\" style=\"background-image: url('{{auth avatar}}')\"></div>\r\n      <i class=\"fa fa-user\"></i>\r\n      <i class=\"fa fa-users\"></i>\r\n    </div>\r\n    <div class=\"chat-info\">\r\n      <div class=\"chat-user-name\">{{ name }}</div>\r\n      <div class=\"chat-user-preview-holder\">\r\n        {{#unless definition.group.readOnly}}\r\n          {{#if isGroup}}\r\n          <div class=\"chat-participants-preview\">{{ usersInConversation }}</div>\r\n          {{/if}}\r\n          {{#if isChannel}}\r\n          <div class=\"chat-participants-preview\"><i class=\"fa fa-users\"></i> {{ nParticipants }}</div>\r\n          {{/if}}\r\n        {{/unless}}\r\n        {{#with lastMessage}}\r\n        <div class=\"chat-user-preview\">{{ body }}</div>\r\n        {{/with}}\r\n      </div>\r\n    </div>\r\n    {{#if isMuted}}\r\n    <div class=\"icon\">\r\n      <div class=\"icon icon-muted\"><i class=\"fa fa-bell-slash\"></i></div>\r\n    </div>\r\n    {{/if}}\r\n    <div class=\"icon icon-show-more\">\r\n      <div class=\"icon icon-compact\"><i class=\"fa fa-ellipsis-v\"></i></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"actions-holder\">\r\n    <div class=\"actions\">\r\n      <div class=\"action\" data-action=\"mute\">\r\n        {{#if isMuted}}\r\n        <i class=\"fa fa-lg fa-bell-slash-o\"></i>\r\n        {{else}}\r\n        <i class=\"fa fa-lg fa-bell-o\"></i>\r\n        {{/if}}\r\n      </div>\r\n      <div class=\"action\" data-action=\"delete\">\r\n        {{#if isGroup}}\r\n        <i class=\"fa fa-lg fa-sign-out\"></i>\r\n        {{else}}\r\n          {{#if isChannel}}\r\n          <i class=\"fa fa-lg fa-sign-out\"></i>\r\n          {{else}}\r\n          <i class=\"fa fa-lg fa-trash-o\"></i>\r\n          {{/if}}\r\n        {{/if}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.conversations-group"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\r\n<div class=\"chat-users-group\">\r\n  <span>{{ @key }}</span>\r\n  <div class=\"chat-group-holder\">\r\n    {{#each this}}\r\n    <div class=\"chat-card\" data-conversation-id=\"{{ id }}\">\r\n      <div class=\"chat-card-holder {{#if unreadMessages}}unread{{/if}} {{#if isChannel}}channel{{/if}} {{#if isGroup}}group{{/if}} {{#if isMuted}}muted{{/if}}\" id=\"chat-{{ id }}\" data-conversation-id=\"{{ id }}\">\r\n        <div class=\"profile-image-holder\">\r\n          <div class=\"profile-image\" style=\"background-image: url('{{auth avatar}}')\"></div>\r\n          <i class=\"fa fa-user\"></i>\r\n          <i class=\"fa fa-users\"></i>\r\n        </div>\r\n        <div class=\"chat-info\">\r\n          <div class=\"chat-user-name\">{{ name }}</div>\r\n          <div class=\"chat-user-preview-holder\">\r\n            {{#unless definition.group.readOnly}}\r\n              {{#if isGroup}}\r\n              <div class=\"chat-participants-preview\">{{ usersInConversation }}</div>\r\n              {{/if}}\r\n              {{#if isChannel}}\r\n              <div class=\"chat-participants-preview\"><i class=\"fa fa-users\"></i> {{ nParticipants }}</div>\r\n              {{/if}}\r\n            {{/unless}}\r\n            {{#with lastMessage}}\r\n            <div class=\"chat-user-preview\">{{ body }}</div>\r\n            {{/with}}\r\n          </div>\r\n        </div>\r\n        {{#if isMuted}}\r\n        <div class=\"icon\">\r\n          <div class=\"icon icon-muted\"><i class=\"fa fa-bell-slash\"></i></div>\r\n        </div>\r\n        {{/if}}\r\n        <div class=\"icon icon-show-more\">\r\n          <div class=\"icon icon-compact\"><i class=\"fa fa-ellipsis-v\"></i></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"actions-holder\">\r\n        <div class=\"actions\">\r\n          <div class=\"action\" data-action=\"mute\">\r\n            {{#if isMuted}}\r\n            <i class=\"fa fa-lg fa-bell-o\"></i>\r\n            {{else}}\r\n            <i class=\"fa fa-lg fa-bell-slash-o\"></i>\r\n            {{/if}}\r\n          </div>\r\n          <div class=\"action\" data-action=\"delete\">\r\n            {{#if isGroup}}\r\n            <i class=\"fa fa-lg fa-sign-out\"></i>\r\n            {{else}}\r\n              {{#if isChannel}}\r\n              <i class=\"fa fa-lg fa-sign-out\"></i>\r\n              {{else}}\r\n              <i class=\"fa fa-lg fa-trash-o\"></i>\r\n              {{/if}}\r\n            {{/if}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    {{/each}}\r\n  </div>\r\n</div>\r\n{{/each}}\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.group-contacts-template"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\r\n<div class=\"contact-card\" data-contact-id=\"{{ id }}\">\r\n  <div class=\"profile-image-holder\">\r\n    <div class=\"profile-image\" style=\"background-image: url('{{auth userImage }}')\"></div>\r\n    <i class=\"fa fa-user\"></i>\r\n  </div>\r\n  <div class=\"contact-info\">\r\n    <div class=\"contact-user-name\">{{ userName }}</div>\r\n    <div class=\"contact-user-preview-holder\">\r\n      <div class=\"contact-user-preview\">{{ userTitle }}</div>\r\n    </div>\r\n  </div>\r\n  {{#if pinned}}\r\n  <div class=\"icon icon-static icon-rotate-45\"><i class=\"fa fa-thumb-tack\"></i></div>\r\n  {{/if}}\r\n</div>\r\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.group-tabs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"tab-group\">\r\n  <label class=\"tab\">\r\n    <input type=\"radio\" name=\"group-tabs\" value=\"\" checked=\"checked\" />\r\n    <span class=\"control-label\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.tabs.directMessages",{"name":"T","hash":{},"data":data}))
    + "</span>\r\n  </label>\r\n  <label class=\"tab\">\r\n    <input type=\"radio\" name=\"group-tabs\" value=\"1\" />\r\n    <span class=\"control-label\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.tabs.publicChannels",{"name":"T","hash":{},"data":data}))
    + "</span>\r\n  </label>\r\n</section>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.message-gap"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"chat chat-gap\"></div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.message-item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"chat {{#if isFromCurrentUser}}chat-right{{else}}chat-left{{/if}}\" data-message-id=\"{{ id }}\">\r\n  <div class=\"message-hidden-controls\">\r\n    <div class=\"msg-time-holder\">\r\n      <div class=\"msg-time\">{{ timeAgo }}</div>\r\n    </div>\r\n    <div class=\"edit-message-control\">\r\n      <div class=\"edit-button copy-message\" data-clipboard-text=\"{{ message.body }}\">\r\n        <i class=\"fa fa-clone\"></i>\r\n        <span>"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.message.actions.copy",{"name":"T","hash":{},"data":data}))
    + "</span>\r\n      </div>\r\n      {{#if isFromCurrentUser}}\r\n      <div class=\"edit-button edit-message\">\r\n        <i class=\"fa fa-pencil\"></i>\r\n        <span>"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.message.actions.edit",{"name":"T","hash":{},"data":data}))
    + "</span>\r\n      </div>\r\n      <div class=\"edit-button delete-message\">\r\n        <i class=\"fa fa-trash-o\"></i>\r\n        <span>"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.message.actions.delete",{"name":"T","hash":{},"data":data}))
    + "</span>\r\n      </div>\r\n      {{/if}}\r\n    </div>\r\n  </div>\r\n  <div class=\"chat-body\">\r\n    {{#unless isFromCurrentUser}}\r\n      {{#if isFromGroup}}\r\n      <div class=\"chat-name\">{{ name }}</div>\r\n      {{/if}}\r\n      {{#if isFromChannel}}\r\n      <div class=\"chat-name\">{{ name }}</div>\r\n      {{/if}}\r\n    {{/unless}}\r\n    {{#if message.fileType}}\r\n    <div class=\"chat-image\" style=\"width: {{ containerWidth }}; height: {{ containerHeight }}\">\r\n      <div class=\"offline-image-holder hidden\"><span class=\"fa fa-picture-o\"></span> "
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.message.errors.offline",{"name":"T","hash":{},"data":data}))
    + "</div>\r\n      <img src=\"{{ auth message.file.[0] }}\" width=\"{{ message.imageWidth }}\" height=\"{{ message.imageHeight }}\" />\r\n    </div>\r\n    {{/if}}\r\n    <div class=\"chat-text\">\r\n      {{ formatMessage message.body }}\r\n    </div>\r\n    {{#if message.isEdited}}\r\n      <div class=\"chat-edited\">"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.message.successEdit",{"name":"T","hash":{},"data":data}))
    + "</div>\r\n    {{/if}}\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.message-queue"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"chat chat-right\" data-message-id=\"{{ id }}\">\r\n  <div class=\"sending-message-holder\">\r\n    <i class=\"fa fa-circle-o-notch fa-spin\"></i>\r\n  </div>\r\n  <div class=\"chat-body\">\r\n    {{#if message.fileType}}\r\n    <div class=\"chat-image\" style=\"width: {{ containerWidth }}; height: {{ containerHeight }}\">\r\n      <div class=\"offline-image-holder hidden\"><span class=\"fa fa-picture-o\"></span> "
    + container.escapeExpression((helpers.T || (depth0 && depth0.T) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"widgets.chat.dataSource.message.errors.offline",{"name":"T","hash":{},"data":data}))
    + "</div>\r\n      <img src=\"{{ auth message.file.[0] }}\" width=\"{{ message.imageWidth }}\" height=\"{{ message.imageHeight }}\" />\r\n    </div>\r\n    {{/if}}\r\n    <div class=\"chat-text\">\r\n      {{ formatMessage message.body }}\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.new-conversation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li>\r\n      <a href=\"#\" data-create-conversation=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullName","hash":{},"data":data}) : helper)))
    + "</a>\r\n    </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"list-of-contacts hidden\">\r\n<h4>"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.conversation.newConversation.title",{"name":"T","hash":{},"data":data}))
    + "</h4>\r\n<p>"
    + alias3((helpers.T || (depth0 && depth0.T) || alias2).call(alias1,"widgets.chat.dataSource.conversation.newConversation.instruction",{"name":"T","hash":{},"data":data}))
    + "</p>\r\n\r\n<ul class=\"contacts\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.contacts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.select-contact-bubble"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"contact-image-holder\" data-selected-contact-id=\"{{ id }}\">\r\n  <div class=\"contact-image-wrapper\">\r\n    <div class=\"contact-profile-image\" style=\"background-image: url('{{auth userImage }}')\"></div>\r\n    <i class=\"fa fa-user\"></i>\r\n    <i class=\"fa fa-times\"></i>\r\n  </div>\r\n  <div class=\"contact-name-holder\">{{ userName }}</div>\r\n</div>";
},"useData":true});