import { PresetIcon, IconSet } from './icon';

export function setExtensions(set: (extension: string | string[], icon: PresetIcon) => void) {
	// XML
	set('xml', {
		[IconSet.ColorLight]: '#ff6600',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-code'
	});
	set(['html', 'htm'], {
		[IconSet.ColorLight]: '#e34c26',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-html5'
	});
	set('haml', {
		[IconSet.ColorLight]: '#0270b9',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-code'
	});
	set('hbs', {
		[IconSet.ColorLight]: '#f38709',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-code'
	});
	
	// Stylesheets
	set('css', {
		[IconSet.ColorLight]: '#0270b9',
		[IconSet.IconIon]: ['ion-pound', 12],
		[IconSet.IconDev]: 'devicons devicons-css3_full'
	});
	set(['scss', 'sass'], {
		[IconSet.ColorLight]: '#cb6899',
		[IconSet.IconIon]: ['ion-pound', 12],
		[IconSet.IconDev]: 'devicons devicons-sass'
	});
	set('less', {
		[IconSet.ColorLight]: '#2b5086',
		[IconSet.IconIon]: ['ion-pound', 12],
		[IconSet.IconDev]: 'devicons devicons-less'
	});
	set('styl', {
		[IconSet.ColorLight]: '#b3d107',
		[IconSet.IconIon]: ['ion-pound', 12],
		[IconSet.IconDev]: 'devicons devicons-stylus'
	});
	
	// JavaScript
	set('js', {
		[IconSet.ColorLight]: '#e5a228',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-javascript'
	});
	set('es6', {
		[IconSet.ColorLight]: '#4321a9',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-javascript'
	});
	set('ts', {
		[IconSet.ColorLight]: '#0074c1',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-javascript' // TODO: Better icon
	});
	set('d.ts', {
		[IconSet.ColorLight]: '#0b8f9e',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-javascript' // TODO: Better icon
	});
	set('coffee', {
		[IconSet.ColorLight]: '#425d99',
		[IconSet.IconIon]: 'ion-coffee',
		[IconSet.IconDev]: 'devicons devicons-coffeescript'
	});
	set('json', {
		[IconSet.ColorLight]: '#e5a228',
		[IconSet.IconIon]: 'ion-ios-gear',
		[IconSet.IconDev]: 'devicons devicons-javascript' // TODO: Better icon
	});
	set('ls', {
		[IconSet.ColorLight]: '#369bd7',
		[IconSet.IconIon]: 'ion-beaker',
		[IconSet.IconDev]: 'devicons devicons-javascript' // TODO: Better icon
	});
	
	// Server side
	set('php', {
		[IconSet.ColorLight]: '#6976c3',
		[IconSet.IconIon]: 'ion-code-working',
		[IconSet.IconDev]: 'devicons devicons-php'
	});
	set('ctp', {
		[IconSet.ColorLight]: '#417282',
		[IconSet.IconIon]: 'ion-code-working',
		[IconSet.IconDev]: 'devicons devicons-php'
	});
	set('sql', {
		[IconSet.ColorLight]: '#c67f07',
		[IconSet.IconIon]: 'ion-soup-can-outline',
		[IconSet.IconDev]: 'devicons devicons-database'
	});
	
	// Java
	set(['java', 'class'], {
		[IconSet.ColorLight]: '#5382a1',
		[IconSet.IconIon]: 'ion-coffee',
		[IconSet.IconDev]: 'devicons devicons-java'
	});
	set('scala', {
		[IconSet.ColorLight]: '#72d0eb',
		[IconSet.IconIon]: 'ion-navicon-round file-icon-rotated',
		[IconSet.IconDev]: 'devicons devicons-java'
	});
	set('groovy', {
		[IconSet.ColorLight]: '#4298b8',
		[IconSet.IconIon]: 'ion-ios-star',
		[IconSet.IconDev]: 'devicons devicons-groovy'
	});
	set('mf', {
		[IconSet.ColorLight]: '#2f5796',
		[IconSet.IconIon]: 'ion-ios-gear'
	});
	
	// Lua
	set('lua', {
		[IconSet.ColorLight]: '#00207d',
		[IconSet.IconIon]: ['ion-record', 14]
	});
	
	// Clojure
	set('clj', {
		[IconSet.ColorLight]: '#63b132',
		[IconSet.IconIon]: 'ion-aperture'
	});

	// Visual Basic
	set('vb', {
		[IconSet.ColorLight]: '#486dae',
		[IconSet.IconIon]: 'ion-ios-infinite'
	});
	set('vbs', {
		[IconSet.ColorLight]: '#3d047e',
		[IconSet.IconIon]: 'ion-ios-infinite'
	});

	// C-family
	set('hx', {
		[IconSet.ColorLight]: '#ea8220',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('pl', {
		[IconSet.ColorLight]: '#a4c5eb',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('c', {
		[IconSet.ColorLight]: '#a8b9cc',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('cpp', {
		[IconSet.ColorLight]: '#ffd232',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('cs', {
		[IconSet.ColorLight]: '#5bb552',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('swift', {
		[IconSet.ColorLight]: '#f16830',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('dart', {
		[IconSet.ColorLight]: '#36bfb6',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});

	// Ruby
	set(['rb', 'erb', 'rdoc'], {
		[IconSet.ColorLight]: '#9b111e',
		[IconSet.IconIon]: 'ion-heart'
	});
	set('feature', {
		[IconSet.ColorLight]: '#4e8b39',
		[IconSet.IconIon]: 'ion-chatbox-working'
	});

	// Python
	set(['py', 'pyw'], {
		[IconSet.ColorLight]: '#f8c63d',
		[IconSet.IconIon]: 'ion-social-python'
	});
	
	// Qt Quick
	set('qml', {
		[IconSet.ColorLight]: '#42ed0e',
		[IconSet.IconIon]: 'ion-code'
	});

	// Shell and friends
	set('sh', {
		[IconSet.ColorLight]: '#008d00',
		[IconSet.IconIon]: 'ion-android-list'
	});
	set('bat', {
		[IconSet.ColorLight]: '#60c910',
		[IconSet.IconIon]: 'ion-android-list'
	});
	
	// Applications
	set('exe', {
		[IconSet.ColorLight]: '#57a084',
		[IconSet.IconIon]: 'ion-social-windows'
	});
	set('dll', {
		[IconSet.ColorLight]: '#709ead',
		[IconSet.IconIon]: 'ion-social-windows'
	});
	
	// Templating
	set('jade', {
		[IconSet.ColorLight]: '#00a57a',
		[IconSet.IconIon]: 'ion-egg'
	});

	// Images
	set('png', {
		[IconSet.ColorLight]: '#dbb1a9',
		[IconSet.IconIon]: 'ion-image'
	});
	set(['jpeg', 'jpg'], {
		[IconSet.ColorLight]: '#dedfa3',
		[IconSet.IconIon]: 'ion-image'
	});
	set('tiff', {
		[IconSet.ColorLight]: '#ff4000',
		[IconSet.IconIon]: 'ion-image'
	});
	set('ico', {
		[IconSet.ColorLight]: '#b6d2d1',
		[IconSet.IconIon]: 'ion-image'
	});
	set('svg', {
		[IconSet.ColorLight]: '#c0c5eb',
		[IconSet.IconIon]: 'ion-image'
	});
	set('gif', {
		[IconSet.ColorLight]: '#aaecc0',
		[IconSet.IconIon]: 'ion-images'
	});

	// Videos
	set(['mp4', 'webm', 'ogg'], {
		[IconSet.ColorLight]: '#008d00',
		[IconSet.IconIon]: 'ion-ios-videocam'
	});

	// Audio
	set(['mp3', 'wav'], {
		[IconSet.ColorLight]: '#921100',
		[IconSet.IconIon]: 'ion-volume-medium'
	});

	// Fonts
	set('ttf', {
		[IconSet.ColorLight]: '#b42950',
		[IconSet.IconIon]: 'ion-social-tumblr'
	});
	set('eot', {
		[IconSet.ColorLight]: '#b36908',
		[IconSet.IconIon]: 'ion-social-tumblr'
	});
	set(['woff', 'woff2'], {
		[IconSet.ColorLight]: '#7f4bb2',
		[IconSet.IconIon]: 'ion-social-tumblr'
	});
	set('otf', {
		[IconSet.ColorLight]: '#7f4bb2',
		[IconSet.IconIon]: 'ion-social-tumblr'
	});

	// Readme
	set(['md', 'markdown'], {
		[IconSet.ColorLight]: '#709ead',
		[IconSet.IconIon]: ['ion-social-markdown', 12]
	});

	// Git
	set('gitignore', {
		[IconSet.ColorLight]: '#cd5439',
		[IconSet.IconIon]: ['ion-minus-circled', 14]
	});
	set('gitmodules', {
		[IconSet.ColorLight]: '#f64d27',
		[IconSet.IconIon]: ['ion-fork-repo', 17]
	});

	// Webservers
	set('htaccess', {
		[IconSet.ColorLight]: '#93a8be',
		[IconSet.IconIon]: ['ion-ios-unlocked', 18]
	});
	set('htpasswd', {
		[IconSet.ColorLight]: '#6c369c',
		[IconSet.IconIon]: ['ion-ios-locked', 18]
	});
	set('conf', {
		[IconSet.ColorLight]: '#009900',
		[IconSet.IconIon]: 'ion-ios-gear'
	});

	// Archive
	set('zip', {
		[IconSet.ColorLight]: '#008858',
		[IconSet.IconIon]: 'ion-briefcase'
	});
	set('rar', {
		[IconSet.ColorLight]: '#005888',
		[IconSet.IconIon]: 'ion-briefcase'
	});
	set('7z', {
		[IconSet.ColorLight]: '#880058',
		[IconSet.IconIon]: 'ion-briefcase'
	});
	set('tgz', {
		[IconSet.ColorLight]: '#7900bc',
		[IconSet.IconIon]: 'ion-briefcase'
	});
	set('tar', {
		[IconSet.ColorLight]: '#885800',
		[IconSet.IconIon]: 'ion-briefcase'
	});
	set('gz', {
		[IconSet.ColorLight]: '#588800',
		[IconSet.IconIon]: 'ion-briefcase'
	});
	set('bzip', {
		[IconSet.ColorLight]: '#884300',
		[IconSet.IconIon]: 'ion-briefcase'
	});
	set('msi', {
		[IconSet.ColorLight]: '#6f8696',
		[IconSet.IconIon]: 'ion-briefcase'
	});
	set('dmg', {
		[IconSet.ColorLight]: '#6f8696',
		[IconSet.IconIon]: 'ion-briefcase'
	});
	
	// Settings
	set([
		'project',
		'jscsrc',
		'jshintrc',
		'csslintrc',
		'htmlhintrc',
		'xmlhintrc',
		'todo',
		'classpath',
		'properties',
		'bowerrc',
		'gruntrc',
		'jsrc',
		'pro',
		'editorconfig'
	], {
		[IconSet.ColorLight]: '#777777',
		[IconSet.IconIon]: 'ion-ios-gear'
	});
	set('csproj', {
		[IconSet.ColorLight]: '#5bb552',
		[IconSet.IconIon]: ['ion-ios-paper-outline', 18]
	});
	set('vbproj', {
		[IconSet.ColorLight]: '#486dae',
		[IconSet.IconIon]: ['ion-ios-paper-outline', 18]
	});
	set('sln', {
		[IconSet.ColorLight]: '#87c5de',
		[IconSet.IconIon]: ['ion-ios-paper-outline', 18]
	});

	// Other text files
	set('txt', {
		[IconSet.ColorLight]: '#4192c1',
		[IconSet.IconIon]: 'ion-document-text'
	});
	set('log', {
		[IconSet.ColorLight]: '#225dc9',
		[IconSet.IconIon]: 'ion-clipboard'
	});
	set('npmignore', {
		[IconSet.ColorLight]: '#cb3837',
		[IconSet.IconIon]: ['ion-minus-circled', 14]
	});
	set('slugignore', {
		[IconSet.ColorLight]: '#0da064',
		[IconSet.IconIon]: ['ion-minus-circled', 14]
	});
	set(['yml', 'yaml'], {
		[IconSet.ColorLight]: '#008000',
		[IconSet.IconIon]: ['ion-navicon', 14]
	});
	set('sqf', {
		[IconSet.ColorLight]: '#b9e11f',
		[IconSet.IconIon]: 'ion-wand'
	});
	
	// LaTeX
	set(['tex', 'bib', 'sty'], {
		[IconSet.ColorLight]: '#262686',
		[IconSet.IconIon]: 'ion-document-text'
	});

	//Singular Types
	set('applescript', {
		[IconSet.ColorLight]: '#afafaf',
		[IconSet.IconIon]: 'ion-social-apple'
	});
	set('textile', {
		[IconSet.ColorLight]: '#6f8696',
		[IconSet.IconIon]: 'ion-quote'
	});
	set('matlab', {
		[IconSet.ColorLight]: '#014495',
		[IconSet.IconIon]: 'ion-clipboard'
	});
	set('lisp', {
		[IconSet.ColorLight]: '#f8c63d',
		[IconSet.IconIon]: 'ion-ios-paperplane'
	});
	set('xsl', {
		[IconSet.ColorLight]: '#68217a',
		[IconSet.IconIon]: 'ion-code'
	});
	set('tcl', {
		[IconSet.ColorLight]: '#c3b15f',
		[IconSet.IconIon]: 'ion-code'
	});
	set('rst', {
		[IconSet.ColorLight]: '#6f8696',
		[IconSet.IconIon]: 'ion-ios-paper'
	});
	set('d', {
		[IconSet.ColorLight]: '#960000',
		[IconSet.IconIon]: 'ion-contrast'
	});
	set('r', {
		[IconSet.ColorLight]: '#8495C0',
		[IconSet.IconIon]: 'ion-ios-analytics'
	});
	set('map', {
		[IconSet.ColorLight]: '#e0591f',
		[IconSet.IconIon]: 'ion-ios-photos-outline'
	});
}

export function getDefault(): PresetIcon {
	return {
		[IconSet.IconIon]: 'ion-document',
		[IconSet.IconDev]: 'devicons devicons-code_badge'
	};
}