/**
 * @filename 	fis配置文件
 * @description 配置打包、压缩、合并、解析、部署等功能
 */
var product = 'common';
var namespace = 'pc';
var layoutpath = namespace + '/' + product;

fis.config.set({
	project: {
        md5Length: 8,
        md5Connector: '.'
    },
    roadmap:{
        path:[
	        /**
	         * 匹配layout、widget、page中的模版
	         * /page/search/search.html =>
	         * 发布路径 ： /pc/car/page/search/search.html
	         * id ：    car:page/search/search.html
	         */
            {
                reg : /^\/(page|layout|widget)\/(.+\.html)$/i,
                isMod : true,
                release : '/ui/' + layoutpath + '/$1/$2',
                url : '/' + layoutpath + '/$1/$2',
                id : '$1/$2'
            },
	        /**
	         * 匹配layout、widget、page中的js、css文件
	         * /page/index/index.js =>
	         * 发布路径 ：/static/pc/home/page/index/index.js
	         * id ：home:page/index/index.js
	         */
            {
                reg : /^\/(page|layout|widget)\/(.*\.(js|css))$/i,
                isMod : true,
                release : '/static/' + layoutpath + '/$1/$2',
                id : '$1/$2'
            },
		    /**
		     * 匹配layout、widget、page中的所有其他静态资源
		     * /page/pager/images/pager.png =>
		     * 发布路径 ： /static/pc/home/page/pager/images/pager.png
	         */
            {
                reg : /^\/(page|layout|widget)\/(.*)$/i,
                release : '/static/' + layoutpath + '/$1/$2'
            },
	        /**
	         * 匹配static下的所有资源
	         * /static/lib/js/jquery.js =>
	         * 发布路径 ： /static/pc/common/lib/js/jquery.js
	         */
            {
                reg : /^\/static\/(.*)$/i,
                release : '/static/' + layoutpath + '/$1'
            },
            {
            	reg: /^\/.*\.(?:md)$/i,
	            release: false
	        }
        ],
        ext : {
            //less后缀的文件将输出为css后缀
            //并且在parser之后的其他处理流程中被当做css文件处理
            less : 'css',
            //coffee后缀的文件将输出为js文件
            //并且在parser之后的其他处理流程中被当做js文件处理
            coffee : 'js',
            //md后缀的文件将输出为html文件
            //并且在parser之后的其他处理流程中被当做html文件处理
            md : 'html'
        }
    },
    modules : {
        parser : {
            css : 'less',
            //coffee后缀的文件使用fis-parser-coffee-script插件编译
            coffee : 'coffee-script',
            //less后缀的文件使用fis-parser-less插件编译
            //处理器支持数组，或者逗号分隔的字符串配置
            less : ['less'],
            //md后缀的文件使用fis-parser-marked插件编译
            md : 'marked'
        }
    },
    settings : {
        postprocessor : {
            jswrapper : {
                type:'amd'
            }
        },
        spriter : {
            csssprites : {
                //设置csssprites的合并间距
                margin : 20
            }
        }
    },
    deploy : {
        //名字随便取的，没有特殊含义
        local : {
            //from参数省略，表示从发布后的根目录开始上传
            //发布到当前项目的上一级的output目录中
            to : './output'
        },
    }
});