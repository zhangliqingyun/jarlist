
//{ id, text, parentId?, href?, hrefTarget?, icon, iconCls, cls, expanded, children }

var Menu_Id = 1;

var Menu = function (element, options) {
    this.element = $(element);
    this.options = $.extend(true, {}, this.options, options);
    this.init();
}

Menu.prototype = {

    options: {
        data: null,    
        itemclick: null
    },

    loadData: function (data) {
        this.options.data = data || [];
        this.refresh();
    },

    refresh: function () {
        this._render();
    },

    init: function () {
        var me = this,
            opt = me.options,
            el = me.element;

        //el.addClass('menu');

        me.loadData(opt.data);

        el.on('click', '.menu-title', function (event) {
        	
        	
            var el = $(event.currentTarget);

            var li = el.parent();

            var item = me.getItemByEvent(event);
            
           // me.toggleItem(item);
            
           // $(".menu").children().removeClass("open");//menu其他的节点全部收起来
            
            
            var estMenu = el.parents('li');
            
            var estMenuLenght = estMenu.length -1;
            
            var workMenu = estMenu[estMenuLenght];
            
            //console.log($(workMenu).siblings());
            
            $(workMenu).siblings().removeClass("open");
            
           /* $(".navbar-inverse li").each(function (index) {
                    $(this).addClass("active");
            });*/
            
            /*.addClass("open");//选择的所有li父节点全部打开
*/            
            li.toggleClass('open');
            
            if (opt.itemclick) opt.itemclick.call(me, item);

        });

    },
    expand:function(){
    	var i = 0;
    	while($($(".menu-title")[i]).parent('li').hasClass("has-children")){
    		$(".menu-title")[i].click();
    		i++;
    		if(!$($(".menu-title")[i]).parent('li').hasClass("has-children")){
    			$(".menu-title")[i].click();
       		  	break;
       	 	};
    	} 
    	
    },
    _render: function () {
        var data = this.options.data || [];
        var html = this._renderItems(data, null);
        this.element.html(html);        
    },

    _renderItems: function (items, parent) {
        var s = '<ul class="' + (parent ? "menu-submenu" : "menu") + '">';
        for (var i = 0, l = items.length; i < l; i++) {
            var item = items[i];
            s += this._renderItem(item);
        }
        s += '</ul>';
        return s;
    },

    _renderItem: function (item) {

        var me = this,
            hasChildren = item.children && item.children.length > 0;

        var s = '<li  class="' + (hasChildren ? 'has-children' : '') + '">';        //class="menu-item" open, expanded?

        s += '<a class="menu-title" title="'+item.text+'"  data-id="' + item.id + '" ';
        //        if (item.href) {
        //            s += 'href="' + item.href + '" target="' + (item.hrefTarget || '') + '"';
        //        }
        s += '>';

        s += '<i class="menu-icon fa ' + item.iconCls + '"></i>';
        s += '<span class="menu-text">' + item.text + '</span>';

        if (hasChildren) {
            s += '<span class="menu-arrow fa"></span>';
        }

        s += '</a>';

        if (hasChildren) {
            s += me._renderItems(item.children, item);
        }

        s += '</li>';
        return s;
    },

    getItemByEvent: function (event) {
        var el = $(event.target).closest('.menu-title');
        var id = el.attr("data-id");
        return this.getItemById(id);
    },

    getItemById: function (id) {
        var me = this,
            idHash = me._idHash;

        if (!idHash) {
            idHash = me._idHash = {};
            function each(items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    var item = items[i];
                    if (item.children) each(item.children);
                    idHash[item.id] = item;
                }
            }
            each(me.options.data);
        }

        return me._idHash[id];
    }

};
