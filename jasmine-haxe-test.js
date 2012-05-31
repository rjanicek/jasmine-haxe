var $_, $hxClasses = $hxClasses || {}, $estr = function() { return js.Boot.__string_rec(this,''); }
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var haxe = haxe || {}
haxe.Timer = $hxClasses["haxe.Timer"] = function(time_ms) {
	var me = this;
	this.id = window.setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.prototype = {
	id: null
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
}
var jasmine = jasmine || {}
jasmine.J = $hxClasses["jasmine.J"] = function() { }
jasmine.J.__name__ = ["jasmine","J"];
jasmine.J.describe = function(description,specDefinitions) {
	describe(description, specDefinitions);
}
jasmine.J.it = function(description,func) {
	it(description, func);
}
jasmine.J.expect = function(actual) {
	return expect(actual);
}
jasmine.J.runs = function(func) {
	runs(func);
}
jasmine.J.waits = function(timeoutMilliseconds) {
	waits(timeoutMilliseconds);
}
jasmine.J.waitsFor = function(func,message,timeoutMilliseconds) {
	waitsFor(func, message, timeoutMilliseconds);
}
jasmine.J.spyOn = function(x,method) {
	return spyOn(x, method);
}
jasmine.J.prototype = {
	__class__: jasmine.J
}
jasmine.Jasmine = $hxClasses["jasmine.Jasmine"] = function() { }
jasmine.Jasmine.__name__ = ["jasmine","Jasmine"];
jasmine.Jasmine.getEnv = function() {
	return jasmine.getEnv();
}
jasmine.Jasmine.newTrivialReporter = function() {
	return new jasmine.TrivialReporter();
}
jasmine.Jasmine.newHtmlReporter = function() {
	return new jasmine.HtmlReporter();
}
jasmine.Jasmine.createSpy = function(name) {
	return jasmine.createSpy(name);
}
jasmine.Jasmine.prototype = {
	__class__: jasmine.Jasmine
}
var jasmineTest = jasmineTest || {}
jasmineTest.Main = $hxClasses["jasmineTest.Main"] = function() { }
jasmineTest.Main.__name__ = ["jasmineTest","Main"];
jasmineTest.Main.main = function() {
	new jasmineTest.specs.JasmineSpec();
	new jasmineTest.specs.MatchersSpec();
	new jasmineTest.specs.SpySpec();
	jasmine.Jasmine.getEnv().addReporter(jasmine.Jasmine.newHtmlReporter());
	jasmine.Jasmine.getEnv().execute();
}
jasmineTest.Main.prototype = {
	__class__: jasmineTest.Main
}
if(!jasmineTest.specs) jasmineTest.specs = {}
jasmineTest.specs.JasmineSpec = $hxClasses["jasmineTest.specs.JasmineSpec"] = function() {
	jasmine.J.describe("Jasmine",function() {
		jasmine.J.it("should have Env",function() {
			jasmine.J.expect(jasmine.Jasmine.getEnv()).toBeDefined();
		});
		jasmine.J.it("should have TrivialReporter",function() {
			jasmine.J.expect(jasmine.Jasmine.newTrivialReporter()).toBeDefined();
		});
		jasmine.J.it("should have HtmlReporter",function() {
			jasmine.J.expect(jasmine.Jasmine.newHtmlReporter()).toBeDefined();
		});
		jasmine.J.it("should run",function() {
			jasmine.J.runs(function() {
				jasmine.J.expect(true).toBe(true);
			});
		});
		jasmine.J.it("should wait",function() {
			var jasmineIsCool = 0;
			jasmine.J.runs(function() {
				haxe.Timer.delay(function() {
					jasmineIsCool++;
				},250);
			});
			jasmine.J.runs(function() {
				jasmine.J.expect(jasmineIsCool).toEqual(0);
			});
			jasmine.J.waits(500);
			jasmine.J.runs(function() {
				jasmine.J.expect(jasmineIsCool).toEqual(1);
			});
		});
		jasmine.J.it("should wait for",function() {
			var jasmineIsCool = 0;
			jasmine.J.runs(function() {
				haxe.Timer.delay(function() {
					jasmineIsCool++;
				},250);
			});
			jasmine.J.runs(function() {
				jasmine.J.expect(jasmineIsCool).toEqual(0);
			});
			jasmine.J.waitsFor(function() {
				return jasmineIsCool == 1;
			},"jasmineIsCool to equal 1");
			jasmine.J.runs(function() {
				jasmine.J.expect(jasmineIsCool).toEqual(1);
			});
		});
	});
};
jasmineTest.specs.JasmineSpec.__name__ = ["jasmineTest","specs","JasmineSpec"];
jasmineTest.specs.JasmineSpec.prototype = {
	__class__: jasmineTest.specs.JasmineSpec
}
jasmineTest.specs.MatchersSpec = $hxClasses["jasmineTest.specs.MatchersSpec"] = function() {
	jasmine.J.describe("Matchers",function() {
		jasmine.J.it("should have toBe",function() {
			jasmine.J.expect(true).toBe(true);
		});
		jasmine.J.it("should have not",function() {
			jasmine.J.expect(true).not.toBe(false);
		});
		jasmine.J.it("should have toBeDefined",function() {
			jasmine.J.expect(1).toBeDefined();
		});
		jasmine.J.it("should have toBeFalsy",function() {
			jasmine.J.expect(false).toBeFalsy();
		});
		jasmine.J.it("should have toBeGreaterThan",function() {
			jasmine.J.expect(2).toBeGreaterThan(1);
			jasmine.J.expect("b").toBeGreaterThan("a");
		});
		jasmine.J.it("should have toBeLessThan",function() {
			jasmine.J.expect(1).toBeLessThan(2);
			jasmine.J.expect("a").toBeLessThan("b");
		});
		jasmine.J.it("should have toBeNull",function() {
			jasmine.J.expect(null).toBeNull();
		});
		jasmine.J.it("should have toBeTruthy",function() {
			jasmine.J.expect(true).toBeTruthy();
		});
		jasmine.J.it("should have toBeUndefined",function() {
			jasmine.J.expect(eval("undefined")).toBeUndefined();
		});
		jasmine.J.it("should have toContain",function() {
			jasmine.J.expect([0,1,2,3]).toContain(1);
			jasmine.J.expect([0,1,2,3]).not.toContain(4);
		});
		jasmine.J.it("should have toEqual",function() {
			jasmine.J.expect([0]).toEqual([0]);
			jasmine.J.expect([0]).not.toEqual([1]);
		});
		jasmine.J.it("should have toMatch",function() {
			jasmine.J.expect("jasmine is cool").toMatch("jasmine");
		});
		jasmine.J.it("should have toThrow",function() {
			jasmine.J.expect(function() {
				throw "knife";
			}).toThrow("knife");
			jasmine.J.expect(function() {
				throw "knife";
			}).not.toThrow("axe");
		});
	});
};
jasmineTest.specs.MatchersSpec.__name__ = ["jasmineTest","specs","MatchersSpec"];
jasmineTest.specs.MatchersSpec.prototype = {
	__class__: jasmineTest.specs.MatchersSpec
}
jasmineTest.specs.SpySpec = $hxClasses["jasmineTest.specs.SpySpec"] = function() {
	jasmine.J.describe("spy behavior",function() {
		jasmine.J.it("should spy on a static method",function() {
			var spy = jasmine.J.spyOn(jasmineTest.specs.Klass,"staticMethod");
			jasmineTest.specs.Klass.staticMethod();
			jasmine.J.expect(spy).toHaveBeenCalled();
		});
		jasmine.J.it("should spy on an instance method",function() {
			var obj = new jasmineTest.specs.Klass();
			var spy = jasmine.J.spyOn(obj,"method");
			obj.method();
			jasmine.J.expect(spy).toHaveBeenCalled();
		});
		jasmine.J.it("should spy on a callback",function() {
			var spy = jasmine.Jasmine.createSpy("007");
			new jasmineTest.specs.Klass().methodWithCallback(spy);
			jasmine.J.expect(spy).toHaveBeenCalled();
		});
	});
};
jasmineTest.specs.SpySpec.__name__ = ["jasmineTest","specs","SpySpec"];
jasmineTest.specs.SpySpec.prototype = {
	__class__: jasmineTest.specs.SpySpec
}
jasmineTest.specs.Klass = $hxClasses["jasmineTest.specs.Klass"] = function() {
};
jasmineTest.specs.Klass.__name__ = ["jasmineTest","specs","Klass"];
jasmineTest.specs.Klass.staticMethod = function() {
}
jasmineTest.specs.Klass.prototype = {
	method: function() {
	}
	,methodWithCallback: function(cb) {
		cb();
	}
	,__class__: jasmineTest.specs.Klass
}
var js = js || {}
js.Boot = $hxClasses["js.Boot"] = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return undefined;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	Function.prototype["$bind"] = function(o) {
		var f = function() {
			return f.method.apply(f.scope,arguments);
		};
		f.scope = o;
		f.method = this;
		return f;
	};
}
js.Boot.prototype = {
	__class__: js.Boot
}
js.Lib = $hxClasses["js.Lib"] = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.prototype = {
	__class__: js.Lib
}
js.Boot.__res = {}
js.Boot.__init();
{
	String.prototype.__class__ = $hxClasses["String"] = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = $hxClasses["Array"] = Array;
	Array.__name__ = ["Array"];
	var Int = $hxClasses["Int"] = { __name__ : ["Int"]};
	var Dynamic = $hxClasses["Dynamic"] = { __name__ : ["Dynamic"]};
	var Float = $hxClasses["Float"] = Number;
	Float.__name__ = ["Float"];
	var Bool = $hxClasses["Bool"] = Boolean;
	Bool.__ename__ = ["Bool"];
	var Class = $hxClasses["Class"] = { __name__ : ["Class"]};
	var Enum = { };
	var Void = $hxClasses["Void"] = { __ename__ : ["Void"]};
}
{
	if(typeof document != "undefined") js.Lib.document = document;
	if(typeof window != "undefined") {
		js.Lib.window = window;
		js.Lib.window.onerror = function(msg,url,line) {
			var f = js.Lib.onerror;
			if(f == null) return false;
			return f(msg,[url + ":" + line]);
		};
	}
}
js.Lib.onerror = null;
jasmineTest.Main.main()