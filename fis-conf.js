/**
 * @filename 	fis配置文件
 * @description 配置打包、压缩、合并、解析、部署等功能
 */
var product = 'common';
var namespace = 'pc';
var layoutpath = namespace + 'pc/common' + product;

fis.config.set({
	project: {
        md5Length: 8,
        md5Connector: '.'
    },
    roadmap:{
        path:[
        	// release编译时，md文件不命中
        	{
	            reg: /^\/.*\.(?:md)$/i,
	            release: false
	        },
	        // {
	        //     reg: /^\/static\/libs\/(.*\.js)$/i,
	        //     isMod: true,
	        //     release: '${statics}/${namespace}/libs/$1'
	        // }
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