package jasmine;

class J {

	public inline static function beforeEach_( beforeEachFunction : Void -> Void ) : Void untyped {
		beforeEach(beforeEachFunction);
	}
	
	public inline static function afterEach_( afterEachFunction : Void -> Void ) : Void untyped {
		afterEach(afterEachFunction);
	}
	
	public inline static function describe_( description : String, specDefinitions : Void -> Void ) : Void untyped {
		describe(description, specDefinitions);
	}
	
	public inline static function xdescribe_( description : String, specDefinitions : Void -> Void ) : Void untyped {
		xdescribe(description, specDefinitions);
	}
	
	public inline static function it_( description : String, func : Void -> Void ) : Void untyped {
		it(description, func);
	}

	public inline static function xit_( description : String, func : Void -> Void ) : Void untyped {
		xit(description, func);
	}
	
	public inline static function expect_( actual : Dynamic ) : Matchers untyped {
		return expect(actual);
	}
	
	public inline static function fail_( e : Dynamic ) : Void untyped {
		fail(e);
	}
	
	public inline static function runs_( func : Void -> Void ) : Void untyped {
		runs(func);
	}
	
	public inline static function waits_( timeoutMilliseconds : Int ) : Void untyped {
		waits(timeoutMilliseconds);
	}
	
	public inline static function waitsFor_( func : Void -> Bool, ?message : String, ?timeoutMilliseconds : Int ) : Void untyped {
		waitsFor(func, message, timeoutMilliseconds);
	}
	
}