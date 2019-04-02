this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.admin-button-group"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"group-buttons-label\">\n  <p class=\"title\">Admin only groups</p>\n</div>\n<div class=\"group-buttons-holder\">\n  <div class=\"btn btn-create-group\" data-group=\"all\">All attendees</div>\n  <div class=\"btn btn-create-group\" data-group=\"speakers\">Speakers only</div>\n  <div class=\"btn btn-create-group\" data-group=\"admins\">Admins only</div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.chat-header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"profile-image-holder {{#if isGroup}}group{{/if}}\">\n  <div class=\"profile-image\" style=\"background-image: url('{{auth avatar}}')\"></div>\n  <i class=\"fa fa-user\"></i>\n  <i class=\"fa fa-users\"></i>\n</div>\n<div>\n  <div class=\"chat-user-name\">{{ name }}</div>\n  {{#unless definition.group.readOnly}}\n    {{#if isGroup}}\n    <div class=\"chat-participants-name\">{{ usersInConversation }}</div>\n    {{/if}}\n    {{#if isChannel}}\n    <div class=\"chat-participants-name\"><i class=\"fa fa-users\"></i> {{ nParticipants }}</div>\n    {{/if}}\n  {{/unless}}\n</div>\n<div class=\"chat-mute\">\n{{#if isMuted}}\n  <i class=\"fa fa-bell-slash\"></i>\n{{else}}\n  <i class=\"fa fa-bell\"></i>\n{{/if}}\n</div>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.contacts-list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n  <div class=\"seperator\">{{ @key }}</div>\n  {{#each this}}\n  <div class=\"contact-card\" data-contact-id=\"{{ id }}\">\n    <div class=\"profile-image-holder {{#if isChannel}}channel{{/if}}\">\n      {{#if image}}\n        <div class=\"profile-image\" style=\"background-image: url('{{auth image }}')\"></div>\n      {{/if}}\n      {{#if isChannel}}\n      <i class=\"fa fa-users\"></i>\n      {{else}}\n      <i class=\"fa fa-user\"></i>\n      {{/if}}\n    </div>\n    <div class=\"contact-info\">\n      <div class=\"contact-user-name\">{{ fullName }}</div>\n      <div class=\"contact-user-preview-holder\">\n        <div class=\"contact-user-preview\">{{{ title }}}</div>\n      </div>\n    </div>\n    {{#if isPinned}}\n    <div class=\"icon icon-static icon-rotate-45\"><i class=\"fa fa-thumb-tack\"></i></div>\n    {{/if}}\n  </div>\n  {{/each}}\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.conversation-content"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"offline-note\">Your device is offline</div>\n<div class=\"empty-area\"></div>\n<div class=\"msg-holder\">\n  <div class=\"profile-header\">\n    <div class=\"back-btn\">\n      <i class=\"fa fa-angle-left\"></i>\n    </div>\n    <div data-user-profile=\"{{ name }}\">\n      <div class=\"msg-user-avatar\">\n        <div class=\"image-holder\" style=\"background-image: url({{ auth avatar }})\"></div>\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n      </div>\n      <span class=\"user-name\">{{ name }}</span>\n    </div>\n  </div>\n\n  <div class=\"msg-chats\" ontouchstart=\"\">\n    <button type=\"button\" class=\"btn btn-default load-more\" data-load-more>Load more</button>\n    <div class=\"chats\" data-conversation-messages></div>\n  </div>\n\n  <div class=\"input-holder\" data-new-message ontouchstart=\"\">\n    <div class=\"error-send\">Couldn't send your message. Try again!</div>\n    <div class=\"sending-to\">Send to: <strong>{{ name }}</strong></div>\n    <div class=\"message-input\">\n      <textarea class=\"form-control\" rows=\"1\" data-message-body></textarea>\n    </div>\n    <button class=\"message-input-btn btn btn-primary\" type=\"button\">\n      <span>Send <i class=\"fa fa-paper-plane\"></i></span>\n      <div class=\"loader\"><i class=\"fa fa-spinner\"></i></div>\n    </button>\n  </div>\n<div>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.conversation-item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"chat-card\" data-conversation-id=\"{{ id }}\">\n  <div class=\"chat-card-holder {{#if unreadMessages}}unread{{/if}} {{#if isChannel}}channel{{/if}} {{#if isGroup}}group{{/if}} {{#if isMuted}}muted{{/if}}\" id=\"chat-{{ id }}\" data-conversation-id=\"{{ id }}\">\n    <div class=\"profile-image-holder\">\n      <div class=\"profile-image\" style=\"background-image: url('{{auth avatar}}')\"></div>\n      <i class=\"fa fa-user\"></i>\n      <i class=\"fa fa-users\"></i>\n    </div>\n    <div class=\"chat-info\">\n      <div class=\"chat-user-name\">{{ name }}</div>\n      <div class=\"chat-user-preview-holder\">\n        {{#unless definition.group.readOnly}}\n          {{#if isGroup}}\n          <div class=\"chat-participants-preview\">{{ usersInConversation }}</div>\n          {{/if}}\n          {{#if isChannel}}\n          <div class=\"chat-participants-preview\"><i class=\"fa fa-users\"></i> {{ nParticipants }}</div>\n          {{/if}}\n        {{/unless}}\n        {{#with lastMessage}}\n        <div class=\"chat-user-preview\">{{ body }}</div>\n        {{/with}}\n      </div>\n    </div>\n    {{#if isMuted}}\n    <div class=\"icon\">\n      <div class=\"icon icon-muted\"><i class=\"fa fa-bell-slash\"></i></div>\n    </div>\n    {{/if}}\n    <div class=\"icon\">\n      <div class=\"icon icon-compact icon-show-more\"><i class=\"fa fa-ellipsis-v\"></i></div>\n    </div>\n  </div>\n  <div class=\"actions-holder\">\n    <div class=\"actions\">\n      <div class=\"action\" data-action=\"mute\">\n        {{#if isMuted}}\n        <i class=\"fa fa-lg fa-bell-slash-o\"></i>\n        {{else}}\n        <i class=\"fa fa-lg fa-bell-o\"></i>\n        {{/if}}\n      </div>\n      <div class=\"action\" data-action=\"delete\">\n        {{#if isGroup}}\n        <i class=\"fa fa-lg fa-sign-out\"></i>\n        {{else}}\n          {{#if isChannel}}\n          <i class=\"fa fa-lg fa-sign-out\"></i>\n          {{else}}\n          <i class=\"fa fa-lg fa-trash-o\"></i>\n          {{/if}}\n        {{/if}}\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.conversations-group"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n<div class=\"chat-users-group\">\n  <span>{{ @key }}</span>\n  <div class=\"chat-group-holder\">\n    {{#each this}}\n    <div class=\"chat-card\" data-conversation-id=\"{{ id }}\">\n      <div class=\"chat-card-holder {{#if unreadMessages}}unread{{/if}} {{#if isChannel}}channel{{/if}} {{#if isGroup}}group{{/if}} {{#if isMuted}}muted{{/if}}\" id=\"chat-{{ id }}\" data-conversation-id=\"{{ id }}\">\n        <div class=\"profile-image-holder\">\n          <div class=\"profile-image\" style=\"background-image: url('{{auth avatar}}')\"></div>\n          <i class=\"fa fa-user\"></i>\n          <i class=\"fa fa-users\"></i>\n        </div>\n        <div class=\"chat-info\">\n          <div class=\"chat-user-name\">{{ name }}</div>\n          <div class=\"chat-user-preview-holder\">\n            {{#unless definition.group.readOnly}}\n              {{#if isGroup}}\n              <div class=\"chat-participants-preview\">{{ usersInConversation }}</div>\n              {{/if}}\n              {{#if isChannel}}\n              <div class=\"chat-participants-preview\"><i class=\"fa fa-users\"></i> {{ nParticipants }}</div>\n              {{/if}}\n            {{/unless}}\n            {{#with lastMessage}}\n            <div class=\"chat-user-preview\">{{ body }}</div>\n            {{/with}}\n          </div>\n        </div>\n        {{#if isMuted}}\n        <div class=\"icon\">\n          <div class=\"icon icon-muted\"><i class=\"fa fa-bell-slash\"></i></div>\n        </div>\n        {{/if}}\n        <div class=\"icon\">\n          <div class=\"icon icon-compact icon-show-more\"><i class=\"fa fa-ellipsis-v\"></i></div>\n        </div>\n      </div>\n      <div class=\"actions-holder\">\n        <div class=\"actions\">\n          <div class=\"action\" data-action=\"mute\">\n            {{#if isMuted}}\n            <i class=\"fa fa-lg fa-bell-o\"></i>\n            {{else}}\n            <i class=\"fa fa-lg fa-bell-slash-o\"></i>\n            {{/if}}\n          </div>\n          <div class=\"action\" data-action=\"delete\">\n            {{#if isGroup}}\n            <i class=\"fa fa-lg fa-sign-out\"></i>\n            {{else}}\n              {{#if isChannel}}\n              <i class=\"fa fa-lg fa-sign-out\"></i>\n              {{else}}\n              <i class=\"fa fa-lg fa-trash-o\"></i>\n              {{/if}}\n            {{/if}}\n          </div>\n        </div>\n      </div>\n    </div>\n    {{/each}}\n  </div>\n</div>\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.group-contacts-template"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n<div class=\"contact-card\" data-contact-id=\"{{ id }}\">\n  <div class=\"profile-image-holder\">\n    <div class=\"profile-image\" style=\"background-image: url('{{auth userImage }}')\"></div>\n    <i class=\"fa fa-user\"></i>\n  </div>\n  <div class=\"contact-info\">\n    <div class=\"contact-user-name\">{{ userName }}</div>\n    <div class=\"contact-user-preview-holder\">\n      <div class=\"contact-user-preview\">{{ userTitle }}</div>\n    </div>\n  </div>\n  {{#if pinned}}\n  <div class=\"icon icon-static icon-rotate-45\"><i class=\"fa fa-thumb-tack\"></i></div>\n  {{/if}}\n</div>\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.group-tabs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"tab-group\">\n  <label class=\"tab\">\n    <input type=\"radio\" name=\"group-tabs\" value=\"\" checked=\"checked\" />\n    <span class=\"control-label\">Direct Messages</span>\n  </label>\n  <label class=\"tab\">\n    <input type=\"radio\" name=\"group-tabs\" value=\"1\" />\n    <span class=\"control-label\">Public Channels</span>\n  </label>\n</section>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.message-item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"chat {{#if isFromCurrentUser}}chat-right{{else}}chat-left{{/if}}\" data-message-id=\"{{ id }}\">\n  <div class=\"message-hidden-controls\">\n    <div class=\"msg-time-holder\">\n      <div class=\"msg-time\">{{ timeAgo }}</div>\n    </div>\n    <div class=\"edit-message-control\">\n      <div class=\"edit-button copy-message\" data-clipboard-text=\"{{ message.body }}\">\n        <i class=\"fa fa-clone\"></i>\n        <span>Copy</span>\n      </div>\n      {{#if isFromCurrentUser}}\n      <div class=\"edit-button edit-message\">\n        <i class=\"fa fa-pencil\"></i>\n        <span>Edit</span>\n      </div>\n      <div class=\"edit-button delete-message\">\n        <i class=\"fa fa-trash-o\"></i>\n        <span>Delete</span>\n      </div>\n      {{/if}}\n    </div>\n  </div>\n  <div class=\"chat-body\">\n    {{#unless isFromCurrentUser}}\n      {{#if isFromGroup}}\n      <div class=\"chat-name\">{{ name }}</div>\n      {{/if}}\n      {{#if isFromChannel}}\n      <div class=\"chat-name\">{{ name }}</div>\n      {{/if}}\n    {{/unless}}\n    {{#if message.fileType}}\n    <div class=\"chat-image\" style=\"width: {{ containerWidth }}; height: {{ containerHeight }}\">\n      <div class=\"offline-image-holder hidden\"><span class=\"fa fa-picture-o\"></span> No internet</div>\n      <img src=\"{{ auth message.file.[0] }}\" width=\"{{ message.imageWidth }}\" height=\"{{ message.imageHeight }}\" />\n    </div>\n    {{/if}}\n    <div class=\"chat-text\">\n      {{ formatMessage message.body }}\n    </div>\n    {{#if message.isEdited}}\n      <div class=\"chat-edited\">Edited</div>\n    {{/if}}\n  </div>\n</div>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.message-queue"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"chat chat-right\" data-message-id=\"{{ id }}\">\n  <div class=\"sending-message-holder\">\n    <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n  </div>\n  <div class=\"chat-body\">\n    {{#if message.fileType}}\n    <div class=\"chat-image\" style=\"width: {{ containerWidth }}; height: {{ containerHeight }}\">\n      <div class=\"offline-image-holder hidden\"><span class=\"fa fa-picture-o\"></span> No internet</div>\n      <img src=\"{{ auth message.file.[0] }}\" width=\"{{ message.imageWidth }}\" height=\"{{ message.imageHeight }}\" />\n    </div>\n    {{/if}}\n    <div class=\"chat-text\">\n      {{ formatMessage message.body }}\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.new-conversation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li>\n      <a href=\"#\" data-create-conversation=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullName","hash":{},"data":data}) : helper)))
    + "</a>\n    </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-of-contacts hidden\">\n<h4>New conversation</h4>\n<p>Select contacts to start a conversation</p>\n\n<ul class=\"contacts\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.contacts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n</div>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.select-contact-bubble"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"contact-image-holder\" data-selected-contact-id=\"{{ id }}\">\n  <div class=\"contact-image-wrapper\">\n    <div class=\"contact-profile-image\" style=\"background-image: url('{{auth userImage }}')\"></div>\n    <i class=\"fa fa-user\"></i>\n    <i class=\"fa fa-times\"></i>\n  </div>\n  <div class=\"contact-name-holder\">{{ userName }}</div>\n</div>";
},"useData":true});