;(function(root){
	/**
	 * Useful mixins for Underscore.String
	 * @Class Underscore.String
	 * @Module Superscore.String
	 * @static
	 */
	if(typeof require == 'function'){
		var s = require('underscore.string'),
			anymatch = require('anymatch');
		
		s.anymatch = function(str, matchers){
			return anymatch(matchers, str);
		};
		
		if(typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports)
			module.exports = s;
	
	} else {
		var s = root.s;
	}
	

	function truncate(str, max, options){
		if(!options)
			options = {};
		
		if(!options.trail)
			options.trail = '…';
		
		if(str.length > max){
			str = str.substring(0, max);
			
			if(options.atChar){
				var index = str.lastIndexOf(options.atChar);
				
				if(index != -1)
					str = str.substr(0, index);
			}
			
			if(options.trail)
				str += options.trail;
		}
		
		return str;
	};
	
	function random(length){
	    var text = '',
			possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-_abcdefghijklmnopqrstuvwxyz0123456789',
			l = length || 8;
	
	    for(var i = 0; i < l; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	
	    return text;
	};
	
	s.truncate = truncate;
	s.random = random;
	
})(Function('return this')());